import { Component } from "react"
import Header from "../Header"
import {Link} from "react-router-dom"
import newsArticles from "../../NewsArticles.json"
import { GrView } from "react-icons/gr";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";

import "./index.css"
 
class Home extends Component{
    state = {isLike:false}

    componentDidMount(){
        this.getNewsData()
    }

//getting all news articles from local json file
    getNewsArticles = () =>{
        const result = newsArticles.filter(eachItem=>(
            eachItem.category === "news"
        ))
        return result
    }
// filtering the political news articles     
    getPoliticsArticles = () =>{
        const result = newsArticles.filter(eachItem=>(
            eachItem.category === "politics"
        ))
        return result
    }
// filtering the opinion news articles      
    getOpinionArticles = () =>{
        const result = newsArticles.filter(eachItem=>(
            eachItem.category === "opinion"
        ))
        return result
    }
// filtering the sports news articles      
    getSportsArticles = () =>{
        const result = newsArticles.filter(eachItem=>(
            eachItem.category === "sports"
        ))
        return result
    }
// filtering the entertainment news articles      
    getMoviesArticles = () =>{
        const result = newsArticles.filter(eachItem=>(
            eachItem.category === "movies"
        ))
        return result
    }

    onClickLike = () =>{
        this.setState(prevState => ({isLike:!prevState.isLike}))
    }

    getNewsData = async ()  =>{
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b6000156cfb54fa38c3385a824667cf6")
        const data = await response.json()
        console.log(data.articles)

        this.setState({newsData:data.articles})
    }

    render(){
        //const {newsData} = this.state
        //console.log(newsData)
        const {isLike} = this.state
        console.log(isLike)
        const isLikedClicked = isLike ? "is-like":"not-liked"
        console.log(isLikedClicked)
        const newsResults = this.getNewsArticles()
        console.log(newsResults)
        const opinionResults = this.getOpinionArticles()
        console.log(opinionResults)
        const politicsResults = this.getPoliticsArticles()
        console.log(politicsResults)
        const sportsResults = this.getSportsArticles()
        console.log(sportsResults)
        const moviesResults = this.getMoviesArticles()
        console.log(moviesResults)
        return(
        <>
            <Header/>
            <div className="main">
            <h1 className="heading">Genuine Journalism is expensive</h1>
            <img src="https://res.cloudinary.com/dj4bfvysr/image/upload/v1708080116/pexels-daria-obymaha-1684916_enyjqq.jpg" alt="home" className="home-image"/>
            <p className="Breaking-news">Breaking News: President-elect to be announced</p>
            </div>
            <h5 className="articles-head">Some of our articles</h5>
            <h4 className="category">News</h4>
            <div className="article-container">
                {newsResults.map(eachItem=>{
                    return(
                        <div className="single-container">
                            <img src={eachItem.image} alt={eachItem.title} className="article-logo"/>
                            <h5>{eachItem.title}</h5>
                            <hr/>
                            <div className="icon-container">
                                <GrView className="icon-styled"/>
                                <div className="icon-inner-container">
                                <FaRegComment className="icon-st"/>
                                <SlLike className={isLikedClicked} onClick={this.onClickLike} id={eachItem.id}/>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <h4 className="category">Politics</h4>
            <div className="article-container">
                {politicsResults.map(eachItem=>{
                    return(
                        <div className="single-container">
                            <img src={eachItem.image} alt={eachItem.title} className="article-logo"/>
                            <h5>{eachItem.title}</h5>
                            <hr/>
                            <div className="icon-container">
                                <GrView className="icon-styled"/>
                                <div className="icon-inner-container">
                                <FaRegComment className="icon-st"/>
                                <SlLike  onClick={this.onClickLike}  className={isLikedClicked} id={eachItem.id}/>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
            <h4 className="category">Opinion</h4>
            <div className="article-container">
                {opinionResults.map(eachItem=>{
                    return(
                        <div className="single-container">
                            <img src={eachItem.image} alt={eachItem.title} className="article-logo"/>
                            <h5>{eachItem.title}</h5>
                            <hr/>
                            <div className="icon-container">
                                <GrView className="icon-styled"/>
                                <div className="icon-inner-container">
                                <FaRegComment className="icon-st"/>
                                <SlLike  className={isLikedClicked} onClick={this.onClickLike}/>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
            <h4 className="category">Sports</h4>
            <div className="article-container">
                {sportsResults.map(eachItem=>{
                    return(
                        <div className="single-container">
                            <img src={eachItem.image} alt={eachItem.title}  className="article-logo"/>
                            <h5>{eachItem.title}</h5>
                            <hr/>
                            <div className="icon-container">
                                <GrView className="icon-styled"/>
                                <div className="icon-inner-container">
                                <FaRegComment className="icon-st"/>
                                <SlLike  onClick={this.onClickLike} className={isLikedClicked}/>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
            <h4 className="category">Entertinement</h4>
            <div className="article-container">
                {moviesResults.map(eachItem=>{
                    return(
                        <div className="single-container">
                            <img src={eachItem.image} alt={eachItem.title} className="article-logo"/>
                            <h5>{eachItem.title}</h5>
                            <hr/>
                            <div className="icon-container">
                                <GrView className="icon-styled"/>
                                <div className="icon-inner-container">
                                <FaRegComment className="icon-st"/>
                                <SlLike  onClick={this.onClickLike} className={isLikedClicked}/>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

           <div className="button-container">
          <Link to="/allnews"> <button className="view-all-button" onClick={this.redirectToViews}>View All
           </button></Link>
           </div>
            <div className="bottom-part">
                <div className="">
                    <h1 className="subscribe-heading">Subscribe to our news Letter</h1>
                    <input type="email" className="eamil" placeholder="Enter your Email here*"/>
                    <button className="subscribe-button">Subscribe</button>
                </div>
                <ul className="options">
                    <li className="elements">HOME</li>
                    <li className="elements">CONTACT</li>
                    <li className="elements">ABOUT US</li>
                    <li className="elements">ADVERTISE</li>
                    <li className="elements">ALL NEWS</li>
                </ul>
            </div>
        </>
        )
    }
}
   


export default Home