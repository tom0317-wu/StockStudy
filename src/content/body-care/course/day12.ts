import type { DayLesson } from "@/lib/content/types";

// 上斜方肌位置：真實 PD 全身淺層肌肉背面圖（Wikimedia，Mikael Häggström，Public Domain）
// ＋中文引線標註上斜方肌與肩胛骨，取代原本的抽象線條示意圖。
const trapSvg = `<svg viewBox="0 0 620 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="620" height="400" fill="#ffffff"/>
  <image href="/body-care/figures/muscles-posterior.png" x="165" y="20" width="290" height="354" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#0d9488">
    <circle cx="300" cy="52" r="4"/>
    <line x1="145" y1="52" x2="295" y2="52" stroke="#0d9488" stroke-width="1.5"/>
    <text x="141" y="56" text-anchor="end">上斜方肌</text>
    <circle cx="339" cy="85" r="4"/>
    <line x1="475" y1="91" x2="345" y2="85" stroke="#0d9488" stroke-width="1.5"/>
    <text x="479" y="95" text-anchor="start">肩胛骨</text>
  </g>
</svg>`;

// 胸小肌位置示意圖（正面）。
const pecMinorSvg = `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="300" height="260" fill="#ffffff"/>
  <text x="150" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">胸小肌位置（正面示意）</text>
  <line x1="90" y1="50" x2="150" y2="40" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  <line x1="150" y1="40" x2="210" y2="50" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  <g fill="none" stroke="#94a3b8" stroke-width="2">
    <path d="M100 70 Q80 110 90 160"/>
    <path d="M200 70 Q220 110 210 160"/>
    <path d="M110 90 Q95 120 100 160"/>
    <path d="M190 90 Q205 120 200 160"/>
  </g>
  <path d="M150 55 L120 75 Q108 100 118 130 L150 118 Z" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/>
  <circle cx="122" cy="80" r="6" fill="#e11d48"/>
  <text x="56" y="200" font-size="11" fill="#475569">teal 區塊：胸小肌</text>
  <text x="56" y="214" font-size="11" fill="#475569">（胸大肌深層）</text>
  <text x="150" y="248" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：非解剖精確比例，操作時避開乳房組織</text>
</svg>`;

// 靠牆操作姿勢示意圖：改為較擬真的填色人形側面輪廓（取代原本的線條骨架），
// 並加寬 viewBox、把標題改為置中，修好原本會被右邊界裁掉的長句文字。
const wallBallSvg = `<svg viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="280" fill="#ffffff"/>
  <text x="170" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">背靠牆，球放在肩頸與牆之間</text>
  <rect x="290" y="34" width="14" height="216" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
  <text x="297" y="32" text-anchor="middle" font-size="10" fill="#94a3b8">牆</text>
  <g fill="#e5e7eb" stroke="#9ca3af" stroke-width="2">
    <ellipse cx="150" cy="55" rx="18" ry="21"/>
    <path d="M111 51 L102 56 L111 61 Z"/>
    <rect x="145" y="74" width="10" height="10"/>
    <path d="M130 84 C118 108 118 136 128 160 C122 180 120 198 128 214 L165 214 C170 198 166 180 160 160 C168 136 166 108 155 84 Z"/>
    <path d="M128 214 C124 232 126 248 130 258 L148 258 C150 248 148 232 144 214 Z"/>
  </g>
  <line x1="132" y1="98" x2="126" y2="156" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
  <circle cx="222" cy="100" r="15" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/>
  <line x1="167" y1="100" x2="205" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="239" y1="100" x2="288" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="170" y="272" text-anchor="middle" font-size="11" fill="#64748b">身體微調距離控制壓力</text>
</svg>`;

// 操作步驟圖：選好姿勢、找到痠脹點、停留深呼吸、緩慢移動收操。
// viewBox 加寬至 480，避免第 3、4 步的長標籤文字被右邊界裁掉（原 420 寬版本會截字）。
const stepsSvg = `<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="160" fill="#ffffff"/>
  <line x1="60" y1="48" x2="420" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="48" r="22" fill="#0d9488"/>
    <text x="60" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="60" y="92" font-size="12" fill="#0f172a">選好姿勢</text>
    <text x="60" y="108" font-size="12" fill="#64748b">先靠牆操作</text>
    <circle cx="180" cy="48" r="22" fill="#0d9488"/>
    <text x="180" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="180" y="92" font-size="12" fill="#0f172a">找到痠脹點</text>
    <text x="180" y="108" font-size="12" fill="#64748b">小範圍慢慢找</text>
    <circle cx="300" cy="48" r="22" fill="#0d9488"/>
    <text x="300" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="300" y="92" font-size="12" fill="#0f172a">停留深呼吸</text>
    <text x="300" y="108" font-size="12" fill="#64748b">力道5-6分微痠</text>
    <circle cx="420" cy="48" r="22" fill="#0d9488"/>
    <text x="420" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="420" y="92" font-size="12" fill="#0f172a">緩慢移動收操</text>
    <text x="420" y="108" font-size="12" fill="#64748b">每處30-60秒</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 12,
  phase: "W2",
  title: "上肢與肩頸的筋膜放鬆實作",
  minutes: 17,
  goal: "把第 11 天學到的滾筒放鬆原理與安全原則，實際套用到上斜方肌與胸小肌兩塊肩頸常見緊繃肌肉，學會用按摩球做靠牆或躺姿操作。",
  sections: [
    {
      heading: "上斜方肌：肩頸痠痛的頭號嫌疑犯",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

昨天學會了滾筒放鬆的基本原理與安全守則，今天開始把這套流程實際套用到最容易緊繃的**上肢與肩頸**。第一個目標是**上斜方肌**——一塊從後腦勺底部、頸椎兩側，一路延伸到肩膀外側、鎖骨外緣的大片肌肉，負責聳肩、轉頭、穩定肩胛骨等動作。

長時間低頭看手機、聳肩打字、背包單肩背，都容易讓上斜方肌長期處於收縮狀態，久了就會摸到緊繃的條索感，甚至延伸出頭痛或肩頸僵硬的不適感。這也是為什麼上斜方肌常被稱為肩頸痠痛的「頭號嫌疑犯」。

放鬆時建議使用**按摩球**而非滾筒——因為上斜方肌範圍集中且靠近頸部，滾筒的長圓柱形不容易精準定位，按摩球體積小、可以靠著牆壁或坐姿操作，更好控制力道與位置。`,
      figures: [
        {
          id: "d12-fig1",
          title: "上斜方肌位置（背面，真實解剖圖）",
          alt: "一張真實的人體背面肌肉解剖圖，以青色引線標出上斜方肌與肩胛骨的位置。",
          svg: trapSvg,
          caption: "真實肌肉解剖圖上以青色引線標出上斜方肌與肩胛骨位置，方便對照肩頸緊繃常見出現的部位。",
          credit: "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscle posterior labeled.png）",
        },
      ],
    },
    {
      heading: "胸小肌：常被忽略的圓肩推手",
      body: `第二個目標是**胸小肌**，位於胸大肌深層，從第 3～5 根肋骨附近，斜向上連到肩胛骨前側的一個骨性突起（喙突）。它的功能是把肩胛骨往前、往下拉，長時間打電腦、開車、含胸駝背的姿勢，容易讓胸小肌處於縮短緊繃的狀態，把肩胛骨往前牽拉，是造成「圓肩」體態的重要推手之一（第 15 天會更完整介紹圓肩）。

放鬆胸小肌時，可以用按摩球輕輕靠在鎖骨下方、胸廓外側偏上的區域，力道要比放鬆大肌肉群更輕柔，因為此處組織較薄，靠近肩關節與神經血管經過的區域。**女性使用者操作此區域時，應避開乳房組織，只針對鎖骨下方偏外側的胸壁肌肉施力**，若不確定位置或有任何不適，應暫停並諮詢物理治療師等專業人員指導。`,
      figures: [
        {
          id: "d12-fig2",
          title: "胸小肌位置（正面示意）",
          alt: "一個胸廓正面示意圖，鎖骨下方 teal 三角形區塊標示胸小肌位於胸大肌深層、連到肩胛骨前側喙突的位置，紅點標示常見操作參考點。",
          svg: pecMinorSvg,
          caption: "胸小肌位於胸大肌深層，操作時力道要更輕柔，女性應避開乳房組織。",
        },
      ],
    },
    {
      heading: "工具操作方式：靠牆與躺姿兩種選擇",
      body: `上肢與肩頸的筋膜放鬆，最常見的操作姿勢有兩種：

- **靠牆操作**：背靠牆壁，把按摩球放在想放鬆的部位（例如上斜方肌）與牆面之間，透過調整身體與牆壁的距離控制壓力大小，這個姿勢方便控制力道，適合初學者，也適合工作空檔簡單操作。
- **躺姿操作**：平躺在地上或瑜珈墊上，把按摩球放在肩胛骨周圍或胸廓上方，利用身體重量下壓，這個姿勢壓力較大且較難微調，建議熟悉靠牆操作後再嘗試。

不論哪種姿勢，操作胸小肌等靠近肩關節前側的區域時，動作都要放慢、力道要比放鬆大腿等大肌群更輕，並隨時注意身體給的回饋訊號，若出現手麻、刺痛感往手臂放射，代表可能壓迫到神經或血管，應立即停止並改變位置。`,
      figures: [
        {
          id: "d12-fig3",
          title: "靠牆操作姿勢示意",
          alt: "一個較擬真的人體側面站姿輪廓示意圖，背部靠向右側牆面，一顆 teal 圓球放置在肩頸部位與牆面之間，虛線說明可透過調整身體與牆壁距離來控制壓力大小。",
          svg: wallBallSvg,
          caption: "靠牆操作方便控制力道，適合初學者從肩頸部位開始練習。",
        },
      ],
    },
    {
      heading: "操作步驟與注意事項",
      body: `今天的操作流程，延續第 11 天學到的通用步驟，針對上肢與肩頸微調如下：

1. **選好姿勢**：肩頸部位建議先從「靠牆操作」開始，較容易控制力道。
2. **找到痠脹點**：在上斜方肌或胸小肌區域小範圍移動，找到明顯痠脹但可忍受的位置。
3. **停留深呼吸**：力道採 0–10 疼痛量表約 **5–6 分微痠**，停留 20～30 秒，感受痠脹感緩慢下降。
4. **緩慢移動收操**：每個部位操作約 30～60 秒，結束後可搭配肩頸的輕度伸展。

**注意事項**：頸部前側（喉嚨、頸動脈區域）**絕對不可**放置滾筒或按摩球施壓；操作中若出現手麻、頭暈、視力模糊等異常反應，應立即停止並諮詢醫療專業人員。明天我們會把同樣的流程延伸到下肢與足底。`,
      figures: [
        {
          id: "d12-fig4",
          title: "上肢與肩頸放鬆操作四步驟",
          alt: "四個編號步驟由虛線串接：步驟1選好姿勢先靠牆操作、步驟2小範圍找到痠脹點、步驟3停留深呼吸力道5到6分、步驟4緩慢移動收操每處30到60秒。",
          svg: stepsSvg,
          caption: "上肢與肩頸放鬆延續第11天的通用流程，重點是頸部前側絕對禁止施壓。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "上斜方肌與胸小肌是肩頸緊繃與圓肩體態常見的關鍵肌肉，分別對應「聳肩過度」與「肩胛前拉」。",
    "上斜方肌建議用按摩球定點放鬆；胸小肌需力道更輕，女性應避開乳房組織。",
    "靠牆操作適合初學者，容易控制力道；躺姿操作壓力較大，建議熟悉後再嘗試。",
    "頸部前側（喉嚨、頸動脈區域）絕對禁止放置工具施壓。",
    "操作力道仍採 0–10 量表 5–6 分微痠，出現手麻、頭暈等異常反應應立即停止並就醫。",
  ],
  quiz: [
    {
      id: "d12-q1",
      question: "上斜方肌的主要功能與常見緊繃原因是？",
      options: [
        "負責聳肩、轉頭與穩定肩胛骨，長時間低頭滑手機容易使其緊繃",
        "負責彎曲膝蓋，久坐容易緊繃",
        "位於腹部，負責消化功能",
        "只在睡覺時作用，清醒時不會緊繃",
      ],
      answerIndex: 0,
      explanation:
        "上斜方肌從後腦勺底部延伸到肩膀外側，負責聳肩、轉頭、穩定肩胛骨等動作，長時間低頭看手機、聳肩打字、單肩背包都容易讓它長期處於收縮緊繃狀態，是肩頸痠痛常見的來源之一。",
    },
    {
      id: "d12-q2",
      question: "放鬆上斜方肌時，為什麼建議使用按摩球而非滾筒？",
      options: [
        "按摩球比較便宜",
        "上斜方肌範圍集中且靠近頸部，按摩球體積小更好定位控制力道",
        "滾筒無法用於任何部位",
        "按摩球比較重，效果比較好",
      ],
      answerIndex: 1,
      explanation:
        "上斜方肌範圍集中且靠近頸部，滾筒的長圓柱形不容易精準定位，按摩球體積小、可以靠牆或坐姿操作，更容易控制施力位置與力道，因此建議肩頸這類集中小範圍區域優先使用按摩球。",
    },
    {
      id: "d12-q3",
      question: "胸小肌與哪一種常見體態問題較有關聯？",
      options: ["扁平足", "圓肩（肩胛骨被往前往下牽拉）", "O 型腿", "脊椎側彎"],
      answerIndex: 1,
      explanation:
        "胸小肌從肋骨斜向連到肩胛骨前側的喙突，功能是把肩胛骨往前、往下拉，長時間縮短緊繃會把肩胛骨往前牽拉，是造成圓肩體態的重要推手之一，第 15 天會更完整介紹圓肩相關體態。",
    },
    {
      id: "d12-q4",
      question: "操作胸小肌區域時，課程特別提醒的注意事項是？",
      options: [
        "力道要比大肌群更大才有效",
        "女性使用者應避開乳房組織，只針對鎖骨下方偏外側肌肉施力，力道要更輕柔",
        "可以隨意用最大力道按壓",
        "不需要注意任何位置，全胸部都可以用力壓",
      ],
      answerIndex: 1,
      explanation:
        "胸小肌區域組織較薄，靠近肩關節與神經血管經過處，力道要比放鬆大肌肉群更輕柔；女性使用者操作此區域時應避開乳房組織，只針對鎖骨下方偏外側的胸壁肌肉施力，若不確定位置應諮詢專業人員。",
    },
    {
      id: "d12-q5",
      question: "「靠牆操作」與「躺姿操作」相比，哪一項敘述正確？",
      options: [
        "躺姿操作壓力較大且較難微調，建議熟悉靠牆操作後再嘗試",
        "靠牆操作完全無法控制力道",
        "兩種姿勢完全沒有差別",
        "躺姿操作比較適合初學者",
      ],
      answerIndex: 0,
      explanation:
        "靠牆操作可以透過調整身體與牆壁的距離來控制壓力大小，方便初學者上手；躺姿操作是利用身體重量下壓，壓力較大且較難微調，建議先熟悉靠牆操作、掌握力道感受後，再嘗試躺姿操作。",
    },
    {
      id: "d12-q6",
      question: "操作肩頸部位時，哪個部位絕對不可以放置滾筒或按摩球施壓？",
      options: ["上斜方肌肌腹", "頸部前側（喉嚨、頸動脈區域）", "鎖骨下方偏外側", "肩胛骨周圍"],
      answerIndex: 1,
      explanation:
        "頸部前側是喉嚨與頸動脈經過的區域，絕對不可以放置滾筒或按摩球施壓，這裡的血管神經構造重要且表淺，操作時應完全避開，只在上斜方肌、胸小肌等課程指定的安全區域操作。",
    },
    {
      id: "d12-q7",
      question: "操作過程中若出現手麻、頭暈或視力模糊等異常反應，應該怎麼做？",
      options: [
        "繼續操作直到症狀消失",
        "立即停止並諮詢醫療專業人員",
        "換另一側繼續操作原本的力道",
        "加大力道以確認症狀是否會加劇",
      ],
      answerIndex: 1,
      explanation:
        "手麻、頭暈、視力模糊等屬於異常反應，可能代表壓迫到神經、血管或姿勢不當，應立即停止操作並諮詢醫療專業人員評估，不應該繼續操作或用加大力道的方式自行測試，以免造成更嚴重的後果。",
    },
  ],
};

export default lesson;
