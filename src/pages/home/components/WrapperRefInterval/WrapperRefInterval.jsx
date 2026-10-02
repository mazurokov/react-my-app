import RefInterval from "@pages/home/components/RefInterval/RefInterval.jsx";
import { useState } from "react";

function WrapperRefInterval() {
  const [show, setShow] = useState(true);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-lg font-semibold text-white">RefInterval</p>
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <RefInterval />}
    </div>
  );
}

export default WrapperRefInterval;
