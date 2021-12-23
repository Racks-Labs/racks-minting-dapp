import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import mr3 from "../assets/images/3.png";

const Randomizador = () => {
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState(2); //max 7
  const [clothe, setClothe] = useState(2); //max 14
  const [type, setType] = useState(4); //max 4
  const [moustache, setMoustache] = useState(2); //max 7
  const [eyes, setEyes] = useState(2); //max 11
  const [head, setHead] = useState(13); //max 22
  const [bgCapucha, setBgCapucha] = useState(false);
  const [rarity, setRarity] = useState(0);

  const randomNFT = () => {
    const randbg = Math.round(Math.random() * 6 + 1);
    const randClothe = Math.round(Math.random() * 13 + 1);
    const randType = Math.round(Math.random() * 3 + 1);
    const randMoustache = Math.round(Math.random() * 6 + 1);
    const randEye = Math.round(Math.random() * 10 + 1);
    let randHead = Math.round(Math.random() * 21 + 1);

    randHead == 22 ? setBgCapucha(true) : setBgCapucha(false);
    if (
      (randType == 2 || randType == 3) &&
      (randHead == 15 || randHead == 16 || randHead == 20 || randHead == 21)
    ) {
      randHead = Math.round(Math.random() * 21 + 1);
    }

    setLoading(true);
    setBg(randbg);
    setClothe(randClothe);
    setType(randType);
    setMoustache(randMoustache);
    setEyes(randEye);
    setHead(randHead);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const rarityCalculator = () => {
    const bgWeight = bg * 1.2;
    const clotheWeight = clothe * 0.9;
    const typeWeight = type * 5;
    const moustacheWeight = moustache * 0.9;
    const eyesWeight = eyes * 0.7;
    const headWeight = head * 0.6;

    const rarity =
      bgWeight +
      clotheWeight +
      typeWeight +
      moustacheWeight +
      eyesWeight +
      headWeight;

    setRarity(rarity);
  };

  useEffect(() => {
    rarityCalculator();
  }, [bg, clothe, type, moustache, eyes, head]);

  const setHeadrange = (e) => {
    const value = e.target.value;
    value == 22 ? setBgCapucha(true) : setBgCapucha(false);
    if (type == 2 || type == 3) {
      if (value == 15 || value == 16) {
        setHead(14);
      } else if (value == 20 || value == 21) {
        setHead(19);
      }
    } else {
      setHead(value);
    }
  };

  return (
    <div className="row pt-5">
      <div className="col-12 col-lg-6 mt-2">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-4 mb-5 ">
            <div
              className={` ${rarity <= 34 && "borderTableCommon"} ${
                rarity > 34 && rarity <= 50 && "borderTableRare"
              } ${rarity > 50 && "borderTableExclusive"} text-center px-5 pb-4`}
            >
              <img className="logoImg" src={logo} />
              <div className="rnd-nft-container">
                {loading && (
                  <div class="loader">
                    <div class="loader__figure"></div>
                  </div>
                )}

                <div style={{ opacity: `${loading ? "0" : "1"}` }}>
                  <img
                    className="w-100 pb-3"
                    src={require(`../assets/layers/Background/${bg}.png`)}
                  />
                  {bgCapucha && (
                    <img
                      className="w-100 pb-3"
                      src={require(`../assets/layers/complex/Hood_Background.png`)}
                    />
                  )}

                  <img
                    className="w-100 pb-3"
                    src={require(`../assets/layers/Clothes/${clothe}.png`)}
                  />
                  <img
                    className="w-100 pb-3"
                    src={require(`../assets/layers/Type/${type}.png`)}
                  />

                  <img
                    className="w-100 pb-3"
                    src={require(`../assets/layers/Headwear/${head}.png`)}
                  />
                  <img
                    className="w-100 pb-3"
                    src={require(`../assets/layers/Eyes/${eyes}.png`)}
                  />
                  <img
                    className="w-100 pb-3"
                    src={require(`../assets/layers/Moustache/${moustache}.png`)}
                  />
                </div>
              </div>
              {rarity <= 34 && <h1 className="titleGray  pt-3 pb-3">COMÚN</h1>}
              {rarity > 34 && rarity <= 50 && (
                <h1 className="titleYellow  pt-3 pb-3">RARO</h1>
              )}
              {rarity > 50 && (
                <h1 className="titleMint  pt-3 pb-3">EXCLUSIVO</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <ul className="rangeSelector__container">
          <li>
            <p>FONDO</p>
            <input
              type="range"
              min="1"
              max="7"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
            />
          </li>
          <li>
            <p>TIPO</p>
            <input
              type="range"
              min="1"
              max="4"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </li>
          <li>
            <p>SOMBRERO</p>
            <input
              type="range"
              min="1"
              max="22"
              value={head}
              onChange={(e) => setHeadrange(e)}
            />
          </li>
          <li>
            <p>MOSTACHO</p>
            <input
              type="range"
              min="1"
              max="7"
              value={moustache}
              onChange={(e) => setMoustache(e.target.value)}
            />
          </li>
          <li>
            <p>OJOS</p>
            <input
              type="range"
              min="1"
              max="11"
              value={eyes}
              onChange={(e) => setEyes(e.target.value)}
            />
          </li>
          <li>
            <p>VESTIMENTA</p>
            <input
              type="range"
              min="1"
              max="14"
              name="bg"
              value={clothe}
              onChange={(e) => setClothe(e.target.value)}
            />
          </li>
        </ul>
        <div className="col-12  col-lg-6 offset-lg-4 ">
          <div className="btn-native" href="#">
            <span className="btn-native-child " onClick={randomNFT}>
              ALEATORIO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Randomizador;
