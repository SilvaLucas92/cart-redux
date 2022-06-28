import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart-actions";
import styles from './SingleItem.module.css';
import { BsHandbag } from 'react-icons/bs'
function SingleItem({ singleItem, addToCart }) {
    return(
        <>
            {!singleItem && <p> No hay pdts</p>}
            {singleItem && (
                <article className={styles.artProd}>
                        <img src={singleItem.img}/>
                        <div className={styles.artDiv}>
                            <h4>{ singleItem.name }</h4>
                            <p>$ { singleItem.price }</p>
                            <p> { singleItem.description } </p>
                            <div className={styles.divBtn}>
                                <button onClick={() => addToCart(singleItem.id)} > <BsHandbag  /></button>
                            </div>
                        </div>
                </article>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        singleItem: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);