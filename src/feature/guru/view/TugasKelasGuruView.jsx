import React, { Fragment } from 'react'
import { IoMdDownload } from 'react-icons/io';
import { IoDocumentAttachOutline } from "react-icons/io5";
import Table from '../component/Table/TableSubmitted';
import { IoIosArrowBack } from "react-icons/io";
import useFetch from '../../_global/hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom';
import { formatDateToTime, formatDateToWIB } from '../../_global/helper/formatter';
import TemplateInfoRow from '../../_global/component/Row/TemplateInfoRow';
import ListTugasSiswa from '../container/Tugas/ListTugasSiswa';
import Content from '../../_global/layout/Content';

const TugasKelasGuruView = () => {
    const { id, id_tugas } = useParams()
    const navigate = useNavigate()
    const { data, loading } = useFetch(import.meta.env.VITE_BACKEND + '/guru/kelas/' + id + '/tugas/' + id_tugas)

    if (loading) {
        return (
            <div className="flex justify-center items-center ">
                <span className="loading loading-dots loading-lg" />
            </div>
        )
    }

    return (
        <Fragment>
            <Content className='bg-[#EBF3FC] min-h-screen'>
                <button
                    onClick={() => navigate(`/guru/kelas/${id}`)}
                    className="btn mt-4 btn-primary rounded btn-sm"
                >
                    <IoIosArrowBack size={20} />
                    Kembali
                </button>
                <div className=" max-w-[90vw] py-4 mx-auto flex flex-col gap-6">
                    <div className="card bg-base-100 shadow-xl bg-gradient-to-l from-indigo-500">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">{data?.title}</h2>
                            <div>
                                <TemplateInfoRow
                                    gap={1}
                                    variant=' text-base'
                                    data={[
                                        {
                                            label: 'Dibuat',
                                            value: formatDateToWIB(data?.createdAt)
                                        },
                                        {
                                            label: 'Batas Pengumpulan',
                                            value: formatDateToWIB(data?.deadlineAt)
                                        }
                                    ]} />

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 bg-white rounded-2xl p-4'>
                        <h2 className='text-xl font-bold'>Deskripsi Tugas</h2>
                        <p>{data?.description}</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-white rounded-2xl p-4'>
                        <h2 className='text-xl font-bold'>Dokumen yang Dilampirkan</h2>
                        {data?.filename && <div className='flex justify-between gap-2 items-center'>
                            <div className='flex gap-2 items-center   rounded w-full px-4 py-2'>
                                <IoDocumentAttachOutline size={40} color='grey' />
                                <div>
                                    <h5 className='text-sm font-semibold'>{data?.original_filename}</h5>
                                    <p className='text-xs'>{(data.size_file / 1048576).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm text-white "
                            >
                                <IoMdDownload />
                                Download Lampiran
                            </button>
                        </div>
                        }

                    </div>

                    <ListTugasSiswa deadline={data?.deadlineAt} />
                </div>
            </Content>
        </Fragment>
    )
}

export default TugasKelasGuruView