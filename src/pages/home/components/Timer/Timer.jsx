import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // 1. Код ефекту (аналог mounted + watch)
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // 2. Функція очищення (аналог unmounted)
        return () => {
            clearInterval(interval);
        };
    }, []); // 👈 Масив залежностей (порожній масив означає "виконати лише 1 раз при монтуванні")

    return <div>Секунд: {seconds}</div>;
}

export default Timer;