import type { DayLesson } from "@/lib/content/types";

// 健康骨密度與骨質疏鬆的骨小樑密度對照示意圖。
const boneDensityCompareSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">健康骨密度（示意）</text>
  <circle cx="105" cy="120" r="70" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
  <g fill="#0d9488">
    <circle cx="80" cy="95" r="4"/><circle cx="100" cy="90" r="4"/><circle cx="120" cy="96" r="4"/><circle cx="135" cy="112" r="4"/>
    <circle cx="75" cy="115" r="4"/><circle cx="95" cy="112" r="4"/><circle cx="115" cy="118" r="4"/><circle cx="130" cy="132" r="4"/>
    <circle cx="80" cy="135" r="4"/><circle cx="100" cy="132" r="4"/><circle cx="118" cy="140" r="4"/><circle cx="90" cy="152" r="4"/>
    <circle cx="110" cy="155" r="4"/><circle cx="70" cy="132" r="4"/><circle cx="128" cy="150" r="4"/>
  </g>
  <text x="105" y="206" text-anchor="middle" font-size="10" fill="#64748b">骨小樑緻密，結構示意</text>
  <text x="315" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">骨質疏鬆（示意）</text>
  <circle cx="315" cy="120" r="70" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
  <g fill="#fb7185">
    <circle cx="290" cy="95" r="4"/><circle cx="330" cy="100" r="4"/>
    <circle cx="300" cy="130" r="4"/><circle cx="340" cy="135" r="4"/>
    <circle cx="315" cy="155" r="4"/><circle cx="280" cy="140" r="4"/>
  </g>
  <text x="315" y="206" text-anchor="middle" font-size="10" fill="#64748b">骨小樑稀疏，示意非醫學影像</text>
</svg>`;

// 徒手照護禁忌部位地圖：真實公有領域骨架圖（Wikimedia Commons，Mikael Häggström，Public Domain），
// 下載存於 public/body-care/figures/，由 <image href> 本機載入，疊加紅色叉號＋中文引線標出四個
// 需謹慎／避開的部位（脊椎棘突、肋骨區、髖／薦椎骨突、小腿靜脈曲張處）。
const contraindicationMapSvg = `<svg viewBox="0 0 640 620" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="640" height="620" fill="#ffffff"/>
  <image href="/body-care/figures/skeleton-front.svg" x="175" y="20" width="290" height="560" preserveAspectRatio="xMidYMid meet"/>
  <g stroke="#e11d48" stroke-width="3" stroke-linecap="round">
    <line x1="312" y1="210" x2="332" y2="230"/>
    <line x1="332" y1="210" x2="312" y2="230"/>
  </g>
  <line x1="495" y1="220" x2="333" y2="220" stroke="#e11d48" stroke-width="1.5"/>
  <text x="502" y="224" font-size="15" font-weight="bold" fill="#e11d48">脊椎棘突</text>
  <g stroke="#e11d48" stroke-width="3" stroke-linecap="round">
    <line x1="270" y1="180" x2="290" y2="200"/>
    <line x1="290" y1="180" x2="270" y2="200"/>
  </g>
  <line x1="148" y1="190" x2="255" y2="190" stroke="#e11d48" stroke-width="1.5"/>
  <text x="140" y="195" text-anchor="end" font-size="15" font-weight="bold" fill="#e11d48">肋骨區</text>
  <g stroke="#e11d48" stroke-width="3" stroke-linecap="round">
    <line x1="300" y1="240" x2="325" y2="255"/>
    <line x1="325" y1="240" x2="300" y2="255"/>
  </g>
  <line x1="495" y1="300" x2="346" y2="250" stroke="#e11d48" stroke-width="1.5"/>
  <text x="502" y="305" font-size="15" font-weight="bold" fill="#e11d48">髖／薦椎骨突</text>
  <g stroke="#e11d48" stroke-width="3" stroke-linecap="round">
    <line x1="335" y1="450" x2="355" y2="470"/>
    <line x1="355" y1="450" x2="335" y2="470"/>
  </g>
  <line x1="495" y1="460" x2="356" y2="460" stroke="#e11d48" stroke-width="1.5"/>
  <text x="502" y="465" font-size="15" font-weight="bold" fill="#e11d48">小腿靜脈處</text>
  <text x="320" y="606" text-anchor="middle" font-size="11" fill="#64748b">紅色叉號：建議力道放到最輕、或依對象病史完全避開的部位（示意，非精確醫學定位）</text>
</svg>`;

// 危險徵象警示清單（五項）。
const warningSignsListSvg = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="280" fill="#ffffff"/>
  <text x="210" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">出現以下任一項，優先就醫評估</text>
  <g font-size="11" fill="#9f1239">
    <rect x="16" y="34" width="388" height="38" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.2"/>
    <text x="30" y="58" font-weight="bold">！</text>
    <text x="50" y="58">單側肢體突然紅、腫、熱、痛（需排除血栓，不建議按摩）</text>
    <rect x="16" y="78" width="388" height="38" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.2"/>
    <text x="30" y="102" font-weight="bold">！</text>
    <text x="50" y="102">局部劇烈疼痛，程度與動作不成比例</text>
    <rect x="16" y="122" width="388" height="38" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.2"/>
    <text x="30" y="146" font-weight="bold">！</text>
    <text x="50" y="146">按壓處瘀青持續擴大，或出現不明瘀青</text>
    <rect x="16" y="166" width="388" height="38" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.2"/>
    <text x="30" y="190" font-weight="bold">！</text>
    <text x="50" y="190">頭暈、胸悶、冒冷汗</text>
    <rect x="16" y="210" width="388" height="38" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.2"/>
    <text x="30" y="234" font-weight="bold">！</text>
    <text x="50" y="234">原有慢性病症狀突然惡化，或意識、表達改變</text>
  </g>
  <text x="210" y="266" text-anchor="middle" font-size="10" fill="#64748b">照護者不做診斷，發現警訊請優先轉介醫療專業</text>
</svg>`;

// 發現警訊時的處理流程三步驟（操作步驟圖）。
const warningResponseStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">立即停止</text>
    <text x="70" y="108" font-size="12" fill="#64748b">當下的操作</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">讓長者休息</text>
    <text x="210" y="108" font-size="12" fill="#64748b">詢問感受</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">聯絡家屬</text>
    <text x="350" y="108" font-size="12" fill="#64748b">或協助就醫</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 29,
  phase: "W4",
  title: "長者徒手照護禁忌症與注意事項",
  minutes: 16,
  goal: "認識為長者進行徒手照護時應避開的高風險部位與常見禁忌情境，學會辨識需要立即停止並轉介專業協助的警訊。",
  sections: [
    {
      heading: "為什麼長者的身體需要更謹慎對待",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

這是整套課程中**最保守的一天**。前面幾天學了觸診、徒手手法、椅子瑜珈與彈力帶輕訓，今天要反過來談「哪些事情不該做」。老化過程中，身體可能出現幾種變化，讓徒手照護的風險提高：**骨密度可能下降**（俗稱骨質疏鬆，實際狀況因人而異，不確定就先詢問醫療人員）、**皮膚可能變薄、微血管較脆弱**（容易瘀青、對摩擦與壓力較敏感）、**可能合併多種慢性病與用藥**（例如某些藥物會影響凝血或感覺回饋）。

正因為這些變化因人而異，**徒手照護前最重要的前置動作，是先了解對象的病史與身體狀況**：是否有骨質疏鬆診斷、是否有血栓或靜脈曲張病史、目前服用哪些藥物、近期是否跌倒或受傷。不確定的地方，應該主動詢問家屬或醫療人員，而不是憑感覺判斷「應該沒問題」。

今天的內容會用**部位地圖**與**警示清單**的方式呈現，目的是幫助你建立「先了解、再謹慎行動、有疑慮就轉介」的照護態度，而不是提供任何診斷或治療依據。`,
      figures: [
        {
          id: "d29-fig1",
          title: "健康骨密度與骨質疏鬆示意對照",
          alt: "左側教色圓形代表健康骨密度，內部密集分布小圓點示意緻密的骨小樑；右側玫瑰色圓形代表骨質疏鬆，內部小圓點稀疏，示意骨小樑變得稀疏，兩者皆標明為示意圖非醫學影像。",
          svg: boneDensityCompareSvg,
          caption: "示意圖：骨質疏鬆會使骨小樑變得稀疏、骨骼相對脆弱，是否有此狀況需由醫療專業評估，不可自行判斷。",
        },
      ],
    },
    {
      heading: "禁忌部位地圖：這些地方避免直接施力",
      body: `徒手照護時，有幾個部位即使對象沒有已知病史，也建議**維持輕柔、避免直接重力按壓**，對有骨質疏鬆或血管病史的長者則要更加謹慎：

- **脊椎棘突**（後背中線一節節的骨頭突起）：不要直接用力按壓或重擊，可能對脊椎結構造成不必要的壓力。
- **肋骨區**：肋骨相對細窄，尤其骨質疏鬆的長者，過大的力道有較高風險，力道務必放輕。
- **髖部／薦椎骨突處**：這些骨性突起處軟組織保護較少，重壓容易造成不適甚至瘀青。
- **靜脈曲張或血栓病史部位**：這類部位不建議按摩，詳見下一節的警訊說明。

這份地圖不是要你背下精確的醫學定位，而是建立一個原則：**看到骨頭明顯突起的地方，力道就要更輕**；如果對象有特定病史（例如骨鬆診斷、血栓病史），對應部位要完全避開直接施力，並以了解到的病史為準、不確定就詢問醫療人員。整體力道建議控制在 0–10 量表的 **3–4 分**，明顯低於一般成人建議的力道。`,
      figures: [
        {
          id: "d29-fig2",
          title: "徒手照護禁忌部位地圖",
          alt: "一張真實的人體全身骨架正面圖，以紅色叉號與中文引線標示四個需謹慎的部位：脊椎棘突、肋骨區、髖／薦椎骨突、小腿靜脈處（靜脈曲張或血栓病史部位）。",
          svg: contraindicationMapSvg,
          caption: "真實骨架圖上以紅色叉號標示的部位建議力道放到最輕，或依對象病史完全避開，整體力道建議不超過3–4分。",
          credit: "Mikael Häggström, Public Domain, via Wikimedia Commons（Human skeleton front - no labels.svg）",
        },
      ],
    },
    {
      heading: "危險徵象：出現這些情況要提高警覺",
      body: `除了部位之外，照護過程中若觀察到下列任一情況，應該視為**警訊**，優先考慮就醫評估，而不是繼續操作或自行判斷：

- **單側肢體突然紅、腫、熱、痛**：需要排除血栓等問題，這種情況**不建議按摩**，按摩反而可能有風險。
- **局部劇烈疼痛，程度與動作不成比例**：例如輕輕觸碰就劇痛，超出一般痠痛的合理範圍。
- **按壓處瘀青持續擴大，或出現不明瘀青**：可能與凝血功能或用藥有關，需要醫療評估。
- **頭暈、胸悶、冒冷汗**：可能是心血管相關的警訊，應立即停止並留意是否需要緊急協助。
- **原有慢性病症狀突然惡化，或意識、表達能力改變**：這些變化超出照護者能判斷的範圍。

務必記住：**照護者的角色是及早發現警訊並轉介，不是自行診斷病因或決定治療方式**。即使長者本人希望「繼續做沒關係」，照護者仍應以安全為優先，溫和地說明理由並暫停操作。`,
      figures: [
        {
          id: "d29-fig3",
          title: "危險徵象警示清單",
          alt: "五張玫瑰色警示卡片依序列出：單側肢體突然紅腫熱痛、局部劇烈疼痛與動作不成比例、按壓處瘀青持續擴大或不明瘀青、頭暈胸悶冒冷汗、原有慢性病症狀突然惡化或意識表達改變，卡片前皆有驚嘆號圖示。",
          svg: warningSignsListSvg,
          caption: "出現清單中任一項，請優先考慮就醫評估，照護者不應自行判斷病因或繼續操作。",
        },
      ],
    },
    {
      heading: "發現警訊時的處理流程",
      body: `建立了部位地圖與警示清單之後，最後一步是知道**發現警訊當下該怎麼做**。建議依循簡單的三步驟：**第一步，立即停止當下的操作**，不要因為「快做完了」而繼續；**第二步，讓長者休息並詢問感受**，用開放的方式詢問（例如「哪裡不舒服？」），不強迫對方一定要講清楚；**第三步，視情況協助聯絡家屬或就醫**，若情況緊急（例如意識改變、胸痛、明顯呼吸困難），應立即撥打緊急救護專線協助送醫。

這個流程刻意設計得很簡單，因為在緊張的當下，複雜的判斷流程反而不容易執行。**照護者的任務是「觀察、停止、轉介」，而不是「診斷、治療」**——這也是整個 30 天課程反覆強調的核心原則：普通級的衛教與運動知識可以幫助我們更了解身體、建立良好習慣，但永遠不能取代專業醫療判斷。

明天（第 30 天）我們會做四週總複習，並帶大家把這些原則整理進一份個人照護計畫模板，讓學到的知識能實際落地成規律的自我照護行動。`,
      figures: [
        {
          id: "d29-fig4",
          title: "發現警訊時的處理三步驟",
          alt: "三個編號步驟由虛線串接：步驟1立即停止當下的操作、步驟2讓長者休息並詢問感受、步驟3視情況聯絡家屬或協助就醫。",
          svg: warningResponseStepsSvg,
          caption: "簡單三步驟：停止→休息與詢問→聯絡家屬或就醫，緊急狀況請立即撥打緊急救護專線。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "徒手照護前務必先了解對象病史（骨鬆、血栓、慢性病、用藥），不確定就詢問家屬或醫療人員，不可自行假設。",
    "脊椎棘突、肋骨區、髖／薦椎骨突、靜脈曲張或血栓病史處是建議避免直接重力按壓的部位，整體力道建議3–4分。",
    "單側紅腫熱痛、局部劇痛不成比例、瘀青持續擴大、頭暈胸悶冒冷汗、慢性病症狀惡化，都屬於需要就醫評估的警訊。",
    "發現警訊時依「立即停止—休息並詢問—聯絡家屬或就醫」三步驟處理，緊急狀況立即撥打緊急救護專線。",
    "照護者的角色是及早發現警訊並轉介專業，不是自行診斷病因或決定治療方式，任何不確定都應諮詢醫師或物理治療師。",
  ],
  quiz: [
    {
      id: "d29-q1",
      question: "課程提到長者身體需要更謹慎對待的原因，不包含下列哪一項？",
      options: [
        "骨密度可能隨老化下降",
        "皮膚可能變薄、微血管較脆弱",
        "可能合併多種慢性病與用藥",
        "長者的痛覺一定比年輕人更敏感，不需要額外注意",
      ],
      answerIndex: 3,
      explanation:
        "骨密度下降、皮膚變薄變脆弱、合併慢性病與用藥，都是老化過程中可能出現、需要照護者提高警覺的因素。痛覺反應因人而異，不能假設「一定更敏感」而掉以輕心，這也是為什麼要先了解對象的病史，而不是憑感覺判斷。",
    },
    {
      id: "d29-q2",
      question: "進行徒手照護前，最重要的前置動作是什麼？",
      options: [
        "直接開始操作，邊做邊觀察",
        "先了解對象的病史與身體狀況，不確定時詢問家屬或醫療人員",
        "力道越大越能確認有沒有問題",
        "完全不需要溝通，長者不需要被告知",
      ],
      answerIndex: 1,
      explanation:
        "徒手照護前應先了解對象的病史與身體狀況，例如是否有骨質疏鬆、血栓病史或特定慢性病，不確定時應主動詢問家屬或醫療人員，而不是直接開始操作。這是整堂課「保守、先了解再行動」原則的具體實踐。",
    },
    {
      id: "d29-q3",
      question: "下列哪個部位在徒手照護時特別需要避免直接重力按壓？",
      options: [
        "前臂中段肌肉",
        "脊椎棘突與肋骨區",
        "小腿肚外側肌肉（無病史疑慮時）",
        "手掌虎口",
      ],
      answerIndex: 1,
      explanation:
        "脊椎棘突與肋骨區屬於骨性突起或結構相對脆弱的部位，尤其對骨質疏鬆的長者而言，直接重力按壓的風險較高，應避免。相對而言，一般肌肉豐厚處在無病史疑慮下，風險通常較低，但仍應維持輕柔的力道原則。",
    },
    {
      id: "d29-q4",
      question: "若發現長者「單側小腿突然紅腫熱痛」，最適當的處理方式是？",
      options: [
        "立即加強按摩促進血液循環",
        "先熱敷再按摩",
        "不要按摩，優先考慮就醫排除血栓等問題",
        "忽略即可，通常會自己消",
      ],
      answerIndex: 2,
      explanation:
        "單側肢體突然紅腫熱痛是本課程特別列出的警訊之一，可能與血栓等需要醫療處理的狀況有關，不應該按摩或熱敷處理，而是優先考慮就醫評估。照護者的角色是及早發現警訊並轉介，而不是自行判斷處理。",
    },
    {
      id: "d29-q5",
      question: "課程建議為長者進行徒手照護時，力道大約控制在0–10量表的多少分？",
      options: [
        "8–10分，力道越強效果越好",
        "3–4分，明顯低於一般成人建議的力道",
        "完全不能有任何接觸",
        "沒有固定原則，依個人喜好調整",
      ],
      answerIndex: 1,
      explanation:
        "課程建議長者徒手照護的力道應控制在0–10量表約3–4分，明顯低於一般成人建議的力道，以降低對脆弱組織造成傷害的風險。這是保守原則的具體數字化，而不是鼓勵追求痠痛感或效果。",
    },
    {
      id: "d29-q6",
      question: "照護過程中若長者表達「這裡壓下去特別痛」，正確的因應方式是？",
      options: [
        "認為長者反應過度，繼續原本力道",
        "立即降低力道或停止該部位操作，並留意是否為警訊",
        "換一個更用力的手法測試",
        "假裝沒聽到，避免打斷流程",
      ],
      answerIndex: 1,
      explanation:
        "長者主觀表達的疼痛是重要的安全訊號，應立即降低力道或停止該部位的操作，並留意這是否符合課程列出的警訊清單。照護者不應該用更大力道去「測試」，這樣可能會造成不必要的傷害。",
    },
    {
      id: "d29-q7",
      question: "發現警訊時，課程建議的處理流程順序是？",
      options: [
        "先聯絡家屬，再詢問長者感受，最後才停止動作",
        "立即停止動作、讓長者休息並詢問感受，必要時協助聯絡家屬或就醫",
        "完全不需要停止，先觀察一整天再說",
        "直接自行判斷病因並給予治療建議",
      ],
      answerIndex: 1,
      explanation:
        "建議的流程是先立即停止當下的操作，讓長者休息並詢問其感受，再視情況協助聯絡家屬或就醫，緊急狀況應立即撥打緊急救護專線。照護者的角色是及時反應與轉介，而不是自行診斷病因或提供治療建議，這一點在整個課程中都反覆強調。",
    },
  ],
};

export default lesson;
