import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-darkblue md:px-[65px]">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost text-md md:text-xl text-white mr-2"
        >
          <img src="/logo_smk_maarif.png" alt="logo" className="w-9" />
        </Link>
      </div>
      <div className="flex gap-2 btn btn-ghost">
        <img src="/icon/fi_log-in.svg" alt="time icon"></img>
        <button className="text-white font-bold text-[17px]">Masuk</button>
      </div>
    </div>
  );
};

export default Navbar;
