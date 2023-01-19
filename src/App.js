import './App.css';
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Card from './Components/Card.js'
import Katie from './images/katie-zaferes.png'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Card 
            img = {Katie}
            status = 'SOLD OUT'
            rating = "5.0"
            reviewCount = {6}
            country = "USA"
            title = "Life lessons with Katie Zaferes"
            price = "136"
        />
    </div>
  );
}

export default App;
