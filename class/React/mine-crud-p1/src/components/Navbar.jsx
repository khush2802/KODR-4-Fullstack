const Navbar = ({ setIsCreatingUser }) => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 bg-gray-950 px-8 py-4 text-white">
      <h1 className="text-2xl font-bold"
      }
      >
        User Management
      </h1>

      <button 
      onClick={()=>setIsCreatingUser(true)}
      className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500 active:scale-95">
        + Create User
      </button>
    </nav>
  );
};

export default Navbar;