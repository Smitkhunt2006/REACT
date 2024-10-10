import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRooms() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!data.id || !data.name || !data.price || !data.amenities || data.available) {
            alert("Please fill all fields");
            return;
        }

        fetch("http://localhost:5000/api/rooms", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => navigate("/CustomerDetails"))
            .catch(err => console.error("Failed to add room:", err));
    };

    return (
        <>
            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label">ID</label>
                <div className="col-8">
                    <input onChange={(e) => setData({ ...data, id: e.target.value })} type="text" className="form-control" required />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text1" className="col-4 col-form-label">Name</label>
                <div className="col-8">
                    <input onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control" required />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text" className="col-4 col-form-label">Enter Price</label>
                <div className="col-8">
                    <input onChange={(e) => setData({ ...data, price: e.target.value })} type="number" className="form-control" required />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text2" className="col-4 col-form-label">Enter amenities</label>
                <div className="col-8">
                    <input onChange={(e) => setData({ ...data, amenities: e.target.value })} type="text" className="form-control" required />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text2" className="col-4 col-form-label">Enter available</label>
                <div className="col-8">
                    <input onChange={(e) => setData({ ...data, available: e.target.value === "true" })} type="text" className="form-control" required />
                </div>
            </div>
            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </div>
        </>
    );
}

export default AddRooms;
