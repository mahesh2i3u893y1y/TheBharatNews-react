import "./index.css"

const BlogItem = (props) =>{
    const {BlogItem} = props 
    const {author,description,title,url,urlToImage} = BlogItem

    return(
        <div className="container">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{author}</p>
                <img src={url} alt={title}/>
                <img src={urlToImage} alt={title}/>
            </div>
    )
}

export default BlogItem