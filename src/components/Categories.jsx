import React from 'react'
import {ApiCategories} from '../apifolder/CategoryApi'
import Hagechabin from './Hagechabin'

function Categories() {
  return (
    <div className="flex justify-between items-center p-5">
        {
            ApiCategories.map((category,index)=>{
                return<Hagechabin item ={category} key={index}/>
            })
        }
    </div>
  )
}

export default Categories;