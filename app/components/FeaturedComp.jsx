import Image from "next/image";

function FeaturedComp({ image, heading, date, title, description }) {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 py-4">
      <Image src={image} width={246} height={180} className="w-[246px] h-[180px]"/>
      <div>
        <h1 className="text-2xl font-bold">{heading}</h1>
        <p className="mt-7"><span className="text-white bg-black rounded-xl text-sm max-w-[42px] text-center px-2">{date }</span>&nbsp;&nbsp;{title}</p>
        <p className="max-w-[594px] mt-7">{description}</p>
      </div>
    </div>
    <hr />
    </>
  );
}

export default FeaturedComp;
