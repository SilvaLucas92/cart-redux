import React from 'react'
import styles from './Product.module.css'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/cart/cart-actions';
import { currentItem } from '../../../redux/cart/cart-actions'
import { Link } from 'react-router-dom'
import { BsHandbag } from 'react-icons/bs'
const Product = ({oneData, addToCart, currentItem}) => {
    return (
        <article className={styles.artProd}>
            <Link to={`/${oneData.id}`} onClick={() => {currentItem(oneData)}}>
                <img src={oneData.img}/>
                <div className={styles.artDiv}>
                    <h4>{ oneData.name }</h4>
                    <p>$ { oneData.price }</p>
                </div>
            </Link>
            <div className={styles.divBtn}>
                {/* <BsHandbag  /> */}
                <button onClick={() => addToCart(oneData.id)} > <BsHandbag  /></button>
            </div>
        </article>
    )
}

const mapDispathToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        currentItem: (item) => dispatch(currentItem(item))
    }
}

export default connect(null, mapDispathToProps)(Product);
