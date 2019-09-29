import React from 'react'
import './App.css';
import {
  BlogPost, Header
} from './Component'

function App() {
  return (<div>
    <Header />
    <p>BlogPost</p>
    <hr />
    <BlogPost />
  </div>
  );
}

export default App;