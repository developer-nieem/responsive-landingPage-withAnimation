import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import About from "@/pages/About";
import AddServices from "@/pages/Admin/AddServices";
import DashBoard from "@/pages/Admin/DashBoard";
import ServicesList from "@/pages/Admin/ServicesList";
import Home from "@/pages/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

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
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element : <Navigate to="/admin/dashboard"/>
            },
            
            {
                path: "dashboard",
                element: <DashBoard/>
            },
            {
                path: 'add-services',
                element: <AddServices/>
            },
            {
                path: 'services-list',
                element: <ServicesList/>
            }

        ]
    }
])

export default route