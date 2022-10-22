import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/cards/Card';
import Register from './components/register/Register';
function App() {

  
  return (
    <div className="App">
        <Navbar url="https://mj-gallery.com/6db24f88-7735-4b9d-8bbf-85c16e1aeeb4/grid_0.png"/>        
        <Register></Register>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
