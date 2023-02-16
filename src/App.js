import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import data from './data.json';

function App() {

  let state = {
    selectedBeastInfo: undefined,
  }

  // const displayModalBeast = (beast) => {
  //   state.selectedBeastInfo = beast;
  //   console.log(state.selectedBeastInfo);
  // }

  return (
    <div className="App">
      <Header title="Horned Beasts" />
      {/* <SelectedBeast  beast={state.selectedBeastInfo} /> */}
      <Main 
      data={data} 
      // displayModalBeast={displayModalBeast}
      />
      <Footer author="Kawika Miller" />
    </div>
  );
}

export default App;