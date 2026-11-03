#!/usr/bin/env python3
"""問題データの機械点検。使い方: python3 tools/check.py
不備があれば一覧を出して終了コード 1。不備0件なら件数の表を出して 0。

点検する内容
- 全体: JSON として読めるか / 同じ問題文の重複
- Part 5: 空所(___)がちょうど1つ / 選択肢が4つで重複なし（大文字小文字・前後の空白を無視）/
  解説に正解の語句が入っているか（答えのずれ）/ 解説が誤りの選択肢すべてに触れているか /
  解説の「正解は〜」が正解と一致するか / 項目タグの形式
- 長文: 1セット2〜5問 / 選択肢4つで重複なし / 根拠の文が本文にそのまま存在するか /
  Part 6 の空所番号が本文にあるか / 解説の有無
- リスニング: Part 2 は選択肢3つで重複なし / Part 3 は選択肢4つ・根拠の文が会話にそのまま存在するか
- 用語: 解説の【用語】がすべて用語集にあるか / 用語集の語がどこかで使われているか
"""
import json
import pathlib
import re
import sys
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
CATS = {"pos": "品詞", "tense": "時制・態", "prep": "前置詞", "conj": "接続詞", "rel": "関係詞", "usage": "語法"}
errors = []


def err(where, msg):
    errors.append(f"{where}: {msg}")


def load(name, var):
    src = (DATA / name).read_text(encoding="utf-8")
    m = re.search(r"window\.%s\s*=\s*(?:\(window\.%s \|\| \[\]\)\.concat\()?" % (var, var), src)
    if not m:
        raise SystemExit(f"{name}: window.{var} が見つかりません")
    body = src[m.end():].strip()
    body = re.sub(r"\)?;\s*$", "", body)
    try:
        return json.loads(body)
    except json.JSONDecodeError as e:
        raise SystemExit(f"{name}: JSON として読めません: {e}")


def norm(s):
    return re.sub(r"\s+", " ", s.strip().lower())


def unique_opts(where, opts, n):
    if len(opts) != n:
        err(where, f"選択肢が{len(opts)}個（{n}個のはず）")
    if any(not isinstance(o, str) or not o.strip() for o in opts):
        err(where, "空の選択肢がある")
        return
    if len({norm(o) for o in opts}) != len(opts):
        err(where, f"選択肢が重複: {opts}")


gloss = load("glossary.js", "GLOSSARY")
used_terms = Counter()


def terms_in(where, text):
    for t in re.findall(r"【([^】]+)】", text):
        used_terms[t] += 1
        if t not in gloss:
            err(where, f"用語集にない用語【{t}】")


# ---------- Part 5 ----------
p5 = []
for f in ["p5_pos.js", "p5_tense.js", "p5_prep.js", "p5_conj.js", "p5_rel.js", "p5_usage.js"]:
    for i, it in enumerate(load(f, "P5")):
        p5.append((f"{f}#{i + 1}", it))
seen_sent = {}
tag_count = Counter()
for where, it in p5:
    if not (isinstance(it, list) and len(it) == 4):
        err(where, "形式が [タグ, 問題文, 選択肢, 解説] ではない")
        continue
    tag, s, opts, ex = it
    if not re.fullmatch(r"[a-z]+/[^/]+", tag) or tag.split("/")[0] not in CATS:
        err(where, f"タグの形式が不正: {tag}")
    tag_count[tag] += 1
    if len(re.findall(r"_{2,}", s)) != 1 or "___" not in s or "____" in s:
        err(where, "空所 ___ がちょうど1つではない")
    if not re.search(r"[.?!]\"?$", s):
        err(where, "問題文が終止符で終わっていない")
    if "  " in s:
        err(where, "問題文に連続した空白")
    key = norm(s)
    if key in seen_sent:
        err(where, f"問題文が {seen_sent[key]} と重複")
    seen_sent[key] = where
    unique_opts(where, opts, 4)
    if len(ex) < 40:
        err(where, "解説が短すぎる")
    exl = ex.lower()
    if opts and norm(opts[0]) not in norm(ex):
        err(where, f"解説に正解「{opts[0]}」が出てこない（答えのずれの疑い）")
    for o in opts[1:]:
        if norm(o) not in norm(ex):
            err(where, f"解説が誤りの選択肢「{o}」に触れていない")
    m = re.search(r"正解は\s*([A-Za-z][A-Za-z' -]*)", ex)
    if m and not norm(m.group(1)).startswith(norm(opts[0])):
        err(where, f"解説の「正解は {m.group(1).strip()}」が正解「{opts[0]}」と違う")
    filled = s.replace("___", opts[0])
    if re.search(r"\b(\w+) \1\b", filled, re.I) and not re.search(r"\b(had had|that that)\b", filled, re.I):
        err(where, f"正解を入れると同じ語が連続する: {filled}")
    terms_in(where, ex)

# ---------- 長文 ----------
sets = [(f"reading_p6.js#{i + 1}", r) for i, r in enumerate(load("reading_p6.js", "READING"))]
for f in ("reading_p7.js", "reading_p7b.js"):
    sets += [(f"{f}#{i + 1}", r) for i, r in enumerate(load(f, "READING"))]
titles = set()
for where, r in sets:
    for k in ("type", "genre", "title", "text", "qs"):
        if k not in r:
            err(where, f"{k} がない")
    if r.get("type") not in ("p6", "p7"):
        err(where, "type は p6 か p7")
    if r["title"] in titles:
        err(where, "タイトルが重複")
    titles.add(r["title"])
    if not 2 <= len(r["qs"]) <= 5:
        err(where, f"設問が{len(r['qs'])}問（2〜5問のはず）")
    for j, q in enumerate(r["qs"]):
        w = f"{where} Q{j + 1}"
        if not (isinstance(q, list) and len(q) in (4, 5)):
            err(w, "形式が [設問, 選択肢, 根拠, 解説(, タグ)] ではない")
            continue
        qs, opts, ev, ex = q[:4]
        unique_opts(w, opts, 4)
        if not ev or ev not in r["text"]:
            err(w, f"根拠の文が本文に見つからない: {ev[:40]}")
        mm = re.match(r"\((\d)\)", qs)
        if mm and not re.search(r"\(%s\) ?_{3,}" % mm.group(1), r["text"]):
            err(w, f"本文に空所 ({mm.group(1)}) がない")
        if r["type"] == "p6" and not mm:
            err(w, "Part 6 の設問は (番号) で始める")
        if len(ex) < 30:
            err(w, "解説が短すぎる")
        if len(q) == 5 and not re.fullmatch(r"[a-z]+/[^/]+", q[4]):
            err(w, f"タグの形式が不正: {q[4]}")
        terms_in(w, ex)
    if r["type"] == "p6":
        gaps = re.findall(r"\((\d)\) ?_{3,}", r["text"])
        if len(gaps) != len(r["qs"]):
            err(where, f"空所の数({len(gaps)})と設問数({len(r['qs'])})が違う")

# ---------- リスニング ----------
lis = load("listening.js", "LISTENING")
p2_seen = set()
for i, q in enumerate(lis["p2"]):
    w = f"listening.js p2#{i + 1}"
    if not (isinstance(q, list) and len(q) == 3):
        err(w, "形式が [問いかけ, 選択肢, 解説] ではない")
        continue
    s, opts, ex = q
    if norm(s) in p2_seen:
        err(w, "問いかけが重複")
    p2_seen.add(norm(s))
    unique_opts(w, opts, 3)
    if len(ex) < 30:
        err(w, "解説が短すぎる")
    terms_in(w, ex)
for i, c in enumerate(lis["p3"]):
    w = f"listening.js p3#{i + 1}"
    script = " ".join(l[1] for l in c["lines"])
    if len(c["qs"]) != 3:
        err(w, "Part 3 は1会話3問")
    if any(l[0] not in ("M", "W", "M2", "W2") for l in c["lines"]):
        err(w, "話者は M / W / M2 / W2")
    for j, q in enumerate(c["qs"]):
        ww = f"{w} Q{j + 1}"
        qs, opts, ev, ex = q
        unique_opts(ww, opts, 4)
        if ev not in script:
            err(ww, f"根拠の文が会話に見つからない: {ev[:40]}")
        if len(ex) < 30:
            err(ww, "解説が短すぎる")
        terms_in(ww, ex)

for t in gloss:
    if used_terms[t] == 0:
        err("glossary.js", f"用語【{t}】がどの解説にも出てこない")

# ---------- 結果 ----------
cat_count = Counter(t.split("/")[0] for t in tag_count.elements())
n_rd_q = sum(len(r["qs"]) for _, r in sets)
n_p3_q = sum(len(c["qs"]) for c in lis["p3"])
print("## 問題データの件数")
print(f"- Part 5: {len(p5)}問")
for c in CATS:
    print(f"  - {CATS[c]}: {cat_count[c]}問（{cat_count[c] * 100 / max(1, len(p5)):.0f}%）")
print(f"- Part 6: {sum(1 for _, r in sets if r['type'] == 'p6')}セット / Part 7: {sum(1 for _, r in sets if r['type'] == 'p7')}セット（計{len(sets)}セット・{n_rd_q}問）")
print(f"- リスニング: Part 2 {len(lis['p2'])}問 + Part 3 {len(lis['p3'])}会話{n_p3_q}問（計{len(lis['p2']) + n_p3_q}問）")
print(f"- 用語集: {len(gloss)}語")
print(f"- 文法の小項目: {len(tag_count)}種類")
print()
print(f"## 点検の結果: 不備 {len(errors)} 件")
for e in errors:
    print("- " + e)
sys.exit(1 if errors else 0)
