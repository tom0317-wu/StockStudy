import type { DayLesson } from "@/lib/content/types";

// 人體三大解剖平面示意圖（body 為較擬真的人形輪廓 schematic）。
const threePlanesSvg = `<svg viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="0" y="0" width="360" height="480" fill="#ffffff"/>
  <!-- 冠狀面（teal，正面大矩形） -->
  <rect x="112" y="46" width="136" height="340" rx="4" fill="#14b8a6" fill-opacity="0.14" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- 身體 schematic：較擬真的人形輪廓 -->
  <ellipse cx="180" cy="66" rx="22" ry="26" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <rect x="170" y="90" width="20" height="10" rx="3" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <path d="M158 100 C152 130 160 154 168 166 C160 186 156 206 164 220 L196 220 C204 206 200 186 192 166 C200 154 208 130 202 100 Z"
        fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <line x1="162" y1="104" x2="122" y2="205" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <line x1="198" y1="104" x2="238" y2="205" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="122" cy="216" rx="10" ry="12" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <ellipse cx="238" cy="216" rx="10" ry="12" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="166" y1="222" x2="158" y2="366" stroke="#9ca3af" stroke-width="10" stroke-linecap="round"/>
  <line x1="194" y1="222" x2="202" y2="366" stroke="#9ca3af" stroke-width="10" stroke-linecap="round"/>
  <ellipse cx="158" cy="376" rx="13" ry="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <ellipse cx="202" cy="376" rx="13" ry="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <!-- 矢狀面（rose，斜帶過中線） -->
  <polygon points="180,40 220,60 220,392 180,372" fill="#f43f5e" fill-opacity="0.16" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- 橫切面（indigo，腰部水平橢圓） -->
  <ellipse cx="180" cy="205" rx="92" ry="22" fill="#6366f1" fill-opacity="0.16" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- 圖例 -->
  <g font-size="13">
    <rect x="66" y="410" width="14" height="14" rx="3" fill="#14b8a6" fill-opacity="0.35" stroke="#0d9488"/>
    <text x="86" y="422" fill="#0f172a">冠狀面：分前 / 後</text>
    <rect x="66" y="432" width="14" height="14" rx="3" fill="#f43f5e" fill-opacity="0.35" stroke="#e11d48"/>
    <text x="86" y="444" fill="#0f172a">矢狀面：分左 / 右</text>
    <rect x="66" y="454" width="14" height="14" rx="3" fill="#6366f1" fill-opacity="0.35" stroke="#4f46e5"/>
    <text x="86" y="466" fill="#0f172a">橫切面：分上 / 下</text>
  </g>
</svg>`;

// 各平面對應的動作方向示意圖（三格）。
const planeMotionsSvg = `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="210" fill="#ffffff"/>
  <defs>
    <marker id="arw" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto-start-reverse">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 矢狀面：前後 -->
  <rect x="12" y="12" width="126" height="186" rx="10" fill="#fff1f2" stroke="#fecdd3"/>
  <text x="75" y="34" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">矢狀面</text>
  <text x="75" y="52" text-anchor="middle" font-size="11" fill="#9f1239">前後方向的動作</text>
  <circle cx="75" cy="88" r="12" fill="#fda4af"/>
  <line x1="75" y1="100" x2="75" y2="142" stroke="#fb7185" stroke-width="5" stroke-linecap="round"/>
  <line x1="75" y1="114" x2="98" y2="124" stroke="#fb7185" stroke-width="4" stroke-linecap="round"/>
  <line x1="34" y1="168" x2="116" y2="168" stroke="#334155" stroke-width="2" marker-start="url(#arw)" marker-end="url(#arw)"/>
  <text x="30" y="190" font-size="11" fill="#334155">後</text>
  <text x="108" y="190" font-size="11" fill="#334155">前</text>
  <!-- 冠狀面：左右 -->
  <rect x="147" y="12" width="126" height="186" rx="10" fill="#f0fdfa" stroke="#99f6e4"/>
  <text x="210" y="34" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">冠狀面</text>
  <text x="210" y="52" text-anchor="middle" font-size="11" fill="#115e59">左右方向的動作</text>
  <circle cx="210" cy="88" r="12" fill="#5eead4"/>
  <line x1="210" y1="100" x2="210" y2="142" stroke="#2dd4bf" stroke-width="5" stroke-linecap="round"/>
  <line x1="188" y1="116" x2="232" y2="116" stroke="#2dd4bf" stroke-width="4" stroke-linecap="round"/>
  <line x1="170" y1="168" x2="250" y2="168" stroke="#334155" stroke-width="2" marker-start="url(#arw)" marker-end="url(#arw)"/>
  <text x="166" y="190" font-size="11" fill="#334155">左</text>
  <text x="244" y="190" font-size="11" fill="#334155">右</text>
  <!-- 橫切面：旋轉 -->
  <rect x="282" y="12" width="126" height="186" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
  <text x="345" y="34" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">橫切面</text>
  <text x="345" y="52" text-anchor="middle" font-size="11" fill="#3730a3">旋轉方向的動作</text>
  <circle cx="345" cy="112" r="30" fill="none" stroke="#a5b4fc" stroke-width="10"/>
  <circle cx="345" cy="112" r="7" fill="#818cf8"/>
  <path d="M345 74 A38 38 0 1 1 312 96" fill="none" stroke="#334155" stroke-width="2" marker-end="url(#arw)"/>
  <text x="345" y="190" text-anchor="middle" font-size="11" fill="#334155">左右轉體 / 轉頭</text>
</svg>`;

// 自我練習三步驟（操作步驟圖）。
const day01StepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">對著鏡子</text>
    <text x="70" y="108" font-size="12" fill="#0f172a">比出三個平面</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">挑日常動作</text>
    <text x="210" y="108" font-size="12" fill="#0f172a">判斷所屬平面</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">觀察複合動作</text>
    <text x="350" y="108" font-size="12" fill="#0f172a">常同時跨平面</text>
  </g>
</svg>`;

// 解剖學標準姿勢示意圖（body 為較擬真的人形輪廓 schematic）。
const standardPositionSvg = `<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="0" y="0" width="320" height="400" fill="#ffffff"/>
  <!-- 身體 schematic：直立、正面，較擬真的輪廓 -->
  <ellipse cx="160" cy="54" rx="24" ry="28" fill="#e5e7eb" stroke="#94a3b8" stroke-width="2"/>
  <rect x="150" y="80" width="20" height="10" rx="3" fill="#e5e7eb" stroke="#94a3b8" stroke-width="2"/>
  <path d="M134 90 C128 122 136 146 144 158 C138 178 134 198 140 218 L180 218 C186 198 182 178 176 158 C184 146 192 122 186 90 Z"
        fill="#e5e7eb" stroke="#94a3b8" stroke-width="2"/>
  <!-- 雙臂自然下垂於身體兩側 -->
  <line x1="136" y1="96" x2="112" y2="216" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
  <line x1="184" y1="96" x2="208" y2="216" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
  <!-- 掌心朝前（以青色橢圓表示手掌） -->
  <ellipse cx="112" cy="228" rx="11" ry="14" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
  <ellipse cx="208" cy="228" rx="11" ry="14" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
  <!-- 雙腿併攏 -->
  <line x1="150" y1="216" x2="146" y2="344" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
  <line x1="170" y1="216" x2="174" y2="344" stroke="#94a3b8" stroke-width="11" stroke-linecap="round"/>
  <ellipse cx="144" cy="354" rx="14" ry="8" fill="#e5e7eb" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="176" cy="354" rx="14" ry="8" fill="#e5e7eb" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- 眼睛平視水平線 -->
  <line x1="60" y1="50" x2="270" y2="50" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- 標籤 -->
  <g font-size="13">
    <text x="200" y="30" fill="#4f46e5" font-weight="bold">眼睛平視前方</text>
    <text x="228" y="120" fill="#334155">雙臂自然下垂</text>
    <line x1="226" y1="116" x2="200" y2="150" stroke="#94a3b8" stroke-width="1"/>
    <text x="228" y="234" fill="#0d9488" font-weight="bold">掌心朝前</text>
    <line x1="226" y1="230" x2="221" y2="228" stroke="#0d9488" stroke-width="1"/>
    <text x="40" y="320" fill="#334155">身體直立、雙腳併攏</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 1,
  phase: "W1",
  title: "認識人體三大面：冠狀面、矢狀面、橫切面",
  minutes: 15,
  goal: "認識描述人體的三個基本解剖平面（冠狀面、矢狀面、橫切面），並學會用它們描述常見的身體動作方向，為之後的觸診與體態觀察打好基礎。",
  sections: [
    {
      heading: "為什麼要先學「解剖平面」？",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

想像你要跟朋友描述「手臂往旁邊抬起來」這個動作：是往前抬？往側面抬？還是旋轉？如果沒有一套共同語言，描述動作很容易雞同鴨講。解剖學為此定義了**三個互相垂直的假想平面**，把人體切成不同方向的剖面，讓任何動作都能被清楚定位。

學會三大面之後，你會得到三個實際好處：

- **描述精準**：之後學觸診、體態評估時，可以準確說出「骨盆在矢狀面上前傾」而不是「骨盆好像歪歪的」。
- **看懂資料**：健身、復健相關的書籍與影片大量使用這些詞彙，這是閱讀門檻最低的一課。
- **理解動作設計**：不同平面的動作訓練到不同的肌群與控制能力，這是之後開立運動處方的基礎。

三大面都以「解剖學標準姿勢」為基準：身體直立、眼睛平視前方、雙臂自然下垂於身體兩側、掌心朝前。之後所有的方向描述，都是以這個姿勢為出發點。`,
      figures: [
        {
          id: "d01-fig0",
          title: "解剖學標準姿勢",
          alt: "正面站立人體示意圖：身體直立、雙腳併攏、眼睛平視前方（以水平虛線標示）、雙臂自然下垂於身體兩側、雙手掌心朝前（以青色小手掌標示）。",
          svg: standardPositionSvg,
          caption: "所有方向描述都以這個「解剖學標準姿勢」為出發點；掌心朝前是關鍵細節。",
        },
      ],
    },
    {
      heading: "三大面各是什麼：定義與記憶法",
      body: `三個平面互相垂直，就像把人放進一個透明盒子，從三個方向各切一刀：

| 平面 | 切法 | 把身體分成 | 記憶法 |
| --- | --- | --- | --- |
| **冠狀面**（額狀面） | 從左耳到右耳、垂直地面切下 | 前半與後半 | 想像戴皇冠的位置，沿皇冠邊緣往下切 |
| **矢狀面** | 從鼻尖到後腦、垂直地面切下 | 左半與右半 | 「矢」是箭：一支箭從正前方射穿身體的方向 |
| **橫切面**（水平面） | 與地面平行、橫著切 | 上半與下半 | 像切吐司一樣一層層水平切開 |

幾個補充觀念：

- 每個平面其實有**無限多個**：矢狀面可以切在正中央（稱為正中矢狀面，把身體分成對稱的左右兩半），也可以偏左或偏右切。
- 「冠狀面」與「額狀面」是同一個東西的兩種稱呼；「橫切面」也常稱「水平面」，看到不同書用不同名詞不用緊張。
- 三個平面是**假想的參考工具**，不是身體真實存在的構造，目的是讓大家用同一套座標講話。`,
      figures: [
        {
          id: "d01-fig1",
          title: "人體三大解剖平面",
          alt: "一個站立人體的示意圖，疊上三個互相垂直的平面：teal 色的冠狀面（分前後）為正面大矩形、rose 色的矢狀面（分左右）為沿中線的縱向斜帶、indigo 色的橫切面（分上下）為腰部的水平橢圓，下方附三色圖例。",
          svg: threePlanesSvg,
          caption: "示意圖：三個平面互相垂直，像把人放進透明盒子從三個方向各切一刀。顏色僅為區分用途。",
        },
      ],
    },
    {
      heading: "用三大面描述日常動作",
      body: `平面真正的用途是描述**動作發生的方向**：動作沿著哪個平面進行，就說它是「該平面上的動作」。以下用日常與健身常見動作舉例：

- **矢狀面動作（前後方向）**：走路擺腿、深蹲蹲下站起、彎腰鞠躬、二頭肌彎舉。這類前後方向的動作是日常生活中最常見的。
- **冠狀面動作（左右方向）**：手臂往身體側面平舉（側平舉）、身體向側邊彎（側彎）、開合跳時雙腿向外張開。
- **橫切面動作（旋轉方向）**：轉頭看後方、揮高爾夫球桿時的轉體、走路時軀幹的自然旋轉。

一個實用的觀察練習：站在鏡子前做「舉手過頭」，從**正前方**往側面抬手畫大圓，是冠狀面動作；改成從**正前方往上**舉，則主要在矢狀面進行。同一個「舉手」，路徑不同、平面就不同，訓練到的肌群與關節控制也不同。

之後第 6 天談站姿坐姿、第三週談體態評估時，會不斷用到這套語言——例如駝背主要是矢狀面上的變化、身體左右歪斜是冠狀面上的變化。今天先把三個方向記熟，後面會越用越順。`,
      figures: [
        {
          id: "d01-fig2",
          title: "各平面對應的動作方向",
          alt: "三格對照圖：矢狀面格內為側面小人與前後雙向箭頭（前後方向）、冠狀面格內為正面小人與左右雙向箭頭（左右方向）、橫切面格內為一個帶旋轉箭頭的圓（旋轉方向）。",
          svg: planeMotionsSvg,
          caption: "判斷訣竅：看動作路徑方向——前後屬矢狀面、左右屬冠狀面、旋轉屬橫切面。",
        },
      ],
    },
    {
      heading: "小結與自我練習",
      body: `今天的內容可以濃縮成一句話：**冠狀面分前後、矢狀面分左右、橫切面分上下；動作沿哪個面走，就是哪個面的動作。**

給自己三個小練習（都只是觀察與描述，不需要任何器材）：

1. **切身體**：對著鏡子，用手比出三個平面各會怎麼切過自己的身體，說出每一刀把身體分成哪兩半。
2. **拆動作**：挑三個日常動作（例如蹲下綁鞋帶、回頭看人、側身讓路），判斷每個動作主要發生在哪個平面。
3. **找混合**：觀察「打羽球殺球」或「起床下床」這類複合動作，你會發現多數真實動作**同時橫跨多個平面**——這是正常的，平面分類是幫助拆解動作的工具，不是要把動作硬塞進單一類別。

明天（第 2 天）我們會在這套座標上，認識脊椎、肩胛骨、骨盆與四肢骨等主要骨骼的位置。`,
      figures: [
        {
          id: "d01-fig3",
          title: "自我練習三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 對著鏡子比出三個平面、步驟 2 挑日常動作判斷所屬平面、步驟 3 觀察複合動作常同時跨平面。",
          svg: day01StepsSvg,
          caption: "依序完成三個小練習，都只需觀察與描述、不需器材。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "三大解剖平面以「解剖學標準姿勢」為基準：直立、掌心朝前、眼睛平視。",
    "冠狀面把身體分成前後、矢狀面分成左右、橫切面（水平面）分成上下。",
    "動作沿哪個平面進行，就稱為該平面的動作：前後動作屬矢狀面、左右動作屬冠狀面、旋轉動作屬橫切面。",
    "每個平面有無限多個切法，正中矢狀面把身體分成對稱的左右兩半。",
    "真實動作常同時橫跨多個平面，平面分類是拆解動作的工具，不是絕對的分類框。",
  ],
  quiz: [
    {
      id: "d01-q1",
      question: "關於「解剖學標準姿勢」的描述，下列何者正確？",
      options: [
        "身體直立、雙臂下垂於身體兩側、掌心朝前、眼睛平視前方",
        "身體直立、雙臂高舉過頭、掌心相對",
        "身體平躺、雙臂交叉於胸前",
        "身體直立、雙臂下垂、掌心朝向大腿外側",
      ],
      answerIndex: 0,
      explanation:
        "解剖學標準姿勢是所有方向描述的共同基準：直立、眼睛平視、雙臂自然下垂於身體兩側、掌心朝前。有了統一的基準姿勢，「前後、左右、上下」這些方向詞才不會因為身體姿勢改變而產生歧義，這也是三大平面定義的前提。",
    },
    {
      id: "d01-q2",
      question: "哪一個平面把人體分成「前半」與「後半」？",
      options: ["矢狀面", "冠狀面", "橫切面", "正中矢狀面"],
      answerIndex: 1,
      explanation:
        "冠狀面（又稱額狀面）沿著左右耳的方向垂直切下，把身體分成前半與後半，可以用「沿著皇冠邊緣往下切」來記憶。矢狀面分左右、橫切面分上下，三者互相垂直，各自負責一組方向。",
    },
    {
      id: "d01-q3",
      question: "「正中矢狀面」的特別之處是什麼？",
      options: [
        "它與地面平行，把身體分成上下兩半",
        "它是唯一真實存在於人體內的解剖構造",
        "它切在身體正中央，把身體分成大致對稱的左右兩半",
        "它把身體分成前後兩半，是冠狀面的別名",
      ],
      answerIndex: 2,
      explanation:
        "矢狀面有無限多個，可以偏左或偏右切；其中切在正中央、把身體分成大致對稱左右兩半的那一個，特別稱為正中矢狀面。所有平面都是假想的參考工具，並非真實存在的身體構造，這點對每個平面都成立。",
    },
    {
      id: "d01-q4",
      question: "小華做「側平舉」：手臂從身體兩側沿著側面方向平舉到與肩同高。這個動作主要發生在哪個平面？",
      options: ["矢狀面", "橫切面", "冠狀面", "沒有對應的平面"],
      answerIndex: 2,
      explanation:
        "側平舉的手臂路徑是沿著身體左右方向移動，屬於冠狀面上的動作；同理，身體側彎、開合跳的腿部張合也都在冠狀面進行。判斷平面的訣竅是看動作路徑的方向：前後屬矢狀面、左右屬冠狀面、旋轉屬橫切面。",
    },
    {
      id: "d01-q5",
      question: "下列哪一個動作主要屬於「橫切面」的動作？",
      options: [
        "深蹲時蹲下再站起",
        "轉頭看向身體正後方",
        "彎腰向前鞠躬",
        "手臂向正前方舉起",
      ],
      answerIndex: 1,
      explanation:
        "橫切面與地面平行，對應的是「旋轉」方向的動作，轉頭、轉體、揮高爾夫球桿的軀幹旋轉都屬於這一類。深蹲、鞠躬、手臂前舉的路徑都是前後方向，主要發生在矢狀面，這是日常生活中最常見的動作平面。",
    },
    {
      id: "d01-q6",
      question: "走路時「大腿前後擺動」的動作，主要發生在哪個平面？",
      options: ["冠狀面", "橫切面", "矢狀面", "額狀面"],
      answerIndex: 2,
      explanation:
        "走路擺腿的路徑是前後方向，屬於矢狀面動作；可以用「矢＝箭，箭從正前方射來的方向」來記憶這個前後方向的平面。額狀面是冠狀面的別名，負責左右方向，與前後擺腿無關。",
    },
    {
      id: "d01-q7",
      question: "關於三大平面與真實動作的關係，下列敘述何者最正確？",
      options: [
        "每個真實動作都只會發生在單一平面上，不會跨平面",
        "多數真實動作會同時橫跨多個平面，平面分類是幫助拆解動作的工具",
        "只有健身房的訓練動作才能用平面描述，日常動作不行",
        "平面是人體內真實存在的膜狀構造，觸診時可以摸到",
      ],
      answerIndex: 1,
      explanation:
        "像揮拍、起床下床這類複合動作，往往同時包含前後、左右與旋轉成分，硬要塞進單一平面反而失真；平面分類的價值在於把複雜動作「拆解」成可以分析的方向成分。平面也只是假想的參考座標，不是真實構造，任何動作（不限健身動作）都可以用它來描述。",
    },
  ],
};

export default lesson;
