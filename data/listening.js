/* リスニング。p2: [問いかけ, [正解, 誤り, 誤り], 解説, [問いかけの訳, 正解の訳]]。p3: {title, lines: [[話者, 発言]], qs: [[設問, [正解, 誤り, 誤り, 誤り], 根拠, 解説]], ja: {lines: [発言の訳], qs: [[設問の訳, 正解の訳]]}} */
window.LISTENING = {
"p2": [
["Where is the nearest post office?", ["It's just around the corner.", "By express mail.", "Yes, I posted it yesterday."], "Where（どこ）には場所で答える。『角を曲がってすぐ』が正解。By express mail は手段（How への答え）。Yes で始まる応答は WH 疑問文には使えず、post（投函する）という似た音のひっかけでもある。", ["いちばん近い郵便局はどこですか？", "角を曲がってすぐです。"]],
["When does the staff meeting start?", ["At ten thirty.", "In the conference room.", "Mostly about the budget."], "When（いつ）には時で答える。At ten thirty が正解。In the conference room は場所（Where への答え）、Mostly about the budget は内容（What への答え）。", ["社員会議は何時に始まりますか？", "10時半です。"]],
["Who's in charge of the new project?", ["Ms. Chen from marketing.", "It's in the top drawer.", "We charge a small fee."], "Who（誰）には人で答える。Ms. Chen from marketing が正解。top drawer は場所。charge は in charge と同じ音を使ったひっかけで、意味は『料金を請求する』。", ["新しいプロジェクトの担当者は誰ですか？", "マーケティング部のチェンさんです。"]],
["Why was the flight delayed?", ["Because of the heavy snow.", "Gate twelve, I think.", "About two hours ago."], "Why（なぜ）には理由で答える。Because of the heavy snow が正解。Gate twelve は場所、About two hours ago は時で、理由になっていない。", ["その便はなぜ遅れたのですか？", "大雪のためです。"]],
["How long will the repairs take?", ["Probably about a week.", "Yes, they're very long.", "The repair shop on Main Street."], "How long（どのくらいの期間）には期間で答える。Probably about a week が正解。Yes は WH 疑問文に使えず、long の繰り返しのひっかけ。The repair shop は repairs と似た語を使ったひっかけで、場所を答えている。", ["修理にはどのくらいかかりますか？", "たぶん1週間ほどです。"]],
["Would you like some help with those boxes?", ["Thanks, that would be great.", "They're made of cardboard.", "I helped him last week."], "Would you like ...? は申し出。『ありがとう、助かります』と受けるのが自然。素材の説明は申し出への返事にならない。helped は help の繰り返しで、過去の話をしている。", ["その箱を運ぶのを手伝いましょうか？", "ありがとう、助かります。"]],
["Can you send me the sales figures by Friday?", ["Sure, I'll have them ready.", "Sales were up last month.", "No, it's on Thursday."], "Can you ...? は依頼。『もちろん、用意しておきます』が正解。Sales were up は sales の繰り返しで依頼に答えていない。No, it's on Thursday は曜日のひっかけで、何が木曜なのか分からない。", ["金曜日までに売上の数字を送ってもらえますか？", "もちろん、用意しておきます。"]],
["Isn't the printer working again?", ["No, the technician is coming this afternoon.", "I usually work from home.", "Print two copies, please."], "否定疑問文『また動いていないの？』には、動いていないなら No で答え、対応を伝えるのが自然。work / print は問いかけの語に似せたひっかけ。", ["またプリンターが動いていないんですか？", "ええ、技術者が今日の午後に来ます。"]],
["Should we take a taxi or the subway to the airport?", ["The subway is faster at this hour.", "Yes, we should.", "The airport is very large."], "A or B の選択疑問文には、どちらかを選ぶか別案を出す。『この時間は地下鉄が速い』が正解。Yes / No では答えられない。空港の大きさは選択に答えていない。", ["空港へはタクシーと地下鉄、どちらで行きましょうか？", "この時間なら地下鉄の方が速いです。"]],
["I can't find the client's phone number.", ["It's in the shared contact list.", "I'll call you back later.", "The phone is new."], "平叙文の困りごとには、解決策を返すのが自然。『共有の連絡先リストにある』が正解。call / phone は問いかけの語からの連想を使ったひっかけ。", ["顧客の電話番号が見つかりません。", "共有の連絡先リストに載っていますよ。"]],
["Which hotel are you staying at in Boston?", ["The one near the harbor.", "For three nights.", "Yes, I stayed there."], "Which（どの）には選んだものを答える。The one near the harbor（港の近くのところ）が正解。For three nights は期間（How long）。Yes は WH 疑問文に使えない。", ["ボストンではどのホテルに泊まりますか？", "港の近くのところです。"]],
["Have you finished the report yet?", ["I'm almost done.", "It was reported in the news.", "Yes, the finish line."], "Have you ...? には Yes / No、または『もうすぐ終わる』のような答え方が自然。reported は report と同じ語を使ったひっかけ。finish line は finish の繰り返しで意味が合わない。", ["報告書はもう終わりましたか？", "もうすぐ終わります。"]],
["How much does the parking cost?", ["Five dollars an hour.", "It's in the basement.", "Not very much traffic."], "How much（いくら）には金額で答える。Five dollars an hour が正解。It's in the basement は場所。Not very much traffic は much の繰り返しで、料金に答えていない。", ["駐車料金はいくらですか？", "1時間5ドルです。"]],
["Where should I put these documents?", ["On my desk, please.", "At three o'clock.", "Yes, they're important."], "Where には場所で答える。On my desk, please が正解。At three o'clock は時、Yes は WH 疑問文に使えない。", ["この書類はどこに置けばいいですか？", "私の机の上にお願いします。"]],
["Why don't we order lunch for the meeting?", ["That's a good idea.", "Because I was hungry.", "The meeting was canceled yesterday."], "Why don't we ...? は『〜しませんか』という提案で、理由を聞いているのではない。『いい考えだ』が正解。Because ... は Why を理由の質問と取り違えたひっかけ。The meeting was canceled yesterday は昨日中止された話で、これからの会議の昼食とつながらない。", ["会議用に昼食を注文しませんか？", "いい考えですね。"]],
["Who should I talk to about my vacation request?", ["Your department manager.", "To Hawaii, I hope.", "Last summer."], "Who には人で答える。Your department manager が正解。To Hawaii は行き先、Last summer は時で、vacation からの連想を使ったひっかけ。", ["休暇の申請については誰に話せばいいですか？", "あなたの部署の部長です。"]],
["The new software is much easier to use.", ["Yes, I like it a lot.", "Use the side entrance.", "It's not for sale."], "平叙文の感想には、同意や意見を返すのが自然。『ええ、とても気に入っている』が正解。use の繰り返しや soft / sale の連想は意味がつながらない。", ["新しいソフトはずっと使いやすいですね。", "ええ、とても気に入っています。"]],
["Do you know when the new manager will start?", ["Next Monday, I believe.", "Yes, I know him.", "She manages the store."], "Do you know when ...? は実質『いつか』を聞いている。Next Monday, I believe が正解。Yes, I know him は Do you know だけに反応したひっかけ。manages は manager に似せたひっかけ。", ["新しい部長がいつから来るか知っていますか？", "来週の月曜日だと思います。"]],
["Could you show me how to use the copier?", ["Of course, it's quite simple.", "I made ten copies.", "It was a great show."], "Could you ...? は依頼。『もちろん、簡単ですよ』が正解。copies は copier に似た音、show は同じ語を別の意味（ショー）で使ったひっかけ。", ["コピー機の使い方を教えてもらえますか？", "もちろん、とても簡単ですよ。"]],
["What time does the store close today?", ["At nine, as usual.", "It's close to the station.", "Clothes are on the second floor."], "What time には時刻で答える。At nine, as usual が正解。close（近い）は同じつづりで意味の違う語のひっかけ。Clothes は close と似た音のひっかけ。", ["今日、店は何時に閉まりますか？", "いつもどおり9時です。"]],
["Aren't you attending the conference in Seoul?", ["No, my manager is going instead.", "Yes, the soul music.", "It's a long conference table."], "否定疑問文『行かないの？』には、行かないなら No で答え事情を伝える。『いいえ、代わりに上司が行く』が正解。soul は Seoul と同じ音のひっかけ。conference table は conference の繰り返し。", ["ソウルの会議には出ないんですか？", "ええ、代わりに部長が行きます。"]],
["How did you hear about our company?", ["A friend recommended it.", "I can hear you clearly.", "About fifty employees."], "How（どうやって）知ったかには、きっかけを答える。A friend recommended it が正解。hear の繰り返しと、company からの連想（社員数）はひっかけ。", ["当社のことはどうやって知りましたか？", "友人にすすめられました。"]],
["Let's review the contract before signing it.", ["Good idea. I'll print a copy.", "The sign is on the door.", "He signed up yesterday."], "Let's ... は提案。『いいですね、コピーを印刷します』が正解。sign / signed は signing に似せたひっかけで、意味がつながらない。", ["署名する前に契約書を見直しましょう。", "いいですね。コピーを印刷します。"]],
["Is this seat taken?", ["No, please go ahead.", "Take the second exit.", "It's an expensive seat."], "『この席は空いていますか（取られていますか）』。空いていれば No で答え『どうぞ』と言う。take の繰り返し、seat の繰り返しはひっかけ。", ["この席は空いていますか？", "ええ、どうぞ。"]],
["When will the new catalog be available?", ["It should be out next week.", "At the front desk.", "It's a very large catalog."], "When には時で答える。It should be out next week（来週出るはず）が正解。At the front desk は場所。catalog の繰り返しはひっかけ。", ["新しいカタログはいつ手に入りますか？", "来週出るはずです。"]],
["Who left these files on the table?", ["I think Mr. Rossi did.", "Turn left at the corner.", "On the table by the window."], "Who には人で答える。I think Mr. Rossi did が正解。left（左）は left（置いていった）と同じ形のひっかけ。On the table by the window は場所で、問いかけの table を繰り返している。", ["このファイルをテーブルに置いていったのは誰ですか？", "ロッシさんだと思います。"]],
["Why is the office so quiet today?", ["Most people are at the trade show.", "Yes, it's quite expensive.", "Please keep your voice down."], "Why には理由で答える。『ほとんどの人が展示会に行っている』が正解。quite は quiet に似た音のひっかけ。keep your voice down は静かさからの連想で、理由になっていない。", ["今日はなぜ事務所がこんなに静かなのですか？", "ほとんどの人が展示会に行っています。"]],
["Would you prefer a window or an aisle seat?", ["An aisle seat, please.", "Yes, I would.", "The window is open."], "A or B の選択疑問文。An aisle seat, please と選ぶのが自然。Yes は選択疑問文に答えられない。window の繰り返しはひっかけ。", ["窓側と通路側の席、どちらがよろしいですか？", "通路側の席をお願いします。"]],
["Has the shipment from Germany arrived?", ["It's expected tomorrow morning.", "I've never been to Germany.", "The ship is very large."], "Has ... arrived? に対し『明日の朝の予定』と、まだ着いていないことを伝える答え方。Germany の繰り返し、ship（船）は shipment に似せたひっかけ。", ["ドイツからの荷物は届きましたか？", "明日の朝の予定です。"]],
["You've worked here for a long time, haven't you?", ["Almost fifteen years now.", "It takes a long time.", "I'll work on it tomorrow."], "付加疑問文『長く働いていますよね？』には、期間を答えるのが自然。Almost fifteen years now が正解。long time の繰り返し、work on it は work の別の意味のひっかけ。", ["ここで長く働いていますよね？", "もうすぐ15年になります。"]],
["How often do you visit the Tokyo office?", ["About twice a month.", "It's a big office.", "By train, usually."], "How often（どのくらいの頻度）には回数で答える。About twice a month が正解。office の繰り返し、By train は手段（How への答え）でひっかけ。", ["東京事務所にはどのくらいの頻度で行きますか？", "月に2回ほどです。"]],
["I'd like to make a reservation for four people.", ["For what time, please?", "Four o'clock is fine.", "I made it myself."], "レストランでの予約の申し出に対し、店員が時間を尋ねる流れが自然。For what time, please? が正解。Four o'clock は four の音のひっかけで、人数の話を時刻と取り違えている。made は make の過去形のひっかけ。", ["4名で予約をしたいのですが。", "何時のご予約でしょうか？"]],
["Where can I get a copy of the schedule?", ["It's posted on the company Web site.", "Three copies, please.", "Yes, it's on schedule."], "Where には場所で答える。『会社のサイトに載っている』が正解。copies は copy の繰り返し、on schedule（予定どおり）は schedule の繰り返しで、ひっかけ。", ["予定表のコピーはどこでもらえますか？", "会社のウェブサイトに載っています。"]],
["Why don't you take the afternoon off?", ["Thanks, but I have a deadline.", "Because I was sick.", "Turn it off, please."], "Why don't you ...? は『〜したら？』という提案。『ありがとう、でも締め切りがある』と断るのが自然。Because ... は理由の質問と取り違えたひっかけ。off の繰り返しもひっかけ。", ["午後は休みを取ったらどうですか？", "ありがとう、でも締め切りがあるんです。"]],
["Did you get my e-mail about the budget?", ["Yes, I'll reply this afternoon.", "The mail carrier comes at noon.", "It's within our budget."], "Did you ...? には Yes / No で答え、続けて対応を伝える。『はい、午後に返信します』が正解。mail carrier は e-mail からの連想、budget の繰り返しはひっかけ。", ["予算についての私のメールは届きましたか？", "はい、今日の午後に返信します。"]],
["The elevator is out of order again.", ["I'll call the maintenance department.", "In alphabetical order.", "Let's order more paper."], "平叙文の問題の報告には、対応を返すのが自然。『保守部門に電話します』が正解。order（順番・注文）は out of order と同じ語を別の意味で使ったひっかけ。", ["またエレベーターが故障しています。", "保守部門に電話します。"]],
["Which of these designs do you like best?", ["The blue one on the left.", "Yes, I like it.", "She's a designer."], "Which には選んだものを答える。The blue one on the left が正解。Yes は WH 疑問文に使えない。designer は designs に似せたひっかけ。", ["これらのデザインの中でどれがいちばん好きですか？", "左の青いものです。"]],
["Weren't the brochures supposed to arrive today?", ["The printer said there was a delay.", "Yes, I'm supposed to.", "Brochures are on sale."], "否定疑問文『今日届くはずじゃなかった？』に対し、遅れの事情を伝える答え方。The printer said there was a delay が正解。supposed / brochures の繰り返しはひっかけ。", ["パンフレットは今日届くはずではなかったですか？", "印刷所が遅れていると言っていました。"]],
["Can I pay by credit card?", ["I'm afraid we only accept cash.", "Yes, I paid yesterday.", "It's a birthday card."], "Can I ...? は許可を求める質問。『あいにく現金のみです』が正解。paid は pay の過去形で、過去の話をしている。card の繰り返しはひっかけ。", ["クレジットカードで払えますか？", "あいにく現金のみとなっております。"]],
["Who's going to lead the training session?", ["Ms. Watanabe from human resources.", "The session lasts two hours.", "It's a training manual."], "Who には人で答える。Ms. Watanabe from human resources が正解。session / training の繰り返しはひっかけ。", ["研修を担当するのは誰ですか？", "人事部のワタナベさんです。"]],
["How about meeting at the café downstairs?", ["Sure, that works for me.", "About three o'clock.", "The coffee was good."], "How about ...? は提案。『いいよ、それで大丈夫』が正解。About three o'clock は about の音につられたひっかけで、場所の提案に答えていない。coffee は café からの連想。", ["下のカフェで会うのはどうですか？", "いいですよ、それで大丈夫です。"]]
],
"p3": [
{
 "title": "会議室の予約",
 "lines": [
  [
   "W",
   "Hi, Jason. I'm trying to book Conference Room A for Thursday afternoon, but the system says it's already reserved."
  ],
  [
   "M",
   "Oh, that's the sales team. They're interviewing job candidates all afternoon."
  ],
  [
   "W",
   "I see. I need a room for about ten people to review the new product designs."
  ],
  [
   "M",
   "Room C on the third floor is free, and it has a large screen. Why don't you try that one?"
  ],
  [
   "W",
   "Great, I'll reserve it now. Thanks."
  ]
 ],
 "qs": [
  [
   "What problem does the woman have?",
   [
    "A room she wants is unavailable.",
    "Her computer is not working.",
    "She missed a job interview.",
    "A meeting was canceled."
   ],
   "the system says it's already reserved",
   "女性は会議室Aを予約しようとしたが『すでに予約済み』と表示された。使いたい部屋が使えないという問題。パソコンの故障・面接に遅れた・会議の中止ではない。"
  ],
  [
   "What is the sales team doing on Thursday?",
   [
    "Interviewing applicants",
    "Reviewing product designs",
    "Visiting a client",
    "Moving to the third floor"
   ],
   "They're interviewing job candidates all afternoon.",
   "営業チームは木曜の午後『応募者の面接』をする。製品デザインを見直すのは女性の側。顧客訪問や引っ越しの話はない。"
  ],
  [
   "What does the man suggest?",
   [
    "Using a different room",
    "Changing the meeting date",
    "Inviting fewer people",
    "Asking the sales team to move"
   ],
   "Why don't you try that one?",
   "男性は『3階の会議室Cを使ったら？』と提案している。日程の変更・人数を減らす・営業チームに移ってもらう、とは言っていない。"
  ]
 ],
 "ja": {
  "lines": [
   "こんにちは、ジェイソン。木曜日の午後に会議室Aを予約しようとしているんだけど、システムにはもう予約済みと出るの。",
   "ああ、それは営業チームだよ。午後ずっと応募者の面接をするんだ。",
   "そうなのね。新しい製品デザインを見直すのに、10人くらい入れる部屋が必要なの。",
   "3階の会議室Cが空いていて、大きなスクリーンもあるよ。そこはどう？",
   "いいわね、今予約するわ。ありがとう。"
  ],
  "qs": [
   [
    "女性はどんな問題を抱えているか。",
    "使いたい部屋が使えない。"
   ],
   [
    "営業チームは木曜日に何をするか。",
    "応募者の面接をする"
   ],
   [
    "男性は何を提案しているか。",
    "別の部屋を使うこと"
   ]
  ]
 }
},
{
 "title": "注文の配送",
 "lines": [
  [
   "M",
   "Good morning, this is Harbor Office Supply. How can I help you?"
  ],
  [
   "W",
   "Hi, I placed an order for printer paper on Monday, and it was supposed to arrive yesterday, but it hasn't come yet."
  ],
  [
   "M",
   "I'm sorry about that. Let me check. Yes, I see the problem. Your order was sent to your old address on Pine Street."
  ],
  [
   "W",
   "Oh no. We moved to Elm Avenue last month."
  ],
  [
   "M",
   "I'll update your address and send a new shipment today by express delivery. There won't be any charge for that."
  ]
 ],
 "qs": [
  [
   "Why is the woman calling?",
   [
    "An order has not arrived.",
    "She wants to cancel an order.",
    "She was charged twice.",
    "She needs a different product."
   ],
   "it was supposed to arrive yesterday, but it hasn't come yet",
   "女性は『昨日届くはずの注文がまだ来ない』と電話している。キャンセル・二重請求・別の商品の希望ではない。"
  ],
  [
   "What caused the problem?",
   [
    "The order went to an old address.",
    "The product was out of stock.",
    "The order was placed incorrectly.",
    "The delivery truck broke down."
   ],
   "Your order was sent to your old address on Pine Street.",
   "注文が『以前の住所（Pine Street）』に送られていた。在庫切れ・注文の誤り・トラックの故障ではない。"
  ],
  [
   "What does the man offer to do?",
   [
    "Send the items quickly at no cost",
    "Give the woman a discount on her next order",
    "Pick up the order from Pine Street",
    "Call the woman tomorrow"
   ],
   "There won't be any charge for that.",
   "男性は『今日、速達で新しく送る。料金はかからない』と言っている。速く・無料で送る、と言い換えた選択肢が正解。次回の割引・回収・明日の電話は言っていない。"
  ]
 ],
 "ja": {
  "lines": [
   "おはようございます、ハーバー事務用品です。ご用件をどうぞ。",
   "こんにちは。月曜日にプリンター用紙を注文して、昨日届くはずだったのですが、まだ来ていないんです。",
   "申し訳ございません。確認いたします。ああ、原因がわかりました。ご注文が、パイン通りの以前のご住所に送られていました。",
   "まあ。うちは先月エルム通りに引っ越したんです。",
   "ご住所を更新して、今日、速達で新しくお送りします。その料金はいただきません。"
  ],
  "qs": [
   [
    "女性はなぜ電話しているのか。",
    "注文した物が届いていない。"
   ],
   [
    "問題の原因は何か。",
    "注文が以前の住所に送られた。"
   ],
   [
    "男性は何をすると申し出ているか。",
    "無料で品物を急いで送る"
   ]
  ]
 }
},
{
 "title": "新しい同僚の歓迎会",
 "lines": [
  [
   "W",
   "Kevin, have you heard? Maria Lopez from the Chicago branch is transferring to our team next month."
  ],
  [
   "M",
   "That's great news. She has a lot of experience with international clients."
  ],
  [
   "W",
   "I was thinking we could have a welcome lunch for her on her first day."
  ],
  [
   "M",
   "Good idea. That new Italian restaurant across the street can take large groups."
  ],
  [
   "W",
   "Perfect. Could you call them and make a reservation for twelve people? I'll send an invitation to the team."
  ]
 ],
 "qs": [
  [
   "What are the speakers mainly discussing?",
   [
    "A colleague who is joining their team",
    "A trip to Chicago",
    "A new international client",
    "A restaurant review"
   ],
   "Maria Lopez from the Chicago branch is transferring to our team next month",
   "会話の中心は『シカゴ支店から来月異動してくる同僚』とその歓迎会。シカゴへの出張・新規顧客・店の評判の話ではない。"
  ],
  [
   "What does the man say about the restaurant?",
   [
    "It can accommodate large groups.",
    "It is very expensive.",
    "It recently changed its menu.",
    "It is closed on weekdays."
   ],
   "That new Italian restaurant across the street can take large groups.",
   "『大人数を受け入れられる』と言っている。can take large groups を can accommodate large groups と言い換えている。値段・メニュー・定休日の話はない。"
  ],
  [
   "What will the woman do next?",
   [
    "Send an invitation",
    "Call the restaurant",
    "Contact the Chicago branch",
    "Prepare a presentation"
   ],
   "I'll send an invitation to the team.",
   "女性は『チームに招待を送る』と言っている。店に電話するのは男性の役目。シカゴ支店への連絡・プレゼンの準備は出てこない。"
  ]
 ],
 "ja": {
  "lines": [
   "ケビン、聞いた？シカゴ支店のマリア・ロペスさんが来月うちのチームに異動してくるの。",
   "それはいい知らせだね。彼女は海外の顧客の担当経験が豊富だから。",
   "初日に歓迎ランチをしたらどうかと思って。",
   "いい考えだね。通りの向こうの新しいイタリアンレストランなら、大人数でも大丈夫だよ。",
   "完璧ね。お店に電話して12人で予約してもらえる？私はチームに招待を送るわ。"
  ],
  "qs": [
   [
    "話し手たちは主に何について話しているか。",
    "チームに加わる同僚"
   ],
   [
    "男性はレストランについて何と言っているか。",
    "大人数を受け入れられる。"
   ],
   [
    "女性は次に何をするか。",
    "招待を送る"
   ]
  ]
 }
},
{
 "title": "ソフトウェアの研修",
 "lines": [
  [
   "M",
   "Excuse me, Ms. Patel. I heard there's a training session on the new accounting software this week."
  ],
  [
   "W",
   "Yes, it's on Wednesday from two to four in the training room."
  ],
  [
   "M",
   "Unfortunately, I have a client visit then. Will there be another session?"
  ],
  [
   "W",
   "There's one more next Tuesday morning. Or, if you prefer, you can watch a recording of Wednesday's session online."
  ],
  [
   "M",
   "I'd rather attend in person so I can ask questions. Please sign me up for Tuesday."
  ]
 ],
 "qs": [
  [
   "What is the training session about?",
   [
    "New accounting software",
    "Customer service skills",
    "Office safety rules",
    "A sales strategy"
   ],
   "a training session on the new accounting software",
   "研修は『新しい会計ソフト』について。接客・安全規則・営業戦略の研修ではない。"
  ],
  [
   "Why can't the man attend on Wednesday?",
   [
    "He will be meeting a client.",
    "He will be on vacation.",
    "He has another training session.",
    "He will be working from home."
   ],
   "I have a client visit then.",
   "水曜は『顧客訪問がある』ので出られない。休暇・別の研修・在宅勤務ではない。"
  ],
  [
   "Why does the man choose the Tuesday session?",
   [
    "He wants to ask questions directly.",
    "It is shorter.",
    "It is held in the afternoon.",
    "His manager told him to attend."
   ],
   "I'd rather attend in person so I can ask questions.",
   "『質問できるように直接出たい』から火曜を選んだ。録画では質問できないため。時間の長さ・午後かどうか（火曜は朝）・上司の指示は理由ではない。"
  ]
 ],
 "ja": {
  "lines": [
   "すみません、パテルさん。今週、新しい会計ソフトの研修があると聞いたのですが。",
   "ええ、水曜日の2時から4時まで、研修室であります。",
   "あいにく、その時間は顧客訪問があるんです。ほかの回はありますか？",
   "来週の火曜日の朝にもう1回あります。または、よければ水曜日の回の録画をオンラインで見ることもできますよ。",
   "質問したいので、直接出席したいです。火曜日に申し込んでください。"
  ],
  "qs": [
   [
    "研修は何についてのものか。",
    "新しい会計ソフト"
   ],
   [
    "男性はなぜ水曜日に出られないのか。",
    "顧客に会う予定がある。"
   ],
   [
    "男性はなぜ火曜日の回を選ぶのか。",
    "直接質問したいから。"
   ]
  ]
 }
},
{
 "title": "ホテルのチェックイン",
 "lines": [
  [
   "M",
   "Good evening. I have a reservation under the name Daniel Kim."
  ],
  [
   "W",
   "Welcome, Mr. Kim. I see you're staying with us for three nights. Unfortunately, the room with an ocean view you requested isn't ready yet."
  ],
  [
   "M",
   "Oh, that's a shame. How long will it take?"
  ],
  [
   "W",
   "About an hour. In the meantime, you're welcome to have a complimentary drink at our rooftop bar."
  ],
  [
   "M",
   "That sounds nice. Could you also keep my suitcase at the front desk until the room is ready?"
  ]
 ],
 "qs": [
  [
   "Where most likely are the speakers?",
   [
    "At a hotel",
    "At an airport",
    "At a restaurant",
    "At a travel agency"
   ],
   "I see you're staying with us for three nights.",
   "予約の名前を伝え、『3泊のご滞在ですね』と言われているので、ホテルのフロントと考えられる。空港・レストラン・旅行代理店の会話ではない。"
  ],
  [
   "What problem does the woman mention?",
   [
    "A room is not ready.",
    "A reservation was lost.",
    "The bar is closed.",
    "The hotel is fully booked."
   ],
   "the room with an ocean view you requested isn't ready yet",
   "希望していた海の見える部屋が『まだ準備できていない』。予約が消えた・バーが閉まっている・満室という話ではない。"
  ],
  [
   "What does the man ask the woman to do?",
   [
    "Store his luggage",
    "Change his room",
    "Call a taxi",
    "Give him a discount"
   ],
   "Could you also keep my suitcase at the front desk until the room is ready?",
   "男性は『部屋の準備ができるまでスーツケースを預かって』と頼んでいる。keep my suitcase を Store his luggage と言い換えている。部屋の変更・タクシー・割引は頼んでいない。"
  ]
 ],
 "ja": {
  "lines": [
   "こんばんは。ダニエル・キムの名前で予約しています。",
   "ようこそ、キム様。3泊のご滞在ですね。あいにく、ご希望の海の見えるお部屋はまだ準備ができておりません。",
   "ああ、残念です。どのくらいかかりますか？",
   "1時間ほどです。その間、屋上のバーで無料のお飲み物をどうぞ。",
   "それはいいですね。部屋の準備ができるまで、スーツケースをフロントで預かってもらえますか？"
  ],
  "qs": [
   [
    "話し手たちはどこにいると考えられるか。",
    "ホテル"
   ],
   [
    "女性はどんな問題を伝えているか。",
    "部屋の準備ができていない。"
   ],
   [
    "男性は女性に何を頼んでいるか。",
    "荷物を預かること"
   ]
  ]
 }
},
{
 "title": "店舗の改装",
 "lines": [
  [
   "W",
   "Mr. Brown, the contractor just called. The new floor for the store won't be installed until next Friday."
  ],
  [
   "M",
   "Next Friday? We were planning to reopen this Saturday."
  ],
  [
   "W",
   "I know. They said the materials were delayed at the factory."
  ],
  [
   "M",
   "Well, we can't open without the new floor. Let's post a notice on our Web site and on the front door explaining the delay."
  ],
  [
   "W",
   "All right. I'll also e-mail the customers who signed up for our reopening sale."
  ]
 ],
 "qs": [
  [
   "What are the speakers preparing for?",
   [
    "The reopening of a store",
    "The opening of a factory",
    "A company anniversary",
    "A product launch"
   ],
   "We were planning to reopen this Saturday.",
   "改装中の店を『今週土曜に再開する予定だった』。店の再オープンの準備をしている。工場の開業・創立記念・製品発売ではない。"
  ],
  [
   "Why has the work been delayed?",
   [
    "Materials did not arrive on time.",
    "The contractor is sick.",
    "The store's budget was cut.",
    "The weather has been bad."
   ],
   "the materials were delayed at the factory",
   "『工場で資材が遅れた』のが原因。業者の病気・予算の削減・悪天候ではない。"
  ],
  [
   "What will the woman do?",
   [
    "E-mail some customers",
    "Call the contractor again",
    "Visit the factory",
    "Change the store's prices"
   ],
   "I'll also e-mail the customers who signed up for our reopening sale.",
   "女性は『再開セールに登録した客にメールする』と言っている。業者への再度の電話・工場訪問・値段の変更は言っていない。"
  ]
 ],
 "ja": {
  "lines": [
   "ブラウンさん、さっき業者から電話がありました。店の新しい床は、来週の金曜日まで張れないそうです。",
   "来週の金曜日？今週の土曜日に再開する予定だったのに。",
   "わかっています。工場で資材が遅れたと言っていました。",
   "まあ、新しい床がないと開店できないからね。ウェブサイトと正面のドアに、遅れを説明するお知らせを出そう。",
   "わかりました。再開セールに登録したお客様にもメールします。"
  ],
  "qs": [
   [
    "話し手たちは何の準備をしているか。",
    "店の再開"
   ],
   [
    "作業はなぜ遅れているのか。",
    "資材が予定どおり届かなかった。"
   ],
   [
    "女性は何をするか。",
    "客にメールする"
   ]
  ]
 }
},
{
 "title": "出張の予定",
 "lines": [
  [
   "M",
   "Lisa, are you still going to the trade fair in Frankfurt next week?"
  ],
  [
   "W",
   "Yes, I'm leaving on Monday. Why do you ask?"
  ],
  [
   "M",
   "Our client in Frankfurt, Mr. Weber, wants to discuss the new contract in person. Would you have time to meet him?"
  ],
  [
   "W",
   "I'm busy at the fair until Wednesday, but Thursday morning should be fine."
  ],
  [
   "M",
   "Great. I'll let him know and send you his contact details."
  ]
 ],
 "qs": [
  [
   "Why is the woman going to Frankfurt?",
   [
    "To attend a trade fair",
    "To open a new office",
    "To interview job applicants",
    "To take a vacation"
   ],
   "are you still going to the trade fair in Frankfurt next week?",
   "女性はフランクフルトの『見本市』に行く。新事務所の開設・採用面接・休暇ではない。"
  ],
  [
   "What does the man ask the woman to do?",
   [
    "Meet with a client",
    "Sign a contract",
    "Change her travel dates",
    "Give a presentation"
   ],
   "Would you have time to meet him?",
   "男性は『顧客の Weber 氏に会う時間はあるか』と頼んでいる。契約は話し合うだけで、署名を頼んではいない。日程変更・プレゼンも頼んでいない。"
  ],
  [
   "When will the woman most likely meet Mr. Weber?",
   [
    "On Thursday",
    "On Monday",
    "On Tuesday",
    "On Wednesday"
   ],
   "Thursday morning should be fine",
   "水曜までは見本市で忙しく、『木曜の朝なら大丈夫』と言っている。月曜は出発の日、水曜までは忙しい。曜日のひっかけに注意。"
  ]
 ],
 "ja": {
  "lines": [
   "リサ、来週のフランクフルトの見本市にはやっぱり行くの？",
   "ええ、月曜日に出発します。どうして？",
   "フランクフルトの顧客のウェーバーさんが、新しい契約について直接話したいそうなんだ。会う時間はあるかな？",
   "水曜日までは見本市で忙しいですが、木曜日の朝なら大丈夫だと思います。",
   "よかった。彼に伝えて、連絡先を送るよ。"
  ],
  "qs": [
   [
    "女性はなぜフランクフルトに行くのか。",
    "見本市に参加するため"
   ],
   [
    "男性は女性に何を頼んでいるか。",
    "顧客と会うこと"
   ],
   [
    "女性はいつウェーバーさんに会うと考えられるか。",
    "木曜日"
   ]
  ]
 }
},
{
 "title": "コピー機の故障",
 "lines": [
  [
   "W",
   "Excuse me, do you know if the copier on this floor is working? It keeps showing an error message."
  ],
  [
   "M",
   "It broke down this morning. A technician is coming at three o'clock to fix it."
  ],
  [
   "W",
   "That's too late. I need to make 50 copies of a handout for a meeting at one."
  ],
  [
   "M",
   "You can use the copier in the marketing department on the second floor. Just tell them I sent you."
  ],
  [
   "W",
   "Thanks. I'll head down there now."
  ]
 ],
 "qs": [
  [
   "What problem does the woman mention?",
   [
    "A machine is not working.",
    "A meeting was moved.",
    "She lost a handout.",
    "She cannot find the marketing department."
   ],
   "It keeps showing an error message.",
   "コピー機が『エラーを表示し続ける』＝機械が動かない。会議の移動・資料の紛失・部署が見つからないという話ではない。"
  ],
  [
   "Why does the woman say, \"That's too late\"?",
   [
    "She needs copies before one o'clock.",
    "The technician is always late.",
    "The meeting has already started.",
    "She has to leave the office at three."
   ],
   "I need to make 50 copies of a handout for a meeting at one.",
   "修理は3時だが、女性は『1時の会議用に50部コピーが必要』。だから3時では遅すぎる、という意味。技術者がいつも遅れる・会議がもう始まった・3時に退社する、とは言っていない。"
  ],
  [
   "What does the man suggest?",
   [
    "Using a copier on another floor",
    "Calling the technician",
    "Postponing the meeting",
    "Printing fewer copies"
   ],
   "You can use the copier in the marketing department on the second floor.",
   "男性は『2階のマーケティング部のコピー機を使える』と提案している。技術者への電話・会議の延期・部数を減らす、とは言っていない。"
  ]
 ],
 "ja": {
  "lines": [
   "すみません、この階のコピー機は動いていますか？エラーメッセージが出続けるんです。",
   "今朝壊れたんです。3時に技術者が直しに来ます。",
   "それでは遅すぎます。1時の会議用に配布資料を50部コピーしないといけないんです。",
   "2階のマーケティング部のコピー機を使えますよ。私に言われたと伝えてください。",
   "ありがとうございます。今から行きます。"
  ],
  "qs": [
   [
    "女性はどんな問題を伝えているか。",
    "機械が動かない。"
   ],
   [
    "女性はなぜ「それでは遅すぎます」と言っているのか。",
    "1時より前にコピーが必要だから。"
   ],
   [
    "男性は何を提案しているか。",
    "別の階のコピー機を使うこと"
   ]
  ]
 }
}
]
};
