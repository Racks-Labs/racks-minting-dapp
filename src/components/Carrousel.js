import React from "react";
import logo from  "../assets/images/logo.png"
import mr1 from  "../assets/images/1.png"
import mr2 from  "../assets/images/2.png"
import mr3 from  "../assets/images/3.png"
import mr4 from  "../assets/images/4.png"
import mr5 from  "../assets/images/5.png"
import mr6 from  "../assets/images/6.png"
import mr7 from  "../assets/images/7.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Carrousel = () => {
    return (
        <div>
        <div className="container pt-5 pb-5 ">
            <div className="row">
                <div className="col-12 col-lg-4 offset-lg-4 pt-5">
                    <div className="borderTable text-center px-5 pb-4">
                        <img className="logoImg" src={logo}/>
                        <img className="w-100 pb-3" src={mr3}/>

                        <h1 className="titleYellow">MR CRYPTO</h1>
                        <p>
                            <span>MR. Cripto</span> es la ultima colección de NFTs <br/>
                            oficial de <span>Racks Mafia</span>. 1000 unidades <br/>
                            disponibles desde 20 €,
                        </p>
                        <div className="row px-0 mx-0">
                            <div className="col-12  col-lg-8 offset-lg-2 ">
                                <div className="btn-native" href="#">
                                    <span className="btn-native-child ">
                                        MINT NFT
                                    </span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="colordisabled">10 de 10000 disponibles</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row pt-5">
                <div className="col-12 col-lg-6 mt-5 pt-5">
                    <br/>
                    <label className="colordisabled l-SyncopateBold">ÚLTIMOS LANZAMIENTOS</label>
                    <h1 className="rleft">COLECCIÓN MR CRYPTO</h1>
                    <p>Descubre nuestra última <span>dirección de NFTs.</span> Duferentes rarezas y<br/>
                        assets que harán de tu NFT una <span>pieza única.</span>
                    </p>
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="btn-native" href="#">
                                    <span className="btn-native-child ">
                                        VER EN OPEN SEA
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div>
                <OwlCarousel className='owl-theme' autoplay={true} nav={true} items={7} loop margin={30} nav>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr1}/>
                    </div>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr2}/>
                    </div>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr3}/>
                    </div>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr4}/>
                    </div>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr5}/>
                    </div>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr6}/>
                    </div>
                    <div class='item'>
                        <img className="w-100 pb-3" src={mr7}/>
                    </div>
                    <div className='item'>
                        <img className="w-100 pb-3" src={mr3}/>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Carrousel;
