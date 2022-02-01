import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
// import Search from '../Search';
import Nuv from '../mainPage/Nuv'
import Header from '../mainPage/Header'
import Footer from '../mainPage/Footer';
import UnderFooter from '../mainPage/UnderFooter'
import underLogo from '../../data/imges/underLogo.png'
import logo from '../../data/imges/logo.png'
import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Extras from '../../data/imges/foodCategories/Extras.png'
import fish from '../../data/imges/foodCategories/fish.png'
import salads from '../../data/imges/foodCategories/salads.png'
import shabat from '../../data/imges/foodCategories/shabat.png'
import desserts from '../../data/imges/foodCategories/desserts.png'
import mainCourses from '../../data/imges/foodCategories/mainCourses.png'
import products_ from '../../data/imges/foodCategories/products.png'
import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
import arrow_left_white from '../../data/imges/arrow-left-white.png'
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
import $ from 'jquery'
export function ShoppingCart(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    const { t, i18n } = useTranslation();
    const { products } = props;
    if (!products || !products.length) {

        props.getAllProducts()

    }
    function getProductById(id) {
        let arrL
        for (let i = 0; i < products.length; i++) {
            if (arrL[i]._id == id)
                return arrL[i]
        }
    }
    debugger
    const productsInCart = window.localStorage.getItem("cart");
    console.log(products);
    useEffect(() => {
        if ($) { }
    }, [$])
    return (
        <>
            {/* <Search details={products} /> */}
            <div className="pageNuv">
                {isTablet && (
                    <Hamborger />

                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />
                )}
            </div>

            <div className="pageHeader">
                <label > {i18.t('ShoppingCart')}</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className='location pt-3 swithSide px-5 ' >
                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='goldColor d-inline'> / {i18.t('ShoppingCart')} </div>
            </div>
            <div className="page_content justify-content-center pt-5" style={{ width: '80%', margin: 'auto' }}>

                <h2 className="swithSide mb-4 font-weight-bold mt-5 pt-5 ">{i18.t('ShoppingCart')}</h2>
                <div className="row justify-content-between swithDir">
                    <div className=" bg-grey col-8  px-5 pb-3">
                        <div className="row justify-content-around text-white align-items-center py-3">

                            <div className="col-2 text-black mb-0 h6">{i18.t('ProductName')}</div>|
                            <div className="col-2 text-black mb-0 h6">{i18.t('Amount')}</div>|
                            <div className="col-2 text-black mb-0 h6">{i18.t('price')}</div>|
                            <div className=" sumColumn col-3 text-black text-end pr-5 mb-0 h6">{i18.t('Total')}</div>
                        </div>

                        {productsInCart.map(it =>

                            <div className="productItem mb-2 row justify-content-between align-items-end    border-bottom border-dark py-2 ">
                                <div className='col-3 productName font-weight-bold  '> {it.Id}

                                    <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                        <option selected> 1 יחי'</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-2 amountToBuy goldColor d-flex align-items-end'>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>{it.Amount}</div>-</div>
                                <div className='col-2 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>

                                <div className='sumColumnVal col-2 endprice h6 mb-0 font-weight-bold pr-5 ' >46.70 &#8362; </div>
                                <i class="fas fa-trash-alt col-1"></i>


                            </div>


                        )}

                    </div>

                    <div className=" bg-grey col-3 ml-5 p-0">
                        <label className="bg-black text-white w-100 pt-1 swithSide px-3" >{i18.t('OrderSummary')}</label>
                        <div className="px-4">
                            <div className="row ">

                                <div className="col-10 swithSide">{i18.t('Items')}</div>
                                <div className="col-2 ">12</div>

                            </div>
                            <br />
                            <br />
                            <div className="row border-bottom border-dark pb-3">

                                <div className="col-8 swithSide">{i18.t('InterimTotal')}</div>
                                <div className="col-4 ">258 &#8362;</div>

                            </div>
                            <div className="row pt-2 font-weight-bold ">

                                <div className="col-7 swithSide">{i18.t('Total')}</div>
                                <div className="col-5 ">178.8 &#8362;</div>

                            </div>
                            <button className="mt-5 goldButton mb-5" onClick={() => props.history.push('/Checkout')}> {i18.t('toCheckout')} <img src={arrow_left_white} style={{
                                paddingRight: '5px',
                                width: '25px'
                            }} /></button>
                            <div className="col swithSide h6 px-2">

                                <div>{i18.t('scoop')}</div>
                                <div>{i18.t('OurAddress')}:</div>
                                <div> {i18.t('OpeningHours')}:</div>


                            </div>

                        </div>

                    </div>




                </div>
            </div>


            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>
        </>

    );
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
    };
}

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(actions.getAllProducts()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);