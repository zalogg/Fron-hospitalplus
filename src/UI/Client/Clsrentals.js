import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Clsrentals = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [expandedRentals, setExpandedRentals] = useState([]);

    const FetchData = async () => {
        const resp = await fetch(process.env.REACT_APP_GET_RENT);
        const data1 = await resp.json();
        setData(data1);
    };

    
    const toggleExpandRental = (rentId) => {
        setExpandedRentals((prevExpandedRentals) =>
            prevExpandedRentals.includes(rentId)
                ? prevExpandedRentals.filter((id) => id !== rentId)
                : [...prevExpandedRentals, rentId]
        );
    };

    useEffect(() => {
        setLoading(true);
        FetchData();
        setLoading(false);
    }, []);

    return (
        <div className="Clsrentals">
           muestra el historial clinico 
        </div>
    );
};

export default Clsrentals;
