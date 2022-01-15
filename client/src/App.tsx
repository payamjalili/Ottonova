import './App.css';
import Header from './components/header/header';
import Cities from './components/cities/cities';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <section id='content'>
        <Cities />
      </section>
      <Footer />
    </div>
  );
}

export default App;
