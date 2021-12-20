import React from "react";
import RackMontanaNFT from  "../assets/images/RackMontanaNFT.jpg"
import MrInflationNFT from  "../assets/images/MrInflationNFT.jpg"
const Exclusives = () => {
    return (
        <div>
            <div className="container  ">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 mt-5 pt-5">
                        <img className="ImgOne" src={RackMontanaNFT}/>
                        <img className="ImgTwo" src={MrInflationNFT}/>
                    </div>
                    <div className="col-12 col-lg-6 pt-10 pb-10">

                        <label className="colordisabled l-SyncopateBold">EXCLUSIVIDAD EN NUESTROS PRODUCTOS</label>
                        <h1 className="rleft">NFTS exclusivos</h1>
                        <p>Con la compra de alguna de nuestras prendas exclusivas, obtendrás un <br/>
                        <span>NFT único</span> que garantice la auutenticidad de tu producto. Este NFT te<br/>
                            abrirá <span>múltiples posibilidades</span> en el futuro.
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
        </div>
    );
};

export default Exclusives;
