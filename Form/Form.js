import React from "react";
import "./form.css"
import logo from "../logo-1.png"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Form = () => {
    const [dataNegara, setDataNegara] = useState([])
    const [fetchstatus, setFetchStatus] = useState(true)
    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axios.get(`https://restcountries.com/v3.1/all`)


            // let result = data.map((hasil) => {
            //     let {
            //         name,
            //         flags } = hasil
            //     return {
            //         name,
            //         flags
            //     }
            // })
            //   console.log(data)
            setDataNegara([...data])
        }
        fetchData()
        if (fetchstatus) {
            fetchData()
            setFetchStatus(false)
        }

    }, [fetchstatus, setFetchStatus])
   
    // console.log(dataNegara)
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="header">
                <div className="judul">
                    <img src={logo} className="logo" />
                    <div>
                        <label>Language:</label>
                        <select>
                            <option value="english">English</option>
                            <option value="indonesia">Indonesia</option>
                        </select>
                    </div>
                </div>
                <div className="judul-bawah">
                    <b>You don't have an account yet, please create a new account</b>
                </div>
            </div>
            <div className="form">
                <h3>Create new Account</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title</label> <br />
                    <div className="checkbox">
                        <input type="checkbox" className="cb1" />Mrs
                        <input type="checkbox" className="cb1" />Ms
                        <input type="checkbox" className="cb1" />Mdm
                        <input type="checkbox" className="cb1" />Mr
                        <input type="checkbox" className="cb1" />Dr
                    </div>
                    <div className="country">
                        <label>Last Name</label>
                        <label>First Name</label>
                    </div>

                    <div className="country">

                        <input type="text" placeboard="Last name" required />

                        <input type="text" placeboard="First name" required />
                    </div>
                    <div className="phone">
                        <label>Mobile phone number</label><br />
                        <select>
                            <option>
                            {dataNegara.map((item ) => {
                                    return (
                                        <>
                                            
                                       <img src={item.flags.png}/> 
                                            
                                        </>
                                    )

                                })
                                }
                            </option>
                        </select>
                    </div>
                    <label><b>Address</b></label>
                    <input type="text" placeholder="Address" className="input-address" required />
                    <div className="country">
                        <label>Country/Location</label>
                        <label>Province/District</label>
                    </div>

                    <div className="country">
                        <select>
                            <option>
                                {dataNegara.map((item ) => {
                                    return (
                                        <>
                                            
                                        {item.name.common}
                                            
                                        </>
                                    )

                                })
                                }
                            </option>

                        </select>



                        <input type="text" required />
                        
                    </div>
                    <label>Contacts</label>
                    <div className="contacts">
                        <div>
                            <label>Email address</label> <br />
                            <input type="text" />
                        </div>
                        <div className="contacts2">
                            <div>
                                <label>Date of Birth</label> <br />
                                <input type="text" />
                            </div>
                            <div>
                                <label>Month</label> <br />
                                <input type="text" />
                            </div>
                            <div>
                                <label>Year</label> <br />
                                <input type="text" />
                            </div>



                        </div>
                    </div>
                    <div className="note">
                        <h3>Standard Privacy Note</h3>
                        <span>I warrant that the above information</span>
                        <div className="notification">
                            <div>
                                <label>SMS & Mobile call</label>
                            </div>
                            <div>
                                <label>Emailing</label>
                            </div>
                            <div>
                                <label>Mailing</label>
                            </div>
                        </div>
                    </div>
                    <div className="radio">
                        <input type="checkbox" className="cb2" />
                        <label>I have read and understood the above terms and conditions and hereby agree that i will be bounded by these conditions and policies once i have submitted this application form.</label>
                    </div>
                    <button type="submit" className="btn">Create Customer</button>
                </form>
            </div>
            {/* {dataNegara.map((item,index)=> {
                return (
                    <tr key={index}>
                    <td>{item.name.common}</td>
                    </tr>
                )
            })} */}
        </div>
    )

}
export default Form;