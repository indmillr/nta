// testimonial data
const testimonialData = [
  {
    image: "/white.png",
    title: "Chon Ji",
    belt: "White",
    moves: "19",
    foot: "Left",
    meaning: "Heaven and Earth.",
  },
  {
    image: "/yellow.png",
    title: "Dan-Gun",
    belt: "Yellow",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/hiyellow.png",
    title: "Do-San",
    belt: "High Yellow",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/green.png",
    title: "Won-Hyo",
    belt: "Green",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/higreen.png",
    title: "Yul-Gok",
    belt: "High Green",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/blue.png",
    title: "Joong-Gun",
    belt: "Blue",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/hiblue.png",
    title: "Toi-Gye",
    belt: "High Blue",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/purple.png",
    title: "(Review)",
    belt: "Purple",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/red.png",
    title: "Hwa-Rang",
    belt: "Red 1 & 2",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/hired.png",
    title: "Choong-Moo",
    belt: "Red 3 & 4",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/brown.png",
    title: "Kwang-Gae",
    belt: "Brown",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/hibrown.png",
    title: "Po Eun",
    belt: "High Brown",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/black.png",
    title: "Gae-Baek",
    belt: "Black",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// required modules
import { Navigation, Pagination } from "swiper";

// icons
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[500px]"
    >
      {testimonialData.map((pattern, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 mt-3">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 flex mx-auto justify-center items-center">
                    <Image
                      src={pattern.image}
                      width={50}
                      height={50}
                      alt=""
                      className='rounded-full border-2 border-solid border-black'
                    />
                  
                  {/* position */}
                    <span className="ml-2 text-xl uppercase font-bold tracking-widest">{pattern.belt} Belt</span>
                    </div>
                  <div className="flex flex-col justify-center mb-5 font-bold">
                    <div>
                      <span className="text-[12px] uppercase font-normal tracking-widest">
                        MOVES:{" "}
                      </span>{" "}
                      {pattern.moves}  <span className="text-[12px] ml-3 uppercase font-normal tracking-widest">
                        return foot:{" "}
                      </span>{" "}
                      {pattern.foot}
                    </div>
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col items-center mt-4 before:w-[1px] lg:before:bg-black/50 lg:before:absolute lg:before:left-0 lg:before:h-[200px] relative lg:pl-20">
                {/* quote icon */}
                <div className="mb-2 lg:mb-4 mt-0 lg:mt-0 text-blue-600 text-2xl md:text-2xl font-bold lg:font-normal lg:text-3xl uppercase tracking-widest">
                  {pattern.title}
                </div>
                {/* message */}
                <div className="text-left lg:text-justify mb-8">
                  {pattern.meaning}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
