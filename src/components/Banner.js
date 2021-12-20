import React from "react";
import EarthHero from  "../assets/images/logo.png"
import Video from  "../assets/video/video.mp4"
const Banner = () => {
    return (
        <div className="">
            <video playsInline autoPlay loop autobuffer muted
                   src={Video}
                   className="big-image__video-background"></video>
            <div className="container  pt-10 pb-10">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 mt-5">
                        <label className="colordisabled l-SyncopateBold">RACKS METAVERSE</label>
                        <h1 className="rleft">el futuro del ecommerce</h1>
                        <p>Contruimos el <span>futuro del ecommerce</span>  a través de las experiencias.  <br/>
                            Entra en el <span>metaverso de Racks Mafia</span> y cambia el paradigma de las <br/>
                            compras en internet.
                        </p>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="btn-native" href="#">
                                    <span className="btn-native-child ">
                                        DESCUBRELO
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="w-100" src={EarthHero}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
