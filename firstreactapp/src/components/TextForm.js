import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=> {
        let newText='';
        setText(newText)
    }
    const handleCopy = () => {
        let text=document.getElementById('My Text')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleOnChange =(event)=> {
        console.log("On change");
        setText(event.target.value)
    }
    const [text,setText] = useState('')
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="My Text" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upperCase</button>
            <button className="btn btn-primary mx-1"  onClick={handleLoClick} >Convert to lowerCase</button>
            <button className="btn btn-primary mx-1"  onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1"  onClick={handleCopy} >Copy Text</button>
        </div>
        <div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

