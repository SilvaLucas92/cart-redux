import styles from './Navbar.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

function Navbar({cart}) {
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach(pdt => {
                return count += pdt.qty
        });
        setCartCount(count)
    }, [cart, cartCount]);

    return (
        <header className={styles.header}>
            <div className={styles.divHeader}>
                <h1>Shopping Cart</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> <AiFillHome color= 'white' /> </Link>
                        </li>
                        <li>
                            <Link to='/cart'><BsFillCartFill color= 'white'/></Link>
                        </li>
                        <li>
                            {cartCount > 0? cartCount : null}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart
    }
}


export default connect(mapStateToProps)(Navbar);