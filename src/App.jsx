import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const App = () => {
  const user = false; // Set this based on your authentication logic
  
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      {/* </Suspense> */}
    </Router>
  );
};

export default App;
