"use client"

import axios from "axios"
import Link from "next/link"
import  {useRouter}  from "next/navigation"
import React, { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

const profile=()=>{
    const router=useRouter();
    const [data,setData]=React.useState("")
    const Logout=async()=>{
        try {
            await axios.get('/api/users/logout')
            toast('Successfully logged out', {
                duration: 4000,
                position: 'top-center',
                style: {fontFamily:"georgia",background:"pink"},
                ariaProps: {
                role: 'status',
                'aria-live': 'polite',
                },
            });
            setTimeout(()=>{
                router.push('/login')
            },2000)

        } catch (error:any) {
            console.log(error)
            toast.error(error)
        }
    }
    const getUserData=async()=>{
        const response=await axios.get('/api/users/about')
        console.log(response.data)
        setData(response.data.data.username)
    }
    useEffect(()=>{
        getUserData()
    })
    return (
            <>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                <h1 style={{fontFamily:"georgia", fontSize:"50px", marginLeft:"10px", color:"pink"}}>{data==='nothing'?"":`Welcome ${data}`}</h1>
            </div>
            <button onClick={Logout}  className="p-2 border-gray-50 rounded-md mb-4 bg-red-400 py-2 px-4" style={{border:"1px white solid", fontFamily:"georgia", margin:"10px"}}>Logout</button>
            </div>
            <br/>
                <br/>
                <div style={{fontSize:"50px", fontFamily:"georgia", marginLeft:"10px", display:"flex", flexDirection:"row", justifyContent:"center"}}>What we Provide</div>
                <br/>
                <div className="Cards_set" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    Out Pass
                </div>
            </div>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    Home Pass
                </div>
            </div>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                     Communities
                </div>
            </div>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    Lost And Found
                </div>
            </div>
            
            </div>
            <br/>
            <br/>
            <div className="Cards_set" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    Buy And Sell
                </div>
            </div>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    Complaint Center
                </div>
            </div>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    Room Reservation
                </div>
            </div>
            <div style={{display:"flex", marginLeft:"10px", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img width={300} style={{borderRadius:"18px", marginBottom:"10px"}} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            <div style={{backgroundColor:"pink", width:'300px', height:"50px", color:"black", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"6px", fontFamily:"georgia", fontSize:"20px",marginRight:"10px"}}>
                    NIT News
                </div>
            </div>
            
            </div>
            
            <div>
        <Toaster />
    </div>
    </>

        
    )
}

export default profile