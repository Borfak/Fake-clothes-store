import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Hoodie() {
  const filteredItems = storeItems.filter((item) => item.type === "hoodie");

  return (
    <>
      <h1>Hoodies</h1>

      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
