import React, { useEffect, useState } from 'react';

import Store from '../../redux/store'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nuv from './Nuv';
import Section from './Section';
import Header from '../interface-user/Header';
import Footer from './Footer';
import UnderFooter from './UnderFooter'
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
// import Search from '../Search';
import initialDetails from '../../data/initialDetails';
import background_image from '../../data/imges/backgroundImg.jpg'
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap";
import logo from '../../data/imges/logo.png'
import underLogo from '../../data/imges/underLogo.png'
import galeryImag from '../../data/imges/galeryImag.png'
// import img1 from '../data/imges/img1.png'
// import img1_ from '../data/imges/img1_.png'
import img1 from '../../data/imges/imgG.png'


import img3 from '../../data/imges/img3.png'


import Rectangle from '../../data/imges/Rectangle.jpg'
import blog1 from '../../data/imges/blog1.png'
import blog2 from '../../data/imges/blog2.png'
import blog3 from '../../data/imges/blog3.png'
import foodExample from '../../data/imges/foodExample.png'
import SearchResults from '../interface-user/SearchResults'
import $ from 'jquery'
import { Redirect } from 'react-router';
import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18';
import useMediaQuery from "../../hooks/useMediaQuery";
// import searchIcon from '../data/imges/searchIcon.svg'
import { ReactComponent as YourSvg } from '../../data/imges/searchIcon.svg';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"


export function TopPageDesktop(props) {
    const { t, i18n } = useTranslation();
    const { language } = props
    const [cart, setCart] = useLocalStorage("cart", []);
    const [numItems, setNumItems] = useLocalStorage("numItems", 0);
    const [total, setTotal] = useLocalStorage("total", 0);
    const { totalRedux, numItemsRedux, cartRedux } = props
    if (totalRedux == 0) {
        props.setTotalRedux(total)
    }

    function useLocalStorage(key, initialValue) {


        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(() => {
            try {
                // Get from local storage by key
                const item = window.localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                // If error also return initialValue
                console.log(error);
                return initialValue;
            }
        });
        // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to localStorage.
        const setValue = (value) => {
            try {
                // Allow value to be a function so we have same API as useState
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;
                // Save state
                setStoredValue(valueToStore);
                // Save to local storage
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                // A more advanced implementation would handle the error case
                console.log(error);
            }
        };
        return [storedValue, setValue];
    }


    function goHome() {
        if (window.location.href != " ") //if not home page
            props.history.push('/')
    }
    async function search(word) {
        await props.setSearchWord(word)
        props.history.push('/SearchResults/' + word)

    }
    useEffect(() => {
        if ($) {
            if (language == 'he') {
                $('.EnLanguage').removeClass('d-none')
                $('.HeLanguage').addClass('d-none')
                $('.scoopButton').css('direction', 'rtl')
                $('.linksNuv').addClass('rtl')
                $('.linksNuv').css({ "right": '3%', "position": 'absolute' })
                $('.svgSize').css({ "right": '', "left": '200px' })
                $('.svgSize_').css({ "right": '', "left": '210px' })


                $('.logoSide').css({ 'border-radius': '50px 0px 0px 50px', right: '0px', left: '' })
                $('.location').removeClass('text-start').addClass('text-end')
                $('.linksNuv').css({ "margin-right": '10%' })
                $('.amountOption_select').addClass('rtl-form-select').removeClass('pl-1')
                // $(".inputOfSearch").attr("placeholder", " הזן/י מוצר לחיפוש...")
                $('.swithSide').css('text-align', 'right')
                $('.productLine').addClass('rtl')
                $('.productName').css('text-align', 'right')
                // $('.productLine').css({ "border-right": "8px solid #C59950", "border-left": '0px solid #C59950' })
                $('.swithDir').css('direction', 'rtl')
                // shoppingCart
                $('.sumColumn').addClass('text-end').removeClass('pl-0')
                $('.sumColumnVal').removeClass('pl-5').addClass('pr-5')
                $('input[type=text]').addClass('rtl')
                $('.searchIcon').css({ "right": '', "left": '1%' })



            }
            else {
                // $(".inputOfSearch").css('plach')

                $('.HeLanguage').removeClass('d-none')
                $('.EnLanguage').addClass('d-none')
                $('.linksNuv').removeClass('rtl')
                $('.scoopButton').css('direction', 'ltr')
                $('.linksNuv').css({ "right": '', "position": '' })
                $('.location').removeClass('text-end').addClass('text-start')
                $('.svgSize').css({ "right": '200px', "left": '' })
                $('.svgSize_').css({ "right": '210px', "left": '' })



                $('.logoSide').css({ 'border-radius': '0px 50px 50px 0px', right: '', left: '0px' })
                $('.linksNuv').css({ "margin-left": '10%' })
                // $(".inputOfSearch").attr("placeholder", " ")
                $('.swithSide').css('text-align', 'left')
                $('.productLine').removeClass('rtl')
                $('.productName').css('text-align', 'left')
                $('.amountOption_select').removeClass('rtl-form-select').addClass('pl-1')
                // $('.productLine').css({ "border-right": "0px solid #C59950", "border-left": '8px solid #C59950' })
                $('.swithDir').css('direction', 'ltr ')
                // shoppingCart
                $('.sumColumn').removeClass('text-end').addClass('pl-0')
                $('.sumColumnVal').removeClass('pr-5').addClass('pl-5 pr-0')
                $('input[type=text]').removeClass('rtl')
                $('.searchIcon').css({ "right": '1%', "left": '' })


            }
        }
        if (total == 0) {
            props.setTotalRedux(total)
        }

    }, [$, language, cart, setCart, totalRedux, total])

    useEffect(() => {


        if ($) {

            $(".searchButton").click(function () {

                $('.searchDiv').removeClass('d-none')
                $('.topPage').addClass('d-none')
                $(".inputOfSearch").focus()


            });

            $(".searchClose").click(function () {
                $('.searchDiv').addClass('d-none')
                $('.topPage').removeClass('d-none')

            });
            $("#search-button").click(function () {

                const word = $('.inputOfSearch').val()
                if (word != "") {
                    search(word)
                }
                else {
                    $('.errorSearch').text(i18.t('searchMessage'))
                    setTimeout(function () {
                        $('.errorSearch').text('')
                    }, 2000);

                }



            });

            $('.inputOfSearch').keypress(function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 13) {
                    const word = $('.inputOfSearch').val()
                    if (word != "") {
                        search(word)



                    }

                }

            })


        }
    }, [$, cart])
    return (
        <>

            <div style={{
                width: '100vw',
                position: 'fixed',
                top: '0',
                zIndex: 1020,
                height: '100px'

            }}>
                <div className=' swithDir searchDiv bg-black d-none h-100 d-flex justify-content-center align-items-center' >


                    <button id="" type="button" For="form1" className="btn  m-0 border-0 searchClose text-white pl-5" style={{ height: 'fit-content', fontsize: '30px' }}     >
                        <i className="fas fa-times " style={{ fontSize: '32px' }}></i>
                    </button>
                    <div className="input-group align-items-center" style={{ width: 'fit-content' }}>



                        <div className="form-outline">
                            <input id="search-input" type="text" tabIndex='-1' className="pr-2 form-control bg-black text-white inputOfSearch h3 small border-bottom border-2 border-0 rounded-custom pb-0 pt-2 rtl pr-0" placeholder={i18.t('searchPlaceholder')} />

                            <p className='errorSearch mb-0 text-muted h6 small'>  </p>
                        </div>
                        <YourSvg className="searchIcon" id="search-button" />
                    </div>

                </div>
                <div className='topPage'>
                    <div className=" registerSection col-6 h6 mb-0 d-none  whiteColor d-flex align-items-center justify-content-center" ><div className="mx-5 fontNumber totalReduxUp"> {totalRedux ? parseFloat(totalRedux).toFixed(2) : parseFloat(0).toFixed(2)} &#8362;</div>
                        {/* <div className="ml-5 mr-5" onClick={() => props.history.push('/login')}><a >{i18.t('Login')}</a>/<a >{i18.t('Register')}</a></div> */}

                    </div>

                    {/* <div className="mx-5 fontNumber totalReduxUp svgSize_ whiteColor d-flex "> {totalRedux ? parseFloat(totalRedux).toFixed(2) : parseFloat(0).toFixed(2)} &#8362;</div>
                    <YourSvg className="svgSize searchButton" />

                     */}
                    <Image className='logoSide' onClick={e => goHome()} style={{
                        backgroundImage: `url(${underLogo})`,
                        maxHeight: "80px",
                        position: "absolute",
                        zIndex: 99999,
                        borderRadius: '0px 50px 50px 0px',

                        left: '0px',
                        top: '32px',
                        padding: '12px'
                    }} src={logo} />
                    {/* <div className="ml-5 mr-5" onClick={() => props.history.push('/login')}><a >{i18.t('Login')}</a>/<a >{i18.t('Register')}</a> <strong>Email:</strong> {currentUser.email}
                        <div className="w-100 text-center mt-2">
                            <Button variant="link" onClick={handleLogout}>
                                Log Out
                            </Button>
                        </div>
                    </div> */}
                    <Header history={props.history} cart={cart} numItems={numItems} total={total} />
                    <div style={{
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        <Nuv history={props.history} />

                    </div>
                </div>


            </div>






        </>
    );
}
const mapStateToProps = (state) => {
    return {
        language: state.languageReducer.language,
        totalRedux: state.totalReducer.totalRedux

    };
}

const mapDispatchToProps = (dispatch) => ({
    setSearchWord: (word) => dispatch(actions.setSearchWord(word)),
    setLanguage: (lan) => dispatch(actions.setLanguage(lan)),
    setTotalRedux: (Total) => dispatch(actions.setTotalRedux(Total))



})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopPageDesktop))