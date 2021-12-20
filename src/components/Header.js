import React from "react";
import logo from  "../assets/images/logo.png"
import $ from 'jquery';



const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-black ">
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-lg-5  col-xl-7">
                            <a className="navbar-brand" href="#">
                                <img className="mt-2" src={logo} width="100"  alt=""/>
                            </a>
                        </div>
                        <div className="col-5  col-lg-7 col-xl-5">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link mt-2" href="#">INICO</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mt-2" href="#">NFT</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link mt-2" href="#">MUSEO</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mt-2" href="#">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mt-2" href="#">TIENDA</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="btn-native" href="#">
                                            <span className="btn-native-child ">
                                                MINT NFT
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-black");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

export default Header;
