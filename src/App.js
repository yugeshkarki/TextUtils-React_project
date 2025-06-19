import "./App.css";
import Navbar from "./compoments/Navbar";
import Textform from "./compoments/Textform";
// import About from './compoments/About';
import React, { useState } from "react";
import Alert from "./compoments/Alert";
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,Link
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
    setAlert(null);
    },1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a0f1d";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title=" Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
{/* <Routes>
 <Route path="/about" element={<About />} />

 <Route path="/" element={ <Textform  showAlert={showAlert} heading="enter the text to analyze" mode={mode} />}/>
    <Textform  showAlert={showAlert} heading="enter the text to analyze" mode={mode} />
  
</Routes> */}
           <Textform  showAlert={showAlert} heading="enter the text to analyze" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
