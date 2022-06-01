import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React from 'react'
function App() {
  const subtitle = "this is the subtitle";
  const[showModal,setShowModal] = React.useState(false)
  const handleClose = () =>{
    setShowModal(false)
  }
  const handleOpen = () =>{
    setShowModal(true)
  }
  return (
    <div className="App">
      <Title subtitle={subtitle} title="events in the area" />
      <Title subtitle="another subtile" title="another title" />
      {/* // children props 
  // whatever you nest inside the modal is the children it makes the modal completely reusable 
   */}
    {showModal &&   
    <>
    <Modal handleClose={handleClose}>
          <h2>10% off</h2>
          <p>Use the code at checkout </p>
        </Modal><Modal>
            <h2>Hey </h2>
            <p>THIS</p>
            <h3>hey</h3>
          </Modal>
          </>}
          <button onClick={handleOpen}>Show Modal</button>
    </div>
  );
}

export default App;
