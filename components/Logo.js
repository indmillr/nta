// next image
import Image from "next/image";

// next link
import Link from "next/link";


const Logo = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/ntabadge.png"}
          width={250}
          height={250}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[250px] max-h-[250px]"
        />
      </Link>
    </div>
  );
};

export default Logo;
