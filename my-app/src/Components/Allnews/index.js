import { Component } from "react";
import NewsItem from "../NewsItem"
import "./index.css"
import Header from "../Header";

class Allnews extends Component{
    state = {newsData:[]}

    componentDidMount(){
        this.getNewsData()
    }
// fecthing NewsAPI for real word US news 
    getNewsData = async ()  =>{
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b6000156cfb54fa38c3385a824667cf6")
        const data = await response.json()
        console.log(data.articles)
        this.setState({newsData:data.articles})
    }

    render(){
        const {newsData} = this.state
        console.log(newsData)
        return(
            <>
                <Header/>
            <div className="news-data">
                    {newsData.map(eachItem =>(
                    <NewsItem eachItem={eachItem}/>
                ))}
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

export default Allnews