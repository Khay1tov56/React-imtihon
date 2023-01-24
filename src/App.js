import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import Books from './pages/Books/Books';
import AddBook from './pages/AddBook/AddBook';
import AddAuth from './pages/AddAuth/AddAuth';
import { Register } from './pages/Register/Register';
import Shoir from './pages/Shoir/Shoir';
import Kitob from './pages/Kitob/Kitob';
import Secutity from './pages/Security/Secutity';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
import SettingBras from './components/SettingBars/SettingBras';

function App() {

  let token = localStorage.getItem('token');

  return (
    <div className="App">
  <Routes>
    <Route  path='/*' element={token? <Home /> : <Login />}/>
    <Route  path='/books' element={<Books />}/>
    <Route  path='/login' element={<Login />}/>
    <Route  path='/register' element={<Register />}/>
    <Route  path='/addbook' element={<AddBook />}/>
    <Route  path='/addauth' element={<AddAuth />}/>
    <Route  path='/shoir/:id' element={<Shoir />}/>
    <Route  path='/kitob/:id' element={<Kitob />}/>
    <Route  path='/security' element={<Secutity />}/>
    <Route  path='/settings' element={<Settings/>}/>
    <Route  path='/profile' element={<Profile/>}/>
    <Route  path='/bar' element={<SettingBras/>}/>
  </Routes>
    </div>
  );
}

export default App;
