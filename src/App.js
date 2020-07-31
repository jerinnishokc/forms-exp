import React from 'react';
import './App.css';
// import NewBoxForm from './components/NewBoxForm/new-box-form.component';
import BoxList from './components/BoxList/box-list.component';

function App() {
  return (
    <div className="App">
      <h1>Box builder</h1>
      <BoxList />
    </div>
  );
}

export default App;
