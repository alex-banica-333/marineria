import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Root from "./routes/root"
import ErrorPage from "./error-page"
import UserPage from "./routes/user-page"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.sass'
import './responsive.sass'

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "user/:userID",
        element: <UserPage />
      }
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
