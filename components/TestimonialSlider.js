// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    title: "Chon Ji",
    belt: "White",
    moves: "19",
    foot: "Left",
    meaning: "Heaven and Earth.",
  },
  {
    image: "/t-avt-1.png",
    title: "Dan-Gun",
    belt: "Yellow",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Do-San",
    belt: "High Yellow",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Won-Hyo",
    belt: "Green",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Yul-Gok",
    belt: "High Green",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Joong-Gun",
    belt: "Blue",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Toi-Gye",
    belt: "High Blue",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "(Review)",
    belt: "Purple",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Hwa-Rang",
    belt: "Red I/II",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Choong-Moo",
    belt: "Red III/IV",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Kwang-Gae",
    belt: "Brown",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
    title: "Po Eun",
    belt: "High Brown",
    moves: "19",
    foot: "Left",
    meaning:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.png",
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
      className="h-[400px]"
    >
      {testimonialData.map((pattern, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={pattern.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* position */}
                  <div className="uppercase font-bold tracking-widest">{pattern.belt}</div>
                  <div className="flex flex-col text-left">
                    <div>
                      <span className="text-[12px] uppercase font-light tracking-widest">
                        MOVES:{" "}
                      </span>{" "}
                      {pattern.moves}  <span className="text-[12px] ml-3 uppercase font-light tracking-widest">
                        foot:{" "}
                      </span>{" "}
                      {pattern.foot}
                    </div>
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center items-center before:w-[1px] xl:before:bg-black/50 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-2 lg:mb-4 mt-0 lg:mt-0 text-blue-600 md:text-2xl font-bold lg:font-normal lg:text-3xl uppercase tracking-widest">
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
