import type { DayLesson } from "@/lib/content/types";

// 側面鉛垂線五個參考點示意圖。
const sidePlumbLineSvg = `<svg viewBox="0 0 320 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="320" height="420" fill="#ffffff"/>
  <line x1="160" y1="20" x2="160" y2="400" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="5 5"/>
  <circle cx="160" cy="50" r="20" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <path d="M160 70 L158 150" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M148 90 Q136 130 142 170" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <path d="M150 150 Q150 220 152 260" fill="none" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <line x1="152" y1="260" x2="150" y2="340" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="150" y1="340" x2="150" y2="400" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  <g font-size="11">
    <circle cx="160" cy="52" r="3.5" fill="#e11d48"/>
    <text x="176" y="56" fill="#0f172a" font-weight="bold">① 耳垂</text>
    <circle cx="158" cy="106" r="3.5" fill="#e11d48"/>
    <text x="176" y="110" fill="#0f172a" font-weight="bold">② 肩峰</text>
    <circle cx="152" cy="192" r="3.5" fill="#e11d48"/>
    <text x="176" y="196" fill="#0f172a" font-weight="bold">③ 髖部（大轉子）</text>
    <circle cx="150" cy="266" r="3.5" fill="#e11d48"/>
    <text x="176" y="270" fill="#0f172a" font-weight="bold">④ 膝蓋外側</text>
    <circle cx="150" cy="342" r="3.5" fill="#e11d48"/>
    <text x="176" y="346" fill="#0f172a" font-weight="bold">⑤ 外踝前方</text>
  </g>
  <text x="160" y="415" text-anchor="middle" font-size="11" fill="#94a3b8">理想上五點大致落在同一條鉛垂線上（示意，個體差異存在）</text>
</svg>`;

// 正面／後面觀察對稱基準示意圖（自繪擬真人形，參考 day06 手法：填色身形＋圓潤關節，
// 取代原本僅頭圈＋橫線的抽象簡圖；正面看鉛垂線＋肩／骨盆對稱線，後面看另加脊椎中線與肩胛示意）。
const frontBackSvg = `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="320" fill="#ffffff"/>
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">正面看</text>
  <ellipse cx="105" cy="50" rx="15" ry="18" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <rect x="99" y="66" width="12" height="10" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <path d="M80 76 L130 76 L124 158 L86 158 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="82" x2="58" y2="168" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
  <line x1="130" y1="82" x2="152" y2="168" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
  <line x1="96" y1="158" x2="90" y2="248" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <line x1="114" y1="158" x2="120" y2="248" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="86" cy="256" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="124" cy="256" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="105" y1="30" x2="105" y2="290" stroke="#0d9488" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="82" x2="130" y2="82" stroke="#0d9488" stroke-width="2"/>
  <line x1="86" y1="158" x2="124" y2="158" stroke="#0d9488" stroke-width="2"/>
  <text x="105" y="300" text-anchor="middle" font-size="11" fill="#475569">觀察：雙肩等高、雙側骨盆等高</text>

  <text x="315" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">後面看</text>
  <ellipse cx="315" cy="50" rx="15" ry="18" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <rect x="309" y="66" width="12" height="10" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <path d="M290 76 L340 76 L334 158 L296 158 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="290" y1="82" x2="268" y2="168" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
  <line x1="340" y1="82" x2="362" y2="168" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
  <line x1="306" y1="158" x2="300" y2="248" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <line x1="324" y1="158" x2="330" y2="248" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="296" cy="256" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="334" cy="256" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="315" y1="80" x2="315" y2="156" stroke="#334155" stroke-width="2" stroke-dasharray="2 2"/>
  <path d="M300 90 L288 106 L304 110 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/>
  <path d="M330 90 L342 106 L326 110 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="315" y1="30" x2="315" y2="290" stroke="#4f46e5" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="290" y1="82" x2="340" y2="82" stroke="#4f46e5" stroke-width="2"/>
  <line x1="296" y1="158" x2="334" y2="158" stroke="#4f46e5" stroke-width="2"/>
  <text x="315" y="300" text-anchor="middle" font-size="10" fill="#475569">觀察：脊椎是否左右偏移、兩側肩胛對稱</text>
</svg>`;

// 靜態觀察三步驟。
const staticObserveStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">自然站立</text>
    <text x="70" y="108" font-size="12" fill="#64748b">不刻意挺胸夾背</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">三面拍照</text>
    <text x="210" y="108" font-size="12" fill="#64748b">正面、側面、後面</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">對照基準點</text>
    <text x="350" y="108" font-size="12" fill="#64748b">記錄偏移方向</text>
  </g>
</svg>`;

// 脊椎側面四個生理彎曲（自繪 S 形示意，座標自控、標註準確）。
// 註：圖庫的 spine-lateral.svg 實為「頸椎」特寫圖，不適合標全脊椎頸/胸/腰，故改自繪。
const spineCurveRealSvg = `<svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="380" fill="#ffffff"/>
  <text x="230" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">脊椎側面四個生理彎曲（示意）</text>
  <path d="M230 50 C248 72 249 98 228 116 C203 148 202 192 232 218 C252 242 250 272 224 292 C213 306 221 318 240 328" fill="none" stroke="#0d9488" stroke-width="9" stroke-linecap="round"/>
  <g font-size="15" font-weight="bold">
    <circle cx="242" cy="86" r="4" fill="#0d9488"/>
    <line x1="124" y1="86" x2="240" y2="86" stroke="#0d9488" stroke-width="1.5"/>
    <text x="118" y="90" text-anchor="end" fill="#0d9488">頸椎（前凸）</text>
    <circle cx="203" cy="166" r="4" fill="#e11d48"/>
    <line x1="336" y1="166" x2="205" y2="166" stroke="#e11d48" stroke-width="1.5"/>
    <text x="342" y="162" text-anchor="start" fill="#e11d48">胸椎（後凸）</text>
    <text x="342" y="180" text-anchor="start" font-size="11" font-weight="normal" fill="#9f1239">駝背發生處</text>
    <circle cx="243" cy="256" r="4" fill="#0d9488"/>
    <line x1="124" y1="256" x2="241" y2="256" stroke="#0d9488" stroke-width="1.5"/>
    <text x="118" y="260" text-anchor="end" fill="#0d9488">腰椎（前凸）</text>
  </g>
  <text x="230" y="352" text-anchor="middle" font-size="11" fill="#64748b">健康脊椎側面呈和緩 S 形：頸椎前凸、胸椎後凸、腰椎前凸</text>
</svg>`;

// 追蹤記錄時間軸：固定角度定期拍照比較。
const trackingTimelineSvg = `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="140" fill="#ffffff"/>
  <line x1="60" y1="55" x2="360" y2="55" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <rect x="42" y="38" width="36" height="28" rx="4" fill="#0d9488"/>
    <circle cx="60" cy="52" r="8" fill="#ffffff"/>
    <text x="60" y="88" font-size="11" fill="#0f172a">本次拍照</text>
    <text x="60" y="102" font-size="10" fill="#64748b">記錄基準</text>
    <rect x="192" y="38" width="36" height="28" rx="4" fill="#14b8a6"/>
    <circle cx="210" cy="52" r="8" fill="#ffffff"/>
    <text x="210" y="88" font-size="11" fill="#0f172a">2–4 週後</text>
    <text x="210" y="102" font-size="10" fill="#64748b">同角度再拍</text>
    <rect x="342" y="38" width="36" height="28" rx="4" fill="#5eead4"/>
    <circle cx="360" cy="52" r="8" fill="#ffffff"/>
    <text x="360" y="88" font-size="11" fill="#0f172a">持續追蹤</text>
    <text x="360" y="102" font-size="10" fill="#64748b">比較變化趨勢</text>
  </g>
  <text x="210" y="128" text-anchor="middle" font-size="11" fill="#94a3b8">重點是與自己過去的紀錄比較，而非與他人比較</text>
</svg>`;

const lesson: DayLesson = {
  day: 16,
  phase: "W3",
  title: "靜態體態觀察法",
  minutes: 17,
  goal: "學會用鉛垂線參考點，從側面、正面、後面三個角度系統性觀察靜態站姿，並知道如何客觀記錄觀察結果。",
  sections: [
    {
      heading: "從「認樣子」到「有系統地看」",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

昨天我們認識了圓肩、駝背、骨盆前傾三種常見體態的「長相」。今天要學一套更系統化的**靜態體態觀察法**，讓觀察不只是憑印象，而是有固定的參考點可以對照。

靜態體態觀察的核心工具是**鉛垂線（plumb line）**——想像身體旁邊垂下一條筆直的線，理想的站姿中，身體有幾個固定的骨性地標會大致落在同一條線上。只要記住這幾個點，不管是自己練習還是觀察家人，都能有一致的參考依據，而不是憑感覺說「看起來怪怪的」。

今天分三部分：側面觀察的五個參考點、正面與後面觀察的對稱基準、以及一套簡單的記錄流程。這套方法是**初步的自我觀察工具**，不是專業的姿勢評估儀器，發現明顯異常或合併疼痛，仍建議諮詢物理治療師做進一步評估。`,
      figures: [
        {
          id: "d16-fig1",
          title: "側面鉛垂線五個參考點",
          alt: "人體側面示意圖，一條鉛垂虛線由上到下，標出耳垂、肩峰、髖部大轉子、膝蓋外側、外踝前方五個參考點，理想狀態下大致對齊同一條線。",
          svg: sidePlumbLineSvg,
          caption: "示意圖（非解剖精確比例）：五點由上而下依序是耳垂、肩峰、大轉子、膝蓋外側、外踝前方。",
        },
      ],
    },
    {
      heading: "側面觀察：五個參考點怎麼看",
      body: `側面是最能看出圓肩、駝背、骨盆前傾的角度，五個參考點由上到下分別是：

1. **耳垂**：頭部的位置基準。
2. **肩峰**：肩膀最外側可摸到的骨突，肩胛骨的一部分。
3. **髖部（股骨大轉子）**：大腿外側摸得到的骨突，約在褲子口袋位置。
4. **膝蓋外側**：膝關節的中線附近。
5. **外踝前方**：腳踝外側骨突稍微往前一點的位置。

**觀察方式**：讓身體自然站立、不刻意挺胸或夾背，從側面看這五個點是否大致落在同一條垂直線上。常見的偏移模式：

- 耳垂明顯落在肩峰前方 → 頭前移。
- 肩峰明顯落在髖部前方 → 圓肩。
- 髖部明顯落在膝蓋前方或後方 → 骨盆前後傾可能影響整體重心。

要提醒的是，**每個人的骨架比例本來就有個體差異**，五點沒有完全對齊不代表一定「有問題」，重點是記錄下來、觀察是否隨時間變化，而不是拿去和別人比較優劣。`,
      figures: [
        {
          id: "d16-fig2",
          title: "靜態觀察三步驟",
          alt: "三個編號步驟：步驟一自然站立不刻意挺胸夾背，步驟二正面側面後面三面拍照，步驟三對照鉛垂線基準點記錄偏移方向。",
          svg: staticObserveStepsSvg,
          caption: "建議流程：先自然站立，再從三個角度拍照，最後對照參考點記錄偏移方向與程度。",
        },
        {
          id: "d16-fig5",
          title: "脊椎側面的生理彎曲（頸、胸、腰）",
          alt: "脊椎側面 S 形曲線示意圖，由上而下以中文引線標出頸椎（前凸）、胸椎（後凸，駝背發生處）、腰椎（前凸）三段的自然彎曲方向。",
          svg: spineCurveRealSvg,
          caption: "健康脊椎側面呈和緩 S 形：頸椎前凸、胸椎後凸、腰椎前凸；胸椎後凸增加是駝背最常發生的區段。（本圖聚焦與體態最相關的三段；含薦尾椎的完整四個生理彎曲見第 2 天）",
        },
      ],
    },
    {
      heading: "正面與後面觀察：看左右是否對稱",
      body: `側面看的是「前後」，正面與後面則是看**左右對稱性**，能發現側面觀察不到的線索。

**正面觀察重點**：
- 雙肩是否等高（一高一低可能提示單側肌肉張力不同）。
- 雙側骨盆（髂骨最高點）是否等高。
- 頭部是否置中，沒有明顯偏向一側。

**後面觀察重點**：
- 從頸椎到薦椎，脊椎的整體走向是否左右偏移（正常應大致呈一直線，不同於側面的 S 形前後彎曲）。
- 兩側肩胛骨的位置與高度是否對稱。
- 兩側腰部的凹陷弧度（腰窩）是否對稱。

這些觀察能幫助發現**左右不平衡**的傾向，例如慣用單側背包、單側站姿習慣等生活因素造成的姿勢偏移。同樣地，這只是初步觀察，若懷疑有脊椎側彎等結構性問題，需要專業的影像或量測工具確認，不是靠肉眼觀察就能下診斷。`,
      figures: [
        {
          id: "d16-fig3",
          title: "正面與後面觀察對稱基準",
          alt: "左側正面示意圖標出頭部置中、雙肩等高、雙側骨盆等高的觀察重點；右側後面示意圖標出脊椎是否左右偏移、兩側肩胛是否對稱的觀察重點。",
          svg: frontBackSvg,
          caption: "正面與後面觀察補足側面觀察看不到的左右對稱線索，是靜態評估不可少的兩個角度。",
        },
      ],
    },
    {
      heading: "記錄與追蹤：讓觀察有累積價值",
      body: `單次觀察的意義有限，**持續記錄、定期比對**才能看出趨勢。建議用以下方式簡單記錄：

| 項目 | 記錄方式 |
| --- | --- |
| 拍照角度 | 固定同一距離、同一背景，正面、側面、後面各一張 |
| 頻率 | 每 2–4 週一次即可，不需要每天拍 |
| 記錄內容 | 五個側面參考點的相對位置、正面後面是否對稱、當下有無不適 |
| 對照方式 | 與上一次照片比較變化方向，而非與他人比較 |

這套靜態觀察法是**初步的自我了解工具**，目的是幫助你更熟悉自己的身體、追蹤生活習慣調整（例如改善久坐姿勢）後是否有變化。它**不能取代專業評估**：如果觀察到明顯不對稱、合併疼痛、麻木或無力等症狀，應諮詢醫師或物理治療師做進一步檢查，不要自行判斷病因或進行矯正性治療。

明天（day17）我們會進入**動態評估**，看身體在動作中（例如深蹲）會如何呈現這些體態傾向。`,
      figures: [
        {
          id: "d16-fig4",
          title: "追蹤記錄時間軸",
          alt: "時間軸示意圖，顯示本次拍照作為記錄基準、2 到 4 週後以同樣角度再拍一次、之後持續追蹤比較變化趨勢的三個階段。",
          svg: trackingTimelineSvg,
          caption: "持續、固定角度的記錄，比單次觀察更能看出體態隨生活習慣調整而產生的變化。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "側面鉛垂線的五個參考點由上到下為：耳垂、肩峰、髖部大轉子、膝蓋外側、外踝前方。",
    "正面觀察看雙肩、雙側骨盆是否等高與頭部是否置中；後面觀察看脊椎走向與兩側肩胛是否對稱。",
    "個體骨架比例本有差異，參考點沒有完全對齊不必然代表異常，重點在持續記錄與追蹤變化。",
    "建議固定角度每 2–4 週拍照記錄一次，與自己過去的紀錄比較，而非與他人比較。",
    "靜態觀察是初步自我了解工具，不能取代專業評估；合併疼痛或明顯不對稱應諮詢專業人員。",
  ],
  quiz: [
    {
      id: "d16-q1",
      question: "側面鉛垂線觀察中，由上到下的五個參考點依序是？",
      options: [
        "頭頂、下巴、胸骨、肚臍、腳趾",
        "耳垂、肩峰、髖部大轉子、膝蓋外側、外踝前方",
        "眉心、鎖骨、腰椎、大腿內側、腳跟",
        "額頭、胸椎、骨盆前緣、小腿肚、腳背",
      ],
      answerIndex: 1,
      explanation:
        "側面鉛垂線觀察法採用的五個固定骨性地標，由上到下依序是耳垂、肩峰、髖部大轉子（股骨外側可摸到的骨突）、膝蓋外側、外踝前方，理想站姿中這五點大致落在同一條垂直線上。",
    },
    {
      id: "d16-q2",
      question: "若側面觀察發現肩峰明顯落在髖部前方，較可能對應昨天學到的哪種體態？",
      options: ["骨盆前傾", "圓肩", "扁平足", "脊椎側彎"],
      answerIndex: 1,
      explanation:
        "肩峰是肩胛骨的骨突地標，若明顯落在髖部（鉛垂線基準）前方，對應的是圓肩的觀察特徵。骨盆前傾主要看髖部與腰椎曲線，扁平足與脊椎側彎則需要不同的觀察角度與評估方式。",
    },
    {
      id: "d16-q3",
      question: "正面觀察體態時，主要應該留意什麼？",
      options: [
        "脊椎前後彎曲的四個生理曲度",
        "雙肩是否等高、雙側骨盆是否等高、頭部是否置中",
        "腳底足弓的高低",
        "呼吸時胸廓的擴張幅度",
      ],
      answerIndex: 1,
      explanation:
        "正面觀察的重點是左右對稱性：雙肩是否等高、雙側骨盆（髂骨最高點）是否等高、頭部是否置中。脊椎前後彎曲屬於側面觀察的內容，足弓與呼吸擴張則不是本節課的觀察重點。",
    },
    {
      id: "d16-q4",
      question: "後面觀察體態時，主要可以發現側面看不到的什麼線索？",
      options: [
        "頭部前移的程度",
        "腰椎前凸的角度",
        "脊椎走向是否左右偏移、兩側肩胛是否對稱",
        "膝蓋是否過度伸直",
      ],
      answerIndex: 2,
      explanation:
        "側面觀察擅長看前後方向的偏移（如頭前移、腰椎前凸），而後面觀察補足的是左右對稱性：脊椎整體走向是否左右偏移、兩側肩胛骨位置與高度是否對稱、兩側腰窩弧度是否對稱。",
    },
    {
      id: "d16-q5",
      question: "關於五個鉛垂線參考點沒有完全對齊，下列敘述何者正確？",
      options: [
        "一定代表有嚴重的脊椎疾病，需立即就醫",
        "個體骨架比例本有差異，不必然代表異常，重點是持續記錄與追蹤變化",
        "代表這套觀察法沒有用，應該放棄使用",
        "只要五點沒對齊就必須立刻進行矯正訓練",
      ],
      answerIndex: 1,
      explanation:
        "課程明確提醒每個人骨架比例本有個體差異，五點沒有完全對齊不代表一定「有問題」；這套方法的價值在於持續記錄、觀察隨時間的變化趨勢，而不是用來自行下診斷或立即進行矯正介入。",
    },
    {
      id: "d16-q6",
      question: "課程建議的記錄追蹤頻率大約是多久一次？",
      options: ["每天一次", "每 2–4 週一次", "每半年一次", "只需要拍一次終身不用再拍"],
      answerIndex: 1,
      explanation:
        "課程建議每 2–4 週固定角度拍照記錄一次即可，不需要每天拍照造成負擔，也不建議只拍一次就結束，因為持續追蹤變化趨勢才是靜態觀察法的核心價值。",
    },
    {
      id: "d16-q7",
      question: "若靜態觀察發現明顯不對稱且合併疼痛，正確的處理方式是？",
      options: [
        "自行上網查詢後開始矯正訓練",
        "先忽略，等症狀更嚴重再處理",
        "諮詢醫師或物理治療師做進一步檢查與評估",
        "增加拍照頻率到每天多次即可解決",
      ],
      answerIndex: 2,
      explanation:
        "靜態觀察法只是初步自我了解工具，不能取代專業評估。若發現明顯不對稱、合併疼痛、麻木或無力等症狀，應諮詢醫師或物理治療師做進一步檢查，不應自行判斷病因或進行矯正性治療，也不建議拖延處理。",
    },
  ],
};

export default lesson;
