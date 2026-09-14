import {memo} from "react";

function Button(props) {
    console.log('test RENDER')
    return (
        <button onClick={props.onClick}>
            {props.children ? props.children : "CLICK"}
        </button>
    )
}
export default memo(Button);