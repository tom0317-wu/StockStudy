import type { DayLesson } from "@/lib/content/types";

// 過緊 vs 過鬆肌肉觸摸手感對照示意圖。
const tightLooseSvg = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="240" fill="#ffffff"/>
  <!-- 左：過緊（擬真肌腹：紡錘形肌肉，兩端肌腱連向骨骼，纖維緊繃隆起） -->
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">過緊（張力過高）</text>
  <line x1="75" y1="30" x2="75" y2="46" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <line x1="135" y1="30" x2="135" y2="46" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <path d="M62 46 C58 60 58 76 66 88 C80 96 130 96 144 88 C152 76 152 60 148 46 C130 38 80 38 62 46 Z"
        fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
  <g stroke="#e11d48" stroke-width="1.3" fill="none">
    <path d="M68 52 Q105 44 142 52"/>
    <path d="M65 62 Q105 54 145 62"/>
    <path d="M65 72 Q105 64 145 72"/>
    <path d="M68 82 Q105 76 142 82"/>
  </g>
  <text x="105" y="112" text-anchor="middle" font-size="11" fill="#475569">手感：像繃緊的橡皮筋</text>
  <text x="105" y="126" text-anchor="middle" font-size="11" fill="#475569">按壓時較硬、彈性小</text>
  <text x="105" y="140" text-anchor="middle" font-size="11" fill="#475569">可能伴隨局部痠脹感</text>
  <path d="M35 60 Q20 66 35 72" fill="none" stroke="#e11d48" stroke-width="2"/>
  <path d="M175 60 Q190 66 175 72" fill="none" stroke="#e11d48" stroke-width="2"/>
  <text x="105" y="170" text-anchor="middle" font-size="11" fill="#e11d48" font-weight="bold">↔ 拉力方向：向外繃緊</text>

  <!-- 右：過鬆 -->
  <text x="315" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">過鬆（張力不足）</text>
  <path d="M270 50 Q315 40 360 50 Q365 70 315 78 Q265 70 270 50 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/>
  <path d="M275 78 Q315 92 355 78 Q358 96 315 104 Q272 96 275 78 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5" opacity="0.7"/>
  <text x="315" y="130" text-anchor="middle" font-size="11" fill="#475569">手感：像鬆軟的麵團</text>
  <text x="315" y="144" text-anchor="middle" font-size="11" fill="#475569">按壓時容易凹陷、彈性差</text>
  <text x="315" y="158" text-anchor="middle" font-size="11" fill="#475569">收縮時感覺無力、啟動慢</text>
</svg>`;

// 觸摸辨識三步驟操作圖。
const palpationTensionStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">放鬆肌肉</text>
    <text x="70" y="108" font-size="12" fill="#64748b">找肌腹中段</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">輕壓感受</text>
    <text x="210" y="108" font-size="12" fill="#64748b">軟硬度與彈性</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">左右對照</text>
    <text x="350" y="108" font-size="12" fill="#64748b">比較兩側差異</text>
  </g>
</svg>`;

// 張力與體態關聯示意圖（以圓肩為例：胸肌緊、上背弱）。
const tensionPostureLinkSvg = `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="220" fill="#ffffff"/>
  <circle cx="190" cy="46" r="16" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <path d="M190 62 Q170 80 175 110" fill="none" stroke="#e11d48" stroke-width="7" stroke-linecap="round"/>
  <path d="M190 62 Q210 80 205 110" fill="none" stroke="#4f46e5" stroke-width="7" stroke-linecap="round"/>
  <line x1="190" y1="62" x2="190" y2="150" stroke="#334155" stroke-width="4"/>
  <text x="70" y="70" font-size="12" fill="#e11d48" font-weight="bold">胸大/胸小肌</text>
  <text x="70" y="86" font-size="12" fill="#e11d48">傾向：過緊</text>
  <line x1="115" y1="80" x2="176" y2="90" stroke="#e11d48" stroke-width="1"/>
  <text x="245" y="70" font-size="12" fill="#4f46e5" font-weight="bold">中下斜方肌</text>
  <text x="245" y="86" font-size="12" fill="#4f46e5">傾向：過鬆</text>
  <line x1="240" y1="80" x2="204" y2="90" stroke="#4f46e5" stroke-width="1"/>
  <text x="190" y="190" text-anchor="middle" font-size="11" fill="#64748b">示意：圓肩體態中，前側常偏緊、後側常偏鬆</text>
  <text x="190" y="206" text-anchor="middle" font-size="11" fill="#94a3b8">（明日 day19、day20 會完整解析）</text>
</svg>`;

const lesson: DayLesson = {
  day: 18,
  phase: "W3",
  title: "肌肉張力評估：分辨過緊與過鬆",
  minutes: 16,
  goal: "學會用觸摸方式初步分辨肌肉的「過緊」與「過鬆」兩種狀態，理解張力失衡與體態偏移之間的關聯。",
  sections: [
    {
      heading: "體態觀察之後：往下摸一層",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

這幾天我們學會了用眼睛觀察體態（靜態與動態），今天要往下深入一層——**用手觸摸，感受肌肉的張力狀態**。同一個體態偏移，背後往往是「某些肌肉太緊、某些肌肉太鬆」的組合，光用眼睛看外觀還不夠，觸摸能提供更直接的資訊。

肌肉張力大致可以分成兩種偏離健康狀態的方向：

- **過緊（hypertonic）**：肌肉長期處於較高的張力狀態，摸起來偏硬、彈性較差，常見於長期收縮或代償工作的肌肉。
- **過鬆（hypotonic）**：肌肉張力偏低，摸起來偏軟、啟動反應較慢，常見於長期少用或被過緊肌肉抑制的肌肉。

這兩種狀態常常**成對出現**——一組肌肉過緊，往往伴隨它的拮抗肌（方向相反的肌肉）過鬆，這正是明天（day19）與後天（day20）要學的「交叉症候群」的基礎概念。今天先練習用觸摸分辨這兩種手感。`,
      figures: [
        {
          id: "d18-fig1",
          title: "過緊與過鬆的觸摸手感對照",
          alt: "左側示意過緊肌肉像繃緊的橡皮筋，按壓偏硬彈性小；右側示意過鬆肌肉像鬆軟的麵團，按壓容易凹陷、收縮啟動較慢。",
          svg: tightLooseSvg,
          caption: "示意圖：過緊摸起來偏硬、彈性差；過鬆摸起來偏軟、收縮反應慢，兩者是理解肌肉失衡的基本詞彙。",
        },
      ],
    },
    {
      heading: "怎麼摸：觸診張力的基本方法",
      body: `延續 day03 學過的觸診手感，今天要進一步練習「感受張力」而不只是「找骨頭」：

**步驟建議**：
1. 讓身體放鬆、肌肉不出力，找到欲觀察肌肉的**肌腹中段**（肌肉最飽滿的部位，通常在起點與終點中間）。
2. 用二至三指指腹**輕輕下壓**，感受組織的軟硬度與回彈的速度。
3. **左右對照**：同一塊肌肉在身體兩側觸摸比較，張力落差往往比單側的絕對軟硬更有參考價值。

**手感描述參考**（衛教用語，非量化診斷）：

| 狀態 | 按壓手感 | 常見伴隨現象 |
| --- | --- | --- |
| 正常 | 有彈性、按壓後緩慢回彈 | 收縮時能感受到明顯用力 |
| 過緊 | 偏硬、按壓時抵抗感明顯 | 可能有局部痠脹或按壓時的敏感點 |
| 過鬆 | 偏軟、按壓容易凹陷 | 收縮時反應較慢或不明顯 |

要注意的是，觸摸手感的判斷**需要一定的練習與經驗累積**，初學者不必急著替自己的每一塊肌肉貼標籤，重點是先熟悉「摸起來像什麼」的感覺詞彙，之後才能更準確地對照。`,
      figures: [
        {
          id: "d18-fig2",
          title: "觸摸辨識張力三步驟",
          alt: "三個編號步驟：步驟一放鬆肌肉找到肌腹中段，步驟二輕壓感受軟硬度與彈性，步驟三左右對照比較兩側差異。",
          svg: palpationTensionStepsSvg,
          caption: "觸診張力的基本流程：放鬆、輕壓、左右對照，重點是熟悉手感詞彙而非立刻下判斷。",
        },
      ],
    },
    {
      heading: "張力狀態與體態偏移的關聯",
      body: `張力評估之所以重要，是因為它能幫助**解釋體態觀察到的現象**。以 day15 學過的圓肩為例：

- 身體前側的**胸大肌、胸小肌**，因為長期處於縮短收縮的姿勢（例如打字、滑手機時手臂內收向前），傾向變得**過緊**。
- 身體後側的**中斜方肌、下斜方肌**，因為長期被拉長、較少主動收縮，傾向變得**過鬆**。

這種「前緊後鬆」的配對，會讓身體自然而然停留在圓肩的姿勢，因為緊的肌肉把骨頭往前拉，鬆的肌肉又沒有足夠力量把骨頭拉回來。這也解釋了為什麼**單純提醒自己「站直一點」效果有限**——姿勢是張力平衡的結果，只靠意識控制很難長期對抗肌肉張力的慣性。

理解這個關聯後，之後的處理原則會很直觀：**過緊的肌肉需要放鬆與伸展，過鬆的肌肉需要喚醒與強化**，而不是不分青紅皂白地「哪裡緊就按哪裡」或「哪裡痠就練哪裡」。這個「鬆緊搭配」的原則，會在明天的下交叉症候群與後天的上交叉症候群課程中，用兩組具體的肌肉配對來完整說明。`,
      figures: [
        {
          id: "d18-fig3",
          title: "張力狀態與圓肩體態的關聯示意",
          alt: "示意圖以圓肩為例，標出身體前側的胸大肌胸小肌傾向過緊，後側的中下斜方肌傾向過鬆，說明前緊後鬆的配對如何維持圓肩姿勢。",
          svg: tensionPostureLinkSvg,
          caption: "示意圖：前側肌群過緊、後側肌群過鬆的配對，是許多體態偏移背後的共同機制，明天起會逐一展開。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "肌肉張力可粗分為過緊（偏硬、彈性差）與過鬆（偏軟、收縮反應慢）兩種偏離健康狀態的方向。",
    "觸診張力的基本流程是：放鬆肌肉找肌腹中段、輕壓感受軟硬彈性、左右對照比較差異。",
    "手感判斷需要經驗累積，初學者應先熟悉感覺詞彙，不必急著替自己的每塊肌肉下判斷。",
    "體態偏移常源自「一組肌肉過緊、其拮抗肌過鬆」的配對，例如圓肩中前側胸肌緊、後側斜方肌鬆。",
    "處理原則是過緊放鬆伸展、過鬆喚醒強化，而非不分青紅皂白哪裡緊按哪裡、哪裡痠練哪裡。",
  ],
  quiz: [
    {
      id: "d18-q1",
      question: "肌肉「過緊」狀態的觸摸手感描述，下列何者較符合？",
      options: [
        "像鬆軟的麵團，按壓容易凹陷",
        "像繃緊的橡皮筋，按壓偏硬、彈性較差",
        "完全沒有任何觸感差異",
        "只有在骨頭上才摸得到",
      ],
      answerIndex: 1,
      explanation:
        "過緊（hypertonic）肌肉長期處於較高張力狀態，觸摸手感像繃緊的橡皮筋，按壓時偏硬、彈性較差，可能伴隨局部痠脹感。鬆軟像麵團、按壓容易凹陷則是過鬆的描述，兩者是相反的手感詞彙。",
    },
    {
      id: "d18-q2",
      question: "觸診張力時，建議先找到肌肉的哪個部位開始觸摸？",
      options: ["肌肉的起點骨突處", "肌肉的終點骨突處", "肌腹中段（肌肉最飽滿處）", "皮膚表面任一點皆可"],
      answerIndex: 2,
      explanation:
        "建議在肌肉放鬆、不出力的狀態下，找到肌腹中段（肌肉最飽滿的部位，通常在起點與終點中間）用指腹輕壓感受軟硬度與回彈速度，這是觸診張力最基本的起始位置。",
    },
    {
      id: "d18-q3",
      question: "課程建議觸診張力時，為什麼要「左右對照」？",
      options: [
        "因為左右對照沒有任何實際意義，只是習慣動作",
        "因為張力落差往往比單側的絕對軟硬更有參考價值",
        "因為左右兩側的肌肉名稱不同",
        "因為只有右側肌肉需要評估",
      ],
      answerIndex: 1,
      explanation:
        "同一塊肌肉在身體兩側觸摸比較，能感受到的張力落差往往比單側絕對的軟硬程度更有參考價值，因為每個人肌肉本身的基礎軟硬度不同，左右對照能排除個體差異的干擾。",
    },
    {
      id: "d18-q4",
      question: "以圓肩體態為例，身體前側的胸大肌、胸小肌傾向呈現什麼張力狀態？",
      options: ["過緊", "過鬆", "完全沒有張力", "與體態無關"],
      answerIndex: 0,
      explanation:
        "圓肩體態中，身體前側的胸大肌、胸小肌因長期處於縮短收縮姿勢（如打字、滑手機手臂內收），傾向變得過緊，把肩胛骨往前拉；而後側的中下斜方肌則傾向過鬆，兩者配對維持了圓肩的姿勢。",
    },
    {
      id: "d18-q5",
      question: "為什麼課程說「單純提醒自己站直效果有限」？",
      options: [
        "因為姿勢完全由意志力決定，與肌肉無關",
        "因為姿勢是張力平衡的結果，只靠意識控制難以長期對抗肌肉張力的慣性",
        "因為站直對身體有害，不應該嘗試",
        "因為肌肉張力永遠不會改變",
      ],
      answerIndex: 1,
      explanation:
        "姿勢是身體整體肌肉張力平衡呈現出來的結果：緊的肌肉把骨頭拉往一邊，鬆的肌肉力量不足以拉回來。只靠意識短暫挺胸無法改變背後的張力失衡，所以效果有限，需要搭配放鬆過緊肌群與強化過鬆肌群才能有較持久的改變。",
    },
    {
      id: "d18-q6",
      question: "根據課程原則，處理「過緊」與「過鬆」肌肉分別應採取什麼方向？",
      options: [
        "過緊需要強化訓練，過鬆需要伸展放鬆",
        "過緊需要放鬆與伸展，過鬆需要喚醒與強化",
        "兩者都只需要伸展放鬆即可",
        "兩者都只需要高強度肌力訓練即可",
      ],
      answerIndex: 1,
      explanation:
        "課程提出的原則是過緊的肌肉需要放鬆與伸展來降低張力，過鬆的肌肉需要喚醒與強化來提升收縮能力，而不是不分青紅皂白哪裡緊就按哪裡、哪裡痠就練哪裡。這個原則會在明天的下交叉症候群課程中具體展開。",
    },
  ],
};

export default lesson;
