import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Layouts from '../layouts/Layouts'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Cart from '../components/Cart/Cart'
import AllProducts from '../components/AllProducts/AllProducts'
import Wishlist from '../components/Wishlist/Wishlist'
import Statistics from '../pages/Statistics'
import Deals from '../pages/Deals'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../products.json'),
          },
          {
            path: ':category',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../products.json'),
          },
        ]
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'cart',
            element: <Cart></Cart>,
            loader:()=> fetch('../products.json')
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
            loader:()=> fetch('../products.json')
          },
        ]
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: () => fetch('../products.json')
      },
      {
        path: 'deals',
        element:<Deals></Deals>,
        loader: () => fetch('../deals.json')
      }
      

      
    ]
  }
])

export default router

