
import './App.css';

import { Login } from './components/login';
import { Register } from './components/register';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Admindashboard } from './components/admindashboard';
import { Clientdashboard } from './components/clientdashboard';
import { CustomerDetails } from './components/customerdetails';
import { Update } from './components/update';
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Register/>}></Route>
    <Route path='/Register' element={<Login/>}></Route>
    <Route path='/admindashboard/:id' element={<Admindashboard/>}></Route>
    <Route path='/clientdashboard/:id' element={<Clientdashboard/>}></Route>
    <Route path='/customerdetails/:id' element={<CustomerDetails/>}></Route>
    <Route path='/update/:sno' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
