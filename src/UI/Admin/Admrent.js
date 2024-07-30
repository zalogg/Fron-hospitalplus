import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admrent = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const FetchData = async () => {

        const resp = await fetch(process.env.REACT_APP_GET_RENT);
        const data1 = await resp.json();
        if (resp.ok) {
            setData(data1);
        } else {
            alert(data1);
        }
    };
    const NewRent = () => {
        navigate('/Newrent');
    }
    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div>
            <section class="create-specialty">
                <h2>Create Medical Specialty</h2>
                <form action="/submit-specialty" method="post">
                    <div class="form-group">
                        <label for="specialty_name">Specialty Name:</label>
                        <input type="text" id="specialty_name" name="specialty_name" required />
                    </div>
                    <div class="form-group">
                        <label for="specialty_description">Description:</label>
                        <textarea id="specialty_description" name="specialty_description" rows="4" required></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="site-btn" id="btn_create_specialty">Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Admrent
