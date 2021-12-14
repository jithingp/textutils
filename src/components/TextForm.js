import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick=()=>{
      
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    // const handleinverse=()=>{
      
    //     let newText = text.charAt(0).toUpperCase() + text.slice(1);
    //     setText(newText)
    // }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard!","success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success")
    }
    const handleClearClick=()=>{
      
        let newText ='';
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }
    

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('')
   
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className  ="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(33 37 41)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
