/* Part 7 読解（その1）。qs: [設問, [正解, 誤り, 誤り, 誤り], 根拠（本文にそのまま含まれる文字列）, 解説, 項目タグ]。ja: {text: 本文の訳（空所は正解で埋める）, qs: [[設問の訳, 正解の訳]]} */
window.READING = (window.READING || []).concat([
{
 "type": "p7",
 "genre": "メール",
 "title": "出張の予定変更",
 "text": "From: Hannah Weiss\nTo: Marco Bellini\nSubject: Change to Thursday's visit\n\nHi Marco,\n\nI'm afraid I need to change the plans for my visit to your Milan office. My flight on Wednesday evening was canceled, and the earliest flight I could book arrives on Thursday at 11:00 A.M. That means I won't be able to join the morning meeting with your design team.\n\nCould we move the meeting to 2:00 P.M.? If that doesn't work for everyone, I would be happy to join by video call in the morning instead. I will still be able to tour the factory on Friday as planned.\n\nPlease let me know what you prefer.\n\nHannah",
 "qs": [
  [
   "Why did Ms. Weiss write the e-mail?",
   [
    "To request a change to a meeting time",
    "To cancel her trip to Milan",
    "To ask for a tour of the design studio",
    "To recommend a new travel agency"
   ],
   "Could we move the meeting to 2:00 P.M.?",
   "メールの目的は『会議を午後2時に移せないか』という依頼。旅行自体は続ける（金曜の工場見学も予定どおり）ので cancel ではない。デザインスタジオの見学や旅行代理店の話は出てこない。目的を問う設問は、依頼・お願いの文（Could we ...?）が根拠になりやすい。",
   "rd/目的"
  ],
  [
   "What is indicated about Ms. Weiss's flight?",
   [
    "It was canceled.",
    "It was delayed by two hours.",
    "It arrives on Wednesday.",
    "It was booked by Mr. Bellini."
   ],
   "My flight on Wednesday evening was canceled",
   "水曜夜の便が『欠航になった』とはっきり書かれている。2時間の遅れではない。新しい便が着くのは木曜。予約したのは本人で、Bellini 氏ではない。",
   "rd/詳細"
  ],
  [
   "What does Ms. Weiss offer to do?",
   [
    "Participate in a meeting online",
    "Pay for a new flight",
    "Visit the factory on Thursday",
    "Meet the design team in London"
   ],
   "I would be happy to join by video call in the morning instead",
   "午後への変更が無理なら『朝ビデオ通話で参加する』と申し出ている。join by video call を言い換えた Participate in a meeting online が正解。航空券の支払いの話はない。工場見学は金曜。ロンドンは出てこない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "差出人：ハンナ・ワイス\n宛先：マルコ・ベリーニ\n件名：木曜日の訪問の変更\n\nマルコさん\n\n申し訳ないのですが、ミラノ事務所への訪問の予定を変えなければなりません。水曜の夜の便が欠航になり、予約できた最も早い便は木曜日の午前11時に着きます。そのため、デザインチームとの朝の会議には出られません。\n\n会議を午後2時に移せないでしょうか？それで皆さんの都合が合わなければ、代わりに朝、ビデオ通話で参加します。金曜日の工場見学は、予定どおり参加できます。\n\nどちらがよいか教えてください。\n\nハンナ",
  "qs": [
   [
    "ワイスさんはなぜこのメールを書いたのか。",
    "会議の時間の変更を頼むため"
   ],
   [
    "ワイスさんの便について何が示されているか。",
    "欠航になった。"
   ],
   [
    "ワイスさんは何をすると申し出ているか。",
    "オンラインで会議に参加する"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "チャット",
 "title": "印刷物の納品確認",
 "text": "Tom Ryan [9:12 A.M.]: Hi Aiko, did the brochures for the trade show arrive yet?\nAiko Mori [9:14 A.M.]: Not yet. The printer said they would be delivered by 10.\nTom Ryan [9:15 A.M.]: OK. We need to leave for the convention center at 11.\nAiko Mori [9:15 A.M.]: I know. I'll call them if they're not here by 10:15.\nTom Ryan [9:16 A.M.]: Thanks. Also, can you check that the price list on page 4 is the updated one?\nAiko Mori [9:17 A.M.]: Will do. I'll let you know as soon as I've looked.\nTom Ryan [9:18 A.M.]: Great.",
 "qs": [
  [
   "What are the writers preparing for?",
   [
    "A trade show",
    "A printing workshop",
    "A sales meeting at their office",
    "A product photo shoot"
   ],
   "did the brochures for the trade show arrive yet?",
   "最初のメッセージで『展示会用のパンフレット』と言い、11時に会場（convention center）へ出発する。準備しているのは展示会。印刷の講習・社内会議・写真撮影は出てこない。",
   "rd/詳細"
  ],
  [
   "At 9:17 A.M., what does Ms. Mori most likely mean when she writes, \"Will do\"?",
   [
    "She will check a page of the brochure.",
    "She will drive to the convention center.",
    "She will print a new price list.",
    "She will call the printer immediately."
   ],
   "can you check that the price list on page 4 is the updated one?",
   "意図問題は直前の発言に注目。Ryan 氏が『4ページの価格表が最新か確認して』と頼み、それに対する『やります』。つまりパンフレットのページを確認するという意味。印刷し直す・すぐ電話する（電話は10時15分まで来なければ）・運転するとは言っていない。",
   "rd/意図"
  ]
 ],
 "ja": {
  "text": "トム・ライアン［午前9時12分］：アイコさん、展示会用のパンフレットはもう届いた？\nアイコ・モリ［午前9時14分］：まだです。印刷所は10時までに届けると言っていました。\nトム・ライアン［午前9時15分］：わかった。11時にはコンベンションセンターへ出発しないといけない。\nアイコ・モリ［午前9時15分］：わかっています。10時15分までに届かなければ電話します。\nトム・ライアン［午前9時16分］：ありがとう。それと、4ページの価格表が最新のものか確認してくれる？\nアイコ・モリ［午前9時17分］：やります。見たらすぐにお知らせします。\nトム・ライアン［午前9時18分］：よろしく。",
  "qs": [
   [
    "書き手たちは何の準備をしているか。",
    "展示会"
   ],
   [
    "午前9時17分にモリさんが「やります」と書いているのは、何を意味していると考えられるか。",
    "パンフレットのページを確認する。"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "告知",
 "title": "エレベーター点検",
 "text": "■ Attention, Tenants of the Carlton Tower\n\nThe two passenger elevators on the east side of the building will be out of service on Saturday, March 9, from 8:00 A.M. to 4:00 P.M. for annual safety inspections.\n\nDuring this time, please use the elevators on the west side of the building. The freight elevator will also be available for tenants who need to move heavy items.\n\nWe apologize for any inconvenience. For questions, please contact the building management office at 555-0147.",
 "qs": [
  [
   "What is the purpose of the notice?",
   [
    "To announce a temporary closure of some elevators",
    "To introduce new building security rules",
    "To inform tenants about a rent increase",
    "To advertise office space for rent"
   ],
   "will be out of service on Saturday, March 9",
   "東側のエレベーターが点検で一時停止すると知らせる告知。out of service（運転休止）を temporary closure と言い換えている。警備・家賃・空室の話はない。",
   "rd/目的"
  ],
  [
   "What are tenants with heavy items advised to do?",
   [
    "Use the freight elevator",
    "Move items on a different day",
    "Call the management office in advance",
    "Use the stairs on the east side"
   ],
   "The freight elevator will also be available for tenants who need to move heavy items.",
   "重い物を運ぶ人は『貨物用エレベーター（freight elevator）が使える』。別の日に移すよう言ってはいない。管理事務所の電話番号は質問用。東側の階段の話はない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "■ カールトン・タワーのテナントの皆様へ\n\n建物東側の乗用エレベーター2基は、年1回の安全点検のため、3月9日（土）午前8時から午後4時まで運転を休止します。\n\nこの間は、建物西側のエレベーターをご利用ください。重い物を運ぶ必要があるテナントの皆様は、貨物用エレベーターもご利用いただけます。\n\nご不便をおかけして申し訳ございません。ご質問は、ビル管理事務所（555-0147）までお問い合わせください。",
  "qs": [
   [
    "この告知の目的は何か。",
    "一部のエレベーターの一時的な休止を知らせること"
   ],
   [
    "重い物を持つテナントは何をするよう勧められているか。",
    "貨物用エレベーターを使う"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "広告",
 "title": "オフィス家具の在庫一掃セール",
 "text": "■ OfficeWorks Warehouse — Clearance Sale!\n\nThis weekend only, save up to 50 percent on desks, chairs, and filing cabinets. All items are brand-new, but they are last year's models, so quantities are limited.\n\n• Free delivery on orders over $300 within the city\n• Assembly service available for an additional $25 per item\n• Open Saturday and Sunday, 9 A.M. to 7 P.M.\n\nBusinesses that spend more than $1,000 will also receive a free ergonomic keyboard. Visit us at 220 Harbor Road or order online at www.officeworkswh.com.",
 "qs": [
  [
   "What is suggested about the items on sale?",
   [
    "They are no longer the newest designs.",
    "They have been used before.",
    "They are available only online.",
    "They come already assembled."
   ],
   "All items are brand-new, but they are last year's models",
   "『新品だが昨年のモデル』＝最新のデザインではない。brand-new なので中古ではない。店舗とオンラインの両方で買える。組み立ては有料オプションなので、組み立て済みではない。推測問題は本文の言い換えを探す。",
   "rd/推測"
  ],
  [
   "What is NOT mentioned as a benefit for customers?",
   [
    "Extended warranty",
    "Free delivery",
    "A free keyboard",
    "Discounts of up to 50 percent"
   ],
   "Free delivery on orders over $300 within the city",
   "NOT問題は、選択肢を一つずつ本文と照らして消していく。無料配送（$300以上）、無料キーボード（$1,000以上）、最大50%引きはすべて書かれている。保証の延長（extended warranty）はどこにも出てこないので、これが正解。",
   "rd/NOT問題"
  ],
  [
   "How can a customer get an item assembled?",
   [
    "By paying an extra fee",
    "By spending over $1,000",
    "By visiting on Sunday",
    "By ordering online"
   ],
   "Assembly service available for an additional $25 per item",
   "組み立ては『1点につき追加$25』。つまり追加料金を払えば頼める。$1,000以上はキーボードの特典。曜日や注文方法は組み立てとは関係がない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "■ オフィスワークス倉庫店 — 在庫一掃セール！\n\n今週末限定で、机・いす・書類棚が最大50パーセント引き。全品新品ですが、昨年のモデルのため数に限りがあります。\n\n• 市内で300ドルを超えるご注文は配送無料\n• 組み立てサービスは1点につき追加25ドルで承ります\n• 土曜・日曜 午前9時〜午後7時営業\n\n1,000ドルを超えてお買い上げの法人には、人間工学に基づいたキーボードを無料で差し上げます。ハーバー通り220番地の店舗にお越しいただくか、www.officeworkswh.com でご注文ください。",
  "qs": [
   [
    "セール品について何が示唆されているか。",
    "もう最新のデザインではない。"
   ],
   [
    "客への特典として述べられていないものは何か。",
    "保証期間の延長"
   ],
   [
    "客はどうすれば商品を組み立ててもらえるか。",
    "追加料金を払う"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "記事",
 "title": "地元企業の海外進出",
 "text": "BRISTOL (May 20) — Fernwood Teas, a small tea company based in Bristol, announced on Monday that it will begin selling its products in Japan and South Korea this autumn.\n\nThe company, founded by brothers Alan and Peter Fernwood in 2014, is known for its herbal blends made with locally grown ingredients. Its teas are currently sold in about 300 shops across the United Kingdom.\n\n\"Customers in Asia have shown strong interest in our products through our online store,\" said Alan Fernwood. \"Opening a distribution center in Tokyo will allow us to deliver much faster.\"\n\nThe company also plans to hire ten new employees in Bristol to handle the increased demand.",
 "qs": [
  [
   "What is the article mainly about?",
   [
    "A company's plan to expand overseas",
    "The opening of a new tea shop in Bristol",
    "The history of herbal tea",
    "A change in company ownership"
   ],
   "it will begin selling its products in Japan and South Korea this autumn",
   "記事の中心は『日本と韓国での販売開始』という海外展開。ブリストルに店を開く話ではない。ハーブティーの歴史や経営者の交代も書かれていない。",
   "rd/目的"
  ],
  [
   "According to Mr. Fernwood, why did the company decide to sell in Asia?",
   [
    "Customers there have bought its products online.",
    "Tea is cheaper to produce in Asia.",
    "Its UK sales have been decreasing.",
    "A Japanese company offered to buy it."
   ],
   "Customers in Asia have shown strong interest in our products through our online store",
   "『オンラインストアを通じてアジアの客が強い関心を示した』が理由。生産コスト・英国の売上減少・買収の申し出は書かれていない。",
   "rd/詳細"
  ],
  [
   "What will the company do in Bristol?",
   [
    "Hire additional staff",
    "Close some of its shops",
    "Build a distribution center",
    "Move its headquarters"
   ],
   "The company also plans to hire ten new employees in Bristol",
   "ブリストルで『10人を新たに雇う』。流通センターを作るのは東京。店の閉鎖や本社移転の話はない。場所を取り違えさせる選択肢に注意。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "ブリストル（5月20日）— ブリストルに本社を置く小さな紅茶会社ファーンウッド・ティーズは月曜日、今秋から日本と韓国で商品の販売を始めると発表した。\n\n同社は2014年にアラン・ファーンウッドさんとピーター・ファーンウッドさんの兄弟が創業し、地元で育てた原料を使ったハーブのブレンドで知られている。同社の紅茶は現在、英国全土の約300店で売られている。\n\n「アジアのお客様が、オンラインストアを通じて当社の商品に強い関心を示してくださっています」とアラン・ファーンウッドさんは話す。「東京に流通センターを開けば、ずっと速くお届けできます」\n\n同社はまた、需要の増加に対応するため、ブリストルで10人の社員を新たに雇う予定だ。",
  "qs": [
   [
    "この記事は主に何についてのものか。",
    "会社の海外展開の計画"
   ],
   [
    "ファーンウッドさんによると、会社はなぜアジアで販売することにしたのか。",
    "そこの客がオンラインで商品を買っている。"
   ],
   [
    "会社はブリストルで何をするか。",
    "スタッフを追加で雇う"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "メール",
 "title": "請求書の誤り",
 "text": "From: Julia Santos <jsantos@kesslerdesign.com>\nTo: Billing Department, ClearNet Communications\nSubject: Invoice #77104\n\nTo whom it may concern,\n\nI am writing about our company's invoice for October. We were charged for 25 phone lines, but we reduced our service to 20 lines at the beginning of September. I have attached a copy of the confirmation e-mail we received from your sales department at that time.\n\nPlease send us a corrected invoice. We would also like a credit for the extra amount we were charged in September, which we paid before noticing the error.\n\nThank you,\nJulia Santos\nOffice Manager, Kessler Design",
 "qs": [
  [
   "What problem does Ms. Santos report?",
   [
    "Her company was charged for too many phone lines.",
    "Her company's phone lines are not working.",
    "An invoice was sent to the wrong address.",
    "A payment was made twice."
   ],
   "We were charged for 25 phone lines, but we reduced our service to 20 lines",
   "20回線に減らしたのに25回線分を請求された＝回線数の過大請求。回線の故障・送付先の誤り・二重払いの話ではない。",
   "rd/詳細"
  ],
  [
   "What did Ms. Santos send with the e-mail?",
   [
    "A copy of an earlier message",
    "A signed contract",
    "A list of employees",
    "A receipt for a payment"
   ],
   "I have attached a copy of the confirmation e-mail we received from your sales department",
   "添付したのは『営業部から受け取った確認メールのコピー』。an earlier message と言い換えている。契約書・社員名簿・領収書は添付していない。",
   "rd/詳細"
  ],
  [
   "What is suggested about Kessler Design's September bill?",
   [
    "It included an incorrect charge.",
    "It has not been paid yet.",
    "It was sent by e-mail.",
    "It was for 20 phone lines."
   ],
   "which we paid before noticing the error",
   "9月分は『誤りに気づく前に支払った』のでクレジット（返金相当）を求めている。つまり9月分にも過大請求が含まれていた。すでに支払い済みなので『未払い』は誤り。送付方法は不明。20回線分ではなかったから問題になっている。",
   "rd/推測"
  ]
 ],
 "ja": {
  "text": "差出人：ジュリア・サントス <jsantos@kesslerdesign.com>\n宛先：クリアネット・コミュニケーションズ 請求部\n件名：請求書 #77104\n\nご担当者様\n\n当社の10月分の請求書についてご連絡します。電話回線25回線分を請求されていますが、当社は9月初めに20回線に減らしました。その時に御社の営業部から受け取った確認メールのコピーを添付します。\n\n訂正した請求書をお送りください。また、9月に余分に請求された金額についても、誤りに気づく前に支払ってしまったので、返金（クレジット）をお願いします。\n\nよろしくお願いします。\nジュリア・サントス\nケスラー・デザイン 総務部長",
  "qs": [
   [
    "サントスさんはどんな問題を報告しているか。",
    "会社が回線数を多く請求された。"
   ],
   [
    "サントスさんはメールに何を付けて送ったか。",
    "以前のメッセージのコピー"
   ],
   [
    "ケスラー・デザインの9月の請求について何が示唆されているか。",
    "誤った請求が含まれていた。"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "ウェブページ",
 "title": "美術館の会員プラン",
 "text": "■ Become a Member of the Halston Art Museum\n\nIndividual — $60 per year\nFree admission for one person, a 10 percent discount at the museum shop, and invitations to members-only exhibition previews.\n\nFamily — $110 per year\nAll Individual benefits for two adults and up to three children under 18.\n\nPatron — $250 per year\nAll Family benefits, plus free parking and two guest passes per year.\n\nMemberships can be purchased at the front desk or online. New members who join before December 31 will receive a free museum tote bag.",
 "qs": [
  [
   "What do all members receive?",
   [
    "Invitations to special previews",
    "Free parking",
    "Guest passes",
    "A free tote bag"
   ],
   "invitations to members-only exhibition previews",
   "Individual の特典（無料入館・10%割引・内覧会への招待）は Family と Patron にも含まれる（All Individual benefits / All Family benefits）。だから招待は全員がもらえる。駐車場とゲストパスは Patron だけ。トートバッグは12月31日までの入会者だけ。",
   "rd/詳細"
  ],
  [
   "How many guest passes does a Patron member receive each year?",
   [
    "Two",
    "One",
    "Three",
    "Ten"
   ],
   "two guest passes per year",
   "Patron は『年2枚のゲストパス』。three は Family の子どもの人数、10 は割引のパーセントで、数字のひっかけ。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "■ ハルストン美術館の会員になりましょう\n\n個人会員 — 年60ドル\n1名様の入館無料、ミュージアムショップで10パーセント割引、会員限定の展覧会内覧会へのご招待。\n\nファミリー会員 — 年110ドル\n個人会員のすべての特典を、大人2名と18歳未満のお子様3名までに。\n\nパトロン会員 — 年250ドル\nファミリー会員のすべての特典に加え、駐車場無料、年2枚のゲストパス。\n\n会員は受付またはオンラインでお申し込みいただけます。12月31日より前にご入会の方には、美術館のトートバッグを差し上げます。",
  "qs": [
   [
    "すべての会員がもらえるものは何か。",
    "特別内覧会への招待"
   ],
   [
    "パトロン会員は毎年ゲストパスを何枚もらえるか。",
    "2枚"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "チャット",
 "title": "会議資料の準備",
 "text": "Rita Gomez [2:03 P.M.]: Is the conference room ready for the client meeting at 3?\nBen Cho [2:05 P.M.]: Almost. The projector isn't connecting to my laptop.\nRita Gomez [2:05 P.M.]: Did you try the cable in the top drawer? The old one doesn't work well.\nBen Cho [2:07 P.M.]: That did it. Thanks!\nRita Gomez [2:08 P.M.]: Good. I'll bring the printed handouts at 2:45.\nBen Cho [2:09 P.M.]: Should I order coffee for the guests?\nRita Gomez [2:10 P.M.]: Yes, please. Six cups should be enough.",
 "qs": [
  [
   "At 2:07 P.M., what does Mr. Cho most likely mean when he writes, \"That did it\"?",
   [
    "The new cable solved the problem.",
    "He has finished printing the handouts.",
    "The meeting has been canceled.",
    "He has ordered coffee."
   ],
   "Did you try the cable in the top drawer?",
   "直前に Gomez 氏が『引き出しのケーブルを試した？』と聞いている。That did it は『それでうまくいった』という意味で、ケーブルでプロジェクターの問題が解決したということ。資料の印刷・会議の中止・コーヒーの注文は、この時点の話ではない。",
   "rd/意図"
  ],
  [
   "What will Ms. Gomez do at 2:45 P.M.?",
   [
    "Bring some documents",
    "Order refreshments",
    "Fix the projector",
    "Meet the client at the station"
   ],
   "I'll bring the printed handouts at 2:45",
   "2時45分に『印刷した配布資料を持っていく』。handouts を documents と言い換えている。コーヒーの注文は Cho 氏がする。プロジェクターはもう直った。駅に迎えに行く話はない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "リタ・ゴメス［午後2時3分］：3時の顧客との会議の準備、会議室はできてる？\nベン・チョ［午後2時5分］：ほぼです。プロジェクターが私のノートPCにつながらなくて。\nリタ・ゴメス［午後2時5分］：一番上の引き出しのケーブルは試した？古いのは調子が悪いの。\nベン・チョ［午後2時7分］：それでうまくいきました。ありがとう！\nリタ・ゴメス［午後2時8分］：よかった。印刷した配布資料は2時45分に持っていくね。\nベン・チョ［午後2時9分］：お客様用にコーヒーを頼んでおきましょうか？\nリタ・ゴメス［午後2時10分］：ええ、お願い。6杯あれば足りると思う。",
  "qs": [
   [
    "午後2時7分にチョさんが「それでうまくいきました」と書いているのは、何を意味していると考えられるか。",
    "新しいケーブルで問題が解決した。"
   ],
   [
    "ゴメスさんは午後2時45分に何をするか。",
    "書類を持っていく"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "手紙",
 "title": "契約更新のお知らせ",
 "text": "Dear Mr. Harper,\n\nThank you for being a valued customer of GreenLeaf Landscaping for the past three years. Your current maintenance contract will expire on April 30.\n\nTo renew your contract, simply sign the enclosed form and return it in the prepaid envelope by April 15. Customers who renew by this date will keep their current monthly rate of $85. After April 15, the rate for new contracts will increase to $95 per month.\n\nThis year, we are also offering a new seasonal planting service. Details are included in the enclosed brochure.\n\nSincerely,\nGrace Lin\nCustomer Relations, GreenLeaf Landscaping",
 "qs": [
  [
   "Why should Mr. Harper return the form by April 15?",
   [
    "To avoid a price increase",
    "To receive a free brochure",
    "To schedule a planting service",
    "To cancel his contract"
   ],
   "Customers who renew by this date will keep their current monthly rate of $85.",
   "4月15日までに更新すれば今の月額$85のまま。それ以降は$95に上がる。つまり値上げを避けるため。パンフレットはすでに同封されている。植栽サービスの申込や解約のためではない。",
   "rd/詳細"
  ],
  [
   "What is indicated about GreenLeaf Landscaping?",
   [
    "It has added a new service.",
    "It was founded three years ago.",
    "It will close at the end of April.",
    "It charges $95 for all customers now."
   ],
   "This year, we are also offering a new seasonal planting service.",
   "『今年は新しく季節の植栽サービスを提供する』＝新サービスを追加した。3年は Harper 氏が客である期間で、会社の創業年ではない。4月末に終わるのは契約。$95 は4月15日以降の新規契約の料金。",
   "rd/推測"
  ],
  [
   "The word \"expire\" in paragraph 1, line 2, is closest in meaning to",
   [
    "end",
    "begin",
    "change",
    "improve"
   ],
   "Your current maintenance contract will expire on April 30.",
   "contract will expire は『契約が切れる（期限が終わる）』。最も近いのは end。begin（始まる）は反対の意味。change と improve は文脈に合わない。同義語問題は、選択肢を本文に入れて意味が通るか確かめる。",
   "rd/同義語"
  ]
 ],
 "ja": {
  "text": "ハーパー様\n\nこの3年間、グリーンリーフ造園の大切なお客様でいてくださり、ありがとうございます。現在の保守契約は4月30日に期限が切れます。\n\n契約を更新するには、同封の用紙に署名し、4月15日までに料金支払い済みの封筒で返送するだけです。この日までに更新されたお客様は、現在の月額85ドルのままとなります。4月15日以降、新規契約の料金は月額95ドルに上がります。\n\n今年は、新しく季節の植栽サービスも始めました。詳しくは同封のパンフレットをご覧ください。\n\n敬具\nグレース・リン\nグリーンリーフ造園 お客様係",
  "qs": [
   [
    "ハーパーさんはなぜ4月15日までに用紙を返送すべきなのか。",
    "値上げを避けるため"
   ],
   [
    "グリーンリーフ造園について何が示されているか。",
    "新しいサービスを加えた。"
   ],
   [
    "第1段落2行目の「expire」に最も意味が近いのは",
    "終わる"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "告知",
 "title": "社内ボランティア募集",
 "text": "■ Volunteers Needed: Riverside Park Cleanup\n\nOn Saturday, April 26, Dalton Engineering will take part in the city's annual Riverside Park Cleanup. Employees and their family members are welcome to join.\n\nWe will meet at the park's north entrance at 9:00 A.M. and work until noon. Gloves, trash bags, and water will be provided. Please wear comfortable shoes and clothes that can get dirty.\n\nAfter the cleanup, lunch will be served at the picnic area, courtesy of the company. To sign up, please e-mail Nora Bell in Human Resources by April 18 and include the number of people in your group.",
 "qs": [
  [
   "Who is invited to participate in the event?",
   [
    "Employees and their relatives",
    "Only managers",
    "Residents of Riverside",
    "Engineering students"
   ],
   "Employees and their family members are welcome to join.",
   "『社員とその家族』が参加できる。family members を relatives（親族）と言い換えている。管理職だけ・住民・学生とは書かれていない。",
   "rd/詳細"
  ],
  [
   "What are participants asked to bring?",
   [
    "Nothing; supplies will be provided",
    "Their own gloves",
    "A packed lunch",
    "Trash bags"
   ],
   "Gloves, trash bags, and water will be provided.",
   "手袋・ゴミ袋・水は用意される。昼食も会社が出す（courtesy of the company）。持ち物を求めてはいないので、Nothing が正解。服装の指示（汚れてもよい服）は持ち物ではない。",
   "rd/詳細"
  ],
  [
   "What information should be included when signing up?",
   [
    "The size of the group",
    "A phone number",
    "A preferred work area",
    "A lunch order"
   ],
   "include the number of people in your group",
   "申込では『グループの人数を書いて』とある。the number of people を the size of the group と言い換えている。電話番号・作業場所の希望・昼食の注文は求められていない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "■ ボランティア募集：リバーサイド公園の清掃\n\n4月26日（土）、ダルトン・エンジニアリングは市の恒例行事「リバーサイド公園清掃」に参加します。社員とそのご家族の参加を歓迎します。\n\n午前9時に公園の北口に集合し、正午まで作業します。手袋・ゴミ袋・水は用意します。歩きやすい靴と、汚れてもよい服装でお越しください。\n\n清掃の後は、会社の負担でピクニック広場で昼食を出します。申し込みは、4月18日までに人事部のノラ・ベルさんにメールで、グループの人数を書いてお送りください。",
  "qs": [
   [
    "このイベントに誰が招待されているか。",
    "社員とその親族"
   ],
   [
    "参加者は何を持ってくるよう求められているか。",
    "何も要らない。必要な物は用意される"
   ],
   [
    "申し込むときにどんな情報を入れるべきか。",
    "グループの人数"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "メール",
 "title": "採用面接の日程",
 "text": "From: Lucas Meyer, Hiring Manager\nTo: Priya Shah\nSubject: Interview for Senior Accountant position\n\nDear Ms. Shah,\n\nThank you for applying for the Senior Accountant position at Norland Foods. We were impressed by your application and would like to invite you for an interview.\n\nThe interview will take place at our head office on either Tuesday, June 3, or Wednesday, June 4, at 10:00 A.M. It will last about 90 minutes and will include a short skills test using spreadsheet software.\n\nPlease reply by Friday to tell us which date you prefer. When you come, please bring a copy of your professional certification.\n\nBest regards,\nLucas Meyer",
 "qs": [
  [
   "What is Ms. Shah asked to do by Friday?",
   [
    "Choose an interview date",
    "Complete a skills test",
    "Send a list of references",
    "Visit the head office"
   ],
   "Please reply by Friday to tell us which date you prefer.",
   "金曜までに『どちらの日がよいか返信して』。つまり面接の日を選ぶこと。技能テストは面接当日。推薦者リストは求められていない。本社に来るのは面接の日。",
   "rd/詳細"
  ],
  [
   "What will the interview include?",
   [
    "A test of computer skills",
    "A tour of the factory",
    "A meeting with the company president",
    "A presentation by Ms. Shah"
   ],
   "will include a short skills test using spreadsheet software",
   "面接には『表計算ソフトを使った短い技能テスト』が含まれる。これを A test of computer skills と言い換えている。工場見学・社長との面談・本人のプレゼンは書かれていない。",
   "rd/詳細"
  ],
  [
   "What should Ms. Shah bring to the interview?",
   [
    "Proof of a qualification",
    "Her laptop computer",
    "A recommendation letter",
    "Her university diploma"
   ],
   "please bring a copy of your professional certification",
   "『専門資格の証明書のコピー』を持参。professional certification を proof of a qualification と言い換えている。ノートPC・推薦状・大学の卒業証書は求められていない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "差出人：ルーカス・マイヤー（採用担当マネージャー）\n宛先：プリヤ・シャー\n件名：シニア会計士職の面接\n\nシャー様\n\nノーランド・フーズのシニア会計士職にご応募いただき、ありがとうございます。応募書類に感銘を受けましたので、面接にお越しいただきたく存じます。\n\n面接は本社にて、6月3日（火）または6月4日（水）の午前10時に行います。所要時間は約90分で、表計算ソフトを使った短い技能テストを含みます。\n\nどちらの日がよいか、金曜日までにご返信ください。お越しの際は、専門資格の証明書のコピーをお持ちください。\n\nよろしくお願いいたします。\nルーカス・マイヤー",
  "qs": [
   [
    "シャーさんは金曜日までに何をするよう求められているか。",
    "面接の日を選ぶ"
   ],
   [
    "面接には何が含まれるか。",
    "コンピューターの技能のテスト"
   ],
   [
    "シャーさんは面接に何を持っていくべきか。",
    "資格の証明"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "記事",
 "title": "空港の新ターミナル",
 "text": "WESTON (August 8) — Construction of the new international terminal at Weston Airport is nearly complete, and the terminal is scheduled to open on October 1.\n\nThe terminal will have 12 new gates, an expanded security area, and more than 40 shops and restaurants. Airport officials say it will allow the airport to handle up to five million additional passengers per year.\n\nThe project was originally scheduled to be finished last spring but was delayed by a shortage of building materials. Despite the delay, the project stayed within its budget of $350 million.\n\nA public open house will be held on September 20, when residents can tour the terminal before it begins operating.",
 "qs": [
  [
   "What is NOT mentioned as a feature of the new terminal?",
   [
    "A hotel for travelers",
    "Additional gates",
    "A larger security area",
    "Shops and restaurants"
   ],
   "The terminal will have 12 new gates, an expanded security area, and more than 40 shops and restaurants.",
   "新ターミナルの特徴として、12の新ゲート、拡張された保安検査場、40以上の店とレストランが挙がっている。ホテルはどこにも書かれていないので、これが正解。",
   "rd/NOT問題"
  ],
  [
   "Why was the project delayed?",
   [
    "Materials were difficult to obtain.",
    "The budget was increased.",
    "The design was changed.",
    "Workers went on strike."
   ],
   "was delayed by a shortage of building materials",
   "遅れの原因は『建築資材の不足』。Materials were difficult to obtain と言い換えている。予算は範囲内に収まった。設計変更やストライキの話はない。",
   "rd/詳細"
  ],
  [
   "What will happen on September 20?",
   [
    "Residents can visit the terminal.",
    "The terminal will begin operating.",
    "Construction will start.",
    "A new airline will be announced."
   ],
   "A public open house will be held on September 20",
   "9月20日は一般公開日で、住民が運用開始前にターミナルを見学できる。運用開始は10月1日で、日付のひっかけ。工事はほぼ完了している。新しい航空会社の話はない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "ウェストン（8月8日）— ウェストン空港の新しい国際線ターミナルの建設はほぼ完了し、10月1日に開業する予定だ。\n\nターミナルには12の新しいゲート、拡張された保安検査場、40以上の店とレストランができる。空港の担当者によると、これで空港は年間最大500万人多くの乗客を扱えるようになる。\n\n工事は当初、昨年の春に終わる予定だったが、建築資材の不足で遅れた。遅れはあったものの、工事は3億5,000万ドルの予算内に収まった。\n\n9月20日には一般公開日が設けられ、住民は運用開始前にターミナルを見学できる。",
  "qs": [
   [
    "新ターミナルの特徴として述べられていないものは何か。",
    "旅行者向けのホテル"
   ],
   [
    "工事はなぜ遅れたのか。",
    "資材が手に入りにくかった。"
   ],
   [
    "9月20日に何があるか。",
    "住民がターミナルを見学できる。"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "フォーム",
 "title": "研修の申込書",
 "text": "■ Westbrook Professional Development — Course Registration\n\nName: Carla Diaz\nDepartment: Customer Service\nCourse: Handling Difficult Conversations (Course 204)\nDate: Thursday, November 13, 1:00–5:00 P.M.\nLocation: Training Room B\n\nSupervisor approval: ✔ (approved by M. Ortiz)\n\nComments: I would also like to attend Course 210, Writing Clear E-mails, if a space becomes available. I was told it is currently full.\n\nNote: Employees who cannot attend a course must cancel at least three days in advance so that another employee can take their place.",
 "qs": [
  [
   "What is suggested about Course 210?",
   [
    "It has no open spaces at the moment.",
    "It is held in Training Room B.",
    "It is required for all employees.",
    "It was canceled."
   ],
   "I was told it is currently full.",
   "コメントで『現在満席だと言われた』とある。空きがない＝has no open spaces。研修室Bで行うのは Course 204。全員必須・中止とは書かれていない。",
   "rd/推測"
  ],
  [
   "Why must employees cancel at least three days in advance?",
   [
    "So that someone else can attend",
    "So that the course fee can be refunded",
    "So that the room can be used for meetings",
    "So that the supervisor can approve it"
   ],
   "so that another employee can take their place",
   "3日前までのキャンセルは『ほかの社員が代わりに参加できるように』。受講料の返金・会議室の利用・上司の承認とは書かれていない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "■ ウェストブルック能力開発 — 講座申込書\n\n氏名：カーラ・ディアス\n部署：カスタマーサービス\n講座：難しい会話への対応（講座204）\n日時：11月13日（木）午後1時〜5時\n場所：研修室B\n\n上司の承認：✔（M・オルティス承認）\n\nコメント：空きが出れば、講座210「わかりやすいメールの書き方」にも参加したいです。今は満席だと聞きました。\n\n注意：講座に出られない社員は、ほかの社員が代わりに参加できるよう、少なくとも3日前までに取り消してください。",
  "qs": [
   [
    "講座210について何が示唆されているか。",
    "今は空きがない。"
   ],
   [
    "社員はなぜ少なくとも3日前までに取り消さなければならないのか。",
    "ほかの人が参加できるように"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "メール",
 "title": "取引先からの見積もり依頼",
 "text": "From: Olivia Grant <ogrant@sunriseevents.com>\nTo: Info, Bayview Catering\nSubject: Quote request\n\nHello,\n\nI am organizing a retirement party for a colleague on Friday, July 18, at the Bayview Community Hall. We expect about 60 guests.\n\nCould you send me a quote for a buffet dinner? At least one third of the guests are vegetarian, so we will need several meat-free main dishes. We would also like coffee and dessert to be served at the end of the evening.\n\nOur budget is around $2,500. If your prices are higher than that, please let me know which items could be removed to reduce the cost.\n\nThank you,\nOlivia Grant",
 "qs": [
  [
   "What kind of event is Ms. Grant planning?",
   [
    "A retirement celebration",
    "A wedding reception",
    "A product launch",
    "A community festival"
   ],
   "I am organizing a retirement party for a colleague",
   "『同僚の退職パーティー』を企画している。retirement party を retirement celebration と言い換えている。結婚披露宴・製品発表・地域の祭りではない。",
   "rd/詳細"
  ],
  [
   "About how many guests are vegetarian?",
   [
    "At least 20",
    "Exactly 60",
    "Around 10",
    "Fewer than 5"
   ],
   "At least one third of the guests are vegetarian",
   "約60人のうち『少なくとも3分の1』が菜食。60 ÷ 3 = 20 なので At least 20。計算が必要な設問は、本文の数字を組み合わせる。60 は全体の人数。",
   "rd/推測"
  ],
  [
   "What does Ms. Grant ask Bayview Catering to do if the price exceeds her budget?",
   [
    "Suggest items to remove",
    "Lower the price automatically",
    "Reduce the number of guests",
    "Contact the community hall"
   ],
   "please let me know which items could be removed to reduce the cost",
   "予算を超えるなら『どの品目を外せば安くなるか知らせて』。自動で値下げしろとは言っていない。客の人数を減らす・会場に連絡する話はない。",
   "rd/詳細"
  ]
 ],
 "ja": {
  "text": "差出人：オリビア・グラント <ogrant@sunriseevents.com>\n宛先：ベイビュー・ケータリング 問い合わせ窓口\n件名：見積もりのお願い\n\nこんにちは\n\n7月18日（金）にベイビュー公民館で、同僚の退職パーティーを企画しています。出席者は約60人の予定です。\n\nビュッフェ形式の夕食の見積もりをいただけますか？出席者の少なくとも3分の1が菜食なので、肉を使わないメイン料理がいくつか必要です。また、最後にコーヒーとデザートも出していただきたいです。\n\n予算は約2,500ドルです。それより高くなる場合は、どの品目を外せば費用を下げられるか教えてください。\n\nよろしくお願いします。\nオリビア・グラント",
  "qs": [
   [
    "グラントさんはどんな行事を企画しているか。",
    "退職のお祝い"
   ],
   [
    "菜食の出席者はおよそ何人か。",
    "少なくとも20人"
   ],
   [
    "価格が予算を超える場合、グラントさんはベイビュー・ケータリングに何を頼んでいるか。",
    "外す品目を提案すること"
   ]
  ]
 }
},
{
 "type": "p7",
 "genre": "チャット",
 "title": "店舗の人手不足",
 "text": "Greg Wilson [7:40 A.M.]: Two of our cashiers called in sick this morning. We open at 9.\nLaura Kim [7:42 A.M.]: That's a problem. Saturday is our busiest day.\nGreg Wilson [7:43 A.M.]: Exactly. Can anyone from the Elm Street store help out?\nDavid Park [7:45 A.M.]: I can send Mia over. She knows our checkout system.\nGreg Wilson [7:46 A.M.]: That would be a big help. When can she get here?\nDavid Park [7:47 A.M.]: She starts at 8:30, so probably around 8:45.\nLaura Kim [7:48 A.M.]: I'll come in early and cover the second register until she arrives.\nGreg Wilson [7:49 A.M.]: Perfect. Thank you both.",
 "qs": [
  [
   "What problem does Mr. Wilson mention?",
   [
    "The store is short of staff.",
    "The checkout system is broken.",
    "The store will open late.",
    "A delivery has not arrived."
   ],
   "Two of our cashiers called in sick this morning.",
   "『レジ係が2人、病欠の連絡をしてきた』＝人手が足りない。レジの故障・開店の遅れ・配送の遅れの話ではない。",
   "rd/詳細"
  ],
  [
   "Where does Mr. Park most likely work?",
   [
    "At the Elm Street store",
    "At the company headquarters",
    "At a staffing agency",
    "At a software company"
   ],
   "Can anyone from the Elm Street store help out?",
   "Wilson 氏が『Elm Street 店から誰か手伝えないか』と聞き、Park 氏が『Mia を送れる』と答えている。だから Park 氏は Elm Street 店で働いていると考えられる。本社・人材派遣会社・ソフト会社を示す記述はない。",
   "rd/推測"
  ],
  [
   "At 7:46 A.M., what does Mr. Wilson mean when he writes, \"That would be a big help\"?",
   [
    "He accepts Mr. Park's offer.",
    "He wants to hire more cashiers.",
    "He needs help with the checkout system.",
    "He is asking Ms. Kim to come early."
   ],
   "I can send Mia over.",
   "直前の Park 氏の申し出『Mia を送れる』に対して『とても助かる』。申し出を受け入れるという意味。新しく雇う話ではない。レジの使い方の相談でもない。Kim 氏が早く来ると言うのはその後。",
   "rd/意図"
  ]
 ],
 "ja": {
  "text": "グレッグ・ウィルソン［午前7時40分］：今朝、レジ係が2人病欠の連絡をしてきた。開店は9時だ。\nローラ・キム［午前7時42分］：それは困りましたね。土曜日はいちばん忙しい日なのに。\nグレッグ・ウィルソン［午前7時43分］：そうなんだ。エルム通り店から誰か手伝いに来られないかな？\nデビッド・パク［午前7時45分］：ミアを行かせられます。彼女はうちのレジのシステムを知っています。\nグレッグ・ウィルソン［午前7時46分］：それはとても助かる。何時に来られる？\nデビッド・パク［午前7時47分］：彼女は8時半からなので、たぶん8時45分ごろです。\nローラ・キム［午前7時48分］：私が早めに行って、彼女が来るまで2番レジに入ります。\nグレッグ・ウィルソン［午前7時49分］：完璧だ。二人ともありがとう。",
  "qs": [
   [
    "ウィルソンさんはどんな問題を挙げているか。",
    "店の人手が足りない。"
   ],
   [
    "パクさんはどこで働いていると考えられるか。",
    "エルム通り店"
   ],
   [
    "午前7時46分にウィルソンさんが「それはとても助かる」と書いているのは、何を意味しているか。",
    "パクさんの申し出を受け入れる。"
   ]
  ]
 }
}
]);
