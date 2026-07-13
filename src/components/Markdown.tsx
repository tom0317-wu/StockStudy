import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// 課程小節與知識主題內文的 Markdown 渲染（GFM，含表格）。
// 以 Tailwind arbitrary variants 取代 typography 外掛，避免新增套件。
const proseClass = [
  "text-[15px] leading-7 text-slate-700 space-y-4",
  "[&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900",
  "[&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900",
  "[&_h4]:mt-4 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-slate-900",
  "[&_p]:leading-7",
  "[&_strong]:font-semibold [&_strong]:text-slate-900",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5",
  "[&_li]:leading-7",
  "[&_a]:text-sky-600 [&_a]:underline [&_a]:underline-offset-2",
  "[&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[13px] [&_code]:text-slate-800",
  "[&_hr]:my-6 [&_hr]:border-slate-200",
  "[&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:text-slate-600",
  "[&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
  "[&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold",
  "[&_td]:border [&_td]:border-slate-200 [&_td]:px-3 [&_td]:py-2",
].join(" ");

export default function Markdown({ children }: { children: string }) {
  return (
    <div className={proseClass}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 表格過寬時可水平捲動，避免撐破版面。
          table: (props) => (
            <div className="overflow-x-auto">
              <table {...props} />
            </div>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
