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
                                <a>Terminos y condiciones</a>
                            </div>
                            <div className="col-3">
                                <a>Terminos y condiciones</a>
                            </div>
                            <div className="col-3">
                                <a>Terminos y condiciones</a>
                            </div>
                            <div className="col-3">
                                <a>Terminos y condiciones</a>
                            </div>
                        </div>
                        <div className="row mx-0 px-0  mb-5">
                            <div className="col-4 offset-4">
                                <div className="row mt-2 mb-2">
                                    <div className="col-3">
                                        <a><i className="fa fa-car"> </i></a>
                                    </div>
                                    <div className="col-3">
                                        <a><i className="fa fa-car"> </i></a>
                                    </div>
                                    <div className="col-3">
                                        <a><i className="fa fa-car"> </i></a>
                                    </div>
                                    <div className="col-3">
                                        <a><i className="fa fa-car"> </i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 offset-2">
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
