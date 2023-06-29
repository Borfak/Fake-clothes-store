import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
	  const navigate = useNavigate();
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
	  role="button"
          src="/imgs/diorLogo.jpg"
          alt="First slide"
	  onClick={() => {
	    navigate("/store/dior");
	  }
	  }
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          role="button"
          src="/imgs/gucciLogo.jpg"
          alt="Second slide"
          onClick={() => {
            navigate("/store/gucci");
          }}
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
	  role="button"
          src="/imgs/pradaLogo.jpg"
          alt="Third slide"
	  onClick={() => {
	    navigate("/store/prada");
	  }
	  }
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
