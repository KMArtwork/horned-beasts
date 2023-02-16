import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Footer from './Footer';
import data from './data.json';

function App() {

  const [modalBeast, setModalBeast] = useState({});
  const [showModal, setShowModal] = useState(undefined);

  const updateModalBeast = (beast) => {
    setModalBeast(beast);
    setShowModal(true);
    console.log(showModal);
  }

  const handleOnHide = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <Main data={data} updateModalBeast={updateModalBeast} />
      <SelectedBeast 
        show={showModal} 
        title={modalBeast.title}
        description={modalBeast.description}
        img={modalBeast.image_url}
        horns={modalBeast.horns} 
        handleOnHide={handleOnHide} />
      <Footer author="Kawika Miller" />
    </div>
  );
}

export default App;