import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

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
      path: '/*',
      element: <NotFound />,
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
