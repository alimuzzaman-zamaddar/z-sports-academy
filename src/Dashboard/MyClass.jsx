import React from "react";
import useClasses from "../Hooks/useClasses";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [selectedClass, refetch] = useClasses();
  const handleDelete = (sClass) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://zamaddar-sports-club-server.vercel.app/select/${sClass._id}`,{
                method:'DELETE'

            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })


        }
      })
  }
  return (
    <div>
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
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((sClass,index) => (
              <tr key={sClass._id}>
                <th>
                  <label>
                   {index + 1}
                  </label>
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
                <td>
                  <button onClick={() => handleDelete(sClass)} className="btn btn-ghost btn-xs">Delete</button>
                </td>
                <td>
                  <Link to='/dashboard/payment' > <button className="btn btn-ghost btn-xs">Pay</button> </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
