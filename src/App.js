 
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';
 
import { Routes, Route } from "react-router-dom";
 
function App() {
    const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);
    const showAlert = (message,type) =>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null);
            
        }, 1500);
    }
    const toggleMode = () => { 
         switch (mode) {
        case 'light':
            setMode('dark');
            document.body.style.backgroundColor = '#2f2b2cff';
            document.title="Textutil-Dark Mode";
            showAlert("Dark Mode has been Enabled","success ");
            
            break;
        case 'dark':
             setMode('light');
            document.body.style.backgroundColor = '#056b9359';
            document.title="Textutil-Light Mode";
            showAlert("Light Mode has been Enabled","success ")
            break;

       
        default:document.body.style.backgroundColor = '#056b9359';
        
       }
       /* if (mode==='light') {
            setMode('dark');
            document.body.style.backgroundColor = '#2f2b2cff';

        }
        else{
            setMode('light');
            document.body.style.backgroundColor = '#056b9359';

        }*/
       
     };
    return (
        <>
        
       <Navbar title="Textutil" mode={mode} about="About US" toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
         
     <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
      <Route path="/TextForm.js" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
     <Route path="/About.js" element={<About mode={mode}/>} />
      
    </Routes>
          </div>
          
        </>
    );
  
}

export default App;
