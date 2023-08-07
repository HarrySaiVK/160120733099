import React from 'react'
import { useEffect,useState } from 'react';
const Post=()=> {
    const [form, setForm] = useState({
        trainName: '',
        trainNumber: '',
        departureTime: '',
        seatsAvailable:'',
        price:'',
        delayedBy:'',
    });
    useEffect(() => {
        const headers = { 'Authorization': 'Bearer my-token' };
        fetch('http://20.244.56.144/train/auth/', { headers })
            .then(response => response.json())
            .then(data => setForm(data));
        
    }, []);
    
    

    const response = async()=>{
        try{
            const response = fetch('http://20.244.56.144:80/train/trains',{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            await response.json();
            alert('Success');
        }

        catch (err) {
            alert(err);
          } 
    };
    

  return (
    <div>
      <h1>{form.trainName}</h1>
      <p>{form.trainNumber}</p>
      <p>{form.departureTime}</p>
      <p>{form.seatsAvailable}</p>
      <p>{form.price}</p>
      <p>{form.delayedBy}</p>
    </div>
  )
}

export default Post;
