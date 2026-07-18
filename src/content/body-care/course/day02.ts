import type { DayLesson } from "@/lib/content/types";

// 全身骨架：真實公有領域骨架圖（Wikimedia Commons，Mikael Häggström，Public Domain），
// 下載存於 public/body-care/figures/，由 <image href> 本機載入，上面疊加中文引線標註。
const skeletonSvg = `<svg viewBox="0 0 640 600" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="640" height="600" fill="#ffffff"/>
  <image href="/body-care/figures/skeleton-front.svg" x="175" y="20" width="290" height="560" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="16" font-weight="bold" fill="#0d9488">
    <circle cx="260" cy="130" r="4"/>
    <line x1="148" y1="150" x2="240" y2="130" stroke="#0d9488" stroke-width="1.5"/>
    <text x="140" y="155" text-anchor="end">肩胛骨</text>
    <circle cx="214" cy="240" r="4"/>
    <line x1="148" y1="244" x2="212" y2="240" stroke="#0d9488" stroke-width="1.5"/>
    <text x="140" y="249" text-anchor="end">上肢骨</text>
    <circle cx="322" cy="214" r="4"/>
    <line x1="495" y1="212" x2="332" y2="214" stroke="#0d9488" stroke-width="1.5"/>
    <text x="502" y="219">脊椎</text>
    <circle cx="332" cy="260" r="4"/>
    <line x1="495" y1="300" x2="344" y2="260" stroke="#0d9488" stroke-width="1.5"/>
    <text x="502" y="305">骨盆</text>
    <circle cx="356" cy="430" r="4"/>
    <line x1="495" y1="430" x2="360" y2="430" stroke="#0d9488" stroke-width="1.5"/>
    <text x="502" y="435">下肢骨</text>
  </g>
</svg>`;

// 脊椎側面四個生理彎曲示意圖。
const spineSvg = `<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="0" y="0" width="320" height="400" fill="#ffffff"/>
  <!-- 參考鉛垂線 -->
  <line x1="150" y1="20" x2="150" y2="380" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
  <!-- 脊椎曲線 -->
  <path d="M150 30 C130 60 132 96 150 120 C176 150 178 200 150 236 C128 266 130 306 154 336"
        fill="none" stroke="#0d9488" stroke-width="8" stroke-linecap="round"/>
  <!-- 區段色標 -->
  <g font-size="12">
    <circle cx="138" cy="70" r="5" fill="#14b8a6"/>
    <text x="185" y="66" fill="#0f172a" font-weight="bold">頸椎（前凸）</text>
    <text x="185" y="82" fill="#64748b" font-size="11">7 節，向前凹</text>
    <circle cx="170" cy="150" r="5" fill="#f59e0b"/>
    <text x="200" y="146" fill="#0f172a" font-weight="bold">胸椎（後凸）</text>
    <text x="200" y="162" fill="#64748b" font-size="11">12 節，向後凸</text>
    <circle cx="132" cy="236" r="5" fill="#14b8a6"/>
    <text x="20" y="232" fill="#0f172a" font-weight="bold">腰椎（前凸）</text>
    <text x="20" y="248" fill="#64748b" font-size="11">5 節，向前凹</text>
    <circle cx="150" cy="330" r="5" fill="#f59e0b"/>
    <text x="185" y="326" fill="#0f172a" font-weight="bold">薦椎/尾椎（後凸）</text>
  </g>
  <text x="150" y="395" text-anchor="middle" font-size="11" fill="#94a3b8">← 前　　側面看　　後 →</text>
</svg>`;

// 肩胛骨（背面）與骨盆（正面）對照示意圖。
const scapulaPelvisSvg = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="0" y="0" width="420" height="240" fill="#ffffff"/>
  <!-- 左：肩胛骨（背面） -->
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">肩胛骨（背面）</text>
  <line x1="105" y1="40" x2="105" y2="200" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <g fill="#99f6e4" stroke="#0d9488" stroke-width="2">
    <path d="M96 60 L58 70 L64 128 L98 116 Z"/>
    <path d="M114 60 L152 70 L146 128 L112 116 Z"/>
  </g>
  <text x="46" y="150" font-size="11" fill="#475569">兩片三角形</text>
  <text x="46" y="164" font-size="11" fill="#475569">扁平骨，貼在</text>
  <text x="46" y="178" font-size="11" fill="#475569">肋骨後方</text>
  <!-- 右：骨盆（正面） -->
  <text x="315" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#db2777">骨盆（正面）</text>
  <path d="M258 60 Q315 44 372 60 Q384 96 356 120 L340 150 Q315 138 290 150 L274 120 Q246 96 258 60 Z"
        fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
  <!-- 薦椎 -->
  <path d="M305 60 L325 60 L322 108 L308 108 Z" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/>
  <text x="332" y="78" font-size="11" fill="#475569">髂骨（腸骨）</text>
  <text x="298" y="176" font-size="11" fill="#475569">像一個「盆子」</text>
  <text x="298" y="190" font-size="11" fill="#475569">承接軀幹重量</text>
</svg>`;

// 四肢長骨命名示意圖。
const limbBonesSvg = `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="0" y="0" width="420" height="300" fill="#ffffff"/>
  <!-- 上肢 -->
  <text x="110" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">上肢（手臂）</text>
  <circle cx="110" cy="44" r="7" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="103" y="50" width="14" height="80" rx="7" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="110" cy="138" r="6" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="94" y="146" width="11" height="86" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <rect x="115" y="146" width="11" height="86" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <g font-size="12" fill="#0f172a">
    <text x="150" y="94">肱骨</text>
    <line x1="148" y1="90" x2="118" y2="90" stroke="#94a3b8" stroke-width="1"/>
    <text x="150" y="185">橈骨</text>
    <text x="150" y="200">尺骨</text>
    <line x1="148" y1="188" x2="127" y2="188" stroke="#94a3b8" stroke-width="1"/>
  </g>
  <!-- 下肢 -->
  <text x="320" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">下肢（腿）</text>
  <circle cx="320" cy="44" r="8" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="311" y="50" width="18" height="96" rx="9" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="320" cy="154" r="7" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="311" y="162" width="15" height="112" rx="7" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <rect x="329" y="164" width="9" height="108" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <g font-size="12" fill="#0f172a">
    <text x="360" y="102">股骨</text>
    <line x1="358" y1="98" x2="330" y2="98" stroke="#94a3b8" stroke-width="1"/>
    <text x="360" y="212">脛骨</text>
    <text x="360" y="228">腓骨</text>
    <line x1="358" y1="216" x2="340" y2="216" stroke="#94a3b8" stroke-width="1"/>
  </g>
  <text x="210" y="292" text-anchor="middle" font-size="11" fill="#94a3b8">圓圈代表關節，長條代表長骨（示意，非實際比例）</text>
</svg>`;

// 觸診找骨性地標三步驟（操作步驟圖）。
const palpationStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">摸手肘尖端</text>
    <text x="70" y="108" font-size="12" fill="#64748b">尺骨鷹嘴突</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">摸膝蓋骨</text>
    <text x="210" y="108" font-size="12" fill="#64748b">髕骨</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">輕壓感受</text>
    <text x="350" y="108" font-size="12" fill="#64748b">骨頭硬度與邊緣</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 2,
  phase: "W1",
  title: "認識主要骨骼：脊椎、肩胛骨、骨盆與四肢骨",
  minutes: 16,
  goal: "認識支撐全身的四組主要骨骼——脊椎、肩胛骨、骨盆與四肢長骨的位置與角色，建立一張「身體鷹架」的心智圖，為第 3 天的觸診練習做準備。",
  sections: [
    {
      heading: "骨骼是身體的鷹架",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

昨天我們用三大平面建立了「描述方向」的共同語言；今天要認識被這些平面切過的主角——**骨骼**。成年人全身約有 206 塊骨頭，但照護實務上不需要背全部，只要先掌握**四組承重與定位的關鍵結構**：脊椎、肩胛骨、骨盆、四肢長骨。

可以把骨骼想成一棟房子的**鷹架與樑柱**：

- **樑柱（脊椎）**：從頭骨一路撐到骨盆，是身體的中軸。
- **平台（肩胛骨與骨盆）**：上半身動作靠肩胛骨這個「活動平台」，下半身重量靠骨盆這個「承重盆子」。
- **支架（四肢長骨）**：手臂與腿的長骨，負責把力量傳到手腳。

先在腦中建立這張整體地圖，之後不管是觸診、體態評估還是放鬆，都能很快定位「現在摸到／處理的是哪一根、屬於哪一組」。下面這張示意圖標出了四組骨骼的相對位置，先看整體，再逐一認識。`,
      figures: [
        {
          id: "d02-fig1",
          title: "全身主要骨骼位置（正面）",
          alt: "一張真實的人體全身骨架正面圖，以青色引線標出四組主要結構：中央縱向骨柱為脊椎、肩部後方兩片為肩胛骨、腰部盆狀環為骨盆、四肢長條骨為上肢骨與下肢骨。",
          svg: skeletonSvg,
          caption: "真實骨架圖上以青色引線標出四組主要結構，方便對照自己身體的相對位置。",
          credit: "Mikael Häggström, Public Domain, via Wikimedia Commons（Human skeleton front - no labels.svg）",
        },
      ],
    },
    {
      heading: "脊椎：身體的中軸與四個生理彎曲",
      body: `脊椎不是一根直棍子，而是由**一節一節的椎骨**堆疊而成，從側面看呈現和緩的 **S 形曲線**。由上到下分成四段：

| 區段 | 節數 | 側面彎曲方向 | 生活對應 |
| --- | --- | --- | --- |
| 頸椎 | 7 節 | 向前凸（前凸） | 支撐頭部、低頭滑手機的地方 |
| 胸椎 | 12 節 | 向後凸（後凸） | 與肋骨相連，駝背常發生於此 |
| 腰椎 | 5 節 | 向前凸（前凸） | 承重最大、腰痠常見部位 |
| 薦椎／尾椎 | 5＋4（多已癒合） | 向後凸 | 與骨盆相連的底座 |

這四個彎曲不是缺陷，而是天生的**避震設計**：S 形能把走路、跳躍的衝擊力分散掉，比直的柱子更耐壓。照護上很多問題都跟「彎曲被拉平或過度」有關——例如久坐讓腰椎前凸變平、駝背讓胸椎後凸過度，這些都是後面幾週評估與放鬆的重點。

今天先記住**四段的名稱、節數與彎曲方向**，並在自己背上由脖子往下摸，感受脖子（頸椎）到下背（腰椎）的曲線變化。`,
      figures: [
        {
          id: "d02-fig2",
          title: "脊椎側面的四個生理彎曲",
          alt: "脊椎側面示意圖，呈 S 形曲線，由上而下標註頸椎向前凸、胸椎向後凸、腰椎向前凸、薦椎尾椎向後凸，並標明各段節數。",
          svg: spineSvg,
          caption: "從側面看，健康脊椎呈和緩的 S 形，四個彎曲交替，一起達到避震與支撐的效果。",
        },
      ],
    },
    {
      heading: "肩胛骨與骨盆：上下半身的兩大平台",
      body: `脊椎兩端各連著一個「平台」，分工完全不同：

**肩胛骨（背面上方的兩片三角形扁骨）**是**活動平台**。它不像其他骨頭被關節牢牢卡住，而是主要靠肌肉「浮貼」在肋骨後方，可以上提、下壓、前引、後收、旋轉。手臂能靈活舉過頭、繞大圈，靠的就是肩胛骨會跟著滑動。也因為它靠肌肉懸吊，肩頸僵硬、圓肩的問題常和肩胛骨周圍肌肉失衡有關。

**骨盆（腰部下方像盆子的環狀結構）**是**承重平台**。它由左右髖骨（各由髂骨、坐骨、恥骨癒合而成，其中髂骨最大、也最容易在腰側摸到）與中間的薦椎組成一個穩固的環，上承脊椎與軀幹重量、下接兩條大腿骨，是全身力量傳遞的十字路口。骨盆的傾斜角度會直接影響腰椎曲線——之後談「骨盆前傾」時就會回到這裡。

一句話記憶：**肩胛骨要「活」（活動度），骨盆要「穩」（穩定度）**。這也預告了照護原則的差異——上半身常需要鬆開被卡住的肩胛，下半身常需要強化不夠穩的骨盆與核心。`,
      figures: [
        {
          id: "d02-fig3",
          title: "肩胛骨（背面）與骨盆（正面）對照",
          alt: "左側為背面觀的兩片三角形肩胛骨貼在脊椎兩旁，右側為正面觀的盆狀骨盆，中央標出薦椎與兩側髂骨。",
          svg: scapulaPelvisSvg,
          caption: "左：肩胛骨是靠肌肉懸吊的「活動平台」；右：骨盆是承接軀幹重量的「承重盆子」。",
        },
      ],
    },
    {
      heading: "四肢長骨與觸診預告",
      body: `四肢的骨頭多為**長骨**——兩端膨大（形成關節）、中間是筆直的骨幹，像支架一樣把力量傳到手腳末端。認識名稱有助於之後精準溝通：

- **上肢**：上臂只有一根 **肱骨**；前臂有兩根，拇指側是 **橈骨**、小指側是 **尺骨**。
- **下肢**：大腿只有一根 **股骨**（人體最長最強壯的骨頭）；小腿有兩根，內側粗的是 **脛骨**、外側細的是 **腓骨**。

一個好記的規律：**「近端一根、遠端兩根」**——上臂／大腿各一根，前臂／小腿各兩根，上下肢的結構是對稱呼應的。

這些長骨兩端的骨頭突起（如手肘、膝蓋、腳踝的骨點）多半**摸得到、看得到**，是明天觸診練習的重要地標。今天的收尾練習：在自己身上找出**手肘尖端**（尺骨的鷹嘴突）和**膝蓋骨**（髕骨）的位置，用手指輕壓感受骨頭的硬度與邊緣——這就是觸診最基礎的「找骨性地標」。`,
      figures: [
        {
          id: "d02-fig4",
          title: "四肢長骨的名稱",
          alt: "左側上肢示意圖標出肱骨、橈骨、尺骨；右側下肢示意圖標出股骨、脛骨、腓骨，圓圈代表關節、長條代表長骨。",
          svg: limbBonesSvg,
          caption: "規律：近端一根（肱骨／股骨）、遠端兩根（橈尺骨／脛腓骨），上下肢彼此對稱呼應。",
        },
        {
          id: "d02-fig5",
          title: "觸診找骨性地標：三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 摸手肘尖端（尺骨鷹嘴突）、步驟 2 摸膝蓋骨（髕骨）、步驟 3 輕壓感受骨頭硬度與邊緣。",
          svg: palpationStepsSvg,
          caption: "這就是觸診最基礎的「找骨性地標」：先找摸得到的骨頭突起，再輕壓感受其輪廓。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "照護上先掌握四組關鍵骨骼：脊椎（中軸）、肩胛骨與骨盆（兩大平台）、四肢長骨（支架）。",
    "脊椎由上到下分頸椎(7)、胸椎(12)、腰椎(5)、薦尾椎四段，側面呈 S 形四彎曲，用於避震。",
    "肩胛骨是靠肌肉懸吊的「活動平台」（要活）；骨盆是承接軀幹重量的「承重盆子」（要穩）。",
    "四肢長骨規律為「近端一根、遠端兩根」：肱骨—橈尺骨、股骨—脛腓骨，上下肢對稱呼應。",
    "長骨兩端摸得到的骨性突起是觸診的地標，明天會用來練習找位置。",
  ],
  quiz: [
    {
      id: "d02-q1",
      question: "照護實務上，今天建議優先掌握的四組主要骨骼是哪一組合？",
      options: [
        "脊椎、肩胛骨、骨盆、四肢長骨",
        "頭骨、肋骨、手指骨、腳趾骨",
        "牙齒、耳骨、鼻骨、下顎骨",
        "所有 206 塊骨頭都要先背起來",
      ],
      answerIndex: 0,
      explanation:
        "照護不需要一開始就背完全身 206 塊骨頭，而是先掌握承重與定位的四組關鍵結構：脊椎（中軸）、肩胛骨與骨盆（兩大平台）、四肢長骨（支架）。先建立整體地圖，之後觸診與評估才能快速定位處理的是哪一組。",
    },
    {
      id: "d02-q2",
      question: "健康的脊椎從側面看呈現什麼形狀？",
      options: [
        "完全筆直的一根直線",
        "和緩的 S 形四個生理彎曲",
        "向前彎成 C 形的單一弧線",
        "左右來回的鋸齒狀",
      ],
      answerIndex: 1,
      explanation:
        "脊椎由一節節椎骨堆疊而成，從側面看呈和緩的 S 形，包含頸椎前凸、胸椎後凸、腰椎前凸、薦尾椎後凸四個生理彎曲。這些彎曲是天生的避震設計，能把走路跳躍的衝擊分散掉，比直柱更耐壓。",
    },
    {
      id: "d02-q3",
      question: "脊椎四段中，節數為「12 節」且與肋骨相連的是哪一段？",
      options: ["頸椎", "腰椎", "胸椎", "薦椎"],
      answerIndex: 2,
      explanation:
        "由上到下的節數是頸椎 7 節、胸椎 12 節、腰椎 5 節；其中胸椎與肋骨相連，向後凸，是駝背常發生的區段。記住節數與相連構造，有助於之後定位痠痛與評估體態。",
    },
    {
      id: "d02-q4",
      question: "關於肩胛骨的敘述，下列何者正確？",
      options: [
        "它被關節牢牢卡死，幾乎不能移動",
        "它主要靠肌肉懸吊、可滑動，是上半身的「活動平台」",
        "它位於腹部前方，負責承接內臟重量",
        "它是人體最長最強壯的骨頭",
      ],
      answerIndex: 1,
      explanation:
        "肩胛骨是背面上方的兩片三角形扁骨，主要靠肌肉「浮貼」在肋骨後方，能上提、下壓、前引、後收與旋轉，讓手臂靈活舉過頭，是上半身的活動平台。也因為靠肌肉懸吊，圓肩與肩頸僵硬常與其周圍肌肉失衡有關。",
    },
    {
      id: "d02-q5",
      question: "課程用「要活 vs 要穩」來對比兩大平台，正確的對應是？",
      options: [
        "肩胛骨要穩、骨盆要活",
        "肩胛骨要活、骨盆要穩",
        "兩者都要盡量固定不動",
        "兩者都要盡量鬆到最大活動範圍",
      ],
      answerIndex: 1,
      explanation:
        "肩胛骨是活動平台，照護上常需要鬆開被卡住、恢復活動度（要活）；骨盆是承重平台，需要足夠穩定來傳遞軀幹重量（要穩）。這組對比預告了上下半身照護原則的差異，後面評估與運動處方會反覆用到。",
    },
    {
      id: "d02-q6",
      question: "前臂（手肘到手腕之間）由哪兩根長骨組成？",
      options: [
        "肱骨與股骨",
        "脛骨與腓骨",
        "橈骨與尺骨",
        "只有一根肱骨",
      ],
      answerIndex: 2,
      explanation:
        "前臂有兩根長骨，拇指側是橈骨、小指側是尺骨；上臂則只有一根肱骨。這符合「近端一根、遠端兩根」的規律，下肢也對稱呼應：大腿一根股骨、小腿兩根（脛骨與腓骨）。",
    },
    {
      id: "d02-q7",
      question: "人體最長、最強壯的長骨，位於身體哪個部位？",
      options: [
        "上臂（肱骨）",
        "大腿（股骨）",
        "小腿（脛骨）",
        "前臂（橈骨）",
      ],
      answerIndex: 1,
      explanation:
        "大腿的股骨是人體最長、最強壯的骨頭，向上連接骨盆、向下連接小腿，承受並傳遞大量體重。認識這些長骨的名稱與位置，也是為明天觸診「找骨性地標」做準備。",
    },
  ],
};

export default lesson;
