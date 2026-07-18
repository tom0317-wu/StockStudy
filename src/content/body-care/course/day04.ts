import type { DayLesson } from "@/lib/content/types";

// 三大肌群總覽：真實 PD 全身淺層肌肉圖（正面＋背面，Wikimedia，Mikael Häggström，PD）＋中文引線標註。
// viewBox 左右各留 ~140px 給中文標籤，避免文字被 viewBox 邊界裁掉。
const bigMusclesOverviewSvg = `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="720" height="340" fill="#ffffff"/>
  <text x="250" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">正面淺層肌肉</text>
  <image href="/body-care/figures/muscles-anterior.png" x="140" y="42" width="220" height="255" preserveAspectRatio="xMidYMid meet"/>
  <text x="490" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">背面淺層肌肉</text>
  <image href="/body-care/figures/muscles-posterior.png" x="380" y="42" width="220" height="268" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="230" cy="100" r="4"/>
    <line x1="134" y1="87" x2="220" y2="100" stroke="#0d9488" stroke-width="1.5"/>
    <text x="130" y="90" text-anchor="end">胸大肌</text>
    <circle cx="242" cy="190" r="4"/>
    <line x1="134" y1="228" x2="240" y2="190" stroke="#0d9488" stroke-width="1.5"/>
    <text x="130" y="231" text-anchor="end">股四頭肌</text>
    <circle cx="480" cy="72" r="4"/>
    <line x1="606" y1="70" x2="494" y2="72" stroke="#0d9488" stroke-width="1.5"/>
    <text x="610" y="74" text-anchor="start">斜方肌</text>
    <circle cx="475" cy="120" r="4"/>
    <line x1="606" y1="150" x2="490" y2="120" stroke="#0d9488" stroke-width="1.5"/>
    <text x="610" y="154" text-anchor="start">背闊肌</text>
  </g>
</svg>`;

// 胸大肌近觀：纖維走向與功能。
const pecMajorSvg = `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="240" fill="#ffffff"/>
  <text x="190" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">胸大肌（正面示意）</text>
  <path d="M110 50 L270 50 L286 190 L94 190 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="120" y1="58" x2="260" y2="58" stroke="#94a3b8" stroke-width="2"/>
  <path d="M190 60 L120 66 Q108 110 150 150 L190 130 Z" fill="#fda4af" fill-opacity="0.75" stroke="#e11d48" stroke-width="2"/>
  <path d="M190 60 L260 66 Q272 110 230 150 L190 130 Z" fill="#fda4af" fill-opacity="0.75" stroke="#e11d48" stroke-width="2"/>
  <line x1="150" y1="150" x2="190" y2="100" stroke="#9f1239" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="230" y1="150" x2="190" y2="100" stroke="#9f1239" stroke-width="1.5" stroke-dasharray="3 3"/>
  <g font-size="11" fill="#334155">
    <text x="20" y="210">起點：胸骨與鎖骨內側</text>
    <text x="20" y="226">止點：上臂骨（肱骨）</text>
    <text x="230" y="210">功能：手臂內收、</text>
    <text x="230" y="226">內旋，如伏地挺身推</text>
  </g>
</svg>`;

// 背闊肌近觀：V 字形走向與功能。
const latSvg = `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="260" fill="#ffffff"/>
  <text x="190" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">背闊肌（背面示意）</text>
  <path d="M120 50 L260 50 L276 210 L104 210 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="190" y1="54" x2="190" y2="206" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M190 70 L140 90 Q120 150 158 196 L190 176 Z" fill="#5eead4" fill-opacity="0.8" stroke="#0d9488" stroke-width="2"/>
  <path d="M190 70 L240 90 Q260 150 222 196 L190 176 Z" fill="#5eead4" fill-opacity="0.8" stroke="#0d9488" stroke-width="2"/>
  <g font-size="11" fill="#334155">
    <text x="16" y="230">起點：下背與骨盆後方</text>
    <text x="16" y="246">（腰薦部筋膜）</text>
    <text x="230" y="230">止點：上臂骨（肱骨）</text>
    <text x="230" y="246">功能：手臂下拉、後收</text>
  </g>
</svg>`;

// 股四頭肌：真實 PD 圖（Gray's Anatomy 1918 上色版）＋中文引線標註。
const quadSvg = `<svg viewBox="0 0 340 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="290" fill="#ffffff"/>
  <image href="/body-care/figures/thigh-quadriceps.png" x="110" y="14" width="96" height="238" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="155" cy="110" r="4"/>
    <line x1="224" y1="110" x2="157" y2="110" stroke="#0d9488" stroke-width="1.5"/>
    <text x="228" y="114">股四頭肌</text>
    <circle cx="150" cy="232" r="4"/>
    <line x1="224" y1="234" x2="153" y2="232" stroke="#0d9488" stroke-width="1.5"/>
    <text x="228" y="238">膝蓋骨（髕骨）</text>
  </g>
</svg>`;

// 辨認肌肉收縮的操作步驟。
const muscleFeelStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">放鬆觸摸</text>
    <text x="70" y="108" font-size="12" fill="#64748b">感受肌肉柔軟</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">用力收縮</text>
    <text x="210" y="108" font-size="12" fill="#64748b">感受變硬、變寬</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">左右比較</text>
    <text x="350" y="108" font-size="12" fill="#64748b">留意力量差異</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 4,
  phase: "W1",
  title: "認識大肌肉群：胸大肌、背闊肌、股四頭肌",
  minutes: 16,
  goal: "認識三組體積大、容易觸摸的肌肉——胸大肌、背闊肌、股四頭肌，理解它們的位置與主要功能，並學會用主動收縮的方式辨認肌肉範圍。",
  sections: [
    {
      heading: "為什麼先認識大肌肉群？",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

人體有超過六百條肌肉，一開始不需要也不可能全部認識。今天延續昨天的觸診練習，把重點放在**大肌肉群**——體積大、位置表淺、容易觸摸與觀察，是認識肌肉系統最好的起點。

今天要認識三組代表性的大肌肉：

- **胸大肌**：位於胸前，負責「推」的動作。
- **背闊肌**：從下背延伸到上臂，負責「拉」的動作。
- **股四頭肌**：位於大腿前側，負責「伸直膝蓋」的動作。

這三組肌肉分別代表上肢推、上肢拉、下肢伸直三種基本動作模式，也是日常生活與訓練中最常用到的肌群。認識它們的位置與功能，能幫助你之後理解姿勢問題（例如圓肩常與胸大肌緊繃有關）、也能為第四週的運動處方打好基礎。`,
      figures: [
        {
          id: "d04-fig1",
          title: "全身淺層肌肉：正面與背面",
          alt: "並排兩張真實人體淺層肌肉解剖圖，左為正面（可見胸前的胸大肌、大腿前側的股四頭肌），右為背面（可見上背與腋下往下展開的背闊肌）。",
          svg: bigMusclesOverviewSvg,
          caption: "真實肌肉解剖圖。正面圖胸前的大片扇形即胸大肌、大腿前側為股四頭肌；背面圖由腋下往下背展開的即背闊肌。",
          credit: "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscles anterior/posterior labeled）",
        },
      ],
    },
    {
      heading: "胸大肌：推的肌肉",
      body: `**胸大肌**是胸前最主要的一塊肌肉，呈扇形展開，起點連接鎖骨內側與胸骨，纖維向外下方收窄，止於上臂骨（肱骨）的上端。

它的主要功能是讓手臂**內收與內旋**——白話來說，就是把手臂往身體中線帶、或往內轉。日常生活中，推門、把東西往身體方向搬、伏地挺身或臥推這類「往前推」的動作，都主要靠胸大肌出力。

胸大肌因為位置表淺，隔著衣服也大致摸得到範圍：把手掌用力互推在胸前（類似祈禱的姿勢），就能感覺到胸口肌肉明顯變硬隆起，這就是胸大肌收縮的感覺。也因為現代人常常長時間打字、滑手機，手臂經常維持在身體前方，胸大肌容易處於相對緊繃縮短的狀態，這也是之後談圓肩體態時會再提到的重點。`,
      figures: [
        {
          id: "d04-fig2",
          title: "胸大肌：位置與纖維走向",
          alt: "胸前示意圖，扇形肌肉從鎖骨與胸骨向外下方收窄止於上臂，虛線標示纖維走向朝向上臂的方向。",
          svg: pecMajorSvg,
          caption: "起點：胸骨與鎖骨內側；止點：上臂骨。功能：手臂內收、內旋，如伏地挺身「推」的動作。",
        },
      ],
    },
    {
      heading: "背闊肌：拉的肌肉",
      body: `**背闊肌**是背部面積最大的一塊肌肉，因為形狀從下背向上收窄呈 V 字形，常被俗稱為「翅膀肌」。它的起點很廣，涵蓋下背與骨盆後方的腰薦部筋膜，纖維一路向上收窄，最後止於上臂骨的上端（與胸大肌止點方向相反）。

背闊肌的主要功能是讓手臂**下拉、後收**——也就是把手臂從高處往身體方向拉下來，或往身體後方帶。日常動作中，開重門把手往下拉、划船的拉槳動作、引體向上把身體往上拉近單槓，都主要靠背闊肌出力。

想感受背闊肌收縮，可以雙手扶著桌緣或門框，做出把身體「往下壓、往內夾」的動作，會感覺到腋下到下背這片區域變得緊繃隆起。背闊肌與胸大肌是一組方向相反的「推拉搭檔」，之後談姿勢與訓練平衡時，這兩塊肌肉常會被拿來一起討論。`,
      figures: [
        {
          id: "d04-fig3",
          title: "背闊肌：位置與 V 字形走向",
          alt: "背面示意圖，V 字形肌肉從下背與骨盆後方向上收窄止於上臂，中央以虛線標示脊椎位置作為參考。",
          svg: latSvg,
          caption: "起點：下背與骨盆後方（腰薦部筋膜）；止點：上臂骨。功能：手臂下拉、後收，如引體向上或划船的拉的動作。",
        },
      ],
    },
    {
      heading: "股四頭肌：站與走的肌肉",
      body: `**股四頭肌**顧名思義由四個獨立的「頭」組成：位於中央的股直肌、外側的股外側肌、內側的股內側肌，以及位於最深層、平常摸不太到的股中間肌。四個頭在膝蓋上方匯合成一條肌腱，共同附著在膝蓋骨（髕骨）上方。

它的主要功能是**伸直膝蓋**。站立、走路、上下樓梯、從椅子上站起來，幾乎所有需要伸直膝蓋出力的動作，都仰賴股四頭肌，是下肢最重要的肌群之一，也是維持長者行走與站立穩定度的關鍵肌肉。

今天的練習建議直接感受一次收縮：坐在椅子上，把小腿用力向前伸直踢出，同時用另一手輕觸大腿前側，會明顯感覺到肌肉瞬間變硬、隆起變寬；放鬆小腿後，肌肉又會變回柔軟。這種「放鬆－收縮」的對比觸摸，是辨認任何肌肉最直接、最實用的方法，之後幾天認識新肌肉時都可以用同樣的方式練習。`,
      figures: [
        {
          id: "d04-fig4",
          title: "股四頭肌：大腿前側（真實解剖圖）",
          alt: "真實大腿前側肌肉解剖圖，顯示股四頭肌位於大腿前方、向下匯合止於膝蓋骨上方。",
          svg: quadSvg,
          caption: "真實解剖圖：股四頭肌位於大腿前側，由股直肌、股外側肌、股內側肌與深層的股中間肌組成，共同止於膝蓋骨上方、負責伸直膝蓋。",
          credit: "Michael Gasperl / Gray's Anatomy(1918), Public Domain, via Wikimedia Commons（Quadriceps.png）",
        },
        {
          id: "d04-fig5",
          title: "辨認肌肉收縮：三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 放鬆觸摸感受肌肉柔軟、步驟 2 用力收縮感受變硬變寬、步驟 3 左右比較留意力量差異。",
          svg: muscleFeelStepsSvg,
          caption: "在肌肉主動出力收縮時觸摸，最容易感受到它的位置與範圍變化，這是辨認任何肌肉最直接的方法。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "大肌肉群體積大、容易觸摸與觀察，是認識肌肉系統的起點，今天聚焦胸大肌、背闊肌、股四頭肌三組。",
    "胸大肌位於胸前，連接鎖骨與胸骨到上臂骨，主要負責手臂內收與內旋（推的動作）。",
    "背闊肌從下背延伸到上臂，呈 V 字形（俗稱翅膀肌），主要負責手臂下拉與後收（拉的動作）。",
    "股四頭肌位於大腿前側，由四個頭組成，共同負責伸直膝蓋，是站立、走路、上下樓梯的主力。",
    "在肌肉主動出力收縮時觸摸，最容易感受到位置與範圍變化，是辨認肌肉的實用技巧。",
  ],
  quiz: [
    {
      id: "d04-q1",
      question: "今天介紹的三個大肌肉群，分別位於身體哪些部位的組合是？",
      options: [
        "胸前、下背延伸到上臂、大腿前側",
        "頭部、手掌、腳掌",
        "頸部、腰部、足底",
        "眼睛周圍、耳朵、下巴",
      ],
      answerIndex: 0,
      explanation:
        "今天認識的胸大肌位於胸前、背闊肌從下背延伸到上臂呈 V 字形、股四頭肌位於大腿前側。三者分別代表上肢推、上肢拉、下肢伸直三種基本動作模式，是日常與訓練中最常用到的肌群。",
    },
    {
      id: "d04-q2",
      question: "胸大肌的主要功能為何？",
      options: [
        "讓手臂內收與內旋，如伏地挺身推的動作",
        "讓膝蓋伸直",
        "讓身體轉頭",
        "讓手臂下拉貼近身體後方",
      ],
      answerIndex: 0,
      explanation:
        "胸大肌起點連接鎖骨與胸骨，止於上臂骨，主要功能是讓手臂內收與內旋，白話來說就是「往前推」的動作，例如推門或伏地挺身。手臂下拉後收是背闊肌的功能，兩者方向相反。",
    },
    {
      id: "d04-q3",
      question: "背闊肌因為形狀常被稱為？",
      options: ["O 字形肌", "V 字形肌（俗稱翅膀肌）", "一字肌", "S 字肌"],
      answerIndex: 1,
      explanation:
        "背闊肌從下背與骨盆後方向上收窄，止於上臂骨，整體形狀呈 V 字形，因此常被俗稱為「翅膀肌」。它是背部面積最大的一塊肌肉，起點範圍相當廣。",
    },
    {
      id: "d04-q4",
      question: "背闊肌的主要功能最接近下列哪個動作？",
      options: [
        "引體向上，將身體往上拉近單槓",
        "伸直膝蓋走路",
        "轉動頭部",
        "內收手臂做推的動作",
      ],
      answerIndex: 0,
      explanation:
        "背闊肌的主要功能是手臂下拉、後收，引體向上把身體拉近單槓、划船的拉槳動作都是典型例子。內收手臂做推的動作屬於胸大肌的功能，兩者是方向相反的推拉搭檔。",
    },
    {
      id: "d04-q5",
      question: "股四頭肌位於身體哪個部位，由幾個部分（頭）組成？",
      options: ["大腿前側，四個頭", "小腿後側，兩個頭", "上臂前側，兩個頭", "下背，一個頭"],
      answerIndex: 0,
      explanation:
        "股四頭肌位於大腿前側，由股直肌、股外側肌、股內側肌、股中間肌四個頭組成，最後共同匯合止於膝蓋骨上方。四個頭一起出力才能完成伸直膝蓋的動作。",
    },
    {
      id: "d04-q6",
      question: "股四頭肌的主要功能是？",
      options: [
        "伸直膝蓋，如站立、走路、上下樓梯時出力",
        "彎曲手肘",
        "轉動肩膀",
        "彎曲腳踝",
      ],
      answerIndex: 0,
      explanation:
        "股四頭肌收縮時會伸直膝蓋，是站立、走路、上下樓梯、從椅子站起來的主力肌群，也是維持行走與站立穩定度的關鍵肌肉之一，對長者尤其重要。",
    },
    {
      id: "d04-q7",
      question: "情境題：小李想感受自己股四頭肌收縮的位置，下列哪個做法最合適？",
      options: [
        "坐著把小腿用力向前伸直踢出，同時用手觸摸大腿前側感受變硬",
        "直接用力按壓膝蓋骨內部",
        "什麼都不做，靠猜測位置",
        "在肌肉完全放鬆、沒有出力時按壓來感受收縮",
      ],
      answerIndex: 0,
      explanation:
        "讓肌肉主動出力收縮時觸摸，才能感受到肌肉變硬、隆起的變化，這是辨認肌肉最直接有效的方法。放鬆狀態下按壓摸不到收縮特徵，直接按壓骨頭則摸到的是骨骼而不是肌肉，都無法達到練習目的。",
    },
  ],
};

export default lesson;
