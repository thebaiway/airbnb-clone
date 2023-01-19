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
        img = {x.coverImg} 
        status = {x.status}
        rating = {x.stats.rating} 
        reviewCount = {x.stats.reviewCount} 
        location = {x.location} 
        title = {x.title} 
        price = {x.price} 
        country = {x.country}
        openSpots = {x.openSpots}
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
