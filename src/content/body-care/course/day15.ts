import type { DayLesson } from "@/lib/content/types";

// 圓肩／駝背：正常姿勢 vs 不良姿勢對照（自繪擬真人形，參考 day06 手法）＋
// 第三格用真實公有領域脊椎側面圖（Wikimedia Commons，Mikael Häggström，CC0／Public Domain）
// 疊中文引線標出頸椎／胸椎（駝背常發生處）／腰椎，呼應駝背＝胸椎後凸增加的解剖對應。
const postureSpineCompareSvg = `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="720" height="300" fill="#ffffff"/>
  <line x1="200" y1="10" x2="200" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="460" y1="10" x2="460" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <!-- 左：正常姿勢（自繪擬真人形） -->
  <text x="90" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">正常姿勢</text>
  <line x1="90" y1="34" x2="90" y2="248" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <ellipse cx="90" cy="52" rx="14" ry="17" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <path d="M78 75 C73 98 78 116 84 126 C80 142 76 158 82 174 L98 174 C104 158 100 142 96 126 C102 116 107 98 102 75 Z"
        fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="182" x2="76" y2="246" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
  <line x1="100" y1="182" x2="104" y2="246" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="75" cy="254" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="105" cy="254" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <g fill="#0d9488">
    <circle cx="90" cy="52" r="3"/>
    <circle cx="90" cy="80" r="3"/>
    <circle cx="90" cy="174" r="3"/>
  </g>
  <g font-size="11" fill="#0d9488">
    <line x1="93" y1="52" x2="140" y2="52" stroke="#0d9488" stroke-width="1.5"/>
    <text x="146" y="56" text-anchor="start">耳垂</text>
    <line x1="93" y1="80" x2="140" y2="80" stroke="#0d9488" stroke-width="1.5"/>
    <text x="146" y="84" text-anchor="start">肩峰</text>
    <line x1="93" y1="174" x2="140" y2="174" stroke="#0d9488" stroke-width="1.5"/>
    <text x="146" y="178" text-anchor="start">髖部</text>
  </g>
  <text x="90" y="270" text-anchor="middle" font-size="11" fill="#0f766e">耳肩髖大致對齊</text>
  <!-- 中：圓肩＋駝背（自繪擬真人形，前傾角度誇大以利觀察） -->
  <text x="320" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">圓肩＋駝背</text>
  <line x1="320" y1="34" x2="320" y2="248" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <ellipse cx="338" cy="58" rx="15" ry="18" fill="#fde8e8" stroke="#e11d48" stroke-width="2"/>
  <path d="M338 76 Q305 100 310 150" fill="none" stroke="#e11d48" stroke-width="8" stroke-linecap="round"/>
  <path d="M305 96 Q291 132 297 172" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <line x1="310" y1="150" x2="305" y2="220" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <g fill="#e11d48">
    <circle cx="338" cy="58" r="3"/>
    <circle cx="308" cy="118" r="3"/>
    <circle cx="307" cy="220" r="3"/>
  </g>
  <line x1="338" y1="58" x2="307" y2="220" stroke="#e11d48" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="350" y="62" font-size="11" fill="#475569">頭前移</text>
  <text x="235" y="122" font-size="11" fill="#475569">肩前移</text>
  <text x="350" y="180" font-size="11" fill="#475569">胸椎後凸增加</text>
  <text x="320" y="270" text-anchor="middle" font-size="11" fill="#9f1239">頭前移、肩前移、胸椎後凸增加同時出現</text>
  <!-- 右：脊椎側面彎曲示意（自繪 S 形），標出頸椎／胸椎後凸（駝背處）／腰椎 -->
  <text x="592" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">脊椎側面彎曲（示意）</text>
  <ellipse cx="576" cy="146" rx="26" ry="34" fill="#e11d48" fill-opacity="0.14" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="3 3"/>
  <path d="M592 52 C606 72 607 94 590 110 C571 134 570 170 594 192 C607 206 605 224 588 234" fill="none" stroke="#0d9488" stroke-width="7" stroke-linecap="round"/>
  <g font-size="13" font-weight="bold">
    <circle cx="600" cy="74" r="3.5" fill="#0d9488"/>
    <line x1="511" y1="70" x2="598" y2="74" stroke="#0d9488" stroke-width="1.5"/>
    <text x="505" y="74" text-anchor="end" fill="#0d9488">頸椎</text>
    <circle cx="572" cy="146" r="4" fill="#e11d48"/>
    <line x1="511" y1="146" x2="574" y2="146" stroke="#e11d48" stroke-width="1.5"/>
    <text x="505" y="150" text-anchor="end" fill="#e11d48">胸椎後凸</text>
    <circle cx="600" cy="196" r="3.5" fill="#0d9488"/>
    <line x1="511" y1="200" x2="598" y2="196" stroke="#0d9488" stroke-width="1.5"/>
    <text x="505" y="204" text-anchor="end" fill="#0d9488">腰椎</text>
  </g>
  <text x="592" y="252" text-anchor="middle" font-size="11" fill="#9f1239">脊椎彎曲：胸椎後凸增加是駝背的解剖對應</text>
</svg>`;

// 骨盆前傾：真實公有領域骨盆正面圖（Wikimedia Commons，Je / uwo, Public Domain）
// 左格原樣顯示＋中文引線標髂前上棘／恥骨聯合；右格用 transform 旋轉同一張真圖模擬前傾角度，
// 搭配虛線鉛垂參考線與中文引線，示意骨盆前緣下傾、腰椎前凸角度隨之增加。
const pelvicTiltSvg = `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="640" height="320" fill="#ffffff"/>
  <text x="120" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">骨盆中立（正面）</text>
  <image href="/body-care/figures/pelvis-anterior.png" x="30" y="65" width="180" height="134.7" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="12" font-weight="bold" fill="#0d9488">
    <circle cx="76" cy="115" r="4"/>
    <line x1="85" y1="112" x2="214" y2="97" stroke="#0d9488" stroke-width="1.5"/>
    <text x="220" y="101" text-anchor="start">髂前上棘</text>
    <circle cx="132" cy="165" r="4"/>
    <line x1="140" y1="168" x2="214" y2="200" stroke="#0d9488" stroke-width="1.5"/>
    <text x="220" y="204" text-anchor="start">恥骨聯合</text>
  </g>
  <text x="120" y="295" text-anchor="middle" font-size="11" fill="#0f766e">髂前上棘與恥骨聯合約略同一水平面</text>

  <text x="520" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">骨盆前傾（示意）</text>
  <line x1="520" y1="60" x2="520" y2="215" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"/>
  <image href="/body-care/figures/pelvis-anterior.png" x="430" y="65" width="180" height="134.7"
         preserveAspectRatio="xMidYMid meet" transform="rotate(16 520 132.35)"/>
  <g font-size="12" font-weight="bold" fill="#e11d48">
    <line x1="426" y1="100" x2="470" y2="95" stroke="#e11d48" stroke-width="1.5"/>
    <text x="420" y="104" text-anchor="end">骨盆前緣下傾</text>
  </g>
  <text x="420" y="230" text-anchor="end" font-size="11" fill="#9f1239">腰椎前凸隨之增加</text>
  <text x="520" y="295" text-anchor="middle" font-size="11" fill="#9f1239">骨盆前緣下傾使腰椎前凸角度增加</text>
</svg>`;

// 三種體態重點對照速記（操作步驟圖樣式，改為「觀察三重點」）。
const observeStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">看肩膀前後</text>
    <text x="70" y="108" font-size="12" fill="#64748b">是否比耳朵靠前</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">看上背弧度</text>
    <text x="210" y="108" font-size="12" fill="#64748b">是否明顯拱起</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">看腰部曲線</text>
    <text x="350" y="108" font-size="12" fill="#64748b">前凸是否過大</text>
  </g>
</svg>`;

// 四週課程節奏提醒：本週只觀察，強化訓練留到第四週。
const courseTimelineSvg = `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="140" fill="#ffffff"/>
  <line x1="50" y1="60" x2="380" y2="60" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="60" r="16" fill="#0d9488"/>
    <text x="60" y="65" font-size="12" font-weight="bold" fill="#ffffff">W3</text>
    <text x="60" y="98" font-size="11" fill="#0f172a">觀察與辨識</text>
    <text x="60" y="112" font-size="10" fill="#64748b">（今天在這裡）</text>
    <circle cx="220" cy="60" r="16" fill="#5eead4"/>
    <text x="220" y="65" font-size="11" font-weight="bold" fill="#0f172a">19-20</text>
    <text x="220" y="98" font-size="11" fill="#0f172a">交叉症候群解析</text>
    <text x="220" y="112" font-size="10" fill="#64748b">鬆緊配對原則</text>
    <circle cx="370" cy="60" r="16" fill="#cbd5e1"/>
    <text x="370" y="65" font-size="12" font-weight="bold" fill="#334155">W4</text>
    <text x="370" y="98" font-size="11" fill="#0f172a">強化訓練</text>
    <text x="370" y="112" font-size="10" fill="#64748b">實際介入方案</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 15,
  phase: "W3",
  title: "常見不良體態識別：圓肩、駝背、骨盆前傾",
  minutes: 17,
  goal: "認識三種最常見的不良體態——圓肩、駝背、骨盆前傾——的外觀特徵與常見成因，建立日後體態觀察與評估的基礎詞彙。",
  sections: [
    {
      heading: "為什麼要先學「認人」",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

進入第三週，我們從「認識結構」與「動手放鬆」，進階到「看懂身體在說什麼」。功能性評估的第一步不是複雜的量測工具，而是**用眼睛觀察體態**。就像認人要先記住幾張常見臉孔，體態觀察也要先熟悉幾種最常見的「不良姿勢長相」，之後看到真人才能快速對上號。

今天要認識的三種體態，彼此關係密切、常常同時出現：

- **圓肩（rounded shoulders）**：肩膀習慣性往前捲，靜止站立時肩峰明顯落在耳垂前方。
- **駝背（thoracic hyperkyphosis）**：胸椎後凸角度比正常大，上背看起來明顯拱起。
- **骨盆前傾（anterior pelvic tilt）**：骨盆前緣往下轉，腰椎前凸角度跟著加大，小腹容易前凸。

這三者常見於長時間久坐、滑手機、缺乏核心與背部肌力訓練的人，是一種**姿勢適應**的結果，而不是天生的骨骼疾病。今天先建立辨識的眼光，明天（day16）再學系統性的靜態觀察方法。`,
      figures: [
        {
          id: "d15-fig1",
          title: "正常姿勢 vs 圓肩駝背側面對照",
          alt: "三格對照：左側正常姿勢人形，耳垂、肩峰、髖部大致落在同一條鉛垂線上；中間圓肩駝背人形，頭部前移、肩膀前移、上背弧度增加；右側脊椎側面 S 形示意，以中文引線標出頸椎、胸椎後凸（駝背處）、腰椎。",
          svg: postureSpineCompareSvg,
          caption: "示意圖（非解剖精確比例）：右側脊椎側面圖顯示駝背對應的是胸椎後凸角度增加。",
        },
      ],
    },
    {
      heading: "圓肩與駝背：上半身的一對搭檔",
      body: `圓肩與駝背幾乎總是**一起出現**，因為它們互相牽動：

**圓肩的外觀特徵**：從側面看，肩峰（肩膀最外側的骨突）明顯落在耳垂垂直線的前方；從正面看，手臂自然下垂時，手背可能朝向前方而非朝向大腿外側。

**駝背的外觀特徵**：從側面看，上背（胸椎段）弧度比正常明顯拱起，站立時像是「揹著一個隱形背包」；嚴重時低頭看手機的姿勢會變成常態姿勢，即使不看手機也回不到中立位置。

**常見成因**（衛教常識，非診斷）：
- 長時間打字、滑手機，肩膀與頭部習慣性前伸。
- 胸前肌群（胸大肌、胸小肌）長期縮短緊繃，牽引肩胛骨往前拉。
- 上背與肩胛骨周圍的肌群（如中下斜方肌）相對無力，撐不住肩胛骨在正確位置。

這種「前面緊、後面弱」的失衡模式，會在 day20（上交叉症候群）做更完整的系統性解析，今天先記住「看得到的樣子」。`,
      figures: [
        {
          id: "d15-fig2",
          title: "觀察三重點速記",
          alt: "三個編號步驟：步驟一看肩膀前後是否比耳朵靠前，步驟二看上背弧度是否明顯拱起，步驟三看腰部曲線前凸是否過大。",
          svg: observeStepsSvg,
          caption: "日常快速自我檢查可先用這三個重點，不需要器材，明天會學更完整的靜態觀察法。",
        },
      ],
    },
    {
      heading: "骨盆前傾：下半身的曲線放大",
      body: `骨盆前傾是指骨盆的前緣（恥骨附近）相對於後緣（薦椎附近）往下轉，用日常話說就是「屁股翹、小腹凸」，但這和「翹臀好看」不完全是同一回事——過度的骨盆前傾會讓**腰椎前凸角度被放大**，久了容易造成下背區域的緊繃與痠痛感。

**觀察線索**（衛教常識，非量測工具）：
- 側面看，腰部下方的凹陷弧度比一般人明顯更深。
- 站立時小腹習慣性前凸，即使收腹也不容易維持。
- 站直時，髂前上棘（骨盆前方摸得到的骨突）位置常明顯低於或前於恥骨聯合。

**常見成因**：久坐使髖屈肌群（如腸腰肌）長期處於縮短狀態、核心與臀部肌群相對少用而力量不足，站立時骨盆便失去「中立」的平衡點。這個「緊繃 vs 無力」的配對，會在 day19（下交叉症候群）完整展開。

今天的重點只是**先能認出「這是骨盆前傾的樣子」**，不需要現在就判斷嚴重程度或做任何矯正動作。`,
      figures: [
        {
          id: "d15-fig3",
          title: "骨盆中立 vs 骨盆前傾對照（真實骨盆圖）",
          alt: "真實骨盆正面圖：左側原樣顯示並以中文引線標出髂前上棘與恥骨聯合，兩者大致同一水平面；右側為同一張真圖旋轉示意骨盆前傾，搭配虛線鉛垂參考線標出骨盆前緣下傾、腰椎前凸隨之增加。",
          svg: pelvicTiltSvg,
          caption: "真實骨盆圖對照：右側骨盆前緣往下轉，連帶使腰椎前凸角度增加，是常見的下半身體態特徵。",
          credit: "Je（uwo, English Wikipedia）, Public Domain, via Wikimedia Commons（Pelvis_diagram.png）",
        },
      ],
    },
    {
      heading: "今天不做的事：先觀察，不評判、不矯正",
      body: `學會辨識這三種體態後，很容易出現一種衝動：想立刻「糾正」自己或家人的姿勢。今天想提醒的是——**體態是長期習慣累積的結果，不是一天造成、也不會一天改變**，貿然用力挺胸夾背，反而容易造成其他部位代償緊繃。

三個提醒：

1. **這不是疾病診斷**。圓肩、駝背、骨盆前傾是描述姿勢傾向的衛教用語，不是醫療診斷名稱；是否需要進一步評估或治療，請諮詢醫師或物理治療師。
2. **程度差異很大**。多數人都有輕微的圓肩或骨盆前傾傾向，只有明顯影響生活或伴隨疼痛時才需要專業介入。
3. **接下來的課程會循序漸進**：day16 學系統性的靜態觀察法、day17 學動態評估、day19–20 學交叉症候群的鬆緊原則，最後在第四週才進入實際的強化訓練。今天只要練習「用眼睛認出這三種樣子」就足夠了。

建議練習：找一面全身鏡，或請家人幫忙從側面拍一張自然站立的照片，先不做任何調整，單純觀察自己屬於哪種傾向、程度大概如何，作為之後幾天課程的對照基準。`,
      figures: [
        {
          id: "d15-fig4",
          title: "本週課程節奏：先觀察、再解析、後訓練",
          alt: "時間軸示意圖，標示第三週目前階段為觀察與辨識，day19 至 20 為交叉症候群解析，第四週才進入實際強化訓練，說明課程循序漸進的安排。",
          svg: courseTimelineSvg,
          caption: "今天只需要練習「認出樣子」，鬆緊原則與實際訓練會在接下來幾天與第四週依序展開，不需要現在就自行矯正。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "圓肩指肩峰落在耳垂前方；駝背指胸椎後凸角度增加，上背明顯拱起，兩者常同時出現。",
    "骨盆前傾指骨盆前緣下傾、腰椎前凸角度加大，外觀上呈現小腹前凸、下背凹陷加深。",
    "三種體態多與久坐、滑手機、肌力失衡等生活習慣有關，是姿勢適應而非天生骨骼疾病。",
    "今天的任務是「認出樣子」，不做矯正也不做診斷；程度判斷與治療請諮詢專業人員。",
    "上半身「前緊後弱」與下半身「屈肌緊、臀腹弱」的配對，會在 day19、day20 完整展開。",
  ],
  quiz: [
    {
      id: "d15-q1",
      question: "從側面觀察，圓肩最主要的外觀特徵是什麼？",
      options: [
        "肩峰明顯落在耳垂垂直線的前方",
        "肩峰明顯落在耳垂垂直線的後方",
        "兩側肩膀高低不一致",
        "肩胛骨完全無法移動",
      ],
      answerIndex: 0,
      explanation:
        "圓肩是指肩膀習慣性往前捲，側面觀察時肩峰會明顯落在耳垂垂直線前方，正面觀察時手臂自然下垂手背可能朝前。這和肩胛骨完全不能動不同，圓肩通常仍保有活動度，只是靜止時的位置習慣性偏前。",
    },
    {
      id: "d15-q2",
      question: "駝背指的是身體哪個部位的曲線出現什麼變化？",
      options: [
        "頸椎前凸角度變平",
        "胸椎後凸角度比正常增加",
        "腰椎前凸角度變平",
        "骨盆完全後傾",
      ],
      answerIndex: 1,
      explanation:
        "駝背（thoracic hyperkyphosis）指的是胸椎原本就有的後凸曲線角度比正常更大，站立時上背明顯拱起，像揹著隱形背包。它常與圓肩一起出現，因為胸前肌群緊繃會牽引肩胛骨前引，連帶影響上背姿勢。",
    },
    {
      id: "d15-q3",
      question: "骨盆前傾在外觀上常見的線索是？",
      options: [
        "小腹習慣性前凸、下背凹陷弧度比一般人更深",
        "骨盆完全無法轉動",
        "雙腿長度出現明顯差異",
        "膝蓋過度往內夾",
      ],
      answerIndex: 0,
      explanation:
        "骨盆前傾是骨盆前緣相對後緣往下轉，會讓腰椎前凸角度被放大，外觀上表現為小腹前凸、下背凹陷弧度加深。雙腿長度差異或膝內夾是不同的評估項目，不屬於骨盆前傾的典型外觀特徵。",
    },
    {
      id: "d15-q4",
      question: "圓肩與駝背常一起出現，衛教常識上比較常見的解釋是什麼？",
      options: [
        "兩者完全沒有關聯，只是巧合",
        "胸前肌群緊繃牽引肩胛前引，同時上背肌群相對無力撐不住肩胛位置",
        "駝背一定是脊椎骨折造成",
        "圓肩只會發生在老年人身上",
      ],
      answerIndex: 1,
      explanation:
        "常見的衛教解釋是「前面緊、後面弱」的失衡：胸大肌、胸小肌長期縮短緊繃，把肩胛骨往前拉；同時中下斜方肌等上背肌群相對無力，無法把肩胛骨撐回正確位置，兩者一起造成圓肩合併駝背的外觀。",
    },
    {
      id: "d15-q5",
      question: "關於今天課程對這三種體態的定位，下列敘述何者正確？",
      options: [
        "圓肩、駝背、骨盆前傾都是明確的醫療診斷名稱",
        "這些是描述姿勢傾向的衛教用語，是否需專業介入應諮詢醫師或物理治療師",
        "只要發現自己有這些傾向，就應立即用力挺胸矯正",
        "這些體態是天生骨骼結構異常，無法透過生活習慣改變",
      ],
      answerIndex: 1,
      explanation:
        "課程明確提醒這些是描述姿勢傾向的衛教用語而非醫療診斷，程度判斷與治療需求應諮詢醫師或物理治療師。貿然用力矯正反而可能造成其他部位代償緊繃，體態多與生活習慣有關，並非不可調整的天生結構異常。",
    },
    {
      id: "d15-q6",
      question: "今天課程建議的練習方式是什麼？",
      options: [
        "立刻開始高強度的矯正訓練",
        "用全身鏡或側面照片，單純觀察自己屬於哪種傾向與程度，作為之後課程的對照基準",
        "去醫院做完整的影像檢查才能開始學習",
        "什麼都不用做，直接跳到第四週的訓練課程",
      ],
      answerIndex: 1,
      explanation:
        "今天的重點是「先觀察、不評判、不矯正」，建議用全身鏡或側面自然站立照片，單純觀察體態傾向與程度，作為後續 day16 靜態觀察法、day19、day20 交叉症候群課程的對照基準，而非立刻進行訓練或要求做醫學影像檢查。",
    },
  ],
};

export default lesson;
