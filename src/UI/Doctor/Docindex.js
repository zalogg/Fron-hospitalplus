import React, { useEffect, useState } from 'react';

const Clsindex = () => {
    const item_valueid = sessionStorage.getItem("item_key");
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [data_reservations, setReservations] = useState("0");
    const [data_date, setDate] = useState("NONE");
    const [data_hall, setHall] = useState("NONE");
    const [data_hour, setHour] = useState("NONE");

    const Information = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_GET_INFORMATION}/${item_valueid}`);
            if (response.ok) {
                const data1 = await response.json();
                if (Array.isArray(data1)) {
                    setData(data1);
                } else {
                    setError('Unexpected response format');
                }
            } else if (response.status === 404) {
                setError('No information found.');
            } else {
                throw new Error('Error fetching information');
            }
        } catch (error) {
            console.error(error.message);
            setError('Error fetching information');
        } finally {
            setLoading(false);
        }
    };

    const Logout = () => {
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    };

    useEffect(() => {
        Information();
    }, []);

    return (
        <div>
            <section className="admin-container">
                <div className="menu inicio">
                    <div className="container">
                        <div className='row'>
                            <div className="col-lg-4">
                                <div className="cart__total border-box">
                                    <h2>Welcome Doctor !!</h2>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : data.length > 0 ? (
                                        data.map(filname => (
                                            <ul key={filname.idclients}>
                                                <li id="txt_nom">Name: {filname.name + " " + filname.lastname}</li>
                                                <li id="txt_correo">E-mail: {filname.mail}</li>
                                                <li id="txt_tipous">Type of user: {filname.role}</li>
                                                <li><a href="./Recpass"><i className="" aria-hidden="true"></i>Cambiar contraseña</a></li>
                                            </ul>
                                        ))
                                    ) : (
                                        <p>No information available.</p>
                                    )}
                                    <button id="btn_close" onClick={Logout} className="site-btn">Log out</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </div>
    );
};

export default Clsindex;
