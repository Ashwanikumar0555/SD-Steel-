import React from "react"
import { FaIndustry } from "react-icons/fa" // Steel/industrial-themed icon

export default function Logo({ variant = "light" }) {
  return (
    <div className="flex items-center space-x-2">
      <FaIndustry
        className={`text-3xl ${variant === "light" ? "text-white" : "text-black"}`}
      />
      <span
        className={`text-xl font-bold tracking-wide ${
          variant === "light" ? "text-white" : "text-black"
        }`}
      >
        Shri Durga Steel
      </span>
    </div>
  )
}
