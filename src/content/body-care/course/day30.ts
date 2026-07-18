import type { DayLesson } from "@/lib/content/types";

// 四週學習旅程路線圖。
const fourWeekJourneySvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <text x="210" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">四週學習旅程</text>
  <line x1="50" y1="110" x2="370" y2="110" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="6 5"/>
  <g text-anchor="middle">
    <circle cx="50" cy="110" r="24" fill="#0d9488"/>
    <text x="50" y="116" font-size="14" font-weight="bold" fill="#ffffff">W1</text>
    <text x="50" y="150" font-size="11" fill="#0f172a">骨骼肌肉</text>
    <text x="50" y="164" font-size="11" fill="#0f172a">與筋膜</text>
    <circle cx="157" cy="110" r="24" fill="#4f46e5"/>
    <text x="157" y="116" font-size="14" font-weight="bold" fill="#ffffff">W2</text>
    <text x="157" y="150" font-size="11" fill="#0f172a">經絡與</text>
    <text x="157" y="164" font-size="11" fill="#0f172a">徒手放鬆</text>
    <circle cx="264" cy="110" r="24" fill="#0d9488"/>
    <text x="264" y="116" font-size="14" font-weight="bold" fill="#ffffff">W3</text>
    <text x="264" y="150" font-size="11" fill="#0f172a">體態與</text>
    <text x="264" y="164" font-size="11" fill="#0f172a">動作評估</text>
    <circle cx="370" cy="110" r="24" fill="#4f46e5"/>
    <text x="370" y="116" font-size="14" font-weight="bold" fill="#ffffff">W4</text>
    <text x="370" y="150" font-size="11" fill="#0f172a">運動處方</text>
    <text x="370" y="164" font-size="11" fill="#0f172a">與個案應用</text>
  </g>
</svg>`;

// 我的身體檢核工具箱（觸診、體態觀察、動作評估、張力觸摸）。
const selfCheckToolsSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <g>
    <rect x="14" y="14" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <circle cx="46" cy="60" r="10" fill="#0d9488"/>
    <text x="80" y="52" font-size="12" font-weight="bold" fill="#0f172a">觸診</text>
    <text x="80" y="68" font-size="10" fill="#64748b">找骨性地標與張力</text>
  </g>
  <g>
    <rect x="218" y="14" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <line x1="284" y1="30" x2="284" y2="96" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="284" cy="46" r="8" fill="#0d9488"/>
    <line x1="284" y1="54" x2="284" y2="80" stroke="#0d9488" stroke-width="3"/>
    <text x="320" y="52" font-size="12" font-weight="bold" fill="#0f172a">體態觀察</text>
    <text x="320" y="68" font-size="10" fill="#64748b">鉛垂線與對照</text>
  </g>
  <g>
    <rect x="14" y="116" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <circle cx="46" cy="150" r="8" fill="#0d9488"/>
    <line x1="46" y1="158" x2="46" y2="178" stroke="#0d9488" stroke-width="3"/>
    <line x1="46" y1="164" x2="34" y2="188" stroke="#0d9488" stroke-width="3"/>
    <line x1="46" y1="164" x2="58" y2="188" stroke="#0d9488" stroke-width="3"/>
    <text x="80" y="152" font-size="12" font-weight="bold" fill="#0f172a">動作評估</text>
    <text x="80" y="168" font-size="10" fill="#64748b">深蹲觀察代償</text>
  </g>
  <g>
    <rect x="218" y="116" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="270" y="148" width="30" height="14" rx="6" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
    <text x="320" y="152" font-size="12" font-weight="bold" fill="#0f172a">張力觸摸</text>
    <text x="320" y="168" font-size="10" fill="#64748b">分辨過緊與過鬆</text>
  </g>
</svg>`;

// 個人照護計畫產出四步驟（操作步驟圖）。
const carePlanStepsSvg = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="170" fill="#ffffff"/>
  <line x1="60" y1="48" x2="398" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="48" r="22" fill="#0d9488"/>
    <text x="60" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="60" y="92" font-size="11" fill="#0f172a">設定目標</text>
    <text x="60" y="106" font-size="11" fill="#0f172a">具體可衡量</text>
    <circle cx="180" cy="48" r="22" fill="#0d9488"/>
    <text x="180" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="180" y="92" font-size="11" fill="#0f172a">自我評估</text>
    <text x="180" y="106" font-size="11" fill="#0f172a">找出重點部位</text>
    <circle cx="300" cy="48" r="22" fill="#0d9488"/>
    <text x="300" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="300" y="92" font-size="11" fill="#0f172a">選擇行動</text>
    <text x="300" y="106" font-size="11" fill="#0f172a">放鬆／伸展／強化</text>
    <circle cx="420" cy="48" r="22" fill="#0d9488"/>
    <text x="420" y="54" font-size="18" font-weight="bold" fill="#ffffff">4</text>
    <text x="420" y="92" font-size="11" fill="#0f172a">追蹤調整</text>
    <text x="420" y="106" font-size="11" fill="#0f172a">定期回顧</text>
  </g>
</svg>`;

// 持續觀察 vs 尋求專業協助對照圖。
const continueOrReferSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <rect x="16" y="16" width="184" height="180" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
  <text x="108" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">持續與觀察</text>
  <g font-size="11" fill="#115e59">
    <circle cx="32" cy="64" r="3" fill="#0d9488"/>
    <text x="42" y="68">規律重複比強度更重要</text>
    <circle cx="32" cy="90" r="3" fill="#0d9488"/>
    <text x="42" y="94">循序漸進調整強度</text>
    <circle cx="32" cy="116" r="3" fill="#0d9488"/>
    <text x="42" y="120">定期用檢核工具箱回顧</text>
    <circle cx="32" cy="142" r="3" fill="#0d9488"/>
    <text x="42" y="146">記錄疼痛量表變化</text>
  </g>
  <rect x="220" y="16" width="184" height="180" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
  <text x="312" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">尋求專業協助</text>
  <g font-size="11" fill="#9f1239">
    <circle cx="236" cy="64" r="3" fill="#e11d48"/>
    <text x="246" y="68">出現第29天的警訊清單</text>
    <circle cx="236" cy="90" r="3" fill="#e11d48"/>
    <text x="246" y="94">疼痛持續加劇或未緩解</text>
    <circle cx="236" cy="116" r="3" fill="#e11d48"/>
    <text x="246" y="120">合併慢性病或用藥疑慮</text>
    <circle cx="236" cy="142" r="3" fill="#e11d48"/>
    <text x="246" y="146">任何不確定的狀況</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 30,
  phase: "W4",
  title: "總複習與自我人體照護計畫產出",
  minutes: 18,
  goal: "統整四週所學的骨骼肌肉筋膜、經絡徒手放鬆、體態動作評估與運動處方知識，產出一份屬於自己的自我照護計畫，並掌握何時該尋求專業協助的原則。",
  sections: [
    {
      heading: "四週旅程回顧：我們學了什麼",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

恭喜走到第 30 天！在收尾之前，先花一點時間回顧整趟旅程走過的四個階段：

| 週次 | 主軸 | 重點內容 |
| --- | --- | --- |
| W1（第1–7天） | 骨骼肌肉與筋膜地圖 | 三大解剖平面、主要骨骼、大肌肉群、深層筋膜線、站坐姿、長者ROM初評 |
| W2（第8–14天） | 經絡與徒手放鬆 | 經絡基礎概念、常用穴道、按揉推捏四手法、滾筒使用、上下肢筋膜放鬆、長者水腫對策 |
| W3（第15–21天） | 體態與動作評估 | 不良體態識別、靜態與動態評估、肌肉張力、上下交叉症候群、長者防跌評估 |
| W4（第22–30天） | 運動處方與個案應用 | FITT原則、伸展原理、肌力與關節保護、個案演練、長者運動處方與禁忌症 |

這四個階段其實是一條**由認識到應用**的路徑：先建立身體結構的共同語言（W1），學會用手去感受與放鬆身體（W2），學會用眼睛與觀察評估身體狀態（W3），最後把知識轉化成具體可執行的運動處方與個案應用（W4）。今天要做的，就是把這四段旅程收斂成一份**你自己的**照護計畫。`,
      figures: [
        {
          id: "d30-fig1",
          title: "四週學習旅程路線圖",
          alt: "一條水平虛線連接四個編號圓圈，分別標示W1骨骼肌肉與筋膜、W2經絡與徒手放鬆、W3體態與動作評估、W4運動處方與個案應用，教色與靛色交替呈現。",
          svg: fourWeekJourneySvg,
          caption: "四週旅程：由認識身體結構，到學會放鬆與評估，最後落實為運動處方與個案應用。",
        },
      ],
    },
    {
      heading: "我的身體檢核工具箱",
      body: `回顧課程中學過的四種**自我檢核工具**，它們彼此互補，合起來就是一套簡單的自我覺察系統：

- **觸診**（第3天）：用手指感受骨性地標與軟組織的手感，是最基礎的「認識自己身體」的方式。
- **體態觀察**（第15–16天）：透過鏡子、鉛垂線等參考點，從正面、側面、後面觀察圓肩、駝背、骨盆前傾等體態特徵。
- **動作評估**（第17天）：透過深蹲等動態動作，觀察關節活動度與常見的代償模式。
- **張力觸摸**（第18天）：分辨肌肉是「過緊」還是「過鬆」，並連結到上下交叉症候群（第19–20天）的整體張力失衡概念。

這套工具箱的定位是**自我覺察，不是自我診斷**：它能幫助你更了解自己身體目前的狀態、找出可能需要留意的部位，但不能取代專業的評估與診斷。建議每隔一段時間（例如每月）用這套工具箱做一次簡單的自我檢核，記錄下來，作為調整照護計畫的依據。`,
      figures: [
        {
          id: "d30-fig2",
          title: "我的身體檢核工具箱",
          alt: "四格圖示，分別為觸診（指尖圖示）、體態觀察（鉛垂線圖示）、動作評估（深蹲簡筆人形）、張力觸摸（肌肉條狀圖示），每格皆為淺綠色圓角方框。",
          svg: selfCheckToolsSvg,
          caption: "四種自我檢核工具互補使用：觸診、體態觀察、動作評估、張力觸摸，用於自我覺察而非自我診斷。",
        },
      ],
    },
    {
      heading: "產出我的個人照護計畫",
      body: `現在，把四週的知識收斂成一份**個人照護計畫模板**，建議依循四個步驟：

1. **設定目標**：越具體越好，例如「減少久坐造成的腰痠」「改善圓肩體態」，而不是籠統的「變健康」。
2. **自我評估**：用上一節的檢核工具箱，找出與目標相關的重點部位，例如久坐腰痠可能對應腰椎前凸變平、核心肌力不足。
3. **選擇行動**：依 FITT 原則（第22天）挑選放鬆、伸展、強化三類動作的組合，並安排合理的頻率，例如每週2–3次的伸展加上1–2次的肌力訓練。
4. **追蹤與調整**：定期記錄疼痛量表（0–10）與體態、動作的變化，約4週後重新評估一次，依結果調整計畫內容。

可以用一張簡單的表格記錄：**目標｜本週重點部位｜放鬆動作｜強化動作｜頻率｜自評分數**。這份計畫不需要完美，重點是**能持續執行、能定期回顧調整**，比一開始就設計得很複雜但做不下去更有價值。`,
      figures: [
        {
          id: "d30-fig3",
          title: "個人照護計畫產出四步驟",
          alt: "四個編號步驟由虛線串接：步驟1設定目標、具體可衡量；步驟2自我評估、找出重點部位；步驟3選擇行動、放鬆伸展強化；步驟4追蹤調整、定期回顧。",
          svg: carePlanStepsSvg,
          caption: "個人照護計畫的四步驟循環：設定目標→自我評估→選擇行動→追蹤調整，定期重複這個循環。",
        },
      ],
    },
    {
      heading: "持續原則與何時尋求專業協助",
      body: `結業前的最後提醒：自我照護最重要的不是強度，而是**持續**。規律的輕度活動、長期累積下來的效果，往往比偶爾一次高強度訓練更有幫助，這也是整個 W4 反覆強調的觀念。建議從小目標開始、循序漸進，並為自己的進步留一點耐心。

同時也要清楚知道**這套課程的邊界**：這是普通級的衛教與運動知識分享，目的是幫助你更了解身體、建立良好習慣，**不能取代醫療診斷或治療**。當你遇到以下情況，應該優先尋求醫師、物理治療師等專業協助，而不是自己嘗試解決：出現第29天整理的警訊清單中任一項、疼痛持續加劇或超過預期時間仍未緩解、合併慢性病或用藥上的疑慮、或是任何你自己感到不確定的狀況。

最後，感謝你完成這 30 天的學習旅程。把今天產出的個人照護計畫放在容易看到的地方，定期回顧與調整，讓這些知識真正融入日常生活——這才是這門課程最終想達到的目標。`,
      figures: [
        {
          id: "d30-fig4",
          title: "持續觀察 vs 尋求專業協助",
          alt: "左側教色欄位列出持續與觀察的四項原則（規律重複、循序漸進、定期用工具箱回顧、記錄疼痛量表），右側玫瑰色欄位列出四項應尋求專業協助的情況（出現警訊清單、疼痛持續未緩解、合併慢性病或用藥疑慮、任何不確定的狀況）。",
          svg: continueOrReferSvg,
          caption: "自我照護重在持續與觀察；出現右側任一情況，請優先尋求醫師或物理治療師等專業協助。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "四週旅程是由認識到應用的路徑：W1建立結構語言、W2學會放鬆、W3學會評估、W4轉化為運動處方與個案應用。",
    "身體檢核工具箱（觸診、體態觀察、動作評估、張力觸摸）用於自我覺察，不能取代專業診斷。",
    "個人照護計畫模板依「設定目標—自我評估—選擇行動—追蹤調整」四步驟循環，建議約4週回顧一次。",
    "自我照護重視持續與規律，強度不是唯一重點，循序漸進比一次到位更能長久維持。",
    "出現警訊、疼痛未緩解、合併慢性病或用藥疑慮、任何不確定的狀況，都應優先尋求醫師或物理治療師協助。",
  ],
  quiz: [
    {
      id: "d30-q1",
      question: "照護實務上，第2天建議優先掌握的四組主要骨骼是哪一組合？",
      options: [
        "脊椎、肩胛骨、骨盆、四肢長骨",
        "頭骨、肋骨、手指骨、腳趾骨",
        "牙齒、耳骨、鼻骨、下顎骨",
        "所有206塊骨頭都要先背起來",
      ],
      answerIndex: 0,
      explanation:
        "複習第2天內容：照護上會先掌握承重與定位的四組關鍵骨骼——脊椎（中軸）、肩胛骨與骨盆（兩大平台）、四肢長骨（支架），而不是一開始就背誦全身206塊骨頭。這張整體地圖是後續觸診與評估的基礎。",
    },
    {
      id: "d30-q2",
      question: "傳統經絡學說中，「經絡」概念常被拿來與現代解剖學的哪個系統類比？",
      options: ["骨骼系統", "筋膜系統", "消化系統", "呼吸系統"],
      answerIndex: 1,
      explanation:
        "課程第8天提到，傳統經絡學說中氣血循行的概念，常被拿來與現代解剖學的筋膜系統類比，兩者都描述了一種貫穿全身、連結不同部位的網絡概念。這是衛教口吻的類比說明，並非宣稱兩者完全等同或已被科學證實。",
    },
    {
      id: "d30-q3",
      question: "徒手治療「按、揉、推、捏」四種基本手法，力道控制建議使用的工具是什麼？",
      options: [
        "完全不需要控制力道",
        "0–10疼痛量表，一般成人建議落在5–6分微痠",
        "只能用秒數計時器控制",
        "只能用體重計控制",
      ],
      answerIndex: 1,
      explanation:
        "課程建議用0–10疼痛量表來溝通與控制手法力道，一般成人建議落在5–6分左右的微痠感，避免追求疼痛感越強越好的迷思。這個量表在長者章節中會用更保守的3–4分來調整。",
    },
    {
      id: "d30-q4",
      question: "「圓肩、駝背、骨盆前傾」是第三週介紹的哪一類主題？",
      options: [
        "常見不良體態的識別",
        "骨骼的名稱",
        "經絡穴道的定位",
        "運動處方的FITT原則",
      ],
      answerIndex: 0,
      explanation:
        "第15天介紹的是常見不良體態的識別，圓肩、駝背、骨盆前傾是三種常見的體態特徵，各有其成因，也是後續靜態與動態評估要觀察的重點。這些內容屬於體態評估範疇，與經絡穴道或運動處方的FITT原則是不同主題。",
    },
    {
      id: "d30-q5",
      question: "下交叉症候群中，通常「緊繃」與「無力」的肌群組合分別是？",
      options: [
        "緊：腹肌與臀肌；弱：髖屈肌與豎脊肌",
        "緊：髖屈肌與豎脊肌；弱：腹肌與臀肌",
        "緊：上斜方肌；弱：深頸屈肌",
        "與肌肉張力完全無關",
      ],
      answerIndex: 1,
      explanation:
        "下交叉症候群通常表現為髖屈肌與豎脊肌偏緊繃、腹肌與臀肌偏無力，調整原則是放鬆緊繃的一側、強化無力的一側，讓骨盆周圍的張力恢復平衡。上斜方肌與深頸屈肌的緊繃／無力組合則屬於上交叉症候群，是第20天的主題。",
    },
    {
      id: "d30-q6",
      question: "FITT原則中的兩個「T」分別代表什麼？",
      options: [
        "Time（時間）與Type（類型）",
        "Tension（張力）與Tempo（節奏）",
        "Target（目標）與Total（總量）",
        "Test（測試）與Training（訓練）",
      ],
      answerIndex: 0,
      explanation:
        "FITT原則的四個字母分別是Frequency（頻率）、Intensity（強度）、Time（時間）、Type（類型），是設計運動處方時常用的四個調整維度。理解這四個維度，有助於在自我照護計畫中具體規劃每週的活動安排。",
    },
    {
      id: "d30-q7",
      question: "關於DOMS（延遲性肌肉痠痛），下列敘述何者正確？",
      options: [
        "是乳酸堆積造成，運動後立即出現最痛",
        "通常運動後12–24小時開始出現，24–72小時左右達到高峰",
        "只會發生在下肢，不會發生在上肢",
        "出現DOMS就代表訓練方式有問題",
      ],
      answerIndex: 1,
      explanation:
        "DOMS通常在運動後12–24小時開始出現、24–72小時左右達到高峰，是肌肉微小損傷後的正常修復反應，並非乳酸堆積所致，也可能發生在全身各部位的肌肉。單純出現DOMS不代表訓練方式有問題，而是身體適應新刺激的常見現象。",
    },
    {
      id: "d30-q8",
      question: "為長者進行徒手照護或運動處方時，下列哪一個原則最符合整個課程強調的保守態度？",
      options: [
        "力道與強度都要盡量比一般成人更高，才有效果",
        "低衝擊、規律漸進、力道明顯保守，出現警訊優先就醫",
        "只要長者不喊痛，就可以持續加重力道",
        "不需要事先了解病史，直接開始操作",
      ],
      answerIndex: 1,
      explanation:
        "課程對長者章節反覆強調低衝擊、規律漸進、力道要明顯比一般成人保守（如3–4分），並且一旦出現警訊清單中的任何一項，就應該優先尋求醫療協助，而不是自行判斷處理。事先了解病史、避開骨性突起與靜脈曲張處，都是保守原則的具體展現。",
    },
    {
      id: "d30-q9",
      question: "個人照護計畫模板建議的四個步驟依序是？",
      options: [
        "追蹤調整、選擇行動、自我評估、設定目標",
        "設定目標、自我評估、選擇行動、追蹤調整",
        "選擇行動、設定目標、追蹤調整、自我評估",
        "不需要任何固定步驟，想到什麼做什麼",
      ],
      answerIndex: 1,
      explanation:
        "課程建議的個人照護計畫模板依序是先設定具體目標，再用檢核工具箱進行自我評估找出重點部位，接著依FITT原則選擇放鬆、伸展或強化等行動，最後定期追蹤與調整。這個「目標—評估—行動—追蹤」的循環，能讓自我照護計畫持續優化，而不是憑當下感覺隨意進行。",
    },
  ],
};

export default lesson;
