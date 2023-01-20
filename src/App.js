import './App.css';
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Card from './Components/Card.js'
import data from './data.js'

function App() {
  const cards = data.map (x => {
    return ( 
    <Card 
        key = {x.id}
        x = {x}
    />
    )
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
      <section className = "cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
