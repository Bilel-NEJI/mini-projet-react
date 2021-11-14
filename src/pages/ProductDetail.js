import { useParams ,useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { Container, Row, Col ,Image,Button} from "react-bootstrap";
import {reactLocalStorage} from 'reactjs-localstorage';
import data from "../data/products";
const ProductDetail = () => {
  const params = useParams();
  const [count, setCount] = useState(0);
  const history = useNavigate();
  console.log(params.productId);

  return (
    <Container
    style={{ marginBottom: "150px", marginTop: "150px" }}
    onChange={e => {
      
    }}
  >
    <div class="container">
   <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2">
                                <img class="img-fluid" src={data.data[params.productId].img}/></div>
                                <div class="col">
                                    <div class="row text-muted">{data.data[params.productId].name}</div>
                                    <div class="row">{data.data[params.productId].description}</div>
                                    <div class="row">Cotton T-shirt</div>
                                    <div class="row">Cotton T-shirt</div>
                                    <div class="row">Cotton T-shirt</div>
                                    <div class="row">Cotton T-shirt</div>
                                    <div class="row">Cotton T-shirt</div>
                                </div>
                                <div class="col">
                                    <a href="#" onClick={() => {if(count>1) setCount(count - 1)}}>-</a>
                                    <a href="#" class="border">{count}</a>
                                    <a href="#" onClick={() =>{
                                         setCount(count + 1)} }>+</a>
                                </div>
                                <div class="col">&euro; 44.00
                                    <span class="close">&#10005;</span>
                                    <Button variant="success" onClick={()=>{
                                        reactLocalStorage.setObject('var', {'test': 'test'});
history('/Shopping')
                                    }}>Add</Button>
                                </div>
                            </div>
                        </div>
  </div>
  </Container>
  );
};

export default ProductDetail;
