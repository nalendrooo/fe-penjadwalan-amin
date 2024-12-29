import React from 'react';
import { BsCloudDownload } from "react-icons/bs";
import { useSearchParams } from 'react-router-dom';

const TabContentMateri = ({
    data,
    loading
}) => {
   
    const [searchParams] = useSearchParams()

    const search = searchParams.get('search') || ''

    const filteredData = data?.filter((item) => item.title.toLowerCase().includes(search?.toLowerCase())) || []

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg" />
            </div>
        )
    }

    return (
        <div className="flex py-4 grid grid-cols-4 gap-4 flex-wrap justify-center items-start space-x-2">
            {
                filteredData?.map((item, index) => (
                    <div className="card card-compact bg-base-100  shadow-xl" key={index}>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p className='text-sm text-base line-clamp-3'>{item.description}</p>
                            <p>{item.type_file.split('/').pop().toUpperCase()}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-circle">
                                    <BsCloudDownload size={20} />
                                </button>
                            </div>
                        </div>
                    </div>))
            }
        </div>
    )
}

export default TabContentMateri