import { useState } from "react";
import PropTypes from 'prop-types';

const TextForm = (props) => {
    // value in useState() function will be assigned into "text" variable, and then we can update value of "text" using setText
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);  // this will set the entered value to "text" variable
    }
    const handleUpperClick = () => {
        if (text === "") alert("Please Enter Text")
        else {
            let convertedText = text.toUpperCase();
            setText(convertedText);
            props.showAlert("Converted to Upper Case !!", "success");
        }
    }
    const handleLowerClick = () => {
        if (text === "") alert("Please Enter Text")
        else {
            let convertedText = text.toLowerCase();
            setText(convertedText);
            props.showAlert("Converted to Lower Case !!", "success");
        }
    }
    const handleClearClick = () => {
        let clearText = '';
        setText(clearText);
        props.showAlert("Cleared Text !!", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        if (text === "") alert("Please Enter Text")
        else
            props.showAlert("Text Coppied to Clipboard !!", "success");
    }
    const handleRemoveSpaces = () => {
        if (text === "") alert("Please Enter Text")
        else {
            let newText = text.replace(/\s+/g, ' ').trim();
            setText(newText);
            props.showAlert("Extra Spaces are removed !!", "success")
        }
    }
    return (
        <>
            <div className="container mt-4 px-lg-0">
                <h3>{props.title}</h3>
                <div>
                    <textarea className="form-control" id="textBox" rows="8" autoFocus={true} placeholder="Start typing here...." value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="mt-3">

                    {/* We can use disabled={text.length===0} to disable button when there is no text */}
                    <button className="btn btn-primary mx-1 my-1" style={{background:"#004687"}} onClick={handleUpperClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" style={{background:"#004687"}} onClick={handleLowerClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" style={{background:"#004687"}} onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" style={{background:"#004687"}} onClick={handleRemoveSpaces}>Remove Spaces</button>
                    <button className="btn btn-primary mx-1 my-1" style={{background:"#004687"}} onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-4 py-3 bg-dark bg-opacity-25">
                <h4> Text Summary</h4>
                <p className="mb-0">{((text.trim().split(/\s+/)).filter(function (element) {
                        return element !== "";
                    })).length} Words and {text.length} Characters</p>
                <p className="mb-0">{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            </div>
        </>
    );
}
export default TextForm;

// setting datatype of props
TextForm.propTypes = {
    title: PropTypes.string,
    showAlert: PropTypes.func
}