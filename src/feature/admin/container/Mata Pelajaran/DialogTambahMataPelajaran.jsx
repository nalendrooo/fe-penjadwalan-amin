import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { useToast } from '../../../_global/component/Toast/ToastProvider';

const DialogTambahMataPelajaran = ({
    refetch
}) => {
    const [open, setOpen] = useState(false);
    const { addToast } = useToast()

    const [state, setState] = useState({
        title: "",
    });

    const disabled = !state.title

    const handleSubmit = () => {
        axios.post(import.meta.env.VITE_BACKEND + `/mata-pelajaran`, state)
            .then((res) => {
                setOpen(false)
                setState({ title: "" })
                refetch()
                addToast('Mata Pelajaran berhasil ditambahkan', 'success')
            })
            .catch((err) => {
                console.log(err);
                addToast('Mata Pelajaran gagal ditambahkan', 'error')
            })
    }



    return (
        <Fragment>
            <button
                onClick={() => setOpen(true)}
                className="btn btn-primary text-white "
            >
                <FaPlus />
                Tambah Mata Pelajaran
            </button>

            <dialog open={open} className="modal " onClose={() => setOpen(false)}>
                <div className="modal-box ">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center text-primary">
                        Tambah Mata Pelajaran
                    </h3>
                    <div className='flex gap-2 flex-col'>

                        <label className="form-control w-full" >
                            <div className="label">
                                <span className="label-text font-bold">Nama Mata Pelajaran</span>
                            </div>
                            <input
                                value={state.title}
                                type="text"
                                onChange={(e) => setState({ ...state, title: e.target.value })}
                                placeholder="Nama Mata Pelajaran"
                                className="input input-md input-bordered w-full "
                            />
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
        </Fragment>
    )
}

export default DialogTambahMataPelajaran