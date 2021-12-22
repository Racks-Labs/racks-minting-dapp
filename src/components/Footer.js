import React from "react";
import Logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <div className="pt-10  bg-images">
            <div className="container  ">
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <img src={Logo} className="w-50 pt-10"/>
                        <div className="row mx-0 px-0 pt-5 mb-5">
                            <div className="col-3">
                                <a>Terminos del servicio</a>
                            </div>
                            <div className="col-3">
                                <a>Politicas de Privacidad</a>
                            </div>
                            <div className="col-3">
                                <a>Aviso Legal</a>
                            </div>
                            <div className="col-3">
                                <a>Politica de  cookies</a>
                            </div>
                        </div>
                        <div className="row mx-0 px-0  mb-5">
                            <div className="col-6 offset-3">
                                <div className="row mt-2 mb-2">
                                    <div className="col-3">
                                        <a className="borderCircle"><i className="fab fa-twitch fa-2x"></i></a>
                                    </div>
                                    <div className="col-3">
                                        <a className="borderCircle"><i className="fab fa-facebook fa-2x"></i></a>
                                    </div>
                                    <div className="col-3">
                                        <a className="borderCircle"><i className="fab fa-instagram fa-2x"></i></a>
                                    </div>
                                    <div className="col-3">
                                        <a className="borderCircle"><i className="fab fa-twitter fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 px-0  mb-5">
                            <div className="col-8 offset-2 pt-5">
                                <a className="mt-2">Copyright 2021, Racksmafia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
