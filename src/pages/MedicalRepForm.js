import { useState } from "react";
import { motion } from "framer-motion";
import { FaUpload, FaQuestionCircle } from "react-icons/fa";

const MedicalRepForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white w-full max-w-md p-4 rounded-xl shadow-lg overflow-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between bg-blue-500 text-white p-3 rounded-md">
          <span className="font-bold">Medical Rep Name</span>
          <span className="font-bold">Time</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="Doctor Name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Reason" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="Specialty" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Pin Code" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="Add Line 1" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Add Line 2" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input type="text" placeholder="City" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

          {/* Upload Buttons */}
          <div className="flex justify-between">
            <button className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium transition hover:bg-blue-600 w-[150px]">
              <FaUpload className="mr-2" /> Visiting Card
            </button>
            <button className="flex items-center justify-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium transition hover:bg-blue-600 w-[150px]">
              <FaUpload className="mr-2" /> Rx Pad
            </button>

          </div>
          <div className="flex justify-center">
            <button className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium transition hover:bg-blue-600 w-[150px]">
                <FaUpload className="mr-2" /> Sign Board
            </button>
         </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="checkbox" className="mr-2" />
            <label htmlFor="checkbox" className="text-gray-700">Check Boxes</label>
          </div>

          {/* Submit Button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-bold py-2 rounded-md transition hover:bg-blue-700 w-full disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "In Progress..." : "SUBMIT"}
          </motion.button>
        </form>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3">
          {/* <button className="text-red-500 text-xl">❌</button> */}
          {/* <button className="text-blue-500 text-xl"><FaQuestionCircle /></button> */}
        </div>
      </div>
    </div>
  );
};

export default MedicalRepForm;
