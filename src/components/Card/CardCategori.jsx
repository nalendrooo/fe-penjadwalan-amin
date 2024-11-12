import { Link } from "react-router-dom";

const CardCategori = () => {
  return (
    <div className="flex justify-center bg-[#EBF3FC] ">
      <div className="flex flex-col justify-center items-center w-full p-2 px-3 lg:px-0">
        <div className="flex flex-grow justify-between items-center mt-[30px] w-full max-w-[1000px]">
          <h2 className="text-xl font-bold">Mapel Hari Ini</h2>
          <Link
            to="/class"
            className=" font-extrabold text-xs max-w-fit text-darkblue"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-2 ">
          <div className="bg-white shadow-md rounded-lg p-12 w-96 text-gray-800 mt-4">
            <h2 className="text-lg font-bold mb-2">IPA</h2>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <div className="mr-2">
                <span>Anwar Fuadi, S.Pd</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="mr-2">
                <span>Hari Ini • 08.00–10.00</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 mb-2">
              Ikuti Kelas
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-12 w-96 text-gray-800 mt-4 ">
            <h2 className="text-lg font-bold mb-2">IPA</h2>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <div className="mr-2">
                <span>Anwar Fuadi, S.Pd</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="mr-2">
                <span>Hari Ini • 08.00–10.00</span>
              </div>
            </div>
            <button className="w-full bg-gray-400 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Ikuti Kelas
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-12 w-96 text-gray-800 mt-4 ">
            <h2 className="text-lg font-bold mb-2">IPA</h2>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <div className="mr-2">
                <span>Anwar Fuadi, S.Pd</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="mr-2">
                <span>Hari Ini • 08.00–10.00</span>
              </div>
            </div>
            <button className="w-full bg-gray-400 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Ikuti Kelas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategori;
