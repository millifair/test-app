import React,{useState,useEffect} from 'react'

const Hooks=({Url,isButtonClick})=>{
    const [contactData, setContactData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isLoaded, setisLoaded] = useState(false);
    const getData=()=>{

    }

    useEffect(() => {
        fetch(Url)
            .then(
                (response) => {
                    return response.json()
                })
            .then(res => {
                setContactData(res)
                setisLoading(false)
               setisLoaded(true)
            })
        
    },[Url])

   

    return[{contactData,isLoading,isLoaded,setContactData,setisLoading},getData]
}
export default Hooks;