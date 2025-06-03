import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#6148FF] p-10 flex gap-4 justify-center'>
            <div>
                <img src='/logo_smk_maarif.png' alt="logo" style={{ width: "80px" }} />
            </div>
            <div className='text-white'>
                <p className='font-bold text-xl'>SMK MAARIF NU Margasari</p>
                <p>JL. Raya Selatan Margasari, Desa Margasari</p>
                <p>Kabupaten Tegal, 52463</p>
            </div>

        </div>
    )
}

export default Footer