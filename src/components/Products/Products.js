import styles from './Products.module.css'
import  Product  from './Product/Product';
import { connect } from 'react-redux';
import { Box } from "@chakra-ui/react";
function Products({products}) {
    return (
        <Box
        as='section'
        w={{base:'100%',md: '90%'}}
        mx='auto'
        spacing={{
        base: 5,
        }}
        display={{
        base: "grid",
        }}
        gridTemplateColumns={{
        base:"repeat(2,1fr)",
        md: "repeat(3,1fr)"
        }}
        gridColumnGap={{
        base: 2, md:5
        }}
        gridRowGap={{
        base: 2, md:5
        }}
        >
            {products.map(oneData => {
                return (
                    <Product key={oneData.id} oneData={oneData}/>
                    )
                    })}
        </Box>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products)
