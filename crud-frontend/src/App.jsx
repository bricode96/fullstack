import { useState } from 'react';
import './App.css';
import { ModalForm } from './component/ModalForm';
import { NavBar } from './component/NavBar';
import { TableList } from './component/TableList';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('modal mode Add')
    } else {
      console.log('modal mode Edit')
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')} />
      <TableList handleOpen={handleOpen} />
      <ModalForm 
      isOpen={isOpen}
      onSubmit={handleSubmit} 
      onClose={() => setIsOpen(false)}
      mode={modalMode} 
      />

    </>
  );
}

export default App;
