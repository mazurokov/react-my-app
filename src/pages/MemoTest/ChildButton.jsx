import { memo } from "react";

function ChildButton({ onClick, settings }) {
  console.log("ChildButton render", settings);

  return <button onClick={onClick}>Child button</button>;
}

export default memo(ChildButton);
