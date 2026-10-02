import { memo } from "react";

function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110",
        className,
      ].join(" ")}
    >
      {children || "CLICK"}
    </button>
  );
}

export default memo(Button);