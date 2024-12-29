import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import useFetch from '../../_global/hooks/useFetch';

const MainAdminView = () => {
    

    const [state, setState] = React.useState({

        series: [
            {
                name: "Jumlah Guru",
                data: [],
            },
            {
                name: "Jumlah Kelas",
                data: [],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [],
            },
            yaxis: {
                title: {
                    text: 'Berdasarkan data saat ini'
                }
            },
            fill: {
                opacity: 1
            },
        },


    });





    const [pie, setPie] = useState([])

    const { data } = useFetch(import.meta.env.VITE_BACKEND + '/admin/dashboard')


    useEffect(() => {
        if (data) {
            setPie([data.totalGuru, data.totalSiswa])
            setState((prev) => ({
                ...prev,
                series: [
                    {
                        name: "Jumlah Guru",
                        data: data?.mataPelajaran?.map((item) => item?.mataPelajaranGuru?.length) || [0],
                    },
                    {
                        name: "Jumlah Siswa",
                        data: data?.mataPelajaran?.map((item) => item?.mataPelajaranGuru?.reduce((total, item) => total + item?.user?._count?.classes, 0)) || [0],
                    },
                ],
                options: {
                    ...prev.options,
                    xaxis: {
                        ...prev.options.xaxis,
                        categories: data?.mataPelajaran?.map((item) => item?.title)
                    }
                }
            }))
        }
    }, [data])

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex bg-white border border-2 border-[#6148FF] mb-2 rounded-lg overflow-hidden" >
                    <div className="bg-[#6148FF] w-2" />
                    <div className="p-4 w-full gap-2 flex flex-col">
                        <h4 className="text-lg font-semibold">Total Mata Pelajaran</h4>
                        <p className="text-4xl font-bold">{data?.totalMapel || 0}</p>
                    </div>
                </div>
                <div className="flex bg-white border  border-2 border-[#FF5630] mb-2  rounded-lg overflow-hidden" >
                    <div className="bg-[#FF5630] w-2" />
                    <div className="p-4 w-full gap-2 flex flex-col">
                        <h4 className="text-lg font-semibold">Total Kelas</h4>
                        <p className="text-4xl font-bold">{data?.totalKelas || 0}</p>
                    </div>
                </div>
                <div className="flex bg-white border border-2 border-[#22C55E] mb-2 rounded-lg overflow-hidden" >
                    <div className="bg-[#22C55E] w-2" />
                    <div className="p-4 w-full gap-2 flex flex-col">
                        <h4 className="text-lg font-semibold">Total Guru</h4>
                        <p className="text-4xl font-bold">{data?.totalGuru || 0}</p>
                    </div>
                </div>
                <div className="flex bg-white border border-2 border-[#22C55E] mb-2 rounded-lg overflow-hidden" >
                    <div className="bg-[#22C55E] w-2" />
                    <div className="p-4 w-full gap-2 flex flex-col">
                        <h4 className="text-lg font-semibold">Total Siswa</h4>
                        <p className="text-4xl font-bold">{data?.totalSiswa || 0}</p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-4">Guru dan Kelas dalam Mata Pelajaran</h4>
                    <Chart options={state.options} series={state.series} type="bar" height={300} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-4">Jumlah Guru dan Siswa</h4>
                    <Chart options={{ labels: ["Guru", "Siswa"] }} series={pie} type="pie" height={300} />
                </div>
            </div>

        </div>
    );
};

export default MainAdminView;
