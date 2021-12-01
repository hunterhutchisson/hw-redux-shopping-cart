import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { formatCurrency } from './utils';
import Fade from 'react-reveal/Fade';
import CartItems from './CartItems';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.prodCRD.products)
  const [quantityOfDress, setQuantityOfDress] = useState(1)
  //component did mount
  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Fade bottom cascade>
            <div className="row">
              {products.map(product=>{
                return (
                <div key={product.id} className="col-4 mb-5 product">
                  <a href="#" className="text-danger">
                    <img src={product.image} alt="" />
                    <p className="mt-3">{product.title}</p>
                  </a>
                  <div className="d-flex justify-content-around">
                    <div>{formatCurrency(product.price)}</div>
                    
                    <button onClick={()=>dispatch(addToCart(product))} className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
                )
              })}
            </div>
            </Fade>
          </div>
          <div className="col-4">
            <CartItems />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
