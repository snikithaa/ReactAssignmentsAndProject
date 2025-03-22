import './Products.css'
import { FaRegStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
function Products(props) {
  console.log(props);
  return (
    <div className='content mt-3'>
        <div className="card h-100">
          <div className="card-body p-0">
            <img src={props.ob.image} alt="" width="150px" className='mt-3 shirt'/>
            <p className='text-center fw-bold'>{props.ob.title}</p>
            <p className='text-center fw-1 d-inline ms-2'>{props.ob.category}</p>
            <p className='d-inline fs-5 price'>{props.ob.price}$</p>
            <div className="text-center mt-2">
            <button className='btn btn-warning mt-1 p-0' >{props.ob.rating.rate}<FaRegStar className='mb-1 ms-1'/></button>
            </div>
            <div className='mt-3'>
            <div className="btn btn-primary p-0 w-100 cart rounded-0 fw-bold">Add to cart<FaShoppingCart className='ms-1 cartlogo'
            /></div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default Products