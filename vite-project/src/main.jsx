import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './components/App/App'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import "./assets/styles/main.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: []
  },

  { path: '/sign-up', element: <SignUp />},
  { path: '/login', element: <Login />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <RouterProvider router={router} />
  
  )
