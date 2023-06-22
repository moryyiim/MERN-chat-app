// // import { Button } from '@chakra-ui/react';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Outlet,
// } from 'react-router-dom';

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Root />}>
//         <Route index element={<Home />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//       </Route>
//     )
//   );

//   return (
//     <div className='App'>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// const Root = () => {
//   return (
//     <>
//       <div>
//         <Link to='/'>Home</Link>
//         <Link to='/login'>Login</Link>
//         <Link to='/register'>Register</Link>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage';
import Error from './pages/Error';
import './App.css';

const App = () => {
  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/chats' element={<ChatPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
