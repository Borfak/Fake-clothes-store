import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Pants } from "./pages/Pants/Pants";
import { Hoodie } from "./pages/Hoodies/Hoodie";
import { PantsDior } from "./pages/Pants/PantsDior";
import { HoodieDior } from "./pages/Hoodies/HoodieDior";
import { Tshirts } from "./pages/T-shirts/Tshirts";
import { TshirtsDior } from "./pages/T-shirts/TshirtsDior";
import { Backpacks } from "./pages/Backpacks/Backpacks";
import { BackpacksDior } from "./pages/Backpacks/BackpacksDior";
import { PantsGucci } from "./pages/Pants/PantsGucci";
import { BackpacksGucci } from "./pages/Backpacks/BackpacksGucci";
import { HoodieGucci } from "./pages/Hoodies/HoodieGucci";
import { TshirtsGucci } from "./pages/T-shirts/TshirtsGucci";
import { BackpacksPrada } from "./pages/Backpacks/BackpacksPrada";
import { HoodiePrada } from "./pages/Hoodies/HoodiePrada";
import { PantsPrada } from "./pages/Pants/PantsPrada";
import { TshirtsPrada } from "./pages/T-shirts/TshirtsPrada";
import { Gucci } from './pages/Brands/Gucci';
import { Dior } from './pages/Brands/Dior';
import { Prada } from './pages/Brands/Prada';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />

        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/store/pants" element={<Pants />} />
            <Route path="/store/backpacks" element={<Backpacks />} />
            <Route path="/store/hoodie" element={<Hoodie />} />
            <Route path="/store/tshirts" element={<Tshirts />} />
            <Route
              path="/store/backpacks/dior-backpacks"
              element={<BackpacksDior />}
            />
            <Route
              path="/store/backpacks/gucci-backpacks"
              element={<BackpacksGucci />}
            />
            <Route
              path="/store/backpacks/prada-backpacks"
              element={<BackpacksPrada />}
            />
            <Route
              path="/store/tshirts/dior-tshirts"
              element={<TshirtsDior />}
            />
            <Route
              path="/store/tshirts/gucci-tshirts"
              element={<TshirtsGucci />}
            />
            <Route
              path="/store/tshirts/prada-tshirts"
              element={<TshirtsPrada />}
            />
            <Route path="/store/gucci" element={<Gucci />} />
            <Route path="/store/dior" element={<Dior />} />
            <Route path="/store/prada" element={<Prada />} />
            <Route path="/store/pants/dior-pants" element={<PantsDior />} />
            <Route path="/store/pants/gucci-pants" element={<PantsGucci />} />
            <Route path="/store/pants/prada-pants" element={<PantsPrada />} />
            <Route path="/store/hoodie/dior-hoodie" element={<HoodieDior />} />
            <Route
              path="/store/hoodie/gucci-hoodie"
              element={<HoodieGucci />}
            />
            <Route
              path="/store/hoodie/prada-hoodie"
              element={<HoodiePrada />}
            />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
