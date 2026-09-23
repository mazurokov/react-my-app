import { memo } from "react";

function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700",
        className,
      ].join(" ")}
    >
      {children || "CLICK"}
    </button>
  );
}

export default memo(Button);