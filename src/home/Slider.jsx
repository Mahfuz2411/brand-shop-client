import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Slider = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img1}')`, 
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Driving Dreams, One Click</h1>
              <p className="text-base font-normal text-center text-gray-50">
              The seamless and convenient experience we provide for car enthusiasts, buyers, and sellers. With a single click, we make it possible to explore your dream car, connect with potential buyers, and make your automotive aspirations a reality. Our platform is designed to simplify the often complex process of buying and selling cars, making it as easy as the click of a button. We&apos;re here to drive your dreams forward, effortlessly and efficiently.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-outline md:btn-neutral">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-outline md:btn-neutral">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img2}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Driving Dreams, One Click</h1>
              <p className="text-base font-normal text-center text-gray-50">
              The seamless and convenient experience we provide for car enthusiasts, buyers, and sellers. With a single click, we make it possible to explore your dream car, connect with potential buyers, and make your automotive aspirations a reality. Our platform is designed to simplify the often complex process of buying and selling cars, making it as easy as the click of a button. We&apos;re here to drive your dreams forward, effortlessly and efficiently.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-outline md:btn-neutral">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-outline md:btn-neutral">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img3}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Driving Dreams, One Click</h1>
              <p className="text-base font-normal text-center text-gray-50">
              The seamless and convenient experience we provide for car enthusiasts, buyers, and sellers. With a single click, we make it possible to explore your dream car, connect with potential buyers, and make your automotive aspirations a reality. Our platform is designed to simplify the often complex process of buying and selling cars, making it as easy as the click of a button. We&apos;re here to drive your dreams forward, effortlessly and efficiently.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-outline md:btn-neutral">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-outline md:btn-neutral">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img4}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Driving Dreams, One Click</h1>
              <p className="text-base font-normal text-center text-gray-50">
              The seamless and convenient experience we provide for car enthusiasts, buyers, and sellers. With a single click, we make it possible to explore your dream car, connect with potential buyers, and make your automotive aspirations a reality. Our platform is designed to simplify the often complex process of buying and selling cars, making it as easy as the click of a button. We&apos;re here to drive your dreams forward, effortlessly and efficiently.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-outline md:btn-neutral">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-outline md:btn-neutral">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
