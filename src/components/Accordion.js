import React from "react";

const Accordion = () => {
    return (
        <div className="pt-10 mt-5 pb-10">
            <div className="container  ">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6">
                        <label className="colordisabled l-SyncopateBold">FAQ</label>
                        <h1 className="rleft">resuelve tus dudas</h1>
                        <p>Como parte de nuestra vena innovadora, hemos creado un <span>galería en realidad virtual</span>
                            donde se podrán ver todos los <span>NFTs de Racks</span> y de su publico. ¿Te das una vuelta?.
                        </p>
                    </div>
                    <div className="col-12 col-lg-8 ">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                        ¿QUÉ SIN LOS NFTS DE RACKS?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is
                                        intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                        first item's accordion body.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
