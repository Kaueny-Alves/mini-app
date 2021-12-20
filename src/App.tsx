import { GlobalStyle } from './global';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lists } from './pages/Lists';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home/Home';
import { CreateLists } from './pages/Lists/CreateLists';



export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home children={''} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lists" element={<Lists  />} />
        <Route path="/create" element={<CreateLists />} />
      </Routes>
    </BrowserRouter>
  );
}

