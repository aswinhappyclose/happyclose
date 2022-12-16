import React from "react";
import Header from "../header/Index.js"
import "./Index.css";



const ScheduleDemo=()=>{
    return(
        <>
        <Header/>
        <div className="scheduleDemoMainContainer">
            <div className="scheduleDemoMainContant">
                <p className="scheduleDemoHeader">Contact Us</p>
          <p className="scheduleDemoText">Happy Close is growing rapidly at the moment to ensure book close to financial reporting are seamlessly integrated. The automation of such routine key accounting processes saves time and helps us focus more on data driven decision making.</p>
        <p className="scheduleDemoText">Interested to know more?? Drop in your details and lets connect for a customized demo</p>
        <div className="scheduleDemoContectUs">
            <p className="scheduleDemoText">Email</p>
            <p className="scheduleDemoText">arjun@happyclose.net or rjn@happyclose.net</p>
            </div>
        </div>
        <div className="scheduleDemoContent">
            <p className="scheduleDemoContentText">Let's connect for a demo</p>
            <div className="scheduleDemoContentTextInputFeild">
            <input type="text" className="scheduleDemoContentTextInput" placeholder="Full Name *"/>
            </div>
            <div className="scheduleDemoContentTextInputFeild">
            <input type="email" className="scheduleDemoContentTextInput" placeholder="Email ID *"/>
            </div> <div className="scheduleDemoContentTextInputFeild">
            <input type="text" className="scheduleDemoContentTextInput" placeholder="Name of the organization"/>
            </div> <div className="scheduleDemoContentTextInputFeild">
            <input type="text" className="scheduleDemoContentTextInput" placeholder="Contact"/>
            </div>
            <div className="scheduleDemoContentTextInputFeild">
            <textarea type="text" className="scheduleDemoContentTextInputMessage" placeholder="Help us to help you"/>
            </div>
            <button className="scheduleDemoButton">Lets explore Happy Close</button>
        </div>
        </div>
        </>
    )
}
export default ScheduleDemo