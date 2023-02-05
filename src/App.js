import './App.css';
import Banner from './components/Banner';
import Features from './components/features';
import Footer from './components/footer';
import Header from './components/navBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
