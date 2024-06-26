import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Checkout from './Pages/CheckOut/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import RouteWithTitle from './Pages/Shared/RouteWithTitle/RouteWithTitle';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<RouteWithTitle title={'Register'}><Register></Register></RouteWithTitle>} ></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } >
        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
