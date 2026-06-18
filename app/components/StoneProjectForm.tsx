"use client";

import { useState } from "react";

const StoneProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [stoneType, setStoneType] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(300);

  const percentage = ((budget - 300) / (25000 - 300)) * 100;

  const isFormValid =
    projectTitle.trim() !== "" &&
    stoneType.trim() !== "" &&
    description.trim() !== "";

  return (
    <>
      <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 lg:p-12">
        <h3 className="text-2xl md:text-4xl font-bold text-[#333333] mb-3">
          Find Your Perfect Stone Offcut
        </h3>

        <p className="text-gray-500 text-[15px] mb-8">
          Set your offcut budget and MAI does the rest
        </p>

        <form className="space-y-4">
          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Title */}
            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">
                Project Title
              </label>

              <input
                type="text"
                placeholder="Enter project name"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full px-5 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] text-[14px] placeholder:text-gray-400 transition-colors"
              />
            </div>

            {/* Stone Type */}
            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">
                Stone Type
              </label>

              <input
                type="text"
                value={stoneType}
                onChange={(e) => setStoneType(e.target.value)}
                placeholder="Select stone type"
                className="w-full px-5 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] text-[14px] placeholder:text-gray-400 transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">
              Project Description
            </label>

            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full px-5 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#1F5CAC] text-[14px] resize-none placeholder:text-gray-400 transition-colors"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[17px] font-bold text-gray-900 mb-6">
              Budget Range
            </label>

            <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-3 px-1">
              <span>£300 (minimum)</span>
              <span>£25,000 (maximum)</span>
            </div>

            <div className="relative w-full h-[8px] bg-gray-200 rounded-full mb-8">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-[#083691]"
                style={{
                  width: `${percentage}%`,
                }}
              />

              <input
                type="range"
                min={300}
                max={25000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
              />

              <div
                className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-[#083691] border border-white shadow-md"
                style={{
                  left: `calc(${percentage}% - 9px)`,
                }}
              />
            </div>

            <div className="flex justify-center items-center">
              <span className="text-4xl font-extrabold text-[#083691]">£</span>

              <input
                type="text"
                value={budget}
                onChange={(e) =>
                  setBudget(Number(e.target.value.replace(/\D/g, "")) || 300)
                }
                className="
                  w-40
                  text-center
                  text-4xl
                  font-extrabold
                  bg-transparent
                  outline-none
                  border-b-2
                  border-[#083691]
                  text-[#083691]
                "
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`
    w-full
    py-2.5
    rounded-full
    text-[15px]
    shadow-md
    transition-all
    duration-300
    ${
      isFormValid
        ? "bg-[#1F5CAC] text-white hover:bg-[#174987] cursor-pointer"
        : "bg-gray-200 text-gray-500 cursor-not-allowed"
    }
  `}
          >
            Post Your Stones Project Now
          </button>
        </form>
      </div>
    </>
  );
};

export default StoneProjectForm;
