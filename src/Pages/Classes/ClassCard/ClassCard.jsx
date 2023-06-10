import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './ClassCard.css'

const ClassCard = ({ classItem }) => {
    const {user} = useContext(AuthContext)
    // console.log(user)
    const navigate = useNavigate()
  const { Name, photo, IName, price, sets,_id } =
    classItem;
//   console.log(classItem);
  const handleSelect = (classItem) =>{
    // console.log(classItem)
    if(user){
        const selectedClass = {selectedClassId: _id,Name,photo,IName,price,sets,email:user?.email}
        fetch('http://localhost:5000/select',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(selectedClass)

        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Class Is Selected',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
    }
    else{
        Swal.fire({
            title: 'You Need to Login to Select Class',
            icon: 'primary',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to login'
          }).then((result) => {
             navigate('/login')
          })
    }
  }


  return (
    <div className="shadow-2xl classCard">
      <img className="w-full p-7 h-[400px]" src={photo} alt="" />
      <div className="p-7 flex justify-between items-center">
        <div className="">
            <button onClick={() => handleSelect(classItem)} className="btn btn-primary">Select</button>
        </div>
        <div className=" font-bold text-xl ml-6">
          <p>Class Name : {Name}</p>
          <p>Instructor : {IName}</p>
          <p>Sets : {sets}</p>
          <p>Price : ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
