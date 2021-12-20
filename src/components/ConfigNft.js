import React from "react";
import logo from "../assets/images/logo.png";
import mr3 from "../assets/images/3.png";
const ConfigNft = () => {
    return (
        <div className="">
            <div className="container  ">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 mt-5">
                        <label className="colordisabled l-SyncopateBold">COLECCIÓN MR CRYPTO</label>
                        <h1 className="rleft">DESCÚBRELOS TODOS</h1>
                        <p>Utiliza nustro <span>creadir de NFTs</span> interactivo para descrubrir todas las<br/>
                            posibles <span>configuraciones</span> que pueden obtener de Mr Crypto.
                        </p>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 mt-2">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-4 mb-5 ">
                                <div className="borderTable text-center px-5 pb-4">
                                    <img className="logoImg" src={logo}/>
                                    <img className="w-100 pb-3" src={mr3}/>

                                    <h1 className="titleYellow pt-3 pb-3">EXCLUSIVO</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <ul>
                            <li>
                                FONDO
                            </li>
                            <li>
                                TIPO
                            </li>
                            <li>
                                SOMBRERO
                            </li>
                            <li>
                                OJOS
                            </li>
                            <li>
                                VESTIMENTA
                            </li>
                        </ul>
                        <div className="col-12  col-lg-6 offset-lg-4 ">
                            <div className="btn-native" href="#">
                                    <span className="btn-native-child ">
                                        ALEATORIO
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigNft;
