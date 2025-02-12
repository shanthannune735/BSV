import { FaTimesCircle, FaCheckCircle, FaClock, FaQuestionCircle } from "react-icons/fa";

const MedicalRepDashboard = () => {
  // Sample Data
  const doctors = [
    { name: "Doctor name", status: "not_completed" },
    { name: "Doctor name", status: "completed" },
    { name: "Doctor name", status: "in_progress" },
    { name: "Doctor name", status: "completed" },
    { name: "Doctor name", status: "not_completed" },
    { name: "Doctor name", status: "yet_to_fill" },
    { name: "Doctor name", status: "yet_to_fill" },
    { name: "Doctor name", status: "yet_to_fill" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-4 rounded-xl shadow-lg">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <img src="/mankind.png" alt="Mankind Logo" className="h-10" />
        <img src="/bsv.jpg" alt="BSV Logo" className="h-10" />
        </div>

        <div className="grid grid-cols-2 gap-2 bg-blue-500 text-white p-3 rounded-md font-bold text-center">
          <span>Medical rep name</span>
          <span>Time</span>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-gray-300 text-gray-900 p-2 rounded-md font-bold text-center mt-3">
          <span>Total count</span>
          <span>Completed</span>
        </div>

        {/* Doctor List */}
        <div className="mt-3">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex justify-between items-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium mt-2">
              <span>{doctor.name}</span>
              {/* Status Icon */}
              {doctor.status === "completed" && <FaCheckCircle className="text-green-400 text-lg" />}
              {doctor.status === "in_progress" && <FaClock className="text-orange-400 text-lg" />}
              {doctor.status === "not_completed" && <FaTimesCircle className="text-red-500 text-lg" />}
              {doctor.status === "yet_to_fill" && <span className="text-white text-sm">Yet to fill</span>}
            </div>
          ))}
        </div>

        {/* Help Button */}
        <div className="flex justify-center mt-4">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition hover:bg-blue-700">
            <FaQuestionCircle className="mr-2" /> Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalRepDashboard;
