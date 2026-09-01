import { useState } from "react";
import InputField from "../components/InputField";

function Icon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "password") {
    return (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="10" rx="1" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    );
  }

  if (type === "eye") {
    return (
      <svg {...common}>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (type === "headphones") {
    return (
      <svg
        {...common}
        width="34"
        height="34"
      >
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M4 14v5a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2Z" />
        <path d="M20 14v5a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" />
      </svg>
    );
  }

  return null;
}

function MusicDecoration() {
  return (
    <>
      {/* Top-right pixel grid */}
      <div className="absolute right-7 top-7 grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 bg-black"
          />
        ))}
      </div>

      {/* Bottom-left waveform */}
      <div className="absolute bottom-7 left-7 flex items-end gap-1">
        {[12, 22, 32, 18, 28, 38, 20, 30, 14, 25].map(
          (height, index) => (
            <span
              key={index}
              className="w-1 bg-black"
              style={{ height }}
            />
          )
        )}
      </div>

      {/* Bottom-right record */}
      <div className="absolute bottom-7 right-7 hidden h-16 w-20 items-center justify-center border-2 border-black sm:flex">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black">
          <div className="h-4 w-4 rounded-full border-2 border-white" />
          <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </>
  );
}

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login Data:", formData);

    // Later:
    // loginUser(formData)
  };

  return (
    <main  className="h-screen overflow-hidden bg-black p-3 sm:p-6 lg:p-10">
     <section
  className="
    relative
    mx-auto
    flex
    h-full
    max-w-6xl
    items-center
    justify-center
    overflow-hidden
    rounded-5
    bg-surface
    px-5
    py-6
    sm:px-10
  "
>
        <MusicDecoration />

        <div className="relative z-10 w-full max-w-155">

          {/* Headphone icon */}
          <div className="mb-5 flex justify-center">
            <Icon type="headphones" />
          </div>

          {/* Logo */}
          <h1
            className="
              text-center
              font-pixel
              text-4xl
              font-bold
              uppercase
              leading-none
              tracking-tight
              sm:text-6xl
            "
          >
            MUSIC2D
          </h1>

          {/* Tagline */}
          <p
            className="
              mt-5
              text-center
              font-pixel
              text-xs
              font-bold
              uppercase
              tracking-wide
              sm:text-sm
            "
          >
            ♪ TUNE IN. WELCOME BACK. ♪
          </p>

          {/* Login title */}
          <h2
            className="
              mt-10
              text-center
              font-pixel
              text-2xl
              font-bold
              uppercase
              sm:text-3xl
            "
          >
            LOG IN
          </h2>

          {/* Login form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            {/* Email */}
            <InputField
              label="Email"
              type="email"
              placeholder="youremail@example.com"
              icon="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />

            {/* Password */}
            <InputField
              label="Password"
              type="password"
              placeholder="••••••••••"
              icon="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />

            {/* Forgot password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="
                  text-sm
                  font-semibold
                  underline
                  underline-offset-4
                  hover:no-underline
                "
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="
                h-16
                w-full
                border-2
                border-black
                bg-black
                font-pixel
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white
                transition-all
                hover:bg-surface
                hover:text-black
                active:translate-y-0.5
              "
            >
              LOG IN
            </button>
          </form>

          {/* Divider */}
          <div className="my-9 flex items-center gap-5">
            <div className="h-0.5 flex-1 bg-black" />

            <span className="font-pixel text-sm font-bold">
              OR
            </span>

            <div className="h-0.5 flex-1 bg-black" />
          </div>

          {/* Signup */}
          <div className="text-center">
            <p className="text-sm font-medium sm:text-base">
              Don't have an account?
            </p>

            <button
              type="button"
              className="
                mt-3
                font-pixel
                text-sm
                font-bold
                uppercase
                underline
                underline-offset-4
                hover:no-underline
              "
              onClick={() => {
                // Later navigate to signup
                console.log("Go to signup");
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

