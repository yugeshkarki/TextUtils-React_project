
import React, {useState}from 'react';

export default function Textform(props) {
const handleUpClick= ()=>{
// console.log('UpperCase is clicked')
let newText= text.toUpperCase();
setText(newText)
props.showAlert("Converted to upper case","success");
}

const handleLowClick= ()=>{
// console.log('UpperCase is clicked')
let newText= text.toLowerCase();
setText(newText)
props.showAlert("Converted to lower case","success");
}
const ClearText= ()=>{
// console.log('UpperCase is clicked')
let newText= '';
setText(newText)
props.showAlert("Text cleared","success");
}


  const  handleOnChange= (event)=>{
    // console.log('on change')
   setText(event.target.value)
  }

  const[text, setText] = useState("");
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading }</h1>
   <div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
    </div>
    <button className=" btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase </button>
    <button className=" btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase </button>
    <button className=" btn btn-primary mx-2" onClick={ClearText} >Clear Text </button>

      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length}Words and {text.length}Characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text here to preview"}</p>
      </div>
    </div>
  )
}
