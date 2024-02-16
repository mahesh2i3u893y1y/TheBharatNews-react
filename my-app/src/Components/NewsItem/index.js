import './index.css'

const NewsItem = (props) =>{
    const {eachItem} = props 
    const {urlToImage,title,discription} = eachItem

    return(
        <div className='main-news-container'>
            <div className='news-container'>
            <img src={urlToImage} alt={title} className='picture'/>
            <div className='body'>
                <h5 className='head'>{title}</h5>
                <p className='para'>{discription}</p>
                 <button className='button'>Read More</button>
                
                
                
            </div>
            </div>
        
        </div>
    )
}

export default NewsItem