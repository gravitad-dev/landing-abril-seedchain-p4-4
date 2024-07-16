import texts from "../../sections.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    Previous
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    Next
  </button>
);

function Noter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tiempo en milisegundos entre cada transición
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section>
      <div className="flex flex-col mb-7">
        <h1 className="mx-auto text-5xl font-bold mb-10">¿Quienes Somos?</h1>
        <p className="mx-auto text-center" style={{ maidth: "450px" }}>
          En Seedchain.net, somos pioneros en integrar IA y Salesforce para
          transformar sus operaciones comerciales. Nuestro equipo de expertos
          dedicados está comprometido a ofrecer soluciones innovadoras que
          impulsen el crecimiento y la eficiencia.
        </p>
      </div>
      <Slider {...settings}>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1718901912/qypolzlayjf5jxaus5gc.png"
            alt="img1"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1718901911/y1qp1qtoyc3q9thsrrpj.png"
            alt="img2"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1718901911/zot3496ic7womyhbrihy.png"
            alt="img3"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
      </Slider>
    </section>
  );
}
export default Noter;
