"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LessonFigure } from "@/lib/content/types";

// 由 figure 取得長寬比（image 用 naturalSize，svg 由 viewBox 解析）。
function svgAspect(svg?: string): number | null {
  if (!svg) return null;
  const m = svg.match(/viewBox="\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)/);
  if (!m) return null;
  const w = parseFloat(m[1]);
  const h = parseFloat(m[2]);
  return w > 0 && h > 0 ? w / h : null;
}

function FigureMedia({
  figure,
  variant,
  onAspect,
}: {
  figure: LessonFigure;
  variant: "inline" | "lightbox";
  onAspect?: (a: number) => void;
}) {
  if (figure.image) {
    const cls =
      variant === "inline"
        ? "mx-auto h-auto w-full"
        : "block h-full w-full object-contain";
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={figure.image.src}
        alt={figure.alt}
        loading="lazy"
        draggable={false}
        onLoad={(e) => {
          const el = e.currentTarget;
          if (onAspect && el.naturalWidth > 0) {
            onAspect(el.naturalWidth / el.naturalHeight);
          }
        }}
        className={cls}
      />
    );
  }
  const cls =
    variant === "inline"
      ? "[&>svg]:h-auto [&>svg]:w-full"
      : "h-full w-full [&>svg]:h-full [&>svg]:w-full";
  return (
    <div
      role="img"
      aria-label={figure.alt}
      className={cls}
      dangerouslySetInnerHTML={{ __html: figure.svg ?? "" }}
    />
  );
}

function Lightbox({
  figure,
  onClose,
}: {
  figure: LessonFigure;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const [aspect, setAspect] = useState<number | null>(() =>
    svgAspect(figure.svg),
  );
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 關閉鍵 + 鎖背景捲動。
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (document.fullscreenElement) return; // 先讓瀏覽器離開全螢幕
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // 量測捲動容器尺寸（含視窗縮放與進出全螢幕）。
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // scale=1 時「符合視窗（contain）」，放大則等比乘上去。
  let sizeStyle: React.CSSProperties = { maxWidth: "90vw", maxHeight: "82vh" };
  if (box && aspect) {
    const availW = box.w - 32;
    const availH = box.h - 32;
    const baseW = Math.min(availW, availH * aspect);
    const w = baseW * scale;
    sizeStyle = { width: `${w}px`, height: `${w / aspect}px` };
  }

  const zoomIn = () =>
    setScale((s) => Math.min(Math.round((s + 0.5) * 10) / 10, 5));
  const zoomOut = () =>
    setScale((s) => Math.max(Math.round((s - 0.5) * 10) / 10, 1));
  const toggleFullscreen = () => {
    const el = dialogRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.().catch(() => {});
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg text-white hover:bg-white/30";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={figure.title}
      className="fixed inset-0 z-[100] flex flex-col bg-black/90"
    >
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <span className="truncate text-sm font-medium">{figure.title}</span>
        <button type="button" onClick={onClose} aria-label="關閉" className={btn}>
          ✕
        </button>
      </div>

      {/* 捲動區：單層 flex + m-auto + shrink-0，放大後寬高都可捲、能到四邊（含左上角）。 */}
      <div ref={scrollRef} className="flex flex-1 overflow-auto p-4">
        <div className="m-auto shrink-0" style={sizeStyle}>
          <FigureMedia
            figure={figure}
            variant="lightbox"
            onAspect={(a) => setAspect(a)}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 py-4">
        <button type="button" onClick={zoomOut} aria-label="縮小" className={btn}>
          −
        </button>
        <span className="min-w-[3.5rem] text-center text-sm text-white">
          {Math.round(scale * 100)}%
        </span>
        <button type="button" onClick={zoomIn} aria-label="放大" className={btn}>
          ＋
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="全螢幕"
          className={btn}
        >
          ⛶
        </button>
      </div>
    </div>
  );
}

export default function Figure({ figure }: { figure: LessonFigure }) {
  const [open, setOpen] = useState(false);
  // inline 不需要 aspect，這裡僅為避免重複解析。
  useMemo(() => svgAspect(figure.svg), [figure.svg]);

  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-2 text-sm font-semibold text-slate-700">
        {figure.title}
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`放大檢視：${figure.title}`}
        className="group relative block w-full cursor-zoom-in px-4 py-5"
      >
        <div className="mx-auto w-full max-w-lg">
          <FigureMedia figure={figure} variant="inline" />
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 rounded-md bg-black/45 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          🔍 點擊放大
        </span>
      </button>

      {(figure.caption || figure.credit) && (
        <figcaption className="space-y-1 border-t border-slate-100 px-4 py-2.5">
          {figure.caption && (
            <p className="text-xs leading-6 text-slate-500">{figure.caption}</p>
          )}
          {figure.credit && (
            <p className="text-[11px] leading-5 text-slate-400">
              圖片來源：{figure.credit}
            </p>
          )}
        </figcaption>
      )}

      {open && <Lightbox figure={figure} onClose={() => setOpen(false)} />}
    </figure>
  );
}
