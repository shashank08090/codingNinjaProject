import React from 'react'

export default function Loginn() {
    const getValbsdka = ()=>{
console.log("this is your name bsdk " + getValbsdka.x.value );
    }
    return (
        <div>
            <input type="text" onClick={getValbsdka} placeholder="name"
           ref ={(something)=>(getValbsdka.x=something)}
        //   ref ={(something)=>(x=something)}
           id="text"></input>
</div>
    )
}
