// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center pl-3 pt-3">
     
        <div className="flex flex-col">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/NTAlogo.png"}
              width={250}
              height={48}
              alt=""
              priority={true}
  />
          </Link>

          {/* socials */}
        </div>
      
    </header>
  );
};

export default Header;
