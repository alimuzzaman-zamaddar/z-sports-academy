import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './ClassCard.css'
import useAdmin from "../../../Hooks/sequrity/useAdmin";
import useInstructor from "../../../Hooks/sequrity/useInstructor";

const ClassCard = ({ classItem }) => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    // console.log(user)
    const navigate = useNavigate()
  const { Name, photo, IName, price, sets,_id,enrolled } =
    classItem;
//   console.log(classItem);
  const handleSelect = (classItem) =>{
    // console.log(classItem)
    if(user){
        const selectedClass = {selectedClassId: _id,Name,photo,IName,price,sets,email:user?.email}
        fetch('https://zamaddar-sports-club-server.vercel.app/select',{
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
            <button disabled={isAdmin || isInstructor} className="btn btn-primary"  onClick={() => handleSelect(classItem)} >Select</button>
        </div>
        <div className=" font-bold text-xl ml-6">
          <p>Class Name : {Name}</p>
          <p>Instructor : {IName}</p>
          <p>Available sets : {sets}</p>
          <p>Price : ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
