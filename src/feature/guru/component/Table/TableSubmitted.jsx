import React from 'react';

import { BsCloudDownload } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { checkSubmissionStatus, formatDateToWIB } from '../../../_global/helper/formatter';
import DialogUpdateNilai from '../../container/Tugas/Dialog/DialogUpdateNilai';

const TableSubmitted = ({
    data,
    deadline,
    refetch
}) => {

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Tanggal dan Jam Pengumpulan</th>
                        <th className='text-center'>Nilai</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                // src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                src='/assets/image/default-profile.png'
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"
                                        >
                                            {item?.siswa?.nama}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {item?.siswa?.email}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {formatDateToWIB(item.createdAt)}
                            </td>
                            <td className='text-center'>
                                {item.nilai ? item.nilai : '-'}
                            </td>
                            <td>
                                <span className={` flex items-center gap-2 justify-center text-xs font-medium px-2 py-1 rounded-full ${checkSubmissionStatus(item.createdAt, deadline).color}`}>
                                    <span>{checkSubmissionStatus(item.createdAt, deadline).status}</span>
                                </span>
                            </td>
                            <td className='flex flex-col gap-4'>
                                <div className="flex justify-center gap-2">
                                    <button className="btn btn-sm text-white bg-[#FFB922]">
                                        <FaRegEye size={20} />
                                    </button>
                                    <button className="btn btn-sm text-white bg-[#866FF9]">
                                        <BsCloudDownload size={20} />
                                    </button>
                                </div>
                                <DialogUpdateNilai data={item} refetch={refetch} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableSubmitted