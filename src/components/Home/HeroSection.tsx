import mackbook from "../../assets/macbook-exposed 1.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.25, delayChildren: 1 },
  },
};

const introChild = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type : "spring" } },
};


const laptop = { 
   initial : {y : 0, scale: 5},
   animate : {y: 20 , scale: 1, transition: {
    duration: 1,
    y:{
    duration: 2,
    repeat: Infinity,
    repeatType : "reverse",
    ease :"easeInOut"
    }
   }}
}

const HeroSection = () => {
  return (
    <div className="pt-32 h-screen  grid lg:grid-cols-2 items-center">
      <motion.div
        className="space-y-4 "
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={introChild}
          className="text-5xl lg:text-8xl font-bold text-nowrap"
        >
          {" "}
          <span className="text-gray">Don't worry.</span> <br />{" "}
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p variants={introChild} className="text-gray max-w-[50ch]">
          Welcome to <span className="font-bold text-black">iRepair</span> ,
          your one-stop place for all kinds of{" "}
          <span className="font-bold text-black">Macbook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChild}>
        <Button>Book a service</Button>
        </motion.div>
       
      </motion.div>
      <motion.div  variants={laptop} initial="initial"  animate="animate">
        <img src={mackbook} className="max-w-full object-contain h-full" alt="" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
