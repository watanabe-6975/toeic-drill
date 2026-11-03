#!/bin/bash
# スマホ画面サイズ（390x844, 2倍解像度）のスクリーンショットを screenshots/ に撮る。macOS + Google Chrome 用。
# 使い方: python3 -m http.server 8765 を別の端末で動かしてから bash tools/screenshots.sh（別のポートなら PORT=8766 bash tools/screenshots.sh）
set -e
cd "$(dirname "$0")/.."
C="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
P="$(mktemp -d)"
shot() {
  rm -rf "$P"; mkdir -p "$P"
  "$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$P" --window-size=600,844 \
    --force-device-scale-factor=2 --virtual-time-budget=4000 \
    --screenshot="$PWD/screenshots/$1.png" "http://localhost:${PORT:-8765}/tools/frame.html#$2" >/dev/null 2>&1
  sips -c 1688 780 "screenshots/$1.png" >/dev/null   # 中央の 390px（iframe）だけを切り抜く
}
mkdir -p screenshots
shot 1-menu "index.html%23menu"
shot 2-part5 "index.html%23p5%2Frun"
shot 3-reading "index.html%23reading%2Frun"
shot 4-stats "index.html%3Fdemo%3D1%23stats"   # 記録画面はデモデータで表示（保存はされない）
rm -rf "$P"
ls -1 screenshots
