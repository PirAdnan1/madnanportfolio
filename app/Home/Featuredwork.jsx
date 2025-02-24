// Container
import Container from "../components/Container";

// assest
import Dashboard from "@/app/assets/dashboard.png";
import Girl from "@/app/assets/girl.png";
import Eagle from "@/app/assets/eagle.png";

// components
import FeaturedComp from "../components/FeaturedComp";

function Featuredwork() {
  return (
    <Container>
      <h4 className="text-3xl flex flex-col md:flex-row  text-gray-700 font-semibold ml-8 mt-10">Featured Works</h4>
      <div className="mx-8">
        <FeaturedComp
          image={Dashboard}
          heading={"Designing Dashboard"}
          date={"2022"}
          title={"Dashboard"}
          description={
            "Designed a crypto dashboard from scratch, implementing all functionalities, ensuring a seamless user experience with real-time data, interactive charts, and a responsive modern interface."
          }
        />
        <FeaturedComp
          image={Girl}
          heading={"Vibrant Portraits of 2020"}
          date={"2023"}
          title={"Illustration"}
          description={
            "I have designed a stylish and user-friendly website for girls' makeup, featuring beauty tips, product showcases, and an elegant, responsive design for a seamless browsing experience."
          }
        />
        <FeaturedComp
          image={Eagle}
          heading={"36 Days of Malayalam Type"}
          date={"2023"}
          title={"Typography"}
          description={
            "I have designed a website showcasing 365 days of Malay life, featuring daily cultural insights, traditions, and experiences with a visually engaging and user-friendly interface."
          }
        />
      </div>
    </Container>
  );
}

export default Featuredwork;
