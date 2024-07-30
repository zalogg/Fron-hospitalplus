import React, { useEffect, useState } from 'react';

const DocAppointments = () => {
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

            const count = await fetch(process.env.REACT_APP_COUNT_INFORMATION1 + "/"+ item_valueid);
            const data2 = await count.json();

            if (count.ok) {
                setReservations(data2.reservcount);
                setHall(data2.hallreserv);
                setDate(data2.datereserv);
                setHour(data2.hourreserv);
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
            <section className="Appointments-container">
                aqui que muestre las citas medicas dependiende de la especalidad del doctor que se loguea 
            </section>

        </div>
    );
};

export default DocAppointments;
