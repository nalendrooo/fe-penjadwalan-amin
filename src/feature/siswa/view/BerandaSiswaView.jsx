import { Fragment } from "react";
import { Link } from "react-router-dom";
import ListMapelContainer from "../container/Mapel/ListMapelContainer";
import ListTugasContainer from "../container/Tugas/ListTugasContainer";
const BerandaSiswaView = () => {
  return (
    <Fragment>
      <div className="mx-auto flex flex-col lg:flex-row bg-darkblue relative">
        <div className="lg:w-[60%] relative">
          <img
            src="/people_dasboard.png"
            className="hidden w-full lg:w-full lg:block"
            alt="People Dashboard"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-darkblue via-white to-transparent opacity-80"></div>
        </div>
        <div className="flex container justify-center p-4 lg:w-[40%] bg-[#6148FF]">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-center font-Montserrat font-bold lg:text-2xl text-white gap-3">
              <h1 className="text-[20px] font-bold">
                Belajar, <br /> Ikuti Ujian, Kerjakan Tugas Lebih Mudah!
              </h1>
            </div>
            <Link
              to="/siswa/kelas"
              className="btn bg-white text-darkblue font-Montserrat font-bold text-base rounded-lg py-2 w-[100%]"
            >
              Lihat Kelas
            </Link>
          </div>
        </div>
      </div>
      <ListMapelContainer />
      <ListTugasContainer />
    </Fragment>
  );
};

export default BerandaSiswaView;
