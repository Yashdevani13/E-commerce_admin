import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';
import Add from './Pages/Add';
import List from './Pages/List';
import Orders from './Pages/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = "http://localhost:4000"
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className='flex max-padd-container'>
          <Sidebar />
          <Routes>
            <Route path='/add' element={<Add url={url}/>} />
            <Route path='/list' element={<List url={url}/>} />
            <Route path='/orders' element={<Orders url={url}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
