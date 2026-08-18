import React, { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, reset } = useForm();

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);



  // function submit(data) {
  //   console.log("FORM DATA:", data);

  //   // CREATE
  //   setUsers([...users, data]);

  //   console.log("CREATE:", data);
  // }

  function submit(data) {
  console.log("FORM DATA:", data);
  console.log("EDIT INDEX:", editIndex);

  if (editIndex === null) {
    // CREATE
    setUsers([...users, data]);

    console.log("CREATE USER:", data);
  } else {
    // UPDATE
    const updatedUsers = [...users];
    console.log("BEFORE UPDATE:", updatedUsers);
    updatedUsers[editIndex] = data;
    console.log("AFTER UPDATE:", updatedUsers);

    setUsers(updatedUsers);
    setEditIndex(null);
    reset();
    // console.log("UPDATE USER:", data);
  }
}

  function deleteUser(idx) {
    console.log("DELETE INDEX:", idx);
    console.log("DELETE USER:", users[idx]);

    const updatedUsers = users.filter((_, i) => i !== idx);

    console.log("UPDATED USERS:", updatedUsers);

    setUsers(updatedUsers);
  }

  function editUser(idx) {
    console.log("EDIT INDEX:", idx);

    const user = users[idx];

    console.log("EDIT USER:", user);

    reset({
      name: user.name,
      email: user.email,
      company: user.company
    });

  

    setEditIndex(idx);


  }

  return (
    <div>
      <h1>CRUD with React Hook Form</h1>

      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />

        <input
          type="text"
          placeholder="Enter your company"
          {...register("company", { required: true })}
        />

        <button type="submit">
          {editIndex === null ? "Add User" : "Update User"}
        </button>
      </form>

      <h2>Users List</h2>

      {users.map((user, idx) => (
        <div key={idx}>
          <hr />
          <h3>{user.name}</h3>
          <h5>{user.email}</h5>
          <h4>{user.company}</h4>

          <button type="button" onClick={() => deleteUser(idx)}>
            Delete
          </button>

          <button type="button" onClick={() => editUser(idx)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;