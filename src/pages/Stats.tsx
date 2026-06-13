import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Stats</h1>
        <p style={{ color: "#8b949e", marginBottom: "32px" }}>
          {clicks.length} click{clicks.length !== 1 ? "s" : ""} tracked
        </p>

        {/* Chart */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "14px",
              color: "#8b949e",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            CLICKS BY LINK
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={aggregates}
              layout="vertical"
              margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
            >
              <XAxis
                type="number"
                tick={{ fill: "#6e7681", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={isMobile ? 120 : 240}
                tick={{ fill: "#818cf8", fontSize: isMobile ? 10 : 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "rgba(99,102,241,0.08)" }}
                contentStyle={{
                  background: "#161b22",
                  border: "1px solid #21262d",
                  borderRadius: "6px",
                  fontSize: "12px",
                  color: "#e2e8f0",
                }}
                formatter={(value) => [value ?? 0, "clicks"]}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]} fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
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
