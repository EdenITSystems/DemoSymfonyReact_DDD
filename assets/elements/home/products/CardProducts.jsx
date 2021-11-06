import React, {useState} from 'react';

/**
 * Components CardProducts
 * @Author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function CardProducts(props) {
    const [number, setNumber] = useState(0)

    return (
        <div className="card shadow-sm">
            <div style={{minHeight: '200px'}}
                 className="bg-secondary p-4 fs-5 w-100 text-center">
                <div className="w-25 h-25 fs-5 bg-primary">
                    {number}
                </div>
            </div>

            <div className="card-body">
                <p className="card-text"></p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button onClick={() => setNumber(p => p + 1)}
                                className="btn btn-sm btn-outline-success">
                            +
                        </button>
                        <button onClick={() => setNumber(p => p - 1)}
                                className="btn btn-sm btn-outline-danger">
                            -
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    );
}
