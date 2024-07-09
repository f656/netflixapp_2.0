/* eslint-disable no-unused-vars */
import React from 'react'
import {RouterProvider, createBrowserRouter}from "react-router-dom"
import Login from './Login'
import Browse from './Browse'

export default function Body() {
    const appRouter = createBrowserRouter([
       {
        path:"/",
        element:<Login/>
       },
       {
        path:"/browse",
        element:<Browse/>
       }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}
