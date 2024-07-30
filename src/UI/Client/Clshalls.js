import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Clshalls = () => {
    const item_valueid = sessionStorage.getItem("item_key");
    const [appointmentDate, setAppointmentDate] = useState('');
    const [reason, setReason] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Realizar la petición GET para obtener los nombres de los médicos
        const fetchDoctors = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_GET_DOCTORS);
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDate = new Date(appointmentDate).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        try {
            const response = await fetch(process.env.REACT_APP_CREATE_RESERVE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idclient: item_valueid,
                    date: formattedDate,
                    doctor: selectedDoctor,
                    reason
                    
                })
            });

            if (!response.ok) {
                throw new Error("Response Status: " + response.status);
            }
            const message = await response.json();
            alert(message);
            navigate('/Client')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="clmedicalappointments">
            <h2>Medical Appointments</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="appointment_date">Appointment Date:</label>
                    <input
                        type="date"
                        id="appointment_date"
                        name="appointment_date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reason">Reason:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        rows="4"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Select Doctor:</label>
                    <select
                        id="doctor"
                        name="doctor"
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.idusers} value={doctor.name + " " + doctor.lastname}>
                                {doctor.name + " " +doctor.lastname}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <button type="submit" className="site-btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Clshalls;
