import styles from './Navbar.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';
import {
    chakra,
    Flex,
    Stack,
    HStack,
    Heading,
    IconButton
    } from "@chakra-ui/react";

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
        <Stack
        as='header'
        w='100%'
        left='0'
        right='0'
        bg='#ffffff'
        borderBottomWidth={1}
        boxShadow='xl'
        >
            <Flex >
                <HStack
                w={{base: '90%'}}
                mx='auto'
                justify='space-between'
                align='center'
                p={5}>
                    <Heading 
                    fontWeight="bold"
                    color="#2b2c34"
                    cursor='pointer'
                    >
                        <Link to='/'> Cart Redux </Link>
                    </Heading>
                    <Flex
                    as='nav'
                    justify='center'
                    align='center'
                    >
                        <chakra.span pos="relative" display="inline-block">
                            <Link to='/cart'><IconButton icon={<BsFillCartFill />} isRound='true'/></Link>
                            <chakra.span
                            pos="absolute"
                            top="-1px"
                            right="-1px"
                            px={2}
                            py={1}
                            fontSize="xs"
                            fontWeight="bold"
                            lineHeight="none"
                            color="red.100"
                            transform="translate(50%,-50%)"
                            bg="red.600"
                            rounded="full"
                            display={cartCount === 0? 'none' : 'block' }
                            >
                            {cartCount > 0? cartCount : null}
                            </chakra.span>
                        </chakra.span>
                    </Flex>  
                </HStack>
            </Flex>
        </Stack>
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart
    }
}


export default connect(mapStateToProps)(Navbar);