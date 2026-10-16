import { useState, useEffect } from "react";

function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 1. Функція, яка спрацьовуватиме при зміні розміру вікна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 2. Підписка на подію браузера на рівні об'єкта window
    window.addEventListener("resize", handleResize);

    // 3. Функція очищення (cleanup), яка спрацює при видаленні компонента з екрана
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Порожній масив означає: підписатися один раз при монтуванні

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-sm text-zinc-300">Window width</p>
      <p className="mt-2 text-xl font-semibold text-white">{windowWidth}px</p>
    </div>
  );
}
export default WindowWidth;
