import React from "react";
import useClasses from "../Hooks/useClasses";
import Swal from "sweetalert2";
import useAllClasses from "../Hooks/useAllClasses";

const AllClasses = () => {
    const  [AllClasses, refetch] = useAllClasses()
    const handleApproved = (sClass) => {
      const updateApproved = {status:'approved'}
      fetch(`https://zamaddar-sports-club-server.vercel.app/class/${sClass._id}`, {
        method:'PATCH',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(updateApproved)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${sClass.Name}is Approved Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
    const handleDeny = (sClass) => {
      const updateDeny = {status:'Denied'}
      fetch(`https://zamaddar-sports-club-server.vercel.app/class/${sClass._id}`, {
        method:'PATCH',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(updateDeny)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${sClass.Name}is Denied Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };

    const handleFeedback = (sClass) =>{

    }






  const handleDelete = (sClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://zamaddar-sports-club-server.vercel.app/class/${sClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
        <h1 className="text-center text-6xl font-extrabold py-10">Manage Classes</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Course Fee</th>
              <th>Sets</th>
              <th>Status</th>
              <th>Denied</th>
              <th>FeedBack</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {AllClasses.map((sClass, index) => (
              <tr key={sClass._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={sClass.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{sClass.Name}</td>
                <td>{sClass.IName}</td>
                <td>{sClass.price}</td>
                <td>{sClass.sets}</td>
                <td> <button disabled={sClass?.status !== "pending"} className="btn btn-success" onClick={() => handleApproved(sClass)}>{sClass?.status}</button> </td>
                <td> <button disabled={sClass?.status !== "pending"} className="btn btn-secondary" onClick={() => handleDeny(sClass)}> {sClass?.status == 'approved' || sClass.status == "pending" ? 'Deny' : "Denied"} </button> </td>
                <td> <button disabled={sClass?.status !== "pending"} className="btn btn-primary" onClick={() => handleFeedback(sClass)}>FeedBack</button> </td>
                <td>
                  <button 
                    onClick={() => handleDelete(sClass)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
