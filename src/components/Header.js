import React from "react";
import logo from  "../assets/images/logo.png"
import $ from 'jquery';



const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-black ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className="mt-2" src={logo} width="100"  alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse   navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link mt-2" href="#">INICO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mt-2" href="#">NFT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mt-2" href="#">MUSEO</a>
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
