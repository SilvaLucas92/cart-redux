import React from 'react'
import styles from './Product.module.css'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/cart/cart-actions';
import { currentItem } from '../../../redux/cart/cart-actions'
import { Link } from 'react-router-dom'
import { BsHandbag } from 'react-icons/bs'
import { VStack, Heading, Image, Text, IconButton, Flex, PopoverTrigger, Popover, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, Portal} from "@chakra-ui/react";
const Product = ({oneData, addToCart, currentItem}) => {
    return (
        // <article className={styles.artProd}>
        //     <Link to={`/${oneData.id}`} onClick={() => {currentItem(oneData)}}>
        //         <img src={oneData.img}/>
        //         <div className={styles.artDiv}>
        //             <h4>{ oneData.name }</h4>
        //             <p>$ { oneData.price }</p>
        //         </div>
        //     </Link>
        //     <div className={styles.divBtn}>
        //         {/* <BsHandbag  /> */}
        //         <button onClick={() => addToCart(oneData.id)} > <BsHandbag  /></button>
        //     </div>
        // </article>
        <VStack my='20px'>
            <Image 
            src={oneData.img}
            w={{base:'150px', sm:'170', md:'200px', xl:'250px'}}
            />
            <Flex
            align='center'
            w={{base:'150px', sm:'170', md:'200px', xl:'250px'}}
            justify='space-between'
            >
                <Heading
                as='h4'
                fontSize={{base:'15px',md:'18px', xl:'20px'}}
                m='5px'
                >{ oneData.name }</Heading>
                <Text
                fontSize={{base:'13px',md:'15px', xl:'18px'}}
                >${ oneData.price }</Text>
            </Flex>
            <Popover>
                <PopoverTrigger>
                <IconButton 
                mx='auto' 
                w={{base:'150px', sm:'170', md:'200px', xl:'250px'}} 
                bg='black'
                icon={<BsHandbag  color='white'/>} 
                onClick={() => addToCart(oneData.id)} />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Agregaste un item al carrito</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            {/* <IconButton 
            mx='auto' 
            w={{base:'150px', sm:'170', md:'200px', xl:'250px'}} 
            bg='black'
            icon={<BsHandbag  color='white'/>} 
            onClick={() => addToCart(oneData.id)} /> */}
        </VStack>
    )
}

const mapDispathToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        currentItem: (item) => dispatch(currentItem(item))
    }
}

export default connect(null, mapDispathToProps)(Product);
