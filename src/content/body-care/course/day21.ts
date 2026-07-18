import type { DayLesson } from "@/lib/content/types";

// 跌倒風險三因素交互作用示意圖。
const fallRiskFactorsSvg = `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="220" fill="#ffffff"/>
  <circle cx="110" cy="60" r="44" fill="#99f6e4" fill-opacity="0.7" stroke="#0d9488" stroke-width="2"/>
  <text x="110" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">平衡能力</text>
  <circle cx="270" cy="60" r="44" fill="#c7d2fe" fill-opacity="0.7" stroke="#4f46e5" stroke-width="2"/>
  <text x="270" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">下肢肌力</text>
  <circle cx="190" cy="130" r="44" fill="#fda4af" fill-opacity="0.7" stroke="#e11d48" stroke-width="2"/>
  <text x="190" y="126" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">環境因子</text>
  <text x="190" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">三者交互作用 → 跌倒風險</text>
</svg>`;

// 坐站測試觀察三步驟（操作步驟圖）。
const sitStandStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">坐穩椅子</text>
    <text x="70" y="108" font-size="12" fill="#64748b">雙手交叉胸前</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">緩慢起立坐下</text>
    <text x="210" y="108" font-size="12" fill="#64748b">全程有人在旁陪同</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">觀察穩定度</text>
    <text x="350" y="108" font-size="12" fill="#64748b">有無晃動、扶物</text>
  </g>
</svg>`;

// 坐站測試姿勢示意圖（起立與坐下對照，強調安全扶持；填色人形輪廓，取代原本的抽象線條人形）。
const sitStandPostureSvg = `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="260" fill="#ffffff"/>
  <text x="95" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">坐姿起始</text>
  <rect x="60" y="150" width="70" height="10" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="65" y1="160" x2="65" y2="190" stroke="#94a3b8" stroke-width="4"/>
  <line x1="125" y1="160" x2="125" y2="190" stroke="#94a3b8" stroke-width="4"/>
  <ellipse cx="95" cy="90" rx="14" ry="17" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <rect x="88" y="105" width="14" height="8" rx="3" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <path d="M78 113 C74 126 78 140 86 148 L104 148 C112 140 116 126 112 113 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="126" x2="110" y2="134" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
  <line x1="110" y1="126" x2="80" y2="134" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
  <line x1="88" y1="148" x2="72" y2="155" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
  <line x1="104" y1="148" x2="118" y2="155" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
  <line x1="72" y1="155" x2="70" y2="190" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <line x1="118" y1="155" x2="120" y2="190" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="68" cy="196" rx="9" ry="5" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="122" cy="196" rx="9" ry="5" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>

  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">緩慢站起</text>
  <rect x="245" y="150" width="70" height="10" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="280" cy="58" rx="14" ry="17" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <rect x="273" y="73" width="14" height="8" rx="3" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <path d="M263 81 C258 100 262 122 270 134 L290 134 C298 122 302 100 297 81 Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <line x1="263" y1="100" x2="248" y2="140" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="297" y1="100" x2="305" y2="138" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="270" y1="134" x2="266" y2="196" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <line x1="290" y1="134" x2="294" y2="196" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="264" cy="202" rx="9" ry="5" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="296" cy="202" rx="9" ry="5" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <!-- 旁人扶持提示（文字寬度已收在 viewBox 內，避免截字） -->
  <line x1="330" y1="110" x2="308" y2="130" stroke="#4f46e5" stroke-width="3" stroke-linecap="round"/>
  <text x="308" y="100" text-anchor="start" font-size="10" fill="#4f46e5">建議旁人陪同</text>
  <text x="190" y="245" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：全程動作應緩慢、可控，旁邊建議有穩固扶手或家人陪同</text>
</svg>`;

// 居家安全檢查清單示意圖（六個常見風險點）。
const homeSafetySvg = `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="300" fill="#ffffff"/>
  <rect x="20" y="20" width="380" height="260" rx="8" fill="none" stroke="#cbd5e1" stroke-width="2"/>
  <!-- 走道地墊 -->
  <rect x="40" y="40" width="80" height="14" rx="3" fill="#fda4af" stroke="#e11d48" stroke-width="1.5"/>
  <text x="130" y="52" font-size="11" fill="#334155">鬆動地墊／電線</text>
  <!-- 浴室防滑 -->
  <rect x="40" y="80" width="60" height="40" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="70" cy="100" r="4" fill="#fda4af"/>
  <text x="130" y="104" font-size="11" fill="#334155">浴室未鋪防滑墊</text>
  <!-- 燈光 -->
  <circle cx="60" cy="150" r="10" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="130" y="154" font-size="11" fill="#334155">走道／樓梯照明不足</text>
  <!-- 樓梯扶手 -->
  <line x1="40" y1="220" x2="90" y2="180" stroke="#94a3b8" stroke-width="4"/>
  <line x1="40" y1="220" x2="40" y2="180" stroke="#94a3b8" stroke-width="4"/>
  <text x="130" y="204" font-size="11" fill="#334155">樓梯無扶手或鬆動</text>
  <!-- 雜物 -->
  <rect x="40" y="240" width="20" height="16" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
  <rect x="65" y="244" width="16" height="12" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
  <text x="130" y="254" font-size="11" fill="#334155">地面雜物、電線散落</text>
  <!-- 高處物品 -->
  <rect x="300" y="60" width="60" height="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="310" y="45" width="16" height="14" fill="#fda4af" stroke="#e11d48" stroke-width="1"/>
  <text x="270" y="90" font-size="11" fill="#334155">常用物品放太高</text>
  <text x="270" y="104" font-size="11" fill="#334155">需要墊腳／爬梯</text>
  <text x="210" y="270" text-anchor="middle" font-size="11" fill="#94a3b8">示意圖：紅色標示較高風險點，逐項檢查與改善</text>
</svg>`;

// 應諮詢專業人員的警示清單。
const warningSignsSvg = `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="200" fill="#ffffff"/>
  <path d="M30 30 L46 4 L62 30 Z" fill="#fde68a" stroke="#d97706" stroke-width="2" stroke-linejoin="round"/>
  <text x="46" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#d97706">!</text>
  <text x="90" y="20" font-size="13" font-weight="bold" fill="#0f172a">出現以下任一情況，請諮詢醫師或物理治療師：</text>
  <g font-size="12" fill="#334155">
    <circle cx="40" cy="55" r="4" fill="#e11d48"/>
    <text x="55" y="59">已經發生過跌倒（不論是否受傷）</text>
    <circle cx="40" cy="82" r="4" fill="#e11d48"/>
    <text x="55" y="86">步態明顯不穩、頻繁扶牆，或近期步態改變</text>
    <circle cx="40" cy="109" r="4" fill="#e11d48"/>
    <text x="55" y="113">合併頭暈、視力模糊、姿勢性低血壓</text>
    <circle cx="40" cy="136" r="4" fill="#e11d48"/>
    <text x="55" y="140">正在服用多種藥物</text>
    <circle cx="40" cy="163" r="4" fill="#e11d48"/>
    <text x="55" y="167">坐站觀察中發現明顯起身困難或晃動</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 21,
  phase: "W3",
  title: "長者防跌倒基礎評估與居家安全",
  minutes: 16,
  goal: "認識跌倒風險的初步觀察方式（如坐站測試概念）與常見居家環境危險因子，建立一份可實際使用的居家安全檢查清單。",
  sections: [
    {
      heading: "跌倒為什麼值得認真看待",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

第三週的最後一天，我們從功能性評估與體態解析，轉向一個對長者格外重要的主題：**跌倒預防**。跌倒是長者常見的意外傷害原因之一，且往往不是單一原因造成，而是**平衡能力、下肢肌力、環境因子**三者交互作用的結果。今天的重點是提供**初步的觀察方法**與**居家安全檢查清單**，幫助家人一起留意風險，而不是要教大家自行做醫療等級的跌倒風險評估。

先說明一個重要原則：**今天教的觀察方法只是初步的自我／家庭觀察工具**，目的是幫助發現「可能需要進一步關注」的訊號，**不能用來判斷是否有跌倒風險、更不能取代專業評估**。若長者本身已有跌倒病史、步態不穩、頭暈等狀況，應直接諮詢醫師或物理治療師，安排正式的跌倒風險評估，不要僅依賴今天課程的內容自行判斷。`,
      figures: [
        {
          id: "d21-fig1",
          title: "跌倒風險的三個交互因素",
          alt: "三個部分重疊的圓形示意圖，分別標示平衡能力、下肢肌力、環境因子，說明三者交互作用共同影響跌倒風險。",
          svg: fallRiskFactorsSvg,
          caption: "跌倒往往不是單一原因造成，今天的觀察方法與居家清單分別對應身體功能與環境這兩個可介入的面向。",
        },
      ],
    },
    {
      heading: "坐站動作：一個簡單的觀察切入點",
      body: `**坐站測試（sit-to-stand）**的概念，在物理治療與老年醫學領域常被用來初步觀察下肢肌力與平衡協調，做法簡單、不需要器材，這裡以**觀察用途**簡化說明，**不提供任何分數判讀或年齡對照標準**——若需要正式的量化評估，應由專業人員操作與判讀。

**觀察方式**：
1. 長者坐在有穩固椅背、無滾輪的椅子上，雙手可交叉輕放胸前（或依平常習慣扶著扶手）。
2. 在**家人陪同、旁邊有穩固扶手可用**的前提下，緩慢站起、再緩慢坐下，動作全程自然、不求快。
3. 家人在旁觀察：起身過程是否需要用力撐扶手才能起身、身體是否明顯晃動、坐下時是否「用摔的」而非緩慢控制。

**這些觀察線索代表什麼**：如果起身明顯吃力、需要多次嘗試、或站起後有明顯搖晃，這些都是值得**提高警覺、進一步諮詢專業人員**的訊號，但**不代表可以自行判定跌倒風險高低**，正式的評估需要專業人員以標準化方式進行。今天的重點是培養家人**日常觀察的敏感度**，而不是取代醫療評估。`,
      figures: [
        {
          id: "d21-fig2",
          title: "坐站觀察三步驟",
          alt: "三個編號步驟：步驟一坐穩椅子雙手交叉胸前，步驟二在旁人陪同下緩慢起立坐下，步驟三觀察起身與坐下過程是否晃動或需要扶物。",
          svg: sitStandStepsSvg,
          caption: "此為初步觀察流程，非正式醫療評估工具；全程應有人陪同，優先確保安全。",
        },
        {
          id: "d21-fig3",
          title: "坐站動作示意與安全提醒",
          alt: "示意圖顯示坐姿起始與緩慢站起兩個階段的姿勢，並標註建議旁邊有家人陪同或穩固扶手可用。",
          svg: sitStandPostureSvg,
          caption: "動作應緩慢、可控，旁邊建議有穩固扶手或家人陪同，避免獨自嘗試造成跌倒風險。",
        },
      ],
    },
    {
      heading: "居家安全檢查清單：環境往往是最容易改善的一環",
      body: `跌倒風險中，**居家環境因子**是相對容易改善、投資報酬率最高的一塊，不需要專業評估就能動手處理。以下清單可作為居家巡檢的參考：

| 區域 | 檢查重點 |
| --- | --- |
| 走道／地面 | 移除鬆動地墊、散落電線；地面保持乾燥、淨空雜物 |
| 照明 | 走道、樓梯、廁所夜間照明是否充足，可考慮加裝小夜燈 |
| 樓梯 | 兩側是否有穩固扶手、階梯邊緣是否有防滑貼條或明顯標示 |
| 浴室 | 是否鋪設防滑墊、馬桶與淋浴間是否有扶手 |
| 收納 | 常用物品是否放在容易取得的高度，避免墊腳或爬梯取物 |
| 家具 | 椅子、床鋪高度是否適合起身坐下，是否有穩固扶手可支撐 |

**改善原則**：優先處理**最常經過、最常在夜間使用**的路線（例如臥室到廁所），因為夜間起身如廁是跌倒的高風險情境之一。改善不需要一次到位，可以先從花費最低、效果最直接的項目開始（如移除地墊、加裝夜燈），再逐步規劃扶手等較大的環境改造。`,
      figures: [
        {
          id: "d21-fig4",
          title: "居家安全六個常見風險點檢查",
          alt: "居家平面示意圖標出六個常見跌倒風險點：鬆動地墊或電線、浴室未鋪防滑墊、走道樓梯照明不足、樓梯無扶手或鬆動、地面雜物散落、常用物品放置過高。",
          svg: homeSafetySvg,
          caption: "示意圖：紅色標示風險較高的項目，建議搭配上方清單逐區域檢查與改善。",
        },
      ],
    },
    {
      heading: "什麼時候該尋求專業協助",
      body: `今天的觀察方法與清單，目的是建立**日常留意的習慣**，但有些情況已經超出居家自我照護能處理的範圍，務必尋求專業協助：

- **已經發生過跌倒**，不論是否受傷，都建議諮詢醫師，了解可能原因並安排正式評估。
- **步態明顯不穩、走路需要頻繁扶牆**，或近期步態出現明顯變化。
- **合併頭暈、視力模糊、姿勢性低血壓**（站起時眼前發黑）等症狀。
- **正在服用多種藥物**，部分藥物可能影響平衡感或反應速度，可請教藥師或醫師是否與跌倒風險有關。
- 使用今天的坐站觀察方式時，發現**明顯的起身困難或身體晃動**。

跌倒預防是一個需要**醫師、物理治療師、職能治療師等專業團隊共同評估**的議題，居家觀察與環境改善是重要的輔助，但不能取代專業的跌倒風險評估與介入計畫。今天的內容希望能幫助家人建立警覺與行動的起點，而不是自行下結論的終點。`,
      figures: [
        {
          id: "d21-fig5",
          title: "應諮詢專業人員的警示清單",
          alt: "警示清單示意圖，列出五項應諮詢醫師或物理治療師的情況：已發生過跌倒、步態明顯不穩或近期改變、合併頭暈視力模糊或姿勢性低血壓、服用多種藥物、坐站觀察中發現明顯起身困難或晃動。",
          svg: warningSignsSvg,
          caption: "出現清單中任一情況，代表已超出居家自我觀察能處理的範圍，應尋求專業協助。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "跌倒是平衡能力、下肢肌力、環境因子交互作用的結果，今天提供的是初步觀察工具，不是正式評估。",
    "坐站觀察需在家人陪同、有穩固扶手可用的前提下緩慢進行，重點是觀察是否吃力、晃動，不做分數判讀。",
    "居家安全檢查涵蓋走道、照明、樓梯、浴室、收納、家具六大重點，優先改善最常夜間使用的路線。",
    "已跌倒過、步態明顯不穩、合併頭暈或姿勢性低血壓、服用多種藥物者，應諮詢醫師安排正式評估。",
    "居家觀察與環境改善是輔助措施，不能取代醫師、物理治療師等專業團隊的跌倒風險評估。",
  ],
  quiz: [
    {
      id: "d21-q1",
      question: "課程中提到，跌倒風險通常是哪些因素交互作用的結果？",
      options: [
        "只與年齡有關，其他因素不重要",
        "平衡能力、下肢肌力、環境因子",
        "只與居家環境有關，與身體狀況無關",
        "只與服用藥物種類有關",
      ],
      answerIndex: 1,
      explanation:
        "課程說明跌倒往往不是單一原因造成，而是平衡能力、下肢肌力、環境因子三者交互作用的結果，因此今天的內容同時涵蓋身體功能的初步觀察方法（坐站觀察）與居家環境安全檢查兩個面向。",
    },
    {
      id: "d21-q2",
      question: "關於今天教的坐站觀察方法，下列敘述何者正確？",
      options: [
        "可以用來精確判定長者的跌倒風險等級",
        "是初步的自我／家庭觀察工具，不能取代專業評估",
        "只要能完成動作就代表完全沒有跌倒風險",
        "應該獨自進行，不需要旁人陪同",
      ],
      answerIndex: 1,
      explanation:
        "課程明確強調坐站觀察只是初步的自我／家庭觀察工具，用來發現可能需要進一步關注的訊號，不提供分數判讀或風險等級判定，也不能取代專業評估；動作應在家人陪同、有穩固扶手可用的前提下進行，不建議獨自嘗試。",
    },
    {
      id: "d21-q3",
      question: "進行坐站觀察時，課程建議的安全前提是什麼？",
      options: [
        "動作要盡量快速完成，越快越好",
        "在家人陪同、旁邊有穩固扶手可用的前提下緩慢進行",
        "不需要任何人在旁，獨自完成即可",
        "應該直接使用有滾輪的椅子進行",
      ],
      answerIndex: 1,
      explanation:
        "課程明確要求在家人陪同、旁邊有穩固扶手可用的前提下，緩慢站起、緩慢坐下，動作全程自然不求快，並使用有穩固椅背、無滾輪的椅子，優先確保安全，避免觀察過程中反而造成跌倒。",
    },
    {
      id: "d21-q4",
      question: "居家安全檢查清單中，課程建議優先改善哪類路線？",
      options: [
        "最少使用、平常很少經過的房間",
        "最常經過、最常在夜間使用的路線，例如臥室到廁所",
        "只需要改善客廳的裝潢即可",
        "不需要分優先順序，隨意改善即可",
      ],
      answerIndex: 1,
      explanation:
        "課程建議優先處理最常經過、最常在夜間使用的路線，例如臥室到廁所的動線，因為夜間起身如廁是跌倒的高風險情境之一，改善這類路線的環境安全性投資報酬率最高。",
    },
    {
      id: "d21-q5",
      question: "下列哪一種情況，課程建議應該諮詢醫師安排正式評估，而非僅依賴居家觀察？",
      options: [
        "長者近期步態明顯改變、合併頭暈或姿勢性低血壓",
        "長者走路完全穩定、沒有任何不適",
        "居家已完成所有環境安全改善",
        "長者只是偶爾覺得房間光線稍暗",
      ],
      answerIndex: 0,
      explanation:
        "課程列出多項應尋求專業協助的情況，包括已跌倒過、步態明顯不穩或近期變化、合併頭暈或姿勢性低血壓、服用多種藥物、坐站觀察中發現明顯起身困難或晃動等，這些都已超出居家自我照護能處理的範圍。",
    },
    {
      id: "d21-q6",
      question: "居家安全檢查清單中，浴室的檢查重點包含哪些？",
      options: [
        "是否鋪設防滑墊、馬桶與淋浴間是否有扶手",
        "牆壁油漆顏色是否好看",
        "浴室鏡子的尺寸大小",
        "毛巾的材質與顏色",
      ],
      answerIndex: 0,
      explanation:
        "浴室是居家跌倒高風險區域之一，課程清單中列出的檢查重點是是否鋪設防滑墊、馬桶與淋浴間是否有扶手，這些都是與跌倒風險直接相關的環境因子，而非裝潢美觀等無關項目。",
    },
    {
      id: "d21-q7",
      question: "課程對今天內容的整體定位，下列敘述何者正確？",
      options: [
        "居家觀察與環境改善可以完全取代專業的跌倒風險評估",
        "居家觀察與環境改善是輔助措施，跌倒預防仍需醫師、物理治療師等專業團隊共同評估",
        "只要完成今天的檢查清單，長者就不會再跌倒",
        "跌倒預防與居家環境完全無關，只與身體狀況有關",
      ],
      answerIndex: 1,
      explanation:
        "課程最後明確定位：居家觀察與環境改善是重要的輔助措施，能幫助家人建立警覺與行動的起點，但跌倒預防是需要醫師、物理治療師、職能治療師等專業團隊共同評估的議題，不能只靠今天的內容自行下結論或取代正式評估。",
    },
  ],
};

export default lesson;
