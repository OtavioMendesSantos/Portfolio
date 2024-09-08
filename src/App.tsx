import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Ds from './pages/Ds'
import { ThemeProviderWrapper } from './Context/ThemeContext'

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
    <ThemeProviderWrapper>
      <RouterProvider router={router} />
    </ThemeProviderWrapper>
  )
}

export default App
