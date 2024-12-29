import React, { useState } from 'react'
import { formatDateTime } from '../../_global/helper/formatter';
import TemplateInfoRow from '../../_global/component/Row/TemplateInfoRow';
import useFetch from '../../_global/hooks/useFetch';
import Content from '../../_global/layout/Content';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const listDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const getDayName = (dateString) => {

    const date = new Date(dateString);
    return listDays[date.getDay()];
};

const JadwalSiswaView = () => {
    const { data, loading, refetch } = useFetch(import.meta.env.VITE_BACKEND + '/siswa/ujian')
    const [selectedSchedule, setSelectedSchedule] = useState("jadwal");
    const navigate = useNavigate()

    const handleScheduleChange = (event) => {
        setSelectedSchedule(event.target.value);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || data.length === 0) {
        return <p>Tidak ada data ujian tersedia</p>;
    }

    const today = new Date().getDay()

    const days = [
        { name: 'Senin' },
        { name: 'Selasa' },
        { name: 'Rabu' },
        { name: 'Kamis' },
        { name: 'Jumat' },
        { name: 'Sabtu' },
    ];

    const ujianByDay = days.map((day) => ({
        ...day,
        exams: data.filter((exam) => getDayName(exam.dateTime) === day.name),
    }));


    return (
        <Content className='min-h-screen'>
            <button
                onClick={() => navigate(-1)}
                className="btn mt-4 btn-primary rounded btn-sm"
            >
                <IoIosArrowBack size={20} />
                Kembali
            </button>
            {/* Kontainer dengan scroll horizontal */}
            <div className="flex w-[90vw] overflow-x-scroll">
                {ujianByDay.map((day) => (
                    <div className="w-[300px] p-4 flex-shrink-0" key={day.name}>
                        <div className={`text-lg font-bold flex justify-center w-full py-2 rounded-lg mb-4 ${day.name === listDays[today] ? 'bg-[#6148FF]  text-white ' : 'border border-[#6148FF] text-[#6148FF]'}`}>
                            {day.name}
                        </div>
                        {day.exams.length > 0 ? (
                            day.exams.map((exam) => (
                                <div className="flex bg-blue-200 mb-2 rounded-lg overflow-hidden" key={exam.id}>
                                    <div className="bg-[#6148FF] w-2" />
                                    <div className="p-4 w-full gap-2 flex flex-col">
                                        <p className="font-semibold">{exam.title}</p>
                                        <span
                                            className={`flex max-w-fit items-center gap-2 justify-center text-xs font-medium px-2 py-1 rounded ${exam.type === 'UTS' ? 'bg-yellow-100' : 'bg-green-100'
                                                }`}
                                        >
                                            <span>{exam.type}</span>
                                        </span>
                                        <TemplateInfoRow
                                            variant='text-sm'
                                            gap={1}
                                            data={[
                                                {
                                                    label: 'Kelas',
                                                    value: exam?.class?.title
                                                },
                                                {
                                                    label: 'Guru',
                                                    value: exam?.class?.user?.nama
                                                },
                                                {
                                                    label: 'Tanggal',
                                                    value: formatDateTime(exam.dateTime)
                                                },
                                                {
                                                    label: 'Waktu',
                                                    value: `${exam.startTime} WIB - ${exam.endTime} WIB`
                                                },

                                            ]}
                                        />


                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Tidak ada ujian</p>
                        )}
                    </div>
                ))}
            </div>
        </Content>
    );
}

export default JadwalSiswaView