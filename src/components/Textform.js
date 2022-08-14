import React, { useState } from 'react'


export default function Textform(props) {
    const [text,setText] = useState("");
    const handleupclick =  () =>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Text changes to upper case", "Success");
    }
    const handleloclick =  () =>{
      let newText= text.toLowerCase();
      setText(newText)
     
  }
  
    const handlecopy =  () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      
  }
    const handleclear =  () =>{
      let newText= ''; 
      props.setText(newText)
  }
    const handleextraspace =  () =>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces has been removed", "Success");
  }

    const handleonchange = (event) =>{
       setText(event.target.value)
    }
  return (
    <>
    <div className= "container style={{color: props.mode===`dark`?`white`:`black`}}">
        <h1>Analyze Your Text</h1>
        <div className="mb-4">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundcolor: props.mode===`dark`?`grey`:`white` ,color: props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
        </div>
        <button className=" btn btn-primary mx-2" onClick={handleupclick}> Convert to UpperCase</button>
        <button className=" btn btn-primary mx-2" onClick={handleloclick}> Convert to lowerCase</button>
        <button className=" btn btn-primary mx-2" onClick={handlecopy}> Copy Text</button>
        <button className=" btn btn-primary mx-2" onClick={handleclear}> clear Text</button>
        <button className=" btn btn-primary mx-2" onClick={handleextraspace}> Remove Extra Space</button>
    </div>
    <div className="container my-3 style= {{color: props.mode===`dark`?`white`:`black`}}" >
        <h1> Your Text Summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mintues reads</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</> 
  )
}
