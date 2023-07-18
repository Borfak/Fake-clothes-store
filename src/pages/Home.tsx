import { Container, Nav } from 'react-bootstrap';
import Slider from "../components/Slider";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export function Home() {

  return (
    <>
      <Container>
        <h1>
          <b>NEW COLECTIONS</b>
        </h1>
        <div className='mt-5'>
          <Slider />
        </div>
        <div className="text-center">
          <TypeAnimation
            className="mt-5 mb-5 text-uppercase"
            sequence={[
              "Check out our Pants",
              2000,
              "Check out our T-Shirts",
              2000,
              "Check out our Hoodies",
              2000,
              "Check out our Backpacks",
              2000,
            ]}
            wrapper="span"
            speed={2}
            style={{
              fontSize: "3em",
              display: "inline-block",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </div>

        <div className="d-flex justify-content-md-between mt-5 flex-md-row flex-column">
          <img height={300} width="auto" src="/imgs/pantsVector.svg" alt="" />
          <div
            style={{
              maxWidth: "60ch",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            <h2>Pants</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus.
              <Nav.Link to="/store/pants" as={NavLink}>
                <span style={{ fontWeight: "bold" }}> Pants →</span>
              </Nav.Link>{" "}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between mt-5 flex-md-row flex-column">
          <div
            style={{
              maxWidth: "60ch",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            <h2>T-Shirts</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus.
              <Nav.Link to="/store/tshirts" as={NavLink}>
                <span style={{ fontWeight: "bold" }}> T-Shirts →</span>
              </Nav.Link>
            </p>
          </div>
          <img height={300} width="auto" src="/imgs/tshirtVector.svg" alt="" />
        </div>
        <div className="d-flex justify-content-md-between mt-5 flex-md-row flex-column">
          <img height={300} width="auto" src="/imgs/hoodieVector.svg" alt="" />
          <div
            style={{
              maxWidth: "60ch",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            <h2>Hoodies</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus.
              <Nav.Link to="/store/hoodie" as={NavLink}>
                <span style={{ fontWeight: "bold" }}> Hoodies →</span>
              </Nav.Link>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-md-between mt-5 flex-md-row flex-column">
          <div
            style={{
              maxWidth: "60ch",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            <h2>Backpacks</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus.
              <Nav.Link to="/store/backpacks" as={NavLink}>
                <span style={{ fontWeight: "bold" }}> Backpacks →</span>
              </Nav.Link>
            </p>
          </div>
          <img
            height={300}
            width="auto"
            src="/imgs/backpackVector.svg"
            alt=""
          />
        </div>
        <p
          className="mt-5 mb-5 text-center"
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "1.50rem",
          }}
        >
          There's only black and
          <span style={{ color: "white", backgroundColor: "black" }}>
            {" "}
            white{" "}
          </span>{" "}
          , the rest are shades.
        </p>
      </Container>
    </>
  );
}
