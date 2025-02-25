"use client";
import Image from "next/image";
import MyImage from "@/app/assets/Khan.jpg";

// container
import Container from "../components/Container";

function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Muhammad Adnan-CV.pdf"; // Rename file on download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#fff2e9] pb-7">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-16 mx-4 lg:mx-16">
          <div className="order-2 md:order-1">
            <h1 className="max-w-[506px] font-bold lg:text-[44px] md:text-[32px] text-2xl lg:leading-[3rem]">
              {"Hi, I am Pir Adnan, Creative Technologist"}
            </h1>
            <p className="max-w-[497px] mt-5">
              {
                "I am a passionate frontend developer with expertise in building responsive, user-friendly web applications using modern technologies like Next.js, React, and Tailwind CSS, creating seamless and engaging digital experiences."
              }
            </p>
            <button
              className="bg-[#ff6464] text-xl text-white rounded-xl p-3 mt-5 btn"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
          <Image
            src={MyImage}
            alt="Its Pir Adnan"
            className="w-[300px] h-[300px] rounded-full order-1 md:order-2"
          />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
