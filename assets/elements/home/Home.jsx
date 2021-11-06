import React from 'react';
import Banner from "./Banner";
import ContainerProducts from "./products/ContainerProducts";

/**
 * Components Home
 * @Author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function Home({}) {

    return (
        <div className="container-fluid">
            <div className="row">
                <Banner/>
                <ContainerProducts/>
            </div>
        </div>
    );
}
