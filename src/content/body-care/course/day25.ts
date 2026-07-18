import type { DayLesson } from "@/lib/content/types";

// 手肘彎曲時主動肌（肱二頭肌）與拮抗肌（肱三頭肌）：真實 PD 全身肌肉圖（正面＋背面，Mikael Häggström，PD）＋中文引線標註。
// viewBox 左右各留 ~140px 給中文標籤，避免文字被邊界裁掉。
const agonistAntagonistSvg = `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="760" height="380" fill="#ffffff"/>
  <text x="245" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">正面（上臂前側）</text>
  <image href="/body-care/figures/muscles-anterior.png" x="140" y="42" width="210" height="244" preserveAspectRatio="xMidYMid meet"/>
  <text x="515" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">背面（上臂後側）</text>
  <image href="/body-care/figures/muscles-posterior.png" x="410" y="42" width="210" height="256" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold">
    <circle cx="216" cy="110" r="4" fill="#0d9488"/>
    <line x1="128" y1="88" x2="204" y2="105" stroke="#0d9488" stroke-width="1.5"/>
    <text x="124" y="84" text-anchor="end" fill="#0d9488">肱二頭肌</text>
    <text x="124" y="100" text-anchor="end" font-size="11" font-weight="normal" fill="#0d9488">主動肌（出力收縮）</text>
    <circle cx="560" cy="98" r="4" fill="#e11d48"/>
    <line x1="632" y1="95" x2="570" y2="98" stroke="#e11d48" stroke-width="1.5"/>
    <text x="636" y="91" text-anchor="start" fill="#e11d48">肱三頭肌</text>
    <text x="636" y="107" text-anchor="start" font-size="11" font-weight="normal" fill="#e11d48">拮抗肌（放鬆延長）</text>
  </g>
  <text x="380" y="352" text-anchor="middle" font-size="11" fill="#94a3b8">手肘彎曲時：肱二頭肌收縮出力為主動肌，肱三頭肌放鬆延長為拮抗肌（角色會隨動作切換）</text>
</svg>`;

// 身體常見的主動肌／拮抗肌配對：真實 PD 全身肌肉圖（正面＋背面，Mikael Häggström，PD）＋中文引線標註，同色代表一組配對。
const musclePairingSvg = `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="760" height="380" fill="#ffffff"/>
  <text x="245" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">正面</text>
  <image href="/body-care/figures/muscles-anterior.png" x="140" y="42" width="210" height="244" preserveAspectRatio="xMidYMid meet"/>
  <text x="515" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">背面</text>
  <image href="/body-care/figures/muscles-posterior.png" x="410" y="42" width="210" height="256" preserveAspectRatio="xMidYMid meet"/>
  <g font-size="15" font-weight="bold">
    <circle cx="230" cy="100" r="4" fill="#2563eb"/>
    <line x1="130" y1="83" x2="220" y2="100" stroke="#2563eb" stroke-width="1.5"/>
    <text x="126" y="86" text-anchor="end" fill="#2563eb">胸大肌</text>
    <circle cx="500" cy="100" r="4" fill="#2563eb"/>
    <line x1="628" y1="98" x2="508" y2="100" stroke="#2563eb" stroke-width="1.5"/>
    <text x="632" y="103" text-anchor="start" fill="#2563eb">背闊肌／菱形肌</text>
    <circle cx="245" cy="135" r="4" fill="#0d9488"/>
    <line x1="130" y1="127" x2="235" y2="135" stroke="#0d9488" stroke-width="1.5"/>
    <text x="126" y="130" text-anchor="end" fill="#0d9488">腹肌</text>
    <circle cx="508" cy="115" r="4" fill="#0d9488"/>
    <line x1="628" y1="140" x2="519" y2="115" stroke="#0d9488" stroke-width="1.5"/>
    <text x="632" y="143" text-anchor="start" fill="#0d9488">豎脊肌</text>
    <circle cx="235" cy="190" r="4" fill="#e11d48"/>
    <line x1="130" y1="220" x2="226" y2="195" stroke="#e11d48" stroke-width="1.5"/>
    <text x="126" y="223" text-anchor="end" fill="#e11d48">股四頭肌</text>
    <circle cx="530" cy="185" r="4" fill="#e11d48"/>
    <line x1="628" y1="224" x2="538" y2="190" stroke="#e11d48" stroke-width="1.5"/>
    <text x="632" y="227" text-anchor="start" fill="#e11d48">膕繩肌</text>
  </g>
  <text x="380" y="352" text-anchor="middle" font-size="11" fill="#94a3b8">同色代表一組主動肌／拮抗肌配對：藍＝胸與背、綠＝腹與腰背、紅＝大腿前與大腿後，日常保養可當成一組來看待</text>
</svg>`;

// 肌力失衡示意：緊繃的髖屈肌與無力的臀肌（擬真側面人形，非抽象方框；呼應第19天手法）。
const imbalanceSvg = `<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="320" height="300" fill="#ffffff"/>
  <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">失衡示意：髖屈肌緊 vs 臀肌弱（側面）</text>
  <g fill="#e5e7eb" stroke="#94a3b8" stroke-width="2">
    <ellipse cx="168" cy="62" rx="16" ry="19"/>
    <rect x="161" y="78" width="14" height="12" rx="4"/>
    <path d="M148 90 C140 116 142 144 152 166 C146 184 146 202 156 216 L182 216 C188 202 186 184 178 166 C186 144 186 116 178 90 Z"/>
    <path d="M156 216 C152 240 154 264 158 284 L176 284 C180 264 178 240 176 216 Z"/>
  </g>
  <ellipse cx="164" cy="212" rx="26" ry="18" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 3"/>
  <ellipse cx="148" cy="200" rx="15" ry="22" fill="#e11d48" opacity="0.6"/>
  <ellipse cx="180" cy="208" rx="14" ry="20" fill="#6366f1" opacity="0.5"/>
  <g font-size="12" font-weight="bold">
    <circle cx="148" cy="200" r="4" fill="#e11d48"/>
    <line x1="116" y1="168" x2="146" y2="198" stroke="#e11d48" stroke-width="1.5"/>
    <text x="112" y="162" text-anchor="end" fill="#e11d48">髖屈肌</text>
    <text x="112" y="178" text-anchor="end" font-size="11" font-weight="normal" fill="#e11d48">緊繃（久坐易縮短）</text>
    <circle cx="180" cy="208" r="4" fill="#4f46e5"/>
    <line x1="206" y1="238" x2="182" y2="210" stroke="#4f46e5" stroke-width="1.5"/>
    <text x="210" y="234" text-anchor="start" fill="#4f46e5">臀肌</text>
    <text x="210" y="250" text-anchor="start" font-size="11" font-weight="normal" fill="#4f46e5">無力（久坐少用）</text>
  </g>
  <text x="160" y="288" text-anchor="middle" font-size="10" fill="#94a3b8">示意圖：紅＝緊繃、藍紫＝無力（與第 19 天下交叉症候群呼應）</text>
</svg>`;

// 平衡訓練四個步驟（操作步驟圖）。
const balanceTrainingStepsSvg = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect width="460" height="170" fill="#ffffff"/>
  <line x1="55" y1="48" x2="405" y2="48" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <g text-anchor="middle">
    <circle cx="55" cy="48" r="20" fill="#0d9488"/>
    <text x="55" y="54" font-size="16" font-weight="bold" fill="#ffffff">1</text>
    <text x="55" y="92" font-size="11" fill="#0f172a">辨識緊與鬆</text>
    <text x="55" y="107" font-size="11" fill="#64748b">觀察＋觸診</text>
    <circle cx="170" cy="48" r="20" fill="#0d9488"/>
    <text x="170" y="54" font-size="16" font-weight="bold" fill="#ffffff">2</text>
    <text x="170" y="92" font-size="11" fill="#0f172a">緊的先放鬆</text>
    <text x="170" y="107" font-size="11" fill="#64748b">適度伸展</text>
    <circle cx="285" cy="48" r="20" fill="#0d9488"/>
    <text x="285" y="54" font-size="16" font-weight="bold" fill="#ffffff">3</text>
    <text x="285" y="92" font-size="11" fill="#0f172a">鬆的做強化</text>
    <text x="285" y="107" font-size="11" fill="#64748b">漸進訓練</text>
    <circle cx="405" cy="48" r="20" fill="#0d9488"/>
    <text x="405" y="54" font-size="16" font-weight="bold" fill="#ffffff">4</text>
    <text x="405" y="92" font-size="11" fill="#0f172a">兩邊都要練</text>
    <text x="405" y="107" font-size="11" fill="#64748b">避免落差過大</text>
  </g>
</svg>`;

const lesson: DayLesson = {
  day: 25,
  phase: "W4",
  title: "主動肌與拮抗肌的平衡訓練",
  minutes: 16,
  goal: "認識主動肌與拮抗肌的搭配關係、常見肌群配對，理解肌力失衡如何影響姿勢與關節負擔，並學習平衡訓練的基本原則。",
  sections: [
    {
      heading: "什麼是主動肌與拮抗肌",
      body: `> 本課程為衛教與運動知識分享，身體不適請諮詢醫療專業人員。

身體的動作很少只靠單一條肌肉完成，通常是一組肌肉分工合作：負責**主動出力、產生動作**的稱為**主動肌**；在動作對側、跟著**放鬆延長、配合動作**的則稱為**拮抗肌**。這組關係不是固定不變的角色分配，而是**依動作而定**——手肘彎曲時，肱二頭肌是主動肌、肱三頭肌是拮抗肌；換成手肘伸直，角色就互換過來，肱三頭肌變主動肌、肱二頭肌變拮抗肌。

理解這組關係的實用價值在於：肌肉不是各自獨立運作，而是成雙成對互相配合、互相制衡。如果其中一邊力量或柔軟度明顯落後另一邊太多，動作品質、關節受力分布都可能跟著受影響——這正是接下來要談的「肌力失衡」。今天的目標，是先認識常見的配對關係，再理解失衡會帶來什麼影響，最後學習平衡訓練的基本原則。`,
      figures: [
        {
          id: "d25-fig1",
          title: "手肘彎曲時的主動肌與拮抗肌",
          alt: "並排兩張真實人體肌肉解剖圖，左為正面標出上臂前側的肱二頭肌（主動肌），右為背面標出上臂後側的肱三頭肌（拮抗肌），呈現手肘彎曲時的主動肌與拮抗肌配對。",
          svg: agonistAntagonistSvg,
          caption: "真實解剖圖：手肘彎曲時肱二頭肌收縮出力為主動肌，肱三頭肌放鬆延長為拮抗肌；換成手肘伸直，兩者角色會互換。",
          credit:
            "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscles anterior labeled.png／Muscle posterior labeled.png）",
        },
      ],
    },
    {
      heading: "身體常見的主動肌／拮抗肌配對",
      body: `雖然主動肌與拮抗肌的角色會隨動作切換，但身體有幾組**經常互相配合**的肌群，日常保養時可以把它們當成一組來看待：**胸大肌（胸前）與背闊肌／菱形肌（背部）**——胸肌負責把手臂往前往內帶，背部肌群負責把肩胛骨往後往下拉，兩者要平衡，肩膀才不容易往前拱；**腹肌（腹部前側）與豎脊肌（脊椎兩側）**——腹肌負責彎腰、穩定核心前側，豎脊肌負責伸直脊椎、維持直立姿勢，兩者共同撐住軀幹；**股四頭肌（大腿前側）與膕繩肌（大腿後側）**——股四頭肌負責伸直膝蓋，膕繩肌負責彎曲膝蓋、也協助髖關節伸展，兩者一起穩定膝關節。

這幾組配對之所以重要，是因為現代生活型態（久坐、長時間滑手機、少走路）很容易讓其中一邊被過度使用或過度伸長、另一邊則長期偷懶少用，久了就會出現力量與柔軟度上的落差，也就是下一節要談的「失衡」。`,
      figures: [
        {
          id: "d25-fig2",
          title: "身體常見的肌群配對",
          alt: "並排兩張真實人體肌肉解剖圖，以藍、綠、紅三色分別標出三組主動肌／拮抗肌配對：正面胸大肌與背面背闊肌／菱形肌、正面腹肌與背面豎脊肌、正面股四頭肌與背面膕繩肌。",
          svg: musclePairingSvg,
          caption: "真實解剖圖：三組常見配對以同色標示——藍＝胸與背、綠＝腹與腰背、紅＝大腿前與大腿後，日常保養可當成一組來看待。",
          credit:
            "Mikael Häggström, Public Domain, via Wikimedia Commons（Muscles anterior labeled.png／Muscle posterior labeled.png）",
        },
      ],
    },
    {
      heading: "失衡會怎樣：緊的更緊、弱的更弱",
      body: `當一組配對中，一邊長期緊繃縮短、另一邊長期無力拉長，就會形成**肌力失衡**，進而影響姿勢與關節受力——這其實正是第 19、20 天談過的**下交叉症候群**與**上交叉症候群**背後的邏輯。例如久坐族常見**髖屈肌（大腿根部前側）過度緊繃**，同時**臀肌相對無力**：緊繃的髖屈肌會把骨盆往前拉、加重腰椎前凸，無力的臀肌則沒辦法提供足夠的髖部穩定，兩者疊加起來就容易造成下背痠痛。

失衡不會一天造成，通常是長期姿勢習慣與活動量不足慢慢累積而成，也不會靠「只伸展緊的那邊」或「只加強弱的那邊」單獨解決——兩件事通常要一起做：**先讓過度緊繃的一側適度放鬆延展，再針對相對無力的一側做強化訓練**，讓兩邊的張力與力量重新找回平衡。這也是為什麼照護與運動處方常強調「不是哪裡痠就只處理哪裡」，而是回頭看整組配對的張力分布。`,
      figures: [
        {
          id: "d25-fig3",
          title: "肌力失衡示意：髖屈肌緊、臀肌弱",
          alt: "一個側面人形填色輪廓示意圖，髖部前側以紅色標示為緊繃的髖屈肌，臀部後側以藍紫色標示為相對無力的臀肌，說明常見的久坐型失衡模式。",
          svg: imbalanceSvg,
          caption: "示意圖：紅色代表緊繃、藍紫色代表無力，這組模式與第 19 天下交叉症候群呼應。",
        },
      ],
    },
    {
      heading: "平衡訓練的基本原則與步驟",
      body: `知道了配對關係與失衡的邏輯，實務上可以照著四個步驟來安排訓練：**先辨識哪一組緊、哪一組鬆**（可以回顧第 15～20 天學過的體態觀察與觸診方式，或請專業人員協助評估）；**針對緊繃的一側，先做適度的伸展或放鬆**（力道抓在 0～10 量表的 5～6 分微痠，避免硬拉）；**針對相對無力的一側，安排漸進的強化訓練**（可以套用前兩天學過的 FITT 與漸進負荷原則）；最後也是最容易被忽略的一點——**主動肌與拮抗肌都要練，不要只練「看得到、練起來有感」的那一塊**，例如很多人熱衷練胸肌卻很少練背部肌群，長期下來反而加重胸背失衡、圓肩問題更明顯。

平衡訓練不追求兩邊力量完全對等，而是**避免落差過大**。如果你發現自己長期姿勢不良、某個部位反覆痠痛，這通常是身體在提示某組配對已經失衡一段時間，建議可以請物理治療師或專業教練協助評估具體的緊繃與無力肌群，再規劃合適的放鬆與強化比例，會比自行猜測更有效率也更安全。`,
      figures: [
        {
          id: "d25-fig4",
          title: "平衡訓練四個步驟",
          alt: "四個編號步驟由虛線串接：步驟 1 辨識哪組緊哪組鬆、步驟 2 緊的先放鬆、步驟 3 鬆的做強化、步驟 4 兩邊都要練避免落差過大。",
          svg: balanceTrainingStepsSvg,
          caption: "從辨識緊鬆到兩邊都練，是平衡訓練最基本的四個步驟。",
        },
      ],
    },
  ],
  keyTakeaways: [
    "主動肌負責出力產生動作，拮抗肌負責放鬆配合，角色會隨動作切換而互換，不是固定分工。",
    "身體常見配對：胸大肌與背闊肌／菱形肌、腹肌與豎脊肌、股四頭肌與膕繩肌，日常保養可當成一組來看待。",
    "一側長期緊繃縮短、另一側長期無力拉長會形成肌力失衡，與第 19、20 天的下／上交叉症候群邏輯相同。",
    "處理失衡通常需要「緊的放鬆、鬆的強化」兩件事一起做，單獨處理一邊效果有限。",
    "平衡訓練要主動肌與拮抗肌都練，不要只練看得到、有感的那一側，避免落差過大加重失衡。",
  ],
  quiz: [
    {
      id: "d25-q1",
      question: "主動肌與拮抗肌的角色關係是什麼？",
      options: [
        "固定分工，某條肌肉永遠是主動肌",
        "依動作而定，角色會隨動作切換而互換",
        "兩者永遠同時收縮出力",
        "拮抗肌永遠比主動肌強壯",
      ],
      answerIndex: 1,
      explanation:
        "主動肌與拮抗肌不是固定的角色分配，而是依當下的動作而定：手肘彎曲時肱二頭肌是主動肌，換成手肘伸直，角色就互換為肱三頭肌是主動肌。理解這個相對性，才不會誤以為某條肌肉永遠只能扮演單一角色。",
    },
    {
      id: "d25-q2",
      question: "手肘彎曲（屈肘）時，下列哪一塊肌肉是主動肌？",
      options: ["肱三頭肌", "肱二頭肌", "三角肌", "腹直肌"],
      answerIndex: 1,
      explanation:
        "手肘彎曲時，肱二頭肌收縮出力、負責產生彎曲的動作，是主動肌；肱三頭肌則配合放鬆延長，是拮抗肌。換成手肘伸直的動作，兩者角色就會互換。",
    },
    {
      id: "d25-q3",
      question: "下列哪一組屬於身體常見的主動肌／拮抗肌配對？",
      options: [
        "股四頭肌與膕繩肌（大腿前與大腿後）",
        "肱二頭肌與腹肌",
        "股四頭肌與胸大肌",
        "豎脊肌與肱三頭肌",
      ],
      answerIndex: 0,
      explanation:
        "股四頭肌（大腿前側，負責伸直膝蓋）與膕繩肌（大腿後側，負責彎曲膝蓋、協助髖伸展）是身體常見的配對之一，兩者一起穩定膝關節。其他選項的組合並非同一部位、功能相對的配對關係。",
    },
    {
      id: "d25-q4",
      question: "久坐族常見髖屈肌過度緊繃、臀肌相對無力，這與第幾天學過的哪個症候群邏輯相同？",
      options: [
        "第 19 天的下交叉症候群",
        "第 20 天的上交叉症候群",
        "第 8 天的十二正經概念",
        "第 7 天的長者關節活動度評估",
      ],
      answerIndex: 0,
      explanation:
        "第 19 天談過的下交叉症候群，指緊的一側常是髖屈肌與豎脊肌、弱的一側常是腹肌與臀肌，正好對應久坐族常見的失衡模式：髖屈肌緊、臀肌弱，兩者疊加容易造成下背痠痛。",
    },
    {
      id: "d25-q5",
      question: "處理肌力失衡，比較完整的做法是什麼？",
      options: [
        "只伸展緊繃的一側就能解決問題",
        "只強化無力的一側就能解決問題",
        "緊的先適度放鬆、鬆的做漸進強化，兩者一起進行",
        "不需要處理，失衡是正常現象",
      ],
      answerIndex: 2,
      explanation:
        "失衡通常需要「緊的放鬆、鬆的強化」兩件事一起做，讓兩邊的張力與力量重新找回平衡；只單獨處理其中一邊，效果通常有限，也不容易根本改善姿勢與關節受力分布。",
    },
    {
      id: "d25-q6",
      question: "關於平衡訓練的原則，下列敘述何者正確？",
      options: [
        "只練自己喜歡、看得到的肌群就好",
        "主動肌與拮抗肌都要練，避免落差過大",
        "兩側力量必須完全相等，一點差距都不行",
        "平衡訓練與姿勢問題無關",
      ],
      answerIndex: 1,
      explanation:
        "平衡訓練強調主動肌與拮抗肌都要練，目標是避免兩邊落差過大，而不是要求兩側力量完全對等。只練看得到、有感的那一側，容易讓失衡問題隨時間累積得更明顯。",
    },
    {
      id: "d25-q7",
      question: "小華很喜歡練胸肌，很少練背部肌群，長期下來最可能出現什麼問題？",
      options: [
        "完全不會有任何影響",
        "胸背失衡加重，圓肩、駝背等體態問題可能更明顯",
        "背部肌群會自動變得和胸肌一樣強壯",
        "只會影響手臂力量，與姿勢無關",
      ],
      answerIndex: 1,
      explanation:
        "只練胸肌、忽略背部肌群，會讓胸大肌與背闊肌／菱形肌這組配對的力量落差越來越大，胸側過度發達且緊繃、背側相對無力，長期下來容易加重圓肩、駝背等體態問題，這正是平衡訓練要避免的情況。",
    },
  ],
};

export default lesson;
