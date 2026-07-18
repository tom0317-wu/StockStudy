import type { DayLesson } from "@/lib/content/types";

// 評估→放鬆→強化 整體流程總覽圖。
const caseFlowOverviewSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <defs>
    <marker id="d26arrowa" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#94a3b8"/>
    </marker>
  </defs>
  <rect x="15" y="40" width="110" height="80" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
  <text x="70" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">評估</text>
  <text x="70" y="90" text-anchor="middle" font-size="10" fill="#475569">觀察＋觸診</text>
  <line x1="128" y1="80" x2="158" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#d26arrowa)"/>
  <rect x="160" y="40" width="110" height="80" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
  <text x="215" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">放鬆</text>
  <text x="215" y="90" text-anchor="middle" font-size="10" fill="#475569">針對緊繃處</text>
  <line x1="273" y1="80" x2="303" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#d26arrowa)"/>
  <rect x="305" y="40" width="110" height="80" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
  <text x="360" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">強化</text>
  <text x="360" y="90" text-anchor="middle" font-size="10" fill="#475569">針對無力處</text>
</svg>`;

// 評估階段：側面觀察重點示意（骨盆前傾、腰椎前凸增加、肩頸前引／圓肩）。擬真填色側面人形，非抽象方框，呼應第19天手法。
const assessmentSvg = `<svg viewBox="0 0 320 340" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="320" height="340" fill="#ffffff"/>
  <text x="160" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">評估：側面觀察重點（示意）</text>
  <line x1="150" y1="34" x2="150" y2="320" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <ellipse cx="150" cy="52" rx="13" ry="15" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <rect x="144" y="65" width="12" height="10" rx="3" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/>
  <path d="M138 75 C126 90 126 108 138 122 Q158 152 150 190" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
  <path d="M130 164 Q160 152 190 164 L184 208 Q160 224 136 208 Z" fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
  <path d="M150 210 C148 240 150 268 154 300" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <circle cx="136" cy="98" r="5" fill="#e11d48"/>
  <line x1="88" y1="84" x2="132" y2="98" stroke="#e11d48" stroke-width="1.5"/>
  <text x="80" y="76" text-anchor="end" font-size="12" font-weight="bold" fill="#e11d48">肩頸前引</text>
  <text x="80" y="92" text-anchor="end" font-size="11" fill="#e11d48">（圓肩傾向）</text>
  <circle cx="150" cy="152" r="5" fill="#e11d48"/>
  <line x1="226" y1="140" x2="154" y2="152" stroke="#e11d48" stroke-width="1.5"/>
  <text x="230" y="136" text-anchor="start" font-size="12" font-weight="bold" fill="#e11d48">腰椎前凸增加</text>
  <circle cx="182" cy="196" r="5" fill="#e11d48"/>
  <line x1="226" y1="216" x2="185" y2="198" stroke="#e11d48" stroke-width="1.5"/>
  <text x="230" y="212" text-anchor="start" font-size="12" font-weight="bold" fill="#e11d48">骨盆前傾</text>
  <text x="160" y="330" text-anchor="middle" font-size="10" fill="#94a3b8">觀察示意：紅點為此個案常見的觀察重點（示意，非診斷）</text>
</svg>`;

// 放鬆階段：建議優先放鬆的部位（髂腰肌、豎脊肌、臀肌）：真實 PD 全身肌肉圖（正面＋背面，Mikael Häggström，PD）＋中文引線標註。
const releaseTargetsSvg = `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="760" height="380" fill="#ffffff"/>
  <text x="245" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">正面（髖前）</text>
  <image href="/body-care/figures/muscles-anterior.png" x="140" y="42" width="210" height="244" preserveAspectRatio="xMidYMid meet"/>
  <text x="515" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">背面（下背／臀部）</text>
  <image href="/body-care/figures/muscles-posterior.png" x="410" y="42" width="210" height="256" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold" fill="#e11d48">
    <circle cx="230" cy="160" r="4"/>
    <line x1="128" y1="150" x2="218" y2="160" stroke="#e11d48" stroke-width="1.5"/>
    <text x="124" y="141" text-anchor="end">髂腰肌</text>
    <text x="124" y="157" text-anchor="end" font-size="11" font-weight="normal">（髖屈肌群）</text>
    <text x="124" y="173" text-anchor="end" font-size="11" font-weight="normal">久坐易緊，優先放鬆</text>
    <circle cx="500" cy="120" r="4"/>
    <line x1="624" y1="110" x2="519" y2="120" stroke="#e11d48" stroke-width="1.5"/>
    <text x="628" y="100" text-anchor="start">豎脊肌</text>
    <text x="628" y="116" text-anchor="start" font-size="11" font-weight="normal">（腰段）</text>
    <text x="628" y="132" text-anchor="start" font-size="11" font-weight="normal">久坐易緊，優先放鬆</text>
    <circle cx="530" cy="155" r="4"/>
    <line x1="624" y1="226" x2="545" y2="165" stroke="#e11d48" stroke-width="1.5"/>
    <text x="628" y="218" text-anchor="start">臀肌</text>
    <text x="628" y="234" text-anchor="start" font-size="11" font-weight="normal">相對無力，可適度放鬆</text>
  </g>
  <text x="380" y="352" text-anchor="middle" font-size="11" fill="#94a3b8">真實解剖圖＋概略引線標示，力道以 0-10 量表 5-6 分微痠為原則</text>
</svg>`;

// 評估→放鬆→強化→回顧 完整四步驟（操作步驟圖）。
const caseStepsSvg = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="170" fill="#ffffff"/>
  <line x1="55" y1="48" x2="405" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="55" cy="48" r="20" fill="#0d9488"/>
    <text x="55" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="55" y="92" font-size="11" fill="#0f172a">觀察觸診</text>
    <text x="55" y="107" font-size="11" fill="#64748b">評估找模式</text>
    <circle cx="170" cy="48" r="20" fill="#0d9488"/>
    <text x="170" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="170" y="92" font-size="11" fill="#0f172a">放鬆緊繃</text>
    <text x="170" y="107" font-size="11" fill="#64748b">微痠力道</text>
    <circle cx="285" cy="48" r="20" fill="#0d9488"/>
    <text x="285" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="285" y="92" font-size="11" fill="#0f172a">強化無力</text>
    <text x="285" y="107" font-size="11" fill="#64748b">低強度漸進</text>
    <circle cx="405" cy="48" r="20" fill="#0d9488"/>
    <text x="405" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="405" y="92" font-size="11" fill="#0f172a">定期回顧</text>
    <text x="405" y="107" font-size="11" fill="#64748b">調整下階段</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 26,
  phase: "W4",
  title: "綜合個案演練 A：上班族久坐腰痠的評估與照護流程",
  minutes: 18,
  goal: "透過一個教學示範用的虛擬個案，練習把前四週學過的觀察、觸診、放鬆手法與運動處方知識，整合成「評估→放鬆→強化」的完整照護思考流程。",
  sections: [
    {
      heading: "個案情境與整體流程",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

以下是一個**教學示範用的虛擬個案**，並非真實個人的診斷紀錄，目的是讓我們練習把前四週學到的觀察、觸診、放鬆與強化知識，串成一套**可依樣操作的思考流程**。如果你自己或身邊的人有類似症狀，實際狀況仍需要由醫師或物理治療師親自評估，這裡示範的是「怎麼思考」，不是「照抄就能用在任何人身上」的處方。

**個案設定**：小陳，35 歲，辦公室文書工作，每天久坐 8 小時以上，近半年反覆下背痠緊，尤其久坐後起身瞬間最明顯，沒有下肢麻木或無力等警示症狀，也沒有明確外傷病史。（若實際情況出現下肢麻木、無力、大小便控制異常等警示症狀，應立即就醫，不適用本流程。）

面對這類常見的「久坐型下背痠」，我們練習套用三步驟框架：**評估**（先看清楚問題在哪、屬於哪種模式）→**放鬆**（針對過度緊繃的部位）→**強化**（針對相對無力的部位）。這個順序很重要——沒有先評估就直接放鬆或強化，很容易處理錯部位，事倍功半。下面依序拆解三個步驟。`,
      figures: [
        {
          id: "d26-fig1",
          title: "照護流程總覽：評估→放鬆→強化",
          alt: "三個方框由箭頭依序連接：評估（觀察加觸診）、放鬆（針對緊繃處）、強化（針對無力處），呈現完整的照護思考流程順序。",
          svg: caseFlowOverviewSvg,
          caption: "評估先行，才能確保放鬆與強化處理的是正確的部位。",
        },
      ],
    },
    {
      heading: "Step 1．評估：觀察與觸診重點",
      body: `評估階段的目標是**收集線索、建立初步方向**，不是下診斷。可以參考第 15～21 天學過的方法，從三個面向觀察小陳的狀況：**靜態體態觀察**——從側面看，是否有骨盆前傾、腰椎前凸角度較大、肩頸前引（圓肩）等跡象；**日常習慣詢問**——每天久坐時數、是否常翹腳、螢幕與椅子高度是否合適、平常活動量如何；**觸診**——輕壓感受腰部豎脊肌、髖屈肌（大腿根部前側）的張力是否明顯偏高、臀部肌肉按壓時是否偏鬆軟無力。

把這些觀察兜起來看，小陳的模式很符合第 19 天談過的**下交叉症候群**：緊的一側常是**髖屈肌與腰部豎脊肌**，弱的一側常是**腹肌與臀肌**。這只是一個常見的參考模式，不代表每個久坐腰痠的人都完全符合，實際評估仍需要綜合更多資訊，若不確定，交給物理治療師評估會更準確可靠。評估階段花的時間值得——方向抓對了，後面放鬆與強化才會對症。`,
      figures: [
        {
          id: "d26-fig2",
          title: "評估階段的觀察重點",
          alt: "一個側面填色人形示意圖，以三個紅點標出此個案常見的觀察重點：肩頸前引（圓肩傾向）、腰椎前凸增加、骨盆前傾。",
          svg: assessmentSvg,
          caption: "從側面觀察骨盆傾斜、腰椎曲線與肩頸姿勢，是評估階段的第一步（示意，非診斷）。",
        },
      ],
    },
    {
      heading: "Step 2．放鬆：針對緊繃部位",
      body: `評估初步判斷緊繃部位落在**髂腰肌（髖屈肌群）**與**腰部豎脊肌**後，放鬆階段可以套用第 10～13 天學過的手法：用滾筒或按壓球，針對這兩處做輕柔的滾動放鬆，力道抓在 0～10 量表的 **5～6 分微痠**即可，避開骨突與脊椎正中央（可回顧第 11 天滾筒安全使用原則）。臀肌雖然是「相對無力」的部位，但長期少用也可能同時伴隨局部緊繃，適度放鬆一樣有幫助，放鬆和強化並不衝突。

放鬆的時間不需要太長，每個部位滾動或按壓 1～2 分鐘、以感覺緊繃稍微舒緩為目標即可，過度用力或延長時間並不會加倍有效，反而可能造成局部不適。放鬆通常安排在**強化訓練之前**或**單獨的保養時段**，讓過度緊繃的肌肉先降低張力，這樣後面做核心與臀肌強化動作時，動作品質會更好、代償也會減少。`,
      figures: [
        {
          id: "d26-fig3",
          title: "放鬆階段的優先部位",
          alt: "並排兩張真實人體肌肉解剖圖，左為正面標出髂腰肌（髖屈肌群），右為背面標出豎脊肌（腰段）與臀肌，皆為此個案建議優先放鬆的部位。",
          svg: releaseTargetsSvg,
          caption: "真實解剖圖：針對評估認為緊繃的髂腰肌、豎脊肌優先放鬆，力道抓在 5-6 分微痠，避開骨突與脊椎正中央。",
          credit:
            "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscles anterior labeled.png／Muscle posterior labeled.png）",
        },
      ],
    },
    {
      heading: "Step 3．強化與整合：完整流程步驟",
      body: `放鬆之後，強化階段針對評估認為相對無力的**腹肌與臀肌**，可以套用第 22、24 天學過的 FITT 與漸進負荷原則：從低強度、少次數開始（例如簡單的核心穩定動作與臀肌訓練動作），每 1～2 週視身體反應微調頻率或強度，具體動作選擇與強度，建議由物理治療師或合格教練依實際狀況設計，這裡不提供固定的動作處方。

把三個步驟串起來，就是一套完整的照護思考流程：**評估**（找出這個人的模式，例如久坐型下背痠常見的髖屈肌／豎脊肌緊、腹肌／臀肌弱）→**放鬆**（針對緊繃處，力道微痠、避開危險部位）→**強化**（針對無力處，從低強度漸進）→**定期回顧**（每隔一段時間重新評估，看看模式有沒有改變，調整下一階段的重點）。這套流程可以套用在其他常見情境，核心精神都是「先看懂問題，再對症處理，並持續回顧調整」，而不是套用固定公式。若痠痛持續加劇、出現麻木無力或其他警示症狀，任何階段都應該暫停並尋求專業評估。`,
      figures: [
        {
          id: "d26-fig4",
          title: "完整照護流程：四個步驟",
          alt: "四個編號步驟由虛線串接：步驟 1 觀察觸診評估找模式、步驟 2 放鬆緊繃以微痠力道、步驟 3 強化無力從低強度漸進、步驟 4 定期回顧調整下一階段。",
          svg: caseStepsSvg,
          caption: "評估、放鬆、強化、回顧，是一套可以套用在其他情境的照護思考流程。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "本個案為教學示範用的虛擬設定，非真實診斷；實際身體狀況須由醫師或物理治療師評估，不可直接套用處方細節。",
    "完整照護思考流程是「評估→放鬆→強化→定期回顧」，評估先行才能確保放鬆與強化處理對部位。",
    "久坐型下背痠常見對應下交叉症候群模式：緊的常是髖屈肌與腰部豎脊肌，弱的常是腹肌與臀肌，但僅供參考、非絕對。",
    "放鬆力道抓在 0-10 量表 5-6 分微痠、避開骨突與脊椎正中央；強化則從低強度漸進，具體動作建議由專業人員設計。",
    "若出現下肢麻木無力、大小便控制異常等警示症狀，或痠痛持續加劇，應立即就醫，不適用此教學流程。",
  ],
  quiz: [
    {
      id: "d26-q1",
      question: "本課程示範的個案（小陳久坐腰痠）性質是什麼？",
      options: [
        "真實個人的醫療診斷紀錄",
        "教學示範用的虛擬設定，不可直接套用於任何真實個人",
        "已經過醫師確診的病例報告",
        "可以直接照抄用來治療任何人的下背痛",
      ],
      answerIndex: 1,
      explanation:
        "這是教學示範用的虛擬個案，目的是練習把觀察、放鬆、強化的思考流程串起來，並非真實個人的診斷紀錄。實際身體狀況因人而異，必須由醫師或物理治療師親自評估，不能直接把個案內容套用在任何真實的人身上。",
    },
    {
      id: "d26-q2",
      question: "課程建議的完整照護思考流程，正確順序是？",
      options: [
        "強化→放鬆→評估",
        "評估→放鬆→強化",
        "放鬆→強化→評估",
        "順序不重要，三件事同時做即可",
      ],
      answerIndex: 1,
      explanation:
        "正確順序是評估先行、再放鬆、最後強化：先透過觀察與觸診找出問題模式，再針對緊繃處放鬆，最後針對無力處做漸進強化，並定期回顧調整。順序顛倒容易處理錯部位，事倍功半。",
    },
    {
      id: "d26-q3",
      question: "為什麼「評估」要放在「放鬆」與「強化」之前？",
      options: [
        "評估其實不重要，只是形式流程",
        "評估能確認問題模式，避免放鬆與強化處理到錯誤的部位",
        "評估花的時間最少，先做比較有效率",
        "評估之後就不需要再做放鬆與強化",
      ],
      answerIndex: 1,
      explanation:
        "沒有先評估就直接放鬆或強化，很容易猜錯方向、處理到不是問題根源的部位，效果有限。評估能先確認這個人的緊繃與無力模式，讓後續的放鬆與強化更有針對性、事半功倍。",
    },
    {
      id: "d26-q4",
      question: "個案評估階段觀察到的模式（髖屈肌與腰部豎脊肌緊、腹肌與臀肌弱），最符合第幾天學過的哪個症候群？",
      options: [
        "第 19 天的下交叉症候群",
        "第 20 天的上交叉症候群",
        "第 8 天的十二正經概念",
        "第 14 天的長者下肢水腫對策",
      ],
      answerIndex: 0,
      explanation:
        "第 19 天談過的下交叉症候群，正好描述緊的一側是髖屈肌與豎脊肌、弱的一側是腹肌與臀肌，這與久坐型下背痠個案觀察到的模式一致。但這只是常見的參考模式，不代表每個人都完全符合，實際仍需綜合評估。",
    },
    {
      id: "d26-q5",
      question: "放鬆階段建議的力道與部位原則是？",
      options: [
        "力道抓在 5-6 分微痠，避開骨突與脊椎正中央",
        "力道要用到 9-10 分才有效果",
        "可以直接對著脊椎正中央用力按壓",
        "放鬆時間越久越好，沒有上限",
      ],
      answerIndex: 0,
      explanation:
        "放鬆階段沿用課程一貫的安全原則：力道抓在 0-10 量表的 5-6 分微痠即可，並避開骨突與脊椎正中央等危險部位。過度用力或延長時間並不會加倍有效，反而可能造成局部不適。",
    },
    {
      id: "d26-q6",
      question: "強化階段的建議做法是什麼？",
      options: [
        "直接套用課程提供的固定動作處方",
        "從低強度開始，依 FITT 與漸進負荷原則逐步調整，具體動作由專業人員設計",
        "一開始就用最大重量練到力竭",
        "強化階段不需要考慮個人狀況，人人適用同一套動作",
      ],
      answerIndex: 1,
      explanation:
        "強化階段建議套用第 22、24 天學過的 FITT 與漸進負荷原則，從低強度、少次數開始，依身體反應逐步調整；具體動作選擇建議由物理治療師或合格教練依個人實際狀況設計，課程本身不提供固定處方。",
    },
    {
      id: "d26-q7",
      question: "如果這位個案在流程中出現下肢麻木無力等警示症狀，應該怎麼處理？",
      options: [
        "繼續照原本的評估、放鬆、強化流程進行",
        "立即停止此教學流程並就醫，不適用一般放鬆強化處理",
        "加重放鬆力道，看看症狀會不會消失",
        "自行判斷是否需要就醫即可，不用太在意",
      ],
      answerIndex: 1,
      explanation:
        "下肢麻木無力、大小便控制異常等屬於警示症狀，可能代表更複雜的神經或結構問題，已經超出本課程教學流程的範圍，應立即停止並就醫，由專業人員進一步評估，不應自行套用放鬆或強化流程處理。",
    },
  ],
};

export default lesson;
