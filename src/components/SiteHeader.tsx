import { auth } from "@/auth";
import { listPublishedPrograms } from "@/content";
import PlatformHeader from "@/components/PlatformHeader";

// 已登入頁面共用的頂欄（server wrapper）：
// 取 session 名稱與 published 計畫清單，交給 client 的 PlatformHeader 呈現。
export default async function SiteHeader({
  currentProgramId,
}: {
  currentProgramId?: string;
}) {
  const session = await auth();
  const name = session?.user?.name ?? "同學";
  const programs = listPublishedPrograms().map((p) => ({
    id: p.id,
    title: p.title,
    shortTitle: p.shortTitle,
  }));

  return (
    <PlatformHeader
      programs={programs}
      currentProgramId={currentProgramId}
      userName={name}
    />
  );
}
