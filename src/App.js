import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "./context/authContext";



function App() {
const {currentUser} = useContext(AuthContext)

const ProtectedRoute = ({children}) => {
  console.log("children", children)
  if(!currentUser){
    return <Navigate to = './login'/>
  }
  return children
}
//console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'> </Route>
        <Route index element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>} />
        <Route path="register" element={<Register />}> </Route>
        <Route path="login" element={<Login />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
