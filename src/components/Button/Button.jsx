import * as React from "react";

export function Button({ children, variant = "primary", onClick }) {
  const baseStyles = "gap-2.5 self-stretch px-8 py-3.5 my-auto rounded-xl border border-solid";
  const variants = {
    primary: "bg-lime-300 border-black text-indigo-950",
    secondary: "border-indigo-950 text-indigo-950"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      tabIndex={0}
    >
      {children}
    </button>
  );
}