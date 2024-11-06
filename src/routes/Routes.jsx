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
import ProductSupport from '../pages/ProductSupport'
import OrderTrack from '../pages/OrderTrack'
import Shippin from '../pages/Shippin'
import Returns from '../pages/Returns'
import About from '../pages/About'
import Carrers from '../pages/Carrers'
import Contact from '../pages/Contact'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import Cookies from '../pages/Cookies'



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
      },
      {
        path:'productsupport',
        element:<ProductSupport></ProductSupport>
      },
      {
        path:'ordertrack',
        element:<OrderTrack></OrderTrack>
      },
      {
        path:'shipping',
        element:<Shippin></Shippin>
      },
      {
        path:'returns',
        element:<Returns></Returns>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path: 'carrers',
        element:<Carrers></Carrers>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'terms',
        element:<Terms></Terms>
      },
      {
        path:'privacy',
        element:<Privacy></Privacy>
      },
      {
        path:'cookie',
        element:<Cookies></Cookies>
      }
      

      
    ]
  }
])

export default router

