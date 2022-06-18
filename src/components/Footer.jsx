import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

function Footer() {
  
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white '

    return (
    <div className='flex items-center justify-around p-2'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            {/*Store information */}
            <h1 className='text-[25px]'>noassi</h1>
            <p>このブランドは洗練されたモードな服装と動きやすさを追求したスポーティーさを融合させた新たな価値の提供をお約束します。</p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={socialStyle + 'bg-blue-700'}>
                    <Facebook/>
                </div>
                <div className={socialStyle + 'bg-purple-500'}>
                    <Instagram/>
                </div>
                <div className= {socialStyle + 'bg-blue-400'}>
                    <Twitter/>
                </div>
                <div className={socialStyle + 'bg-red-700'}>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3 '>
                <LocationOnOutlined/>
                <p className='pl-3'>Nerima Tokyo</p>
            </div>
            <div className='flex m-3 '>
                <LocalPhoneOutlined/>
                <p className='pl-3'>+81 12345678</p>
            </div>
            <div className='flex m-3 '>
                <EmailOutlined/>
                <p className='pl-3'>yu.takaki@unknown.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer