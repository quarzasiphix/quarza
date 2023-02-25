import { createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Login from './views/Login'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Login/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    )
  )
  const App = () => {
    return(
      <RouterProvider router={router} />
    )
  }

export default App
