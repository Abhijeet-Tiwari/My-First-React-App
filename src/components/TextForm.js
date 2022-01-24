import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChng = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        setText('');
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChng}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p><strong>{text.split(" ").length} words and {text.length} characters</strong></p>    
                <p>{0.008 * text.split(" ").length} mins read</p>
                <h3>Preview</h3>
                <p>{text }</p>
            </div>
        </>
        
    );
}
