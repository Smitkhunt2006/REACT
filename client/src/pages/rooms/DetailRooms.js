import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailRooms(){
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const apiUrl = `http://localhost:5000/api/rooms/getRoom/${id}`;
        fetch(apiUrl, { method:"GET" })
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);



    return(<>
        <Link className="btn btn-info" to="/CustomerDetails">Back</Link>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>{
            const apiUrl = "http://localhost:5000/api/rooms/deleteRoom/"+id;
            fetch(apiUrl,{method:"DELETE"})
            .then(res=>res.json())
            .then(res=>{
                navigate("/CustomerDetails");
            });

        }} className="btn btn-outline-danger">Delete</button>
        <h1>id = {data.id} </h1>
        <h1> Name = {data.name} </h1>
        <h1> Price = {data.price} </h1>
        <h1> Amenities = {data.amenities} </h1>
      
    </>
    );
}

export default DetailRooms;

               