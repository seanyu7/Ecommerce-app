import React from 'react'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

function CategoryPage() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex flex-col p-5 '> 
            <h1 className='text-[30px]'>Men's cloth</h1>
            <div className='flex items-center justify-between mt-3'>
                <div>
                    <p>Filter by</p>
                    <select name="" id="">
                        <option selected disabled></option>
                        <option >small</option>
                        <option >Medium</option>
                        <option >Large</option>
                    </select>
                    <select >
                        <option  selected disabled>Color</option>
                        <option >Red</option>
                        <option >Yellow</option>
                        <option >Blue</option>
                    </select>
                </div>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default CategoryPage