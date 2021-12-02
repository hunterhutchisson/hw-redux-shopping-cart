
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, changeQuantity, deleteFromSaved, moveToCart, moveToSaved } from '../actions/cartActions';
import { formatCurrency } from './utils';
import Fade from 'react-reveal/Fade';


const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartCRD.cartItems)
  const numberOfItems = useSelector(state => state.cartCRD.numberOfItems)
  const totalCost = useSelector(state => state.cartCRD.totalCost)
  const savedItems = useSelector(state => state.cartCRD.savedItems)
  const [quantity, setQuantity] = useState("1")
  const [productStuff, setProductStuff] = useState({})
  return (
    <>
      <div>
        {
        cartItems.length === 0 
        ? 
        <div>Cart is empty</div>
        :
        <div>
          You have <em>{numberOfItems}</em> item(s) in the cart
          <br/>
          total cost: {formatCurrency(totalCost)}
        </div>
      }
      </div>
      <Fade right cascade>
        <div className="row cart-items">
          {cartItems.map(item=>{
            return <div key={item.id} className="col-12 d-flex flex-column">
              <div className="d-flex">
                <img src={item.image} />
                <div>{item.title}</div>
              </div>
              <div>
                {formatCurrency(item.price)} X {item.quantity} = {formatCurrency(item.price*item.quantity)}
                <select defaultValue={quantity} onChange={e=>setQuantity(parseInt(e.target.value))}>
                  <option value="1" >1</option>
                  <option value="2" >2</option>
                  <option value="3" >3</option>
                </select>
                <button onClick={()=>{dispatch(changeQuantity(item, quantity)); setQuantity(1);}} className="btn btn-warning">Change</button>
                <button onClick={()=>dispatch(moveToSaved(item))} className="btn btn-primary">move to saved</button>
                <button onClick={()=>dispatch(deleteFromCart(item))} className="btn btn-danger">remove</button>
              </div>
            </div>
          })}
        </div>
      </Fade>
      <div>
        {
        savedItems.length === 0 
        ? 
        <div>Saved is empty</div>
        :
        <div>
          You have <em>{savedItems.length}</em> item(s) in the saved
        </div>
      }
      </div>
      <Fade right cascade>
        <div className="row cart-items">
          {savedItems.map(item=>{
            return <div key={item.id} className="col-12 d-flex flex-column">
              <div className="d-flex">
                <img src={item.image} />
                <div>{item.title}</div>
              </div>
              <div>
                {formatCurrency(item.price)}
                <button onClick={()=>dispatch(moveToCart(item))} className="btn btn-primary">move to cart</button>
                <button onClick={()=>dispatch(deleteFromSaved(item))} className="btn btn-danger">remove</button>
              </div>
            </div>
          })}
        </div>
      </Fade>
    </>
  )
}

export default CartItems
