import { Link } from "react-router-dom";
import Slider from "react-slick";

export function CardProject({ numberProject }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full h-auto bg-zinc-950 border-1 border-zinc-600 p-4 rounded-lg shadow-lg">
      <div className="relative">
        {numberProject.siteUrl === "undefined" ? (
          <div className="inset-0 flex items-center justify-center p-10 rounded-lg">
            <div className="w-40 h-40 border-t-4 border-purple-600 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <Slider {...settings} className="custom-slider">
            {numberProject.imageUrls.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full relative"
              >
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className="flex flex-col items-center gap-5 w-full mx-auto mt-10">
        <div>
          {numberProject.siteUrl === "undefined" ? (
            <>
              <p className="text-center bg-red-600 px-10 py-2">
                SITE EM DESENVOLVIMENTO
              </p>
              <p className="text-justify m-auto mt-2 text-gray-300">
                {numberProject.description}
              </p>
            </>
          ) : (
            <p className="text-justify m-auto mt-2 text-gray-300">
              {numberProject.description}
            </p>
          )}
        </div>
        <Link to={numberProject.siteUrl} target="_blank">
          <div className="mx-auto mt-2 py-1 px-10 rounded-md text-white bg-purple-600">
            Visitar o site
          </div>
        </Link>
      </div>
    </div>
  );
}
