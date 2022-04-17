// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);

  }

  const toggleButton = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#14063e'
      showAlert(" Dark Mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode is enable","success");
    }
  }

  const greenmode = () => {
    if(mode === 'light'){
        setMode('green');
        document.body.style.backgroundColor = 'green'
        showAlert(" Green Mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode is enable","success");
    }
  }

  return (
  <>
    {/* <Navbar title='TextUtils' aboutText="AboutText"/> */}
    {/* <Router> */}
    <Navbar title ='TextUtils' mode = {mode} greenModeTheme={greenmode} toggleButton={toggleButton}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter your text here:" mode={mode}/>
          {/* </Route>
        </Switch> */}
    </div>
    {/* {</Router> */}
  </>
  );
}

export default App;
