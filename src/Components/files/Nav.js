// import "./styles.css";
import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";

function AnExample(props) {
    let [reveal, setReveal] = useState(false);

    function toggleShow() {
        setReveal(!reveal);
    }
    return (
        <div>
            <Zoom when={reveal}>
                <h3>This is an example of React reveal</h3>
            </Zoom>
            <button type="button" onClick={toggleShow}>
                Toggle this button to reveal {reveal ? "Hide this button" : "Show the button"}
            </button>
        </div>
    );
}

export default function Nav() {
    return (
        <div className="Nav">
            <AnExample />
        </div>
    );
}