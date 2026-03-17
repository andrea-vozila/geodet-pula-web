"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { consumePendingScrollForPath, scrollToId } from "@/lib/utils/scroll";

function getHashId(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return null;
  return decodeURIComponent(hash.slice(1));
}

export function ScrollRestorer() {
  const pathname = usePathname();

  React.useEffect(() => {
    // Let the page render first (sections/components mount).
    const raf = window.requestAnimationFrame(() => {
      const pendingId = consumePendingScrollForPath(pathname);
      const hashId = getHashId();
      const id = pendingId ?? hashId;
      if (!id) return;

      // A second rAF helps when content is still laying out (images/fonts).
      window.requestAnimationFrame(() => scrollToId(id, { updateHash: true }));
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}

