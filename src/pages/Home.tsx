import { Container } from 'react-bootstrap';
import Slider from "../components/Slider";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export function Home() {
  return (
    <>
      <Container>
        <h1>Clothes Shop</h1>
        <Slider />
        <p className='mt-5 text-center' style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "1.50rem" }}>
          There's only <span style={{color: 'white', backgroundColor: 'black'}}>white</span> and black, the rest are shades.
        </p>
      </Container>
    </>
  );
}
