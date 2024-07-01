import React, { useState } from "react";
import Product1 from "../../../assets/homepage/24into7.png";
import Product2 from "../../../assets/homepage/vo2.png";
import Testimonial from "../Testimonials/Testimonial";

function Firstproduct() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlus, setIsPlus] = useState(false);

  const [isReviewsVisible, setIsReviewsVisible] = useState(true);
  const [isReviewsPlus, setIsReviewsPlus] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsPlus(!isPlus);
  };

  const toggleReviewsVisibility = () => {
    setIsReviewsVisible(!isReviewsVisible);
    setIsReviewsPlus(!isReviewsPlus);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    console.log(`Button ${index} clicked`);
    setActiveIndex(index);
  };

  return (
    <>
      <section className="w-full mx-auto overflow-hidden ">
        <div className="mx-4 md:mx-16 lg:mx-24 grid grid-cols-1 md:grid-cols-2 my-10 md:my-24">
          <div className="flex justify-center h-3/4 md:h-full">
            <img
              src={`${activeIndex === 0 ? Product2 : Product1} `}
              alt=""
              className="w-4/5 md:w-full h-full object-cover"
            />
          </div>
          <div className="mt-[-80px] m-8 md:m-0 flex flex-col justify-center">
            <div className="card  md:ml-10 mt-6  relative">
              <div className=" relative flex items-center   md:left-[-180px]  lg:left-[-215px] xl:left-[-250px] mb-3 w-[29rem]">
                <p className=" font-brastika text-6xl md:text-[79px] lg:text-[105px] xl:text-9xl text-center">
                  <span className="md:text-white leading text-6xl  md:text-[79px]  lg:text-[105px] xl:text-9xl">
                    {activeIndex === 0 ? "Vo2" : <span> &nbsp;&nbsp;24</span>}
                  </span>{" "}
                  {activeIndex === 0 ? "Max" : "    X7"}
                </p>
              </div>

              <div className="flex gap-6 mb-14 md:mb-20 relative">
                <button
                  className={`text-3xl font-brastika font-black  border-b border-[black]  ${
                    activeIndex === 0
                      ? "text-black "
                      : "text-gray-500 border-[grey-500]"
                  }`}
                  onClick={() => handleClick(0)}
                >
                  Vo2Max
                </button>
                <button
                  className={`text-3xl font-brastika font-black  border-b border-[black] ${
                    activeIndex === 1 ? "text-black" : "text-gray-500"
                  }`}
                  onClick={() => handleClick(1)}
                >
                  24x7
                </button>
              </div>
              <div className="flex  items-center gap-16 md:gap-32 mb-4">
                <p className=" text-black text-2xl font-bold  font-brastika">
                  ₹1599
                </p>
                <div className="flex gap-4 justify-center  items-center ">
                  <h5 className="text-base flex items-center justify-center font-body">
                    4.8{" "}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.57617 0.328979L8.049 4.86187H12.8152L8.95925 7.66335L10.4321 12.1962L6.57617 9.39476L2.72027 12.1962L4.19309 7.66335L0.337185 4.86187H5.10335L6.57617 0.328979Z"
                        fill="#EFCA09"
                      />
                    </svg>
                  </h5>
                  <h5 className="text-base font-body">Reviews 7+</h5>
                </div>
              </div>

              <p className="text-base font-normal text-black mb-4 font-body">
                Lorem ipsum dolor sit amet consectetur. Netus tellus rhoncus
                tortor sapien egestas nisi suspendisse sed.
              </p>
              <div className="flex items-center mb-8 gap-4">
                <button className=" flex justify-center items-center  p-3 px-8 gap-2.5 rounded-[38px]  bg-[#43A535] text-white font-body text-base">
                  Shop Now
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4306 1.26407C10.4306 0.987929 10.2067 0.764071 9.9306 0.764071L5.4306 0.764072C5.15446 0.764071 4.9306 0.987929 4.9306 1.26407C4.9306 1.54021 5.15446 1.76407 5.4306 1.76407L9.4306 1.76407L9.4306 5.76407C9.4306 6.04021 9.65446 6.26407 9.9306 6.26407C10.2067 6.26407 10.4306 6.04021 10.4306 5.76407L10.4306 1.26407ZM1.61283 10.2889L10.2842 1.61762L9.57705 0.910518L0.905724 9.58184L1.61283 10.2889Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className=" flex justify-center items-center  p-3 px-8 gap-2.5 rounded-[38px] text-black border border-[#132B25] font-body  text-base">
                  Add To Cart
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4306 1.26407C10.4306 0.987929 10.2067 0.764071 9.9306 0.764071L5.4306 0.764072C5.15446 0.764071 4.9306 0.987929 4.9306 1.26407C4.9306 1.54021 5.15446 1.76407 5.4306 1.76407L9.4306 1.76407L9.4306 5.76407C9.4306 6.04021 9.65446 6.26407 9.9306 6.26407C10.2067 6.26407 10.4306 6.04021 10.4306 5.76407L10.4306 1.26407ZM1.61283 10.2889L10.2842 1.61762L9.57705 0.910518L0.905724 9.58184L1.61283 10.2889Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12 md:mx-24 flex flex-col ">
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-[black] pb-2 mb-8">
              <h1 className="font-brastika text-3xl">Description</h1>
              <div onClick={toggleVisibility} style={{ cursor: "pointer" }}>
                {isPlus ? (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="12.8042"
                      y1="4.20105"
                      x2="12.8042"
                      y2="20.201"
                      stroke="#023A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="4.7041"
                      y1="12.1011"
                      x2="20.7041"
                      y2="12.1011"
                      stroke="#023A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7041 12H18.7041"
                      stroke="#023A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {isVisible && (
              <p className="font-body text-base mb-6">
                Occaecati quam ut sed vel dicta ex fugit. Perferendis cum sit
                provident qui aspernatur sit et. Consequatur et soluta
                consequatur reprehenderit. Neque qui libero voluptatem rem
                architecto. Sunt veniam aut commodi. Autem est magnam occaecati
                amet voluptatem velit dolorem. Beatae et suscipit laborum iusto
                fugit sapiente. Dolorem aut molestiae ut consequatur. Dolorum ut
                explicabo voluptas. Aut ut distinctio expedita sapiente velit.
                Saepe corrupti officiis molestiae numquam atque sapiente omnis.
                Accusamus ut id omnis autem voluptas distinctio laboriosam sit.
                Iure quae sint eius molestias iusto. Necessitatibus reiciendis
                libero non odio corporis quasi.
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between border-b  border-[black] pb-2 mb-8">
              <h1 className="font-brastika text-3xl">Reviews </h1>
              <div onClick={toggleReviewsVisibility} style={{ cursor: "pointer" }}>
                {isReviewsPlus ? (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="12.8042"
                      y1="4.20105"
                      x2="12.8042"
                      y2="20.201"
                      stroke="#023A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="4.7041"
                      y1="12.1011"
                      x2="20.7041"
                      y2="12.1011"
                      stroke="#023A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7041 12H18.7041"
                      stroke="#023A3E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {  isReviewsVisible && (
              <p className="font-body text-base mb-6">
                Occaecati quam ut sed vel dicta ex fugit. Perferendis cum sit
                provident qui aspernatur sit et. Consequatur et soluta
                consequatur reprehenderit. Neque qui libero voluptatem rem
                architecto. Sunt veniam aut commodi. Autem est magnam occaecati
                amet voluptatem velit dolorem. Beatae et suscipit laborum iusto
                fugit sapiente. Dolorem aut molestiae ut consequatur. Dolorum ut
                explicabo voluptas. Aut ut distinctio expedita sapiente velit.
                Saepe corrupti officiis molestiae numquam atque sapiente omnis.
                Accusamus ut id omnis autem voluptas distinctio laboriosam sit.
                Iure quae sint eius molestias iusto. Necessitatibus reiciendis
                libero non odio corporis quasi.
              </p>
            )}
          </div>
        </div>
      </section>
      <Testimonial />
    </>
  );
}

export default Firstproduct;
