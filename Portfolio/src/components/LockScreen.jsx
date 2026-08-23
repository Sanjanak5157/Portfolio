// ── Lock Screen ──────────────────────────────────────────────
// Simple PIN gate shown before the portfolio loads.
// ⚠️ This is NOT real security — anyone can view the PIN in source code
// (browser dev tools). Use this only to keep casual visitors out,
// not to protect sensitive data.
//
// 🔑 TO CHANGE YOUR PIN: edit the PIN constant below.
import { useState, useEffect } from "react";

const PIN = "2004"; // ← change this to your own 4-digit PIN

export default function LockScreen({ onUnlock }) {
  const [entered, setEntered] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const press = digit => {
    if (entered.length >= 4) return;
    const next = entered + digit;
    setEntered(next);
    setError(false);
    if (next.length === 4) {
      setTimeout(() => {
        if (next === PIN) {
          sessionStorage.setItem("portfolio_unlocked", "true");
          onUnlock();
        } else {
          setError(true);
          setShake(true);
          setTimeout(() => { setEntered(""); setShake(false); }, 500);
        }
      }, 150);
    }
  };

  const backspace = () => { setEntered(e => e.slice(0, -1)); setError(false); };

  // Allow physical keyboard input too
  useEffect(() => {
    const handler = e => {
      if (/^[0-9]$/.test(e.key)) press(e.key);
      if (e.key === "Backspace") backspace();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [entered]);

  return (
    <div className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Lock icon */}
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30
          flex items-center justify-center mb-6">
          <i className="ri-lock-2-fill text-3xl text-accent" />
        </div>

        <h1 className="font-head font-bold text-xl text-white mb-1">Portfolio Locked</h1>
        <p className="text-muted text-sm font-mono mb-8">Enter PIN to continue</p>

        {/* PIN dots */}
        <div className={`flex gap-4 mb-10 ${shake ? "animate-pulse" : ""}`}
          style={shake ? { animation: "shake 0.4s" } : {}}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all
              ${entered.length > i
                ? (error ? "bg-accent3 border-accent3" : "bg-accent border-accent")
                : "border-border"}`} />
          ))}
        </div>

        {error && (
          <p className="text-accent3 text-xs font-mono mb-4 -mt-6">Incorrect PIN, try again</p>
        )}

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-4">
          {["1","2","3","4","5","6","7","8","9"].map(n => (
            <button key={n} onClick={() => press(n)}
              className="w-16 h-16 rounded-full border border-border text-white text-xl
                font-mono hover:bg-white/5 active:scale-95 transition-all cursor-pointer">
              {n}
            </button>
          ))}
          <div />
          <button onClick={() => press("0")}
            className="w-16 h-16 rounded-full border border-border text-white text-xl
              font-mono hover:bg-white/5 active:scale-95 transition-all cursor-pointer">
            0
          </button>
          <button onClick={backspace}
            className="w-16 h-16 rounded-full flex items-center justify-center
              text-muted hover:text-white transition-colors cursor-pointer">
            <i className="ri-arrow-left-line text-xl" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
