import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { useToast } from '../../../_global/component/Toast/ToastProvider';
import useFetch from '../../../_global/hooks/useFetch';

const DialogTambahKelas = ({
    refetch
}) => {
    const [open, setOpen] = useState(false);
    const { addToast } = useToast()

    const [state, setState] = useState({
        title: "",
        description: "",
    });

    const [jadwal, setJadwal] = useState({
        dayId: 1,
        startTime: "",
        endTime: "",
    });

    const [guru, setGuru] = useState(0);

    const disabled = !state.title || !state.description || !guru || !jadwal.dayId || !jadwal.startTime || !jadwal.endTime

    const handleSubmit = () => {
        axios.post(import.meta.env.VITE_BACKEND + `/admin/kelas`, state)
            .then((res) => {
                const id = res?.data?.data?.id
                axios.patch(import.meta.env.VITE_BACKEND + `/admin/kelas/${id}/guru`, { guruId: guru }).then(() => {
                    setState({ title: "", description: "" })
                    addToast('Kelas berhasil dibuat', 'success')
                }).catch((err) => {
                    console.log(err)
                })

                axios.post(import.meta.env.VITE_BACKEND + `/admin/kelas/${id}/jadwal`, jadwal).then(() => {
                    setOpen(false)
                    setJadwal({ dayId: 1, startTime: "", endTime: "" })
                    refetch()
                    addToast('Kelas berhasil dijadwalkan', 'success')
                }).catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err);
                addToast('Kelas gagal dibuat', 'error')
            })
    }

    const { data: listGuru } = useFetch(import.meta.env.VITE_BACKEND + '/admin/guru')
    const { data: listHari } = useFetch(import.meta.env.VITE_BACKEND + '/hari')


    return (
        <Fragment>
            <button
                onClick={() => setOpen(true)}
                className="btn btn-primary text-white "
            >
                <FaPlus />
                Tambah Kelas Baru
            </button>

            <dialog open={open} className="modal " onClose={() => setOpen(false)}>
                <div className="modal-box ">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center text-primary">
                        Tambah Kelas Baru
                    </h3>
                    <div className='flex gap-2 flex-col'>

                        <label className="form-control w-full" >
                            <div className="label">
                                <span className="label-text font-bold">Nama Kelas</span>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => setState({ ...state, title: e.target.value })}
                                placeholder="Nama Kelas"
                                className="input input-md input-bordered w-full "
                            />
                        </label>

                        <label className="form-control w-full" >
                            <div className="label">
                                <span className="label-text font-bold">Nama Guru</span>
                            </div>
                            <select
                                className="select select-bordered w-full "
                                value={state.mapel}
                                onChange={(e) => setGuru(Number(e.target.value))}
                            >
                                <option disabled selected value="">
                                    Pilih Nama Guru
                                </option>
                                {listGuru?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama} - {item.email}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="form-control w-full" >
                            <div className="label">
                                <span className="label-text font-bold">Hari</span>
                            </div>
                            <select
                                className="select select-bordered w-full "
                                value={jadwal.dayId}
                                onChange={(e) => setJadwal(prev => ({ ...prev, dayId: Number(e.target.value) }))}
                            >
                                <option disabled selected value="">
                                    Pilih Hari
                                </option>
                                {listHari?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.title}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="form-control w-full" >
                            <div className="label">
                                <span className="label-text font-bold">Jam</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="time"
                                    onChange={(e) => setJadwal(prev => ({ ...prev, startTime: e.target.value }))}
                                    placeholder="Mulai"
                                    className="input input-md input-bordered w-full "
                                />
                                -
                                <input
                                    type="time"
                                    onChange={(e) => setJadwal(prev => ({ ...prev, endTime: e.target.value }))}
                                    placeholder="Selesai"
                                    className="input input-md input-bordered w-full "
                                />
                            </div>
                        </label>

                        <label className="form-control w-full" >
                            <div className="label">
                                <span className="label-text font-bold">Deskripsi</span>
                            </div>
                            <textarea
                                onChange={(e) => setState({ ...state, description: e.target.value })}
                                placeholder="Deskripsi"
                                className="textarea textarea-bordered textarea-md w-full " />
                        </label>

                        <div className="modal-action">
                            <button
                                onClick={() => {
                                    setOpen(false)
                                }}
                                className="btn btn-neutral w-1/2 text-white">
                                Kembali
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={disabled}
                                className="btn btn-contained btn-primary w-1/2 text-white">
                                Simpan
                            </button>
                        </div>
                    </div>

                </div>
            </dialog>
        </Fragment >
    )
}

export default DialogTambahKelas