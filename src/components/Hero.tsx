import banner from "@/images/banner.png";
import Image from "next/image";
function Hero() {
  return (
    <div className="hero-container">
      <Image src={banner} alt="banner image" className="banner-image" />
      <div className="hero-overlay">
        <h2 className="hero-name">Collyn Godlewski</h2>
        <p className="hero-details">Frontend Web Developer</p>
      </div>
    </div>
  );
}

export default Hero;
