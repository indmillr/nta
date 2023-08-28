// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    title: "MON",
    time1: "5:00",
    description1: "Green - Purple",
    time2: "5:45",
    description2: "White - Yellow",
    time3: "6:30",
    description3: "Red - Black",
  },
  {
    title: "TUE",
    time1: "5:00",
    description1: "White - Yellow",
    time2: "5:45",
    description2: "Green - Purple",
    time3: "6:30",
    description3: "Red - Black",
  },
  {
    title: "WED",
    time1: "5:00",
    description1: "KIDS ONLY (ages 5-8)",
    time2: "6:00",
    description2: "Red - Black",
  },
  {
    title: "THU",
    time1: "5:15",
    description1: "White - Black",
    time2: "6:15",
    description2: "Green - Black",
  },
  {
    title: "FRI",
    time1: "6:00",
    description1: "FORMS (All Ranks)",
    time2: "7:00",
    description2: "SPARRING",
  },
];
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        641: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-black/5 h-max rounded-lg px-4 pt-4 mr-4 pb-0 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-black/10 transition-all duration-300">
              {/* icons */}
              <div className="text-xl text-accent mb-4">{item.title}</div>
              {/* title & desc */}
              <div className="mb-8 ">
                <div className="mb-2 text-blue-600 font-mono">
                  {item.time1} {""}
                  <span className="max-w-[350px] ml-2 mr-0 leading-normal text-black font-sora">
                    {item.description1}
                  </span>
                </div>

                <div className="mb-2 text-blue-600 font-mono">
                  {item.time2} {""}
                  <span className="max-w-[350px] ml-2 font-sora leading-normal text-black">
                    {item.description2}
                  </span>
                </div>
                <div className="mb-2 text-blue-600 font-mono">
                  {item.time3} {""}
                  <span className="max-w-[350px] font-sora ml-2 leading-normal text-black">
                    {item.description3}
                  </span>
                </div>
              </div>
              {/* arrow */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
