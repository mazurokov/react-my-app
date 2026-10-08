import { memo } from "react";

function ChildButton({ onClick }) {
  console.log("ChildButton render");

  return <button onClick={onClick}>Child button</button>;
}

export default memo(ChildButton);
