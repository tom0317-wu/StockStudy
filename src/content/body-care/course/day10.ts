import type { DayLesson } from "@/lib/content/types";

// 按、揉、推、捏四種手法示意圖（2x2 對照）：以膚色手指/手掌塊表示手，
// 搭配皮膚面與方向箭頭呈現動作，畫風參考 pushPinchSvg（較擬真，非抽象方框線條）。
const fourTechniquesSvg = `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="320" fill="#ffffff"/>
  <defs>
    <marker id="arw10" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 按 -->
  <rect x="10" y="10" width="190" height="140" rx="10" fill="#f0fdfa" stroke="#99f6e4"/>
  <text x="105" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">按</text>
  <rect x="60" y="88" width="90" height="26" rx="10" fill="#fcd9b6" stroke="#92400e" stroke-width="1.5"/>
  <ellipse cx="105" cy="70" rx="11" ry="15" fill="#fcd9b6" stroke="#92400e" stroke-width="1.5"/>
  <line x1="105" y1="85" x2="105" y2="100" stroke="#92400e" stroke-width="4" marker-end="url(#arw10)"/>
  <text x="105" y="132" text-anchor="middle" font-size="10" fill="#475569">定點垂直下壓、不移動</text>
  <!-- 揉 -->
  <rect x="220" y="10" width="190" height="140" rx="10" fill="#fff1f2" stroke="#fecdd3"/>
  <text x="315" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#e11d48">揉</text>
  <rect x="270" y="88" width="90" height="26" rx="10" fill="#fda4af" fill-opacity="0.5" stroke="#e11d48" stroke-width="1.5"/>
  <ellipse cx="315" cy="70" rx="11" ry="15" fill="#fcd9b6" stroke="#92400e" stroke-width="1.5"/>
  <path d="M315,84 A16,16 0 1 1 299,96" fill="none" stroke="#e11d48" stroke-width="3" marker-end="url(#arw10)"/>
  <text x="315" y="132" text-anchor="middle" font-size="10" fill="#475569">帶皮膚定點畫小圈</text>
  <!-- 推 -->
  <rect x="10" y="170" width="190" height="140" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
  <text x="105" y="190" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">推</text>
  <rect x="34" y="248" width="140" height="18" rx="9" fill="#e0e7ff" stroke="#94a3b8"/>
  <rect x="42" y="230" width="34" height="24" rx="9" fill="#fcd9b6" stroke="#92400e" stroke-width="1.5"/>
  <line x1="76" y1="242" x2="150" y2="242" stroke="#4f46e5" stroke-width="4" marker-end="url(#arw10)"/>
  <text x="105" y="292" text-anchor="middle" font-size="10" fill="#475569">沿肌肉走向單方向滑推</text>
  <!-- 捏 -->
  <rect x="220" y="170" width="190" height="140" rx="10" fill="#fefce8" stroke="#fde68a"/>
  <text x="315" y="190" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">捏</text>
  <ellipse cx="315" cy="248" rx="30" ry="18" fill="#fda4af" fill-opacity="0.6" stroke="#b45309" stroke-width="1.5"/>
  <path d="M290,232 Q283,248 292,262" fill="none" stroke="#92400e" stroke-width="5" stroke-linecap="round"/>
  <path d="M340,232 Q347,248 338,262" fill="none" stroke="#92400e" stroke-width="5" stroke-linecap="round"/>
  <text x="315" y="292" text-anchor="middle" font-size="10" fill="#475569">拇指與四指對合提捏</text>
</svg>`;

// 揉法圈幅示意（小圈與較大圈的差異）。
const kneadingCircleSvg = `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="360" height="200" fill="#ffffff"/>
  <text x="100" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">小範圍揉（放鬆用）</text>
  <ellipse cx="100" cy="110" rx="60" ry="34" fill="#5eead4" opacity="0.35"/>
  <circle cx="100" cy="110" r="14" fill="none" stroke="#0d9488" stroke-width="3" stroke-dasharray="4 3"/>
  <text x="100" y="170" text-anchor="middle" font-size="10" fill="#475569">圈幅約 1-2 公分</text>
  <text x="260" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">大範圍揉（暖身用）</text>
  <ellipse cx="260" cy="110" rx="60" ry="34" fill="#fda4af" opacity="0.35"/>
  <circle cx="260" cy="110" r="30" fill="none" stroke="#e11d48" stroke-width="3" stroke-dasharray="4 3"/>
  <text x="260" y="170" text-anchor="middle" font-size="10" fill="#475569">圈幅約 3-5 公分</text>
</svg>`;

// 四手法練習步驟（操作步驟圖）。
const techniqueStepsSvg = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="52" y1="48" x2="368" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="52" cy="48" r="20" fill="#0d9488"/>
    <text x="52" y="53" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="52" y="88" font-size="11" fill="#0f172a">按</text>
    <text x="52" y="102" font-size="10" fill="#64748b">定點下壓</text>
    <circle cx="158" cy="48" r="20" fill="#0d9488"/>
    <text x="158" y="53" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="158" y="88" font-size="11" fill="#0f172a">揉</text>
    <text x="158" y="102" font-size="10" fill="#64748b">定點打圈</text>
    <circle cx="264" cy="48" r="20" fill="#0d9488"/>
    <text x="264" y="53" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="264" y="88" font-size="11" fill="#0f172a">推</text>
    <text x="264" y="102" font-size="10" fill="#64748b">單向滑推</text>
    <circle cx="368" cy="48" r="20" fill="#0d9488"/>
    <text x="368" y="53" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="368" y="88" font-size="11" fill="#0f172a">捏</text>
    <text x="368" y="102" font-size="10" fill="#64748b">提捏放鬆</text>
  </g>
</svg>`;

// 推法 vs 捏法手法對照示意圖。
const pushPinchSvg = `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="210" fill="#ffffff"/>
  <defs>
    <marker id="a10" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#0d9488"/>
    </marker>
  </defs>
  <rect x="12" y="12" width="192" height="186" rx="10" fill="#f0fdfa" stroke="#99f6e4"/>
  <text x="108" y="36" text-anchor="middle" font-size="14" font-weight="bold" fill="#0d9488">推法</text>
  <text x="108" y="54" text-anchor="middle" font-size="11" fill="#115e59">沿肌肉走向滑推、會移動</text>
  <rect x="36" y="120" width="140" height="20" rx="10" fill="#e2e8f0" stroke="#94a3b8"/>
  <rect x="44" y="92" width="34" height="26" rx="8" fill="#5eead4" stroke="#0d9488" stroke-width="1.5"/>
  <line x1="72" y1="105" x2="164" y2="105" stroke="#0d9488" stroke-width="3" marker-end="url(#a10)"/>
  <text x="108" y="168" text-anchor="middle" font-size="11" fill="#334155">適合大面積：背部、大腿</text>
  <rect x="216" y="12" width="192" height="186" rx="10" fill="#f0fdfa" stroke="#99f6e4"/>
  <text x="312" y="36" text-anchor="middle" font-size="14" font-weight="bold" fill="#0d9488">捏法</text>
  <text x="312" y="54" text-anchor="middle" font-size="11" fill="#115e59">把肌肉抓起、一提一放</text>
  <path d="M280 138 Q312 96 344 138 Z" fill="#e2e8f0" stroke="#94a3b8"/>
  <line x1="296" y1="86" x2="308" y2="118" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <line x1="328" y1="86" x2="316" y2="118" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <text x="312" y="168" text-anchor="middle" font-size="11" fill="#334155">適合豐厚肌肉：小腿、斜方肌</text>
</svg>`;

const lesson: DayLesson = {
  day: 10,
  phase: "W2",
  title: "徒手治療原理：按、揉、推、捏",
  minutes: 17,
  goal: "認識徒手放鬆最基礎的四種手法——按、揉、推、捏——的動作差異、適用情境與力道控制原則，能在自己或家人身上安全地練習操作。",
  sections: [
    {
      heading: "四種基礎手法總覽",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

前兩天認識了經絡與常用穴位的「位置知識」，今天要學的是「怎麼操作」——徒手放鬆最基礎的四種手法：**按、揉、推、捏**。這四種手法是後面幾天（滾筒使用、上下肢放鬆實作）會不斷用到的基本動作，先把動作要領練熟，之後應用起來會更順手。

四種手法的核心差異在於**施力方向與是否移動**：

- **按**：手指或掌根**垂直向下**定點施壓，不移動、不打圈，像按電鈴一樣由輕到重。
- **揉**：手指帶動皮膚與皮下組織，在**同一個定點**畫小圓圈，重點是「帶著皮膚一起轉」，而不是手指在皮膚表面摩擦滑動。
- **推**：掌根或手指沿著肌肉走向，**朝單一方向**做較長距離的直線滑動，像把緊繃的組織「推開、推平」。
- **捏**：用拇指與其餘四指對合，把一小塊肌肉皮膚**提起來**再放鬆，一提一放反覆進行，常用於四肢肌肉較豐厚的部位。

下方示意圖用四個象限分別呈現這四種手法的動作方向，先建立整體印象，接下來三節會分別說明細節與適用情境。`,
      figures: [
        {
          id: "d10-fig1",
          title: "按、揉、推、捏四種手法對照",
          alt: "四格對照圖：左上「按」以垂直向下箭頭表示定點下壓；右上「揉」以圓弧箭頭表示定點畫圈；左下「推」以水平箭頭表示單方向滑推；右下「捏」以兩條弧線表示拇指與四指對合提捏。",
          svg: fourTechniquesSvg,
          caption: "四種手法的核心差異在於施力方向與是否移動：按不動、揉定點打圈、推單向滑動、捏提放。",
        },
      ],
    },
    {
      heading: "按與揉：定點施力的兩種變化",
      body: `**按法**是最基礎也最容易上手的手法，重點口訣是「**由輕到重、停留感受**」：手指或掌根垂直放在目標位置，力道緩慢增加，感受到 0–10 疼痛量表約 5–6 分微痠感時停留數秒，再緩慢放開。按法適合用在肌肉較深層、範圍較小的緊繃點，例如昨天學到的穴位按壓，本質上就是一種按法。

**揉法**則是在按的基礎上加入「畫圈」，重點口訣是「**帶皮膚轉、不摩擦皮膚**」：手指扣住皮膚後帶動皮下組織一起小範圍畫圓，而不是手指在皮膚表面前後摩擦——後者容易造成皮膚刺激甚至破皮，是初學者常見的錯誤。揉法的圈幅可以依目的調整：**小範圍揉**（約 1–2 公分）適合放鬆單一緊繃點；**大範圍揉**（約 3–5 公分）適合大面積肌肉的暖身或整體放鬆，例如按摩前的暖身動作。

實務上按與揉常常搭配使用：先用揉法大範圍暖身，讓組織稍微放鬆、血液循環變好，再用按法針對特別緊繃的小範圍定點加強。兩者都是「定點」操作，差別只在於是否加入畫圈的動作。`,
      figures: [
        {
          id: "d10-fig2",
          title: "揉法的圈幅大小差異",
          alt: "兩個橢圓區域對照圖，左側標示小範圍揉、圈幅約 1 到 2 公分，用於放鬆單點；右側標示大範圍揉、圈幅約 3 到 5 公分，用於大面積暖身。",
          svg: kneadingCircleSvg,
          caption: "揉法可依目的調整圈幅大小：小圈放鬆定點，大圈用於大面積暖身。",
        },
      ],
    },
    {
      heading: "推與捏：處理較大範圍與豐厚肌肉",
      body: `**推法**的操作方向和前兩者不同，它是「**會移動**」的手法：用掌根、拇指或前臂沿著肌肉纖維走向，以持續穩定的力道朝單一方向滑推過去，速度不宜過快，重點是感受組織隨著推動而逐漸放鬆的過程。推法常用於處理**較長範圍**的緊繃，例如整條背部脊柱兩側、大腿前側等面積較大的肌肉群，本週後面幾天教滾筒與筋膜刀使用時，原理上也是推法的延伸應用。

**捏法**則專門用於**肌肉較豐厚、可以被「抓起來」的部位**，例如小腿肚、肩頸兩側的斜方肌、上臂等。操作時用拇指與其餘四指對合，像抓麵團一樣把一小塊肌肉連同皮膚輕輕提起，停留一兩秒後放開，一提一放反覆進行。捏法的力道判斷比較直觀：提起的力道以「感覺組織被拉起、但不會痛到皺眉」為原則，若出現尖銳刺痛應立即減輕力道。

四種手法沒有絕對的優劣之分，實務上會依部位、目的交替搭配使用——這也是接下來第 12、13 天上下肢實作課程的操作基礎。`,
      figures: [
        {
          id: "d10-fig3",
          title: "推法與捏法的差異",
          alt: "兩格對照圖：左格推法，以青色掌根沿肌肉條朝單一方向滑推的箭頭，適合背部大腿等大面積；右格捏法，兩指對合把一小塊隆起的肌肉提起，適合小腿斜方肌等豐厚肌肉。",
          svg: pushPinchSvg,
          caption: "推法會沿肌肉走向移動、處理大面積；捏法把肌肉抓起一提一放、處理豐厚可抓起的部位。",
        },
      ],
    },
    {
      heading: "力道控制與安全練習",
      body: `不管使用哪一種手法，**力道控制**都是安全操作的核心。這裡統一整理成三個原則：

1. **量表對照**：全程使用 0–10 疼痛量表自我評估，操作過程建議停留在 **5–6 分「微痠」**的範圍，超過 7 分（明顯疼痛）就是力道過重的訊號，應立即減輕。
2. **循序漸進**：一開始先用較輕的力道測試該部位的敏感度，確認沒有異常反應後再逐漸加重，不要一開始就用最大力氣。
3. **停止時機**：操作中若出現尖銳刺痛、麻木感增加、皮膚異常泛紅發熱等狀況，應立即停止，這些都不是「正常痠感」，而可能代表操作不當或該部位不適合徒手處理，必要時請諮詢物理治療師等專業人員。

今天的練習建議：在自己的小腿肚上，依序練習按、揉、推、捏四個手法各 30 秒，感受每種手法帶來的感覺差異。骨突處（如腳踝骨、膝蓋骨）、脊椎正中線、皮膚有傷口發炎處都應避開，不要直接施力。`,
      figures: [
        {
          id: "d10-fig4",
          title: "四手法練習順序",
          alt: "四個編號步驟由虛線串接：步驟 1 按（定點下壓）、步驟 2 揉（定點打圈）、步驟 3 推（單向滑推）、步驟 4 捏（提捏放鬆）。",
          svg: techniqueStepsSvg,
          caption: "建議依此順序在小腿肚上各練習約 30 秒，感受四種手法的動作與感覺差異。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "按：垂直定點下壓不移動；揉：定點帶動皮下組織畫圈；推：沿肌肉走向單方向滑動；捏：提起肌肉皮膚放鬆。",
    "揉法要「帶皮膚一起轉」而非在皮膚表面摩擦滑動，避免刺激或破皮。",
    "揉法圈幅可依目的調整：小範圍放鬆定點、大範圍用於暖身。",
    "推法與捏法適合處理較大範圍或較豐厚的肌肉部位，是滾筒與徒手放鬆實作的基礎。",
    "全程用 0–10 疼痛量表控制力道，維持 5–6 分微痠，出現尖銳刺痛或異常反應應立即停止。",
  ],
  quiz: [
    {
      id: "d10-q1",
      question: "「按」與「揉」這兩種手法最主要的動作差異是什麼？",
      options: [
        "按會大範圍移動，揉完全不動",
        "按是垂直定點下壓不畫圈，揉是在同一定點帶動皮下組織畫小圓圈",
        "兩者完全相同，沒有差異",
        "按只能用於腳部，揉只能用於手部",
      ],
      answerIndex: 1,
      explanation:
        "按法是垂直定點下壓、由輕到重、不畫圈；揉法則是在同一個定點加入畫圈動作，帶動皮下組織一起轉。兩者都屬於「定點」操作，差別在於是否加入畫圈，這是分辨兩種手法最核心的依據。",
    },
    {
      id: "d10-q2",
      question: "揉法操作時，容易造成皮膚刺激甚至破皮的常見錯誤是什麼？",
      options: [
        "力道太輕，感覺不到任何效果",
        "手指在皮膚表面前後摩擦滑動，而不是帶動皮下組織一起轉",
        "圈幅太大，超過 3 公分",
        "操作時間太短，不到 10 秒",
      ],
      answerIndex: 1,
      explanation:
        "揉法的正確做法是手指扣住皮膚、帶動皮下組織一起小範圍畫圓；如果手指只是在皮膚表面前後摩擦滑動而沒有帶動皮下組織，容易造成皮膚刺激甚至破皮，是初學者最常見的操作錯誤。",
    },
    {
      id: "d10-q3",
      question: "「推法」的操作方式與適用情境是？",
      options: [
        "定點畫圈，適用於單一小範圍痠痛點",
        "沿肌肉走向朝單一方向滑動，適用於較長範圍的緊繃",
        "把肌肉提起來放鬆，適用於肌肉豐厚的部位",
        "垂直向下按壓，完全不移動",
      ],
      answerIndex: 1,
      explanation:
        "推法是用掌根、拇指或前臂沿著肌肉纖維走向，朝單一方向做較長距離的滑動，適合處理背部脊柱兩側、大腿前側等面積較大的緊繃範圍。這與按、揉的「定點不移動」和捏的「提放」都不同，是四種手法中唯一持續移動的手法。",
    },
    {
      id: "d10-q4",
      question: "捏法最適合用在身體的哪一類部位？",
      options: [
        "骨突處，如腳踝骨、膝蓋骨",
        "脊椎正中線",
        "肌肉較豐厚、可以被拇指與四指提起的部位，如小腿肚、斜方肌",
        "皮膚有傷口發炎的部位",
      ],
      answerIndex: 2,
      explanation:
        "捏法需要用拇指與其餘四指對合把肌肉連同皮膚提起，因此只適合肌肉較豐厚、能被抓起的部位，例如小腿肚、肩頸斜方肌、上臂等。骨突處、脊椎正中線與皮膚傷口發炎處都應避開，不適合任何徒手施力手法。",
    },
    {
      id: "d10-q5",
      question: "操作過程中，力道應維持在 0–10 疼痛量表的哪個範圍？",
      options: ["0–1 分，完全沒有感覺", "5–6 分，微痠的程度", "9–10 分，明顯劇痛", "沒有固定範圍，越痛越好"],
      answerIndex: 1,
      explanation:
        "課程建議全程使用 0–10 疼痛量表自我評估，操作力道維持在 5–6 分「微痠」的範圍；超過 7 分明顯疼痛就是力道過重的警訊，應立即減輕，而不是「越痛效果越好」。",
    },
    {
      id: "d10-q6",
      question: "小美在幫家人做揉法放鬆時，對方突然說有尖銳刺痛感，這時她應該怎麼做？",
      options: [
        "繼續加重力道，因為刺痛代表快要放鬆了",
        "立即停止或減輕力道，這不是正常的痠感反應",
        "改成用更快的速度摩擦皮膚",
        "忽略對方反應，堅持做滿預定時間",
      ],
      answerIndex: 1,
      explanation:
        "尖銳刺痛、麻木感增加、皮膚異常泛紅發熱都不是正常的「微痠」反應，而可能代表操作不當或該部位不適合繼續施力，應立即停止或大幅減輕力道，必要時建議諮詢物理治療師等專業人員，不應忽略對方的疼痛反應繼續操作。",
    },
    {
      id: "d10-q7",
      question: "今天學到的按、揉、推、捏四種手法，主要是為了幫接下來哪些課程做準備？",
      options: [
        "純粹是歷史知識，與後續課程無關",
        "為第 11 天滾筒/筋膜刀使用與第 12、13 天上下肢放鬆實作打基礎",
        "為下週的體態評估課程做準備",
        "為長者防跌倒評估做準備",
      ],
      answerIndex: 1,
      explanation:
        "四種基礎手法是本週後續實作課程（滾筒與筋膜刀使用、上肢肩頸放鬆、下肢足底放鬆）的操作基礎，滾筒等工具的使用原理上也是推法等徒手技巧的延伸應用，先把手法練熟有助於後面課程的實作。",
    },
  ],
};

export default lesson;
