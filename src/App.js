import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header title="Lab 01 | My First React App" />
      <Main />
      <Footer author="Kawika Miller" />
    </div>
  );
}

export default App;




//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>