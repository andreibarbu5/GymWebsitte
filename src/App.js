import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Workout Categories */}
      <Categories />
      {/* Best Workouts */}
      {/* About */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
