import React, {useEffect, useState} from 'react'
import { getBaseUrl } from '../../utility'
import Navbar from '../../components/Navbar/nav-bar'
import axios from 'axios';

function AdminDashboard() {
  const [pubArticles, setpubArticles] = useState([])
  const [stArticles, setstArticles] = useState([])

  useEffect(() => {
    const url = getBaseUrl() + "getAllArticlesByUserId" //published articles
    axios.get(url, {
        headers: {
           Authorization: "Bearer " + localStorage.getItem("token")
        }
     }).then((res) => {
        const result = res.data;
        if(result.status === 200){
            console.log(result.data.length)
            setpubArticles(result.data)
        }
    }).catch((err) => {
        console.log(err)
    })
}, [])
useEffect(() => {
  const url = getBaseUrl() + "getAllStagedArticlesByUserId" //published articles
  axios.get(url, {
      headers: {
         Authorization: "Bearer " + localStorage.getItem("token")
      }
   }).then((res) => {
      const result = res.data;
      if(result.status === 200){
          console.log(result.data.length)
          setstArticles(result.data)
      }
  }).catch((err) => {
      console.log(err)
  })
}, [])
  return (
    <div>
      <Navbar />
      <div className='h-100px'></div>
      
    </div>
  )
}

export default AdminDashboard