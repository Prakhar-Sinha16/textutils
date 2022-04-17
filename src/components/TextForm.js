import React, {useState} from 'react'

export default function TextForm(props) {
  let newText;
  const handleUpCase = () =>{
    console.log('button was clicked '+text);
    newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upperCase","success");
  }

  const handleLoCase = () =>{
    console.log('lowercase button was clicked '+ text);
    newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase","success");
  }

  const handleClearCase = () =>{
    newText = '';
    setText(newText);
    props.showAlert(" Cleared All","success");
  }

  const handleOnChange = (event) => {
    console.log('changing');
    setText(event.target.value);
  }

  const handleCopy = () =>{
    console.log("I am copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard!","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  }

  const [text, setText] = useState('');
  return ( 
    <>
      <div style = {{color: props.mode === 'dark'?'white':'#14063e'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#14063e'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>ConvertToUpperCase</button>
        <button mx-20 className="btn btn-primary mx-1 my-1" onClick={handleLoCase}>ConvertToLowerCase</button>
        <button mx-20 className="btn btn-primary mx-1 my-1" onClick={handleClearCase}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'#14063e'}}>
        <h2>Your Summary</h2>
        <p><b><u>{text.split(" ").filter((element)=>{return element.length !==0}).length}</u> words and <u>{text.length}</u> charecters</b></p>
        <p><i>{0.08 * text.split(" ").filter((element)=>{return element.length !==0}).length } Minutes to read</i></p>
      </div>
    </>
  )
}
