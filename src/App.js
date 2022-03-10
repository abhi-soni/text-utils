import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

const App = () => {
  return (
    <div>
      <NavBar title="Text Utils" aboutText="About Us" />
      {/* <About title="About Text Utils"/> */}
      <TextForm title="Enter text below to analyse" />
    </div>
  );
}

export default App;
