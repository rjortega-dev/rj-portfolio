import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Aggregate, ClickRow } from "../types";

export default function Stats() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [clicks, setClicks] = useState<ClickRow[]>([]);
  const [aggregates, setAggregates] = useState<Aggregate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchClicks() {
      const { data, error } = await supabase
        .from("link_clicks")
        .select("*")
        .order("clicked_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        const rows = data ?? [];
        setClicks(rows);

        // aggregate counts by label, sorted descending
        const counts: Record<string, number> = {};
        for (const row of rows) {
          counts[row.label] = (counts[row.label] ?? 0) + 1;
        }
        const sorted = Object.entries(counts)
          .map(([label, count]) => ({ label, count }))
          .sort((a, b) => b.count - a.count);
        setAggregates(sorted);
      }

      setLoading(false);
    }

    fetchClicks();
  }, []);

  if (loading)
    return <div style={{ padding: "40px", color: "#e2e8f0" }}>Loading...</div>;
  if (error)
    return (
      <div style={{ padding: "40px", color: "#f85149" }}>Error: {error}</div>
    );

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, #21262d 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <Nav isMobile={isMobile} />
      <div
        style={{
          padding: "40px",
          color: "#e2e8f0",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Stats</h1>
        <p style={{ color: "#8b949e", marginBottom: "32px" }}>
          {clicks.length} click{clicks.length !== 1 ? "s" : ""} tracked
        </p>

        {/* Aggregates */}
        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "14px",
              color: "#8b949e",
              marginBottom: "12px",
              fontWeight: 500,
            }}
          >
            CLICKS BY LINK
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {aggregates.map(({ label, count }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span
                  style={{
                    width: "260px",
                    fontSize: "13px",
                    color: "#818cf8",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <div
                  style={{
                    height: "6px",
                    borderRadius: "3px",
                    background: "#6366f1",
                    width: `${(count / aggregates[0].count) * 200}px`,
                  }}
                />
                <span style={{ fontSize: "13px", color: "#8b949e" }}>
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Raw table */}
        <h2
          style={{
            fontSize: "14px",
            color: "#8b949e",
            marginBottom: "12px",
            fontWeight: 500,
          }}
        >
          RECENT CLICKS
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "13px",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #21262d",
                color: "#8b949e",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "8px 12px" }}>Label</th>
              <th style={{ padding: "8px 12px" }}>Clicked at</th>
              <th style={{ padding: "8px 12px" }}>Referrer</th>
            </tr>
          </thead>
          <tbody>
            {clicks.map((row) => (
              <tr key={row.id} style={{ borderBottom: "1px solid #21262d" }}>
                <td style={{ padding: "10px 12px", color: "#818cf8" }}>
                  {row.label}
                </td>
                <td style={{ padding: "10px 12px", color: "#8b949e" }}>
                  {new Date(row.clicked_at).toLocaleString()}
                </td>
                <td style={{ padding: "10px 12px", color: "#8b949e" }}>
                  {row.referrer ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer isMobile={isMobile} />
    </div>
  );
}
