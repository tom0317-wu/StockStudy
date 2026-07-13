"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// 進入知識主題頁時，於 client 端標記為已讀（每個 topic 只送一次）。
export default function KnowledgeReadTracker({ topicId }: { topicId: string }) {
  const router = useRouter();
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    fetch("/api/knowledge/read", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topicId }),
    })
      .then((res) => {
        if (res.ok) router.refresh();
      })
      .catch(() => {
        /* 標記失敗不影響閱讀 */
      });
  }, [topicId, router]);

  return null;
}
