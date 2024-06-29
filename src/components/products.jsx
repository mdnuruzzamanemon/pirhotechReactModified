import React, { useState, useRef, useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';
import productList from "../js/productsList";
import "../css/productsCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDownload } from '@fortawesome/free-solid-svg-icons';

function ProductsCard(props) {
    const [showPopup, setShowPopup] = useState(false);
    //tilt effect start
    const cardRef = useRef(null);

    useEffect(() => {
        let currentRef = cardRef.current;

        if (currentRef) {
            const vanillaTiltInstance = VanillaTilt.init(currentRef, {
                max: 25,
                speed: 400,
                glare: true,
                'max-glare': 0.5,
            });

            return () => {
                if (vanillaTiltInstance) {
                    vanillaTiltInstance.destroy();
                }
            };
        }
    }, []);
    //tilt effect end

    return (
        <div className="productItem col-md-3">
            <div ref={cardRef} className="productTiltBox">
                <a

                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowPopup(true);
                    }}
                >
                    <img src={props.imgUrl} alt="appLogo" />
                    <h3>{props.name}</h3>
                </a>
            </div>
            {showPopup && <Popup appLink={props.appLink} name={props.name} onClose={() => setShowPopup(false)} />}
        </div>
    );
}

function createCards(productList) {
    return (
        <ProductsCard
            key={productList.id}
            name={productList.name}
            imgUrl={productList.imgUrl}
            appLink={productList.appLink}
        />
    );
}

function Popup({ onClose, name, appLink }) {

    const handleDownload = (link) => {
        window.location.href = link;
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h5>You want to download <span className="appName">{name}</span></h5>
                <p>Choose your platform:</p>
                <div className="btnBox">
                    <button className="androidDbtn" onClick={() => handleDownload(appLink)}>
                        <FontAwesomeIcon icon={faDownload} /> Android App Download
                    </button>
                    <button className="iosDbtn" onClick={() => alert("iOS download clicked")}>
                        <FontAwesomeIcon icon={faDownload} /> iOS App Download
                    </button>
                </div>

                <button className="closeBtn" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </div>
    );
}

function Products() {
    return (
        <div className="productSec" id="products">
            <div className="productMid" >

                <h1 className="productTittle">Our Products</h1>

                <div className="productRow1 row">
                    {productList.map(createCards)}
                </div>

            </div>
        </div>
    );
}

export default Products;