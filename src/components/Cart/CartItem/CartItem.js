import React, { useState } from "react"
import styles from './CartItem.module.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/cart/cart-actions';
import { adjustQtyInc } from '../../../redux/cart/cart-actions';
import { adjustQtyDec } from '../../../redux/cart/cart-actions';
import { BsTrash, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
function CartItem({oneData, removeFromCart, adjustQtyInc, adjustQtyDec}) {

    const [cant, setCant] = useState(oneData.qty);
    // const cantHandler = (e) => {
    //     if(e.target.value > 0) {
    //         setCant(e.target.value)
    //         adjustQty(oneData.id, e.target.value)
    //     }else {
    //         removeFromCart(oneData.id)
    //     }
    // }

    return (
        <article className={styles.art}>
            <img src={oneData.img}/>
            <div className={styles.divText}>
                <h4>{ oneData.name }</h4>
                <p>$ { oneData.price * oneData.qty }</p>
                <div className={styles.divInput}>
                    <p>Cantidad: </p>
                    <BsFillArrowLeftCircleFill onClick={() => oneData.qty > 0 ? adjustQtyDec(oneData.id) : null}/>
                    <input 
                    type='number'
                    value={oneData.qty === 0 ? removeFromCart(oneData.id) : oneData.qty}
                    />
                    <BsFillArrowRightCircleFill onClick={() => adjustQtyInc(oneData.id) }/>
                </div>
                <div className={styles.divBtn}>
                    <button onClick={() => removeFromCart(oneData.id)}><BsTrash /></button>
                </div>
            </div>
        </article>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQtyInc: (id) => dispatch(adjustQtyInc(id)),
        adjustQtyDec: (id) => dispatch(adjustQtyDec(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);