import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero Section/Hero';
import Client from "./components/Client/Client";
import Vision from './components/Vision/Vision';
import About from './components/About Us/About';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12">
            <Navbar/>
            <Hero/>
            <About/>
            <Vision/>
            <Client/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
