import React from 'react'
import CategoryList from './Components/CategoryList'

const Category = () => {
  return (
    <div>
      <h1 className='text-xl text-center font-bold my-5 mt-20'>Choose the category and test and your knowledge</h1>
      <CategoryList/>
    </div>
  )
}

export default Category