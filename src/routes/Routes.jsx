import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Layouts from '../layouts/Layouts'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layouts></Layouts>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'details/:id',
          element:<Details></Details>,
          loader:() => fetch('/products.json')
        }
      ]
    }
  ])

  export default router

