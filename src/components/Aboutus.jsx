import React from 'react';
import card1 from "../images/cards/face.jpg"
import card2 from "../images/cards/cardx.png"
import card3 from "../images/cards/cardy.webp"

const Aboutus = () => {
    return(
    <div className="text-gray-400 bg-gray-900 body-font flex-wrap -m-4 ">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-39 w-full object-cover object-center" src={card1} alt="blog"/>
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"></h2>
                            <h1 className="title-font text-lg font-medium text-black mb-3">Streamlined Verification Process</h1>
                            <p className="leading-relaxed text-black mb-3">Simplify HR verification process for restaurants and cafes and automate verification of employee credentials</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-39 w-full object-cover object-center" src={card2} alt="blog"/>
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"></h2>
                            <h1 className="title-font text-lg font-medium text-black mb-3">Advanced Security Features</h1>
                            <p className="leading-relaxed text-black mb-3">Ensure authenticity of employee credentials with image processing and flag potential security risks or discrepancies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-39 w-full object-cover object-center" src={card3} alt="blog"/>
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"></h2>
                            <h1 className="title-font text-lg font-medium text-black mb-3">User-Friendly Interface</h1>
                            <p className="leading-relaxed text-black mb-3">Designed with intuitive navigation and simple workflows and customizable features and options also available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Aboutus;