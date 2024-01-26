import useGrowDiv from "@/hooks/useGrowDiv";
import {motion, } from "framer-motion";


const ServicesSection = () => {

const {style , componentRef} = useGrowDiv()

    return (
        <div>
           
           <div className="text-center space-y-4">
            <h1 className="text-6xl font-semibold"> <span className="text-gray">Services</span> that we provide.</h1>
            <p className="max-w-[70ch] mx-auto">We provide various computer repair services and solutions for our new and regular customers. Feel free to find out more below.</p>
           </div>

           <div className="grid grid-cols-12 gap-4">
            <motion.div style={{scale: style.scaleValues, opacity:style.opacityValues}} ref={componentRef} className="bg-red-500 h-[415px] col-span-12"></motion.div>
            <motion.div style={{scale: style.scaleValues, opacity:style.opacityValues}} ref={componentRef}  className="bg-red-500 h-[415px] col-span-6 lg:col-span-5"></motion.div>
            <div className="bg-red-500 h-[415px] col-span-6 lg:col-span-7" ></div>
            <div className="bg-red-500 h-[415px] col-span-12 md:col-span-6 lg:col-span-4"></div>
            <div className="bg-red-500 h-[415px] col-span-12 md:col-span-6 lg:col-span-4"></div>
            <div className="bg-red-500 h-[415px] col-span-12  lg:col-span-4"></div>
            
           </div>
        </div>
    );
};

export default ServicesSection;