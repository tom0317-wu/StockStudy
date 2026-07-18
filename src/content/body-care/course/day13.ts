import type { DayLesson } from "@/lib/content/types";

// 小腿後側肌群：真實 PD 解剖圖（Wikimedia，Henry Vandyke Carter，Gray's Anatomy 1918，Public Domain）
// ＋中文引線標註腓腸肌、比目魚肌、阿基里斯腱，取代原本的抽象示意圖。
const calfSvg = `<svg viewBox="0 0 420 500" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="500" fill="#ffffff"/>
  <image href="/body-care/figures/calf-gastrocnemius.png" x="140" y="20" width="140" height="450" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="210" cy="110" r="4"/>
    <line x1="290" y1="110" x2="216" y2="110" stroke="#0d9488" stroke-width="1.5"/>
    <text x="294" y="114" text-anchor="start">腓腸肌</text>
    <circle cx="210" cy="268" r="4"/>
    <line x1="290" y1="268" x2="216" y2="268" stroke="#0d9488" stroke-width="1.5"/>
    <text x="294" y="272" text-anchor="start">比目魚肌</text>
    <circle cx="210" cy="425" r="4"/>
    <line x1="290" y1="425" x2="216" y2="425" stroke="#0d9488" stroke-width="1.5"/>
    <text x="294" y="429" text-anchor="start">阿基里斯腱</text>
  </g>
</svg>`;

// 大腿前側與外側：以真實 PD 下肢骨骼圖（Wikimedia，Jecowa，Public Domain）為參考框架，
// ＋中文引線標出股四頭肌（前側）與髂脛束（外側）的大致所在區域，取代原本的抽象色塊示意圖。
const thighSvg = `<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="500" height="380" fill="#ffffff"/>
  <image href="/body-care/figures/leg-bones.svg" x="140" y="20" width="220" height="333" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="239" cy="113" r="4"/>
    <line x1="126" y1="113" x2="237" y2="113" stroke="#0d9488" stroke-width="1.5"/>
    <text x="122" y="117" text-anchor="end">股四頭肌</text>
    <circle cx="327" cy="120" r="4"/>
    <line x1="380" y1="120" x2="333" y2="120" stroke="#0d9488" stroke-width="1.5"/>
    <text x="384" y="124" text-anchor="start">髂脛束</text>
  </g>
</svg>`;

// 足底放鬆與足弓：真實 PD 足底解剖圖（Wikimedia，Henry Vandyke Carter，Gray's Anatomy 1918，Public Domain）
// ＋中文引線標註足弓與足底筋膜，取代原本的抽象示意圖。
const footArchSvg = `<svg viewBox="0 0 420 330" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="330" fill="#ffffff"/>
  <image href="/body-care/figures/foot-plantar-nerves.png" x="140" y="20" width="140" height="273" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="185" cy="116" r="4"/>
    <line x1="130" y1="116" x2="183" y2="116" stroke="#0d9488" stroke-width="1.5"/>
    <text x="126" y="120" text-anchor="end">足弓</text>
    <circle cx="212" cy="184" r="4"/>
    <line x1="290" y1="184" x2="216" y2="184" stroke="#0d9488" stroke-width="1.5"/>
    <text x="294" y="188" text-anchor="start">足底筋膜</text>
  </g>
</svg>`;

// 操作步驟圖：大腿、小腿、足底的操作順序。
const stepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">大腿</text>
    <text x="70" y="108" font-size="12" fill="#64748b">股四頭肌/外側</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">小腿</text>
    <text x="210" y="108" font-size="12" fill="#64748b">避開阿基里斯腱</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">足底</text>
    <text x="350" y="108" font-size="12" fill="#64748b">力道最輕</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 13,
  phase: "W2",
  title: "下肢與足底的筋膜放鬆實作",
  minutes: 17,
  goal: "把自我筋膜放鬆的流程延伸到下肢，認識小腿、大腿與足底的放鬆重點與注意事項，學會由近端到遠端依序操作的順序。",
  sections: [
    {
      heading: "小腿放鬆：腓腸肌與比目魚肌",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前兩天練習了上肢與肩頸的筋膜放鬆，今天把範圍延伸到**下肢與足底**，這裡也是久站久走後最容易痠脹緊繃的區域。

小腿後側主要由兩塊肌肉組成：表層的**腓腸肌**（形成小腿肚明顯的弧度，往下接阿基里斯腱）與深層的**比目魚肌**（範圍較長，從膝蓋下方一路延伸到腳踝附近）。這兩塊肌肉合稱「小腿三頭肌」，負責踮腳尖、推進走路與跑步時的動作，久站久走、常穿高跟鞋，都容易讓小腿肌肉長期處於緊繃狀態。

操作方式：坐在地上，把滾筒放在小腿肚下方，雙手撐地把身體重量壓在滾筒上，前後緩慢滾動，範圍從膝蓋下方到腳踝上方（阿基里斯腱處組織薄，力道要放輕，避免直接重壓腱體）。`,
      figures: [
        {
          id: "d13-fig1",
          title: "小腿後側肌群位置",
          alt: "一個小腿側面示意圖，深色外框標示小腿輪廓，teal 區塊標示表層的腓腸肌，內層淺綠色標示比目魚肌，下方標出阿基里斯腱位置。",
          svg: calfSvg,
          caption: "腓腸肌在表層形成小腿肚弧度，比目魚肌在深層，兩者合稱小腿三頭肌，阿基里斯腱處力道要放輕。",
          credit: "Henry Vandyke Carter（Gray's Anatomy, 20th ed., 1918）, Public Domain, via Wikimedia Commons（Gray438.png）",
        },
      ],
    },
    {
      heading: "大腿放鬆：股四頭肌與大腿外側",
      body: `大腿前側的**股四頭肌**（大腿正面四塊肌肉的合稱）負責伸直膝蓋，是走路、上下樓梯、蹲站最主要出力的肌群之一，運動量大或久坐的人都容易在此累積緊繃感。操作時把滾筒放在大腿前側中段，同樣是雙手或手肘撐地，讓身體重量壓在滾筒上前後滾動，範圍避開最上方接近髖關節與最下方接近膝蓋的區域，力道集中在肌肉肚最飽滿的中段。

大腿**外側**則是俗稱「外側腿帶」的髂脛束（iliotibial band, IT band）經過的地方，這條筋膜束從髖部外側一路延伸到膝蓋外側，緊繃時常和跑步膝、膝蓋外側痠痛有關。這個區域組織較硬、痛感通常比其他部位明顯，滾壓時建議把身體重量放低、放慢速度，力道從輕開始，不要一開始就用全身重量壓上去，避免不必要的不適。`,
      figures: [
        {
          id: "d13-fig2",
          title: "大腿前側與外側位置對照",
          alt: "一個大腿正面示意圖，左側 teal 區塊標示股四頭肌，右側玫瑰色區塊標示髂脛束，中央方框代表膝蓋位置。",
          svg: thighSvg,
          caption: "股四頭肌位於大腿前側，髂脛束在外側、組織較硬，操作時都要避開最靠近膝蓋與髖關節的區域。",
          credit: "Jecowa（基於 LadyofHats 原作）, Public Domain, via Wikimedia Commons（Human leg bones labeled.svg）",
        },
      ],
    },
    {
      heading: "足底與足弓放鬆",
      body: `足底是站立與走路時第一個承接地面反作用力的地方，足底筋膜（一片從腳跟連到腳趾根部的扇形結締組織）長期承重容易變得緊繃，也和足弓的支撐能力有關。放鬆足底最簡單的方式是用一顆網球或按摩球，赤腳踩在球上，利用體重緩慢施壓、前後滾動，範圍從腳跟到腳掌前段，特別是足弓（腳掌內側、離地的弧形區域）附近。

操作時建議先坐著或扶著牆壁單腳站立操作，力道從輕開始，感受足底痠脹感控制在 0–10 量表 **5–6 分微痠**，若本身有足底筋膜炎病史、腳跟明顯壓痛或不明原因足部腫痛，應先諮詢醫師或物理治療師，確認是否適合自行滾壓，避免在急性發炎期加重不適。`,
      figures: [
        {
          id: "d13-fig3",
          title: "足底放鬆與足弓位置",
          alt: "一個足底側面示意圖，teal 弧形區塊標示足弓位置，一顆玫瑰色圓形標示網球或按摩球放置在足底前段的位置。",
          svg: footArchSvg,
          caption: "赤腳踩球緩慢滾動足底，特別留意足弓區域，力道從輕開始。",
          credit: "Henry Vandyke Carter（Gray's Anatomy, 20th ed., 1918）, Public Domain, via Wikimedia Commons（Gray833.png）",
        },
      ],
    },
    {
      heading: "下肢放鬆順序與操作步驟",
      body: `下肢範圍較大，建議照以下順序操作，由近端到遠端依序放鬆：

1. **大腿（股四頭肌／外側）**：先處理面積最大的肌群，每側約 30～60 秒。
2. **小腿（腓腸肌／比目魚肌）**：接著處理小腿肚，避開阿基里斯腱直接重壓。
3. **足底（足弓）**：最後用網球或按摩球處理足底，力道最輕。

每個部位操作時，力道都採 0–10 疼痛量表約 **5–6 分微痠**，避開膝蓋、腳踝關節正上方與骨頭突起處（延續第 11 天學到的安全原則）。操作後可以搭配簡單的下肢伸展與補充水分，若有明顯靜脈曲張、下肢腫脹或傷口，操作前請先諮詢醫療專業人員（第 14 天會針對長者下肢水腫做更詳細的說明）。`,
      figures: [
        {
          id: "d13-fig4",
          title: "下肢放鬆操作順序三步驟",
          alt: "三個編號步驟由虛線串接：步驟1大腿股四頭肌與外側、步驟2小腿避開阿基里斯腱、步驟3足底力道最輕。",
          svg: stepsSvg,
          caption: "建議由近端到遠端依序操作：大腿、小腿、足底，力道統一控制在5到6分微痠。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "小腿三頭肌由腓腸肌（表層）與比目魚肌（深層）組成，滾壓時阿基里斯腱處力道要放輕。",
    "大腿前側股四頭肌與外側髂脛束都可滾壓放鬆，髂脛束較硬，建議放慢速度、力道從輕開始。",
    "足底放鬆用網球或按摩球赤腳踩踏，特別留意足弓區域，力道採 5–6 分微痠。",
    "下肢建議操作順序為大腿→小腿→足底，並持續避開關節正上方與骨頭突起處。",
    "有足底筋膜炎病史、明顯靜脈曲張或下肢腫脹者，操作前應先諮詢醫療專業人員。",
  ],
  quiz: [
    {
      id: "d13-q1",
      question: "小腿三頭肌是由哪兩塊肌肉合稱？",
      options: ["股四頭肌與腓腸肌", "腓腸肌與比目魚肌", "股二頭肌與比目魚肌", "胸大肌與背闊肌"],
      answerIndex: 1,
      explanation:
        "小腿後側主要由表層的腓腸肌（形成小腿肚明顯弧度）與深層的比目魚肌（範圍較長，延伸到腳踝附近）組成，兩者合稱小腿三頭肌，負責踮腳尖與推進走路跑步的動作。",
    },
    {
      id: "d13-q2",
      question: "滾壓小腿時，哪個部位要特別放輕力道？",
      options: ["膝蓋下方肌肉中段", "阿基里斯腱（跟腱）", "小腿肚最飽滿處", "以上皆需要一樣的力道"],
      answerIndex: 1,
      explanation:
        "阿基里斯腱是連接小腿肌肉到腳跟的肌腱，組織結構與肌肉不同、承受壓力的方式也不同，直接重壓容易造成不適，操作時應把力道放輕，避免直接重壓腱體本身，把力道集中在肌肉肚（肌腹）上。",
    },
    {
      id: "d13-q3",
      question: "大腿外側的髂脛束（IT band）緊繃常和什麼不適有關？",
      options: ["消化不良", "跑步膝、膝蓋外側痠痛", "頭痛", "手腕痠痛"],
      answerIndex: 1,
      explanation:
        "髂脛束是一條從髖部外側延伸到膝蓋外側的筋膜束，緊繃時常和跑步膝、膝蓋外側痠痛有關；這個區域組織較硬，滾壓時痛感通常比其他部位明顯，建議把身體重量放低、放慢速度，力道從輕開始。",
    },
    {
      id: "d13-q4",
      question: "放鬆足底時，建議使用什麼工具與力道原則？",
      options: [
        "用網球或按摩球赤腳踩踏，力道從輕開始，控制在5-6分微痠",
        "用滾筒重壓，力道越大越好",
        "完全不需要工具，用手用力捏",
        "只能坐著操作，站立絕對不行",
      ],
      answerIndex: 0,
      explanation:
        "放鬆足底最簡單的方式是用一顆網球或按摩球，赤腳踩在球上緩慢施壓滾動，力道從輕開始，感受足底痠脹感控制在 0–10 量表約 5–6 分微痠，可以坐著或扶牆單腳站立操作，不是只能坐著。",
    },
    {
      id: "d13-q5",
      question: "若本身有足底筋膜炎病史或腳跟明顯壓痛，操作足底放鬆前應該怎麼做？",
      options: [
        "不需要特別注意，直接用力踩踏即可",
        "先諮詢醫師或物理治療師，確認是否適合自行滾壓",
        "改用更硬的工具加強力道",
        "只在半夜操作即可",
      ],
      answerIndex: 1,
      explanation:
        "有足底筋膜炎病史、腳跟明顯壓痛或不明原因足部腫痛，這些屬於可能需要專業評估的情形，應先諮詢醫師或物理治療師確認是否適合自行滾壓，避免在急性發炎期加重不適，不應直接自行加強力道操作。",
    },
    {
      id: "d13-q6",
      question: "課程建議的下肢放鬆操作順序是？",
      options: [
        "先足底，再小腿，最後大腿",
        "先大腿，再小腿，最後足底",
        "三個部位順序不重要，隨意即可",
        "只需要操作足底，其他部位不用",
      ],
      answerIndex: 1,
      explanation:
        "課程建議由近端到遠端依序操作：先處理面積最大的大腿（股四頭肌／外側），接著處理小腿（腓腸肌／比目魚肌），最後用網球或按摩球處理足底，力道最輕，這樣的順序有助於循序漸進地放鬆整條下肢。",
    },
    {
      id: "d13-q7",
      question: "若下肢有明顯靜脈曲張或腫脹，進行滾筒放鬆前應該怎麼做？",
      options: [
        "直接在腫脹處用力滾壓，效果更好",
        "先諮詢醫療專業人員，不要自行判斷是否適合操作",
        "完全忽略，正常操作即可",
        "改成用更粗糙的工具加強按壓",
      ],
      answerIndex: 1,
      explanation:
        "明顯靜脈曲張或下肢腫脹可能牽涉循環系統的狀況，是否適合進行滾筒放鬆需要專業判斷，應先諮詢醫療專業人員，不應自行在腫脹或靜脈曲張處用力滾壓，這也是第14天會更詳細說明長者下肢水腫照護的原因。",
    },
  ],
};

export default lesson;
