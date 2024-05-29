import  {lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home =lazy(()=>import("./pages/Home"))
const Login =lazy(()=>import("./pages/Login"))
const Chat =lazy(()=>import("./pages/Chat"))
const Groups =lazy(()=>import("./pages/Groups"))

const App = () => {

let user =true

  
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/chat" element={<Chat/>} />
    <Route path="/groups" element={<Groups/>} />
    <Route path="/about" element={<h1>about</h1>} />
    <Route path="*" element={<h1>Page Not Found</h1>} />
  </Routes>
</Router>   
  )
}

export default App
