// Snapify Cache Helper — Wrapper around Next.js unstable_cache

import { unstable_cache } from "next/cache";

export function cache<T>(fn: (...args: any[]) => Promise<T>, key: string, ttl: number = 3600) {
  return unstable_cache(fn, [key], { revalidate: ttl });
}