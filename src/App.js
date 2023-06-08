import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    //BEM
    <div className="App">
     {/* sidebar */}
     <Sidebar />
     {/* feed */}
     <Feed />

     {/* widget */}
     <Widgets />
    </div>
  );
}

export default App;
