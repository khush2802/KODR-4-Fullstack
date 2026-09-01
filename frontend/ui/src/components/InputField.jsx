import { useState } from "react";

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

  if (type === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.8-3.5 3.1-5.5 7-5.5s6.2 2 7 5.5" />
      </svg>
    );
  }

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

  return null;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-bold uppercase tracking-wide"
      >
        {label}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
          <Icon type={icon} />
        </div>

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="
            h-16
            w-full
            border-2
            border-black
            bg-transparent
            pl-14
            pr-14
            text-base
            font-medium
            text-black
            outline-none
            placeholder:text-gray-500
            focus:bg-white
          "
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-black
              transition-transform
              hover:scale-110
            "
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
          >
            <Icon type="eye" />
          </button>
        )}
      </div>
    </div>
  );
}