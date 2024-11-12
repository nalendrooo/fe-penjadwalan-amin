import { Link } from "react-router-dom";

const CardCourse = () => {
  return (
    <div className="flex justify-center bg-white ">
      <div className="flex w-full justify-center items-center max-w-[1060px] flex-col pt-[26px] pb-[14px] gap-5 container">
        <div className="flex justify-between container px-6">
          <h2 className="text-xl font-bold">Tugas Mendatang</h2>
          <Link
            to="/class"
            className=" font-extrabold text-xs max-w-fit text-darkblue"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="flex flex-wrap space-x-2 justify-center items-center ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-3 mt-4 w-96">
            <h2 className="text-lg font-bold mb-2">Tugas PAI BAB 2</h2>
            <div className="flex items-center mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                📗 Pendidikan Agama Islam
              </span>
            </div>
            <p className="text-gray-500 mb-1">
              Dibuat:{" "}
              <span className="font-semibold">Kamis, 16 Oktober 2024</span>
            </p>
            <p className="text-gray-500 mb-4">
              Batas Pengumpulan:{" "}
              <span className="font-semibold">Kamis, 24 Oktober 2024</span>
            </p>
            <button className="w-full text-white bg-purple-600 hover:bg-purple-700 font-bold py-2 rounded">
              Lihat Detail
            </button>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-3 mt-4 w-96 ">
            <h2 className="text-lg font-bold mb-2">Tugas PAI BAB 2</h2>
            <div className="flex items-center mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                📗 Pendidikan Agama Islam
              </span>
            </div>
            <p className="text-gray-500 mb-1">
              Dibuat:{" "}
              <span className="font-semibold">Kamis, 16 Oktober 2024</span>
            </p>
            <p className="text-gray-500 mb-4">
              Batas Pengumpulan:{" "}
              <span className="font-semibold">Kamis, 24 Oktober 2024</span>
            </p>
            <button className="w-full text-white bg-purple-600 hover:bg-purple-700 font-bold py-2 rounded">
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
