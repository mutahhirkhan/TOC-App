import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

const OrderForm = ({ user }) => {
    var [fullName, setfullName] = useState("")
    var [email, setemail] = useState("")
    var [phone, setphone] = useState("")
    var [address, setaddress] = useState("")
    var [poboxNumber, setpoboxNumber] = useState("")

    useEffect(() => {
        //CDM
        var {email, fullName, phone, address} = user;
        setfullName(fullName ? fullName : "")
        setemail(email ? email : "")
        setphone(phone ? phone : "")
        setaddress(address ? address : "")
        setpoboxNumber(poboxNumber ? poboxNumber : "")
    }, [])


    var handleSubmit = (e) => {
        e.preventDefault();
        var orderInfoObj = {
            fullName,
            email,
            phone,
            address,
            poboxNumber
        }
        console.log(orderInfoObj)
    }

    console.log('at order Fomr')
    return (
    

        <div>
            {}
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setfullName(e.target.value)} type="text" value={fullName} placeholder="Reciever's Full Name" />
                <input onChange={(e) => setemail(e.target.value)} type="text" value={email} placeholder="Reciever's Email" />
                <input onChange={(e) => setphone(e.target.value)} type="text" value={phone} placeholder="Reciever's phone" />
                <input onChange={(e) => setaddress(e.target.value)} type="text" value={address} placeholder="Reciever's Full address" />
                <input onChange={(e) => setpoboxNumber(e.target.value)} type="text" value={poboxNumber} placeholder="Reciever's PO BOX NUMBER" />
                <button type="submit">P A Y</button>
            </form>
        </div>
    )
}
var mapState = (state) => ({
    user: state.auth
})
export default connect(mapState)(OrderForm)
