// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-10 w-full flex xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex py-3">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/NTAlogo.png"}
              width={500}
              height={70}
              alt=""
              priority={true}
  />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
