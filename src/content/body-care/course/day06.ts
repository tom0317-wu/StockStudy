import type { DayLesson } from "@/lib/content/types";

// 耳肩髖踝一直線：真實公有領域側面中立站姿照片（Wikimedia Commons，美國聯邦政府 NARA 典藏，
// Public Domain）＋青色鉛垂虛線與中文引線標出耳、肩、髖、踝四個參考點。
// 中立站姿鉛垂線：自繪乾淨側面人形（座標精準，四個地標落在同一鉛垂線 x=210 上）。
const plumbLineSvg = `<svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="360" fill="#ffffff"/>
  <text x="230" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">中立站姿參考鉛垂線（側面示意）</text>
  <!-- 側面人形（面朝右）：以灰色輪廓表示 -->
  <g fill="#e5e7eb" stroke="#9ca3af" stroke-width="2">
    <ellipse cx="201" cy="60" rx="19" ry="23"/>
    <path d="M221 56 l9 5 -9 5 z"/>
    <path d="M196 82 L206 82 L206 94 L196 94 Z"/>
    <path d="M197 94 C189 120 189 156 196 190 L216 190 C221 154 218 118 211 94 Z"/>
    <path d="M199 190 C196 210 200 235 205 258 L216 258 C219 232 216 208 214 190 Z"/>
    <path d="M205 258 C207 282 209 300 210 314 L221 314 C220 298 219 280 216 258 Z"/>
    <path d="M203 314 L239 314 L239 324 L201 324 Z"/>
  </g>
  <!-- 手臂（自然下垂） -->
  <line x1="205" y1="102" x2="207" y2="176" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
  <!-- 鉛垂線（畫在人形之上才看得見） -->
  <line x1="210" y1="38" x2="210" y2="326" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- 四個地標（落在鉛垂線上） -->
  <g fill="#0d9488">
    <circle cx="210" cy="60" r="4"/>
    <circle cx="210" cy="102" r="4"/>
    <circle cx="210" cy="196" r="4"/>
    <circle cx="210" cy="316" r="4"/>
  </g>
  <!-- 引線標籤 -->
  <g font-size="14" font-weight="bold" fill="#0d9488">
    <line x1="214" y1="60" x2="300" y2="60" stroke="#0d9488" stroke-width="1.5"/>
    <text x="306" y="64" text-anchor="start">耳（耳垂）</text>
    <line x1="214" y1="102" x2="300" y2="102" stroke="#0d9488" stroke-width="1.5"/>
    <text x="306" y="106" text-anchor="start">肩（肩峰）</text>
    <line x1="206" y1="196" x2="140" y2="196" stroke="#0d9488" stroke-width="1.5"/>
    <text x="134" y="200" text-anchor="end">髖（大轉子）</text>
    <line x1="206" y1="316" x2="140" y2="316" stroke="#0d9488" stroke-width="1.5"/>
    <text x="134" y="320" text-anchor="end">踝（外踝略前）</text>
  </g>
  <text x="230" y="346" text-anchor="middle" font-size="11" fill="#64748b">理想中立姿勢：耳、肩、髖、踝約略落在同一條鉛垂線上（示意，個人略有差異）</text>
</svg>`;

// 站姿良好與常見不良站姿對照（較擬真的人形輪廓 schematic）。
const standingCompareSvg = `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="320" fill="#ffffff"/>
  <text x="105" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">良好站姿</text>
  <line x1="105" y1="34" x2="105" y2="280" stroke="#99f6e4" stroke-width="1.5" stroke-dasharray="4 4"/>
  <ellipse cx="105" cy="52" rx="15" ry="18" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <rect x="98" y="68" width="14" height="8" rx="3" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <path d="M92 76 C88 100 94 118 100 128 C96 144 92 160 98 176 L112 176 C118 160 114 144 110 128 C116 118 122 100 118 76 Z"
        fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="94" y1="184" x2="90" y2="252" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <line x1="116" y1="184" x2="120" y2="252" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="88" cy="262" rx="12" ry="7" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <ellipse cx="122" cy="262" rx="12" ry="7" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <text x="105" y="300" text-anchor="middle" font-size="11" fill="#0f766e">耳肩髖踝一直線、下巴微收</text>
  <text x="315" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">常見不良站姿</text>
  <line x1="315" y1="34" x2="315" y2="280" stroke="#fecdd3" stroke-width="1.5" stroke-dasharray="4 4"/>
  <ellipse cx="330" cy="54" rx="15" ry="18" fill="#fde8e8" stroke="#f87171" stroke-width="1.5"/>
  <rect x="322" y="70" width="14" height="8" rx="3" fill="#fde8e8" stroke="#f87171" stroke-width="1.5"/>
  <path d="M300 78 C294 100 300 118 306 130 C300 146 296 162 302 178 L322 178 C328 162 324 146 318 130 C328 118 336 100 328 78 Z"
        fill="#fde8e8" stroke="#f87171" stroke-width="1.5"/>
  <line x1="304" y1="186" x2="298" y2="252" stroke="#f87171" stroke-width="8" stroke-linecap="round"/>
  <line x1="322" y1="186" x2="328" y2="252" stroke="#f87171" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="296" cy="262" rx="12" ry="7" fill="#fde8e8" stroke="#f87171" stroke-width="1.5"/>
  <ellipse cx="330" cy="262" rx="12" ry="7" fill="#fde8e8" stroke="#f87171" stroke-width="1.5"/>
  <text x="312" y="300" text-anchor="middle" font-size="11" fill="#9f1239">頭前引、圓肩、骨盆前傾</text>
</svg>`;

// 良好坐姿與螢幕高度示意。
const sittingScreenSvg = `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="300" fill="#ffffff"/>
  <text x="210" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">良好坐姿與螢幕高度</text>
  <rect x="150" y="180" width="120" height="14" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="156" y1="194" x2="156" y2="250" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
  <line x1="264" y1="194" x2="264" y2="250" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
  <rect x="256" y="120" width="14" height="70" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="200" cy="90" rx="16" ry="19" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <rect x="192" y="106" width="14" height="6" rx="2" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <path d="M188 112 L214 112 L220 176 L182 176 Z" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="220" y1="180" x2="240" y2="182" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <line x1="182" y1="180" x2="180" y2="240" stroke="#9ca3af" stroke-width="9" stroke-linecap="round"/>
  <line x1="180" y1="240" x2="200" y2="250" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <rect x="270" y="70" width="70" height="50" rx="3" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="196" y1="92" x2="270" y2="94" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="305" y="60" text-anchor="middle" font-size="11" fill="#4f46e5">螢幕上緣約與視線齊平</text>
  <text x="200" y="278" text-anchor="middle" font-size="11" fill="#64748b">臀部坐滿椅面、雙腳平踩地面、膝蓋與髖同高或略低</text>
</svg>`;

// 姿勢調整操作步驟。
const postureAdjustStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">耳肩髖對齊</text>
    <text x="70" y="108" font-size="12" fill="#64748b">下巴微收、胸口打開</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">骨盆坐正</text>
    <text x="210" y="108" font-size="12" fill="#64748b">雙腳平踩地面</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">螢幕齊視線</text>
    <text x="350" y="108" font-size="12" fill="#64748b">每 30-60 分鐘起身</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 6,
  phase: "W1",
  title: "正確的站姿與坐姿",
  minutes: 16,
  goal: "認識「中立脊椎」與耳肩髖踝一直線的參考基準，學會辨識常見的不良站姿與坐姿，並掌握久坐時調整姿勢與螢幕高度的實用原則。",
  sections: [
    {
      heading: "中立脊椎：耳肩髖踝一直線",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前幾天我們認識了骨骼、肌肉與筋膜線，今天要把這些知識用在一個每天都會用到的主題——**站姿與坐姿**。判斷姿勢好壞最常用的參考基準是**中立脊椎**：從側面看，**耳、肩、髖、踝**四個點約略落在同一條垂直的參考線上。

這條參考線的意義是**讓身體重量平均分散**，不需要靠某一群肌肉持續額外用力代償。當頭部往前移、骨盆前後傾斜過度，身體重心偏離這條線，某些肌肉就要持續繃緊才能撐住姿勢，長期下來容易感覺痠、緊、疲勞。

要特別說明：這條鉛垂線是**參考基準**，不是每個人都必須分毫不差對齊的絕對標準。每個人的骨骼比例、身形略有不同，合理的個人差異是正常的。今天的目標是學會用這個基準做**自我觀察**，而不是用來嚴格評判自己或他人的身材。`,
      figures: [
        {
          id: "d06-fig1",
          title: "耳肩髖踝一直線（側面示意）",
          alt: "側面站姿人形示意圖，一條青色鉛垂虛線由上而下通過耳垂、肩峰、股骨大轉子（髖）、外踝略前方四個參考點，四點約略落在同一條垂直線上。",
          svg: plumbLineSvg,
          caption: "側面示意：耳、肩、髖、踝約略落在同一條鉛垂線上，是自我觀察站姿的參考基準，而非絕對標準。",
        },
      ],
    },
    {
      heading: "站姿：常見問題與自我檢查",
      body: `站立時常見的不良姿勢特徵，通常會同時出現在身體的前後幾個部位：

- **頭部前引**：頭部往螢幕或手機方向前移，超出耳肩髖踝一直線，讓頸部後側肌肉持續額外出力撐住頭部重量。
- **圓肩**：肩膀往前內收，胸口相對內縮，常與長時間打字、滑手機的姿勢有關。
- **骨盆前傾**：骨盆過度向前傾斜，腰椎前凸弧度變得比較明顯，下背肌肉容易持續緊繃。

一個簡單的自我觀察方法是**靠牆站立測試**：背對牆壁站好，讓後腦、上背、臀部盡量貼近牆面，感受此時下巴、肩膀、腰部的位置，再對照鏡子觀察側面輪廓，大致判斷自己平常站姿與這個中立姿勢的落差。這只是幫助自我覺察的觀察方法，不是精確測量工具，也不能用來自我診斷任何結構性問題，如果對自己的體態有明確疑慮，可以諮詢物理治療師做進一步評估。`,
      figures: [
        {
          id: "d06-fig2",
          title: "良好站姿與常見不良站姿對照",
          alt: "左側為良好站姿示意圖，耳肩髖踝約略對齊一條鉛垂線；右側為常見不良站姿示意圖，頭部前引、肩膀內縮、骨盆前傾，明顯偏離參考線。",
          svg: standingCompareSvg,
          caption: "對照左右兩張示意圖，觀察自己平常的站姿比較接近哪一種，作為自我覺察的起點。",
        },
      ],
    },
    {
      heading: "坐姿：久坐調整與螢幕高度",
      body: `久坐是現代生活很難避免的狀態，良好坐姿的幾個基本要求是：**臀部坐滿椅面**（不要只坐前緣一小部分）、**雙腳平踩地面**（腳掌完整貼地，不懸空）、**膝蓋與髖部大致同高或略低**、**下背有適度支撐**（可利用椅背或抱枕）。

螢幕高度是另一個常被忽略的細節：建議**螢幕上緣大約與視線齊平**，這樣看螢幕時脖子不需要持續低頭或仰頭。如果使用筆記型電腦，桌面直接放置容易讓視線偏低、誘發頭部前引與圓肩，可以考慮墊高螢幕，另外搭配外接鍵盤維持手肘自然彎曲的角度。

不過，即使坐姿再標準，長時間維持同一個姿勢仍然會讓局部組織持續承受壓力。因此除了調整坐姿本身，同樣重要的是**規律變換姿勢與起身活動**——建議每坐 30 到 60 分鐘，就起身走動、伸展一下，讓身體有機會從固定姿勢中恢復，姿勢正確與規律活動是互補關係，缺一不可。`,
      figures: [
        {
          id: "d06-fig3",
          title: "良好坐姿與螢幕高度示意",
          alt: "側面坐姿示意圖，人物坐在椅子上，臀部坐滿椅面、雙腳平踩地面，螢幕架高，上緣以虛線連到視線高度。",
          svg: sittingScreenSvg,
          caption: "良好坐姿：臀部坐滿椅面、雙腳平踩地面、膝蓋與髖同高，螢幕上緣約與視線齊平。",
        },
      ],
    },
    {
      heading: "調整步驟",
      body: `把前面的重點濃縮成三個可以立刻執行的調整步驟：

1. **耳肩髖對齊**：不論站或坐，先感受一下下巴是否微收、胸口是否自然打開，讓耳朵、肩膀、髖部大致回到同一條垂直線附近。
2. **骨盆坐正**：坐著時把臀部往椅背方向坐滿，雙腳平踩地面，避免長時間翹腳或只坐椅子前緣。
3. **螢幕齊視線**：調整螢幕高度到上緣約與視線齊平，並提醒自己每 30 到 60 分鐘起身活動一次。

這三個步驟不需要額外器材，重點是養成習慣、定時自我提醒。今天的練習建議先在現在使用的座位上實際調整一次，感受調整前後身體感覺上的差異；接下來幾週談到肌肉放鬆與體態評估時，都會延續今天建立的中立姿勢概念。`,
      figures: [
        {
          id: "d06-fig4",
          title: "姿勢調整：三步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 耳肩髖對齊、下巴微收胸口打開，步驟 2 骨盆坐正、雙腳平踩地面，步驟 3 螢幕齊視線、每 30 到 60 分鐘起身。",
          svg: postureAdjustStepsSvg,
          caption: "三個步驟不需要額外器材，重點是養成習慣、定時自我提醒與起身活動。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "中立脊椎的參考基準是耳、肩、髖、踝約略落在同一條鉛垂線上，能讓身體重量平均分散。",
    "常見不良站姿特徵包含頭部前引、圓肩、骨盆前傾，可透過鏡子或牆面自我觀察初步檢查。",
    "良好坐姿：臀部坐滿椅面、雙腳平踩地面、膝蓋與髖部同高、下背有支撐。",
    "螢幕上緣建議與視線齊平，避免長時間低頭或仰頭使用電腦。",
    "姿勢正確不能取代活動：建議每 30-60 分鐘起身活動，規律變換姿勢同樣重要。",
  ],
  quiz: [
    {
      id: "d06-q1",
      question: "「中立脊椎」的參考鉛垂線大致通過身體哪四個位置？",
      options: ["耳、肩、髖、踝", "眼睛、嘴巴、手肘、手腕", "頭頂、胸口、膝蓋、腳趾", "後腦、腰椎、大腿、小腿"],
      answerIndex: 0,
      explanation:
        "中立脊椎的參考基準是耳、肩、髖、踝四個點約略落在同一條垂直的參考線上，這樣身體重量能平均分散，不需要靠某一群肌肉持續額外用力代償。",
    },
    {
      id: "d06-q2",
      question: "下列何者屬於常見的不良站姿特徵？",
      options: [
        "頭部前引、圓肩、骨盆前傾",
        "耳肩髖踝約略對齊一直線",
        "下巴自然微收",
        "雙肩自然放鬆下垂",
      ],
      answerIndex: 0,
      explanation:
        "頭部前引、圓肩、骨盆前傾是站立時常見的不良姿勢特徵，通常會讓身體重心偏離耳肩髖踝一直線，某些肌肉需要持續額外出力撐住姿勢，長期容易感覺痠緊疲勞。",
    },
    {
      id: "d06-q3",
      question: "良好坐姿的基本要求，不包含下列哪一項？",
      options: [
        "臀部坐滿椅面",
        "雙腳平踩地面",
        "膝蓋盡量高於髖部、身體整個蜷縮",
        "下背有適度支撐",
      ],
      answerIndex: 2,
      explanation:
        "良好坐姿要求臀部坐滿椅面、雙腳平踩地面、膝蓋與髖部大致同高或略低、下背有適度支撐；膝蓋刻意高於髖部並讓身體蜷縮，反而會讓骨盆與脊椎處於不理想的姿勢，不是建議的坐姿。",
    },
    {
      id: "d06-q4",
      question: "使用電腦時，螢幕高度的建議原則是？",
      options: [
        "螢幕上緣大約與視線齊平",
        "螢幕一定要放在膝蓋高度",
        "螢幕越低頭越輕鬆",
        "螢幕高度與姿勢無關",
      ],
      answerIndex: 0,
      explanation:
        "建議螢幕上緣大約與視線齊平，這樣看螢幕時脖子不需要持續低頭或仰頭。螢幕太低容易誘發頭部前引與圓肩，是久坐工作時常見的姿勢誘因之一。",
    },
    {
      id: "d06-q5",
      question: "久坐時，除了維持良好坐姿，還建議搭配下列哪個習慣？",
      options: [
        "每 30-60 分鐘起身活動一下",
        "盡量整天保持同一姿勢完全不動",
        "只要坐姿正確就不需要休息",
        "坐愈久愈能訓練核心肌力",
      ],
      answerIndex: 0,
      explanation:
        "即使坐姿良好，長時間維持同一姿勢仍會讓局部組織持續承受壓力，規律起身活動能分散負荷、促進血液循環。姿勢正確與規律活動是互補而非替代關係，兩者都需要注意。",
    },
    {
      id: "d06-q6",
      question: "「中立脊椎」的鉛垂線參考，最適合怎麼理解？",
      options: [
        "每個人都必須分毫不差對齊，否則就是異常",
        "是一個幫助自我觀察與調整的參考基準，存在合理個人差異",
        "只適用於運動員，一般人不需要參考",
        "與姿勢舒適度完全無關",
      ],
      answerIndex: 1,
      explanation:
        "鉛垂線是幫助自我觀察與調整的參考基準，每個人的骨骼比例、身形略有不同，合理的個人差異是正常的，不需要也不應該追求分毫不差的對齊，重點是用它練習自我覺察。",
    },
    {
      id: "d06-q7",
      question:
        "情境題：小陳每天在電腦前坐 8 小時，螢幕直接放在桌面、視線需要往下看，肩膀也常常不自覺往前縮。根據今天內容，最適合他優先調整的是？",
      options: [
        "墊高螢幕讓上緣與視線齊平，並提醒自己肩胛放鬆、定時起身活動",
        "完全不理會，反正坐著比站著輕鬆",
        "加大螢幕字體就能解決姿勢問題",
        "只要每天多做重訓，姿勢問題就會自動消失",
      ],
      answerIndex: 0,
      explanation:
        "視線往下看螢幕容易誘發頭前引與圓肩，墊高螢幕到視線齊平是直接處理環境誘因；搭配定時起身活動，才能同時處理姿勢排列與久坐不動兩個問題。單靠重訓或忽略環境調整，都無法針對根本原因做出改善。",
    },
  ],
};

export default lesson;
