// container
import Container from "../components/Container";

function Post() {
  return (
    <Container>
      <div className="flex flex-col mt-14 bg-[#edf7fa] py-6 px-4">
        <div className="flex flex-col md:flex-row items-start justify-center gap-20">
          <div className="bg-white p-4 h-[350px] lg:h-[300px]">
            <h1 className="md:text-3xl text-xl font-bold max-w-[374px]">
              Making a design system from scratch
            </h1>
            <p className="mt-3">23 March 2022 | Desin, Pattern</p>
            <p className="max-w-[368px] mt-2">
              I have designed a website from scratch, implementing all
              functionalities, ensuring a seamless user experience with
              responsive design, interactive features, and optimized performance
              using modern web technologies.
            </p>
          </div>
          <div className="bg-white p-4 h-[350px] lg:h-[300px]">
            <h1 className="md:text-3xl text-xl font-bold max-w-[374px]">
              Creating pixel perfect icons in Figma
            </h1>
            <p className="mt-3">15 June 2022 | Figma, Icon design</p>
            <p className="max-w-[368px] mt-2">
              I have designed a pixel-perfect website in Figma, implementing all
              functionalities, ensuring a seamless user experience with
              responsive design, interactive features, and optimized performance
              using modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Post;
