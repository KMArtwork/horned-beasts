import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <Main />
      <Footer author="Kawika Miller" />
    </div>
  );
}

export default App;