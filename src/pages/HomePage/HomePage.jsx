
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import "./homepage.css"
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const {availCategory} = useContext(AppContext);
  const navigate  = useNavigate();
  return (
    <div className='main-container'>
<div className="header">
  <h1>Categories</h1>

</div>
<div className="content-container">
{
  availCategory?.map(category=>(
    <div key ={category._id} className="meta-data-container" 
    onClick={()=>navigate(`/category/${category.category}`)}>
      <div className="image-container">
    <img className="image-bg" src={category.thumbnail} alt={category.category} />
      </div>
      <div className="name-container">
        <h2>{category.category}</h2>
      </div>
    </div>
  ))
}
</div>
    </div>
  )
}

export default HomePage