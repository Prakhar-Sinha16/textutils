import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle,setmyStyle]= useState(
    
    // {
    //     color:'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#0b1538',
        backgroundColor: props.mode === 'dark'?'#0b1538':'white'
    }

  return (
      <div className="container" style={myStyle}>
          <h2 className='my-3'>About Us</h2>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Text utils gives you a way to Analyze your text quickly and efficiently. Be it word count, charecter count or anything else.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Text Utils is a free charecter counting tool that provides instant charecter count and word count statistics for a given text. Text utils reports the number of words and charecter. Thus it is suitable for writting text/charecter  limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software work in any web browser such as chrome, FireFox, Explorer, Safari, Opera. It suits to count charecters in facebook, blog, books, excel, pdf documents, essays, etc.
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
