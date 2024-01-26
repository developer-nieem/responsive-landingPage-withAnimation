
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const btn = "bg-slate-600 text-white p-2 rounded-md hover:bg-slate-900 truncate ";
    
     
    return (
        <div className="col-span-2 bg-light-gray h-[100vh] p-4">
            
            <div className="flex flex-col gap-4">
                <NavLink className={ ({isActive}) => cn(` ${btn} flex gap-2` ,{"bg-slate-900" : isActive}) } to='/'> Back To Home </NavLink>
                <NavLink className={ ({isActive}) => cn(` ${btn} flex gap-2` ,{"bg-slate-900" : isActive}) } to='/admin/dashboard'> <LayoutDashboard/>  Dashboard</NavLink>
                <NavLink className={ ({isActive}) => cn(` ${btn} flex gap-2` ,{"bg-slate-900" : isActive}) } to='/admin/add-services'>add-services</NavLink>
                <NavLink className={ ({isActive}) => cn(` ${btn} flex gap-2` ,{"bg-slate-900" : isActive}) } to='/admin/services-list'>Services List</NavLink>
            </div>
        </div>
    );
};

export default SideBar;