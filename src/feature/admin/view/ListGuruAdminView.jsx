import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetch from '../../_global/hooks/useFetch';
import Search from '../../_global/component/Input/Search';
import DialogTambahAkunGuru from '../container/Guru/DialogTambahAkunGuru';

const ListGuruAdminView = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const { data, loading, refetch } = useFetch(import.meta.env.VITE_BACKEND + '/admin/guru')

  const filteredData = data?.filter((item) => item.nama.toLowerCase().includes(search?.toLowerCase())) || []

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg" />
      </div>
    )
  }

  return (
    <div className='bg-[#EBF3FC] min-h-screen d-flex justify-center'>
      {/* <div className="card-actions justify-start mx-16">
        <button
          onClick={() => navigate('/guru')}
          className="btn mt-4 btn-ghost rounded-lg btn-sm">
          <IoIosArrowBack size={20} />
          Kembali
        </button>
      </div> */}
      <div className=" max-w-[90vw] mx-auto">
        <div className="flex flex-col justify-center items-center  p-2 px-3 lg:px-0">
          <div className="flex flex-grow justify-between items-center mt-[30px] w-full ">
            <div className="relative flex flex-row">
              <Search placeholder="Cari nama guru" />
            </div>
            <DialogTambahAkunGuru refetch={refetch} />
          </div>
        </div>
        <div className="overflow-x-auto bg-white mt-4 rounded-lg">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                {/* <th>Profile</th> */}
                <th>Nama</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Mata Pelajaran</th>
                {/* <th>Aksi</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((user, index) => (
                <tr key={index} className='hover:bg-gray-50 hover:cursor-pointer' onClick={() => navigate(`/admin/guru/${user.id}`)}>
                  <th>{index + 1}</th>
                  {/* <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td> */}
                  <td>
                    {user.nama}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.telephone}
                  </td>
                  <td>
                    {user?.mataPelajaranGuru?.[0]?.mataPelajaran?.title || '-'}
                  </td>
                  {/* <td>
                    <button className="btn btn-square btn-sm text-white bg-red-500">
                      <MdDeleteOutline size={20} />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListGuruAdminView