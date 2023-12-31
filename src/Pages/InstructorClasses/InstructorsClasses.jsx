import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAllClasses from '../../Hooks/useAllClasses';

const InstructorsClasses = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const [AllClasses] = useAllClasses()

    const instructorClass = AllClasses.filter(insClass => insClass.Iemail === user.email)
    return (
        <div>
        <h1 className="text-center text-6xl font-extrabold py-10">My Classes</h1>
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
              <th>Total Enroll</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {instructorClass.map((sClass, index) => (
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
                <td>${sClass.price}</td>
                <td>${sClass.enrolled}</td>
                <td>{sClass.status} </td>
                <td>
                  <button
                    className="btn btn-secondary"
                  >
                    Update
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

export default InstructorsClasses;