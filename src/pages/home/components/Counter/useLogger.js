import { useEffect } from "react";

function useLogger(value) {
  // React.useEffect(() => {
  //   console.log(value);
  // }, [value]);

  useEffect(() => {
    console.log("Count changed:", value);
  }, [value]);
}
export default useLogger;
