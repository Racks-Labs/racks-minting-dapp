import React from "react";
const Museum = () => {
    return (
        <div className="pt-10 mt-5 pb-10">
            <div className="container  ">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 pt-10">
                        <label className="colordisabled l-SyncopateBold">GALERÍA RACKS</label>
                        <h1 className="rleft">date una vuelta</h1>
                        <p>Como parte de nuestra vena innovadora, hemos creado un <span>galería en realidad virtual</span>
                            donde se podrán ver todos los <span>NFTs de Racks</span> y de su publico. ¿Te das una vuelta?.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="col-12  col-lg-6 offset-lg-4 pt-10">
                            <div className="btn-native" href="#">
                                    <span className="btn-native-child ">
                                       DESCUBRELO
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Museum;
