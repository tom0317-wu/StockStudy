import type { DayLesson } from "@/lib/content/types";

// 下交叉症候群緊繃／無力肌群：真實 PD 全身肌肉圖（正面＋背面，Mikael Häggström，PD）＋中文引線標註。
// viewBox 左右各留 140px 給中文標籤，避免文字被邊界裁掉。
const lowerCrossMusclesRealSvg = `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="760" height="380" fill="#ffffff"/>
  <text x="245" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">正面（腹肌／髖屈肌區）</text>
  <image href="/body-care/figures/muscles-anterior.png" x="140" y="42" width="210" height="244" preserveAspectRatio="xMidYMid meet"/>
  <text x="515" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">背面（豎脊肌／臀肌區）</text>
  <image href="/body-care/figures/muscles-posterior.png" x="410" y="42" width="210" height="256" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold">
    <circle cx="245" cy="140" r="4" fill="#6366f1"/>
    <line x1="130" y1="140" x2="226" y2="140" stroke="#6366f1" stroke-width="1.5"/>
    <text x="126" y="136" text-anchor="end" fill="#4f46e5">腹肌群</text>
    <text x="126" y="152" text-anchor="end" font-size="11" font-weight="normal" fill="#4f46e5">傾向：無力</text>
    <circle cx="255" cy="172" r="4" fill="#f43f5e"/>
    <line x1="130" y1="210" x2="252" y2="174" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="126" y="206" text-anchor="end" fill="#e11d48">髖屈肌</text>
    <text x="126" y="222" text-anchor="end" font-size="11" font-weight="normal" fill="#e11d48">（腸腰肌）傾向：過緊</text>
    <circle cx="510" cy="130" r="4" fill="#f43f5e"/>
    <line x1="630" y1="146" x2="515" y2="130" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="634" y="142" text-anchor="start" fill="#e11d48">豎脊肌</text>
    <text x="634" y="158" text-anchor="start" font-size="11" font-weight="normal" fill="#e11d48">（下背）傾向：過緊</text>
    <circle cx="525" cy="150" r="4" fill="#6366f1"/>
    <line x1="630" y1="200" x2="535" y2="153" stroke="#6366f1" stroke-width="1.5"/>
    <text x="634" y="204" text-anchor="start" fill="#4f46e5">臀肌群</text>
    <text x="634" y="220" text-anchor="start" font-size="11" font-weight="normal" fill="#4f46e5">傾向：無力</text>
  </g>
  <rect x="290" y="330" width="14" height="10" fill="#f43f5e"/>
  <text x="310" y="339" font-size="11" fill="#334155">紅：緊繃部位（放鬆伸展）</text>
  <rect x="470" y="330" width="14" height="10" fill="#6366f1"/>
  <text x="490" y="339" font-size="11" fill="#334155">藍紫：無力部位（喚醒強化）</text>
  <text x="380" y="362" text-anchor="middle" font-size="11" fill="#94a3b8">真實解剖圖＋概略引線標示，實際肌肉邊界略有個體差異</text>
</svg>`;

// 下交叉症候群：緊繃肌群 vs 無力肌群交叉示意圖（側面，填色人形輪廓）。
const lowerCrossSvg = `<svg viewBox="0 0 340 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="320" fill="#ffffff"/>
  <!-- 側面人形輪廓（填色） -->
  <g fill="#e5e7eb" stroke="#94a3b8" stroke-width="2">
    <ellipse cx="168" cy="46" rx="16" ry="19"/>
    <rect x="161" y="62" width="14" height="12" rx="4"/>
    <path d="M148 74 C140 100 142 128 152 150 C146 168 146 186 156 200 L182 200 C188 186 186 168 178 150 C186 128 186 100 178 74 Z"/>
    <path d="M156 200 C152 224 154 248 158 268 L176 268 C180 248 178 224 176 200 Z"/>
    <path d="M158 268 C156 284 157 296 158 306 L172 306 C173 296 174 284 174 268 Z"/>
  </g>
  <!-- 骨盆環（示意） -->
  <ellipse cx="164" cy="196" rx="26" ry="18" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 3"/>
  <!-- 交叉線：緊繃（豎脊肌 後上）與（髖屈肌 前下）-->
  <line x1="180" y1="130" x2="146" y2="196" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
  <!-- 交叉線：無力（腹肌 前上）與（臀肌 後下）-->
  <line x1="150" y1="140" x2="176" y2="200" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4 3"/>
  <!-- 標籤：緊繃 rose -->
  <circle cx="180" cy="130" r="6" fill="#f43f5e"/>
  <text x="194" y="122" font-size="12" fill="#e11d48" font-weight="bold">豎脊肌（下背）</text>
  <text x="194" y="138" font-size="11" fill="#e11d48">傾向：過緊</text>
  <circle cx="146" cy="196" r="6" fill="#f43f5e"/>
  <text x="10" y="204" font-size="12" fill="#e11d48" font-weight="bold">髖屈肌（腸腰肌）</text>
  <text x="10" y="220" font-size="11" fill="#e11d48">傾向：過緊</text>
  <!-- 標籤：無力 indigo -->
  <circle cx="150" cy="140" r="6" fill="#6366f1"/>
  <text x="10" y="122" font-size="12" fill="#4f46e5" font-weight="bold">腹肌群</text>
  <text x="10" y="138" font-size="11" fill="#4f46e5">傾向：無力</text>
  <circle cx="176" cy="200" r="6" fill="#6366f1"/>
  <text x="190" y="210" font-size="12" fill="#4f46e5" font-weight="bold">臀肌群</text>
  <text x="190" y="226" font-size="11" fill="#4f46e5">傾向：無力</text>
  <!-- 圖例 -->
  <rect x="20" y="270" width="14" height="10" fill="#f43f5e"/>
  <text x="40" y="279" font-size="11" fill="#334155">紅：緊繃需放鬆伸展</text>
  <rect x="180" y="270" width="14" height="10" fill="#6366f1"/>
  <text x="200" y="279" font-size="11" fill="#334155">藍紫：無力需喚醒強化</text>
  <text x="170" y="305" text-anchor="middle" font-size="11" fill="#94a3b8">示意圖：X 形交叉配對於側面人形上，非解剖精確位置</text>
</svg>`;

// 下交叉症候群的體態連帶效應（骨盆前傾＋腰椎前凸放大，填色人形輪廓）。
const lowerCrossPostureSvg = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="320" height="260" fill="#ffffff"/>
  <line x1="160" y1="20" x2="160" y2="240" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
  <ellipse cx="150" cy="34" rx="13" ry="15" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <rect x="144" y="47" width="12" height="10" rx="3" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <path d="M138 57 C128 78 130 100 144 116 Q160 148 150 176" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
  <path d="M130 150 Q160 138 190 150 L184 196 Q160 212 136 196 Z" fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
  <path d="M150 196 C148 214 150 228 154 240" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <text x="200" y="150" font-size="11" fill="#e11d48" font-weight="bold">骨盆前緣下傾</text>
  <text x="200" y="164" font-size="11" fill="#e11d48">（前傾）</text>
  <text x="20" y="90" font-size="11" fill="#475569" font-weight="bold">腰椎前凸</text>
  <text x="20" y="104" font-size="11" fill="#475569">角度放大</text>
  <line x1="25" y1="96" x2="140" y2="100" stroke="#475569" stroke-width="1"/>
  <text x="160" y="255" text-anchor="middle" font-size="11" fill="#94a3b8">緊繃的髖屈肌與豎脊肌把骨盆往前下拉，無力的腹臀肌撐不住</text>
</svg>`;

// 調整原則三步驟。
const adjustStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">放鬆過緊處</text>
    <text x="70" y="108" font-size="12" fill="#64748b">髖屈肌、下背</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">喚醒無力處</text>
    <text x="210" y="108" font-size="12" fill="#64748b">腹肌、臀肌</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">規律重複</text>
    <text x="350" y="108" font-size="12" fill="#64748b">觀察體態變化</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 19,
  phase: "W3",
  title: "下交叉症候群解析與調整原則",
  minutes: 17,
  goal: "認識下交叉症候群（lower crossed syndrome）的緊繃與無力肌群配對，理解其與骨盆前傾體態的關聯，以及一般性的調整原則。",
  sections: [
    {
      heading: "把這幾天的線索串起來",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

從 day15 認出骨盆前傾的樣子、day18 學會分辨過緊與過鬆——今天要把這些線索串成一個完整的模式：**下交叉症候群（lower crossed syndrome）**。這是物理治療與體能訓練領域常用的一個衛教概念，用來描述下半身常見的「緊繃與無力配對」現象，由捷克學者 Vladimir Janda 提出的肌肉失衡模型延伸而來（此為學術概念名稱，非疾病診斷）。

「交叉」指的是：如果把緊繃的肌肉與無力的肌肉分別用線連起來，會在軀幹與骨盆的側面圖上形成一個 **X 形交叉**：

- **緊繃側**：下背的**豎脊肌**（後上）與髖前側的**髖屈肌／腸腰肌**（前下）。
- **無力側**：**腹肌群**（前上）與**臀肌群**（後下）。

這個配對正好解釋了 day15 學到的骨盆前傾——緊繃的髖屈肌把骨盆前緣往下拉、緊繃的豎脊肌讓下背過度用力代償，無力的腹肌與臀肌又撐不住，骨盆就停留在前傾的位置。`,
      figures: [
        {
          id: "d19-fig1",
          title: "下交叉症候群：緊繃與無力肌群在真實解剖圖上的位置",
          alt: "並排兩張真實人體全身肌肉解剖圖，左為正面標出腹肌群（藍紫，無力）與髖屈肌／腸腰肌（紅，過緊），右為背面標出豎脊肌（紅，過緊）與臀肌群（藍紫，無力）。",
          svg: lowerCrossMusclesRealSvg,
          caption: "真實解剖圖：紅色（髖屈肌、豎脊肌）代表過緊需放鬆伸展；藍紫色（腹肌群、臀肌群）代表無力需喚醒強化，標示位置為一般解剖比例概略估算。",
          credit:
            "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscles anterior labeled.png／Muscle posterior labeled.png）",
        },
        {
          id: "d19-fig2",
          title: "下交叉症候群：緊繃肌群 vs 無力肌群交叉示意",
          alt: "軀幹與骨盆側面示意圖，紅色標示豎脊肌與髖屈肌傾向過緊，藍紫色標示腹肌群與臀肌群傾向無力，兩組以交叉虛線連接呈現 X 形配對。",
          svg: lowerCrossSvg,
          caption: "示意圖：紅色（豎脊肌、髖屈肌）代表過緊需放鬆伸展；藍紫色（腹肌、臀肌）代表無力需喚醒強化，兩組成對角交叉關係。",
        },
      ],
    },
    {
      heading: "為什麼會形成這個模式",
      body: `下交叉症候群並非單一原因造成，而是**長期姿勢與活動習慣**累積的結果，常見相關因素（衛教常識，非診斷）：

- **久坐**：髖關節長時間維持屈曲角度，髖屈肌（腸腰肌等）長期處於縮短狀態，逐漸變得緊繃。
- **核心與臀部少用**：坐姿時腹肌與臀肌幾乎不需要主動出力維持姿勢，長期缺乏訓練容易變得相對無力。
- **下背代償**：當腹肌與臀肌無法有效穩定骨盆時，下背的豎脊肌常常被迫「多做一點」來維持軀幹直立，久而久之也變得緊繃。

這個模式會形成一種**自我維持的循環**：骨盆前傾使腰椎前凸角度加大 → 加大的前凸角度讓下背更容易緊繃、腹部更難有效出力 → 腹肌臀肌更少被使用、更無力 → 骨盆前傾傾向更難改善。理解這個循環，有助於明白為什麼單獨伸展下背、或單獨練腹肌，效果常常不如預期——因為緊與鬆是配對出現的，處理時也需要**同時考慮兩邊**。`,
      figures: [
        {
          id: "d19-fig3",
          title: "下交叉症候群與骨盆前傾的連帶效應",
          alt: "側面示意圖顯示骨盆前緣下傾、腰椎前凸角度放大，並標註緊繃的髖屈肌與豎脊肌把骨盆往前下拉，無力的腹臀肌無法撐住的關係。",
          svg: lowerCrossPostureSvg,
          caption: "示意圖：骨盆前傾與下交叉症候群互為因果，形成一個容易自我維持的循環。",
        },
      ],
    },
    {
      heading: "一般性調整原則：鬆緊搭配、循序漸進",
      body: `根據 day18 學到的原則——**過緊放鬆伸展，過鬆喚醒強化**——下交叉症候群的一般性調整方向是：

**放鬆的一側（緊繃）**：
- 髖屈肌：可透過伸展動作（如弓箭步伸展）與滾筒／按摩球放鬆髖關節前側，力道維持在 0–10 疼痛量表的 5–6 分微痠即可。
- 下背豎脊肌：可透過輕柔的伸展與呼吸放鬆，避免過度用力按壓脊椎本身。

**強化的一側（無力）**：
- 腹肌群：從能有效感受用力、動作單純的核心穩定動作開始，不需要一開始就追求高強度。
- 臀肌群：從能感受臀部主動收縮的動作開始，重點是「感覺練到位」而非追求次數或負重。

**重要提醒**：以上僅為**一般性方向說明**，具體動作選擇、強度與訓練頻率需要依個人狀況調整，尤其若合併下背痛、坐骨神經症狀（如下肢麻痛）等，應先諮詢醫師或物理治療師排除其他病因，再決定合適的訓練內容，**不建議自行對照症狀套用網路上的訓練菜單**。第四週的運動處方單元會提供更完整的實作架構。`,
      figures: [
        {
          id: "d19-fig4",
          title: "下交叉症候群調整原則三步驟",
          alt: "三個編號步驟：步驟一放鬆過緊的髖屈肌與下背，步驟二喚醒無力的腹肌與臀肌，步驟三規律重複並觀察體態變化。",
          svg: adjustStepsSvg,
          caption: "一般性調整流程：放鬆緊繃、喚醒無力、規律重複觀察，具體強度與頻率需依個人狀況調整。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "下交叉症候群描述下半身緊繃與無力配對的模式：緊繃側為髖屈肌與豎脊肌，無力側為腹肌與臀肌。",
    "兩組肌肉在側面圖上呈 X 形交叉配對，這也是「交叉症候群」名稱的由來（衛教概念，非疾病診斷）。",
    "久坐、核心臀部少用是常見相關因素，會形成骨盆前傾與肌肉失衡互相強化的自我維持循環。",
    "一般性調整原則是緊繃側放鬆伸展、無力側喚醒強化，兩邊需同時考慮，不宜只處理單一邊。",
    "合併下背痛、下肢麻痛等症狀時應先諮詢醫師或物理治療師，不建議自行對照症狀套用訓練菜單。",
  ],
  quiz: [
    {
      id: "d19-q1",
      question: "下交叉症候群中，屬於「緊繃」傾向的兩組肌肉是？",
      options: [
        "腹肌群與臀肌群",
        "髖屈肌（腸腰肌）與豎脊肌",
        "胸大肌與胸小肌",
        "上斜方肌與提肩胛肌",
      ],
      answerIndex: 1,
      explanation:
        "下交叉症候群中緊繃的一側是髖前側的髖屈肌（腸腰肌等）與下背的豎脊肌，這兩組肌肉在側面圖上與無力的腹肌、臀肌呈 X 形交叉配對。胸肌與上斜方肌屬於明天要學的上交叉症候群範圍。",
    },
    {
      id: "d19-q2",
      question: "下交叉症候群中，屬於「無力」傾向的兩組肌肉是？",
      options: ["髖屈肌與豎脊肌", "腹肌群與臀肌群", "股四頭肌與小腿三頭肌", "斜方肌與菱形肌"],
      answerIndex: 1,
      explanation:
        "無力的一側是腹肌群（前上）與臀肌群（後下），因久坐等習慣長期缺乏主動出力訓練，逐漸變得相對無力，無法有效穩定骨盆，是下交叉症候群交叉配對中的另一組。",
    },
    {
      id: "d19-q3",
      question: "下交叉症候群為什麼容易形成「自我維持的循環」？",
      options: [
        "因為骨盆前傾與肌肉失衡完全沒有關聯",
        "因為骨盆前傾加重下背緊繃與腹部難出力，導致腹臀肌更少被使用、更難改善",
        "因為肌肉張力一旦形成就永遠不會改變",
        "因為這個模式只會發生在運動員身上",
      ],
      answerIndex: 1,
      explanation:
        "骨盆前傾使腰椎前凸角度加大，讓下背更容易緊繃、腹部更難有效出力，腹肌臀肌因此更少被使用、更加無力，骨盆前傾傾向也就更難改善，形成一個容易自我維持、互相強化的循環。",
    },
    {
      id: "d19-q4",
      question: "根據課程原則，處理下交叉症候群時對「髖屈肌」與「臀肌群」分別應採取什麼方向？",
      options: [
        "髖屈肌強化、臀肌群放鬆",
        "髖屈肌放鬆伸展、臀肌群喚醒強化",
        "兩者都只需要放鬆伸展",
        "兩者都只需要高強度肌力訓練",
      ],
      answerIndex: 1,
      explanation:
        "延續 day18 的鬆緊原則，髖屈肌屬於緊繃側，應以放鬆伸展處理（例如弓箭步伸展、滾筒放鬆）；臀肌群屬於無力側，應以喚醒與強化處理，從能感受臀部主動收縮的簡單動作開始，兩者方向相反、需同時考慮。",
    },
    {
      id: "d19-q5",
      question: "若合併下背痛或下肢麻痛等症狀，課程建議怎麼處理？",
      options: [
        "自行對照網路訓練菜單加強練習即可",
        "先諮詢醫師或物理治療師排除其他病因，再決定合適的訓練內容",
        "完全不理會，症狀會自行消失",
        "立即進行高強度伸展直到症狀消失",
      ],
      answerIndex: 1,
      explanation:
        "課程明確提醒合併下背痛、坐骨神經症狀（如下肢麻痛）等情況，應先諮詢醫師或物理治療師排除其他病因，再決定合適的訓練內容，不建議自行對照症狀套用網路上的訓練菜單，這類症狀已超出衛教自我照護的範圍。",
    },
    {
      id: "d19-q6",
      question: "下交叉症候群這個名稱的性質，下列敘述何者正確？",
      options: [
        "是一個明確的疾病診斷名稱，需要藥物治療",
        "是物理治療與體能訓練領域用來描述肌肉失衡模式的衛教概念，非疾病診斷",
        "只出現在教科書中，臨床上完全沒有參考價值",
        "與骨盆前傾完全無關",
      ],
      answerIndex: 1,
      explanation:
        "下交叉症候群是由 Janda 的肌肉失衡模型延伸而來，用來描述下半身緊繃與無力配對的衛教概念，是描述性的模式歸納而非正式疾病診斷，且與骨盆前傾體態密切相關，是這幾天課程串連起來的核心概念。",
    },
  ],
};

export default lesson;
