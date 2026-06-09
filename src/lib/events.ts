import { supabase } from "./supabase";

export async function trackClick(label: string) {
  try {
    const { error } = await supabase.from("link_clicks").insert({
      label,
      referrer: document.referrer || null,
    });

    if (error) {
      console.error("trackClick failed:", error.message);
    }
  } catch {
    // silently fail — ad blockers and network issues shouldn't affect UX
  }
}
