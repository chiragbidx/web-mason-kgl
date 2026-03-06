// Snapify Utility Functions — Shared helpers (e.g., className merging)

export function cn(...inputs: (string | undefined | false)[]) {
  return inputs.filter(Boolean).join(" ");
}