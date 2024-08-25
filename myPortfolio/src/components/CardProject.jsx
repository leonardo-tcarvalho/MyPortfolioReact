import { Link } from "react-router-dom";
import Slider from "react-slick";

export function CardProject({ numberProject }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove as setas laterais
  };

  return (
    <div className="w-full h-auto bg-zinc-950 border-1 border-zinc-600 p-4 rounded-lg shadow-lg">
      <div className="relative">
        <Slider {...settings} className="custom-slider">
          {numberProject.imageUrls.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full relative"
            >
              {index === 3 ? (
                // Mostra o carregador se for a quarta imagem
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
              ) : (
                // Mostra a imagem normalmente para outras posições
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col items-center gap-5 w-full mx-auto mt-20">
        <p className="text-justify m-auto mt-2 text-gray-300">
          {numberProject.description}
        </p>
        <Link to={numberProject.siteUrl} target="_blank">
          <div className="mx-auto mt-2 py-1 px-10 rounded-md text-white bg-purple-600">
            Visitar o site
          </div>
        </Link>
      </div>
    </div>
  );
}
