import type { DayLesson } from "@/lib/content/types";

// 膝關節：真實 PD 圖（Knee_diagram.svg）＋中文引線標註股骨／髕骨／脛骨。
const kneeDiagramSvg = `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="230" fill="#ffffff"/>
  <image href="/body-care/figures/knee-diagram.svg" x="140" y="24" width="200" height="182.25" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="230" cy="51" r="4"/>
    <line x1="132" y1="51" x2="226" y2="51" stroke="#0d9488" stroke-width="1.5"/>
    <text x="126" y="55" text-anchor="end">股骨</text>
    <circle cx="272" cy="72" r="4"/>
    <line x1="356" y1="76" x2="276" y2="72" stroke="#0d9488" stroke-width="1.5"/>
    <text x="362" y="80" text-anchor="start">髕骨</text>
    <circle cx="230" cy="174" r="4"/>
    <line x1="132" y1="174" x2="226" y2="174" stroke="#0d9488" stroke-width="1.5"/>
    <text x="126" y="178" text-anchor="end">脛骨</text>
  </g>
</svg>`;

// 股四頭肌：真實 PD 圖（Gray's Anatomy 1918 上色版，同 day04 quadSvg 手法）＋中文引線標註。
const quadJointSvg = `<svg viewBox="0 0 340 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="290" fill="#ffffff"/>
  <image href="/body-care/figures/thigh-quadriceps.png" x="110" y="14" width="96" height="238" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="155" cy="110" r="4"/>
    <line x1="224" y1="110" x2="157" y2="110" stroke="#0d9488" stroke-width="1.5"/>
    <text x="228" y="114">股四頭肌</text>
    <circle cx="150" cy="232" r="4"/>
    <line x1="224" y1="234" x2="153" y2="232" stroke="#0d9488" stroke-width="1.5"/>
    <text x="228" y="238">連接膝關節</text>
  </g>
</svg>`;

// 漸進負荷示意：長條圖逐週小幅增加。
const progressiveLoadSvg = `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="220" fill="#ffffff"/>
  <text x="190" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d9488">漸進負荷示意：緩慢、小幅度地增加</text>
  <text x="190" y="40" text-anchor="middle" font-size="10" fill="#64748b">（長條高度代表訓練負荷，非固定數值）</text>
  <line x1="30" y1="190" x2="360" y2="190" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="45" y="150" width="50" height="40" fill="#99f6e4" stroke="#0d9488" stroke-width="1.5"/>
  <rect x="130" y="130" width="50" height="60" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
  <rect x="215" y="105" width="50" height="85" fill="#2dd4bf" stroke="#0d9488" stroke-width="1.5"/>
  <rect x="300" y="80" width="50" height="110" fill="#0d9488" stroke="#0d9488" stroke-width="1.5"/>
  <text x="70" y="206" text-anchor="middle" font-size="10" fill="#475569">第1週</text>
  <text x="155" y="206" text-anchor="middle" font-size="10" fill="#475569">第2週</text>
  <text x="240" y="206" text-anchor="middle" font-size="10" fill="#475569">第3週</text>
  <text x="325" y="206" text-anchor="middle" font-size="10" fill="#475569">第4週</text>
</svg>`;

// 常見阻力訓練方式難度對照（由易入門到進階）。
const equipmentProgressionSvg = `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="190" fill="#ffffff"/>
  <defs>
    <marker id="d24arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#94a3b8"/>
    </marker>
  </defs>
  <text x="210" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">常見阻力訓練方式（由易入門到進階，示意）</text>
  <line x1="40" y1="120" x2="380" y2="120" stroke="#cbd5e1" stroke-width="2" marker-end="url(#d24arrow)"/>
  <g text-anchor="middle">
    <circle cx="60" cy="80" r="20" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/>
    <text x="60" y="150" font-size="11" fill="#0f172a">徒手</text>
    <text x="60" y="164" font-size="10" fill="#64748b">利用體重</text>
    <circle cx="170" cy="80" r="20" fill="#5eead4" stroke="#0d9488" stroke-width="2"/>
    <text x="170" y="150" font-size="11" fill="#0f172a">彈力帶</text>
    <text x="170" y="164" font-size="10" fill="#64748b">可調阻力</text>
    <circle cx="280" cy="80" r="20" fill="#2dd4bf" stroke="#0d9488" stroke-width="2"/>
    <text x="280" y="150" font-size="11" fill="#0f172a">啞鈴</text>
    <text x="280" y="164" font-size="10" fill="#64748b">重量漸增</text>
    <circle cx="380" cy="80" r="20" fill="#0d9488" stroke="#0d9488" stroke-width="2"/>
    <text x="380" y="150" font-size="11" fill="#0f172a">器械</text>
    <text x="380" y="164" font-size="10" fill="#64748b">軌跡固定</text>
  </g>
</svg>`;

// 阻力訓練安全操作四步驟（操作步驟圖）。
const resistanceSafetyStepsSvg = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="170" fill="#ffffff"/>
  <line x1="55" y1="48" x2="405" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="55" cy="48" r="20" fill="#0d9488"/>
    <text x="55" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="55" y="92" font-size="11" fill="#0f172a">先暖身</text>
    <text x="55" y="107" font-size="11" fill="#64748b">啟動肌肉關節</text>
    <circle cx="170" cy="48" r="20" fill="#0d9488"/>
    <text x="170" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="170" y="92" font-size="11" fill="#0f172a">全程控制</text>
    <text x="170" y="107" font-size="11" fill="#64748b">不甩動借力</text>
    <circle cx="285" cy="48" r="20" fill="#0d9488"/>
    <text x="285" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="285" y="92" font-size="11" fill="#0f172a">保留餘力</text>
    <text x="285" y="107" font-size="11" fill="#64748b">力竭前1-2下停</text>
    <circle cx="405" cy="48" r="20" fill="#0d9488"/>
    <text x="405" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="405" y="92" font-size="11" fill="#0f172a">疼痛立即停</text>
    <text x="405" y="107" font-size="11" fill="#64748b">詢問專業人員</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 24,
  phase: "W4",
  title: "肌肉強化基礎：阻力訓練如何保護關節",
  minutes: 17,
  goal: "理解肌力與關節穩定的關係、漸進負荷原則，學習挑選合適的阻力訓練方式與安全操作要點，為關節建立保護。",
  sections: [
    {
      heading: "為什麼「練肌肉」能保護關節",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

關節本身（如膝蓋、肩膀）主要靠骨頭形狀、韌帶與關節囊做**被動穩定**，但這些構造的支撐力有限。真正提供**動態穩定**、隨時因應動作調整支撐力道的，是包覆在關節周圍的**肌肉**。可以把關節想成帳篷的中柱，周圍的肌肉就像一條條拉繩——拉繩夠強、角度分布夠好，帳篷才站得穩；肌肉夠強、協調夠好，關節在走路、蹲下、上下樓梯時才不會被過大的力量拉扯到不該去的角度。

這也是為什麼「膝蓋不好」不一定只能休息不動，很多情況下（實際狀況仍須由醫師或物理治療師評估）適度強化膝蓋周圍的股四頭肌與臀肌，反而有助於分擔關節壓力、改善穩定度。當然，這不代表所有關節問題都適合立刻做阻力訓練——如果有明確的關節疾病診斷、術後恢復期或急性疼痛，訓練的種類與強度都需要專業評估後再進行，不宜自行判斷。`,
      figures: [
        {
          id: "d24-fig1",
          title: "膝關節構造（真實解剖圖）",
          alt: "真實膝關節側面解剖圖，以中文引線標出上方的股骨（大腿骨）、中間前側的髕骨（膝蓋骨）、下方的脛骨（小腿骨）三個構造。",
          svg: kneeDiagramSvg,
          caption:
            "真實膝關節解剖圖：股骨（大腿骨）在上方、脛骨（小腿骨）在下方，中間為髕骨（膝蓋骨），關節周圍另有韌帶提供穩定（圖中未逐一標出）。",
          credit:
            "Mysid（原繪製），編修 John Holmes II、Mikael Häggström, Public Domain, via Wikimedia Commons（Knee_diagram.svg）",
        },
        {
          id: "d24-fig2",
          title: "股四頭肌：保護膝關節的重要肌群",
          alt: "真實大腿前側肌肉解剖圖，中文引線標出股四頭肌位置，以及其向下連接膝關節的位置。",
          svg: quadJointSvg,
          caption:
            "股四頭肌是膝關節前側最主要的動態穩定肌群，適度強化有助於分擔膝蓋壓力（實際訓練是否適合，仍須視個人關節狀況而定）。",
          credit:
            "Michael Gasperl / Gray's Anatomy(1918), Public Domain, via Wikimedia Commons（Quadriceps.png）",
        },
      ],
    },
    {
      heading: "漸進負荷原則：慢慢加量的道理",
      body: `阻力訓練要有效果，肌肉需要一點一點被要求「多做一些」，這就是**漸進負荷**的概念——透過緩慢增加重量、次數、組數或動作難度，讓肌肉持續獲得剛好超出目前能力一點點的刺激，逐漸變得更強壯。重點在「緩慢」與「一點點」：身體對負荷的適應需要時間（肌肉、肌腱、韌帶的適應速度也不完全同步），一次跳太大的重量或次數，超過組織來得及適應的範圍，就容易造成拉傷或關節不適，反而得不償失。

實務上一個保守的做法是：**先固定重量練到動作品質穩定、隔天只有微痠**，再考慮小幅增加重量或次數，一次調整的幅度不用大，例如重量增加一成左右或次數增加 1～2 下即可，並給身體 1～2 週觀察反應。如果加量後出現持續痠痛超過平常、睡眠品質下降或關節不適，就代表加量太快，應該退回上一階段、增加恢復時間，而不是硬撐著繼續加重。`,
      figures: [
        {
          id: "d24-fig3",
          title: "漸進負荷示意：逐週小幅增加",
          alt: "四個逐漸增高的長條圖，分別標示第一週到第四週，代表訓練負荷隨週次緩慢、小幅度地增加。",
          svg: progressiveLoadSvg,
          caption: "漸進負荷：讓身體有時間適應，避免一次跳太大的重量或次數。",
        },
      ],
    },
    {
      heading: "常見阻力訓練方式與挑選原則",
      body: `阻力訓練不一定要進健身房，常見方式大致可以分成四種，難度與可調性由易到難排列：**徒手訓練**（利用自身體重，如蹲站、伏地挺身變化式，入門門檻最低）、**彈力帶**（利用彈力帶的拉伸阻力，方便攜帶、阻力可換不同磅數的帶子調整）、**啞鈴／壺鈴**（可微調重量，適合想漸進加重的人）、**器械**（軌跡固定、較容易抓姿勢，對初學或關節穩定度不足的人相對安全）。

挑選原則上，**運動經驗較少、關節穩定度較弱、或有關節疑慮的人**，可以先從徒手動作或器械開始，因為軌跡固定、比較不容易因姿勢跑掉而受傷；等動作品質穩定、身體控制能力提升後，再逐步嘗試彈力帶或自由重量（啞鈴），增加動作的協調挑戰。沒有哪一種方式絕對「最好」，重點是**動作做得標準、循序漸進**，並依自己的目標、場地與身體狀況選擇合適的工具，若有關節疾病史，建議先諮詢物理治療師規劃合適的訓練方式。`,
      figures: [
        {
          id: "d24-fig4",
          title: "常見阻力訓練方式難度對照",
          alt: "四個圓圈由左至右依序標示徒手、彈力帶、啞鈴、器械，圓圈顏色由淺到深，並有箭頭表示由易入門到進階的方向。",
          svg: equipmentProgressionSvg,
          caption: "由易入門到進階：徒手、彈力帶、啞鈴、器械，可依經驗與關節狀況挑選。",
        },
      ],
    },
    {
      heading: "安全操作原則與步驟",
      body: `阻力訓練的效果建立在「安全地持續累積」上，以下幾個原則能大幅降低受傷風險：**動作全程都要控制**，不要靠甩動或慣性帶動重量，尤其是放下重量的過程常被忽略，其實同樣重要；**呼吸不要憋氣**，出力時吐氣、還原時吸氣，長時間憋氣可能造成血壓瞬間升高；**保留餘力**，一般建議在感覺快要無法維持標準動作前 1～2 下就停止，不需要每組都練到完全舉不動的「力竭」。

如果訓練中出現**關節明顯疼痛**（不是單純的肌肉痠脹）、關節有卡住感或不穩定感，應立即停止該動作，休息並觀察，若持續不適應諮詢醫師或物理治療師，不要自行加重或勉強做完整組數。長者或有骨質疏鬆、慢性病史者，開始阻力訓練前更建議先諮詢專業人員，確認合適的動作與重量範圍。下面的步驟圖整理了每次訓練該留意的四個安全提醒。`,
      figures: [
        {
          id: "d24-fig5",
          title: "阻力訓練安全操作：四個提醒",
          alt: "四個編號步驟由虛線串接：步驟 1 先暖身、步驟 2 動作全程控制不甩動借力、步驟 3 保留餘力力竭前一到兩下停止、步驟 4 關節疼痛立即停止並詢問專業人員。",
          svg: resistanceSafetyStepsSvg,
          caption: "四個安全提醒，貫穿每一次阻力訓練，比追求重量更重要。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "關節周圍的肌肉提供動態穩定，肌肉夠強、協調夠好，關節較不容易被過大力量拉扯到不該去的角度。",
    "漸進負荷原則：緩慢、小幅度增加重量或次數，讓身體來得及適應，避免加量過快造成拉傷或關節不適。",
    "常見阻力訓練方式（徒手／彈力帶／啞鈴／器械）難度不同，關節穩定度較弱或經驗較少者可先從軌跡固定的徒手或器械開始。",
    "訓練時動作要全程控制、避免憋氣，一般保留 1-2 下餘力即可，不需要每組都練到力竭。",
    "若訓練中出現關節明顯疼痛或不穩定感，應立即停止並諮詢醫師或物理治療師；長者或有骨質疏鬆、慢性病史者應先諮詢專業人員再開始。",
  ],
  quiz: [
    {
      id: "d24-q1",
      question: "關節主要靠什麼提供「動態穩定」，隨時因應動作調整支撐力道？",
      options: ["骨頭的形狀", "周圍包覆的肌肉", "皮膚的彈性", "體重的重量"],
      answerIndex: 1,
      explanation:
        "骨頭形狀、韌帶與關節囊提供的是被動穩定，支撐力有限；真正能隨動作即時調整、提供動態穩定的是關節周圍的肌肉，就像帳篷的拉繩一樣支撐中柱。這也是強化相關肌群有助於保護關節的原因。",
    },
    {
      id: "d24-q2",
      question: "「漸進負荷」原則的核心精神是什麼？",
      options: [
        "每次訓練都要用最大重量挑戰極限",
        "緩慢、小幅度地增加重量或次數，讓身體有時間適應",
        "重量固定不變，永遠不需要調整",
        "只要有練就好，強度和次數都不重要",
      ],
      answerIndex: 1,
      explanation:
        "漸進負荷強調緩慢、小幅度地增加重量、次數、組數或難度，讓肌肉、肌腱、韌帶都有時間逐步適應。一次跳太大的重量或次數，超過組織來得及適應的範圍，容易造成拉傷或關節不適。",
    },
    {
      id: "d24-q3",
      question: "加量之後出現哪些跡象，代表加量太快、應該退回上一階段？",
      options: [
        "隔天只有輕微痠痛，恢復良好",
        "持續痠痛超過平常、睡眠品質下降或關節不適",
        "動作變得更輕鬆流暢",
        "完全沒有任何感覺，代表訓練無效",
      ],
      answerIndex: 1,
      explanation:
        "如果加量後出現持續痠痛超過平常、睡眠品質下降或關節不適，代表身體來不及適應這次的加量幅度，應該退回上一階段、增加恢復時間，而不是硬撐著繼續加重訓練。",
    },
    {
      id: "d24-q4",
      question: "關節穩定度較弱或運動經驗較少的人，建議優先從哪種阻力訓練方式入門？",
      options: [
        "自由重量的啞鈴，追求最大訓練效果",
        "徒手訓練或軌跡固定的器械",
        "直接挑戰最大重量的槓鈴訓練",
        "任何方式都一樣，不需要考慮經驗與穩定度",
      ],
      answerIndex: 1,
      explanation:
        "徒手訓練與器械的動作軌跡相對固定，比較不容易因姿勢跑掉而受傷，適合運動經驗較少或關節穩定度較弱的人入門；等動作品質穩定、控制能力提升後，再逐步嘗試彈力帶或自由重量增加協調挑戰。",
    },
    {
      id: "d24-q5",
      question: "阻力訓練時正確的呼吸原則是什麼？",
      options: [
        "出力時吐氣、還原時吸氣，避免長時間憋氣",
        "全程憋氣才能發揮最大力量",
        "呼吸節奏不重要，不用特別留意",
        "只要出力前深吸一口氣，之後都不用呼吸",
      ],
      answerIndex: 0,
      explanation:
        "阻力訓練建議出力時吐氣、還原時吸氣，維持自然的呼吸節奏；長時間憋氣可能造成血壓瞬間升高，對有心血管疑慮的人尤其需要留意，不宜為了追求力量而刻意憋氣。",
    },
    {
      id: "d24-q6",
      question: "關於訓練時的「力竭」，課程建議的做法是？",
      options: [
        "每一組都要練到完全舉不動才有效果",
        "一般建議保留 1-2 下餘力，不必每組都練到完全力竭",
        "力竭是必要條件，沒有力竭就等於白練",
        "力竭與否和受傷風險完全無關",
      ],
      answerIndex: 1,
      explanation:
        "課程建議在感覺快要無法維持標準動作前 1-2 下就停止，保留餘力，而不是每組都練到完全舉不動。過度追求力竭容易讓動作變形、增加受傷風險，對訓練效果的幫助也不一定比保留餘力更好。",
    },
    {
      id: "d24-q7",
      question: "訓練中膝蓋出現明顯疼痛與卡住感，應該怎麼處理？",
      options: [
        "忍痛把整組動作做完",
        "立即停止該動作，觀察並視情況諮詢醫師或物理治療師",
        "自行加重訓練「撐過去」就會好",
        "換成更高強度的動作繼續練",
      ],
      answerIndex: 1,
      explanation:
        "關節明顯疼痛或有卡住感、不穩定感，已經超出正常訓練後的肌肉痠脹範圍，應該立即停止該動作、休息觀察，若持續不適應諮詢醫師或物理治療師，不要自行加重訓練或勉強撐完整組動作。",
    },
  ],
};

export default lesson;
