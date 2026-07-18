import type { DayLesson } from "@/lib/content/types";

// 靜態伸展與動態伸展總覽對照：自繪擬真人形（參考 day06 手法），取代抽象方框。
const stretchOverviewSvg = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="260" fill="#ffffff"/>
  <text x="120" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">靜態伸展：停住不動</text>
  <!-- 左：靜態伸展人形（彎腰前彎） -->
  <circle cx="110" cy="48" r="13" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <path d="M110 61 Q118 85 145 108" fill="none" stroke="#9ca3af" stroke-width="11" stroke-linecap="round"/>
  <path d="M145 108 Q150 150 150 195" fill="none" stroke="#9ca3af" stroke-width="10" stroke-linecap="round"/>
  <line x1="150" y1="195" x2="172" y2="201" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <path d="M120 68 Q140 130 150 175" fill="none" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M140 112 Q133 150 133 193" fill="none" stroke="#4f46e5" stroke-width="6" stroke-linecap="round" opacity="0.75"/>
  <circle cx="175" cy="55" r="16" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
  <rect x="171" y="35" width="8" height="6" fill="#4f46e5"/>
  <line x1="175" y1="55" x2="175" y2="44" stroke="#4f46e5" stroke-width="2"/>
  <line x1="175" y1="55" x2="184" y2="55" stroke="#4f46e5" stroke-width="2"/>
  <text x="175" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#4f46e5">15-30秒</text>
  <text x="120" y="225" text-anchor="middle" font-size="10" fill="#4f46e5">藍線＝被拉長的肌肉（如膕繩肌）</text>
  <line x1="230" y1="15" x2="230" y2="235" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
  <!-- 右：動態伸展人形（單腳向前擺盪） -->
  <defs>
    <marker id="d23arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#0d9488"/>
    </marker>
  </defs>
  <text x="340" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">動態伸展：帶動作擺動</text>
  <circle cx="330" cy="48" r="13" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <line x1="330" y1="61" x2="328" y2="130" stroke="#9ca3af" stroke-width="11" stroke-linecap="round"/>
  <path d="M328 130 Q325 165 322 198" fill="none" stroke="#9ca3af" stroke-width="10" stroke-linecap="round"/>
  <line x1="322" y1="198" x2="305" y2="204" stroke="#9ca3af" stroke-width="8" stroke-linecap="round"/>
  <line x1="330" y1="70" x2="345" y2="95" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <line x1="328" y1="70" x2="310" y2="90" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M328 130 Q355 140 378 158" fill="none" stroke="#0d9488" stroke-width="10" stroke-linecap="round"/>
  <line x1="378" y1="158" x2="392" y2="150" stroke="#0d9488" stroke-width="7" stroke-linecap="round"/>
  <path d="M300 205 A70 70 0 0 1 378 158" fill="none" stroke="#0d9488" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#d23arrow2)"/>
  <text x="385" y="182" font-size="11" font-weight="bold" fill="#0d9488">8-12次</text>
  <text x="385" y="198" font-size="9" fill="#64748b">幅度漸增</text>
  <text x="340" y="225" text-anchor="middle" font-size="10" fill="#0d9488">綠線＝來回擺動的動作路徑</text>
</svg>`;

// 靜態伸展示意：自繪擬真人形（彎腰前彎觸碰腳部）＋停留角度＋計時。
const staticStretchSvg = `<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="260" fill="#ffffff"/>
  <circle cx="120" cy="44" r="15" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <path d="M120 59 Q130 88 165 115" fill="none" stroke="#9ca3af" stroke-width="12" stroke-linecap="round"/>
  <path d="M165 115 Q172 160 172 215" fill="none" stroke="#9ca3af" stroke-width="11" stroke-linecap="round"/>
  <line x1="172" y1="215" x2="198" y2="222" stroke="#9ca3af" stroke-width="9" stroke-linecap="round"/>
  <path d="M128 75 Q150 145 170 195" fill="none" stroke="#9ca3af" stroke-width="7" stroke-linecap="round"/>
  <path d="M160 120 Q150 165 150 213" fill="none" stroke="#4f46e5" stroke-width="7" stroke-linecap="round" opacity="0.8"/>
  <text x="185" y="165" font-size="10" font-weight="bold" fill="#4f46e5">後側肌肉</text>
  <circle cx="245" cy="55" r="20" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
  <rect x="239" y="30" width="10" height="7" fill="#4f46e5"/>
  <line x1="245" y1="55" x2="245" y2="40" stroke="#4f46e5" stroke-width="2"/>
  <line x1="245" y1="55" x2="258" y2="55" stroke="#4f46e5" stroke-width="2"/>
  <text x="245" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#4f46e5">停留 15-30 秒</text>
  <text x="170" y="245" text-anchor="middle" font-size="10" fill="#64748b">藍線＝被拉長的肌肉（如膕繩肌）</text>
</svg>`;

// 動態伸展示意：自繪擬真人形（單腳向前擺盪）＋擺盪弧線＋反覆次數。
const dynamicStretchSvg = `<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="340" height="260" fill="#ffffff"/>
  <defs>
    <marker id="d23arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#0d9488"/>
    </marker>
  </defs>
  <circle cx="125" cy="44" r="15" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <line x1="125" y1="59" x2="122" y2="140" stroke="#9ca3af" stroke-width="12" stroke-linecap="round"/>
  <path d="M122 140 Q118 185 112 225" fill="none" stroke="#9ca3af" stroke-width="11" stroke-linecap="round"/>
  <line x1="112" y1="225" x2="90" y2="232" stroke="#9ca3af" stroke-width="9" stroke-linecap="round"/>
  <line x1="124" y1="70" x2="105" y2="100" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <line x1="122" y1="70" x2="145" y2="95" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M122 140 Q165 155 205 190" fill="none" stroke="#0d9488" stroke-width="11" stroke-linecap="round"/>
  <line x1="205" y1="190" x2="225" y2="180" stroke="#0d9488" stroke-width="8" stroke-linecap="round"/>
  <path d="M95 232 A115 115 0 0 1 225 180" fill="none" stroke="#0d9488" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#d23arrow)"/>
  <text x="245" y="90" font-size="13" font-weight="bold" fill="#0d9488">來回擺盪</text>
  <text x="245" y="110" font-size="12" fill="#64748b">8-12 次</text>
  <text x="245" y="128" font-size="11" fill="#64748b">幅度逐次加大</text>
  <text x="130" y="248" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：動態伸展＝帶著動作反覆活動</text>
</svg>`;

// 運動前後伸展安排的四個步驟（操作步驟圖）。
const stretchStepsSvg = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="170" fill="#ffffff"/>
  <line x1="55" y1="48" x2="405" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="55" cy="48" r="20" fill="#0d9488"/>
    <text x="55" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="55" y="92" font-size="11" fill="#0f172a">動態熱身</text>
    <text x="55" y="107" font-size="11" fill="#64748b">5-10 分鐘</text>
    <circle cx="170" cy="48" r="20" fill="#0d9488"/>
    <text x="170" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="170" y="92" font-size="11" fill="#0f172a">正式運動</text>
    <text x="170" y="107" font-size="11" fill="#64748b">主要訓練</text>
    <circle cx="285" cy="48" r="20" fill="#0d9488"/>
    <text x="285" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="285" y="92" font-size="11" fill="#0f172a">靜態伸展</text>
    <text x="285" y="107" font-size="11" fill="#64748b">運動後收尾</text>
    <circle cx="405" cy="48" r="20" fill="#0d9488"/>
    <text x="405" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="405" y="92" font-size="11" fill="#0f172a">15-30秒</text>
    <text x="405" y="107" font-size="11" fill="#64748b">微痠即可</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 23,
  phase: "W4",
  title: "伸展原理：靜態伸展與動態伸展",
  minutes: 16,
  goal: "理解靜態伸展與動態伸展的差異、各自適合的時機（運動前後），並學會安全操作的力道與注意事項，避免用錯方法或過度伸展。",
  sections: [
    {
      heading: "為什麼運動前後要用不同的伸展方式？",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

「伸展」聽起來是同一件事，但其實依做法可以分成兩大類，適合的時機完全不同：**靜態伸展**是把肌肉拉到一個角度後**停住不動**，維持一段時間；**動態伸展**則是**帶著動作、在可控範圍內反覆擺動**，讓關節與肌肉逐漸熱起來。很多人習慣運動前隨便做幾個「壓腿停住不動」的動作，其實這正是常見的誤用——運動前更適合的是動態伸展，靜態伸展則留到運動後或單獨安排的柔軟度訓練時段。

搞懂兩者的差異，不只是動作長得不一樣，背後的目的也不同：動態伸展像是幫身體「暖機」，逐步喚醒神經肌肉系統、提高關節活動度，為接下來的運動做準備；靜態伸展則像是運動後的「收尾保養」，讓已經工作過的肌肉慢慢放鬆延展、幫助恢復。下面先看兩者的整體對照，再分別拆解做法與注意事項。`,
      figures: [
        {
          id: "d23-fig1",
          title: "靜態伸展與動態伸展總覽",
          alt: "左側為彎腰前彎、觸碰腳部的人形示意靜態伸展動作，旁附碼表圖示標示停留 15-30 秒；右側為單腳向前擺盪的人形示意動態伸展動作，旁附虛線弧線標示來回擺盪 8-12 次。",
          svg: stretchOverviewSvg,
          caption: "簡單記憶：靜態伸展停住不動、留給運動後；動態伸展帶著動作、留給運動前。",
        },
      ],
    },
    {
      heading: "靜態伸展：停住不動，慢慢延展",
      body: `靜態伸展的做法是：找到一個會感覺肌肉被拉開、但不到疼痛的角度，**停在那個位置不動**，維持一段時間再放鬆。常見安排是每個動作停留 **15～30 秒**，重複 2～3 次，力道用 0～10 疼痛量表來抓，抓在 **5～6 分微痠**即可，絕對不要拉到尖銳刺痛或麻感——那已經超出「伸展」的範圍，可能是關節或神經被過度牽拉的警訊，應該立刻放鬆並停止。

靜態伸展最適合安排在**運動後**或**單獨的柔軟度訓練時段**，這時肌肉溫度較高、比較容易延展，也能趁著剛運動完的機會，針對緊繃的肌群多停留一下。教練與運動科學界普遍建議，運動前做太長時間的靜態伸展，可能會讓接下來需要瞬發力的動作（如衝刺、跳躍）表現暫時下降，因此**運動前不建議長時間靜態伸展**，這點留到下一節動態伸展會說明原因。做靜態伸展時記得**維持自然呼吸、不要憋氣**，呼吸有助於肌肉放鬆，效果會比咬牙硬撐更好。`,
      figures: [
        {
          id: "d23-fig2",
          title: "靜態伸展示意：停留角度與計時",
          alt: "一個彎腰向前伸展的示意人形，後側大腿肌肉以粗線標出為被拉長的部位，圖右附一個碼表圖示標註停留十五到三十秒。",
          svg: staticStretchSvg,
          caption: "靜態伸展：找到延展角度、停住不動，停留 15-30 秒，力道抓在 5-6 分微痠即可。",
        },
      ],
    },
    {
      heading: "動態伸展：帶著動作，逐漸加大幅度",
      body: `動態伸展不是「停住不動」，而是讓身體在**可控制的範圍內**，帶著動作來回擺動或伸展，例如高抬腿、擺腿、繞肩、弓箭步走等。做法上通常是**每個動作重複 8～12 次**，幅度從小開始，隨著身體熱開，逐次加大到當下舒適的最大範圍，但**不用甩動或藉助慣性猛甩**，速度與幅度都應該在自己能控制的範圍內。

動態伸展的價值在於它同時做到兩件事：一是**提高關節活動度**，讓待會要用到的關節先活動開；二是**喚醒神經肌肉系統**，讓身體記得等一下要用到的動作模式（例如深蹲前先做幾次徒手深蹲、跑步前先做高抬腿）。這也是為什麼運動前建議用動態伸展取代長時間靜態伸展——動態的方式更貼近接下來要做的運動型態，暖身效果也更全面。動態伸展一樣要抓力道與幅度，如果某個動作會引發尖銳疼痛，應該縮小幅度或先跳過該動作，並留意是否為舊傷部位。`,
      figures: [
        {
          id: "d23-fig3",
          title: "動態伸展示意：擺盪動作與反覆次數",
          alt: "一個站立人形示意圖，一腳站立、另一腳沿著弧形虛線來回擺盪，標註來回擺盪八到十二次、幅度逐次加大。",
          svg: dynamicStretchSvg,
          caption: "動態伸展：帶著動作反覆活動，幅度從小到大，通常重複 8-12 次。",
        },
      ],
    },
    {
      heading: "運動前後怎麼安排：時機對照與步驟",
      body: `把兩種伸展放進一次完整的運動流程，簡單的原則是：**運動前用動態、運動後用靜態**。運動前先花 5～10 分鐘做動態伸展與輕度熱身，讓心跳、體溫、關節活動度逐步提升，為正式運動做準備；運動後，趁身體還溫熱時，針對主要用力的肌群做靜態伸展，每個動作停留 15～30 秒，幫助肌肉放鬆、可能有助於減輕運動後的緊繃感。

如果只是想單獨提升柔軟度（不搭配運動），也可以把靜態伸展安排成獨立的訓練時段，例如睡前做一組全身伸展。無論哪種安排，共同原則都是：**力道抓在微痠（5～6 分），不到疼痛**；如果本身有關節疾病、近期受傷或明顯活動度受限，伸展前建議先諮詢醫師或物理治療師，確認哪些動作適合、哪些要避免，不要憑感覺勉強拉伸。下面的步驟圖整理了一次完整運動前後的伸展安排，可以直接套用。`,
      figures: [
        {
          id: "d23-fig4",
          title: "運動前後伸展安排：四個步驟",
          alt: "四個編號步驟由虛線串接：步驟 1 動態熱身 5 到 10 分鐘、步驟 2 正式運動、步驟 3 運動後靜態伸展、步驟 4 每個動作停留 15 到 30 秒微痠即可。",
          svg: stretchStepsSvg,
          caption: "運動前動態、運動後靜態，是安排一次完整訓練流程最簡單的原則。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "靜態伸展＝停住不動維持一段時間（如 15-30 秒）；動態伸展＝帶著動作反覆擺動（如 8-12 次），逐漸加大幅度。",
    "一般建議運動前用動態伸展暖身、運動後用靜態伸展收尾放鬆，別把兩者時機用反。",
    "伸展力道用 0-10 量表抓在 5-6 分微痠即可，出現尖銳刺痛或麻感應立即停止，那已超出正常伸展範圍。",
    "有關節疾病、近期受傷或明顯活動度受限者，伸展前應先諮詢醫師或物理治療師，確認適合的動作。",
  ],
  quiz: [
    {
      id: "d23-q1",
      question: "靜態伸展的做法特徵是什麼？",
      options: [
        "找到延展角度後停住不動，維持一段時間",
        "帶著動作反覆來回擺動",
        "盡量拉到最大痛感才有效",
        "不需要維持任何時間，做一下就好",
      ],
      answerIndex: 0,
      explanation:
        "靜態伸展是找到一個會感覺肌肉被拉開、但不到疼痛的角度，停在那個位置不動，維持一段時間（常見 15-30 秒）再放鬆。反覆來回擺動屬於動態伸展的做法，兩者不可混為一談。",
    },
    {
      id: "d23-q2",
      question: "動態伸展的做法特徵是什麼？",
      options: [
        "停住不動，維持較長時間",
        "帶著動作在可控範圍內反覆擺動，幅度逐次加大",
        "靠慣性用力甩動，速度越快越好",
        "每個動作只能做一次",
      ],
      answerIndex: 1,
      explanation:
        "動態伸展是帶著動作在可控範圍內反覆擺動，例如高抬腿、擺腿，幅度從小開始逐次加大，通常重複 8-12 次。動作應該在自己能控制的範圍內完成，不是靠慣性猛甩，猛甩反而容易失控受傷。",
    },
    {
      id: "d23-q3",
      question: "一般建議運動前適合安排哪一種伸展？主要原因是什麼？",
      options: [
        "靜態伸展，因為停留時間長效果最好",
        "動態伸展，因為長時間靜態伸展可能暫時降低瞬發力表現，且動態更貼近接下來的動作模式",
        "都不需要伸展，直接開始正式運動即可",
        "兩種都要各做半小時才夠暖身",
      ],
      answerIndex: 1,
      explanation:
        "運動前建議用動態伸展，因為它同時提高關節活動度並喚醒神經肌肉系統，更貼近接下來要做的運動型態；教練與運動科學界普遍認為運動前做太長時間靜態伸展，可能讓瞬發力動作表現暫時下降，因此靜態伸展更適合留到運動後。",
    },
    {
      id: "d23-q4",
      question: "靜態伸展建議的安全力道，大約落在疼痛量表的幾分？",
      options: ["0-1 分", "5-6 分微痠", "9-10 分接近疼痛", "力道不重要，越痛效果越好"],
      answerIndex: 1,
      explanation:
        "靜態伸展力道用 0-10 疼痛量表抓在 5-6 分微痠即可，不需要也不應該拉到尖銳疼痛。過度追求「越痛越有效」反而容易造成肌肉或關節被過度牽拉的傷害。",
    },
    {
      id: "d23-q5",
      question: "做靜態伸展時，如果出現尖銳刺痛或麻感，應該怎麼處理？",
      options: [
        "忍耐撐久一點，效果會更好",
        "立即放鬆並停止，那已超出正常伸展範圍",
        "換另一個角度繼續拉到麻感消失",
        "麻感是正常現象，不需要理會",
      ],
      answerIndex: 1,
      explanation:
        "尖銳刺痛或麻感已經超出正常伸展的「微痠」範圍，可能是關節或神經被過度牽拉的警訊，應該立即放鬆並停止該動作。若持續出現這類感覺，建議諮詢醫師或物理治療師，不要自行硬撐或反覆嘗試。",
    },
    {
      id: "d23-q6",
      question: "動態伸展常見的重複次數安排大約是多少？",
      options: ["1 次就好", "每個動作約 8-12 次", "至少 50 次以上", "沒有次數限制，越多越好"],
      answerIndex: 1,
      explanation:
        "動態伸展通常安排每個動作重複 8-12 次，幅度從小到大逐次增加。次數不是越多越好，重點是動作品質與可控性，過度重複反而可能造成疲勞或動作變形。",
    },
    {
      id: "d23-q7",
      question: "如果本身有關節疾病、近期受傷或明顯活動度受限，做伸展前建議怎麼做？",
      options: [
        "憑感覺自行嘗試，痛了再停",
        "先諮詢醫師或物理治療師，確認哪些動作適合、哪些要避免",
        "完全不能做任何伸展",
        "直接跳過暖身，強度加倍練回來",
      ],
      answerIndex: 1,
      explanation:
        "有關節疾病、近期受傷或明顯活動度受限的人，身體狀況較為特殊，建議先諮詢醫師或物理治療師，確認哪些伸展動作適合、哪些要避免，再開始安排伸展計畫，而不是憑感覺自行嘗試以免加重問題。",
    },
  ],
};

export default lesson;
