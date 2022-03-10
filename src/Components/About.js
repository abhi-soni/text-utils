import { useState } from "react";

const About = (props) => {
    const [style, setStyle] = useState({
        backgroundColor: '#fff',
        color: '#000'
    })
    const [toggleBtnText, setToggleBtnText] = useState("Enable Dark Mode");
    const toggleMode = () => {
        if (style.color === '#000') {
            setStyle({
                color: '#fff',
                backgroundColor: '#000',
                transition: '0.5s'
            })
            setToggleBtnText("Enable Light Mode");
        }
        else {
            setStyle({
                color: '#000',
                backgroundColor: '#fff',
                transition: '0.5s'
            })
            setToggleBtnText("Enable Dark Mode");
        }
    }
    return (
        <>
            <div className="container mt-4 px-lg-0" style={style}>
                <h3>{props.title}</h3>
                <p>This <b>Text Utils</b> project is created by <code>Abhishek Soni</code></p>
            </div>
            <button type="button" className="btn btn-primary" onClick={toggleMode}>{toggleBtnText}</button>
        </>
    );
}
export default About;