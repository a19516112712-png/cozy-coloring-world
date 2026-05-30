"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Pin {
  title: string;
  description: string;
  link: string;
  board: string;
  slug: string;
}

function getTodayDay() {
  const d = new Date();
  const day = d.getDate();
  return String(Math.min(day, 30)).padStart(2, "0");
}

function parseCSV(csv: string): Pin[] {
  const lines = csv.trim().split("\n");
  const pins: Pin[] = [];
  for (let i = 1; i < lines.length; i++) {
    const fields: string[] = [];
    let inQuote = false;
    let current = "";
    for (let j = 0; j < lines[i].length; j++) {
      const ch = lines[i][j];
      if (ch === '"') { inQuote = !inQuote; }
      else if (ch === "," && !inQuote) { fields.push(current); current = ""; }
      else { current += ch; }
    }
    fields.push(current);
    if (fields.length >= 4) {
      const slug = fields[2].split("/coloring/")[1]?.replace(/\/$/, "") || "";
      pins.push({
        title: fields[0] || "",
        description: fields[1] || "",
        link: fields[2] || "",
        board: fields[3] || "",
        slug,
      });
    }
  }
  return pins;
}

export default function PinterestPublisher() {
  const [todayPins, setTodayPins] = useState<Pin[]>([]);
  const [published, setPublished] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);
  const [csvData, setCsvData] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  const today = getTodayDay();

  useEffect(() => {
    const stored = localStorage.getItem("pinterest-published");
    if (stored) {
      try { setPublished(new Set(JSON.parse(stored))); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pinterest-published", JSON.stringify([...published]));
  }, [published]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/pinterest-schedule/day${today}.csv`);
        if (res.ok) {
          const text = await res.text();
          setTodayPins(parseCSV(text));
        }
      } catch (e) {
        console.error("Failed to load pins:", e);
      }
      setLoading(false);
    }
    load();
  }, [today]);

  useEffect(() => {
    async function loadAll() {
      const data: { [key: string]: string } = {};
      for (let d = 1; d <= 30; d++) {
        const day = String(d).padStart(2, "0");
        try {
          const res = await fetch(`/pinterest-schedule/day${day}.csv`);
          if (res.ok) {
            data[day] = await res.text();
          }
        } catch {}
      }
      setCsvData(data);
    }
    loadAll();
  }, []);

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  }, []);

  const togglePublished = useCallback((pinLink: string) => {
    setPublished(prev => {
      const next = new Set(prev);
      if (next.has(pinLink)) next.delete(pinLink);
      else next.add(pinLink);
      return next;
    });
  }, []);

  const markAllPublished = useCallback(() => {
    setPublished(prev => {
      const next = new Set(prev);
      todayPins.forEach(p => next.add(p.link));
      return next;
    });
  }, [todayPins]);

  const unpublishAll = useCallback(() => {
    setPublished(new Set());
  }, []);

  const todayTotal = todayPins.length;
  const todayDone = todayPins.filter(p => published.has(p.link)).length;
  const todayRate = todayTotal > 0 ? Math.round((todayDone / todayTotal) * 100) : 0;

  let monthlyTotal = 0;
  let monthlyDone = 0;
  Object.entries(csvData).forEach(([, csv]) => {
    const pins = parseCSV(csv);
    monthlyTotal += pins.length;
    pins.forEach(p => {
      if (published.has(p.link)) monthlyDone++;
    });
  });
  const monthlyRate = monthlyTotal > 0 ? Math.round((monthlyDone / monthlyTotal) * 100) : 0;

  const visiblePins = todayPins.filter(p => !published.has(p.link));

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl animate-bounce block mb-4">📌</span>
          <p className="text-cocoa/60">Loading pins...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 shadow-card border border-blush/20 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-cocoa flex items-center gap-2">
                📌 Pinterest Publisher
              </h1>
              <p className="text-sm text-cocoa/50 mt-1">
                Day {today} · {todayPins.length} pins scheduled
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={markAllPublished}
                className="px-4 py-2 rounded-pill bg-mint text-cocoa text-sm font-semibold hover:bg-mint/80 transition-colors"
              >
                ✅ Mark All Done
              </button>
              <button
                onClick={unpublishAll}
                className="px-4 py-2 rounded-pill bg-blush/30 text-cocoa text-sm font-semibold hover:bg-blush/50 transition-colors"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-cream/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-rose">{todayRate}%</div>
              <div className="text-xs text-cocoa/50 mt-1">Today</div>
              <div className="w-full bg-white rounded-full h-1.5 mt-2">
                <div className="bg-rose h-1.5 rounded-full transition-all" style={{ width: `${todayRate}%` }} />
              </div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-cocoa">{todayDone}/{todayTotal}</div>
              <div className="text-xs text-cocoa/50 mt-1">Published Today</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-mint">{monthlyRate}%</div>
              <div className="text-xs text-cocoa/50 mt-1">This Month</div>
              <div className="w-full bg-white rounded-full h-1.5 mt-2">
                <div className="bg-mint h-1.5 rounded-full transition-all" style={{ width: `${monthlyRate}%` }} />
              </div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-cocoa">{monthlyDone}/{monthlyTotal}</div>
              <div className="text-xs text-cocoa/50 mt-1">Total Published</div>
            </div>
          </div>
        </div>

        {visiblePins.length === 0 && todayPins.length > 0 ? (
          <div className="bg-mint/20 rounded-2xl p-12 text-center">
            <span className="text-5xl block mb-4">🎉</span>
            <h2 className="text-xl font-bold text-cocoa mb-2">All Done for Today!</h2>
            <p className="text-cocoa/60">You&apos;ve published all {todayTotal} pins. Come back tomorrow!</p>
          </div>
        ) : todayPins.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-card">
            <span className="text-5xl block mb-4">📭</span>
            <h2 className="text-xl font-bold text-cocoa mb-2">No Pins Scheduled</h2>
            <p className="text-cocoa/60">No CSV data found for Day {today}.</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {todayPins.map((pin, idx) => {
            const isPublished = published.has(pin.link);
            return (
              <div
                key={pin.link}
                className={`bg-white rounded-2xl p-5 shadow-card border transition-all ${
                  isPublished ? "border-mint/50 opacity-60" : "border-blush/20 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold bg-cream px-3 py-1 rounded-full text-cocoa/60">
                    {pin.board}
                  </span>
                  {isPublished && (
                    <span className="text-xs font-semibold bg-mint/20 text-mint px-3 py-1 rounded-full">
                      ✅ Published
                    </span>
                  )}
                </div>

                <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-cream mb-4">
                  {pin.slug ? (
                    <Image
                      src={`/pinterest/${pin.slug}.jpg`}
                      alt={pin.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/placeholder-blog.svg";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">📌</div>
                  )}
                </div>

                <h3 className="font-semibold text-cocoa leading-snug mb-2 text-sm line-clamp-2">
                  {pin.title}
                </h3>

                <p className="text-xs text-cocoa/60 line-clamp-2 mb-4">
                  {pin.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => copyToClipboard(pin.title, `title-${idx}`)}
                    className="flex-1 min-w-[80px] px-3 py-2 rounded-pill bg-cream text-cocoa text-xs font-medium hover:bg-blush/20 transition-colors flex items-center justify-center gap-1"
                  >
                    {copied === `title-${idx}` ? "✅" : "📋"} Title
                  </button>
                  <button
                    onClick={() => copyToClipboard(pin.description, `desc-${idx}`)}
                    className="flex-1 min-w-[80px] px-3 py-2 rounded-pill bg-cream text-cocoa text-xs font-medium hover:bg-blush/20 transition-colors flex items-center justify-center gap-1"
                  >
                    {copied === `desc-${idx}` ? "✅" : "📝"} Desc
                  </button>
                  <a
                    href={pin.link}
                    target="_blank"
                    rel="noopener"
                    className="flex-1 min-w-[80px] px-3 py-2 rounded-pill bg-rose/10 text-rose text-xs font-medium hover:bg-rose/20 transition-colors flex items-center justify-center gap-1"
                  >
                    🔗 Open
                  </a>
                  <button
                    onClick={() => togglePublished(pin.link)}
                    className={`flex-1 min-w-[80px] px-3 py-2 rounded-pill text-xs font-medium transition-colors flex items-center justify-center gap-1 ${
                      isPublished
                        ? "bg-mint/20 text-mint hover:bg-mint/30"
                        : "bg-rose text-white hover:bg-rose/90"
                    }`}
                  >
                    {isPublished ? "✅ Done" : "✓ Mark Done"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {todayPins.filter(p => published.has(p.link)).length > 0 && visiblePins.length > 0 && (
          <details className="mt-6">
            <summary className="cursor-pointer text-sm text-cocoa/40 hover:text-cocoa/60">
              Show {todayPins.filter(p => published.has(p.link)).length} published pins
            </summary>
            <div className="mt-2 text-xs text-cocoa/40 space-y-1">
              {todayPins.filter(p => published.has(p.link)).map(p => (
                <div key={p.link} className="line-through">{p.title}</div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
