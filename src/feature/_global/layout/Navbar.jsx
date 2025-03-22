import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useProfile from "../hooks/useProfile";
import { useToast } from "../component/Toast/ToastProvider";
const Navbar = () => {
  const profile = useProfile()
  const pathname = window.location.pathname.split("/")[1]
  const navigate = useNavigate()
  const { addToast } = useToast()

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
    addToast('Berhasil keluar', 'success')
  };

  const handleNavigateLogin = () => {
    navigate("/")
  }

  return (
    <div className="navbar bg-darkblue justify-between bg-white  z-10 sticky top-0 shadow-md">
      <div>
        <Link
          to={"/" + pathname}
          className="btn btn-ghost  text-white"
        >
          <img src='/logo_smk_maarif.png' alt="logo" style={{ width: "50px" }} />
        </Link>
      </div>
      {profile && profile.role === 'siswa' &&
        <div>
          <div>
            <Link
              to="/siswa/jadwal" >
              Jadwal
            </Link>

          </div>
        </div>}
      {
        profile ?
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/default-profile.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <div className="flex gap-1 flex-col">
                <p className="font-bold text-md">{profile?.nama}</p>
                <p className="text-md">{profile?.role}</p>
                <p >{profile?.email}</p>
              </div>

              <li className="mt-4 text-center"
                onClick={handleLogout}
              >
                <p
                  className="text-center flex justify-center text-white bg-[#FF5630] hover:bg-[#FF5630]">
                  Keluar
                </p>
              </li>
            </ul>
          </div> :
          <div className="flex gap-2  btn bg-[#6148FF]">
            <MdLogin size={25} style={{ color: "white" }} />
            <button
              onClick={handleNavigateLogin}
              className="text-white font-bold text-sm">Masuk</button>
          </div>
      }
    </div>
  );
};

export default Navbar;
