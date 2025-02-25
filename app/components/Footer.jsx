import { Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <>
    <div className="flex items-center justify-center gap-16 mt-16 py-16 bg-[#edf7fa]">
      <a href={"https://www.facebook.com/profile.php?id=100009605711709"}>
        <Facebook className="text-gray-700 hover:text-black cursor-pointer" />
      </a>
      <Twitter className="text-gray-700 hover:text-black cursor-pointer" />
      <Linkedin className="text-gray-700 hover:text-black cursor-pointer" />
    </div>
    </>
  );
}

export default Footer;
