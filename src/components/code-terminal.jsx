"use client";
import { useEffect, useMemo, useState } from "react";

/* Token helpers: t = text, c = color class key */
const k = (t) => ({ t, c: "kw" }); // keyword
const v = (t) => ({ t, c: "var" }); // identifier / punctuation-ish
const p = (t) => ({ t, c: "prop" }); // object property
const s = (t) => ({ t, c: "str" }); // string
const n = (t) => ({ t, c: "num" }); // number / boolean
const f = (t) => ({ t, c: "fn" }); // function / method
const c = (t) => ({ t, c: "com" }); // comment
const x = (t) => ({ t, c: "punc" }); // punctuation

const CODE = [
  [k("const "), f("developer"), x(" = {")],
  [p("  name"), x(": "), s("'Jasmin Bhesaniya'"), x(",")],
  [p("  role"), x(": "), s("'Senior Software Engineer'"), x(",")],
  [p("  location"), x(": "), s("'Ahmedabad, India'"), x(",")],
  [p("  experience"), x(": "), n("5+"), x(", "), c("// years")],
  [p("  stack"), x(": ["), s("'React.js'"), x(", "), s("'Next.js'"), x(", "), s("'Remix.js'"), x(", "), s("'Vue.js'"), x(", "), s("'Supabase'"), x(", "), s("'React Native'"), x(", "), s("'Flutter'"), x(", "), s("'Node.js'"), x("],")],
  [p("  passions"), x(": ["), s("'clean UI'"), x(", "), s("'open source'"), x("],")],
  [p("  available"), x(": "), n("true"), x(",")],
  [x("};")],
  [],
  [f("developer"), x("."), f("build"), x("();  "), c("// → delightful web ✨")],
];

const COLOR = {
  kw: "text-violet-400",
  fn: "text-blue-400",
  prop: "text-sky-300",
  str: "text-amber-300",
  num: "text-orange-400",
  com: "text-slate-500 italic",
  punc: "text-slate-400",
  var: "text-slate-200",
};

const CodeTerminal = ({ className = "" }) => {
  // Flatten into a typed-character stream while remembering line + color.
  const flat = useMemo(() => {
    const chars = [];
    CODE.forEach((line, li) => {
      line.forEach((tok) => {
        for (const ch of tok.t) chars.push({ ch, c: tok.c, li });
      });
      chars.push({ ch: "\n", c: "punc", li });
    });
    return chars;
  }, []);

  const [count, setCount] = useState(0);
  const done = count >= flat.length;

  useEffect(() => {
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(flat.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= flat.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [flat.length]);

  // Rebuild lines from the visible slice.
  const visible = flat.slice(0, count);
  const maxLi = visible.length ? visible[visible.length - 1].li : 0;
  const lines = [];
  for (let i = 0; i <= maxLi; i++) lines.push([]);
  visible.forEach((item) => {
    if (item.ch === "\n") return;
    lines[item.li].push(item);
  });

  return (
    <div
      className={`relative rounded-xl border border-neutral-700/70 bg-neutral-900 shadow-2xl glow-ring overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-neutral-700/60 bg-neutral-800/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        <span className="ml-3 font-mono text-xs text-neutral-400">developer.js</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          ~/portfolio
        </span>
      </div>

      {/* Code body */}
      <div className="px-4 py-4 font-mono text-[13px] leading-6 sm:text-sm">
        {/* min-height keeps layout stable while typing */}
        <pre className="min-h-[19rem] whitespace-pre-wrap break-words">
          {lines.map((line, li) => (
            <div key={li} className="flex">
              <span className="mr-4 w-5 flex-shrink-0 select-none text-right text-neutral-600">
                {li + 1}
              </span>
              <code className="flex-1">
                {line.map((item, ci) => (
                  <span key={ci} className={COLOR[item.c]}>
                    {item.ch}
                  </span>
                ))}
                {li === maxLi && (
                  <span
                    className={`inline-block w-[8px] -mb-0.5 h-[1.05em] translate-y-[2px] bg-blue-400 ${
                      done ? "animate-blink" : ""
                    }`}
                  />
                )}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeTerminal;
