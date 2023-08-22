import React from "react";
import { TodoIcon } from './index.js'

function CompletedIcon ({completed, onComplete}) {
    return (
        <TodoIcon
        type="check"
        color={ completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}
export {CompletedIcon};