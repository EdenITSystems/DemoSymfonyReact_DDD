import React from 'react';
import CardProducts from "./CardProducts";

/**
 * Components ContainerProducts
 * @Author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ContainerProducts(props) {
    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <CardProducts/>
                    </div>
                    <div className="col">
                        <CardProducts/>
                    </div>
                    <div className="col">
                        <CardProducts/>
                    </div>
                </div>
            </div>
        </div>
    );
}
