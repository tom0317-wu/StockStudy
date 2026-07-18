import type { DayLesson } from "@/lib/content/types";

// 大腿橫切面分層示意圖：由外到內 皮膚→皮下脂肪→深筋膜→肌肉→骨頭，凸顯深筋膜是工具作用的一層。
const fasciaSvg = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="320" fill="#ffffff"/>
  <text x="240" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">大腿橫切面：由外到內的分層</text>
  <!-- 分層（外到內） -->
  <circle cx="218" cy="164" r="118" fill="#f4d6c2" stroke="#cf9e83" stroke-width="2"/>
  <circle cx="218" cy="164" r="104" fill="#fdf3cb"/>
  <circle cx="218" cy="164" r="90" fill="#dd8a7c"/>
  <circle cx="218" cy="164" r="90" fill="none" stroke="#0d9488" stroke-width="6"/>
  <g stroke="#0d9488" stroke-width="2" stroke-opacity="0.65">
    <line x1="218" y1="164" x2="218" y2="80"/>
    <line x1="218" y1="164" x2="290" y2="122"/>
    <line x1="218" y1="164" x2="290" y2="206"/>
    <line x1="218" y1="164" x2="152" y2="212"/>
    <line x1="218" y1="164" x2="150" y2="118"/>
  </g>
  <circle cx="218" cy="164" r="24" fill="#f6f0dd" stroke="#cdbc92" stroke-width="2"/>
  <text x="218" y="169" text-anchor="middle" font-size="12" fill="#8a7a4a" font-weight="bold">骨</text>
  <!-- 引線標籤 -->
  <g font-size="13" font-weight="bold">
    <circle cx="132" cy="108" r="3.5" fill="#7c5c46"/>
    <line x1="98" y1="102" x2="130" y2="108" stroke="#7c5c46" stroke-width="1.5"/>
    <text x="94" y="106" text-anchor="end" fill="#7c5c46">皮膚</text>
    <circle cx="126" cy="152" r="3.5" fill="#b08a2e"/>
    <line x1="98" y1="152" x2="124" y2="152" stroke="#b08a2e" stroke-width="1.5"/>
    <text x="94" y="156" text-anchor="end" fill="#b08a2e">皮下脂肪</text>
    <circle cx="178" cy="214" r="3.5" fill="#b45340"/>
    <line x1="98" y1="220" x2="176" y2="214" stroke="#b45340" stroke-width="1.5"/>
    <text x="94" y="224" text-anchor="end" fill="#b45340">肌肉</text>
    <circle cx="307" cy="150" r="4" fill="#0d9488"/>
    <line x1="340" y1="150" x2="309" y2="150" stroke="#0d9488" stroke-width="1.5"/>
    <text x="346" y="147" text-anchor="start" fill="#0d9488">深筋膜</text>
    <text x="346" y="164" text-anchor="start" font-size="11" font-weight="normal" fill="#0f766e">滾筒/筋膜刀主要作用的一層</text>
    <circle cx="240" cy="164" r="3.5" fill="#8a7a4a"/>
    <line x1="340" y1="210" x2="242" y2="166" stroke="#8a7a4a" stroke-width="1.5"/>
    <text x="346" y="214" text-anchor="start" fill="#8a7a4a">骨頭</text>
  </g>
  <text x="240" y="308" text-anchor="middle" font-size="10" fill="#94a3b8">像把大腿橫著切一刀，由外到內看到的分層（示意，非精確比例）</text>
</svg>`;

// 三種常見工具（滾筒、按摩球、筋膜刀）擬真示意圖：用漸層做出立體感，取代原本的平面色塊。
const toolsSvg = `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs>
    <linearGradient id="d11-rollerGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ccfbf1"/>
      <stop offset="50%" stop-color="#5eead4"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>
    <radialGradient id="d11-ballGrad" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ccfbf1"/>
      <stop offset="70%" stop-color="#5eead4"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </radialGradient>
    <linearGradient id="d11-toolGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fecdd3"/>
      <stop offset="100%" stop-color="#e11d48"/>
    </linearGradient>
  </defs>
  <rect width="420" height="200" fill="#ffffff"/>
  <g>
    <rect x="35" y="70" width="100" height="46" rx="23" fill="url(#d11-rollerGrad)" stroke="#0f766e" stroke-width="2"/>
    <ellipse cx="35" cy="93" rx="11" ry="23" fill="#0d9488" stroke="#0f766e" stroke-width="2"/>
    <ellipse cx="135" cy="93" rx="11" ry="23" fill="#0d9488" stroke="#0f766e" stroke-width="2"/>
    <line x1="55" y1="76" x2="55" y2="110" stroke="#0f766e" stroke-width="1.5" opacity="0.5"/>
    <line x1="75" y1="73" x2="75" y2="113" stroke="#0f766e" stroke-width="1.5" opacity="0.5"/>
    <line x1="95" y1="73" x2="95" y2="113" stroke="#0f766e" stroke-width="1.5" opacity="0.5"/>
    <line x1="115" y1="76" x2="115" y2="110" stroke="#0f766e" stroke-width="1.5" opacity="0.5"/>
    <text x="85" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">滾筒</text>
    <text x="85" y="158" text-anchor="middle" font-size="11" fill="#64748b">大面積肌群</text>
  </g>
  <g>
    <circle cx="210" cy="93" r="30" fill="url(#d11-ballGrad)" stroke="#0f766e" stroke-width="2"/>
    <ellipse cx="199" cy="80" rx="8" ry="5" fill="#ffffff" opacity="0.55"/>
    <text x="210" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">按摩球</text>
    <text x="210" y="158" text-anchor="middle" font-size="11" fill="#64748b">小範圍定點</text>
  </g>
  <g>
    <path d="M320 68 Q365 62 386 84 Q390 92 384 98 Q362 104 338 100 Q318 96 312 84 Q312 74 320 68 Z"
          fill="url(#d11-toolGrad)" stroke="#9f1239" stroke-width="2"/>
    <path d="M328 78 Q350 74 368 84" fill="none" stroke="#fff1f2" stroke-width="2" opacity="0.6"/>
    <text x="349" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">筋膜刀</text>
    <text x="349" y="158" text-anchor="middle" font-size="11" fill="#64748b">需專業訓練</text>
  </g>
  <text x="210" y="188" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：三種常見自我筋膜放鬆工具外觀（非實際品牌樣式）</text>
</svg>`;

// 應避開部位（關節/骨突）與安全操作區（肌肉肚）對照示意圖：改為較擬真的填色人形輪廓（正面站姿），
// 取代原本抽象的線條骨架，teal 圓點標安全區、紅色叉號標應避開的關節與骨性地標。
const dangerZonesSvg = `<svg viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="360" height="480" fill="#ffffff"/>
  <g fill="#e5e7eb" stroke="#9ca3af" stroke-width="2">
    <ellipse cx="160" cy="40" rx="20" ry="24"/>
    <rect x="151" y="62" width="18" height="13"/>
    <path d="M124 75 Q160 64 196 75 L202 180 Q160 192 118 180 Z"/>
    <path d="M140 180 L132 287 L128 402 L152 402 L158 287 L162 180 Z"/>
    <path d="M162 180 L166 287 L172 402 L196 402 L192 287 L182 180 Z"/>
    <ellipse cx="140" cy="410" rx="15" ry="8"/>
    <ellipse cx="184" cy="410" rx="15" ry="8"/>
  </g>
  <line x1="124" y1="87" x2="84" y2="167" stroke="#cbd5e1" stroke-width="15" stroke-linecap="round"/>
  <line x1="196" y1="87" x2="236" y2="167" stroke="#cbd5e1" stroke-width="15" stroke-linecap="round"/>
  <circle cx="146" cy="232" r="12" fill="#5eead4" stroke="#0d9488" stroke-width="2"/>
  <circle cx="138" cy="342" r="11" fill="#5eead4" stroke="#0d9488" stroke-width="2"/>
  <line x1="144" y1="244" x2="139" y2="331" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 3"/>
  <g stroke="#e11d48" stroke-width="3">
    <line x1="148" y1="280" x2="160" y2="292"/>
    <line x1="160" y1="280" x2="148" y2="292"/>
    <line x1="190" y1="171" x2="202" y2="183"/>
    <line x1="202" y1="171" x2="190" y2="183"/>
  </g>
  <g font-size="15" font-weight="bold">
    <line x1="70" y1="288" x2="134" y2="288" stroke="#0d9488" stroke-width="1.5"/>
    <text x="66" y="292" text-anchor="end" fill="#0d9488">肌肉肚</text>
    <line x1="260" y1="286" x2="163" y2="286" stroke="#e11d48" stroke-width="1.5"/>
    <text x="264" y="290" text-anchor="start" fill="#e11d48">膝關節</text>
    <line x1="270" y1="176" x2="205" y2="178" stroke="#e11d48" stroke-width="1.5"/>
    <text x="274" y="180" text-anchor="start" fill="#e11d48">髖骨</text>
  </g>
  <text x="180" y="470" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：圓點為安全操作區，叉號為應避開部位</text>
</svg>`;

// 操作步驟圖：找肌肉肚、緩慢加壓滑動、停留深呼吸、緩慢收操。
// viewBox 加寬至 480，避免第 4 步的長標籤文字被右邊界裁掉（原 420 寬版本會截字）。
const stepsSvg = `<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="160" fill="#ffffff"/>
  <line x1="60" y1="48" x2="420" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="48" r="22" fill="#0d9488"/>
    <text x="60" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="60" y="92" font-size="12" fill="#0f172a">找肌肉肚</text>
    <text x="60" y="108" font-size="12" fill="#64748b">避開關節骨突</text>
    <circle cx="180" cy="48" r="22" fill="#0d9488"/>
    <text x="180" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="180" y="92" font-size="12" fill="#0f172a">緩慢加壓滑動</text>
    <text x="180" y="108" font-size="12" fill="#64748b">每秒約1-2公分</text>
    <circle cx="300" cy="48" r="22" fill="#0d9488"/>
    <text x="300" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="300" y="92" font-size="12" fill="#0f172a">停留深呼吸</text>
    <text x="300" y="108" font-size="12" fill="#64748b">力道5-6分微痠</text>
    <circle cx="420" cy="48" r="22" fill="#0d9488"/>
    <text x="420" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="420" y="92" font-size="12" fill="#0f172a">緩慢收操</text>
    <text x="420" y="108" font-size="12" fill="#64748b">每處30-60秒</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 11,
  phase: "W2",
  title: "筋膜刀／滾筒基本使用：工具介紹與安全原則",
  minutes: 17,
  goal: "認識滾筒、按摩球、筋膜刀三種常見自我筋膜放鬆工具的差異與原理，掌握「滾肌肉、不滾關節與骨頭」的安全操作原則，為接下來兩天的上肢與下肢實作做準備。",
  sections: [
    {
      heading: "認識筋膜與滾筒放鬆的原理",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

從今天起連續四天，我們要把前面學到的筋膜、肌肉、經絡等概念，轉換成實際可以在家操作的「自我筋膜放鬆」練習，今天先認識最基礎的工具與原理。

**什麼是筋膜？** 第 5 天提過，筋膜是包覆全身肌肉、如同保鮮膜般的結締組織網絡，把身體所有肌肉、骨骼、器官連成一體。長時間姿勢不良、久坐少動或運動後未充分放鬆，筋膜與其下的肌肉可能出現緊繃、沾黏的情形，摸起來像一條條較硬的「條索」，按壓時容易產生痠脹感。

**滾筒放鬆的原理**：利用滾筒、按摩球或筋膜刀等工具，對肌肉筋膜施加持續、緩和的壓力與滑動，透過這樣的機械刺激，幫助局部血液循環、讓過度緊繃的肌肉筋膜放鬆，達到類似「自我按摩」的效果。這個作法在運動科學界稱為**自我筋膜放鬆（self-myofascial release, SMR）**，是近年來運動前後熱身與收操很常見的輔助方式。

今天的重點是先建立正確觀念與安全原則，明後兩天再分別練習上肢／下肢的實際操作。`,
      figures: [
        {
          id: "d11-fig1",
          title: "大腿橫切面：皮膚到骨頭的分層",
          alt: "把大腿橫著切一刀的分層示意圖，由外到內依序為皮膚、皮下脂肪、深筋膜（青色環，滾筒與筋膜刀主要作用的一層）、肌肉，最中央為骨頭。",
          svg: fasciaSvg,
          caption: "由外到內：皮膚 → 皮下脂肪 → 深筋膜 → 肌肉 → 骨頭。青色的深筋膜就是滾筒、筋膜刀主要作用、想放鬆的那一層。",
        },
      ],
    },
    {
      heading: "常見工具：滾筒、按摩球與筋膜刀",
      body: `自我筋膜放鬆最常見的三種工具，各有適合的情境：

- **滾筒（狼牙棒／瑜珈滾筒）**：長圓柱狀，接觸面積大，適合大腿、小腿、背部等大面積肌群，可以躺著或坐著，用身體重量在滾筒上前後滾動。表面有分「平滑款」與「顆粒／凸點款」，凸點款刺激感較強，初學者建議先從平滑款開始。
- **按摩球**：體積小、接觸面積集中，適合肩頸、足底等滾筒不容易操作到的小範圍區域，可以靠牆或坐在地上操作，方便定點停留按壓。
- **筋膜刀（IASTM 工具）**：多為木製或金屬材質的板狀工具，邊緣設計用來刮壓皮膚表面，通常需要經過專業訓練才能正確使用，力道判斷也較不容易，一般民眾自行操作風險較高，建議優先選擇滾筒與按摩球，筋膜刀類工具若無專業指導不建議自行嘗試。

工具沒有絕對的好壞，重點是選擇自己能安全、正確操作的工具，並搭配下一節的安全原則使用。`,
      figures: [
        {
          id: "d11-fig2",
          title: "三種常見自我筋膜放鬆工具",
          alt: "三個並排的工具示意圖：左側為圓柱狀滾筒、中間為圓形按摩球、右側為板狀筋膜刀，各標示適用情境文字。",
          svg: toolsSvg,
          caption: "滾筒適合大面積肌群，按摩球適合小範圍定點，筋膜刀需要專業訓練才建議使用。",
        },
      ],
    },
    {
      heading: "安全使用原則：這些地方一定要避開",
      body: `使用滾筒或按摩球前，務必先記住幾個**絕對要避開**的部位，這是今天最重要的安全原則：

- **關節正上方**：膝蓋、手肘、腳踝等關節周圍組織較薄、神經血管相對表淺，直接在關節上滾壓容易造成不適甚至受傷，應該把力道放在關節「上下方的肌肉肚（肌腹）」，而不是關節本身。
- **骨頭突起處**：例如髖骨兩側、脊椎棘突、肋骨、鎖骨等骨性地標，這些地方軟組織少，直接施壓容易疼痛且效果有限，操作時應避開，改在旁邊的肌肉上進行。
- **脊椎正中央**：滾筒放鬆背部時，應該把重量分散在脊椎**兩側**的肌肉（豎脊肌），而不是讓滾筒壓在脊椎骨頭正中央，避免對椎體與神經根造成不必要的壓力。
- **有傷口、發炎、瘀青、靜脈曲張明顯處**：這些部位組織處於較脆弱或發炎的狀態，不適合額外施加機械壓力，應暫停操作並視情況諮詢醫療人員。

另外，若有凝血功能異常、正在服用抗凝血藥物、近期手術傷口未癒合等狀況，是否適合進行滾筒放鬆，請務必先諮詢醫師或物理治療師，不要自行嘗試。記住一個原則：**滾肌肉、不滾關節與骨頭**。`,
      figures: [
        {
          id: "d11-fig3",
          title: "安全操作區與應避開部位對照",
          alt: "一個較擬真的人體正面站姿輪廓示意圖，teal 圓點標示大腿與小腿前側的肌肉肚為可操作區，紅色叉號標示膝關節與髖骨（骨性突起）為應避開部位。",
          svg: dangerZonesSvg,
          caption: "示意圖：圓點為安全操作的肌肉肚，叉號為應避開的關節與骨性地標（膝關節、髖骨）。",
        },
      ],
    },
    {
      heading: "操作步驟與力道控制",
      body: `掌握安全原則後，來看實際操作的通用步驟，之後兩天的上肢、下肢練習都會延用這個流程：

1. **找到肌肉肚**：把滾筒或按摩球放在想放鬆的肌肉中段（肌腹），而不是肌肉兩端接近骨頭或關節的地方。
2. **緩慢加壓滑動**：用身體重量緩緩壓上去，感受痠脹感後，以緩慢的速度小範圍前後滾動，速度大約每秒移動 1～2 公分，太快反而不容易讓組織放鬆。
3. **停留在緊繃點**：滾到特別痠脹的位置（俗稱「激痛點」）時，可以停留深呼吸 20～30 秒，讓該處組織有時間放鬆，力道採 0–10 疼痛量表約 **5–6 分微痠**即可，不需要壓到齜牙咧嘴。
4. **結束後緩慢收操**：每個部位操作約 30～60 秒，單次總時間不宜過長，操作後可搭配輕度伸展，並補充水分。

操作過程中若出現尖銳刺痛、麻木感或不適感持續加劇，應立即停止，不要忍痛繼續。明天開始，我們會把這套流程實際套用到上肢與肩頸的放鬆練習上。`,
      figures: [
        {
          id: "d11-fig4",
          title: "自我筋膜放鬆操作四步驟",
          alt: "四個編號步驟由虛線串接：步驟1找肌肉肚並避開關節骨突、步驟2緩慢加壓滑動、步驟3停留深呼吸力道5到6分、步驟4緩慢收操每處30到60秒。",
          svg: stepsSvg,
          caption: "這套四步驟流程是接下來上肢、下肢練習的共通操作方式，重點是緩慢、力道適中、隨時觀察身體反應。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "筋膜是包覆全身肌肉的結締組織網絡，緊繃沾黏摸起來像條索，滾筒放鬆透過持續滑動壓力幫助局部循環與放鬆。",
    "常見工具為滾筒（大面積）、按摩球（小範圍定點）、筋膜刀（需專業訓練，一般不建議自行使用）。",
    "安全原則：避開關節正上方、骨頭突起、脊椎正中央，以及傷口發炎瘀青靜脈曲張處，記住「滾肌肉、不滾關節與骨頭」。",
    "操作力道採 0–10 疼痛量表約 5–6 分微痠，每個部位 30–60 秒，出現尖銳刺痛應立即停止。",
    "凝血功能異常、服用抗凝血藥物或術後傷口未癒合者，操作前應先諮詢醫師或物理治療師。",
  ],
  quiz: [
    {
      id: "d11-q1",
      question: "自我筋膜放鬆（SMR）的原理主要是？",
      options: [
        "利用持續緩和的壓力與滑動刺激肌肉筋膜，幫助局部血液循環與放鬆",
        "直接讓肌肉纖維斷裂再重新生長",
        "透過拉伸皮膚增加彈性",
        "單純靠加熱使肌肉軟化",
      ],
      answerIndex: 0,
      explanation:
        "自我筋膜放鬆（SMR）是利用滾筒、按摩球等工具對肌肉筋膜施加持續、緩和的壓力與滑動，透過機械刺激幫助局部血液循環、讓緊繃的肌肉筋膜放鬆，並非讓肌肉纖維斷裂或單純靠加熱軟化，這兩者都不是 SMR 的作用機制。",
    },
    {
      id: "d11-q2",
      question: "三種常見工具中，哪一種一般不建議在無專業指導下自行操作？",
      options: ["滾筒", "按摩球", "筋膜刀（IASTM 工具）", "毛巾"],
      answerIndex: 2,
      explanation:
        "筋膜刀（IASTM 工具）多為木製或金屬材質，邊緣設計用來刮壓皮膚表面，通常需要經過專業訓練才能正確使用，力道判斷也較不容易，一般民眾自行操作風險較高；滾筒與按摩球相對容易上手，是初學者建議優先選擇的工具。",
    },
    {
      id: "d11-q3",
      question: "使用滾筒放鬆時，正確的施力位置應該是？",
      options: [
        "直接壓在關節正上方",
        "壓在肌肉中段（肌腹）",
        "壓在脊椎正中央",
        "壓在骨頭突起處",
      ],
      answerIndex: 1,
      explanation:
        "滾筒放鬆的力道應該放在肌肉中段（肌腹），這裡軟組織較厚、能承受壓力；關節正上方、脊椎正中央與骨頭突起處組織薄、神經血管相對表淺，直接施壓容易造成不適或受傷，這是課程強調的核心安全原則「滾肌肉、不滾關節與骨頭」。",
    },
    {
      id: "d11-q4",
      question: "滾筒放鬆背部時，關於脊椎的正確操作方式是？",
      options: [
        "把滾筒重量集中壓在脊椎正中央",
        "把重量分散在脊椎兩側的肌肉（豎脊肌）",
        "完全避開背部，不做任何放鬆",
        "用最大力道快速滾動脊椎",
      ],
      answerIndex: 1,
      explanation:
        "放鬆背部時應該把身體重量分散在脊椎兩側的豎脊肌，而不是讓滾筒壓在脊椎骨頭正中央，避免對椎體與神經根造成不必要的壓力，這也呼應「避開骨頭突起與脊椎正中央」的安全原則。",
    },
    {
      id: "d11-q5",
      question: "建議的操作力道原則是？",
      options: [
        "0–10 疼痛量表約 5–6 分微痠即可",
        "一定要壓到齜牙咧嘴才有效",
        "完全不能有任何痠脹感",
        "力道要固定用最大力，不考慮個人感受",
      ],
      answerIndex: 0,
      explanation:
        "課程建議的力道原則是 0–10 疼痛量表約 5–6 分「微痠」的程度，這樣既能提供足夠刺激又不至於造成疼痛或傷害；壓到劇痛不代表效果更好，反而可能是操作不當的警訊，應立即停止。",
    },
    {
      id: "d11-q6",
      question: "若有凝血功能異常或正在服用抗凝血藥物，操作滾筒放鬆前應該怎麼做？",
      options: [
        "不需要特別注意，正常操作即可",
        "先諮詢醫師或物理治療師，確認是否適合操作",
        "力道加倍才會有效果",
        "只要避開白天操作就沒問題",
      ],
      answerIndex: 1,
      explanation:
        "凝血功能異常、服用抗凝血藥物或近期手術傷口未癒合等狀況，皮下容易出血或瘀青風險較高，是否適合進行滾筒放鬆務必先諮詢醫師或物理治療師，不要自行嘗試，這是課程反覆強調的安全提醒。",
    },
    {
      id: "d11-q7",
      question: "操作過程中出現尖銳刺痛或麻木感持續加劇，應該怎麼處理？",
      options: [
        "忍痛繼續，因為越痛效果越好",
        "立即停止操作",
        "加大力道直到麻木感消失",
        "換更硬的工具繼續",
      ],
      answerIndex: 1,
      explanation:
        "操作中若出現尖銳刺痛、麻木感或不適感持續加劇，代表力道可能過重、位置不當或壓迫到神經血管，應立即停止，不應忍痛繼續或加大力道，這是所有自我筋膜放鬆練習都要遵守的基本安全原則。",
    },
  ],
};

export default lesson;
