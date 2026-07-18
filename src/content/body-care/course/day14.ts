import type { DayLesson } from "@/lib/content/types";

// 正常組織與水腫組織橫切面對照示意圖。
const edemaConceptSvg = `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="300" height="240" fill="#ffffff"/>
  <text x="80" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">正常</text>
  <circle cx="80" cy="120" r="50" fill="#99f6e4" stroke="#0d9488" stroke-width="3"/>
  <circle cx="80" cy="120" r="28" fill="#5eead4" stroke="#0d9488" stroke-width="2"/>
  <text x="220" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">水腫（示意）</text>
  <circle cx="220" cy="120" r="60" fill="#fecdd3" stroke="#e11d48" stroke-width="3"/>
  <circle cx="220" cy="120" r="28" fill="#5eead4" stroke="#0d9488" stroke-width="2"/>
  <text x="80" y="196" text-anchor="middle" font-size="11" fill="#475569">組織液平衡</text>
  <text x="220" y="196" text-anchor="middle" font-size="11" fill="#475569">組織間隙液體堆積</text>
  <text x="150" y="228" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：橫切面比較，非醫學診斷依據</text>
</svg>`;

// 向心輕撫方向示意圖：真實 PD 下肢骨骼圖（Wikimedia，Jecowa，Public Domain）為底，
// 疊三段 teal 箭頭標示由腳踝往心臟方向的輕撫路徑，取代原本自繪的抽象腿部輪廓。
const centripetalSvg = `<svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs>
    <marker id="d14-arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="#0d9488"/>
    </marker>
  </defs>
  <rect width="480" height="400" fill="#ffffff"/>
  <text x="240" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">向心輕撫方向（示意）</text>
  <image href="/body-care/figures/leg-bones.svg" x="140" y="44" width="200" height="303" preserveAspectRatio="xMidYMid meet"/>
  <line x1="242" y1="335" x2="242" y2="270" stroke="#0d9488" stroke-width="5" marker-end="url(#d14-arrow)"/>
  <line x1="238" y1="258" x2="238" y2="193" stroke="#0d9488" stroke-width="5" marker-end="url(#d14-arrow)"/>
  <line x1="234" y1="181" x2="234" y2="110" stroke="#0d9488" stroke-width="5" marker-end="url(#d14-arrow)"/>
  <g font-size="14" font-weight="bold" fill="#0d9488">
    <line x1="134" y1="335" x2="228" y2="335" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="130" y="339" text-anchor="end">腳踝</text>
    <line x1="134" y1="66" x2="228" y2="105" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="130" y="70" text-anchor="end">往心臟方向</text>
  </g>
  <text x="240" y="380" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：箭頭方向由遠端往近端，朝向心臟，力道極輕</text>
</svg>`;

// 操作步驟圖：環境準備、由遠端開始、重複觀察、結束紀錄。
// viewBox 加寬至 480（原 420 寬版本第 4 步「抬高休息片刻」等文字會超出邊界被裁掉）。
const stepsSvg = `<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="160" fill="#ffffff"/>
  <line x1="60" y1="48" x2="420" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="48" r="22" fill="#0d9488"/>
    <text x="60" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="60" y="92" font-size="12" fill="#0f172a">環境準備</text>
    <text x="60" y="108" font-size="12" fill="#64748b">確認皮膚無異狀</text>
    <circle cx="180" cy="48" r="22" fill="#0d9488"/>
    <text x="180" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="180" y="92" font-size="12" fill="#0f172a">由遠端開始</text>
    <text x="180" y="108" font-size="12" fill="#64748b">力道極輕2-3分</text>
    <circle cx="300" cy="48" r="22" fill="#0d9488"/>
    <text x="300" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="300" y="92" font-size="12" fill="#0f172a">重複並觀察</text>
    <text x="300" y="108" font-size="12" fill="#64748b">留意長者反應</text>
    <circle cx="420" cy="48" r="22" fill="#0d9488"/>
    <text x="420" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="420" y="92" font-size="12" fill="#0f172a">結束紀錄</text>
    <text x="420" y="108" font-size="12" fill="#64748b">抬高休息片刻</text>
  </g>
</svg>`;

// 禁忌與就醫警訊清單示意圖。
const warningChecklistSvg = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="320" height="260" fill="#ffffff"/>
  <path d="M40 30 L60 66 L20 66 Z" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
  <text x="40" y="58" text-anchor="middle" font-size="16" font-weight="bold" fill="#e11d48">!</text>
  <text x="90" y="46" font-size="13" font-weight="bold" fill="#e11d48">出現以下情形，立即就醫</text>
  <g font-size="12" fill="#0f172a">
    <text x="30" y="90">・單側下肢突然腫脹＋疼痛／發熱／發紅</text>
    <text x="30" y="116">・明顯靜脈曲張處直接按壓</text>
    <text x="30" y="142">・皮膚傷口／感染／發炎／瘀青處</text>
    <text x="30" y="168">・近期骨折或手術處</text>
    <text x="30" y="194">・心臟／腎臟疾病相關水腫未經醫師同意</text>
  </g>
  <text x="160" y="230" text-anchor="middle" font-size="11" fill="#64748b">原則：保守優先，不確定就先諮詢專業人員</text>
</svg>`;

const lesson: DayLesson = {
  day: 14,
  phase: "W2",
  title: "長者常見下肢水腫的輕柔按摩對策",
  minutes: 16,
  goal: "以衛教角度認識長者常見下肢水腫的成因概述、向心輕撫的原則與操作方式，並清楚掌握何種情況絕對不能自行按摩、需要立即就醫。",
  sections: [
    {
      heading: "認識下肢水腫：長者常見的困擾",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

許多長者會發現到了下午或傍晚，小腿、腳踝甚至足背會出現腫脹的情形，按壓下去會留下一個凹陷（衛教上常稱為「凹陷性水腫」），這是長者照護中很常見的困擾之一。

**常見成因（衛教概述，非診斷）**：隨年齡增長，靜脈瓣膜功能與肌肉幫浦作用（走路時小腿肌肉收縮，協助把血液推回心臟）可能逐漸下降；久坐久站、活動量減少、部分藥物副作用，也都可能是促成因素之一。此外，心臟、腎臟、肝臟功能，以及靜脈或淋巴循環方面的疾病，也都可能造成下肢水腫，這些屬於需要醫療專業評估的範疇，本課程不做診斷，僅就一般衛教與輕柔按摩的照護觀念做分享。

今天要介紹的是一種**溫和、輔助性**的照護方式——向心輕撫，目的是提供舒適感、輔助促進循環，並不是治療水腫本身的方法。若長者的水腫情形持續、加重或合併其他症狀，應以就醫評估為優先。`,
      figures: [
        {
          id: "d14-fig1",
          title: "正常組織與水腫組織示意對照",
          alt: "左右兩個橫切面圓形示意圖對照，左側標示正常組織液平衡，右側外圈以較大的粉紅色範圍標示組織間隙液體堆積的水腫狀態。",
          svg: edemaConceptSvg,
          caption: "示意圖：水腫是組織間隙液體堆積的狀態，實際成因需由醫療專業人員評估，本圖僅為衛教概念示意。",
        },
      ],
    },
    {
      heading: "向心輕撫原則：方向比力道重要",
      body: `向心輕撫（effleurage）是一種歷史悠久的輕柔撫觸手法，核心原則是**方向永遠朝向心臟**——也就是從肢體遠端（腳趾、腳背）往近端（小腿、大腿）的方向撫摸，這個方向與靜脈血液回流心臟的方向一致，傳統上認為有助於輔助循環、帶來放鬆與舒適感。

**具體做法**：雙手掌心貼合小腿或腳背皮膚，用**極輕**的力道（遠比日常按摩輕，接近撫摸的程度），從腳踝或腳背開始，緩慢往膝蓋方向滑動，每次滑動約 3～5 秒，重複數次；力道採 0–10 疼痛量表控制在約 **2～3 分**，比前面幾天介紹的滾筒放鬆（5～6 分）輕柔許多——這裡的目標是舒適與輔助循環，**不是**製造痠脹感或治療效果，長者皮膚與血管往往較脆弱，力道務必保守。

操作時全程觀察長者的表情與反應，若對方表示不適、疼痛或抗拒，應立即停止。`,
      figures: [
        {
          id: "d14-fig2",
          title: "向心輕撫方向示意",
          alt: "一張真實的下肢骨骼結構圖（正面，含股骨、脛腓骨），疊上三段由下往上的 teal 箭頭，標示從腳踝往膝蓋、往心臟方向的輕撫路徑，說明力道應極輕。",
          svg: centripetalSvg,
          caption: "向心輕撫的方向永遠由遠端往近端、朝向心臟，力道遠比一般按摩輕柔，箭頭路徑疊於真實下肢骨骼圖上僅供方向參考。",
          credit: "Jecowa（基於 LadyofHats 原作）, Public Domain, via Wikimedia Commons（Human leg bones labeled.svg）",
        },
      ],
    },
    {
      heading: "操作步驟",
      body: `延續前面幾天的操作流程精神，向心輕撫的建議步驟如下：

1. **環境與姿勢準備**：讓長者坐著或半躺，下肢放鬆，操作者洗淨雙手，確認長者皮膚無傷口、發炎或明顯不適。
2. **由遠端開始**：雙手輕貼腳背或腳踝，以極輕力道緩慢向上滑撫至小腿、膝蓋附近，方向全程朝向心臟。
3. **重複與觀察**：每個部位重複輕撫 5～8 次，過程中持續觀察長者反應，隨時詢問感受。
4. **結束與紀錄**：操作時間建議控制在 5～10 分鐘內，結束後可協助抬高下肢休息片刻，並留意水腫是否有改變，供家人或照護者後續參考。

**再次提醒**：這是輔助性的舒適照護，不是治療手段，力道務必保持極輕柔，避免用力揉捏或深層按壓下肢，那可能對脆弱的血管與組織造成不必要的負擔。`,
      figures: [
        {
          id: "d14-fig3",
          title: "向心輕撫操作四步驟",
          alt: "四個編號步驟由虛線串接：步驟1環境準備確認皮膚無異狀、步驟2由遠端開始力道極輕2到3分、步驟3重複並觀察長者反應、步驟4結束後抬高休息片刻並紀錄。",
          svg: stepsSvg,
          caption: "整套流程時間建議控制在5到10分鐘內，全程觀察長者反應，不適應立即停止。",
        },
      ],
    },
    {
      heading: "禁忌與何時該立即就醫",
      body: `以下情況**絕對不應該**進行按摩，並且需要提高警覺：

- **單側下肢突然腫脹、合併疼痛、發熱或皮膚發紅**：這是需要立即就醫評估、排除深部靜脈栓塞（血栓）等急症的重要警訊，絕對不可自行按摩，按摩可能讓血栓移動造成更嚴重的後果。**只要懷疑是這種情況，就應該儘速就醫，不要等待或猶豫。**
- **明顯靜脈曲張處**：應避開直接按壓曲張的靜脈血管本身，只在周圍皮膚以極輕力道操作，或乾脆諮詢醫師後再決定是否適合。
- **皮膚有傷口、感染、發炎、瘀青或近期骨折／手術處**：這些部位不應施加任何按摩，需等傷口癒合或經醫師評估後再考慮。
- **已知心臟衰竭、腎臟疾病等病史導致的水腫**：這類水腫的照護應以醫療團隊的整體治療計畫為主，按摩僅能作為醫療團隊同意下的輔助舒適措施，不應自行替代或延誤治療。

長者照護的原則永遠是**保守優先、預防勝於治療**：任何不確定的狀況，寧可先諮詢醫師、物理治療師或居家護理師，也不要自行嘗試力道較強的處理方式。`,
      figures: [
        {
          id: "d14-fig4",
          title: "禁忌與就醫警訊清單",
          alt: "一張帶有警告三角形圖示的清單，列出單側下肢突然腫脹合併疼痛發熱發紅、明顯靜脈曲張、皮膚傷口發炎瘀青、近期骨折手術處、心臟腎臟疾病相關水腫等五項應提高警覺或避免按摩的情形。",
          svg: warningChecklistSvg,
          caption: "任何一項符合，都應優先諮詢醫師或就醫評估，而非自行按摩處理。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "下肢水腫成因多元（循環、藥物、心腎肝疾病等），本課程僅做衛教概述，不做診斷，處理原則以保守、舒適為主。",
    "向心輕撫方向永遠朝向心臟（遠端往近端），力道控制在 0–10 量表約 2–3 分，比一般筋膜放鬆更輕柔。",
    "單側下肢突然腫脹合併疼痛、發熱或發紅，須提高警覺，儘速就醫排除血栓，絕對不可自行按摩。",
    "靜脈曲張、皮膚傷口發炎、近期骨折手術處、心腎疾病相關水腫，都應避開或先諮詢專業人員。",
    "長者照護原則是保守優先、預防勝於治療，任何不確定狀況都應諮詢醫師、物理治療師或居家護理師。",
  ],
  quiz: [
    {
      id: "d14-q1",
      question: "課程提到的「凹陷性水腫」大致指的是什麼現象？",
      options: [
        "按壓下肢皮膚後留下暫時凹陷的腫脹情形",
        "皮膚出現紅疹",
        "肌肉抽筋",
        "關節活動度變大",
      ],
      answerIndex: 0,
      explanation:
        "凹陷性水腫是衛教上常用來描述下肢腫脹的一種現象，按壓皮膚後會留下一個暫時性的凹陷，是長者照護中常見的觀察重點；本課程僅做衛教說明，實際成因與嚴重程度需要由醫療專業人員評估判斷。",
    },
    {
      id: "d14-q2",
      question: "向心輕撫的方向原則是？",
      options: [
        "從近端往遠端（往腳趾方向）",
        "從遠端往近端，朝向心臟方向",
        "方向不重要，隨意撫摸即可",
        "只能左右來回撫摸",
      ],
      answerIndex: 1,
      explanation:
        "向心輕撫的核心原則是方向永遠朝向心臟，也就是從肢體遠端（腳趾、腳背）往近端（小腿、大腿）的方向撫摸，這個方向與靜脈血液回流心臟的方向一致，傳統上認為有助於輔助循環與舒適感。",
    },
    {
      id: "d14-q3",
      question: "向心輕撫建議的力道，和前幾天滾筒放鬆的 5-6 分相比應該如何？",
      options: ["力道要更大，約8-9分", "力道要更輕，約2-3分", "力道完全一樣即可", "力道不需要控制"],
      answerIndex: 1,
      explanation:
        "向心輕撫是針對長者下肢的輔助性舒適照護，力道建議控制在 0–10 量表約 2–3 分，比前面幾天滾筒放鬆的 5–6 分輕柔許多，因為長者皮膚與血管往往較脆弱，目標是舒適與輔助循環，不是製造痠脹感。",
    },
    {
      id: "d14-q4",
      question: "出現哪種情況時，絕對不應自行按摩，且應該儘速就醫？",
      options: [
        "單純久坐後輕微腳踝浮腫",
        "單側下肢突然腫脹，合併疼痛、發熱或皮膚發紅",
        "雙側腳踝在傍晚略為浮腫",
        "走路較多後小腿輕微痠脹",
      ],
      answerIndex: 1,
      explanation:
        "單側下肢突然腫脹並合併疼痛、發熱或皮膚發紅，是需要立即就醫評估、排除深部靜脈栓塞（血栓）等急症的重要警訊，絕對不可自行按摩，因為按摩可能讓血栓移動造成更嚴重的後果，這是本課最重要的安全提醒。",
    },
    {
      id: "d14-q5",
      question: "遇到明顯靜脈曲張的部位，操作時應該怎麼做？",
      options: [
        "直接用力按壓曲張的血管，效果更好",
        "避開直接按壓曲張血管本身，或諮詢醫師後再決定是否操作",
        "完全忽略，正常力道操作即可",
        "只在夜間才可以按壓",
      ],
      answerIndex: 1,
      explanation:
        "明顯靜脈曲張處的血管壁較脆弱，應避開直接按壓曲張的靜脈血管本身，只在周圍皮膚以極輕力道操作，或乾脆先諮詢醫師後再決定是否適合進行，不應該直接用力按壓曲張的血管。",
    },
    {
      id: "d14-q6",
      question: "若長者本身有心臟衰竭或腎臟疾病導致的水腫，課程建議的照護態度是？",
      options: [
        "用更大力道按摩以加速消腫",
        "按摩僅能作為醫療團隊同意下的輔助舒適措施，不應自行替代或延誤治療",
        "完全不需要理會醫療團隊的意見",
        "水腫消退前應停止所有醫療追蹤",
      ],
      answerIndex: 1,
      explanation:
        "心臟、腎臟疾病相關的水腫，照護應以醫療團隊的整體治療計畫為主，向心輕撫等按摩方式僅能作為經醫療團隊同意下的輔助舒適措施，不應自行替代或延誤正規治療，也不應該用更大力道按摩來自行加速消腫。",
    },
    {
      id: "d14-q7",
      question: "長者下肢照護整體上，課程強調的原則是？",
      options: [
        "力道越強效果越好，越用力越能消腫",
        "保守優先、預防勝於治療，不確定的狀況應先諮詢專業人員",
        "只要長者沒有主動抱怨，就不需要注意任何細節",
        "按摩可以完全取代醫療評估與治療",
      ],
      answerIndex: 1,
      explanation:
        "長者照護的原則是保守優先、預防勝於治療，任何不確定的狀況（如水腫成因不明、合併疼痛發熱等）都應該先諮詢醫師、物理治療師或居家護理師，而不是自行嘗試力道較強的處理方式，按摩絕對不能取代醫療評估。",
    },
  ],
};

export default lesson;
