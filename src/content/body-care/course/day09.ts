import type { DayLesson } from "@/lib/content/types";

// 合谷穴位置示意圖：真實手部骨骼圖（Wikimedia Commons，LadyofHats／Nyks 修訂，Public Domain）
// ＋紅點與中文引線標示合谷穴大致位置（第一、二掌骨之間虎口隆起最高點）。
const heguHandSvg = `<svg viewBox="0 0 580 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="580" height="360" fill="#ffffff"/>
  <image href="/body-care/figures/hand-bones.svg" x="145" y="30" width="290" height="279" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="16" font-weight="bold" fill="#e11d48">
    <circle cx="390" cy="183" r="7"/>
    <line x1="400" y1="183" x2="445" y2="175" stroke="#e11d48" stroke-width="1.5"/>
    <text x="450" y="180" text-anchor="start">合谷穴</text>
  </g>
  <text x="290" y="335" text-anchor="middle" font-size="11" fill="#64748b">大致位置：拇指與食指併攏，虎口隆起最高點附近</text>
</svg>`;

// 足三里穴位置示意圖：真實下肢骨骼圖（Wikimedia Commons，Jecowa，Public Domain）
// ＋紅點與中文引線標示足三里大致位置，青色點標膝關節作為對照參考。
const zusanliLegSvg = `<svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="380" fill="#ffffff"/>
  <image href="/body-care/figures/leg-bones.svg" x="140" y="38" width="200" height="303" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="13" font-weight="bold" fill="#0d9488">
    <circle cx="244" cy="180" r="4"/>
    <line x1="244" y1="180" x2="136" y2="165" stroke="#0d9488" stroke-width="1.5"/>
    <text x="132" y="169" text-anchor="end">膝關節（參考點）</text>
  </g>
  <g font-size="16" font-weight="bold" fill="#e11d48">
    <circle cx="252" cy="212" r="7"/>
    <line x1="252" y1="212" x2="400" y2="210" stroke="#e11d48" stroke-width="1.5"/>
    <text x="406" y="214" text-anchor="start">足三里</text>
  </g>
  <text x="240" y="358" text-anchor="middle" font-size="11" fill="#64748b">大致位置：外膝眼下方約四指寬，脛骨外側</text>
</svg>`;

// 湧泉穴位置示意圖：真實足底構造圖（Wikimedia Commons，Gray's Anatomy 1918，Public Domain）
// ＋紅點與中文引線標示湧泉穴大致位置（足底前三分之一凹陷處）。
const yongquanFootSvg = `<svg viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="440" height="380" fill="#ffffff"/>
  <image href="/body-care/figures/foot-plantar-nerves.png" x="140" y="34" width="160" height="312" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="16" font-weight="bold" fill="#e11d48">
    <circle cx="216" cy="238" r="7"/>
    <line x1="216" y1="238" x2="330" y2="220" stroke="#e11d48" stroke-width="1.5"/>
    <text x="336" y="224" text-anchor="start">湧泉穴</text>
  </g>
  <text x="220" y="358" text-anchor="middle" font-size="11" fill="#64748b">大致位置：足底前三分之一凹陷處</text>
</svg>`;

// 按壓穴位三步驟（操作步驟圖）。
const pressStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">先找位置</text>
    <text x="70" y="108" font-size="12" fill="#64748b">對照示意圖定位</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">拇指按壓</text>
    <text x="210" y="108" font-size="12" fill="#64748b">力道約 5-6 分</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">停留放鬆</text>
    <text x="350" y="108" font-size="12" fill="#64748b">5-10 秒後放開</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 9,
  phase: "W2",
  title: "常用穴道：合谷、足三里、湧泉",
  minutes: 17,
  goal: "以衛教角度認識三個生活中最常被提及的傳統穴位——合谷、足三里、湧泉——的大致定位、傳統對應說法，以及安全的按壓方式與力道原則。",
  sections: [
    {
      heading: "合谷穴：手背的「虎口」",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

今天認識三個生活中最常被提到的穴位，第一個是**合谷穴**，位於手背，拇指與食指之間的「虎口」區域。

**大致定位方式**：把拇指與食指自然併攏，虎口處會隆起一塊肌肉，最高點附近即是傳統上定位合谷穴的參考位置。也有另一種常見找法：用另一手拇指指骨橫紋對齊虎口邊緣，指尖觸及處作為參考點。這些都是**大致的定位方法**，實際位置在不同人身上會有些微差異，示意圖僅供建立空間概念。

**傳統對應說法**：傳統經絡學說中，合谷穴屬於手陽明大腸經，民間常用於舒緩頭面部的緊繃不適感，是最廣為人知的保健穴位之一。這裡強調的是「傳統上認為」的保健用途，並非醫學已證實的治療效果。

**重要提醒**：傳統養生資料中常提到**孕婦應避免強力按壓合谷穴**，這是流傳已久的民俗提醒。若你正在懷孕或有其他特殊生理狀況，是否適合按壓穴位、按壓部位與力道，請務必事先諮詢醫師或中醫師等專業人員，不要僅憑本課程內容自行操作。`,
      figures: [
        {
          id: "d09-fig1",
          title: "合谷穴大致位置（手背虎口）",
          alt: "一張真實的人體手部骨骼結構圖（背面配色圖），紅點與中文引線標示合谷穴的大致位置，約在拇指與食指掌骨之間、虎口隆起最高點附近。",
          svg: heguHandSvg,
          caption: "真實手部骨骼圖上以紅點標示合谷穴大致位置（第一、二掌骨之間虎口隆起最高點），屬傳統經絡學說中的定位方式，個體差異存在。",
          credit: "LadyofHats（Mariana Ruiz Villarreal），修訂 Nyks, Public Domain, via Wikimedia Commons（Scheme_human_hand_bones-en.svg）",
        },
      ],
    },
    {
      heading: "足三里：小腿外側的保健要穴",
      body: `第二個穴位是**足三里**，位於小腿外側，是傳統養生保健中最常被提到的穴位之一，有「常按足三里，勝吃老母雞」這句流傳已久的俗諺，反映它在民俗文化中的重要地位。

**大致定位方式**：先找到膝蓋外側下方的凹陷處（傳統稱「外膝眼」）作為參考點，從這裡沿小腿向下量約四指寬（自己四指併攏的寬度），再稍微偏外側一點的位置，即是傳統上定位足三里的大致區域。這個「四指寬」是概略估計法，不同人的手指與小腿比例不同，找到的位置也會有些許出入，重點是抓住大致區域即可，不需要精確到毫米。

**傳統對應說法**：足三里屬於足陽明胃經，傳統上認為與消化、體力、整體元氣有關，是日常保健按壓中最常被推薦的穴位之一。同樣地，這是傳統學說的保健用途描述，不是醫學治療宣稱——如果你有明確的消化系統症狀（如持續腹痛、體重下降），應優先就醫檢查，而不是依賴穴位按壓。

按壓時建議用拇指指腹，力道採 0–10 疼痛量表約 **5–6 分「微痠」的程度**即可，不需要用力到疼痛難耐。`,
      figures: [
        {
          id: "d09-fig2",
          title: "足三里穴大致位置（小腿外側）",
          alt: "一張真實的下肢骨骼結構圖（正面，含股骨、脛腓骨），青色點標出膝關節作為參考點，紅點與中文引線標示足三里穴在其下方約四指寬處的大致位置。",
          svg: zusanliLegSvg,
          caption: "真實下肢骨骼圖上以紅點標示足三里大致位置（外膝眼下方約四指寬、脛骨外側），屬傳統經絡學說中的概略定位，僅供保健按壓參考。",
          credit: "Jecowa（基於 LadyofHats 原作）, Public Domain, via Wikimedia Commons（Human leg bones labeled.svg）",
        },
      ],
    },
    {
      heading: "湧泉穴：足底的「泉源」",
      body: `第三個穴位是**湧泉穴**，位於腳底，是人體足底唯一常被提及的傳統保健穴位，名稱取「如泉水湧出」之意。

**大致定位方式**：把腳趾用力向下蜷曲，足底前段會出現一個明顯的凹陷處，這個凹陷大約在足底前三分之一處，即是傳統上定位湧泉穴的參考位置。這個「蜷曲找凹陷」的方法比較直觀，在自己身上就能找到參考點。

**傳統對應說法**：湧泉穴屬於足少陰腎經，傳統上認為是腎經在足底的起點，民俗中常見於睡前搓揉足底以放鬆身心的保健習慣。同樣要強調，這是傳統學說的描述，不是醫學已證實的療效說法。

按壓湧泉穴的方式通常是用拇指指腹或指節，以打圈或定點按壓的方式操作，力道同樣建議控制在 0–10 量表的 **5–6 分微痠感**。足底皮膚較厚，力道判斷上更需要留意自身感受，若出現尖銳刺痛感應立即停止，那可能代表力道過重或姿勢不當，而不是「按得越用力越有效」。`,
      figures: [
        {
          id: "d09-fig3",
          title: "湧泉穴大致位置（足底前段）",
          alt: "一張真實的足底構造解剖圖，紅點與中文引線標示湧泉穴的大致位置在足底前三分之一的凹陷處。",
          svg: yongquanFootSvg,
          caption: "真實足底構造圖上以紅點標示湧泉穴大致位置（足底前三分之一凹陷處），可用腳趾蜷曲的方式輔助找到參考位置。",
          credit: "Henry Vandyke Carter（Gray's Anatomy, 20th ed., 1918）, Public Domain, via Wikimedia Commons（Gray833.png）",
        },
      ],
    },
    {
      heading: "按壓手法與安全提醒",
      body: `三個穴位的按壓操作步驟大致相同，可以統一用以下三步驟練習：

1. **先找位置**：對照示意圖，用「大致區域」的概念找到參考位置，不需要追求毫米級精確。
2. **拇指按壓**：用拇指指腹垂直施力，力道採 0–10 疼痛量表約 **5–6 分微痠**即可，避免用力過猛。
3. **停留放鬆**：停留約 5–10 秒後放開，可重複數次，過程中維持正常呼吸，不要憋氣。

**安全提醒（務必遵守）**：

- 孕婦、有出血傾向、皮膚破損發炎、剛動完手術等特殊狀況，是否適合按壓穴位請先諮詢醫師或中醫師，不要自行操作。
- 按壓過程若出現劇烈疼痛、麻木加劇、頭暈等不適，應立即停止。
- 本課程介紹的穴位保健方式屬於一般衛教與民俗保健知識分享，**不能取代醫療診斷或治療**；若有明確的健康症狀，仍須以就醫評估為主。

明天（第 10 天）我們會進一步認識按、揉、推、捏四種徒手手法的差異與力道控制原則，把今天學到的定位概念延伸到更廣的身體區域。`,
      figures: [
        {
          id: "d09-fig4",
          title: "穴位按壓三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 對照示意圖找位置、步驟 2 拇指按壓力道約 5 到 6 分、步驟 3 停留 5 到 10 秒後放開。",
          svg: pressStepsSvg,
          caption: "三個穴位都可依此步驟練習，重點是力道控制在微痠而非疼痛的範圍。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "合谷穴大致位於手背虎口隆起最高點，傳統上民俗保健常用於舒緩頭面部緊繃感，孕婦按壓前應諮詢專業人員。",
    "足三里大致位於外膝眼下方約四指寬處，傳統上與消化、體力等日常保健有關。",
    "湧泉穴大致位於足底前三分之一凹陷處，可用腳趾蜷曲方式輔助定位。",
    "按壓力道統一採 0–10 疼痛量表約 5–6 分微痠，避免用力過猛，過程中維持正常呼吸。",
    "所有穴位介紹皆為傳統學說與民俗保健知識分享，不能取代醫療診斷或治療，特殊生理狀況務必先諮詢專業人員。",
  ],
  quiz: [
    {
      id: "d09-q1",
      question: "合谷穴的大致位置在哪裡？",
      options: [
        "手背，拇指與食指併攏隆起的最高點附近",
        "腳底前三分之一凹陷處",
        "小腿外側，膝蓋下方約四指寬",
        "頸部後方正中線上",
      ],
      answerIndex: 0,
      explanation:
        "合谷穴大致位於手背虎口區域，拇指與食指自然併攏後隆起肌肉的最高點附近，這是傳統上常見的定位參考方式之一。足三里在小腿外側、湧泉在足底，三者位置不同，不要混淆。",
    },
    {
      id: "d09-q2",
      question: "關於合谷穴的按壓，課程提出了什麼特別的安全提醒？",
      options: [
        "沒有任何禁忌，任何人都可以隨時用力按壓",
        "只有男性不能按壓",
        "傳統養生資料常提醒孕婦應避免強力按壓，是否適合請先諮詢專業人員",
        "只有晚上才能按壓，白天按壓無效",
      ],
      answerIndex: 2,
      explanation:
        "傳統養生資料中常提到孕婦應避免強力按壓合谷穴，這是流傳已久的民俗提醒。若正在懷孕或有其他特殊生理狀況，應事先諮詢醫師或中醫師，不宜僅憑衛教內容自行操作，這是課程反覆強調的安全原則。",
    },
    {
      id: "d09-q3",
      question: "足三里的大致定位方式是？",
      options: [
        "從外膝眼沿小腿向下量約四指寬，稍微偏外側的位置",
        "從腳踝往上量一掌寬",
        "從手肘往下量兩指寬",
        "在膝蓋正上方的大腿前側",
      ],
      answerIndex: 0,
      explanation:
        "足三里的大致定位是先找到膝蓋外側下方的凹陷處（外膝眼）作為參考點，再沿小腿向下量約四指寬、稍微偏外側的位置。這是概略估計法，不同人的比例會有些許差異，抓住大致區域即可。",
    },
    {
      id: "d09-q4",
      question: "湧泉穴可以用什麼簡單方式輔助找到大致位置？",
      options: [
        "把腳趾用力向下蜷曲，足底前段出現的凹陷處",
        "把手掌用力握拳",
        "把膝蓋完全打直",
        "把頭轉向左側",
      ],
      answerIndex: 0,
      explanation:
        "把腳趾用力向下蜷曲時，足底前段（大約前三分之一處）會出現一個明顯凹陷，這個凹陷即是傳統上定位湧泉穴的參考位置，是一個可以在自己身上直接操作找到參考點的簡單方法。",
    },
    {
      id: "d09-q5",
      question: "按壓這三個穴位時，建議的力道原則是？",
      options: [
        "力道越大效果越好，按到明顯劇痛才有效",
        "採 0–10 疼痛量表，約 5–6 分微痠感即可，避免用力過猛",
        "完全不能有任何感覺，一點力道都不能用",
        "力道要固定用最大力，不需要考慮個人感受",
      ],
      answerIndex: 1,
      explanation:
        "課程建議的力道原則是 0–10 疼痛量表約 5–6 分「微痠」的程度，這是課程中反覆使用的力道量表，目的是提供足夠刺激又不造成疼痛或傷害。用力到劇痛不代表效果更好，反而可能是操作不當的警訊，應立即停止。",
    },
    {
      id: "d09-q6",
      question: "課程對「合谷、足三里、湧泉能改善哪些症狀」這類說法採取什麼立場？",
      options: [
        "積極宣稱這些穴位能治療多種疾病",
        "以傳統上認為的保健用途描述，並非醫學已證實的治療效果，不能取代醫療診斷",
        "完全否定這些穴位存在任何傳統文化意義",
        "建議大家用穴位按壓取代看醫生",
      ],
      answerIndex: 1,
      explanation:
        "課程對三個穴位的傳統對應說法都採用「傳統上認為」的衛教口吻描述，明確區分傳統學說與已證實的醫學療效，並強調這些內容不能取代醫療診斷或治療。若有明確健康症狀，仍應以專業就醫評估為主。",
    },
    {
      id: "d09-q7",
      question: "按壓穴位過程中，如果出現劇烈疼痛或頭暈等不適，應該怎麼做？",
      options: [
        "忍耐繼續按壓，因為越痛代表效果越好",
        "立即停止，必要時諮詢醫療專業人員",
        "換另一隻手用更大力道繼續按",
        "屏住呼吸直到不適感消失",
      ],
      answerIndex: 1,
      explanation:
        "按壓過程若出現劇烈疼痛、麻木加劇、頭暈等不適，應立即停止操作，這是安全操作的基本原則。這類反應可能代表力道過重、姿勢不當或身體本身有其他狀況，必要時應諮詢醫師或物理治療師等專業人員，而不是硬撐繼續。",
    },
  ],
};

export default lesson;
