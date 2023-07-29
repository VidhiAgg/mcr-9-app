import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';
import"../HomePage/homepage.css"
import "./ctegoryWiseVideo.css"
const CategoryWiseVideo = () => {
    const {category} = useParams();
    const {selectedCatVideo, dispatch} = useContext(AppContext);
    useEffect(()=>{
            dispatch({type:"_LOAD_CATEGORY_VIDEO_", payload:category})
    },[category,dispatch])
  return (
    <div className='main-container'>
<div className="header">
  <h1>{category}</h1>

</div>
    <div className="video-content-container">
{selectedCatVideo?.map(video=>(
    <div key ={video._id} className="meta-data-container">
      <div className="image-container">
    <img className="image-bg"src={video.thumbnail} alt={video.title} />
      </div>
      <div className="detail-container">
       <div>
        <img className='video-img-container' src="https://picsum.photos/40/40" alt="img" />
       </div>
       <div className="details">
        <h3 className='video-title'>{video.title}</h3>
        <h4 className='video-category'>{category}</h4>
        <p className='p-font-style'>{video.views} views | {video.creator}</p>
       </div>
      </div>
    </div>
))}
    </div>
    </div>
  )
}

export default CategoryWiseVideo