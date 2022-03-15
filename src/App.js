import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // from router v.6, Routes is used instead of Switch
import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';

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
      <Router>
        <NavBar title="Text Utils" aboutText="About Us" />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path='/about' element={<About title="About Text Utils" />} />
          <Route path='/' element={<TextForm title="Enter text below to analyse" showAlert={showAlert} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;