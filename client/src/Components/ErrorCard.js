import React from "react";

function ErrorCard(props) {
    return (
        <>
            <div>
                {props.message}
            </div>
        </>
    )
}

export default ErrorCard;
