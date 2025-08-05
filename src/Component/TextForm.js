import React,{useState} from 'react'

// Importing PropTypes for type checking
export default function TextForm (props) {
    const handleUpperClick = () => {
        console.log('Uppercase was clicked');
        // Function to convert text to uppercase
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase!","success")
    }
    const handleLowerClick = () => {
        console.log('Lowercase was clicked');
        // Function to convert text to lowercase
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase!","success")
    }
    const handleClearClick = () => {
        console.log('Clear was clicked');
        // Function to clear the text
        setText('');
        props.showAlert(" Text Cleared!","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to Clipboard","success")
    
        //Function to copy the text
    }
    const handleExtraSpace = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra Spaces Removed!","success")
    }
    const handleOnchange = (event) => {
        console.log('On change');
        // Function to handle text change
        setText(event.target.value);
    }


    const [text, setText] = useState('');
return (
    <>
    
<div className='container'  style={{backgroundColor:props.mode==='dark'?'#2f2b2cff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>   
    <div className="mb-3" >
    
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#2f2b2cff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-3" onClick={handleUpperClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleLowerClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
</div>
<div className="container"  style={{color:props.mode==='dark'?'white':'#180208ff'}} >
    <h2 >Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2  >Preview</h2>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
</div>
</>
)
}


 
