import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetAllRooms(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const apiUrl = "http://localhost:5000/api/rooms";
        fetch(apiUrl).then(res=>res.json()).then(res=>setData(res));
    },[]);
    const foramtedRooms = data.map((Rom)=>{
        return(<tr>
                    <td>{Rom.id}</td>
                    <td>{Rom.name}</td>
                    <td>{Rom.price}</td>
                    <td><Link className="btn btn-info" to={"/room/"+Rom.id}>Read More</Link></td>
                    <td><Link className="btn btn-warning" to={"/room/edit/"+Rom.id}>Edit</Link></td>
                </tr>
        );
    });
    return(
        <>
        <Link to="/room/add" className="btn btn-primary">Add Room</Link>
        <table className="table">
            {foramtedRooms}
        </table>
        </>
    )
}

export default GetAllRooms;