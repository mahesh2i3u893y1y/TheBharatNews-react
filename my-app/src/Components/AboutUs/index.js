import Header from "../Header";
import './index.css'
import staff from "../../NewsRecords.json"

const AboutUs = () =>(
    <>
        <Header/>
        <div className="container">
            <img src="https://res.cloudinary.com/dj4bfvysr/image/upload/v1708080210/pexels-fauxels-3183150_tydhgo.jpg" className="about-us-image" alt="about-us"/>
            <h1 className="about-heading">About Us</h1>

            <div className="below-container">
                <h1 className="quality-news">Quality News, Where you want,When you want it.</h1>
                <div className="description">
                    <p className="side-para">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to
                        add your own content and make changes to the font. Feel free to drag and drop me anywhere you 
                        like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>    
                    <p className="side-para">
                        This is a great space to write long text about your company and your services. You can use this space to go into a 
                        little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the 
                        idea for your business and what makes you different from your competitors. 
                        Make your company stand out and show your visitors who you are
                    </p>
                </div>
            </div>
            <h2 className="staff-heading">Staff</h2>
            <div className="staff">
                {staff.map(eachItem =>{
                    return(
                        <div className="staff-section">
                            <img src={eachItem.url} alt={eachItem.name} className="staff-pic"/>
                            <h6 className="profession">{eachItem.role}</h6>
                            <p className="">{eachItem.name}</p>
                            <p className="">{eachItem.phoneno}</p>
                            <p className="">{eachItem.email}</p>
                        </div>
                    )
                })}

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
        </div>
    </>
)

export default AboutUs