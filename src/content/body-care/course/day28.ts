import type { DayLesson } from "@/lib/content/types";

// 長者運動處方四原則：低衝擊、規律漸進、坐姿優先、量力而為。
const elderPrincipleSvg = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="220" fill="#ffffff"/>
  <g>
    <rect x="14" y="14" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <circle cx="46" cy="60" r="14" fill="none" stroke="#0d9488" stroke-width="3"/>
    <line x1="36" y1="70" x2="56" y2="50" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <text x="80" y="52" font-size="12" font-weight="bold" fill="#0f172a">低衝擊</text>
    <text x="80" y="68" font-size="10" fill="#64748b">避免跳躍、急停</text>
  </g>
  <g>
    <rect x="218" y="14" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <path d="M234 68 q16 -30 32 0 q16 -30 32 0" fill="none" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
    <text x="284" y="52" font-size="12" font-weight="bold" fill="#0f172a">規律漸進</text>
    <text x="284" y="68" font-size="10" fill="#64748b">少量多次、慢慢加量</text>
  </g>
  <g>
    <rect x="14" y="116" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <rect x="34" y="168" width="26" height="6" rx="2" fill="#334155"/>
    <line x1="38" y1="168" x2="38" y2="150" stroke="#334155" stroke-width="3"/>
    <line x1="56" y1="168" x2="56" y2="150" stroke="#334155" stroke-width="3"/>
    <rect x="30" y="140" width="30" height="12" rx="3" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
    <circle cx="45" cy="130" r="7" fill="#0d9488"/>
    <text x="80" y="152" font-size="12" font-weight="bold" fill="#0f172a">坐姿優先</text>
    <text x="80" y="168" font-size="10" fill="#64748b">椅子作為安全支撐</text>
  </g>
  <g>
    <rect x="218" y="116" width="188" height="92" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <text x="240" y="162" font-size="22" font-weight="bold" fill="#0d9488">5–6</text>
    <text x="284" y="152" font-size="12" font-weight="bold" fill="#0f172a">量力而為</text>
    <text x="284" y="168" font-size="10" fill="#64748b">0–10分微痠即可</text>
  </g>
</svg>`;

// 椅子瑜珈兩個座姿範例（抬手伸展、溫和轉體）：自繪擬真人形（填色身形＋圓潤關節，參考 day06 手法），
// 取代原本僅頭圈＋線條的抽象簡圖。
const chairYogaSvg = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="240" fill="#ffffff"/>
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">姿勢A：座姿抬手伸展</text>
  <rect x="60" y="150" width="90" height="10" rx="2" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <line x1="66" y1="160" x2="66" y2="210" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="144" y1="160" x2="144" y2="210" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="66" y1="150" x2="66" y2="108" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <rect x="90" y="150" width="10" height="55" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="110" y="150" width="10" height="55" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="88" cy="210" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="122" cy="210" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M85 100 L125 100 L118 150 L92 150 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="105" cy="78" rx="14" ry="16" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
  <rect x="99" y="92" width="12" height="8" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <line x1="88" y1="106" x2="76" y2="62" stroke="#0d9488" stroke-width="5" stroke-linecap="round"/>
  <line x1="122" y1="106" x2="134" y2="62" stroke="#0d9488" stroke-width="5" stroke-linecap="round"/>
  <circle cx="76" cy="58" r="5" fill="#0d9488"/>
  <circle cx="134" cy="58" r="5" fill="#0d9488"/>
  <text x="105" y="228" text-anchor="middle" font-size="10" fill="#64748b">雙手緩慢舉高，感受側腰伸展</text>
  <text x="315" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">姿勢B：座姿溫和轉體</text>
  <rect x="270" y="150" width="90" height="10" rx="2" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <line x1="276" y1="160" x2="276" y2="210" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="354" y1="160" x2="354" y2="210" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="354" y1="150" x2="354" y2="108" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <rect x="300" y="150" width="10" height="55" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="320" y="150" width="10" height="55" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="298" cy="210" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="332" cy="210" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M293 100 L335 100 L328 150 L302 150 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="320" cy="78" rx="14" ry="16" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
  <rect x="314" y="92" width="12" height="8" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <line x1="330" y1="106" x2="352" y2="130" stroke="#0d9488" stroke-width="5" stroke-linecap="round"/>
  <line x1="298" y1="108" x2="285" y2="140" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <circle cx="352" cy="132" r="5" fill="#0d9488"/>
  <circle cx="284" cy="142" r="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="315" y="228" text-anchor="middle" font-size="10" fill="#64748b">扶椅背緩慢轉體，眼睛跟著轉</text>
</svg>`;

// 彈力帶座姿划船示意圖：自繪擬真人形（填色身形＋圓潤關節），取代原本抽象簡圖。
const bandTrainingSvg = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="240" fill="#ffffff"/>
  <text x="210" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">彈力帶座姿划船（示意）</text>
  <rect x="150" y="150" width="90" height="10" rx="2" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <line x1="156" y1="160" x2="156" y2="210" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="234" y1="160" x2="234" y2="210" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="156" y1="150" x2="156" y2="108" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <rect x="180" y="150" width="10" height="55" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="200" y="150" width="10" height="55" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="178" cy="210" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="202" cy="210" rx="10" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M173 100 L217 100 L210 150 L180 150 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="195" cy="78" rx="14" ry="16" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
  <rect x="189" y="92" width="12" height="8" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <path d="M178 210 Q110 200 150 125" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round"/>
  <path d="M178 210 Q110 220 150 145" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round"/>
  <line x1="180" y1="106" x2="150" y2="125" stroke="#0d9488" stroke-width="5" stroke-linecap="round"/>
  <line x1="210" y1="106" x2="150" y2="145" stroke="#0d9488" stroke-width="5" stroke-linecap="round"/>
  <circle cx="150" cy="125" r="5" fill="#0d9488"/>
  <circle cx="150" cy="145" r="5" fill="#0d9488"/>
  <text x="90" y="90" font-size="10" fill="#4f46e5">彈力帶</text>
  <text x="210" y="228" text-anchor="middle" font-size="10" fill="#64748b">腳踩固定一端，雙手緩慢拉向身體再放回</text>
</svg>`;

// 一次完整練習的四步驟流程（操作步驟圖）。
const elderSessionStepsSvg = `<svg viewBox="0 0 472 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="472" height="170" fill="#ffffff"/>
  <line x1="60" y1="48" x2="398" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="60" cy="48" r="22" fill="#0d9488"/>
    <text x="60" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="60" y="92" font-size="11" fill="#0f172a">熱身</text>
    <text x="60" y="106" font-size="11" fill="#0f172a">關節緩慢活動</text>
    <circle cx="180" cy="48" r="22" fill="#0d9488"/>
    <text x="180" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="180" y="92" font-size="11" fill="#0f172a">椅子瑜珈</text>
    <text x="180" y="106" font-size="11" fill="#0f172a">座姿伸展</text>
    <circle cx="300" cy="48" r="22" fill="#0d9488"/>
    <text x="300" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="300" y="92" font-size="11" fill="#0f172a">彈力帶</text>
    <text x="300" y="106" font-size="11" fill="#0f172a">輕度阻力訓練</text>
    <circle cx="420" cy="48" r="22" fill="#0d9488"/>
    <text x="420" y="54" font-size="18" font-weight="bold" fill="#ffffff">4</text>
    <text x="420" y="92" font-size="11" fill="#0f172a">收操</text>
    <text x="420" y="106" font-size="11" fill="#0f172a">觀察身體反應</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 28,
  phase: "W4",
  title: "長者專屬運動處方：椅子瑜珈與彈力帶輕訓",
  minutes: 17,
  goal: "認識長者運動處方應遵循的安全原則，學會椅子瑜珈與彈力帶輕訓的基本操作方式，建立規律且低衝擊的活動習慣。",
  sections: [
    {
      heading: "為什麼長者需要「量身訂做」的運動處方",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

第 22 天我們學過 FITT 原則（Frequency頻率、Intensity強度、Time時間、Type類型），今天要把這套架構套用到長者身上，並理解為什麼**不能直接搬用一般成人的運動處方**。老化過程中，平衡能力、骨密度、關節活動度都可能出現變化，若直接套用高強度、高衝擊的訓練方式，跌倒與受傷的風險會明顯提高。

因此，長者運動處方通常會朝幾個方向調整：**強度更保守**（力道與費力程度都往下修）、**衝擊更低**（避免跳躍、急停、快速變換方向）、**坐姿優先**（用椅子提供穩定支撐）、**頻率規律但漸進**（少量多次，慢慢增加，而不是一次做到極限）。這些原則不是要限制長者活動，而是用更安全的方式，持續累積規律運動帶來的好處。

在開始任何新的運動習慣之前，尤其若長者本身有慢性病、近期跌倒史或不確定身體狀況，建議**先諮詢醫師或物理治療師**，確認適合的強度與禁忌，再依循今天介紹的椅子瑜珈與彈力帶輕訓來安排。`,
      figures: [
        {
          id: "d28-fig1",
          title: "長者運動處方四原則",
          alt: "四格圖示，分別為低衝擊（避免跳躍急停的圖示）、規律漸進（波浪漸增的曲線）、坐姿優先（椅子與座姿人形圖示）、量力而為（標示5至6分的圖示），每格皆為淺綠色圓角方框。",
          svg: elderPrincipleSvg,
          caption: "長者運動處方四原則：低衝擊、規律漸進、坐姿優先、量力而為（0–10量表約5–6分微痠）。",
        },
      ],
    },
    {
      heading: "椅子瑜珈：坐姿伸展的安全示範",
      body: `**椅子瑜珈**是把常見的伸展動作改成坐在椅子上進行，椅子在這裡扮演的是**安全支撐**的角色——讓長者在伸展、轉體時有穩固的依靠，降低失去平衡跌倒的風險，而不是為了增加難度。這也呼應了「坐姿優先」的原則：先在穩定的基礎上練習活動度，之後有餘力再考慮站姿動作。

兩個常見的入門動作：**座姿抬手伸展**，雙手緩慢舉高過頭，感受側腰與肩膀周圍的伸展；**座姿溫和轉體**，一手扶著椅背，上半身緩慢地向一側轉動，眼睛跟著轉動方向看，再回正換邊。動作過程中要留意呼吸自然、不憋氣，力道維持在 0–10 量表的 **5–6 分微痠**即可，不需要追求最大角度或劇烈的伸展感。

進行時如果座椅不夠穩固（例如有輪子的椅子），應該換成穩固的椅子再進行；動作中若感覺明顯疼痛、頭暈或不適，應立即停下休息，這個原則會在第 29 天的警訊清單中有更完整的說明。`,
      figures: [
        {
          id: "d28-fig2",
          title: "椅子瑜珈兩個座姿示範",
          alt: "左側為座姿抬手伸展：坐在椅子上的簡筆人形雙手舉高過頭；右側為座姿溫和轉體：坐在椅子上的簡筆人形上半身轉向一側，一手扶著椅背。",
          svg: chairYogaSvg,
          caption: "椅子作為安全支撐，讓伸展與轉體在穩定的基礎上進行，力道維持微痠即可。",
        },
      ],
    },
    {
      heading: "彈力帶輕訓：漸進阻力的入門工具",
      body: `除了伸展活動度，適度的**阻力訓練**能幫助維持肌力，對長者的日常功能（例如起身、上下樓梯）很有幫助，這也呼應第 24 天談過的「肌力與關節穩定」概念。相較於啞鈴等重量訓練工具，**彈力帶**對長者相對友善：阻力可以透過**顏色或拉伸長度**來調整、對關節的衝擊也相對較小，很適合作為阻力訓練的入門工具。

一個簡單的入門動作是**座姿划船**：坐在穩固的椅子上，雙腳踩住彈力帶的一端固定，雙手抓住另一端，緩慢地將彈力帶拉向身體、再緩慢放回，過程中保持動作平穩、不使用甩動的力量。

使用彈力帶時，安全原則比動作本身更重要：**固定端要牢固**（避免鬆脫）、**動作要緩慢可控**（避免彈力帶突然回彈打到自己）、**坐姿比站姿穩定**、**不要將彈力帶套在頸部**等不適合的部位。阻力選擇上也建議從較輕的顏色開始，感覺輕鬆後再考慮循序漸進地增加。`,
      figures: [
        {
          id: "d28-fig3",
          title: "彈力帶座姿划船示意",
          alt: "坐在椅子上的簡筆人形，雙腳踩住彈力帶一端固定，雙手抓住另一端往身體方向拉，彈力帶以靛色線條示意。",
          svg: bandTrainingSvg,
          caption: "座姿划船示意：固定端要牢固、動作要緩慢可控，避免彈力帶突然回彈。",
        },
      ],
    },
    {
      heading: "一次完整練習的規律安排",
      body: `一次完整的長者運動練習，建議依循固定的流程順序，而不是直接跳進主要訓練：先以**關節緩慢活動**熱身（例如轉動手腕、腳踝、肩膀），接著進行**椅子瑜珈**與**彈力帶輕訓**作為主要內容，最後以**收操與觀察身體反應**作結，讓心跳與呼吸緩和下來。

頻率安排上，可以參考第 22 天的 FITT 原則做保守調整：例如每週安排 2–3 次、每次涵蓋伸展與輕度阻力兩種類型，避免同一肌群連續高頻率訓練。重點是**規律持續**比單次強度更重要，慢慢累積才會看到活動度與肌力的改善。

練習過程中若出現**頭暈、胸悶、冒冷汗、明顯胸痛或不成比例的關節疼痛**，應該立即停止動作、讓長者充分休息，並視情況尋求醫療協助——這些警訊與更完整的禁忌症清單，會在第 29 天做系統性的整理，今天先建立「規律但保守、有警訊就停」的基本態度。`,
      figures: [
        {
          id: "d28-fig4",
          title: "一次完整練習的四步驟",
          alt: "四個編號步驟由虛線串接：步驟1熱身、關節緩慢活動；步驟2椅子瑜珈、座姿伸展；步驟3彈力帶、輕度阻力訓練；步驟4收操、觀察身體反應。",
          svg: elderSessionStepsSvg,
          caption: "固定的流程順序：熱身→椅子瑜珈→彈力帶輕訓→收操與觀察，出現不適立即停止。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "長者運動處方需在FITT架構上更保守調整：強度更低、衝擊更小、坐姿優先、頻率規律但漸進。",
    "椅子瑜珈用椅子提供安全支撐，力道維持0–10量表5–6分微痠，動作過程呼吸自然、不憋氣。",
    "彈力帶阻力可調整、對關節衝擊較小，適合作為長者阻力訓練入門工具，但固定端要牢固、動作要緩慢可控。",
    "一次完整練習建議依熱身、椅子瑜珈、彈力帶輕訓、收操的固定順序進行，規律持續比單次強度更重要。",
    "出現頭暈、胸悶、冒冷汗或不成比例的疼痛應立即停止並視情況就醫，完整警訊清單見第29天。",
  ],
  quiz: [
    {
      id: "d28-q1",
      question: "為什麼長者的運動處方需要特別調整，而不是直接套用一般成人的運動處方？",
      options: [
        "因為長者完全不需要運動",
        "因為老化可能伴隨平衡、骨密度與關節活動度的變化，需要更低衝擊與更保守的強度",
        "因為長者的肌肉不會有適應現象",
        "因為長者運動處方不需要考慮頻率",
      ],
      answerIndex: 1,
      explanation:
        "老化過程中平衡能力、骨密度與關節活動度可能出現變化，直接套用一般成人的高強度處方，跌倒與受傷風險會提高。因此長者運動處方通常會採用更低衝擊、更保守的強度與坐姿優先的設計，同時仍遵循規律漸進的原則。",
    },
    {
      id: "d28-q2",
      question: "椅子瑜珈使用椅子的主要目的是什麼？",
      options: [
        "增加動作難度與訓練強度",
        "提供穩定支撐，降低跌倒與失去平衡的風險",
        "讓動作看起來更好看",
        "完全取代所有站立動作，之後都不用站立",
      ],
      answerIndex: 1,
      explanation:
        "椅子在椅子瑜珈中主要扮演「安全支撐」的角色，讓長者在伸展與轉體時有穩固的依靠，降低失去平衡跌倒的風險。這不是為了增加難度，而是用坐姿優先的方式，讓活動度訓練可以在安全前提下進行。",
    },
    {
      id: "d28-q3",
      question: "進行椅子瑜珈時，力道與伸展程度的建議原則是？",
      options: [
        "伸展到感覺劇痛才算有效果",
        "完全不能有任何感覺才安全",
        "維持在微痠、約0–10量表5–6分的舒適伸展範圍",
        "每次都要伸展到最大活動角度",
      ],
      answerIndex: 2,
      explanation:
        "課程建議的力道原則是維持在微痠、大約落在0–10疼痛量表5–6分的舒適伸展範圍，而不是追求劇痛或最大角度。長者的組織彈性與感覺回饋可能與年輕人不同，過度伸展反而增加受傷風險。",
    },
    {
      id: "d28-q4",
      question: "彈力帶相較於啞鈴等重量訓練工具，對長者較友善的原因是？",
      options: [
        "彈力帶完全沒有阻力",
        "阻力可透過顏色、拉伸長度調整，且對關節的衝擊相對較小",
        "彈力帶比啞鈴更難控制，訓練效果一定更好",
        "彈力帶只能用來伸展，不能用於阻力訓練",
      ],
      answerIndex: 1,
      explanation:
        "彈力帶的阻力可以透過選擇不同顏色（阻力等級）或調整拉伸長度來漸進調整，操作上對關節的衝擊也相對較小，適合作為長者阻力訓練的入門工具。這不代表完全沒有阻力，而是阻力來源與強度控制方式與啞鈴不同。",
    },
    {
      id: "d28-q5",
      question: "使用彈力帶時，下列哪一項安全原則最重要？",
      options: [
        "盡量選擇最粗、阻力最大的彈力帶",
        "固定端要牢固、動作緩慢可控，避免彈力帶突然回彈",
        "站著做比坐著做更安全",
        "彈力帶可以隨意套在頸部進行訓練",
      ],
      answerIndex: 1,
      explanation:
        "彈力帶訓練最重要的安全原則是固定端要牢固、動作要緩慢可控，避免彈力帶突然鬆脫或回彈造成意外。對長者而言，坐姿通常比站姿更穩定，也應避免將彈力帶套在頸部等不適合的部位。",
    },
    {
      id: "d28-q6",
      question: "一次完整的長者運動練習，建議的基本流程順序是？",
      options: [
        "直接進行彈力帶訓練，不需要熱身與收操",
        "熱身、椅子瑜珈、彈力帶輕訓、收操與觀察",
        "收操在最前面，熱身在最後面",
        "只需要熱身，不需要任何主要訓練內容",
      ],
      answerIndex: 1,
      explanation:
        "建議的流程是先以關節緩慢活動熱身，接著進行椅子瑜珈與彈力帶輕訓的主要內容，最後以收操與觀察身體反應作結，這樣的順序有助於降低運動傷害風險。跳過熱身或收操，對長者來說風險相對較高。",
    },
    {
      id: "d28-q7",
      question: "練習過程中若長者出現頭暈、胸悶等不適，應該怎麼做？",
      options: [
        "鼓勵他忍耐撐完整套動作",
        "立即停止動作、讓長者休息，必要時尋求醫療協助",
        "加快動作節奏轉移注意力",
        "完全不理會，繼續照表操課",
      ],
      answerIndex: 1,
      explanation:
        "頭暈、胸悶等不適是需要提高警覺的訊號，應立即停止當下動作、讓長者充分休息，並視情況尋求醫療協助，這個原則會在第29天的警訊清單中進一步詳細說明。忍耐撐完動作或忽略不適，都可能讓風險提高。",
    },
  ],
};

export default lesson;
