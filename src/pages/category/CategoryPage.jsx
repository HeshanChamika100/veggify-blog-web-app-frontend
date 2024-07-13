import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios'
import Card from '../../components/Card';

const CategoryPage = () => {
   const {category} = useParams();
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(`https://veggify-blog-web-app-backend.vercel.app/api/categories/${category}`)
        setItems(response.data)
      } catch (error) {
        setError(error.message || "Error loading category")
      }
    }
    fetchCategoryData()
   }, [category])

  return (
    <div className='px-6 lg:px-12 py-20'>
      <h1 className='text-center capitalize text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>{category}</h1>
      <CategoryWrapper/>

      <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8'>
        {
          items && items?.map(item => (
            <Card item={item} key={item._id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryPage