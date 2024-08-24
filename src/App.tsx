import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import CustomThemeProvider from './styles/CustomThemeProvider'
import Ds from './pages/Ds/DS'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Blog',
      element: <Blog />,
    },
    {
      path: '/Ds',
      element: <Ds />,
    },
    {
      path: '/*',
      element: <NotFound />,
    }
  ])

  return (
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  )
}

export default App
