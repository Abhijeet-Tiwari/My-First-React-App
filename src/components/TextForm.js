import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpCase = () => {
        // console.log("Convert to Upper Case", text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChng = (event) => {
        // console.log("New Value entered");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here.')
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChng}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
        </div>
    );
}
