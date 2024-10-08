import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import { HomePage } from '../Pages/home/HomePage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
        ]
    }
])