import { useState } from "react";
const TextForm = (props) => {
    // value in useState() function will be assigned into "text" variable, and then we can update value of "text" using setText
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);  // this will set the entered value to "text" variable
    }
    const handleUpperClick = () => {
        let convertedText = text.toUpperCase();
        setText(convertedText);
        if (text === "") alert("Please Enter Text")
    }
    const handleLowerClick = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText);
        if (text === "") alert("Please Enter Text")
    }
    const handleClearClick = () => {
        let clearText = '';
        setText(clearText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        if (text === "") alert("Please Enter Text")
        else alert('Text Copied !!');
    }
    const handleRemoveSpaces = () => {
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText);
    }
    return (
        <>
            <div className="container mt-4 px-lg-0">
                <h3>{props.title}</h3>
                <div>
                    <textarea className="form-control" id="textBox" rows="8" placeholder="Start typing here...." value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-4 py-3 bg-dark bg-opacity-25">
                <h4> Text Summary</h4>
                <p className="mb-0">{text.split(" ").length} words and {text.length} characters</p>
                <p className="mb-0">{0.008 * text.split(" ").length} Minutes read</p>
            </div>
        </>
    );
}
export default TextForm;