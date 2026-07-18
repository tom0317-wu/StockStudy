import type { DayLesson } from "@/lib/content/types";

// 身體軟組織層次示意：皮膚、淺筋膜、肌肉、深筋膜、骨頭。
const fasciaLayersSvg = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="240" fill="#ffffff"/>
  <text x="220" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">身體軟組織層次（示意）</text>
  <rect x="60" y="40" width="220" height="18" fill="#fde8e8" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="60" y="58" width="220" height="30" fill="#fef3c7" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="60" y="88" width="220" height="50" fill="#fda4af" fill-opacity="0.55" stroke="#e11d48" stroke-width="1.5"/>
  <rect x="60" y="138" width="220" height="20" fill="#5eead4" fill-opacity="0.7" stroke="#0d9488" stroke-width="1.5"/>
  <rect x="60" y="158" width="220" height="34" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <g font-size="11" fill="#334155">
    <text x="290" y="52">皮膚</text>
    <text x="290" y="76">淺筋膜（脂肪層）</text>
    <text x="290" y="116">肌肉</text>
    <text x="290" y="150">深筋膜（緊密包覆肌肉）</text>
    <text x="290" y="178">骨頭</text>
  </g>
  <text x="220" y="216" text-anchor="middle" font-size="11" fill="#64748b">由外而內：皮膚 → 淺筋膜 → 肌肉 → 深筋膜 → 骨頭（示意，非實際厚度比例）</text>
</svg>`;

// 淺筋膜與深筋膜特性對照。
const fasciaCompareSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <rect x="20" y="20" width="180" height="180" rx="10" fill="#fef3c7" fill-opacity="0.5" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="110" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">淺筋膜</text>
  <g font-size="11" fill="#78350f">
    <text x="34" y="70">位置：皮膚正下方</text>
    <text x="34" y="90">質地：疏鬆、含脂肪</text>
    <text x="34" y="110">特性：可推動、滑動</text>
    <text x="34" y="130">角色：緩衝、儲能</text>
    <text x="34" y="150">觸感：柔軟、可捏起</text>
  </g>
  <rect x="220" y="20" width="180" height="180" rx="10" fill="#ccfbf1" fill-opacity="0.5" stroke="#0d9488" stroke-width="1.5"/>
  <text x="310" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">深筋膜</text>
  <g font-size="11" fill="#134e4a">
    <text x="234" y="70">位置：緊密包覆肌肉</text>
    <text x="234" y="90">質地：緻密、有方向性</text>
    <text x="234" y="110">特性：連結成「線」</text>
    <text x="234" y="130">角色：傳遞張力</text>
    <text x="234" y="150">觸感：較韌、不易推動</text>
  </g>
</svg>`;

// 後表線路徑：真實公有領域背面肌肉圖（Wikimedia Commons，Mikael Häggström，Public Domain）
// ＋青色虛線標出「後表線」概念路徑與中文引線。
const backLineSvg = `<svg viewBox="0 0 520 310" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="520" height="310" fill="#ffffff"/>
  <text x="230" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">後表線（背面真實解剖圖疊加示意）</text>
  <image href="/body-care/figures/muscles-posterior.png" x="130" y="32" width="200" height="244" preserveAspectRatio="xMidYMid meet"/>
  <path d="M230 269 C226 230 232 200 230 183 C228 150 232 135 230 130 C228 90 232 60 230 42"
        fill="none" stroke="#0d9488" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 7"/>
  <circle cx="230" cy="269" r="4" fill="#0d9488"/>
  <circle cx="230" cy="183" r="4" fill="#0d9488"/>
  <circle cx="230" cy="130" r="4" fill="#0d9488"/>
  <circle cx="230" cy="42" r="4" fill="#0d9488"/>
  <g font-size="14" font-weight="bold" fill="#0d9488">
    <line x1="340" y1="42" x2="234" y2="42" stroke="#0d9488" stroke-width="1.5"/>
    <text x="346" y="46" text-anchor="start">頭頂／後腦</text>
    <line x1="340" y1="130" x2="234" y2="130" stroke="#0d9488" stroke-width="1.5"/>
    <text x="346" y="134" text-anchor="start">下背、豎脊肌</text>
    <line x1="340" y1="183" x2="234" y2="183" stroke="#0d9488" stroke-width="1.5"/>
    <text x="346" y="187" text-anchor="start">大腿後側（膕繩肌）</text>
    <line x1="340" y1="269" x2="234" y2="269" stroke="#0d9488" stroke-width="1.5"/>
    <text x="346" y="273" text-anchor="start">腳底</text>
  </g>
  <text x="230" y="298" text-anchor="middle" font-size="11" fill="#64748b">概念路徑（解剖列車學說示意）：腳底→小腿後→大腿後→下背→後腦</text>
</svg>`;

// 側線路徑（側面示意，無對應公有領域側面全身圖，改以較擬真人形輪廓自繪）。
const lateralLineSvg = `<svg viewBox="0 0 300 460" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="300" height="460" fill="#ffffff"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">側線（側面示意）</text>
  <ellipse cx="130" cy="46" rx="18" ry="22" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <rect x="120" y="68" width="20" height="8" rx="3" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <path d="M114 76 C108 106 116 132 124 146 C118 164 114 182 120 198 L152 198 C158 182 154 164 148 146 C156 132 164 106 158 76 Z"
        fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="118" y1="80" x2="122" y2="188" stroke="#9ca3af" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="122" cy="196" rx="9" ry="11" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="130" y1="200" x2="126" y2="300" stroke="#9ca3af" stroke-width="14" stroke-linecap="round"/>
  <line x1="126" y1="300" x2="128" y2="404" stroke="#9ca3af" stroke-width="11" stroke-linecap="round"/>
  <ellipse cx="140" cy="414" rx="14" ry="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <path d="M150 414 C154 360 158 320 154 300 C150 260 156 210 148 172 C152 130 150 90 146 66 C144 56 144 48 142 40"
        fill="none" stroke="#4f46e5" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 8"/>
  <circle cx="150" cy="414" r="5" fill="#4f46e5"/>
  <circle cx="142" cy="40" r="5" fill="#4f46e5"/>
  <g font-size="11" fill="#0f172a">
    <text x="170" y="418">足外側</text>
    <text x="170" y="300">小腿／大腿外側</text>
    <text x="170" y="172">軀幹側面（肋間）</text>
    <text x="170" y="42">耳朵周圍</text>
  </g>
  <text x="150" y="448" text-anchor="middle" font-size="11" fill="#64748b">概念路徑：足外側→小腿大腿外側→軀幹側面→耳朵周圍</text>
</svg>`;

// 自我觀察筋膜線緊繃感的操作步驟。
const fasciaObserveStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">前彎測試</text>
    <text x="70" y="108" font-size="12" fill="#64748b">感受後表線緊繃感</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">側彎測試</text>
    <text x="210" y="108" font-size="12" fill="#64748b">感受側線緊繃感</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">記錄緊繃點</text>
    <text x="350" y="108" font-size="12" fill="#64748b">留意左右差異</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 5,
  phase: "W1",
  title: "深層肌與筋膜線：後表線、側線",
  minutes: 17,
  goal: "認識筋膜是什麼、淺層與深層筋膜的差異，並理解「後表線」與「側線」這兩條筋膜線的概念性走向，體會身體動作為何常常牽一髮動全身。",
  sections: [
    {
      heading: "筋膜是什麼？",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前兩天我們認識了骨骼地標與大肌肉群，今天要介紹一個把它們「包起來、連起來」的構造——**筋膜**。筋膜是一種結締組織，像一張連續不斷的網，包覆並連接全身的肌肉、骨骼、器官與神經血管，從頭到腳幾乎無所不在，不是某一條獨立的肌肉或韌帶。

可以把筋膜想像成橘子剝開後，包住每一瓣果肉、也連接整顆橘子的白色薄膜：它讓每一塊肌肉維持自己的形狀，同時又把相鄰、甚至距離很遠的構造連結在一起，讓力量可以透過筋膜傳遞出去。

這也是為什麼有時候明明是腳踝緊，卻會感覺牽動到小腿甚至大腿；或者長時間駝背，會讓胸口一路到手臂內側都感覺緊繃。今天要介紹的「淺層與深層」筋膜差異，以及「後表線」「側線」這兩條概念性路徑，都是用來理解這種全身連動現象的工具。`,
      figures: [
        {
          id: "d05-fig1",
          title: "身體軟組織層次示意",
          alt: "由外而內的分層剖面圖，依序標示皮膚、淺筋膜（脂肪層）、肌肉、深筋膜、骨頭五層構造。",
          svg: fasciaLayersSvg,
          caption: "示意圖：筋膜分布在皮膚下方（淺筋膜）與緊密包覆肌肉的位置（深筋膜），兩者角色不同。",
        },
      ],
    },
    {
      heading: "淺層與深層：兩種不同的筋膜",
      body: `筋膜依照位置與質地，大致可以分成兩種：

**淺筋膜**位於皮膚正下方，質地疏鬆、含有脂肪組織，可以用手指輕輕捏起、左右推移，觸感柔軟。它的角色比較像是緩衝墊與能量儲存庫，也是體溫調節的一部分。

**深筋膜**則緊密包覆在肌肉外層，質地緻密、纖維排列有明顯方向性，觸感較韌、不容易推動。深筋膜最重要的角色是**傳遞張力**：它把相鄰肌肉的筋膜前後連接起來，串成一條一條有方向性的「線」，讓一個部位收縮產生的力量，可以沿著這條線傳遞到其他部位。

分辨兩者的簡單方法：捏起皮膚感覺鬆軟可以移動的，多半是淺筋膜與皮下脂肪；用力按壓肌肉外層、感覺緊實有彈性但不太能推移的，則是包覆肌肉的深筋膜。今天接下來要介紹的兩條筋膜線，指的都是深筋膜串連而成的路徑。`,
      figures: [
        {
          id: "d05-fig2",
          title: "淺筋膜與深筋膜特性對照",
          alt: "左右兩個對照方塊，左側標示淺筋膜的位置、質地、特性、角色、觸感；右側標示深筋膜的對應特性，方便比較兩者差異。",
          svg: fasciaCompareSvg,
          caption: "淺筋膜疏鬆含脂肪、可推動；深筋膜緻密有方向性、負責連結成線、傳遞張力。",
        },
      ],
    },
    {
      heading: "後表線：從腳底到後腦的一條線",
      body: `**「解剖列車」（Anatomy Trains）**是一套把功能相關的深筋膜與肌肉串成路徑的教學模型，幫助理解身體動作為何常常牽一髮動全身。今天先認識其中一條最容易體會的路徑——**後表線**。

後表線的概念路徑，由下往上大致經過：**腳底 → 小腿後側 → 大腿後側（膕繩肌）→ 下背豎脊肌 → 後腦**。這條線串起了身體背面從腳到頭的一連串構造，日常最容易體會它的動作是**站立前彎**：多數人前彎摸腳趾時，感覺到緊繃的不只是大腿後側，往往一路延伸到小腿甚至下背，這就是後表線概念在生活中的體現。

要特別說明：解剖列車是一種幫助理解與教學的參考模型，用來說明筋膜與肌肉之間的功能性連結，並不是唯一或已經完全定論的解剖分類方式，更不是診斷或治療的依據。如果前彎時合併麻、刺痛或明顯無力等神經性症狀，應該諮詢醫師或物理治療師評估，不宜自行歸因為單純的筋膜緊繃。`,
      figures: [
        {
          id: "d05-fig3",
          title: "後表線概念路徑（背面示意）",
          alt: "身體背面真實肌肉解剖圖，疊加一條青色虛線由腳底沿小腿後側、大腿後側、下背豎脊肌，一路標示到後腦，代表後表線的概念路徑。",
          svg: backLineSvg,
          caption: "真實解剖圖疊加：腳底→小腿後→大腿後→下背→後腦，是前彎時緊繃感容易沿線傳導的常見範例。",
          credit: "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscle posterior labeled.png）",
        },
      ],
    },
    {
      heading: "側線：從足外側到耳朵的一條線",
      body: `另一條今天要認識的路徑是**側線**，概念路徑由下往上大致經過：**足外側 → 小腿與大腿外側 → 軀幹側面（肋間）→ 耳朵周圍**。這條線負責身體左右兩側的連結，與身體的側向穩定有關——例如單腳站立、側向跨步、或走路時避免身體左右晃動過大，都與這條線上的組織是否能協調出力有關。

日常最容易體會側線的動作是**身體側彎**：手往頭上伸直後緩慢向另一側側彎，會感覺到從腳踝外側、大腿外側、一路到肋骨側面都有牽拉感，這正是側線串聯範圍的體現。

今天的練習建議做兩個簡單的自我觀察測試：一是**前彎測試**，緩慢彎腰讓雙手朝腳的方向下滑，感受後表線沿路的緊繃感；二是**側彎測試**，身體緩慢向左右兩側彎，感受側線沿路的緊繃感。兩邊做完後比較左右是否對稱、哪個部位感覺特別緊，記錄下來即可，動作全程都要緩慢漸進、停在有牽拉感但不疼痛的範圍，不需要也不應該勉強壓到極限。`,
      figures: [
        {
          id: "d05-fig4",
          title: "側線概念路徑（側面示意）",
          alt: "身體側面示意圖，一條虛線由足外側沿著小腿與大腿外側、軀幹側面，一路連到耳朵周圍，標示側線的概念路徑。",
          svg: lateralLineSvg,
          caption: "概念路徑：足外側 → 小腿大腿外側 → 軀幹側面 → 耳朵周圍，與身體的側向穩定有關。",
        },
        {
          id: "d05-fig5",
          title: "自我觀察筋膜線：三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 前彎測試感受後表線緊繃感、步驟 2 側彎測試感受側線緊繃感、步驟 3 記錄緊繃點並留意左右差異。",
          svg: fasciaObserveStepsSvg,
          caption: "動作全程緩慢漸進，停在有牽拉感但不疼痛的範圍，不需要也不應該勉強壓到極限。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "筋膜是包覆連接全身肌肉、骨骼、器官的連續結締組織網，不是單一獨立的構造。",
    "淺筋膜疏鬆含脂肪、可推動，主要緩衝與儲能；深筋膜緻密緊包肌肉、有方向性，主要傳遞張力並連成「線」。",
    "後表線（解剖列車學說示意）概念路徑：腳底 → 小腿後 → 大腿後 → 下背 → 後腦，說明前彎時緊繃感常沿線傳導。",
    "側線概念路徑：足外側 → 小腿大腿外側 → 軀幹側面 → 耳朵周圍，與身體側向穩定有關。",
    "筋膜線是教學與衛教用的理解模型，能解釋「牽一髮動全身」的現象，但不是診斷或治療的依據。",
  ],
  quiz: [
    {
      id: "d05-q1",
      question: "筋膜（fascia）最適合的定義是？",
      options: [
        "包覆並連接全身肌肉、骨骼、器官的連續結締組織網",
        "只存在於皮膚表面的一層脂肪",
        "單一獨立的肌肉",
        "只存在於韌帶當中的構造",
      ],
      answerIndex: 0,
      explanation:
        "筋膜是一種結締組織，像一張連續不斷的網，包覆並連接全身的肌肉、骨骼、器官與神經血管，從頭到腳幾乎無所不在，不是某一條獨立的肌肉或韌帶，也不只存在於皮膚表面。",
    },
    {
      id: "d05-q2",
      question: "淺筋膜與深筋膜最主要的差異在於？",
      options: [
        "淺筋膜疏鬆含脂肪可推動，深筋膜緻密緊包肌肉、方向性強",
        "淺筋膜比較硬，深筋膜比較軟",
        "兩者位置完全相同",
        "只是同一種組織的不同名稱",
      ],
      answerIndex: 0,
      explanation:
        "淺筋膜位於皮膚正下方，質地疏鬆含脂肪、可以推移，角色偏向緩衝與儲能；深筋膜緊密包覆肌肉，質地緻密、纖維方向性強，角色是傳遞張力並連結成線，兩者位置與功能都不同。",
    },
    {
      id: "d05-q3",
      question: "深筋膜在功能上主要負責？",
      options: [
        "傳遞張力，連結成一條一條的「線」",
        "單獨消化食物",
        "單獨負責呼吸",
        "取代骨骼支撐體重",
      ],
      answerIndex: 0,
      explanation:
        "深筋膜緊密包覆肌肉，把相鄰肌肉的筋膜前後連接起來，串成有方向性的路徑，讓一個部位收縮產生的力量能沿線傳遞到其他部位，這是它最重要的功能，與消化、呼吸或支撐體重無關。",
    },
    {
      id: "d05-q4",
      question: "「解剖列車（Anatomy Trains）」提出的筋膜線概念，最好的理解方式是？",
      options: [
        "已被證實的唯一解剖結構，可取代肌肉學",
        "一種幫助理解全身筋膜連動的教學模型，提供衛教參考",
        "與現代解剖學完全無關的古老傳說",
        "只適用於運動員，一般人不適用",
      ],
      answerIndex: 1,
      explanation:
        "解剖列車是把功能相關的肌肉筋膜串成路徑的教學模型，幫助理解全身動作為何常常「牽一髮動全身」，是衛教與訓練上常用的參考架構。它不是唯一或已完全定論的解剖分類方式，不應被當作診斷或治療的唯一依據。",
    },
    {
      id: "d05-q5",
      question: "後表線的概念路徑，由下到上大致經過哪些構造？",
      options: [
        "腳底、小腿後側、大腿後側（膕繩肌）、下背、後腦",
        "手掌、前臂、上臂、肩膀、下巴",
        "腳背、小腿前側、大腿前側、腹部、下巴",
        "耳朵、頸部、肩膀、手肘、手腕",
      ],
      answerIndex: 0,
      explanation:
        "後表線的概念路徑由下往上依序是腳底、小腿後側、大腿後側（膕繩肌）、下背豎脊肌、後腦，串起身體背面從腳到頭的一連串構造，前彎摸腳趾時的緊繃感常沿著這條路徑傳導。",
    },
    {
      id: "d05-q6",
      question: "側線的概念路徑，由下到上大致經過哪些構造？",
      options: [
        "足外側、小腿與大腿外側、軀幹側面、耳朵周圍",
        "腳底、大腿後側、下背、後腦",
        "胸口、腹部、鼠蹊部、大腿內側",
        "手掌、前臂內側、上臂內側、腋下",
      ],
      answerIndex: 0,
      explanation:
        "側線的概念路徑由下往上依序是足外側、小腿與大腿外側、軀幹側面（肋間）、耳朵周圍，與身體的側向穩定有關，例如單腳站立或走路時避免身體左右晃動過大。",
    },
    {
      id: "d05-q7",
      question:
        "情境題：小陳做前彎摸腳趾時，感覺膝蓋後方一路到下背都有緊繃感，而不是只有大腿後側，這個現象最可能反映了什麼概念？",
      options: [
        "筋膜線把相關肌肉筋膜串連成一條路徑，緊繃感容易沿線傳導，不只侷限單一肌肉",
        "表示他一定有椎間盤突出，需要立刻手術",
        "這只是心理作用，身體構造完全不相干",
        "代表他的骨頭排列異常",
      ],
      answerIndex: 0,
      explanation:
        "依後表線概念，小腿、大腿後側、下背、後腦沿路的筋膜與肌肉是相連的整體，所以伸展或緊繃感容易沿線傳導，這是很多人前彎時感覺「不只大腿緊」的常見原因。但這屬於一般性延展感受，若合併麻、刺痛或無力等神經症狀，仍應諮詢醫師或物理治療師評估，不可自行判斷為特定診斷。",
    },
  ],
};

export default lesson;
