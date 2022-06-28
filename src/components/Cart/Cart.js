import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'
import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';

function Cart({ cart }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let finalTotal = 0;
        cart.forEach(pdt => {
            return (
                finalTotal += pdt.price * pdt.qty
                )
        });
        setTotal(finalTotal);
    }, [total, cart])
    return (
        <>
            {total === 0 && <div className={ styles.emptyCart }><h2>El carrito de compras esta vacio</h2></div>}
            {total > 0 && (
                <>
                    <section className={styles.sectionCart}>
                        {cart.map(oneData => {
                            return (
                            <CartItem key={oneData.id} oneData={oneData}/>
                            )
                        })}
                        <div className={styles.divTotal}>
                            <h3>Total: </h3>
                            <span>$ {total}</span>
                        </div>
                    </section>
                </>    
            )}
        </> 
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);