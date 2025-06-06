import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // Cek apakah path-nya adalah /siswa
  const isSiswaPage = location.pathname === "/siswa";

  if (isSiswaPage) {
    return null; // Sembunyikan footer hanya di halaman /siswa
  }

  return (
    <div className="bg-[#6148FF] p-10 flex gap-4 justify-center">
      <div>
        <img src="/logo_smk_maarif.png" alt="logo" style={{ width: "80px" }} />
      </div>
      <div className="text-white">
        <p className="font-bold text-xl">SMK MAARIF NU Margasari</p>
        <p>JL. Raya Selatan Margasari, Desa Margasari</p>
        <p>Kabupaten Tegal, 52463</p>
      </div>
    </div>
  );
};

export default Footer;