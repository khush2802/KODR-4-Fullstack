import React from 'react';
import { useForm } from 'react-hook-form';


const Form = ({setIsCreatingUser, setUsers, setUpdatedUser, updatedUser}) => {

     



     //creation of useform
     const{
          register,
          handleSubmit,
          formState: {errors},
     } = useForm({
          defaultValues: {
          name: updatedUser?.name.firstname||"",
          email: updatedUser?.email||"",
          phone: updatedUser?.phone||"",
          }
     });

//adding of new user concept means create from crud
     const createUser = (data)=>{
          if (updatedUser) {
  setUsers((prevUsers) => {
    return prevUsers.map((user) => {
      if (user.id === updatedUser.id) {
        return {
          ...user,

          name: {
            ...user.name,
            firstname: data.name,
          },

          email: data.email,

          phone: data.phone,
        };
      }

      return user;
    });
  });

  setUpdatedUser(null);
  setIsCreatingUser(false);
}
          else{
                console.log(data);
          const newUser = {
               id: Date.now(),
               name: {
                    firstname: data.name,
               },
               email: data.email,
               phone: data.phone,
          }
          console.log(newUser);

          setUsers((prevUsers)=>[...prevUsers, newUser]);
          setIsCreatingUser(false);
          }
         
     }



  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">
        
        <h2 className="mb-2 text-2xl font-bold text-white">
          Create User
        </h2>

        <p className="mb-6 text-sm text-gray-400">
          Enter the user details below.
        </p>

        <form onSubmit={handleSubmit(createUser)} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Name
            </label>
               <input
                    {...register("name",{
                    required: "Name is required"
                    })}
              type="text"
              placeholder="Enter name"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input

            {...register("email",{
                    required: "Email is required"
                         })}
              type="email"
              placeholder="Enter email"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
            {...register("phone",{
               required: "Phone number is required",
              pattern:{
                    value: /^[6-9]\d{9}$/,
                    message: "Invalid phone number",
              },

              minLength: {
                    value: 10,
                    message: "Phone number must be 10 digits",
                 },

                 maxLength: {
                    value: 10,
                    message: "Phone number must be 10 digits",
                 },
            })}
              type="text"
              placeholder="Enter phone number"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsCreatingUser(false);
                        setUpdatedUser(null);
                      }}
                      className="flex-1 rounded-lg border border-gray-700 px-4 py-3 font-semibold text-gray-300 transition hover:bg-gray-800"
                    >
                      Cancel
                    </button>

                 <button type="submit">
                    {updatedUser ? "Update User" : "Create User"}
                    </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Form;