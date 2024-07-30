import React, { useEffect, useState } from 'react';

const Admindex = () => {
    

    useEffect(() => {
        
    }, []);

    return (
        <div className="admin-container">
            <section className="menu inicio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cart__total border-box">
                                <h2>Welcome Admin</h2>
                                <br />
                                <h5>Type of user: Administrator</h5>
                                <br />
                                <a href="/Home" className="primary-btn">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Admindex;
