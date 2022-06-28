import styles from './Products.module.css'
import  Product  from './Product/Product';
import { connect } from 'react-redux';

function Products({products}) {
    return (
        <section className={styles.sectionProducts}>
            {products.map(oneData => {
                return (
                <Product key={oneData.id} oneData={oneData}/>
                )
            })}
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products)
