import React, { useState, useRef, useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';
import productList from "../js/productsList";
import "../css/productsCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDownload, faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProductsCard(props) {
    const [showPopup, setShowPopup] = useState(false);
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

    return (
        <div className="productItem col-lg-3 col-md-4 col-sm-6">
            <div ref={cardRef} className="productTiltBox">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowPopup(true);
                    }}
                >
                    <img src={props.imgUrl} alt="appLogo" />
                    <h3 className="commonTextColor">{props.name}</h3>
                </a>
            </div>
            {showPopup && <Popup appLink={props.appLink} name={props.name} isWeb={props.isWeb} onClose={() => setShowPopup(false)} />}
        </div>
    );
}

function createCards(product) {
    return (
        <ProductsCard
            key={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            appLink={product.appLink}
            isWeb={product.isWeb}
        />
    );
}

function Popup({ onClose, name, appLink, isWeb }) {

    // const handleDownload = (link) => {
    //     window.location.href = link;
    // };

    // const handleDownload = (link) => {
    //     if (link) {
    //         if (link.includes("http")) {
    //             window.location.href = link;
    //         } else {
    //             // If the link is an image, display it
    //             const img = new Image();
    //             img.src = link;
    //             const imgWindow = window.open("");
    //             imgWindow.document.write(img.outerHTML);
    //         }
    //     } else {
    //         alert("App not published yet!");
    //     }
    // };

    const handleDownload = (link) => {
    if (link) {
        if (link.includes("http")) {
            window.location.href = link;
        } else {
            // Open the image in a new window
            const imgWindow = window.open("", "_blank", "width=800,height=600");
            imgWindow.document.write(`
                <html>
                <head>
                    <style>
                        body {
                            margin: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background: rgba(0, 0, 0, 0.8);
                            backdrop-filter: blur(10px);
                        }
                        img {
                            max-width: 90%;
                            max-height: 90%;
                            border-radius: 10px;
                            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                        }
                    </style>
                </head>
                <body>
                    <img src='${link}' alt='Image' />
                </body>
                </html>
            `);
        }
    } else {
        alert("App not published yet!");
    }
};

    

    return (
        <div className="popup">
            {isWeb ? (
                <div className="popup-content">
                    <h5>You want to visit <span className="appName">{name}</span></h5>
                    <div className="btnBox">
                        <button className="visitBtn androidDbtn" onClick={() => handleDownload(appLink)}>
                            <FontAwesomeIcon icon={faGlobe} /> Visit
                        </button>
                    </div>
                    <button className="closeBtn" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
            ) : (
                <div className="popup-content">
                    <h5>You want to download <span className="appName">{name}</span></h5>
                    <p>Choose your platform:</p>
                    <div className="btnBox">
                        <button className="androidDbtn" onClick={() => handleDownload(appLink)}>
                            <FontAwesomeIcon icon={faDownload} /> Android App Download
                        </button>
                        <button className="iosDbtn" onClick={() => alert("iOS app coming soon")}>
                            <FontAwesomeIcon icon={faDownload} /> iOS App Download
                        </button>
                    </div>
                    <button className="closeBtn" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
            )}
        </div>
    );
}

// Updated Products component with Next/Prev buttons and numbered pagination
function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(productList.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = productList.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="productSec" id="products">
            <div className="productMid">

                <h1 className="productTittle commonTextColor2">Our Products</h1>

                <div className="productRow1 row">
                    {currentProducts.map(createCards)}
                </div>

                <div className="pagination">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {/* Numbered Pagination */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={index + 1 === currentPage ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Products;
