import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRoom() {
    const [data, setData] = useState(null);  // Start with null to show loading state
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:5000/api/rooms/getRoom/${id}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error("Failed to fetch room data:", err));
    }, [id]);

    const handleSubmit = () => {
        fetch(`http://localhost:5000/api/rooms/editRoom/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => navigate("/rooms"))
            .catch(err => console.error("Failed to update room:", err));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });  // Dynamically set the data based on input name
    };

    if (!data) {
        return <div>Loading...</div>;  // Show loading state while fetching data
    }

    return (
        <>
            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label">ID</label>
                <div className="col-8">
                    <input
                        value={data.id || ''}
                        name="id"
                        onChange={handleInputChange}    
                        type="text"
                        className="form-control"
                        
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text1" className="col-4 col-form-label">Name</label>
                <div className="col-8">
                    <input
                        value={data.name || ''}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="price" className="col-4 col-form-label">Enter Price</label>
                <div className="col-8">
                    <input
                        value={data.price || ''}
                        name="price"
                        onChange={handleInputChange}
                        type="number"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="amenities" className="col-4 col-form-label">Enter amenities</label>
                <div className="col-8">
                    <input
                        value={data.amenities || ''}
                        name="amenities"
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="available" className="col-4 col-form-label">Enter available</label>
                <div className="col-8">
                    <input
                        value={data.available || ''}
                        name="available"
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button onClick={handleSubmit} className="btn btn-primary">Edit</button>
                </div>
            </div>
        </>
    );
}

export default EditRoom;
