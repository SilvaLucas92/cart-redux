import React, { useState } from "react"
import styles from './CartItem.module.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/cart/cart-actions';
import { adjustQtyInc } from '../../../redux/cart/cart-actions';
import { adjustQtyDec } from '../../../redux/cart/cart-actions';
import { BsTrash } from 'react-icons/bs'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Input, IconButton, Heading, Text, HStack, Flex, Image, VStack } from "@chakra-ui/react";
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
        // <article className={styles.art}>
        //     <img src={oneData.img}/>
        //     <div className={styles.divText}>
        //         <h4>{ oneData.name }</h4>
        //         <p>$ { oneData.price * oneData.qty }</p>
        //         <div className={styles.divInput}>
        //             <p>Cantidad: </p>
        //             <BsFillArrowLeftCircleFill onClick={() => oneData.qty > 0 ? adjustQtyDec(oneData.id) : null}/>
        //             <input 
        //             type='number'
        //             value={oneData.qty === 0 ? removeFromCart(oneData.id) : oneData.qty}
        //             />
        //             <BsFillArrowRightCircleFill onClick={() => adjustQtyInc(oneData.id) }/>
        //         </div>
        //         <div className={styles.divBtn}>
        //             <button onClick={() => removeFromCart(oneData.id)}><BsTrash /></button>
        //         </div>
        //     </div>
        // </article>
        <Flex
        w={{base:'100%',md: '80%'}}
        mx='auto'
        direction={{base:'column', md:'row'}}
        justify={{base:'center'}}
        p='10px'
        >
            <Image
            src={oneData.img}
            w={{base:'200px', md:'120px'}}
            mx='auto' />
            <Flex
            w={{base:'200px', md:'80%'}}
            mx={{base: 'auto', md:'10px'}}
            justify='flex-start'
            direction='column'
            my='auto'
            >
                <HStack
                // justify='space-between'
                align='center'
                w={{base:'200px', md:'120px'}}
                >
                    <Heading
                    as='h4'
                    fontSize={{base:'15px',md:'18px', xl:'20px'}}
                    m='5px'
                    >{ oneData.name }</Heading>
                    <Text
                    fontSize={{base:'13px',md:'15px', xl:'18px'}}
                    >${ oneData.price * oneData.qty }</Text>
                </HStack>
                <HStack
                // justify='space-between'
                align='center'
                w={{base:'200px', md:'120px'}}
                >
                    <Text
                    fontSize={{base:'13px',md:'15px', xl:'18px'}}
                    m='5px'>
                    Cantidad:</Text>
                    <IconButton icon={<AiOutlineMinusCircle  onClick={() => oneData.qty > 0 ? adjustQtyDec(oneData.id) : null} />} isRound='true' bg='none' />
                    <input 
                    type='number'
                    value={oneData.qty === 0 ? removeFromCart(oneData.id) : oneData.qty}
                    style={{width:'20px'}}
                    />
                    <IconButton icon={<AiOutlinePlusCircle onClick={() => adjustQtyInc(oneData.id) } />} isRound='true' bg='none'/>
                </HStack>
                <IconButton w='15px' mx={{base:'auto', md:'5px'}} isRound='true' onClick={() => removeFromCart(oneData.id)} icon={<BsTrash />}/>
            </Flex>
        </Flex>
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