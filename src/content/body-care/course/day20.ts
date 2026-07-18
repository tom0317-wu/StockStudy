import type { DayLesson } from "@/lib/content/types";

// 上交叉症候群緊繃／無力肌群：真實 PD 全身肌肉圖（正面＋背面，Mikael Häggström，PD）＋中文引線標註。
const upperCrossMusclesRealSvg = `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="760" height="380" fill="#ffffff"/>
  <text x="245" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">正面（胸肌／頸前）</text>
  <image href="/body-care/figures/muscles-anterior.png" x="140" y="42" width="210" height="244" preserveAspectRatio="xMidYMid meet"/>
  <text x="515" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">背面（上斜方／中下斜方）</text>
  <image href="/body-care/figures/muscles-posterior.png" x="410" y="42" width="210" height="256" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold">
    <circle cx="243" cy="80" r="4" fill="#6366f1"/>
    <line x1="130" y1="60" x2="235" y2="79" stroke="#6366f1" stroke-width="1.5"/>
    <text x="126" y="56" text-anchor="end" fill="#4f46e5">深頸屈肌</text>
    <text x="126" y="72" text-anchor="end" font-size="11" font-weight="normal" fill="#4f46e5">傾向：無力（略估）</text>
    <circle cx="230" cy="100" r="4" fill="#f43f5e"/>
    <line x1="130" y1="140" x2="220" y2="105" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="126" y="136" text-anchor="end" fill="#e11d48">胸大肌／胸小肌</text>
    <text x="126" y="152" text-anchor="end" font-size="11" font-weight="normal" fill="#e11d48">傾向：過緊</text>
    <circle cx="505" cy="72" r="4" fill="#f43f5e"/>
    <line x1="630" y1="64" x2="510" y2="72" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="634" y="60" text-anchor="start" fill="#e11d48">上斜方肌</text>
    <text x="634" y="76" text-anchor="start" font-size="11" font-weight="normal" fill="#e11d48">／提肩胛肌，傾向過緊</text>
    <circle cx="503" cy="95" r="4" fill="#6366f1"/>
    <line x1="630" y1="140" x2="515" y2="100" stroke="#6366f1" stroke-width="1.5"/>
    <text x="634" y="136" text-anchor="start" fill="#4f46e5">中／下斜方肌</text>
    <text x="634" y="152" text-anchor="start" font-size="11" font-weight="normal" fill="#4f46e5">傾向：無力</text>
  </g>
  <rect x="290" y="330" width="14" height="10" fill="#f43f5e"/>
  <text x="310" y="339" font-size="11" fill="#334155">紅：緊繃部位（放鬆伸展）</text>
  <rect x="470" y="330" width="14" height="10" fill="#6366f1"/>
  <text x="490" y="339" font-size="11" fill="#334155">藍紫：無力部位（喚醒強化）</text>
  <text x="380" y="362" text-anchor="middle" font-size="11" fill="#94a3b8">真實解剖圖＋概略引線標示，實際肌肉邊界略有個體差異；深頸屈肌位置較深，圖中為概略指示</text>
</svg>`;

// 上交叉症候群：緊繃肌群 vs 無力肌群交叉示意圖（背面＋側面標註，填色人形輪廓）。
const upperCrossSvg = `<svg viewBox="0 0 340 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="320" fill="#ffffff"/>
  <!-- 頭頸肩軀幹輪廓（填色） -->
  <g fill="#e5e7eb" stroke="#94a3b8" stroke-width="2">
    <ellipse cx="170" cy="50" rx="18" ry="21"/>
    <rect x="162" y="68" width="16" height="14" rx="4"/>
    <path d="M120 96 Q170 82 220 96 L214 128 Q170 118 126 128 Z"/>
    <path d="M150 128 L190 128 L196 220 L144 220 Z"/>
  </g>
  <!-- 交叉線：緊繃（上斜方/提肩胛 頸肩上）與（胸大/胸小肌 前下）-->
  <line x1="150" y1="92" x2="196" y2="150" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
  <!-- 交叉線：無力（深頸屈肌 前上）與（中下斜方肌 後下）-->
  <line x1="188" y1="92" x2="144" y2="150" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4 3"/>
  <!-- 標籤：緊繃 rose -->
  <circle cx="150" cy="92" r="6" fill="#f43f5e"/>
  <text x="10" y="84" font-size="12" fill="#e11d48" font-weight="bold">上斜方肌／提肩胛肌</text>
  <text x="10" y="100" font-size="11" fill="#e11d48">傾向：過緊</text>
  <circle cx="196" cy="150" r="6" fill="#f43f5e"/>
  <text x="210" y="150" font-size="12" fill="#e11d48" font-weight="bold">胸大肌／胸小肌</text>
  <text x="210" y="166" font-size="11" fill="#e11d48">傾向：過緊</text>
  <!-- 標籤：無力 indigo -->
  <circle cx="188" cy="92" r="6" fill="#6366f1"/>
  <text x="204" y="78" font-size="12" fill="#4f46e5" font-weight="bold">深頸屈肌</text>
  <text x="204" y="94" font-size="11" fill="#4f46e5">傾向：無力</text>
  <circle cx="144" cy="150" r="6" fill="#6366f1"/>
  <text x="10" y="150" font-size="12" fill="#4f46e5" font-weight="bold">中／下斜方肌</text>
  <text x="10" y="166" font-size="11" fill="#4f46e5">傾向：無力</text>
  <!-- 圖例 -->
  <rect x="20" y="270" width="14" height="10" fill="#f43f5e"/>
  <text x="40" y="279" font-size="11" fill="#334155">紅：緊繃需放鬆伸展</text>
  <rect x="180" y="270" width="14" height="10" fill="#6366f1"/>
  <text x="200" y="279" font-size="11" fill="#334155">藍紫：無力需喚醒強化</text>
  <text x="170" y="305" text-anchor="middle" font-size="11" fill="#94a3b8">示意圖：X 形交叉配對於頭頸肩人形上，非解剖精確位置</text>
</svg>`;

// 頸椎特寫真圖（其實為 Vertebral_lines.svg，非全脊椎，僅適合頸椎相關）＋頭前移引線標註。
const cervicalRealSvg = `<svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="380" fill="#ffffff"/>
  <text x="230" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">頸椎特寫（評估用參考線圖）</text>
  <image href="/body-care/figures/spine-lateral.svg" x="150" y="40" width="160" height="210" preserveAspectRatio="xMidYMid meet"/>
  <circle cx="175" cy="130" r="4" fill="#0d9488"/>
  <line x1="122" y1="126" x2="160" y2="130" stroke="#0d9488" stroke-width="1.5"/>
  <text x="120" y="122" text-anchor="end" font-size="15" font-weight="bold" fill="#0d9488">頸椎</text>
  <text x="120" y="138" text-anchor="end" font-size="11" fill="#0d9488">前彎角度示意</text>
  <circle cx="228" cy="220" r="4" fill="#4f46e5"/>
  <line x1="320" y1="224" x2="232" y2="220" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="324" y="216" text-anchor="start" font-size="15" font-weight="bold" fill="#4f46e5">頭前移</text>
  <text x="324" y="232" text-anchor="start" font-size="11" fill="#4f46e5">角度增加、深頸屈弱化</text>
  <text x="230" y="360" text-anchor="middle" font-size="11" fill="#94a3b8">此為頸椎特寫評估線圖，非全脊椎；頭前移時前彎角度會隨之改變</text>
</svg>`;

// 上交叉症候群與頭前移／圓肩的連帶效應（填色人形輪廓）。
const upperCrossPostureSvg = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="320" height="260" fill="#ffffff"/>
  <line x1="160" y1="20" x2="160" y2="240" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="185" cy="52" r="18" fill="#fda4af" fill-opacity="0.85" stroke="#e11d48" stroke-width="2"/>
  <path d="M180 70 Q145 92 150 140 L172 140 Q168 100 192 78 Z" fill="#e5e7eb" stroke="#e11d48" stroke-width="2"/>
  <path d="M150 140 Q150 190 155 230" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <text x="200" y="56" font-size="11" fill="#e11d48" font-weight="bold">頭前移</text>
  <text x="30" y="100" font-size="11" fill="#475569" font-weight="bold">肩前移</text>
  <text x="30" y="114" font-size="11" fill="#475569">（圓肩）</text>
  <line x1="55" y1="106" x2="145" y2="115" stroke="#475569" stroke-width="1"/>
  <text x="160" y="252" text-anchor="middle" font-size="10" fill="#94a3b8">緊繃的上斜方胸肌把頭肩往前拉，無力的深頸屈中下斜方撐不住</text>
</svg>`;

// 處理原則三步驟。
const upperAdjustStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">放鬆過緊處</text>
    <text x="70" y="108" font-size="12" fill="#64748b">上斜方、胸肌</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">喚醒無力處</text>
    <text x="210" y="108" font-size="12" fill="#64748b">深頸屈、中下斜方</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">調整環境</text>
    <text x="350" y="108" font-size="12" fill="#64748b">螢幕高度、姿勢</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 20,
  phase: "W3",
  title: "上交叉症候群解析與肩頸僵硬處理",
  minutes: 17,
  goal: "認識上交叉症候群（upper crossed syndrome）的緊繃與無力肌群配對，理解其與圓肩、頭前移、肩頸僵硬的關聯，以及一般性的處理原則。",
  sections: [
    {
      heading: "上半身的交叉配對",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

昨天學了下半身的下交叉症候群，今天要學它在上半身的對應版本——**上交叉症候群（upper crossed syndrome）**，同樣是 Janda 肌肉失衡模型中的概念，用來描述肩頸與上背常見的緊繃與無力配對。這也正好補完 day15 圓肩／駝背、day18 觸診張力範例中提到的「胸肌緊、上背弱」現象，把它系統化成一個完整的交叉模式。

上交叉症候群的兩組配對：

- **緊繃側**：頸肩上方的**上斜方肌／提肩胛肌**（後上）與胸前的**胸大肌／胸小肌**（前下）。
- **無力側**：頸部前方的**深頸屈肌**（前上）與上背的**中斜方肌／下斜方肌**（後下）。

同樣在側面或背面圖上把緊繃與無力的兩組連起來，會形成一個 **X 形交叉**——這也是「交叉症候群」名稱的由來。這個模式常見於長時間低頭滑手機、打字、看螢幕的生活型態，是現代人肩頸僵硬最常見的成因之一（衛教常識，非診斷）。`,
      figures: [
        {
          id: "d20-fig1",
          title: "上交叉症候群：緊繃與無力肌群在真實解剖圖上的位置",
          alt: "並排兩張真實人體全身肌肉解剖圖，左為正面標出深頸屈肌（藍紫，無力，約略位置）與胸大肌胸小肌（紅，過緊），右為背面標出上斜方肌提肩胛肌（紅，過緊）與中下斜方肌（藍紫，無力）。",
          svg: upperCrossMusclesRealSvg,
          caption: "真實解剖圖：紅色（上斜方、提肩胛、胸肌）代表過緊需放鬆伸展；藍紫色（深頸屈、中下斜方）代表無力需喚醒強化，標示位置為一般解剖比例概略估算。",
          credit:
            "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscles anterior labeled.png／Muscle posterior labeled.png）",
        },
        {
          id: "d20-fig2",
          title: "上交叉症候群：緊繃肌群 vs 無力肌群交叉示意",
          alt: "頭頸肩軀幹側面示意圖，紅色標示上斜方肌提肩胛肌與胸大肌胸小肌傾向過緊，藍紫色標示深頸屈肌與中下斜方肌傾向無力，兩組以交叉虛線連接呈現 X 形配對。",
          svg: upperCrossSvg,
          caption: "示意圖：紅色（上斜方、提肩胛、胸肌）代表過緊需放鬆伸展；藍紫色（深頸屈、中下斜方）代表無力需喚醒強化。",
        },
      ],
    },
    {
      heading: "為什麼會造成頭前移與圓肩",
      body: `上交叉症候群直接對應到我們在 day15、day16 學過的兩個體態特徵：**頭前移**與**圓肩**。

- **上斜方肌與提肩胛肌過緊**：長期聳肩、低頭看螢幕，讓連接頸椎與肩胛骨上緣的這兩條肌肉持續處於收縮狀態，逐漸變得緊繃，也是很多人「肩頸僵硬、按壓會痠」最常提到的部位。
- **胸大肌、胸小肌過緊**：如 day18 提過的，長期手臂內收向前的姿勢讓胸前肌群縮短緊繃，把肩胛骨往前拉，形成圓肩。
- **深頸屈肌無力**：位於頸椎前方深層的肌肉群，負責維持頭部在肩膀正上方的中立位置，長期頭前移的姿勢讓它較少被有效使用，逐漸變得無力。
- **中斜方肌、下斜方肌無力**：負責把肩胛骨往中線、往下拉回正確位置，長期圓肩姿勢下較少主動收縮，同樣容易變得相對無力。

這個配對同樣會形成**自我維持的循環**：頭前移加重上斜方肌負擔 → 上斜方肌更緊繃、深頸屈肌更難有效啟動 → 頭部更難回到中立位置。這也是為什麼很多人「按摩完當下很舒服，隔天又緊繃」——因為只處理了緊繃的一側，沒有同時喚醒無力的一側。`,
      figures: [
        {
          id: "d20-fig3",
          title: "頸椎特寫真圖：前彎角度與頭前移",
          alt: "真實頸椎側面評估線圖，中文引線標出頸椎前彎角度與頭前移時角度增加、深頸屈肌隨之弱化的關係。",
          svg: cervicalRealSvg,
          caption: "此圖為真實頸椎特寫評估線圖（非全脊椎），用來輔助理解頭前移時頸椎前彎角度的變化。",
          credit:
            "Mikael Häggström, M.D., CC0 1.0 Universal (Public Domain), via Wikimedia Commons（Vertebral_lines.svg）",
        },
        {
          id: "d20-fig4",
          title: "上交叉症候群與頭前移、圓肩的連帶效應",
          alt: "側面示意圖顯示頭部前移、肩膀前移（圓肩），並標註緊繃的上斜方肌與胸肌把頭肩往前拉，無力的深頸屈肌與中下斜方肌無法撐住的關係。",
          svg: upperCrossPostureSvg,
          caption: "示意圖：上交叉症候群與頭前移、圓肩互為因果，是肩頸僵硬反覆發生的常見背景原因。",
        },
      ],
    },
    {
      heading: "一般性處理原則與生活調整",
      body: `延續「過緊放鬆伸展、過鬆喚醒強化」的原則，上交叉症候群的一般性處理方向：

**放鬆的一側（緊繃）**：
- 上斜方肌／提肩胛肌：可透過緩和的頸部側彎伸展、肩頸滾筒或按摩球放鬆（配合 day11–13 學過的工具使用原則），力道維持在 0–10 疼痛量表的 5–6 分微痠即可，避免用力按壓頸椎本身或靠近大血管、神經的區域。
- 胸大肌、胸小肌：可透過門框伸展等胸前伸展動作，緩慢進行。

**強化的一側（無力）**：
- 深頸屈肌：從輕微的「縮下巴」動作開始練習啟動，重點是感受頭部往後、往上的感覺，而不是用力低頭。
- 中／下斜方肌：從能感受肩胛骨主動往中線、往下收的動作開始，同樣重點是「感覺練到位」而非追求次數。

**同樣重要的是生活環境調整**：螢幕與視線齊平、避免長時間低頭滑手機、每隔一段時間起身活動肩頸，這些環境調整往往比單一次的放鬆動作更能從根本減少症狀反覆發生。若肩頸僵硬合併明顯頭痛、上肢麻痛或無力，這已超出一般肌肉緊繃的範圍，應諮詢醫師或物理治療師排除頸椎相關病因，不宜自行判斷或用力按壓處理。`,
      figures: [
        {
          id: "d20-fig5",
          title: "上交叉症候群處理原則三步驟",
          alt: "三個編號步驟：步驟一放鬆過緊的上斜方肌與胸肌，步驟二喚醒無力的深頸屈肌與中下斜方肌，步驟三調整螢幕高度等生活環境。",
          svg: upperAdjustStepsSvg,
          caption: "一般性處理流程：放鬆緊繃、喚醒無力、調整生活環境，三者同樣重要，合併明顯神經症狀應諮詢專業人員。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "上交叉症候群描述肩頸緊繃與無力配對的模式：緊繃側為上斜方肌／提肩胛肌與胸大肌／胸小肌，無力側為深頸屈肌與中下斜方肌。",
    "兩組肌肉在圖上呈 X 形交叉配對，常見於長期低頭滑手機、打字的生活型態。",
    "這個模式直接對應 day15、day16 學過的頭前移與圓肩體態，並容易形成自我維持的循環。",
    "一般性處理原則是緊繃側放鬆伸展、無力側喚醒強化，並同時調整螢幕高度等生活環境。",
    "合併明顯頭痛、上肢麻痛或無力等症狀已超出一般肌肉緊繃範圍，應諮詢醫師或物理治療師。",
  ],
  quiz: [
    {
      id: "d20-q1",
      question: "上交叉症候群中，屬於「緊繃」傾向的兩組肌肉是？",
      options: [
        "深頸屈肌與中下斜方肌",
        "上斜方肌／提肩胛肌與胸大肌／胸小肌",
        "腹肌群與臀肌群",
        "股四頭肌與腿後肌群",
      ],
      answerIndex: 1,
      explanation:
        "上交叉症候群緊繃的一側是頸肩上方的上斜方肌、提肩胛肌，以及胸前的胸大肌、胸小肌，這兩組肌肉在圖上與無力的深頸屈肌、中下斜方肌呈 X 形交叉配對。腹肌臀肌屬於昨天下交叉症候群的範圍。",
    },
    {
      id: "d20-q2",
      question: "上交叉症候群中，屬於「無力」傾向的兩組肌肉是？",
      options: [
        "上斜方肌與提肩胛肌",
        "胸大肌與胸小肌",
        "深頸屈肌與中／下斜方肌",
        "豎脊肌與髖屈肌",
      ],
      answerIndex: 2,
      explanation:
        "無力的一側是頸部前方深層的深頸屈肌，以及上背的中斜方肌、下斜方肌，因長期頭前移、圓肩姿勢下較少被主動使用，逐漸變得相對無力，無法把頭部與肩胛骨拉回中立位置。",
    },
    {
      id: "d20-q3",
      question: "上交叉症候群最直接對應到之前學過的哪兩個體態特徵？",
      options: ["骨盆前傾與下背痛", "頭前移與圓肩", "膝內夾與腳跟離地", "脊椎側彎與長短腳"],
      answerIndex: 1,
      explanation:
        "上交叉症候群的緊繃無力配對直接對應 day15、day16 學過的頭前移與圓肩體態特徵：緊繃的上斜方肌與胸肌把頭肩往前拉，無力的深頸屈肌與中下斜方肌無法把它們撐回中立位置。",
    },
    {
      id: "d20-q4",
      question: "為什麼很多人「按摩完當下舒服，隔天又緊繃」？課程給的解釋是？",
      options: [
        "因為按摩本身完全沒有效果",
        "因為只處理了緊繃的一側，沒有同時喚醒無力的一側，姿勢很快又被拉回去",
        "因為肌肉張力一天內會自動恢復到原本狀態",
        "因為按摩力道一定不夠強",
      ],
      answerIndex: 1,
      explanation:
        "課程解釋這是因為只放鬆了緊繃的上斜方肌等肌肉，沒有同時喚醒無力的深頸屈肌、中下斜方肌，姿勢背後的力量失衡沒有改變，很快又會被緊繃側拉回原本的姿勢，所以需要鬆緊兩側同時處理才能有較持久的效果。",
    },
    {
      id: "d20-q5",
      question: "根據課程建議，練習喚醒「深頸屈肌」時，重點應該放在什麼感覺上？",
      options: [
        "用力低頭、下巴用力貼胸口",
        "輕微縮下巴，感受頭部往後、往上的感覺",
        "盡量後仰頭部到最大角度",
        "完全不需要感受任何動作，越用力越好",
      ],
      answerIndex: 1,
      explanation:
        "課程建議從輕微的「縮下巴」動作開始練習啟動深頸屈肌，重點是感受頭部往後、往上的感覺，而不是用力低頭或追求動作幅度，這符合「感覺練到位」優先於次數與力道的一般性原則。",
    },
    {
      id: "d20-q6",
      question: "若肩頸僵硬合併明顯頭痛、上肢麻痛或無力，課程建議怎麼處理？",
      options: [
        "自行加強按摩力道直到症狀緩解",
        "這已超出一般肌肉緊繃範圍，應諮詢醫師或物理治療師排除其他病因",
        "完全忽略，這是正常現象不需理會",
        "立刻進行高強度頸部伸展運動",
      ],
      answerIndex: 1,
      explanation:
        "課程明確提醒合併明顯頭痛、上肢麻痛或無力等症狀已超出一般肌肉緊繃的範圍，可能涉及頸椎相關病因，應諮詢醫師或物理治療師做進一步評估，不宜自行判斷或用力按壓處理，這是安全原則中重要的一環。",
    },
  ],
};

export default lesson;
