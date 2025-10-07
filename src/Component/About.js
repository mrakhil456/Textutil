        import React  from 'react'

        export default function About (props) {
           
        return (

            <div className="container"   style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>

                <h1>About Us</h1>
                <div>
                    <h6 style={{outline:'none',fontFamily:'Arial'}}><strong> TextUtils</strong>  is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button.This application provides a simple and intuitive interface for performing text operations. Whether you are a student, a professional, or just someone who needs to work with text, TextUtils can help you get the job done quickly and efficiently.
                     TextUtils is a utility that allows you to manipulate your text in various ways. You can use it to convert text to uppercase, lowercase, remove extra spaces, and perform other text transformations.
                </h6>
                </div>
                 
                <div className="accordion" id="accordionExample"  style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
            
            <h2 className="accordion-header">
            <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
                  <h5><strong>Analyze your Text</strong></h5>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
                  It is a Simple Text Analyzer , which mutilates your text, but in a tender way
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 <h5><strong> Free to Use</strong></h5>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
                  It is completely free to use. No credit cards required. Use as much as you want!!
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 <h5><strong>Browser Compatible</strong></h5>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={{backgroundColor:props.mode==='dark'?'#191a1bff':'rgba(5, 107, 147, 0)' , color:props.mode==='dark'?'white':'black'}}>
                It is compatible with all of your favorite browsers.
            </div>
            </div>
        </div>
        </div>
         

            </div>
        )
        }


