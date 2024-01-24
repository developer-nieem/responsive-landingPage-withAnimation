import { ReactNode } from "react";


type TChildren = {
    children :ReactNode
}

const Container = ({children } : TChildren) => {
    return (
        <div className="w-full max-w-[1230px] mx-auto px-[20px]">
            {children}
        </div>
    );
};

export default Container;