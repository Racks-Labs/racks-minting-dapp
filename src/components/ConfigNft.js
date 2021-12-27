import React from "react";

import Randomizador from "./Randomizador";

const ConfigNft = () => {
  return (
    <div className="">
      <div className="container  ">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 mt-5">
            <label className="colordisabled l-SyncopateBold">
              COLECCIÓN MR CRYPTO
            </label>
            <h1 className="rleft">DESCÚBRELOS TODOS</h1>
            <p>
              Utiliza nustro <span>creadir de NFTs</span> interactivo para
              descrubrir todas las
              <br />
              posibles <span>configuraciones</span> que pueden obtener de Mr
              Crypto.
            </p>
          </div>
        </div>
        <Randomizador></Randomizador>
      </div>
    </div>
  );
};

export default ConfigNft;
