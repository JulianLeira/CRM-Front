import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PaginaPrincipal from './components/PaginaPrincipal';
import ClientAdmin from './components/ClientAdmin';
import NewCliOpp from './components/NewCliOpp';
import NewContact from './components/NewContact';
function App() {
  const [blogPost, setBlogPost] = useState()
  
  // useEffect(() => {
  //   fetch("http://localhost:8080/ClientOpp")
  //     .then((res) => {return res.json()})
  //     .then((data) => setBlogPost(data))
  // }, [])
  
  // if (!blogPost) {
  //   return (
  //     <h1>
  //       Loading...
  //     </h1>
  //   )
  // }
  return ( 
    <BrowserRouter >
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/paginaPrincipal" element={<PaginaPrincipal/>}/>
        <Route path="/ClientAdmin/:idClientOpp" element={<ClientAdmin/>}/>
        <Route path="/NewCliOpp" element={<NewCliOpp/>}/>
        <Route path="/NewContact/:idClientOpp" element={<NewContact/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );

}

export default App;
