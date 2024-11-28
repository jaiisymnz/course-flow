import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Feature from "@/components/feature";
import Instructor from "@/components/instructor";
import Review from "@/components/review";
import Checkout from "@/components/checkout-course";
import Footer from "@/components/footer";
 export default function Homepage (){
    return (
        <>
        <Navbar />
        <HeroSection />
        <Feature />
        <Instructor />
        <Review />
        <Checkout />
        <Footer />
        </>
    )
}
