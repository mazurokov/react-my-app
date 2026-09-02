import {useState} from "react";

function Test() {
    const [count, setCount] = useState(0);

    const handleUp = () => {
        setCount(prev => prev + 1);
    };

    const handleDown = () => {
        setCount(prev => prev - 1);
    };

    return (
        <>
            <button onClick={handleUp}>збиільшити</button>
            <button onClick={handleDown}>зменшити</button>
            <p>{count}</p>
        </>
    );
}

export default Test;