"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export interface HeaderProgram {
  id: string;
  title: string;
  shortTitle?: string;
}

// 平台頂欄（client）：計畫切換下拉（只列 published、標示目前計畫）＋帳號選單＋登出。
// 桌面直排並列，手機收進漢堡面板。下拉支援 Esc 關閉與 aria-expanded。
export default function PlatformHeader({
  programs,
  currentProgramId,
  userName,
}: {
  programs: HeaderProgram[];
  currentProgramId?: string;
  userName: string;
}) {
  const [programOpen, setProgramOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const current = programs.find((p) => p.id === currentProgramId);
  const currentLabel = current
    ? current.shortTitle ?? current.title
    : "選擇學習計畫";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-600 text-sm font-black text-white">
            S
          </span>
          <span className="hidden sm:inline">StudyHub 學習平台</span>
        </Link>

        {/* 桌面版：計畫切換 + 帳號 */}
        <div className="hidden items-center gap-2 sm:flex">
          <ProgramSwitcher
            programs={programs}
            currentProgramId={currentProgramId}
            label={currentLabel}
            open={programOpen}
            setOpen={(v) => {
              setProgramOpen(v);
              if (v) setAccountOpen(false);
            }}
          />
          <AccountMenu
            userName={userName}
            open={accountOpen}
            setOpen={(v) => {
              setAccountOpen(v);
              if (v) setProgramOpen(false);
            }}
          />
        </div>

        {/* 手機版：漢堡 */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="開啟選單"
          className="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 text-slate-600 sm:hidden"
        >
          <span className="text-lg leading-none">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* 手機版展開面板 */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 sm:hidden">
          <p className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            學習計畫
          </p>
          <ul className="mt-1 space-y-1">
            {programs.map((p) => {
              const active = p.id === currentProgramId;
              return (
                <li key={p.id}>
                  <Link
                    href={`/learn/${p.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      active
                        ? "bg-sky-50 font-semibold text-sky-700"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {p.title}
                    {active && <span className="ml-2 text-xs">目前</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="text-sm text-slate-600">嗨，{userName}</span>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              登出
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function ProgramSwitcher({
  programs,
  currentProgramId,
  label,
  open,
  setOpen,
}: {
  programs: HeaderProgram[];
  currentProgramId?: string;
  label: string;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const ref = useDropdown(open, () => setOpen(false));
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        <span className="max-w-[10rem] truncate">{label}</span>
        <span className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
        >
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            切換學習計畫
          </p>
          <ul className="pb-1">
            {programs.map((p) => {
              const active = p.id === currentProgramId;
              return (
                <li key={p.id}>
                  <Link
                    href={`/learn/${p.id}`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 text-sm ${
                      active
                        ? "bg-sky-50 font-semibold text-sky-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate">{p.title}</span>
                    {active && (
                      <span className="ml-2 flex-shrink-0 text-xs">目前</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function AccountMenu({
  userName,
  open,
  setOpen,
}: {
  userName: string;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const ref = useDropdown(open, () => setOpen(false));
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
          {userName.slice(0, 1)}
        </span>
        <span className="hidden max-w-[8rem] truncate md:inline">{userName}</span>
        <span className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
        >
          <div className="px-3 py-2 text-sm text-slate-600">
            嗨，<span className="font-semibold text-slate-900">{userName}</span>
          </div>
          <div className="border-t border-slate-100 p-1">
            <button
              type="button"
              role="menuitem"
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              登出
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 共用下拉行為：點外部關閉、Esc 關閉。
function useDropdown(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, onClose]);
  return ref;
}
