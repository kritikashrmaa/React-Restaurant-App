import React from 'react'
import { ListGroupItem } from 'reactstrap'
import ProductImg from '../../../assets/images/product_01.1.jpg' 
import '../../../styles/cart-item.css'

import { useDispatch } from 'react-redux'
import {cartActions}  from '../../../store/shopping-cart/cartSlice'
const Cartitem = ({item}) => {

  const {id,title,price,image01,quantity,totalPrice}=item;

  const dispatch=useDispatch();

  const incrementItem=()=>{
    dispatch(cartActions.addItem({
        id,
        title,
        price,
        image01,
    }))
  }

  const decrementItem=()=>{
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem=()=>{
    dispatch(cartActions.deleteItem(id));
  }


  return (
    <ListGroupItem className='border-0 cart__item'>
          <div className="cart__item-info d-flex gap-2">
             <img src={ProductImg} alt="product-img"/>

             <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <h6 className='cart__product-title'>{title}</h6>
                    <p className='d-flex align-items-center gap-5 cart__product-price'>
                       {quantity}x 
                      <span>{totalPrice}</span>
                    </p>
                    <div className='d-flex gap-3 align-items-center justify-content-between inc__dec-btn'>
                        <span className='inc__btn' onClick={incrementItem}>
                          <i class="ri-add-line"></i>
                        </span>
                        <span className='quantity'>{quantity}</span>
                        <span className='dec__btn' onClick={decrementItem}>
                          <i class='ri-subtract-line'></i>
                        </span>
                       
                    </div>
                </div>

                <span className='delete__btn' onClick={deleteItem}>
                  <i class="ri-close-line"></i> 
                </span>
             </div>
          </div>
    </ListGroupItem>
  )
}

export default Cartitem
