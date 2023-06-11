import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProviders";

const EnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  useEffect(() => {
    fetch("https://zamaddar-sports-club-server.vercel.app/paid")
      .then((res) => res.json())
      .then((data) => setEnrolledClasses(data));
  }, []);

  const enrolled = enrolledClasses.filter((en) => en.email == user?.email);

  return (
    <div>
        <h1 className="text-center font-extrabold text-6xl py-10">Your paid Classes</h1>
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
              <th>Paid amount</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((sClass, index) => (
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
                <td>Enrolled</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
