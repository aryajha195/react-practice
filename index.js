import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AutoComplete from './Components/AutoComplete'
import ErrorPage from './Components/ErrorPage'

// const Index = () => {
//   return (
    
//   )
// }

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AutoComplete/>,
        errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={appRouter} />
)


