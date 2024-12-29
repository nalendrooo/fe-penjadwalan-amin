import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../../_global/hooks/useFetch';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import Search from '../../_global/component/Input/Search';
import DialogTambahMataPelajaran from '../container/Mata Pelajaran/DialogTambahMataPelajaran';
import { useToast } from '../../_global/component/Toast/ToastProvider';
import axios from 'axios';
import DialogUpdateMataPelajaran from '../container/Mata Pelajaran/DialogUpdateMataPelajaran';

const ListMataPelajaranAdminView = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { addToast } = useToast()
  const search = searchParams.get('search') || ''
  const { data, loading, refetch } = useFetch(import.meta.env.VITE_BACKEND + '/mata-pelajaran/statistik')


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND}/mata-pelajaran/${id}`)
      refetch()
      addToast('Mata Pelajaran berhasil dihapus', 'success')
    } catch (error) {
      console.error(error)
      addToast('Mata Pelajaran gagal dihapus', 'error')
    }
  }


  const filteredData = data?.filter((item) => item.title.toLowerCase().includes(search?.toLowerCase())) || []

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg" />
      </div>
    )
  }

  return (
    <div className='min-h-screen d-flex justify-center'>
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
              <Search placeholder="Cari Mata Pelajaran" />
            </div>
            <DialogTambahMataPelajaran refetch={refetch} />
          </div>
        </div>
        <div className="overflow-x-auto bg-white mt-4 rounded-lg">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th className='text-center'>Jumlah Guru</th>
                <th className='text-center'>Jumlah Kelas</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50 hover:cursor-pointer' >
                  <th>{index + 1}</th>
                  <td>
                    {item.title}
                  </td>
                  <td className='text-center'>
                    {item?.mataPelajaranGuru?.length}
                  </td>
                  <td className='text-center'>
                    {item?.mataPelajaranGuru?.reduce((total, mapel) => total + mapel?.user?._count?.classes, 0)}
                  </td>
                  <td>
                    {/* <input
                      type="checkbox"
                      className={`toggle toggle-sm ${item.isActive ? 'toggle-success' : 'toggle-error'}`}
                      checked={item.isActive}
                    /> */}
                    {item.isActive ? 'Aktif' : 'Tidak Aktif'}
                  </td>
                  <td>
                    <div className='flex gap-2'>
                      <DialogUpdateMataPelajaran data={item} refetch={refetch}/>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={item.mataPelajaranGuru?.length > 0}
                        className="btn btn-square btn-sm text-white bg-red-500">
                        <MdDeleteOutline size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListMataPelajaranAdminView