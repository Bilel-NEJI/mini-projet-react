import { Link } from 'react-router-dom';
import { Container, Row, Col ,Image} from "react-bootstrap";
import style from "./style.css";
import data from "../data/products";
const Products = () => {
  return (
      <Container
        style={{ marginBottom: "150px", marginTop: "150px" }}
        onChange={e => {
          
        }}
      >
        <Row
          style={{
            width: "100%",

            listStyleType: "none"
          }}
        >
          {data &&
            data.data.map((p, index) => {
              return (
                <Col
                  xs={12}
                  lg={4}
                  sm={4}
                  style={{
                    marginBottom: 50
                  }}
                >
                 <div
                    style={{
                      backgroundColor: "#e8e8e8",
                      width: "90%"
                    }}
                  >
            <div class="u-container-layout u-similar-container u-container-layout-1">
            {/* <Col xs={6} md={4}>
      <Image src={p.img} style={{width:200,height:200}} />
    </Col> */}
              <img src={p.img}  style={{width:200,height:200}}/>
              <h5 class="u-text u-text-default u-text-1">{p.name}</h5>
              <p class="u-text u-text-default u-text-2">{p.description}</p>
              <h4 class="u-text u-text-default u-text-palette-1-base u-text-3">$ {p.prix}</h4>
              <Link to={`/products/${index}`}>Details</Link>
          </div>
          </div>
                </Col>
              );
            })}
        </Row>
      </Container>
  );
};

export default Products;
