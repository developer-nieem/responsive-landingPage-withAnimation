import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const route =  createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            }

        ]
    }
])

export default route