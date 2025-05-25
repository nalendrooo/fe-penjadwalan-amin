import React from 'react'
import { FaEye, FaPlus } from 'react-icons/fa';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../../_global/hooks/useFetch';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { formatDateToTime } from '../../_global/helper/formatter';
import Search from '../../_global/component/Input/Search';
import DialogTambahKelas from '../container/Kelas/DialogTambahKelas';

const ListKelasAdminView = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const { data, loading, refetch } = useFetch(import.meta.env.VITE_BACKEND + '/admin/kelas')

  const filteredData = data?.filter((item) => item.title.toLowerCase().includes(search?.toLowerCase())) || []

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
              <Search placeholder="Cari nama kelas" />
            </div>
            <DialogTambahKelas refetch={refetch} data={data}/>
          </div>
        </div>
        <div className="overflow-x-auto bg-white mt-4 rounded-lg">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th >Guru</th>
                <th >Email Guru</th>
                <th >Mata Pelajaran</th>
                <th >Waktu</th>
                {/* <th>Status</th> */}
                <th>Dibuat</th>
                <th>Aksi</th>
                {/* <th>Aksi</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50 hover:cursor-pointer' >
                  <th>{index + 1}</th>
                  <td>
                    {item.title}
                  </td>
                  <td >
                    {item?.user?.nama || '-'}
                  </td>
                  <td >
                    {item?.user?.email || '-'}
                  </td>
                  <td >
                    {item?.user?.mataPelajaranGuru?.[0]?.mataPelajaran?.title || '-'}
                  </td>
                  <td>
                    {item?.scheduleClasses?.length > 0 ? item?.scheduleClasses?.[0]?.day?.title : '-'}, {item?.scheduleClasses?.[0]?.startTime} - {item?.scheduleClasses?.[0]?.endTime}
                  </td>
                  {/* <td>
                    <input
                      readOnly
                      type="checkbox"
                      className={`toggle toggle-sm ${item.isActive ? 'toggle-success' : 'toggle-error'}`}
                      checked={item.isActive}
                    />
                  </td> */}
                  <td>
                    {formatDateToTime(item?.createdAt)}
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/admin/kelas/${item.id}`)}
                      className="btn btn-square btn-sm text-white bg-blue-500">
                      <FaEye size={20} />
                    </button>
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

export default ListKelasAdminView