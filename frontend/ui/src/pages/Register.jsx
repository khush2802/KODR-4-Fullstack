import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

function HeadphonesIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M4 14v5a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2Z" />
      <path d="M20 14v5a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

function Decorations() {
  return (
    <>
      {/* Top right pixels */}
      <div className="absolute right-6 top-6 hidden grid-cols-3 gap-1 sm:grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 bg-black"
          />
        ))}
      </div>

      {/* Bottom left waveform */}
      <div className="absolute bottom-6 left-6 hidden items-end gap-0.75 sm:flex">
        {[10, 17, 25, 14, 21, 30, 17, 25, 12, 20].map(
          (height, index) => (
            <span
              key={index}
              className="w-0.75 bg-black"
              style={{ height }}
            />
          )
        )}
      </div>

      {/* Bottom right record */}
      <div className="absolute bottom-6 right-6 hidden h-14 w-16 items-center justify-center border-2 border-black lg:flex">
        <div className="relative h-10 w-10 rounded-full bg-black">
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>
      </div>
    </>
  );
}

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Register:", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <main className="min-h-screen bg-black p-3 sm:p-5">
      <section
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-24px)]
          max-w-6xl
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          bg-surface
          px-5
          py-5
          sm:min-h-[calc(100vh-40px)]
          sm:px-8
          lg:px-12
        "
      >
        <Decorations />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-140">

          {/* Logo */}
          <div className="flex justify-center">
            <HeadphonesIcon />
          </div>

          <h1
            className="
              mt-1
              text-center
              font-pixel
              text-3xl
              font-bold
              uppercase
              leading-none
              text-black
              sm:text-4xl
              lg:text-5xl
            "
          >
            MUSIC2D
          </h1>

          {/* Tagline */}
          <p
            className="
              mt-2
              text-center
              font-pixel
              text-2.5
              font-bold
              uppercase
              tracking-wide
              sm:text-xs
            "
          >
            ♪ TUNE IN. SIGN UP. PLAY ON. ♪
          </p>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-center
              font-pixel
              text-lg
              font-bold
              uppercase
              sm:text-xl
            "
          >
            CREATE ACCOUNT
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-3"
          >
            <InputField
              label="Username"
              name="username"
              type="text"
              placeholder="yourusername"
              icon="user"
              value={formData.username}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="youremail@example.com"
              icon="email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••"
                icon="password"
                value={formData.password}
                onChange={handleChange}
              />

              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                icon="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Error */}
            {error && (
              <div className="border-2 border-black bg-black px-3 py-2 text-center text-xs font-bold text-white">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="
                h-12
                w-full
                border-2
                border-black
                bg-black
                font-pixel
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-white
                transition-all
                hover:bg-surface
                hover:text-black
                active:translate-y-px
                sm:h-14
                sm:text-sm
              "
            >
              SIGN UP
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-4">
            <div className="h-0.5 flex-1 bg-black" />

            <span className="font-pixel text-xs font-bold">
              OR
            </span>

            <div className="h-0.5 flex-1 bg-black" />
          </div>

          {/* Login */}
          <div className="text-center">
            <p className="text-xs font-medium sm:text-sm">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="
                mt-1
                inline-block
                font-pixel
                text-xs
                font-bold
                uppercase
                underline
                underline-offset-4
                hover:no-underline
                sm:text-sm
              "
            >
              LOG IN
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

