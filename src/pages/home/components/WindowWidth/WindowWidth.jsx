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

  return <div>Ширина вікна: {windowWidth}px</div>;
}
export default WindowWidth;
