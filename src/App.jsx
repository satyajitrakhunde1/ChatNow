import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import {LayoutLoader} from './components/layout/Loaders'


const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const Notfound =lazy(()=>import("./pages/Notfound"))
// const LayoutLoader =lazy(()=>import("./components/layout/Loaders"))

const AdminLogin =lazy(()=>import("./pages/admin/AdminLogin"))
const Dashboard =lazy(()=>import('./pages/admin/Dashboard'))


const App = () => {
  const user = true; // Set this based on your authentication logic
  
  return (
    <Router>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/chat/" element={<Chat/>} /> */}
          <Route path="/chat/:chatId" element={<Chat/>} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/about" element={<h1>About</h1>} />
          </Route>
          <Route path="/login" element={<ProtectRoute user={!user} redirect='/'><Login /></ProtectRoute>} />

<Route path='/admin' element={<AdminLogin/>}/>
<Route path="/admin/dashboard" element={<Dashboard/>}/>


          <Route path="*" element={<Notfound/>} />
        </Routes>
      </Suspense> 
    </Router>
  );
};

export default App;
