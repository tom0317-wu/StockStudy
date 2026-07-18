import type { DayLesson } from "@/lib/content/types";

// DOMS 痠痛程度隨時間變化的示意折線圖。
const domsTimelineSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">DOMS 痠痛程度隨時間變化（示意）</text>
  <line x1="50" y1="180" x2="390" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="50" y1="40" x2="50" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="12" y="60" font-size="10" fill="#64748b">痠痛</text>
  <text x="12" y="72" font-size="10" fill="#64748b">程度</text>
  <polyline points="50,168 132,78 214,58 296,100 378,150" fill="none" stroke="#0d9488" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <g fill="#0d9488">
    <circle cx="50" cy="168" r="4"/>
    <circle cx="132" cy="78" r="4"/>
    <circle cx="214" cy="58" r="4"/>
    <circle cx="296" cy="100" r="4"/>
    <circle cx="378" cy="150" r="4"/>
  </g>
  <text x="214" y="46" text-anchor="middle" font-size="10" fill="#0d9488" font-weight="bold">高峰</text>
  <g font-size="11" fill="#334155" text-anchor="middle">
    <text x="50" y="198">運動當下</text>
    <text x="132" y="198">12–24小時</text>
    <text x="214" y="198">24–72小時</text>
    <text x="296" y="198">第4–5天</text>
    <text x="378" y="198">約第7天</text>
  </g>
</svg>`;

// 正常 DOMS 表徵與需就醫警訊對照圖。
const domsCompareSvg = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="260" fill="#ffffff"/>
  <rect x="16" y="16" width="184" height="228" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
  <text x="108" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">正常 DOMS 表徵</text>
  <g font-size="11" fill="#115e59">
    <circle cx="32" cy="64" r="3" fill="#0d9488"/>
    <text x="42" y="68">兩側對稱、範圍較大</text>
    <circle cx="32" cy="90" r="3" fill="#0d9488"/>
    <text x="42" y="94">活動後略為緩解</text>
    <circle cx="32" cy="116" r="3" fill="#0d9488"/>
    <text x="42" y="120">疼痛約3–6分（0–10）</text>
    <circle cx="32" cy="142" r="3" fill="#0d9488"/>
    <text x="42" y="146">數天內逐漸緩解</text>
    <circle cx="32" cy="168" r="3" fill="#0d9488"/>
    <text x="42" y="172">無明顯腫脹或變色</text>
  </g>
  <rect x="220" y="16" width="184" height="228" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
  <text x="312" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">需留意／就醫警訊</text>
  <g font-size="11" fill="#9f1239">
    <circle cx="236" cy="64" r="3" fill="#e11d48"/>
    <text x="246" y="68">單側局部劇痛</text>
    <circle cx="236" cy="90" r="3" fill="#e11d48"/>
    <text x="246" y="94">關節明顯無法活動</text>
    <circle cx="236" cy="116" r="3" fill="#e11d48"/>
    <text x="246" y="120">患處明顯腫脹或變色</text>
    <circle cx="236" cy="142" r="3" fill="#e11d48"/>
    <text x="246" y="146">尿液顏色明顯變深</text>
    <circle cx="236" cy="168" r="3" fill="#e11d48"/>
    <text x="246" y="172">超過一週未緩解</text>
  </g>
  <text x="210" y="254" text-anchor="middle" font-size="10" fill="#94a3b8">右側任一項出現，請諮詢醫師評估</text>
</svg>`;

// 恢復策略四象限示意圖：輕度活動、伸展、補水營養、睡眠。
const domsRecoverySvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <g>
    <rect x="14" y="14" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <circle cx="46" cy="46" r="8" fill="#0d9488"/>
    <line x1="46" y1="54" x2="46" y2="76" stroke="#0d9488" stroke-width="4" stroke-linecap="round"/>
    <line x1="46" y1="62" x2="34" y2="72" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <line x1="46" y1="62" x2="58" y2="70" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <line x1="46" y1="76" x2="36" y2="94" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <line x1="46" y1="76" x2="56" y2="92" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <text x="80" y="52" font-size="12" font-weight="bold" fill="#0f172a">輕度活動</text>
    <text x="80" y="68" font-size="10" fill="#64748b">散步、緩和踩車</text>
  </g>
  <g>
    <rect x="218" y="14" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <circle cx="250" cy="50" r="8" fill="#0d9488"/>
    <line x1="250" y1="58" x2="250" y2="80" stroke="#0d9488" stroke-width="4" stroke-linecap="round"/>
    <line x1="250" y1="62" x2="234" y2="46" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <line x1="250" y1="62" x2="266" y2="46" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <line x1="250" y1="80" x2="240" y2="98" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <line x1="250" y1="80" x2="260" y2="98" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <text x="284" y="52" font-size="12" font-weight="bold" fill="#0f172a">溫和伸展</text>
    <text x="284" y="68" font-size="10" fill="#64748b">維持在微痠即可</text>
  </g>
  <g>
    <rect x="14" y="116" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <path d="M40 130 h20 l-3 30 a7 7 0 0 1 -14 0 z" fill="none" stroke="#0d9488" stroke-width="2.5"/>
    <line x1="34" y1="130" x2="66" y2="130" stroke="#0d9488" stroke-width="2.5"/>
    <text x="80" y="152" font-size="12" font-weight="bold" fill="#0f172a">補水與營養</text>
    <text x="80" y="168" font-size="10" fill="#64748b">水分、蛋白質、電解質</text>
  </g>
  <g>
    <rect x="218" y="116" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <path d="M258 132 a16 16 0 1 0 10 28 a12 12 0 0 1 -10 -28 z" fill="#0d9488"/>
    <text x="284" y="154" font-size="12" font-weight="bold" fill="#0f172a">充足睡眠</text>
    <text x="284" y="170" font-size="10" fill="#64748b">修復肌肉的重要時間</text>
  </g>
</svg>`;

// 個案處理流程四步驟（操作步驟圖）。viewBox 加寬至 480，避免最後一步「觀察48–72小時」文字貼齊右邊界被截斷。
const domsCaseStepsSvg = `<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="480" height="170" fill="#ffffff"/>
  <line x1="60" y1="48" x2="398" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="48" r="22" fill="#0d9488"/>
    <text x="60" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="60" y="92" font-size="11" fill="#0f172a">先判斷是否為</text>
    <text x="60" y="106" font-size="11" fill="#0f172a">DOMS或受傷</text>
    <circle cx="180" cy="48" r="22" fill="#0d9488"/>
    <text x="180" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="180" y="92" font-size="11" fill="#0f172a">低強度動態</text>
    <text x="180" y="106" font-size="11" fill="#0f172a">活動與伸展</text>
    <circle cx="300" cy="48" r="22" fill="#0d9488"/>
    <text x="300" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="300" y="92" font-size="11" fill="#0f172a">補水、營養</text>
    <text x="300" y="106" font-size="11" fill="#0f172a">與充足睡眠</text>
    <circle cx="420" cy="48" r="22" fill="#0d9488"/>
    <text x="420" y="54" font-size="18" font-weight="bold" fill="#ffffff">4</text>
    <text x="420" y="92" font-size="11" fill="#0f172a">觀察48–72</text>
    <text x="420" y="106" font-size="11" fill="#0f172a">小時是否緩解</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 27,
  phase: "W4",
  title: "綜合個案 B：運動後肌肉痠痛（DOMS）與恢復流程",
  minutes: 17,
  goal: "認識延遲性肌肉痠痛（DOMS）的成因與正常病程，學會分辨正常痠痛與需要留意的警訊，並透過一個虛擬個案演練一套安全的觀察與恢復流程。",
  sections: [
    {
      heading: "什麼是延遲性肌肉痠痛（DOMS）",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前一天我們演練了久坐族腰痠的完整流程，今天換一個更貼近運動族群的情境：**運動後隔天才開始痠痛**。這種延遲出現的痠痛，醫學上稱為 **DOMS（Delayed Onset Muscle Soreness，延遲性肌肉痠痛）**，最常發生在做了不熟悉的動作、或離心收縮（肌肉邊拉長邊出力，例如深蹲下蹲、下樓梯）較多的運動之後。

一般認為 DOMS 與**肌肉纖維的微小損傷、以及隨後的發炎修復反應**有關，是身體對新刺激的正常適應過程，而不是受傷的警訊。常見迷思是「痠痛是乳酸堆積造成的」——其實乳酸在運動結束後不久就會代謝掉，並不是延遲一兩天才出現痠痛的原因。

DOMS 有一個相對固定的時間軸：通常在運動後 **12–24 小時開始出現**，**24–72 小時左右達到高峰**，之後在**約一週內**逐漸緩解。認識這條時間軸，是今天分辨「正常痠痛」與「需要留意的狀況」的第一步。`,
      figures: [
        {
          id: "d27-fig1",
          title: "DOMS 痠痛程度隨時間變化",
          alt: "一張折線圖示意圖，橫軸為時間（運動當下、12-24小時、24-72小時、第4-5天、約第7天），縱軸為痠痛程度，折線在24-72小時處達到高峰後逐漸下降。",
          svg: domsTimelineSvg,
          caption: "示意圖：DOMS 通常在運動後 12–24 小時開始、24–72 小時達高峰、約一週內緩解，這是判斷是否為典型 DOMS 的重要參考。",
        },
      ],
    },
    {
      heading: "正常痠痛 vs 需要留意的警訊",
      body: `不是所有運動後的不舒服都是 DOMS，學會分辨很重要。**典型的正常 DOMS** 通常有幾個特徵：兩側對稱、範圍較大（不是單一個點）、活動後反而略為緩解、疼痛程度大約落在 0–10 量表的 **3–6 分**，並且會在數天內逐漸改善，沒有明顯腫脹或變色。

相對地，下列表現屬於**需要提高警覺、建議諮詢醫師**的警訊：單側局部的劇烈疼痛（與動作強度不成比例）、關節明顯無法活動、患處明顯腫脹或變色、尿液顏色明顯變深，或是超過一週仍未緩解甚至持續惡化。這些表現已經超出典型 DOMS 的範圍，可能代表急性受傷或其他需要醫療評估的狀況，**照護者或運動者本身都不適合自行判斷病因**，優先原則永遠是諮詢專業。

記住一個簡單的區分心法：**DOMS 是「兩側、範圍廣、越動越舒緩」；警訊是「單側、局部劇痛、不隨活動改善」**。今天的個案演練會反覆用到這個心法。`,
      figures: [
        {
          id: "d27-fig2",
          title: "正常 DOMS 表徵與需就醫警訊對照",
          alt: "左側教色欄位列出正常DOMS的五項表徵（兩側對稱、活動後緩解、疼痛3至6分、數天內緩解、無明顯腫脹），右側玫瑰色欄位列出五項需就醫的警訊（單側劇痛、關節無法活動、明顯腫脹變色、尿液變深、超過一週未緩解）。",
          svg: domsCompareSvg,
          caption: "分辨心法：正常DOMS多為兩側、範圍廣、越動越舒緩；出現右側任一警訊，請諮詢醫師評估。",
        },
      ],
    },
    {
      heading: "恢復策略：動起來比躺著更有效",
      body: `面對 DOMS，很多人直覺想「完全躺平休息」，但衛教觀念上，**適度活動通常比完全靜止更有幫助**。幾個常見且相對保守的恢復策略：

- **輕度活動（主動恢復）**：散步、緩和踩腳踏車等低強度活動，能促進血液循環，許多人會感覺比完全不動更舒服。
- **溫和伸展**：力道維持在 0–10 量表的 5–6 分微痠即可，不需要追求「越痛越有效」。
- **補水與營養**：足夠的水分、蛋白質與電解質，是身體修復組織的基本原料。
- **充足睡眠**：睡眠是肌肉修復的重要時間，熬夜可能延緩恢復的速度。

需要誠實補充一點：像冰敷、冷水浴這類方式，目前研究對其效果看法並不一致，可以依個人感受選擇是否使用，**不需要當作必要或保證有效的療法**。第 10–13 天學過的按、揉、推、捏與滾筒放鬆，也可以在力道保守的前提下作為輔助工具，但同樣不是治療手段，也不能取代醫療判斷。`,
      figures: [
        {
          id: "d27-fig3",
          title: "DOMS 恢復策略四象限",
          alt: "四格圖示，分別為輕度活動（走路的簡筆人形）、溫和伸展（雙手上舉的簡筆人形）、補水與營養（水瓶圖示）、充足睡眠（月亮圖示），每格皆為淺綠色圓角方框。",
          svg: domsRecoverySvg,
          caption: "四個保守且常見的恢復方向：輕度活動、溫和伸展、補水與營養、充足睡眠。",
        },
      ],
    },
    {
      heading: "個案演練：小張重訓隔天腿痠的處理",
      body: `**虛擬個案（僅供教學演練，非真實醫療紀錄）**：小張是重訓新手，第一次認真做了深蹲訓練，隔天早上起床發現兩側大腿前後側都有痠痛感，走路、上下樓梯時特別明顯，疼痛程度自評約 5 分，沒有腫脹，走一走反而覺得沒那麼緊繃。

依照今天學到的分辨心法：**兩側對稱、範圍較大、活動後略緩解、疼痛落在中等範圍**，這些表現都符合典型 DOMS，而不是急性受傷。小張可以依照下面的四步驟流程來安全地觀察與處理：先確認自己的表現符合正常 DOMS 而非警訊、接著安排低強度的動態活動與溫和伸展、同時注意補水與睡眠，最後持續觀察 48–72 小時的變化。

如果小張後續出現單側特別劇痛、關節卡住無法彎曲，或是疼痛不但沒有緩解反而持續惡化，就要跳出這個流程，回到「優先諮詢醫師」的原則。這個流程的精神不是要讓一般人自己當醫生，而是提供一套**先觀察、再決定要不要求助**的安全框架。`,
      figures: [
        {
          id: "d27-fig4",
          title: "DOMS個案處理流程四步驟",
          alt: "四個編號步驟由虛線串接：步驟1先判斷是否為DOMS或受傷、步驟2低強度動態活動與伸展、步驟3補水營養與充足睡眠、步驟4觀察48至72小時是否緩解。",
          svg: domsCaseStepsSvg,
          caption: "面對運動後痠痛，先分辨再處理：這套流程是觀察架構，不是醫療診斷，出現警訊請優先就醫。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "DOMS通常在運動後12–24小時開始出現、24–72小時左右達到高峰，約一週內緩解，並非乳酸堆積所致。",
    "正常DOMS多為兩側對稱、範圍較大、活動後略緩解、疼痛約3–6分；單側劇痛、腫脹變色、尿液變深、超過一週未緩解則屬警訊。",
    "恢復策略以輕度活動、溫和伸展、補水營養、充足睡眠為主，力道維持在5–6分微痠即可，不追求越痛越有效。",
    "個案演練示範「先判斷—低強度活動—恢復—觀察」的安全流程框架，出現警訊即應跳出流程、優先諮詢醫師。",
    "本課程僅提供觀察架構與衛教知識，不能取代醫療診斷，任何不確定的狀況都建議諮詢專業人員。",
  ],
  quiz: [
    {
      id: "d27-q1",
      question: "DOMS（延遲性肌肉痠痛）通常在運動後多久開始出現、多久達到高峰？",
      options: [
        "運動當下立即出現最痛",
        "12–24小時後開始出現，24–72小時左右達到高峰",
        "只在運動後滿一週才會出現",
        "DOMS只影響關節，不影響肌肉",
      ],
      answerIndex: 1,
      explanation:
        "DOMS通常在運動後12–24小時開始出現，24–72小時左右達到最痠痛的高峰，之後在約一週內逐漸緩解。這個時間軸是判斷「是不是典型DOMS」的重要參考，若疼痛模式明顯不同（例如運動當下就劇痛），就要考慮是否為急性受傷。",
    },
    {
      id: "d27-q2",
      question: "關於DOMS的成因，下列敘述何者較符合目前的衛教觀念？",
      options: [
        "是乳酸堆積在肌肉中造成的",
        "是肌肉纖維微小損傷後的發炎修復反應，常見於不熟悉或離心收縮較多的運動",
        "是骨頭與骨頭直接摩擦造成的",
        "與運動類型完全無關，純粹是心理作用",
      ],
      answerIndex: 1,
      explanation:
        "一般認為DOMS與肌肉纖維的微小損傷及後續發炎修復反應有關，尤其容易發生在不熟悉的動作或離心收縮較多的運動之後，例如久未重訓後的深蹲。「乳酸堆積」是常見迷思，乳酸其實在運動後不久就會代謝掉，不是延遲一兩天才痠痛的原因。",
    },
    {
      id: "d27-q3",
      question: "下列哪一項比較符合「正常DOMS」的表現？",
      options: [
        "單側劇烈腫脹，合併尿液顏色明顯變深",
        "兩側對稱、活動後略為緩解、疼痛約落在3–6分",
        "完全無法活動該關節",
        "按壓處瘀青持續擴大",
      ],
      answerIndex: 1,
      explanation:
        "正常DOMS多半是兩側對稱、範圍較大的痠痛，活動後反而會略微緩解，疼痛程度大約落在0–10量表的3–6分之間，並在數天內逐漸改善。單側劇烈腫脹、尿液變深、無法活動關節或瘀青持續擴大，都是需要提高警覺、諮詢醫師的警訊，不屬於典型DOMS。",
    },
    {
      id: "d27-q4",
      question: "小陳運動後隔天大腿痠痛，但同時出現「單側小腿突然紅腫熱痛」，最適合的處理方式是？",
      options: [
        "加強按摩患處讓循環變好",
        "先用力伸展看看會不會緩解",
        "先判斷這不符合典型DOMS，優先諮詢醫師排除其他問題",
        "完全不理會，等它自己消",
      ],
      answerIndex: 2,
      explanation:
        "單側突然紅腫熱痛不符合DOMS兩側對稱、逐漸緩解的典型表現，可能是其他需要醫療評估的狀況，不應自行按摩或用力伸展處理。這種情況應優先尋求醫師評估，才能安全排除需要進一步處理的問題。",
    },
    {
      id: "d27-q5",
      question: "關於DOMS的恢復策略，下列何者較為適當？",
      options: [
        "完全臥床靜止直到痠痛消失",
        "輕度活動、溫和伸展、補水與充足睡眠",
        "立即進行高強度重量訓練加速適應",
        "忽略身體感受，按原計畫增加訓練量",
      ],
      answerIndex: 1,
      explanation:
        "衛教經驗普遍支持輕度活動（如散步）、溫和伸展、補水與營養、充足睡眠有助於身體修復，通常比完全靜止更有幫助。持續增加高強度訓練或忽略痠痛感受，反而可能增加受傷風險，應循序漸進。",
    },
    {
      id: "d27-q6",
      question: "課程中提到，恢復期的伸展力道建議控制在0–10疼痛量表的大約幾分？",
      options: [
        "0分，完全不能有任何感覺",
        "5–6分左右的微痠感",
        "9–10分，感覺越痛效果越好",
        "沒有固定原則，越用力越好",
      ],
      answerIndex: 1,
      explanation:
        "課程中一致建議力道控制在0–10量表的5–6分左右，也就是微痠但可以接受的程度，而不是追求疼痛感越強越好。「越痛越有效」是常見迷思，過度用力反而可能造成新的傷害。",
    },
    {
      id: "d27-q7",
      question: "個案演練中，小張重訓後兩側大腿痠痛、疼痛約5分、走路會略微緩解。這個表現最符合下列哪一種情況？",
      options: [
        "典型的正常DOMS，可依恢復流程觀察",
        "一定是嚴重肌肉撕裂，需要馬上就醫手術",
        "與運動完全無關的疾病",
        "表示他運動姿勢一定是錯的",
      ],
      answerIndex: 0,
      explanation:
        "兩側對稱、程度中等、活動後略緩解，都符合典型DOMS的特徵，可以依照「先判斷—低強度活動—恢復—觀察」的流程處理即可。單一次痠痛不代表姿勢一定錯誤，也不需要過度聯想成嚴重疾病，但仍要持續觀察48–72小時的變化，若出現警訊仍須就醫。",
    },
  ],
};

export default lesson;
