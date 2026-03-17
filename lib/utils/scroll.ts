/* eslint-disable no-restricted-globals */
"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

const DEFAULT_HEADER_OFFSET_PX = 65;
const HEADER_ELEMENT_ID = "site-header";

type PendingScroll = {
  path: string;
  id: string;
  ts: number;
};

const PENDING_SCROLL_KEY = "geodet:pendingScroll";

function safeParsePendingScroll(raw: string | null): PendingScroll | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as PendingScroll;
    if (
      !parsed ||
      typeof parsed !== "object" ||
      typeof parsed.path !== "string" ||
      typeof parsed.id !== "string" ||
      typeof parsed.ts !== "number"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function getHeaderOffsetPx(): number {
  if (typeof document === "undefined") return DEFAULT_HEADER_OFFSET_PX;
  const header = document.getElementById(HEADER_ELEMENT_ID);
  const h = header?.offsetHeight;
  return typeof h === "number" && h > 0 ? h : DEFAULT_HEADER_OFFSET_PX;
}

export function scrollToId(id: string, options?: { updateHash?: boolean }) {
  if (typeof window === "undefined") return;

  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = getHeaderOffsetPx();
  const elementTop = target.getBoundingClientRect().top + window.scrollY;
  const top = Math.max(0, elementTop - headerOffset);

  window.scrollTo({ top, behavior: "smooth" });

  if (options?.updateHash !== false) {
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    } else {
      // Avoid stacking duplicate history entries on repeated clicks.
      window.history.replaceState(null, "", nextHash);
    }
  }
}

export function setPendingScroll(path: string, id: string) {
  if (typeof window === "undefined") return;
  const payload: PendingScroll = { path, id, ts: Date.now() };
  window.sessionStorage.setItem(PENDING_SCROLL_KEY, JSON.stringify(payload));
}

export function consumePendingScrollForPath(path: string): string | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(PENDING_SCROLL_KEY);
  const pending = safeParsePendingScroll(raw);
  if (!pending) return null;
  if (pending.path !== path) return null;

  window.sessionStorage.removeItem(PENDING_SCROLL_KEY);
  return pending.id;
}

export function parseAnchorHref(
  href: string,
  currentPath: string
): { path: string; id: string } | null {
  if (!href.includes("#")) return null;

  // Supports: "#contact", "/#contact", "/pravne-informacije#impressum"
  const [rawPath, rawHash] = href.split("#");
  const id = rawHash?.trim();
  if (!id) return null;

  if (!rawPath) return { path: currentPath, id };
  return { path: rawPath, id };
}

export function scrollToSection(e: React.MouseEvent, id: string) {
  e.preventDefault();
  scrollToId(id);
}

export function useAnchorNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return React.useCallback(
    (e: React.MouseEvent, href: string) => {
      const parsed = parseAnchorHref(href, pathname);
      if (!parsed) return;

      e.preventDefault();

      if (parsed.path !== pathname) {
        setPendingScroll(parsed.path, parsed.id);
        router.push(`${parsed.path}#${parsed.id}`);
        return;
      }

      scrollToId(parsed.id);
    },
    [pathname, router]
  );
}

