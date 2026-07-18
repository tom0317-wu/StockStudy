import type { DayLesson } from "@/lib/content/types";

// 觸診層次示意：手指由淺入深觸摸皮膚、筋膜、肌肉、骨頭的剖面圖。
const palpationLayersSvg = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="240" fill="#ffffff"/>
  <text x="130" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">由淺入深觸摸</text>
  <ellipse cx="130" cy="42" rx="11" ry="15" fill="#fcd9b6" stroke="#92400e" stroke-width="1.5"/>
  <line x1="130" y1="57" x2="130" y2="78" stroke="#92400e" stroke-width="3" stroke-linecap="round"/>
  <rect x="40" y="78" width="180" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="40" y="78" width="180" height="18" fill="#fde8e8" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="40" y="96" width="180" height="26" fill="#fff7ed" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="40" y="122" width="180" height="56" fill="#fda4af" fill-opacity="0.55" stroke="#e11d48" stroke-width="1.5"/>
  <circle cx="130" cy="198" r="24" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
  <g font-size="11" fill="#475569">
    <text x="228" y="90">皮膚：薄、可滑動</text>
    <text x="228" y="112">皮下與筋膜：柔軟</text>
    <text x="228" y="126">　　有彈性、可推移</text>
    <text x="228" y="152">肌肉：有彈性但</text>
    <text x="228" y="166">　　按壓有阻力</text>
    <text x="228" y="200">骨頭：硬、邊緣清楚</text>
    <line x1="226" y1="196" x2="156" y2="198" stroke="#94a3b8" stroke-width="1"/>
  </g>
</svg>`;

// 全身常見骨性地標：真實公有領域骨架圖（Wikimedia Commons，Mikael Häggström，Public Domain）
// ＋中文引線標出肩峰、肱骨外上髁、髂前上棘、脛骨粗隆。
const bonyLandmarksSvg = `<svg viewBox="0 0 640 620" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="640" height="620" fill="#ffffff"/>
  <image href="/body-care/figures/skeleton-front.svg" x="175" y="20" width="290" height="560" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="233" cy="127" r="4"/>
    <line x1="148" y1="127" x2="231" y2="127" stroke="#0d9488" stroke-width="1.5"/>
    <text x="140" y="132" text-anchor="end">肩峰</text>
    <circle cx="216" cy="222" r="4"/>
    <line x1="148" y1="226" x2="214" y2="222" stroke="#0d9488" stroke-width="1.5"/>
    <text x="140" y="231" text-anchor="end">肱骨外上髁</text>
    <circle cx="355" cy="294" r="4"/>
    <line x1="495" y1="294" x2="357" y2="294" stroke="#0d9488" stroke-width="1.5"/>
    <text x="502" y="298" text-anchor="start">髂前上棘</text>
    <circle cx="337" cy="373" r="4"/>
    <line x1="495" y1="373" x2="339" y2="373" stroke="#0d9488" stroke-width="1.5"/>
    <text x="502" y="377" text-anchor="start">脛骨粗隆</text>
  </g>
</svg>`;

// 觸診力道參考量表（0-10）。
const pressureScaleSvg = `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="140" fill="#ffffff"/>
  <text x="210" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">觸診力道參考量表（0-10）</text>
  <rect x="30" y="50" width="360" height="24" rx="4" fill="#e2e8f0"/>
  <rect x="30" y="50" width="180" height="24" rx="4" fill="#99f6e4"/>
  <rect x="210" y="50" width="90" height="24" fill="#5eead4"/>
  <rect x="300" y="50" width="90" height="24" rx="4" fill="#fda4af"/>
  <line x1="210" y1="46" x2="210" y2="78" stroke="#0d9488" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="300" y1="46" x2="300" y2="78" stroke="#e11d48" stroke-width="2" stroke-dasharray="3 3"/>
  <g font-size="11" fill="#334155">
    <text x="30" y="94">0：無感覺</text>
    <text x="150" y="94">5-6：微痠（建議上限）</text>
    <text x="300" y="94">10：劇痛（禁止）</text>
  </g>
  <text x="210" y="118" text-anchor="middle" font-size="11" fill="#64748b">觸診與按壓以「微痠」為原則，出現尖銳疼痛應立即停止</text>
</svg>`;

// 觸診找骨性地標操作步驟（三步驟）。
const palpationStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">找大致位置</text>
    <text x="70" y="108" font-size="12" fill="#64748b">參考骨性地標圖</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">由淺入深輕觸</text>
    <text x="210" y="108" font-size="12" fill="#64748b">力道維持微痠</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">兩側對照</text>
    <text x="350" y="108" font-size="12" fill="#64748b">比較軟硬與範圍</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 3,
  phase: "W1",
  title: "觸診練習：感受骨骼突起與凹陷",
  minutes: 16,
  goal: "學會用手指分辨皮膚、筋膜、肌肉、骨頭不同的觸感，並在自己身上找到幾個常見的骨性地標，建立觸診的基本手感與力道控制。",
  sections: [
    {
      heading: "什麼是觸診？",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

**觸診**就是用手指的感覺，去辨認皮膚下方構造的位置與狀態。前兩天我們用平面建立了方向語言、認識了主要骨骼，今天要把這些知識落實到手指尖——透過觸摸，把「知道骨頭在哪裡」變成「摸得到骨頭在哪裡」。

觸診不是什麼神秘的技術，而是一種需要練習的感覺技能。不同組織摸起來的感覺差異很大：皮膚薄且可以滑動、皮下脂肪與筋膜柔軟有彈性、肌肉有彈性但按壓會有一定阻力、骨頭則是硬、邊緣清楚。今天先從最容易分辨的**骨性地標**開始，因為骨頭邊界明確、大部分人都摸得到，是練習觸診最好的起點。

要特別說明：觸診練習的目的是熟悉自己身體的正常構造，方便之後幾週的體態觀察與放鬆練習，**不是**用來自我診斷疾病或痛症。如果摸到不明原因的腫塊、持續疼痛或異常變化，應該諮詢醫師，而不是自行判斷。`,
      figures: [
        {
          id: "d03-fig1",
          title: "觸診層次示意：由淺入深",
          alt: "一根手指由上往下觸摸剖面圖，依序標示皮膚、皮下與筋膜、肌肉、骨頭四層，並用文字說明各層的觸感差異。",
          svg: palpationLayersSvg,
          caption: "示意圖：由淺入深依序是皮膚（薄、可滑動）、筋膜與脂肪（柔軟有彈性）、肌肉（有彈性但有阻力）、骨頭（硬、邊緣清楚）。",
        },
      ],
    },
    {
      heading: "常見骨性地標",
      body: `骨性地標是骨頭上摸得到的突起或邊緣，因為位置固定、容易定位，是觸診與體態評估最常用的參考點。今天先認識四個上肢與下肢的代表性地標：

- **肩峰**：肩膀外側最高、最硬的一塊骨突，屬於肩胛骨的一部分，是肩膀的最高點，也是量測手臂長度或觀察肩線是否等高的常用參考。
- **肱骨外上髁**：手肘外側、上臂骨（肱骨）與前臂交界處的骨突，把手肘伸直、輕輕彎曲就能摸到一塊明顯的骨頭凸起。
- **髂前上棘**：骨盆前方兩側可以摸到的骨突，雙手插腰時大拇指前方摸到的硬點通常就是這裡，是之後判斷骨盆是否傾斜的重要地標。
- **脛骨粗隆**：膝蓋骨正下方、小腿脛骨前側的一塊隆起，是髕骨肌腱附著的位置，蹲下站起時可以感覺到它跟著髕骨肌腱一起繃緊。

這幾個地標的共同特性是**位置固定、左右對稱、大部分人都容易摸到**，很適合作為觸診入門的練習對象，之後幾週介紹肌肉、筋膜與體態評估時，也會不斷回來使用這些地標定位。`,
      figures: [
        {
          id: "d03-fig2",
          title: "常見骨性地標（正面示意）",
          alt: "一張真實的人體全身骨架正面圖，以青色引線標出四個骨性地標：肩峰、肱骨外上髁、髂前上棘、脛骨粗隆。",
          svg: bonyLandmarksSvg,
          caption: "真實骨架圖上以青色引線標出四個今天要練習觸摸的骨性地標，方便對照自己身體的相對位置。",
          credit: "Mikael Häggström, Public Domain, via Wikimedia Commons（Human skeleton front - no labels.svg）",
        },
      ],
    },
    {
      heading: "觸診的手感與力道控制",
      body: `觸診最重要的技巧不是「用力壓」，而是**分辨手感**。同樣是按壓，摸到肌肉會感覺柔軟但有彈性回饋，摸到骨頭邊緣則是明確、硬實、不太會移動；摸到肌腱或筋膜時，輕輕左右推動皮膚，會感覺到一條相對緊繃、可滑動的條狀構造。多練習幾次，手指就能慢慢分辨這些差異。

力道控制上，建議用 **0 到 10 分的疼痛量表**來自我衡量：0 分是完全沒有感覺，10 分是劇烈疼痛。觸診練習的力道，維持在 **5 到 6 分「微痠」**的程度就足夠，不需要、也不應該加壓到明顯疼痛。如果按壓時出現尖銳、放射狀或超出微痠範圍的疼痛，代表力道太大或位置不適合，應該立刻放鬆力道或停止。

還有幾個安全提醒：避免直接用力按壓有明顯血管搏動的地方、避免長時間固定用力壓在同一個點、皮膚有傷口或發炎處先跳過不摸。這些原則看似簡單，卻是之後幾週所有觸診與放鬆練習都會沿用的基本規則，值得今天就養成習慣。`,
      figures: [
        {
          id: "d03-fig3",
          title: "觸診力道參考量表",
          alt: "一條 0 到 10 分的橫向量表，標出 0 分無感覺、5 到 6 分微痠為建議上限、10 分劇痛為禁止範圍，並用虛線標示建議的力道區間。",
          svg: pressureScaleSvg,
          caption: "觸診與按壓建議控制在 5-6 分「微痠」即可，出現尖銳或劇烈疼痛應立即停止。",
        },
      ],
    },
    {
      heading: "觸診練習：操作步驟",
      body: `今天的練習分成三個步驟，建議直接在自己身上操作一次：

1. **找大致位置**：對照上面的地標圖，先用眼睛與記憶大概判斷地標所在的區域，例如肩膀外側最高點、手肘外側、腰部兩側骨盆前方、膝蓋骨正下方。
2. **由淺入深輕觸**：手指放鬆貼上皮膚，先感受表層的滑動，再慢慢施力到摸到明確的骨頭邊緣，力道全程維持在「微痠」以內。
3. **兩側對照**：找到一側的地標後，換到另一側用同樣的力道與方式觸摸，比較兩側摸起來的軟硬、範圍與感覺是否大致對稱。

兩側對照特別重要，因為多數人身體並非完全對稱，透過比較才能建立自己身體「平常長什麼樣子」的基準，之後如果某一側出現明顯不同的緊繃或壓痛，才會比較容易察覺。今天不需要記錄具體數字，只要練習用手感受、用語言描述（例如「左邊比較容易摸到、右邊比較深」）即可，這是接下來幾週肌肉與筋膜課程的基本功。`,
      figures: [
        {
          id: "d03-fig4",
          title: "觸診找骨性地標：三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 找大致位置參考骨性地標圖、步驟 2 由淺入深輕觸並維持力道微痠、步驟 3 兩側對照比較軟硬與範圍。",
          svg: palpationStepsSvg,
          caption: "建議直接在自己身上操作一次：先定位、再輕觸、最後左右對照。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "觸診是用手感覺骨骼與軟組織位置與狀態的基本技巧，目的是熟悉身體構造，不能取代醫療診斷。",
    "常見骨性地標：肩峰、肱骨外上髁、髂前上棘、脛骨粗隆，是身體上容易摸到且方便定位的骨突。",
    "觸診手感有分軟硬滑動：肌肉軟有彈性、骨頭硬邊緣清楚、肌腱筋膜可滑動。",
    "力道以 0-10 量表估計，建議維持在 5-6 分微痠即可，出現尖銳疼痛應立即停止。",
    "練習時建議由淺入深、左右兩側對照比較，並用語言記錄觀察結果供之後對照。",
  ],
  quiz: [
    {
      id: "d03-q1",
      question: "觸診主要的目的為何？",
      options: [
        "用手感覺骨骼與軟組織的位置與狀態",
        "直接診斷疾病",
        "施加治療矯正身體結構",
        "取代醫療影像檢查",
      ],
      answerIndex: 0,
      explanation:
        "觸診是用手指感覺構造位置與軟硬變化的基本技巧，目的是熟悉正常身體構造。它不能用來診斷疾病或做治療處方，發現異常應轉介醫師等專業人員評估。",
    },
    {
      id: "d03-q2",
      question: "「肩峰」大致位於身體哪個位置？",
      options: [
        "肩膀外側最高點的骨突（肩胛骨的一部分）",
        "手肘外側",
        "骨盆前方",
        "膝蓋前方",
      ],
      answerIndex: 0,
      explanation:
        "肩峰是肩膀外側最高、最硬的骨突，屬於肩胛骨的一部分，常作為觀察兩側肩線是否等高的參考點。手肘外側的地標是肱骨外上髁，骨盆前方的地標是髂前上棘，兩者位置不同，不要混淆。",
    },
    {
      id: "d03-q3",
      question: "「肱骨外上髁」大致位於？",
      options: ["手肘外側，上臂骨與前臂交界處的骨突", "手腕內側", "膝蓋內側", "肩膀後方"],
      answerIndex: 0,
      explanation:
        "肱骨外上髁是手肘外側、上臂骨（肱骨）與前臂交界處的一塊骨突，手肘微彎時特別容易摸到。四個地標分別位於肩、肘、髖、膝附近，記住相對位置能幫助之後更快定位。",
    },
    {
      id: "d03-q4",
      question: "「髂前上棘」大致位於？",
      options: ["骨盆前方兩側可摸到的骨突", "後腦勺", "腳踝內側", "脊椎正中央"],
      answerIndex: 0,
      explanation:
        "髂前上棘位於骨盆前方兩側，雙手插腰時大拇指前方摸到的硬點通常就是這裡。它是之後判斷骨盆是否前傾或左右不對稱的重要參考地標。",
    },
    {
      id: "d03-q5",
      question: "「脛骨粗隆」大約在什麼位置？",
      options: [
        "膝蓋骨下方、小腿脛骨前側的凸起",
        "大腿後側正中央",
        "肩胛骨下角",
        "手肘鷹嘴突",
      ],
      answerIndex: 0,
      explanation:
        "脛骨粗隆位於膝蓋骨正下方、小腿脛骨前側，是髕骨肌腱附著的地方，蹲下站起時可以感覺到它跟著繃緊。這個地標對之後認識膝關節與大腿肌肉的關係很有幫助。",
    },
    {
      id: "d03-q6",
      question: "觸診力道量表建議控制在幾分？",
      options: ["0 分（完全無感覺）", "5-6 分微痠", "8-9 分明顯疼痛", "10 分劇痛才有效果"],
      answerIndex: 1,
      explanation:
        "建議維持在 5-6 分微痠即可，這樣的力道足以分辨組織層次，又不會造成不必要的不適。觸診不是以忍痛為目標，出現尖銳或劇烈疼痛應立即停止，這是之後幾週所有練習都要遵守的原則。",
    },
    {
      id: "d03-q7",
      question:
        "情境題：小美觸診時發現右膝內側出現遠比左膝明顯的紅腫與局部熱感，按壓時劇痛，她該怎麼做？",
      options: [
        "立即停止觸診並建議就醫評估",
        "加大力道確認是否骨折",
        "自行判斷是韌帶受傷，冰敷後恢復訓練",
        "忽略異常，繼續往下一個地標練習",
      ],
      answerIndex: 0,
      explanation:
        "紅腫、熱感合併劇痛屬於異常警訊，已經超出一般觸診練習的範圍，不應該繼續加壓或自行判斷成因。正確的做法是立即停止練習，建議儘速尋求醫師評估，觸診練習只是熟悉正常構造，不能用來判斷傷病。",
    },
  ],
};

export default lesson;
