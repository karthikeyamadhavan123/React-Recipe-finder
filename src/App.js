import './App.css';
import Login from './logincomponent/login';
import Home from './maincomponent/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sign from './signupcomponent/sign';
import Forgotpassword from './forgotpassword/forgotpassword';
import Instagram from './mainpage/instagram';
import Finder from './Finder/finder';
// import Error from './error/error';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <BrowserRouter>
   <Home/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Sign/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='/Recipes' element={<Instagram/>}/>
      <Route path='/Finder' element={<Finder/>}/>

      {/* <Route path='/*' element={<Error/>}/> */}
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
