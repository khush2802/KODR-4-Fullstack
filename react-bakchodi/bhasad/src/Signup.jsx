import { useState } from 'react'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setMessage('Thanks! Your signup request has been received.')
  }

  return (
    <div className="min-h-screen bg-[#83e6d3] flex items-center justify-center p-6">

      <div className="w-full max-w-[1000px] h-[650px] bg-white rounded-[28px] overflow-hidden flex shadow-2xl">

        {/* LEFT — ARTWORK */}
        <div className="relative hidden md:block w-1/2 overflow-hidden bg-[#06172e]">

          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,#ffad20,transparent_30%),radial-gradient(circle_at_80%_80%,#00cdb8,transparent_35%),linear-gradient(135deg,#10213e,#031c38)]" />

          {/* Decorative circles */}
          <div className="absolute -top-12 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#00e2d0] to-[#008d8b]" />

          <div className="absolute top-12 left-44 w-24 h-24 rounded-full bg-gradient-to-br from-[#fff25a] to-[#ff8b00]" />

          <div className="absolute -top-3 right-28 w-14 h-14 rounded-full bg-gradient-to-br from-[#ffe66b] to-[#ff9700]" />

          <div className="absolute top-32 -left-12 w-40 h-40 rounded-full bg-gradient-to-br from-[#ffc14a] to-[#ff8200]" />

          <div className="absolute top-52 right-[-30px] w-28 h-28 rounded-full bg-[#00d8c5]" />

          <div className="absolute bottom-[-40px] left-[-30px] w-40 h-40 rounded-full border-2 border-[#087fa1] bg-[#061d43]" />

          <div className="absolute bottom-[-35px] left-28 w-28 h-28 rounded-full bg-[#00d7c5]" />

          <div className="absolute bottom-[-45px] right-12 w-48 h-48 rounded-full bg-gradient-to-br from-[#00ddc8] to-[#007b7b]" />

          <div className="absolute bottom-36 right-[-30px] w-24 h-24 rounded-full bg-[#00d8c7]" />

          {/* Ring */}
          <div className="absolute top-0 right-6 w-32 h-32 rounded-full bg-[#00cbb9] flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#079f8f]" />
          </div>

          {/* Glass card */}
          <div className="
            absolute
            top-[105px]
            left-[55px]
            w-[380px]
            h-[485px]
            rounded-xl
            bg-black/35
            backdrop-blur-xl
            border border-white/10
            shadow-2xl
            p-7
            text-white
          ">

            <div className="inline-block bg-white/10 px-3 py-2">
              <div className="text-[14px] font-semibold">
                THEGOOD
              </div>

              <div className="text-[13px] tracking-[3px]">
                NETWORK
              </div>
            </div>

            <div className="w-9 h-px bg-white/50 mt-5 mb-5" />

            <p className="text-[15px]">
              We are
            </p>

            <h2 className="text-[28px] font-light leading-tight">
              Invite only right now.
            </h2>

            <p className="mt-2 text-[12px] leading-5 text-white/80">
              10 million+ people have joined our network.
              <br />
              We invite you to join the tribe.
            </p>

            <div className="absolute bottom-10">
              <p className="text-[16px]">
                Already have an account?
              </p>

              <p className="mt-2 font-semibold">
                Sign in
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT — FORM UI */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-10 lg:px-16">

          <form className="w-full max-w-[320px]" onSubmit={handleSubmit}>

            <h1 className="text-[36px] font-medium text-[#111] mb-9">
              Sign up
            </h1>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-[13px] font-semibold mb-2">
                Email address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="
                  w-full
                  h-11
                  rounded-lg
                  border border-gray-200
                  px-3
                  text-sm
                  outline-none
                "
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="block text-[13px] font-semibold mb-2">
                Set password
              </label>

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                autoComplete="new-password"
                minLength="8"
                required
                className="
                  w-full
                  h-11
                  rounded-lg
                  border border-gray-200
                  px-3
                  text-sm
                  outline-none
                "
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#16b99a]"
                checked={showPassword}
                onChange={(event) => setShowPassword(event.target.checked)}
              />

              <span className="text-[12px] text-gray-600">
                Show password
              </span>
            </div>

            {/* Button */}
            <button type="submit" className="
              w-full
              h-12
              rounded-lg
              bg-gradient-to-r
              from-[#17a982]
              to-[#19c8a7]
              text-white
              font-semibold
              text-sm
            ">
              Sign up →
            </button>

            {message && (
              <p className="mt-3 text-sm text-[#087f6d]" role="status">
                {message}
              </p>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 my-9">

              <div className="flex-1 h-px bg-gray-200" />

              <span className="text-sm text-gray-400">
                or
              </span>

              <div className="flex-1 h-px bg-gray-200" />

            </div>

            {/* Google */}
            <button type="button" className="
              w-full
              h-12
              rounded-lg
              border border-[#4cbdb5]
              flex
              items-center
              justify-center
              gap-3
              text-sm
              font-medium
            ">

              <span className="text-lg font-bold">
                G
              </span>

              Continue with Google

            </button>

          </form>
        </div>

      </div>
    </div>
  );
};



export default Signup
