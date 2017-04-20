import React, { PropTypes } from 'react'
import Cart from '../Cart'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

import './styles.css'
import '../globalStyles.css'

const Title = ({ totalProducts }) => (
    <div className='globalContainer'>
        <div className='titleBar'>
            <div className='productsSection'>
                Products
            </div>
             <div className="checkout-button">
                <FlatButton
                    style={{
                        color: '#fff',
                        backgroundColor: "#099CEC",
                    }}
                    labelStyle={{
                        textTransform: 'none',
                        fontFamily: 'Open Sans',
                        fontWeight: 600,
                    }}
                    label="Checkout"
                    containerElement={<Link to="checkout"> Checkout </Link>}
                />
            </div>
            <Cart
                total={totalProducts}   
            />
        </div>
    </div>
)

Title.propTypes = {
    totalProducts: PropTypes.string,
}

export default Title
