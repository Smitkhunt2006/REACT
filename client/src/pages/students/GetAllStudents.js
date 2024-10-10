import { useEffect, useState } from "react";
import { Link , useNavigate , useParams} from "react-router-dom";

function GetAllStudents(){
    const [data, setData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const apiUrl = "http://localhost:5000/api/rooms";
        fetch(apiUrl).then(res=>res.json()).then(res=>setData(res));
    },[]);



    // useEffect(()=>{
    //     const apiUrl = `http://localhost:5000/api/rooms/getRoom/${id}`;
    //     fetch(apiUrl, { method:"GET" })
    //     .then(res=>res.json())
    //     .then(res=>setData(res));
    // },[]);



    const foramtedRooms = data.map((Rom)=>{
        return(
                <tr>   
                    <td>{Rom.id}</td>
                    <td>{Rom.name}</td>
                    <td>{Rom.price}</td>
                    <td><Link className="btn btn-info" to={"/room/"+Rom.id}>Read More</Link></td>
                    <td><button onClick={()=>{
                                  const apiUrl = "http://localhost:5000/api/rooms/deleteRoom/"+id;
                                  fetch(apiUrl,{method:"DELETE"})
                                 .then(res=>res.json())
                                 .then(res=>{
                                            navigate("/CustomerDetails");
                            });

                      }} className="btn btn-danger">Delete</button></td>
                </tr>
        );
    });

    // const foramtedFaculties = data.map((fac)=>{
    //     return(<tr>
    //                 <td>{fac.name}</td>
    //                 <td><Link className="btn btn-info" to={"/room/"+Rom.id}>Read More</Link></td>
    //                 {/* <td><Link className="btn btn-warning" to={"/faculty/edit/"+fac.id}>Edit</Link></td> */}
    //             </tr>
    //     );
    //});


    return(
        <>
         {/* <Link to="/faculty/add" className="btn btn-primary">Add Faculty</Link> */}
         <h1><center>Customer Details</center></h1>
         <hr />
         <br />
         <table className="table">

         {/* <Link to="/room/add" className="btn btn-primary">Add Room</Link> */}

            <tr>
                <td>
                    <u>
                        <b>
                           No.
                        </b>
                    </u>
                </td>
                <td>
                    <u>
                        <b>
                           Name
                        </b>
                    </u>
                </td>
                <td>
                    <u>
                       <b>
                          Price
                        </b>
                    </u>
                </td>
                <td>
                    <u>
                       <b>
                          Read More
                        </b>
                    </u>                
                </td>
                <td>
                    <u>
                       <b>
                          Delete
                        </b>
                    </u>
                </td>
            </tr>

            
            <br />
             {foramtedRooms}
         </table>
         </>
        
    )
}

export default GetAllStudents;