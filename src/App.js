import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';


const App = () => {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    // this setAlert() function will make "alert" as object which having 2 properties
    setAlert({
      msg: message,
      type: type
    });

    // Automatic dismis alert after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
      <NavBar title="Text Utils" aboutText="About Us" />
      <Alert alert={alert} />
      {/* <About title="About Text Utils"/> */}
      <TextForm title="Enter text below to analyse" showAlert={showAlert} />
    </div>
  );
}

export default App;

