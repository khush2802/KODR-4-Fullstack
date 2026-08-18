import React from "react";

const UserCard = ({ user, deleteUser, setUpdatedUser, setIsCreatingUser }) => {
  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-6 text-white shadow-xl">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold capitalize">
            {user.name.firstname}
          </h2>

          <p className="text-sm text-gray-400">
            User
          </p>
        </div>

        <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300">
          ID: {user.id}
        </span>
      </div>

      {/* User Information */}
      <div className="space-y-4">

        {/* Email */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Email
          </p>

          <p className="mt-1 text-gray-200">
            {user.email}
          </p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Phone
          </p>

          <p className="mt-1 text-gray-200">
            {user.phone}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <button onClick={
          ()=>setUpdatedUser(user)
          & setIsCreatingUser(true)
        } className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]">
          Update
        </button>

        <button onClick={() => deleteUser(user.id)} className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 font-semibold text-gray-300 transition hover:bg-gray-700 active:scale-[0.98]">
          Delete
        </button>

      </div>

    </div>
  );
};

export default UserCard;