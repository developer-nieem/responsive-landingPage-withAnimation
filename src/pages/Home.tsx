import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import Container from "@/components/shared/Container";

const Home = () => {
    return (
        <div className="overflow-hidden">
        <Container>
           <HeroSection/>
           <ServicesSection/>
        </Container>
        </div>
      
        
    );
};

export default Home;