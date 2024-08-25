import { Link } from "react-router-dom";
import Slider from "react-slick";

export function CardProject({ numberProject }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Adicione esta linha para remover as setas laterais
  };

  return (
    <div className="w-full h-auto bg-zinc-950 border-1 border-zinc-600 p-4 rounded-lg shadow-lg">
      <div className="relative">
        <Slider {...settings} className="custom-slider">
          {numberProject.imageUrls.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full"
            >
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col items-center gap-5 w-full mx-auto mt-20">
        <p className="text-justify m-auto mt-2 text-gray-300">
          {numberProject.description}
        </p>
        <Link to={numberProject.siteUrl} target="_blank">
          <div className="mx-a mt-2 py-1 px-10 rounded-md text-white bg-purple-600">
            Visitar o site
          </div>
        </Link>
      </div>
    </div>
  );
}
