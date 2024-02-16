import Header from '../Header'
import './index.css'


const Contact = () =>(
    <>
        <Header/>
        <div className='container'>
            <img src="https://res.cloudinary.com/dj4bfvysr/image/upload/v1708080176/pexels-evg-kowalievska-1174775_i2jqr6.jpg" alt="contac"  className='contactus-video'/>
            <h3 className='contact-label'>Contact</h3>

            <div className='more-information'>
                <h1 className='contact-heading'>Looking for more information? Get in touch with us today.</h1>
                <form className='form'>
                    <input type="text" className='input' placeholder='Name'/>
                    <br/>
                    <input type="email" className='input' placeholder='Email'/>
                    <br/>
                    <input type="text" className='input' placeholder='Phone'/>
                    <textarea className='message' rows={8} cols={50} placeholder='Message'></textarea>
                    <button type="button" className='button-submit'>Submit</button>
                </form>
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

export default Contact