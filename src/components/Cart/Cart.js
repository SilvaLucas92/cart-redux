import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'
import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';
import { Box, Divider, Heading, Text, HStack } from "@chakra-ui/react";
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
        // <>
        //     {total === 0 && <div className={ styles.emptyCart }><h2>El carrito de compras esta vacio</h2></div>}
        //     {total > 0 && (
        //         <>
        //             <section className={styles.sectionCart}>

        //                 <div className={styles.divTotal}>
        //                     <h3>Total: </h3>
        //                     <span>$ {total}</span>
        //                 </div>
        //             </section>
        //         </>    
        //     )}
        // </> 
        if(total === 0) {
            return(
                <Heading
                    m={200}
                    mx='auto'
                    textAlign='center'>
                        No hay Items en el Carrito
                </Heading>
            )
        }
        if(total > 0) {
            return(
                <Box
                w={{base:'80%',md: '80%'}}
                mx='auto'
                my='50px'
                >
                    {cart.map(oneData => {
                        return (
                        <CartItem key={oneData.id} oneData={oneData}/>
                        )
                    })}
                    <Divider m='10px' /> 
                    <HStack
                    justifyContent='space-between'
                    mx='auto'
                    w={{base:'200px',md: '80%'}}
                    >
                        <Heading
                        as='h4'>
                            Total:  
                        </Heading>
                        <Text>
                            ${total}
                        </Text>
                    </HStack>   
                </Box>
                
            )
        }
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);