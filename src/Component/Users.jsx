import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData(); // Data loaded from backend
    const [users, setUsers] = useState(loadedUsers);

    // Format Date for better readability
    const formatDate = (date) => {
        if (!date) return "N/A"; // Handle missing date
        return new Date(date).toLocaleString(); // Format date
    };

    // Delete User Handler
    const handleUserDelete = (id) => {
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
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "User has been deleted.", "success");
                            const remainingUsers = users.filter((user) => user._id !== id);
                            setUsers(remainingUsers);
                        } else {
                            Swal.fire("Error!", "Could not delete the user.", "error");
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Users: {users.length}</h2>
            {users.length === 0 ? (
                <p className="text-center text-gray-500">No users found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last SignIn Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{formatDate(user.createdAt)}</td>
                                    <td>{formatDate(user.lastSignInTime)}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mr-2">Edit</button>
                                        <button
                                            onClick={() => handleUserDelete(user._id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Users;
