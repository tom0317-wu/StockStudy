import type { DayLesson } from "@/lib/content/types";

// FITT 四要素總覽圖：四張擬真小圖示卡片（週曆格、費力量表、時鐘、運動類型圓點）取代純文字方框。
const fittOverviewSvg = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="440" height="300" fill="#ffffff"/>
  <rect x="10" y="10" width="200" height="130" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
  <g>
    <rect x="52" y="26" width="14" height="14" rx="3" fill="#0d9488"/>
    <rect x="69" y="26" width="14" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8"/>
    <rect x="86" y="26" width="14" height="14" rx="3" fill="#0d9488"/>
    <rect x="103" y="26" width="14" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8"/>
    <rect x="120" y="26" width="14" height="14" rx="3" fill="#0d9488"/>
    <rect x="137" y="26" width="14" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8"/>
    <rect x="154" y="26" width="14" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8"/>
  </g>
  <text x="110" y="64" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">頻率 Frequency</text>
  <text x="110" y="84" text-anchor="middle" font-size="12" fill="#0f172a">一週練幾次</text>
  <text x="110" y="102" text-anchor="middle" font-size="11" fill="#64748b">（如每週 3 次）</text>
  <rect x="230" y="10" width="200" height="130" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
  <rect x="250" y="34" width="160" height="14" rx="7" fill="#f1f5f9" stroke="#cbd5e1"/>
  <rect x="250" y="34" width="96" height="14" rx="7" fill="#e11d48" opacity="0.85"/>
  <path d="M346 24 L352 34 L340 34 Z" fill="#e11d48"/>
  <text x="330" y="64" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">強度 Intensity</text>
  <text x="330" y="84" text-anchor="middle" font-size="12" fill="#0f172a">自覺費力量表</text>
  <text x="330" y="102" text-anchor="middle" font-size="11" fill="#64748b">（5-6 分微喘微痠）</text>
  <rect x="10" y="160" width="200" height="130" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
  <circle cx="110" cy="204" r="20" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>
  <line x1="110" y1="204" x2="110" y2="191" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="110" y1="204" x2="121" y2="197" stroke="#4f46e5" stroke-width="2" stroke-linecap="round"/>
  <text x="110" y="242" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">時間 Time</text>
  <text x="110" y="262" text-anchor="middle" font-size="12" fill="#0f172a">每次做多久</text>
  <text x="110" y="280" text-anchor="middle" font-size="11" fill="#64748b">（如 20-30 分鐘）</text>
  <rect x="230" y="160" width="200" height="130" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <g text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">
    <circle cx="276" cy="204" r="14" fill="#0d9488"/><text x="276" y="208">走</text>
    <circle cx="312" cy="204" r="14" fill="#e11d48"/><text x="312" y="208">力</text>
    <circle cx="348" cy="204" r="14" fill="#4f46e5"/><text x="348" y="208">展</text>
    <circle cx="384" cy="204" r="14" fill="#94a3b8"/><text x="384" y="208">衡</text>
  </g>
  <text x="330" y="242" text-anchor="middle" font-size="13" font-weight="bold" fill="#334155">類型 Type</text>
  <text x="330" y="262" text-anchor="middle" font-size="12" fill="#0f172a">做哪種運動</text>
  <text x="330" y="280" text-anchor="middle" font-size="11" fill="#64748b">（有氧／阻力／伸展／平衡）</text>
</svg>`;

// F 頻率（一週七天安排示意）與 I 強度（自覺費力量表）對照圖。
const fiScaleSvg = `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="200" fill="#ffffff"/>
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">頻率：一週安排 3 天</text>
  <g font-size="11" text-anchor="middle">
    <circle cx="30" cy="60" r="13" fill="#0d9488"/><text x="30" y="64" fill="#ffffff">一</text>
    <circle cx="55" cy="60" r="13" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/><text x="55" y="64" fill="#64748b">二</text>
    <circle cx="80" cy="60" r="13" fill="#0d9488"/><text x="80" y="64" fill="#ffffff">三</text>
    <circle cx="105" cy="60" r="13" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/><text x="105" y="64" fill="#64748b">四</text>
    <circle cx="130" cy="60" r="13" fill="#0d9488"/><text x="130" y="64" fill="#ffffff">五</text>
    <circle cx="155" cy="60" r="13" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/><text x="155" y="64" fill="#64748b">六</text>
    <circle cx="180" cy="60" r="13" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/><text x="180" y="64" fill="#64748b">日</text>
  </g>
  <text x="105" y="96" text-anchor="middle" font-size="11" fill="#475569">深色圓＝運動日（可依生活調整）</text>
  <line x1="210" y1="14" x2="210" y2="186" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">強度：費力量表</text>
  <rect x="240" y="56" width="160" height="18" rx="9" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="278" y="56" width="44" height="18" rx="4" fill="#e11d48" opacity="0.85"/>
  <path d="M300 46 L308 56 L292 56 Z" fill="#e11d48"/>
  <text x="244" y="94" font-size="10" fill="#64748b">0 輕鬆</text>
  <text x="300" y="94" text-anchor="middle" font-size="10" fill="#e11d48" font-weight="bold">5-6 微喘微痠</text>
  <text x="396" y="94" text-anchor="end" font-size="10" fill="#64748b">10 竭盡</text>
  <text x="320" y="116" text-anchor="middle" font-size="11" fill="#475569">日常訓練建議落在 5-6 分附近</text>
</svg>`;

// T 時間（單次時段分配）與 T 類型（四大類）示意圖。
const ttTimeTypeSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <text x="115" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">時間示意：30 分鐘的安排</text>
  <rect x="30" y="50" width="170" height="24" rx="4" fill="#eef2ff" stroke="#4f46e5" stroke-width="1"/>
  <rect x="30" y="50" width="28" height="24" fill="#c7d2fe"/>
  <rect x="58" y="50" width="112" height="24" fill="#4f46e5"/>
  <rect x="170" y="50" width="30" height="24" fill="#c7d2fe"/>
  <text x="44" y="90" text-anchor="middle" font-size="10" fill="#475569">熱身</text>
  <text x="114" y="90" text-anchor="middle" font-size="10" fill="#475569">主要運動</text>
  <text x="185" y="90" text-anchor="middle" font-size="10" fill="#475569">緩和</text>
  <text x="115" y="106" text-anchor="middle" font-size="10" fill="#94a3b8">（時間比例示意，可依運動類型調整）</text>
  <line x1="215" y1="14" x2="215" y2="206" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#334155">類型示意：四大類</text>
  <g font-size="10" text-anchor="middle">
    <circle cx="250" cy="60" r="16" fill="#0d9488"/><text x="250" y="90" fill="#0f172a">有氧</text>
    <circle cx="295" cy="60" r="16" fill="#e11d48"/><text x="295" y="90" fill="#0f172a">阻力</text>
    <circle cx="340" cy="60" r="16" fill="#4f46e5"/><text x="340" y="90" fill="#0f172a">伸展</text>
    <circle cx="385" cy="60" r="16" fill="#94a3b8"/><text x="385" y="90" fill="#0f172a">平衡</text>
  </g>
  <text x="320" y="112" text-anchor="middle" font-size="10" fill="#94a3b8">依目標挑選合適類型組合</text>
</svg>`;

// 把 FITT 套進生活的四個步驟（操作步驟圖）。
const fittStepsSvg = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="170" fill="#ffffff"/>
  <line x1="55" y1="48" x2="405" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="55" cy="48" r="20" fill="#0d9488"/>
    <text x="55" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="55" y="92" font-size="11" fill="#0f172a">先定目標</text>
    <text x="55" y="107" font-size="11" fill="#64748b">想改善什麼</text>
    <circle cx="170" cy="48" r="20" fill="#0d9488"/>
    <text x="170" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="170" y="92" font-size="11" fill="#0f172a">選運動類型</text>
    <text x="170" y="107" font-size="11" fill="#64748b">對應 Type</text>
    <circle cx="285" cy="48" r="20" fill="#0d9488"/>
    <text x="285" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="285" y="92" font-size="11" fill="#0f172a">低強度短時間</text>
    <text x="285" y="107" font-size="11" fill="#64748b">先求做得到</text>
    <circle cx="405" cy="48" r="20" fill="#0d9488"/>
    <text x="405" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="405" y="92" font-size="11" fill="#0f172a">每1-2週</text>
    <text x="405" y="107" font-size="11" fill="#64748b">依反應調整</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 22,
  phase: "W4",
  title: "運動處方基礎：FITT 原則",
  minutes: 17,
  goal: "認識規劃運動的四個基本變項——頻率、強度、時間、類型（FITT），學會用它們把「我要多運動」轉化為具體、可執行、循序漸進的運動安排。",
  sections: [
    {
      heading: "運動處方是什麼？先認識 FITT 四要素",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前面三週我們認識了骨骼、肌肉、筋膜、體態與常見失衡模式，也知道哪裡緊、哪裡弱。但光是「知道問題」還不夠，還需要一套方法把這些觀察轉成**具體可執行的運動安排**——這就是「運動處方」的概念。運動處方不是醫療診斷或藥方，而是像一份訓練菜單，把「要不要動、動多少、動多用力、動什麼」講清楚。

國際上常用 **FITT 原則**來組織這份菜單，四個字母分別代表：

- **F（Frequency）頻率**：一週練幾次。
- **I（Intensity）強度**：每次用多少力、多喘多痠。
- **T（Time）時間**：每次做多久。
- **T（Type）類型**：做哪一種運動（有氧／阻力／伸展／平衡）。

四個變項互相牽動：強度高，時間通常要縮短；頻率高，單次強度就要放低，才不會累積過度疲勞。今天的目標是把這四個變項拆開來看懂，之後不管是自己安排運動、或是看懂教練開的訓練表，都能抓到重點。下面先看整體架構，再逐一拆解。`,
      figures: [
        {
          id: "d22-fig1",
          title: "FITT 四要素總覽",
          alt: "四張卡片分別以小圖示（一週日曆格、費力量表橫條、時鐘、四色運動類型圓點）搭配文字，說明 F 頻率、I 強度、T 時間、T 類型四個要素。",
          svg: fittOverviewSvg,
          caption: "運動處方的四個基本變項：頻率、強度、時間、類型，彼此互相牽動。",
        },
      ],
    },
    {
      heading: "F 頻率與 I 強度：多常做、多用力",
      body: `**頻率（Frequency）**指的是一週安排幾次運動。一般健康成人的參考方向是每週安排 3～5 天中等強度的活動，但這不是絕對數字，重點是**規律**——與其一次衝很兇、之後累到停練兩週，不如分散成小份量、持續進行。剛開始運動的人，也可以先從每週 2～3 次做起，讓身體有時間適應與恢復。

**強度（Intensity）**指的是運動時的費力程度，最簡單的量化方式是**自覺費力量表（0～10 分）**：0 分是完全靜止不動，10 分是竭盡全力、喘到說不出話。日常保養型的運動，建議落在**5～6 分**左右——會微喘、肌肉會微痠，但還能斷斷續續講話、動作品質不會走樣。強度太低效果有限；太高則容易累積疲勞、增加受傷風險，尤其對久未運動或有慢性病史的人更要保守。

頻率與強度要一起看：想維持規律運動習慣，「次數穩定、強度適中」通常比「三天打魚兩天曬網卻拼命練」更有效、也更安全。`,
      figures: [
        {
          id: "d22-fig2",
          title: "頻率與強度示意",
          alt: "左側是一週七天的示意圓圈，深色圓代表安排運動的三天；右側是 0 到 10 分的自覺費力量表橫條，標出建議落在 5 到 6 分的區間。",
          svg: fiScaleSvg,
          caption: "頻率看「多常做」，強度看「多用力」，兩者要一起搭配安排，不宜只顧其中一項。",
        },
      ],
    },
    {
      heading: "T 時間與 T 類型：做多久、做什麼",
      body: `**時間（Time）**指單次運動持續多久，包含熱身、主要運動與緩和三段。一般建議單次中等強度運動安排在 **20～30 分鐘**左右（不含熱身緩和），但初學者可以先從 10～15 分鐘開始，重點是能持續完成、不勉強硬撐到力竭或痠痛難耐。

**類型（Type）**指運動的種類，大致可分四大類：**有氧**（快走、騎車、游泳，練心肺耐力）、**阻力**（徒手、彈力帶、器械，練肌力）、**伸展**（練柔軟度，明天會細談靜態與動態的差別）、**平衡**（單腳站、太極等，對長者防跌特別重要）。四類各有不同效果，理想上會依目標搭配組合，而不是只練其中一種。

下表是常見目標對應的 FITT 安排參考方向（僅供參考，非醫療處方，實際安排請依個人狀況調整，若有慢性病史或明顯不適，建議先諮詢醫師或物理治療師再開始）：

| 目標 | F 頻率 | I 強度 | T 時間 | Type 類型 |
| --- | --- | --- | --- | --- |
| 心肺耐力 | 每週 3-5 次 | 5-6 分（微喘） | 20-30 分鐘 | 快走／騎車／游泳 |
| 肌力 | 每週 2-3 次（同肌群間隔休息） | 5-7 分（微痠） | 20-40 分鐘 | 徒手／彈力帶／器械 |
| 柔軟度 | 每週 2-7 次 | 微痠、不到疼痛 | 每動作 15-30 秒 | 靜態伸展 |
| 平衡 | 每週 2-3 次 | 依個人能力調整 | 10-20 分鐘 | 單腳站／太極等 |`,
      figures: [
        {
          id: "d22-fig3",
          title: "時間分配與類型四大類",
          alt: "左側橫條圖分成熱身、主要運動、緩和三段，代表單次運動的時間安排；右側四個圓圈分別代表有氧、阻力、伸展、平衡四種運動類型。",
          svg: ttTimeTypeSvg,
          caption: "時間看單次安排（含熱身緩和），類型看要練哪一種能力，兩者依目標搭配。",
        },
      ],
    },
    {
      heading: "把 FITT 套進生活：漸進的四個步驟",
      body: `知道四個變項後，最常見的問題是「一開始就想全部拉滿」——頻率也高、強度也高、時間也長，結果撐不過兩週就放棄或受傷。安全又能持久的做法是**漸進**：一開始只調整少數變項，讓身體適應後再逐步加量。

實務上可以照著以下四步驟安排：先確定自己想改善的目標（例如久坐腰痠、想提升心肺）、再依目標挑選合適的運動類型、接著**從低強度、短時間開始**，讓身體先熟悉動作與節奏，最後**每 1～2 週依身體反應微調**——如果隔天只是微痠、恢復良好，可以小幅增加頻率或時間；如果持續痠痛、睡眠或食慾受影響，就該退回上一階段或安排更多休息。

漸進的核心精神是「寧可慢一點、也不要受傷停練」。身體對運動的適應需要時間，過快加量是運動傷害最常見的原因之一。若運動中或運動後出現明顯疼痛（非單純痠脹）、關節腫脹或不對稱不適，應停止並諮詢醫師或物理治療師，不要自行加重訓練硬撐。`,
      figures: [
        {
          id: "d22-fig4",
          title: "把 FITT 套進生活：四個步驟",
          alt: "四個編號步驟由虛線串接：步驟 1 先定目標、步驟 2 選運動類型、步驟 3 從低強度短時間開始、步驟 4 每 1 到 2 週依身體反應調整。",
          svg: fittStepsSvg,
          caption: "從定目標到漸進調整，安全又能持久的運動安排流程。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "FITT 代表頻率（Frequency）、強度（Intensity）、時間（Time）、類型（Type），是把運動想法轉成具體處方的四個變項。",
    "強度建議用自覺費力量表（0-10 分）評估，日常保養型運動抓在 5-6 分微喘微痠即可，不必每次拼到極限。",
    "不同目標（心肺、肌力、柔軟度、平衡）在 FITT 四變項上的安排不同，可用表格對照，但仍需依個人狀況調整。",
    "漸進原則：從低強度短時間開始，每 1-2 週依身體反應微調，避免因加量過快而受傷。",
    "若有慢性病史、明顯疼痛或運動中不適，應先諮詢醫師或物理治療師，再決定運動的強度與類型。",
  ],
  quiz: [
    {
      id: "d22-q1",
      question: "FITT 四個字母分別代表運動處方的哪四個變項？",
      options: [
        "頻率、強度、時間、類型",
        "力量、耐力、技巧、態度",
        "速度、角度、深度、密度",
        "頻率、力量、技巧、類型",
      ],
      answerIndex: 0,
      explanation:
        "FITT 是 Frequency（頻率）、Intensity（強度）、Time（時間）、Type（類型）的縮寫，四個變項合起來構成一份運動處方的骨架。理解這四個變項，才能把「我要多運動」這種模糊的想法，轉成具體可執行的安排。",
    },
    {
      id: "d22-q2",
      question: "課程建議日常保養型運動的強度，落在自覺費力量表的哪個區間比較合適？",
      options: ["0-1 分", "5-6 分", "每次都要 10 分竭盡全力", "強度不重要，時間夠長就好"],
      answerIndex: 1,
      explanation:
        "自覺費力量表 0-10 分，0 分是完全靜止、10 分是竭盡全力；日常保養型運動建議落在 5-6 分左右，會微喘微痠但仍能斷續講話。強度太低效果有限，太高則容易累積疲勞、增加受傷風險，不需要每次都拼到極限。",
    },
    {
      id: "d22-q3",
      question: "關於運動安排的「漸進原則」，下列敘述何者正確？",
      options: [
        "一開始就把頻率、強度、時間全部拉滿，進步最快",
        "從低強度短時間開始，每 1-2 週依身體反應小幅調整",
        "只要撐過第一週，之後強度都不用再變動",
        "頻率越高越好，和身體恢復狀況無關",
      ],
      answerIndex: 1,
      explanation:
        "漸進原則強調從低強度、短時間開始，讓身體有時間適應，再依隔天的恢復狀況（是否只是微痠、睡眠食慾是否正常）每 1-2 週小幅調整。一次把所有變項都拉到最高，反而容易因為身體來不及適應而受傷或難以持續。",
    },
    {
      id: "d22-q4",
      question: "小明久未運動，第一次運動就想每天高強度練滿一小時，這樣安排最可能出現的結果是什麼？",
      options: [
        "身體會立刻適應，效果最好最快",
        "容易因為加量過快而過度疲勞或受傷，難以持續",
        "完全沒有風險，只要有恆心就好",
        "強度和頻率同時拉高其實對身體負擔更小",
      ],
      answerIndex: 1,
      explanation:
        "違反漸進原則、一次把頻率、強度、時間都拉到最高，超過身體目前的適應能力，容易造成過度疲勞或運動傷害，反而更難持續下去。比較安全的做法是先從低強度、短時間開始，之後再逐步依身體反應增加。",
    },
    {
      id: "d22-q5",
      question: "FITT 中的 Type（類型）變項，通常包含哪四大類運動？",
      options: [
        "有氧、阻力、伸展、平衡",
        "快走、跑步、游泳、騎車",
        "熱身、主要運動、緩和、休息",
        "肩頸、上肢、下肢、核心",
      ],
      answerIndex: 0,
      explanation:
        "Type 大致分成有氧（練心肺耐力）、阻力（練肌力）、伸展（練柔軟度）、平衡（對長者防跌特別重要）四大類，理想上會依目標搭配組合，而不是只練其中一種。快走、跑步等只是有氧類別下的具體項目，不是四大分類本身。",
    },
    {
      id: "d22-q6",
      question: "單次運動安排 20-30 分鐘的中等強度主要運動時間，通常還應該包含哪兩個階段？",
      options: [
        "只需要主要運動，不需要其他階段",
        "熱身與緩和",
        "測驗與比賽",
        "冥想與睡眠",
      ],
      answerIndex: 1,
      explanation:
        "完整的一次運動安排通常包含熱身、主要運動、緩和三段，熱身讓身體逐步進入狀態、緩和則幫助身體慢慢恢復平靜，都是時間（Time）變項要考慮的一部分，不是只有主要運動這一段才算數。",
    },
    {
      id: "d22-q7",
      question: "若運動中或運動後出現明顯疼痛（非單純痠脹）、關節腫脹等不適，建議怎麼處理？",
      options: [
        "忍痛繼續完成當天的訓練菜單",
        "停止運動並諮詢醫師或物理治療師，不要自行加重訓練硬撐",
        "自行加大強度，讓身體「適應」疼痛",
        "只要隔天再練就沒關係，不需要特別處理",
      ],
      answerIndex: 1,
      explanation:
        "明顯疼痛、關節腫脹或不對稱不適，已經超出「微痠」的正常運動反應範圍，可能是身體發出的警訊，應該停止並諮詢醫師或物理治療師，釐清原因後再決定是否及如何繼續訓練。自行忍痛硬撐或加重強度，都可能讓問題惡化。",
    },
  ],
};

export default lesson;
