import { Fragment } from 'react';
import { FaBook } from 'react-icons/fa';
import { GrDashboard } from 'react-icons/gr';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { MdSettingsInputComponent } from 'react-icons/md';
// import { PiBatteryChargingVerticalDuotone } from 'react-icons/pi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '../../_global/component/Toast/ToastProvider';

const AdminLayoutSidebar = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { addToast } = useToast()
    const menuItems = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <GrDashboard />, // Ganti dengan ikon sesuai library yang digunakan
            path: '/admin',
        },
        {
            key: 'Mata Pelajaran',
            label: 'Mata Pelajaran',
            icon: <FaBook />, // Ikon untuk menu Users
            path: '/admin/mata-pelajaran',

        },
        {
            key: 'Siswa',
            label: 'Siswa',
            icon: <IoPeopleCircleOutline />, // Ikon untuk menu Users
            path: '/admin/siswa',

        },
        {
            key: 'Guru',
            label: 'Guru',
            icon: <IoPeopleCircleOutline />, // Ikon untuk menu Users
            path: '/admin/guru',

        },
        {
            key: 'Kelas',
            label: 'Kelas',
            icon: <MdSettingsInputComponent />, // Ikon untuk Settings
            path: '/admin/kelas',

        },
        // {
        //     key: 'Detail Kelas',
        //     label: 'Detail Kelas',
        //     icon: <MdSettingsInputComponent />, // Ikon untuk Settings
        //     path: '/admin/data-kelas',

        // },

    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/")
        addToast('Berhasil keluar', 'success')
    };


    return (
        <div className="flex h-screen">
            <aside
                id="sidebar-multi-level-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen bg-[#6148FF] dark:bg-[#6148FF]"
                aria-label="Sidebar"
            >
                <div className='flex justify-center my-4'>
                    <img src='/logo_smk_maarif.png' alt="logo" width={100} height={100} />
                </div>
                <div className=" h-[calc(100vh-150px)] flex flex-col p-2 justify-between overflow-y-auto" >
                    <ul className="space-y-2 font-medium ">
                        {menuItems.map((menuItem, index) => (
                            <Fragment key={index}>
                                <li>
                                    <Link to={menuItem.path} key={index}>

                                        <a
                                            className={
                                                "flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-white dark:hover:bg-white dark:hover:text-[#6148FF]  group dark:hover:opacity-80" +
                                                (menuItem.path === location.pathname ? " bg-white dark:bg-white dark:text-[#6148FF]" : "")
                                            }
                                        >
                                            {menuItem.icon && menuItem.icon}
                                            <span className="ms-3">{menuItem.label}</span>
                                        </a>

                                    </Link>
                                </li>
                            </Fragment>
                        ))}
                    </ul>
                    <button
                        onClick={handleLogout}
                        className="text-center font-medium  bg-[#FF5630] text-white py-2 px-4 rounded hover:bg-[#FF5630]">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 ml-64">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">{menuItems.find(item => item.path === location.pathname)?.label}</h1>
                    </div>
                </header>
                <main className="p-4 bg-[#EBF3FC] ">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayoutSidebar;
