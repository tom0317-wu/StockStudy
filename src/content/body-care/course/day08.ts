import type { DayLesson } from "@/lib/content/types";

// 經絡走向示意圖：自繪較擬真的站立正面人形（座標自控，比例參考日06 plumbLineSvg手法）
// ＋四色虛線標示手足陰陽經大致走向方向，非精確經穴圖。
const meridianBodySvg = `<svg viewBox="0 0 460 505" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="505" fill="#ffffff"/>
  <g fill="#f1f5f9" stroke="#334155" stroke-width="2">
    <ellipse cx="230" cy="60" rx="20" ry="24"/>
    <rect x="220" y="82" width="20" height="16" rx="4"/>
    <path d="M196,98 L264,98 C270,132 268,162 258,182 C266,197 268,212 260,224 L200,224 C192,212 194,197 202,182 C192,162 190,132 196,98 Z"/>
  </g>
  <line x1="196" y1="104" x2="180" y2="178" stroke="#cbd5e1" stroke-width="11" stroke-linecap="round"/>
  <line x1="180" y1="178" x2="172" y2="242" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="170" cy="252" rx="8" ry="11" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <line x1="264" y1="104" x2="280" y2="178" stroke="#cbd5e1" stroke-width="11" stroke-linecap="round"/>
  <line x1="280" y1="178" x2="288" y2="242" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="290" cy="252" rx="8" ry="11" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <line x1="210" y1="226" x2="202" y2="322" stroke="#cbd5e1" stroke-width="15" stroke-linecap="round"/>
  <line x1="202" y1="322" x2="196" y2="418" stroke="#cbd5e1" stroke-width="11" stroke-linecap="round"/>
  <ellipse cx="190" cy="428" rx="14" ry="7" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <line x1="250" y1="226" x2="258" y2="322" stroke="#cbd5e1" stroke-width="15" stroke-linecap="round"/>
  <line x1="258" y1="322" x2="264" y2="418" stroke="#cbd5e1" stroke-width="11" stroke-linecap="round"/>
  <ellipse cx="270" cy="428" rx="14" ry="7" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
  <path d="M200,106 Q190,145 188,180 Q182,215 180,242" fill="none" stroke="#0d9488" stroke-width="3" stroke-dasharray="4 3"/>
  <circle cx="200" cy="106" r="4" fill="#0d9488"/>
  <circle cx="180" cy="242" r="4" fill="#0d9488"/>
  <path d="M268,102 Q282,145 286,180 Q290,215 292,242" fill="none" stroke="#e11d48" stroke-width="3" stroke-dasharray="4 3"/>
  <circle cx="268" cy="102" r="4" fill="#e11d48"/>
  <circle cx="292" cy="242" r="4" fill="#e11d48"/>
  <path d="M216,228 Q208,275 206,322 Q202,370 200,416" fill="none" stroke="#4f46e5" stroke-width="3" stroke-dasharray="4 3"/>
  <circle cx="216" cy="228" r="4" fill="#4f46e5"/>
  <circle cx="200" cy="416" r="4" fill="#4f46e5"/>
  <path d="M256,228 Q262,275 262,322 Q266,370 268,416" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 3"/>
  <circle cx="256" cy="228" r="4" fill="#f59e0b"/>
  <circle cx="268" cy="416" r="4" fill="#f59e0b"/>
  <g font-size="12">
    <circle cx="20" cy="452" r="5" fill="#0d9488"/>
    <text x="32" y="456" fill="#0f172a">手三陰經：手臂內側</text>
    <circle cx="250" cy="452" r="5" fill="#e11d48"/>
    <text x="262" y="456" fill="#0f172a">手三陽經：手臂外側</text>
    <circle cx="20" cy="474" r="5" fill="#4f46e5"/>
    <text x="32" y="478" fill="#0f172a">足三陰經：腿部內側</text>
    <circle cx="250" cy="474" r="5" fill="#f59e0b"/>
    <text x="262" y="478" fill="#0f172a">足三陽經：腿部外側</text>
  </g>
  <text x="230" y="495" text-anchor="middle" font-size="10" fill="#94a3b8">示意走向，非精確經穴定位圖</text>
</svg>`;

// 十二經脈循行為首尾相接的循環概念圖。
const circulationCycleSvg = `<svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="380" height="320" fill="#ffffff"/>
  <circle cx="190" cy="160" r="118" fill="none" stroke="#5eead4" stroke-width="10"/>
  <g font-size="11" fill="#0f172a" text-anchor="middle">
    <circle cx="190" cy="42" r="16" fill="#0d9488"/><text x="190" y="46" fill="#fff" font-weight="bold">肺</text>
    <circle cx="278" cy="72" r="16" fill="#14b8a6"/><text x="278" y="76" fill="#fff" font-weight="bold">大腸</text>
    <circle cx="316" cy="160" r="16" fill="#0d9488"/><text x="316" y="164" fill="#fff" font-weight="bold">胃</text>
    <circle cx="278" cy="248" r="16" fill="#14b8a6"/><text x="278" y="252" fill="#fff" font-weight="bold">脾</text>
    <circle cx="190" cy="278" r="16" fill="#0d9488"/><text x="190" y="282" fill="#fff" font-weight="bold">心</text>
    <circle cx="102" cy="248" r="16" fill="#14b8a6"/><text x="102" y="252" fill="#fff" font-weight="bold">小腸</text>
    <circle cx="64" cy="160" r="16" fill="#0d9488"/><text x="64" y="164" fill="#fff" font-weight="bold">膀胱</text>
    <circle cx="102" cy="72" r="16" fill="#14b8a6"/><text x="102" y="76" fill="#fff" font-weight="bold">腎</text>
  </g>
  <path d="M330 160 A140 140 0 0 1 300 230" fill="none" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow8)"/>
  <defs>
    <marker id="arrow8" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#0f172a"/>
    </marker>
  </defs>
  <text x="190" y="160" text-anchor="middle" font-size="12" fill="#475569">首尾相接</text>
  <text x="190" y="176" text-anchor="middle" font-size="12" fill="#475569">循環不息</text>
  <text x="190" y="310" text-anchor="middle" font-size="10" fill="#94a3b8">傳統學說示意：僅列部分經脈，非完整十二經脈順序圖</text>
</svg>`;

// 「傳統學說 vs 本課衛教定位」概念圖。
const positioningSvg = `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="200" fill="#ffffff"/>
  <defs>
    <marker id="a8" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#334155"/>
    </marker>
  </defs>
  <rect x="14" y="20" width="150" height="100" rx="10" fill="#f0fdfa" stroke="#99f6e4"/>
  <text x="89" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">傳統經絡學說</text>
  <circle cx="89" cy="80" r="18" fill="none" stroke="#5eead4" stroke-width="6"/>
  <path d="M89 62 A18 18 0 1 1 73 71" fill="none" stroke="#2dd4bf" stroke-width="3" marker-end="url(#a8)"/>
  <text x="89" y="112" text-anchor="middle" font-size="11" fill="#115e59">氣血循行不息</text>
  <line x1="170" y1="70" x2="248" y2="70" stroke="#334155" stroke-width="2" marker-end="url(#a8)"/>
  <text x="209" y="62" text-anchor="middle" font-size="11" fill="#64748b">本課定位</text>
  <rect x="256" y="20" width="150" height="100" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
  <text x="331" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">衛教 · 自我保養</text>
  <text x="331" y="66" text-anchor="middle" font-size="11" fill="#3730a3">認識身體、放鬆舒緩</text>
  <text x="331" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">≠ 診斷／治療</text>
  <rect x="14" y="140" width="392" height="46" rx="8" fill="#fff1f2" stroke="#fecdd3"/>
  <text x="210" y="160" text-anchor="middle" font-size="12" fill="#9f1239">有明確健康問題（疼痛、麻木、水腫…）</text>
  <text x="210" y="178" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">→ 請諮詢醫師／中醫師／物理治療師</text>
</svg>`;

const lesson: DayLesson = {
  day: 8,
  phase: "W2",
  title: "中醫經絡基礎：十二正經概念",
  minutes: 16,
  goal: "以衛教角度認識中醫傳統學說中的「經絡」與「十二正經」概念，理解其與現代筋膜/軟組織照護的類比關係，為本週的穴道與徒手放鬆內容建立背景知識。",
  sections: [
    {
      heading: "經絡是什麼：傳統學說的身體地圖",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

從今天開始進入第二週，主題是「筋絡、穴道與筋膜放鬆」。要理解穴道按壓為什麼在民俗與傳統養生中被廣泛使用，得先認識**經絡**這個概念。

**經絡是中醫傳統學說中，人體內氣血運行的通路系統。** 傳統上認為，經絡像一張佈滿全身的路網，把五臟六腑、四肢百骸連結成一個整體；氣血沿著這些通路循行，滋養身體各處。這是流傳數千年的理論體系，屬於傳統醫學的一部分，與現代解剖學所描述的血管、神經、筋膜系統是**不同的觀察框架**，兩者不能直接畫上等號。

經絡系統中最核心的是**十二正經**（也稱十二經脈），加上任脈、督脈等奇經八脈，共同構成傳統理論裡的全身通路網。十二正經分別對應肺、大腸、胃、脾、心、小腸、膀胱、腎、心包、三焦、膽、肝十二個臟腑系統，左右對稱各一條，共二十四條。

今天的目標不是背誦每條經脈的完整路徑，而是建立一個**衛教常識層級的整體概念**：知道「經絡」是什麼、「十二正經」大致涵蓋哪些系統、它和接下來要學的穴道、筋膜放鬆有什麼關係。下方示意圖標出手足陰陽經的大致走向方向，幫助建立空間感。`,
      figures: [
        {
          id: "d08-fig1",
          title: "經絡走向示意（手足陰陽經）",
          alt: "一個自繪站立正面人形示意圖，手臂內側以青色虛線標示手三陰經走向、手臂外側以紅色虛線標示手三陽經、腿部內側以靛色虛線標示足三陰經、腿部外側以橙色虛線標示足三陽經，下方附四色圖例說明。",
          svg: meridianBodySvg,
          caption: "示意圖：手足內外側分屬不同經脈系統，僅呈現大致走向方向，非精確經穴定位。",
        },
      ],
    },
    {
      heading: "十二正經與現代筋膜：兩種觀察框架的類比",
      body: `近年有部分研究者與治療師，嘗試把經絡走向與現代解剖學中的**肌筋膜鏈**（myofascial lines，例如上週提過的後表線、側線）互相對照，發現兩者在路徑上有一些相似之處。這類「經絡－筋膜類比」在學界仍有討論空間，屬於**假說性質的類比觀點**，不是已經證實的等價關係，衛教上我們用「類比」而非「等於」來理解它。

即便如此，這個類比對初學者仍有實用價值：它提供了一個**理解身體是「整體連動」而非各部位獨立**的直覺框架。傳統經絡學說強調「牽一髮動全身」——按壓遠端的手部穴位可能影響到看似不相干的部位；現代筋膜理論也提出類似的「張力傳遞」概念，兩者在「身體是連續整體」這個大方向上有共通的啟發性。

理解這層關係後，本週後面幾天在學合谷、足三里、湧泉等常用穴位，以及徒手放鬆、滾筒/筋膜刀使用時，可以同時用**傳統經絡學說**（穴位、循行）與**現代筋膜／肌肉解剖**（軟組織、張力）兩種語言來描述同一個操作，兩者互為補充，不衝突也不必二選一。`,
      figures: [
        {
          id: "d08-fig2",
          title: "十二正經與臟腑系統循環概念",
          alt: "一個環狀示意圖，環上以teal與淺teal圓圈交替標出肺、大腸、胃、脾、心、小腸、膀胱、腎等臟腑名稱，圓環代表傳統學說中經脈首尾相接、循環不息的概念，箭頭標示循行方向。",
          svg: circulationCycleSvg,
          caption: "傳統學說示意：十二正經被描述為首尾相接的循環路網，僅列部分經脈作示意，非完整循行順序圖。",
        },
      ],
    },
    {
      heading: "氣血循行概念與衛教上的定位",
      body: `傳統學說中的「氣血循行」，簡單理解就是：**氣與血沿著經絡通路，在特定的時間與路徑上周流全身，滋養臟腑與肢體。** 這是傳統中醫理論的核心概念之一，屬於一套自成體系的理論框架，在傳統養生、按摩、針灸等領域被廣泛應用。

在這門課裡，我們對經絡與氣血循行採取**衛教與知識分享的定位**，而非醫療診斷或治療依據：

- 我們會用「傳統上認為」「傳統經絡學說描述」等語句介紹相關概念，不會宣稱某個穴位按壓「能治療」某種疾病。
- 若你或家人有明確的健康問題（如慢性疼痛、麻木、水腫），這些狀況的診斷與治療請務必諮詢醫師、中醫師或物理治療師等專業人員，不建議僅憑衛教內容自行判斷病因。
- 接下來幾天教的按壓、按揉手法，目的是**放鬆與舒緩日常痠脹感**，屬於自我保養範疇，不是醫療處置。

這樣的定位，讓經絡知識可以安全地作為「認識身體、增加身體感受力」的工具，而不會被誤用為診斷或治療的依據。`,
      figures: [
        {
          id: "d08-fig3",
          title: "傳統學說與本課定位的區別",
          alt: "概念對照圖：左方卡片為「傳統經絡學說：氣血循行不息」，箭頭指向右方卡片「衛教·自我保養：認識身體、放鬆舒緩，不等於診斷/治療」，下方紅色提醒有明確健康問題請諮詢醫師/中醫師/物理治療師。",
          svg: positioningSvg,
          caption: "本課把經絡知識定位為衛教與自我保養工具，不作為診斷或治療依據。",
        },
      ],
    },
    {
      heading: "小結與自我練習",
      body: `今天用三句話濃縮重點：**經絡是傳統學說中氣血運行的通路網；十二正經對應十二個臟腑系統；經絡與現代筋膜可互為類比參考，但不是同一件事。**

自我練習（觀察與認識，不涉及操作）：

1. **回顧路網**：看著今天的示意圖，說出手臂內側、外側，腿部內側、外側各大致對應哪一類經脈（陰經或陽經）。
2. **連結上週**：回想第 5 天學過的「後表線」「側線」筋膜概念，想想它們與經絡路網在「身體整體連動」這個想法上有什麼相似之處。
3. **建立分寸感**：練習用「傳統上認為」開頭描述一個經絡相關的說法，養成衛教口吻的表達習慣，這也是接下來兩天學穴位時會延續的表達方式。

明天（第 9 天）我們會實際認識三個最常用的穴位：合谷、足三里、湧泉，包含定位方式與按壓力道的安全原則。`,
      figures: [
        {
          id: "d08-fig4",
          title: "今天的三個學習步驟",
          alt: "三個編號步驟由虛線串接：步驟 1 回顧經絡走向示意圖、步驟 2 連結上週筋膜概念、步驟 3 練習用傳統上認為開頭的衛教表達方式。",
          svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="420" height="160" fill="#ffffff"/>
  <line x1="70" y1="48" x2="350" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="70" cy="48" r="22" fill="#0d9488"/>
    <text x="70" y="54" font-size="18" font-weight="bold" fill="#ffffff">1</text>
    <text x="70" y="92" font-size="12" fill="#0f172a">回顧經絡</text>
    <text x="70" y="108" font-size="12" fill="#64748b">走向示意圖</text>
    <circle cx="210" cy="48" r="22" fill="#0d9488"/>
    <text x="210" y="54" font-size="18" font-weight="bold" fill="#ffffff">2</text>
    <text x="210" y="92" font-size="12" fill="#0f172a">連結上週</text>
    <text x="210" y="108" font-size="12" fill="#64748b">筋膜線概念</text>
    <circle cx="350" cy="48" r="22" fill="#0d9488"/>
    <text x="350" y="54" font-size="18" font-weight="bold" fill="#ffffff">3</text>
    <text x="350" y="92" font-size="12" fill="#0f172a">練習衛教</text>
    <text x="350" y="108" font-size="12" fill="#64748b">口吻表達</text>
  </g>
</svg>`,
          caption: "三個步驟都以觀察與認識為主，不涉及實際按壓操作。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "經絡是中醫傳統學說中，描述氣血運行通路的身體地圖，與現代解剖學是不同的觀察框架。",
    "十二正經對應肺、大腸、胃、脾、心、小腸、膀胱、腎、心包、三焦、膽、肝十二個臟腑系統，左右對稱共二十四條。",
    "經絡與現代肌筋膜鏈在路徑上有部分類比關係，但屬假說性質，不是已證實的等價關係。",
    "課程對經絡與穴位採衛教定位，一律用「傳統上認為」表達，不做醫療診斷或治療宣稱。",
    "身體如有明確健康問題，應諮詢醫師、中醫師或物理治療師，不宜僅憑衛教知識自行判斷。",
  ],
  quiz: [
    {
      id: "d08-q1",
      question: "關於「經絡」的敘述，下列何者最正確？",
      options: [
        "是中醫傳統學說中描述氣血運行通路的身體地圖，與現代解剖學是不同的觀察框架",
        "是現代解剖學已證實、與血管完全相同的構造",
        "是一種已被醫學實驗完全證實的治療儀器",
        "只存在於四肢，軀幹與臟腑沒有經絡通過",
      ],
      answerIndex: 0,
      explanation:
        "經絡是中醫傳統學說中的身體地圖概念，用來描述氣血運行的通路，屬於傳統醫學理論體系，與現代解剖學的血管、神經系統是不同的觀察框架，不能直接畫上等號。傳統上認為經絡遍佈全身，連結臟腑與四肢，並非只存在於四肢。",
    },
    {
      id: "d08-q2",
      question: "十二正經對應多少個臟腑系統？",
      options: ["六個", "八個", "十個", "十二個"],
      answerIndex: 3,
      explanation:
        "十二正經分別對應肺、大腸、胃、脾、心、小腸、膀胱、腎、心包、三焦、膽、肝十二個臟腑系統，左右對稱各一條，合計二十四條。這是傳統經絡學說的核心架構之一。",
    },
    {
      id: "d08-q3",
      question: "課程對「經絡與現代筋膜的類比關係」採取什麼態度？",
      options: [
        "兩者完全相同，可以互相取代",
        "兩者毫無關聯，不必一起討論",
        "屬於假說性質的類比，在「身體是整體連動」的方向上有共通啟發，但不是已證實的等價關係",
        "現代筋膜理論已經完全推翻經絡學說",
      ],
      answerIndex: 2,
      explanation:
        "經絡與現代肌筋膜鏈的路徑類比目前仍屬假說性質，學界尚在討論，不是已經證實的等價關係。課程採取的定位是：兩者在「身體整體連動」的大方向上可以互為補充參考，但用詞上要避免宣稱兩者完全等同。",
    },
    {
      id: "d08-q4",
      question: "小明看到網路文章寫「按壓某穴位能治癒糖尿病」，依本課程的衛教原則，這樣的敘述有什麼問題？",
      options: [
        "沒有問題，穴位按壓本來就能治療糖尿病",
        "這是把衛教知識當成醫療治療宣稱使用，糖尿病等疾病的診斷治療應諮詢醫師，不應僅憑穴位按壓自行判斷",
        "問題在於選錯了穴位，換一個穴位就正確了",
        "只要按壓力道夠強，這個說法就會成立",
      ],
      answerIndex: 1,
      explanation:
        "本課程對經絡穴位採衛教與知識分享定位，不做醫療診斷或治療宣稱。糖尿病等慢性疾病的診斷與治療需要專業醫療評估，「按穴位治癒疾病」這類說法混淆了衛教知識與醫療處置的界線，容易誤導民眾延誤就醫。",
    },
    {
      id: "d08-q5",
      question: "課程建議描述經絡相關概念時，適合使用的表達方式是？",
      options: [
        "「醫學已證實…」",
        "「傳統上認為…」",
        "「保證有效…」",
        "「唯一正確的做法是…」",
      ],
      answerIndex: 1,
      explanation:
        "介紹經絡、穴位等傳統學說內容時，課程建議使用「傳統上認為」「傳統經絡學說描述」等衛教口吻的表達，清楚標示這是傳統理論框架下的說法，而非已被現代醫學證實的療效宣稱，避免誤導。",
    },
    {
      id: "d08-q6",
      question: "十二正經之外，經絡系統還包含哪些結構？",
      options: [
        "只有十二正經，沒有其他結構",
        "任脈、督脈等奇經八脈",
        "只有血管與淋巴管",
        "只有神經系統",
      ],
      answerIndex: 1,
      explanation:
        "經絡系統除了十二正經之外，還包含任脈、督脈等奇經八脈，共同構成傳統理論裡的全身通路網。今天先建立十二正經的整體概念，奇經八脈不是本課程的重點，僅需知道經絡系統不只十二正經。",
    },
    {
      id: "d08-q7",
      question: "今天學到的經絡概念，主要是為了幫接下來哪些課程做準備？",
      options: [
        "純粹是歷史知識，與後面課程無關",
        "為第 9 天穴位定位、第 10 天徒手手法建立背景知識",
        "為下週的體態評估課程做準備",
        "為長者防跌倒評估做準備",
      ],
      answerIndex: 1,
      explanation:
        "本週主題是「筋絡、穴道與筋膜放鬆」，今天的經絡概念是為第 9 天的常用穴位（合谷、足三里、湧泉）與第 10 天的徒手手法建立傳統理論背景，讓後續操作能同時理解其傳統脈絡與現代解剖對應。",
    },
  ],
};

export default lesson;
