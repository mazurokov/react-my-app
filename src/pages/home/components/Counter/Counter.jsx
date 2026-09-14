import { useState, useCallback } from 'react';
import Button from "../../../../components/Button/Button.jsx";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("click");
    }, []);

    const handleClickIncrement = useCallback(() => {
        console.log("click");

        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            <Button onClick={handleClick}>click 1111</Button>

            <p>Count: {count}</p>

            <Button onClick={handleClickIncrement}>click 2222</Button>
        </div>
    );
}

export default Counter;