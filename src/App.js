import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import LandKitWelcome from './component/LandKitWelcome/LandKitWelcome';
import Card from './component/Card/Card';
import FormSection from './component/Form/FormSection';
import Expereince from './component/Experience/Expereince';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandKitWelcome/>
      <Card/>
      <FormSection/>
      <Expereince/>
    </div>
  );
}

export default App;
