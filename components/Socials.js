// links
import Link from "next/link";

// icons
import {
  RiFacebookCircleLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex w-full items-center justify-end text-4xl text-black">

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookCircleLine />
      </Link>

    </div>
  );
};

export default Socials;
