import type { DayLesson } from "@/lib/content/types";

// 過頭深蹲正常示意圖（自繪擬真人形：填色身形＋圓潤關節，取代原本的抽象線條人形）。
const squatNormalSvg = `<svg viewBox="0 0 260 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="260" height="280" fill="#ffffff"/>
  <text x="130" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">觀察基準（正常）</text>
  <line x1="130" y1="34" x2="130" y2="250" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="118" y1="66" x2="95" y2="30" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <line x1="142" y1="66" x2="165" y2="30" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="130" cy="50" rx="14" ry="17" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <path d="M120 68 C114 90 112 112 116 130 L144 130 C148 112 146 90 140 68 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M118 132 Q100 155 100 188" fill="none" stroke="#334155" stroke-width="9" stroke-linecap="round"/>
  <path d="M142 132 Q160 155 160 188" fill="none" stroke="#334155" stroke-width="9" stroke-linecap="round"/>
  <line x1="100" y1="188" x2="104" y2="246" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <line x1="160" y1="188" x2="156" y2="246" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="98" cy="254" rx="12" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="158" cy="254" rx="12" ry="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="100" cy="188" r="3" fill="#0d9488"/>
  <circle cx="160" cy="188" r="3" fill="#0d9488"/>
  <text x="14" y="232" font-size="10" fill="#475569">手臂與軀幹</text>
  <text x="14" y="244" font-size="10" fill="#475569">大致平行</text>
</svg>`;

// 過頭深蹲三種常見代償對照示意圖。
const squatCompensationSvg = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="260" fill="#ffffff"/>
  <!-- 代償1：手臂前移 -->
  <text x="70" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">手臂前移</text>
  <line x1="70" y1="30" x2="70" y2="230" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="70" cy="46" r="12" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <line x1="70" y1="58" x2="50" y2="34" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
  <line x1="70" y1="58" x2="90" y2="34" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
  <path d="M62 60 L58 130" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M78 60 L82 130" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M58 130 Q40 150 46 176" fill="none" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <path d="M82 130 Q100 150 94 176" fill="none" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <text x="8" y="210" font-size="9" fill="#475569">上背/肩活動度</text>
  <text x="8" y="222" font-size="9" fill="#475569">不足需代償</text>

  <!-- 代償2：腳跟離地 -->
  <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">腳跟離地</text>
  <line x1="210" y1="30" x2="210" y2="230" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="210" cy="46" r="12" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <line x1="192" y1="58" x2="228" y2="58" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  <path d="M200 62 L198 130" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M220 62 L222 130" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M198 130 Q180 150 186 176" fill="none" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <path d="M222 130 Q240 150 234 176" fill="none" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="186" cy="184" rx="8" ry="4" fill="#fda4af" stroke="#e11d48" stroke-width="1.5" transform="rotate(-20 186 184)"/>
  <ellipse cx="234" cy="184" rx="8" ry="4" fill="#fda4af" stroke="#e11d48" stroke-width="1.5" transform="rotate(20 234 184)"/>
  <text x="150" y="210" font-size="9" fill="#475569">腳踝活動度</text>
  <text x="150" y="222" font-size="9" fill="#475569">不足，腳跟墊高代償</text>

  <!-- 代償3：膝內夾 -->
  <text x="350" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">膝蓋內夾</text>
  <line x1="350" y1="30" x2="350" y2="230" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="350" cy="46" r="12" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <line x1="332" y1="58" x2="368" y2="58" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  <path d="M340 62 L336 120" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M360 62 L364 120" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <path d="M336 120 Q350 150 344 180" fill="none" stroke="#e11d48" stroke-width="5" stroke-linecap="round"/>
  <path d="M364 120 Q350 150 356 180" fill="none" stroke="#e11d48" stroke-width="5" stroke-linecap="round"/>
  <text x="300" y="205" font-size="9" fill="#475569">臀部外側肌力</text>
  <text x="300" y="217" font-size="9" fill="#475569">不足，膝蓋向內塌陷</text>
</svg>`;

// 膝關節構造：真實公有領域膝關節示意圖（Wikimedia Commons，Mysid 原繪製、John Holmes II／
// Mikael Häggström 編修，美國聯邦政府作品，Public Domain）＋中文引線標出股骨／髕骨與韌帶／脛骨，
// 呼應深蹲膝內夾代償時膝關節內側承受張力增加的說明。
const kneeDiagramSvg = `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="560" height="300" fill="#ffffff"/>
  <text x="280" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">膝關節構造（真實圖）</text>
  <image href="/body-care/figures/knee-diagram.svg" x="180" y="34" width="200" height="182.25" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="14" font-weight="bold" fill="#0d9488">
    <circle cx="280" cy="60" r="4"/>
    <line x1="176" y1="55" x2="280" y2="60" stroke="#0d9488" stroke-width="1.5"/>
    <text x="170" y="59" text-anchor="end">股骨（大腿骨）</text>
    <circle cx="280" cy="120" r="4" fill="#e11d48"/>
    <line x1="392" y1="120" x2="284" y2="120" stroke="#e11d48" stroke-width="1.5"/>
    <text x="398" y="124" text-anchor="start" fill="#e11d48">髕骨與韌帶</text>
    <circle cx="280" cy="200" r="4"/>
    <line x1="176" y1="205" x2="280" y2="200" stroke="#0d9488" stroke-width="1.5"/>
    <text x="170" y="209" text-anchor="end">脛骨（小腿骨）</text>
  </g>
  <text x="280" y="270" text-anchor="middle" font-size="11" fill="#64748b">真實膝關節示意圖：股骨與脛骨間由韌帶穩定，膝內夾會增加內側張力</text>
</svg>`;

// 過頭深蹲觀察三步驟。
const squatStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">雙手高舉過頭</text>
    <text x="70" y="108" font-size="12" fill="#64748b">緩慢下蹲</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">蹲到自然</text>
    <text x="210" y="108" font-size="12" fill="#64748b">最低可控角度</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">觀察三部位</text>
    <text x="350" y="108" font-size="12" fill="#64748b">手臂／腳跟／膝蓋</text>
  </g>
</svg>`;

// 動作品質優先於次數：對比示意圖。
const qualityOverQuantitySvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <text x="105" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">建議：先觀察記錄</text>
  <circle cx="105" cy="70" r="26" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/>
  <path d="M92 70 L102 82 L120 58" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="105" y="120" text-anchor="middle" font-size="11" fill="#475569">少量、緩慢、可控</text>
  <text x="105" y="134" text-anchor="middle" font-size="11" fill="#475569">留意代償是否出現</text>

  <text x="315" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">避免：貿然增加負荷</text>
  <circle cx="315" cy="70" r="26" fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
  <path d="M302 57 L328 83 M328 57 L302 83" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
  <text x="315" y="120" text-anchor="middle" font-size="11" fill="#475569">大量、快速、忽略</text>
  <text x="315" y="134" text-anchor="middle" font-size="11" fill="#475569">代償訊號硬做到底</text>
</svg>`;

const lesson: DayLesson = {
  day: 17,
  phase: "W3",
  title: "動態評估：深蹲時的關節活動度",
  minutes: 17,
  goal: "認識過頭深蹲（overhead squat）作為動態體態觀察工具的原理，能辨識手臂前移、腳跟離地、膝蓋內夾三種常見代償現象。",
  sections: [
    {
      heading: "為什麼要「動起來」觀察",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前兩天學的是**靜態**觀察——身體站著不動時的樣子。但生活中身體大多數時候都在動，有些代償模式只有在動作中才會顯現出來，站著看不出來。今天要學的**過頭深蹲觀察法（overhead squat assessment 概念簡化版）**，是體適能教練與治療師常用的一種**動態篩檢工具**：讓身體做一個同時需要肩、髖、膝、踝多關節配合的動作，觀察身體如何「代償」活動度不足的地方。

這個動作之所以好用，是因為它**一次涵蓋多個關節**：雙手高舉過頭需要肩關節與上背的活動度，下蹲需要髖、膝、踝三個關節同時彎曲。任何一個環節活動度不夠，身體都會用別的方式「借」動作出來，這些借用的痕跡就是我們要觀察的線索。

再次提醒：這是**初步的動作觀察**，用來建立對自己身體的認識，不是專業的動作篩檢測驗（如 FMS），也不能作為診斷依據。若動作中出現疼痛，應立即停止並諮詢醫師或物理治療師。`,
      figures: [
        {
          id: "d17-fig1",
          title: "過頭深蹲觀察基準姿勢",
          alt: "示意圖顯示雙手高舉過頭並下蹲的姿勢，手臂與軀幹大致維持平行，作為觀察是否出現代償的參考基準。",
          svg: squatNormalSvg,
          caption: "示意圖（非解剖精確比例）：理想狀態下手臂與軀幹大致平行，軀幹保持相對直立，膝蓋方向與腳尖一致。",
        },
      ],
    },
    {
      heading: "動作怎麼做：安全前提下的簡化流程",
      body: `在觀察代償之前，先確認動作本身怎麼安全地做：

1. **雙腳打開約與肩同寬**，腳尖可略微朝外。
2. **雙手向上高舉過頭**，手肘打直，掌心朝前。
3. **緩慢下蹲**，像是要坐進一張椅子，蹲到自己**能控制、不疼痛**的最低角度即可，不需要勉強蹲到底。
4. 全程**目視前方**，保持自然呼吸，不憋氣。

**安全提醒**：這個動作對平衡與關節活動度有一定要求，若本身有膝關節、髖關節不適，或平衡感較差（尤其長者），**不建議獨自嘗試**，可以先扶著穩固的桌椅、請家人在旁協助，或直接請物理治療師評估，不需要勉強完成這個動作才能學習後續課程。

觀察的時機是**下蹲到最低點的瞬間**，這時候身體最容易露出代償的痕跡，可以請旁人幫忙看，或對著鏡子、錄影後回放觀察。`,
      figures: [
        {
          id: "d17-fig2",
          title: "過頭深蹲觀察三步驟",
          alt: "三個編號步驟：步驟一雙手高舉過頭緩慢下蹲，步驟二蹲到自然最低可控角度，步驟三觀察手臂、腳跟、膝蓋三個部位。",
          svg: squatStepsSvg,
          caption: "動作全程應緩慢、可控、不疼痛；觀察重點集中在蹲到最低點時的瞬間。",
        },
      ],
    },
    {
      heading: "三種常見代償現象",
      body: `下蹲到最低點時，常見以下三種代償模式，各自對應不同關節活動度或肌力的傾向：

**① 手臂往前掉，無法維持與軀幹平行**
下蹲時雙手原本應該保持在頭部上方、與軀幹大致平行，若手臂明顯往前掉、變得像抱球一樣，通常提示**肩關節或上背（胸椎）活動度不足**——這和 day15 學到的圓肩、駝背傾向常有關聯，身體會用「手臂前移」來代償肩膀舉不夠高的限制。

**② 腳跟離地、身體重心前傾**
下蹲時若腳跟明顯離地、需要用腳尖撐住重心，通常提示**腳踝活動度（背屈）不足**。身體踝關節彎曲空間不夠，只好把重心往前移、抬起腳跟來完成下蹲角度。

**③ 膝蓋向內塌陷（膝內夾）**
下蹲時若一側或兩側膝蓋明顯往身體中線塌陷，通常提示**髖部外側肌群（如臀中肌）力量相對不足**，無法穩定股骨的方向，讓膝蓋跟著往內偏移。這個現象在日常生活的下樓梯、上下車動作中也可能觀察到。

這三種代償**可以同時出現，也可能只出現一種**，是身體在描述「哪個環節目前比較卡」，而不是需要立刻矯正的錯誤。`,
      figures: [
        {
          id: "d17-fig3",
          title: "過頭深蹲三種常見代償對照",
          alt: "三張示意圖並排：左圖顯示手臂前移代償，中圖顯示腳跟離地代償，右圖顯示膝蓋向內塌陷代償，各標註可能對應的活動度或肌力不足原因。",
          svg: squatCompensationSvg,
          caption: "示意圖：手臂前移常提示肩／上背活動度不足；腳跟離地常提示腳踝活動度不足；膝內夾常提示髖外側肌力不足。",
        },
        {
          id: "d17-fig5",
          title: "膝關節構造（真實圖）",
          alt: "真實膝關節示意圖，以中文引線由上而下標出股骨（大腿骨）、髕骨與韌帶、脛骨（小腿骨）三個構造區域，呼應深蹲膝蓋內夾時膝關節內側承受張力增加的說明。",
          svg: kneeDiagramSvg,
          caption: "真實膝關節示意圖：股骨與脛骨間由韌帶穩定，膝內夾會增加內側張力。",
          credit: "Mysid（原繪製）、John Holmes II、Mikael Häggström 編修, Public Domain, via Wikimedia Commons（Knee_diagram.svg）",
        },
      ],
    },
    {
      heading: "觀察之後：記錄，而不是立刻「矯正」",
      body: `看到自己有代償現象，很自然會想「那我該怎麼練回來？」——這個問題的完整答案要留到第四週的運動處方單元（day22 起）才會系統性地談。今天的任務只有**觀察與記錄**，原因有三：

1. **代償往往是多因素造成的**，同一個現象（如膝內夾）可能來自不同原因，貿然自行判斷成因、自行加練某個肌群，效果有限甚至可能練錯方向。
2. **動作品質比次數重要**。在還沒釐清代償原因前，貿然增加深蹲次數或負重，反而可能讓代償模式更根深蹂固。
3. **有疼痛或明顯不對稱時，這已經超出衛教範圍**，應該由物理治療師或醫師做更完整的動作評估，這套簡化的觀察法無法取代專業判斷。

建議做法：把今天觀察到的代償現象（例如「下蹲時右膝比左膝更明顯內夾」）簡單記錄下來，搭配前兩天的靜態觀察結果，一起留到第四週規劃運動處方時參考。今天先練習**看懂身體給的線索**就好。`,
      figures: [
        {
          id: "d17-fig4",
          title: "動作品質優先於次數",
          alt: "左側示意圖以打勾標示建議做法：少量、緩慢、可控、留意代償是否出現；右側以叉號標示應避免的做法：大量、快速、忽略代償訊號硬做到底。",
          svg: qualityOverQuantitySvg,
          caption: "在還沒釐清代償原因前，貿然增加深蹲次數或負重可能讓代償模式更根深蒂固，動作品質永遠優先於次數。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "過頭深蹲是同時涉及肩、髖、膝、踝多關節的動態篩檢動作，能顯現靜態站姿看不出的代償。",
    "動作前提是安全：本身有關節不適或平衡問題（尤其長者）不建議獨自嘗試，應扶穩或請專業協助。",
    "手臂前移常提示肩／上背活動度不足；腳跟離地常提示腳踝活動度不足；膝內夾常提示髖外側肌力不足。",
    "代償現象可能同時出現，是身體在描述哪個環節較卡，不是需要立刻矯正的錯誤。",
    "今天的任務是觀察與記錄，不做自行矯正；系統性的運動處方留到第四週，疼痛或明顯異常應諮詢專業人員。",
  ],
  quiz: [
    {
      id: "d17-q1",
      question: "過頭深蹲觀察法之所以常被使用，主要原因是什麼？",
      options: [
        "它只需要用到單一關節，觀察起來最簡單",
        "它同時涉及肩、髖、膝、踝多個關節，容易顯現身體的代償模式",
        "它是唯一能診斷肌肉骨骼疾病的方法",
        "它完全不需要考慮安全性",
      ],
      answerIndex: 1,
      explanation:
        "過頭深蹲一次涵蓋肩關節、上背、髖、膝、踝多個關節的活動度需求，任何一個環節不足身體都會用其他方式代償，這些痕跡就是觀察的重點。它是衛教用的初步觀察工具，不是診斷方法，且必須在安全前提下進行。",
    },
    {
      id: "d17-q2",
      question: "下蹲時手臂明顯往前掉、無法與軀幹保持大致平行，較可能提示什麼？",
      options: [
        "腳踝活動度不足",
        "肩關節或上背（胸椎）活動度不足",
        "髖部外側肌力不足",
        "心肺耐力不足",
      ],
      answerIndex: 1,
      explanation:
        "手臂原本應維持在頭部上方與軀幹大致平行，若明顯往前掉，通常提示肩關節或上背活動度不足，這與圓肩、駝背傾向常有關聯。腳跟離地對應腳踝活動度，膝內夾對應髖外側肌力，各自對應不同關節環節。",
    },
    {
      id: "d17-q3",
      question: "下蹲時腳跟明顯離地、需要靠腳尖撐住重心，較可能提示什麼？",
      options: ["腳踝活動度（背屈）不足", "肩關節活動度過大", "頸椎活動度不足", "手腕力量不足"],
      answerIndex: 0,
      explanation:
        "腳踝彎曲（背屈）空間不夠時，身體無法單純靠踝關節完成下蹲角度，只好把重心往前移、抬起腳跟來借動作，這通常提示腳踝活動度不足，是下蹲代償中常見的一種模式。",
    },
    {
      id: "d17-q4",
      question: "下蹲時膝蓋明顯向內塌陷（膝內夾），較可能提示哪個部位的力量相對不足？",
      options: ["髖部外側肌群（如臀中肌）", "小腿後側肌群", "前臂屈肌群", "胸大肌"],
      answerIndex: 0,
      explanation:
        "髖部外側肌群（如臀中肌）負責穩定股骨的方向，力量相對不足時無法撐住大腿骨在正確位置，下蹲時膝蓋容易跟著往內偏移塌陷，這個現象在日常上下樓梯或上下車時也可能觀察到。",
    },
    {
      id: "d17-q5",
      question: "關於過頭深蹲觀察法的安全前提，下列敘述何者正確？",
      options: [
        "所有人都應該獨自完成，不需要任何協助",
        "本身有關節不適或平衡問題（尤其長者）不建議獨自嘗試，可扶穩或請專業協助",
        "動作中若感覺疼痛應該咬牙撐完整個動作",
        "只要蹲得夠低就代表身體完全沒有問題",
      ],
      answerIndex: 1,
      explanation:
        "課程明確提醒本身有膝、髖關節不適或平衡感較差（尤其長者）者不建議獨自嘗試，應扶著穩固桌椅、請家人協助或由物理治療師評估；動作中出現疼痛應立即停止，蹲的深度也不代表沒有代償或問題。",
    },
    {
      id: "d17-q6",
      question: "今天課程對觀察到的代償現象，建議的下一步是什麼？",
      options: [
        "立刻自行判斷成因並開始高強度矯正訓練",
        "簡單記錄觀察結果，留到第四週規劃運動處方時參考，今天只練習看懂線索",
        "完全忽略，代償現象不需要理會",
        "立即停止所有日常活動直到完全矯正",
      ],
      answerIndex: 1,
      explanation:
        "課程強調代償往往是多因素造成的，貿然自行判斷成因並加練可能練錯方向，動作品質比次數重要。今天的任務是觀察與記錄，系統性的運動處方會留到第四週，疼痛或明顯異常則應諮詢專業人員，而非立刻自行矯正。",
    },
  ],
};

export default lesson;
