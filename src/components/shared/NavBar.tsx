import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const NavBar = () => {
    return (
        <header>
            <nav className="w-full max-w-[1220px] px-[20px] mx-auto flex justify-between items-center h-20">
                <div>
                    <h2 className="text-3xl">IRepair</h2>
                </div>
                <div className="space-x-4">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>about</NavLink>
                    <Button>
                    <NavLink to='/login'>Login</NavLink>

                    </Button>
                    
                </div>
            </nav>
        </header>
    );
};

export default NavBar;