import RefInterval from "../RefInterval/RefInterval.jsx";
import { useState } from "react";

function WrapperRefInterval() {
  const [show, setShow] = useState(true);
  return (
    <div>
      RefInterval::
      {show && <RefInterval />}
      <br />
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle RefInterval
      </button>
    </div>
  );
}

export default WrapperRefInterval;
