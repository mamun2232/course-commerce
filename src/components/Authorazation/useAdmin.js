import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
      const [admin , setAdmin] = useState(false)
      const [adminLoading , setAdminLoading] = useState(true)

      useEffect(()=>{
            const email = user?.email
            if(email){
                  fetch(`https://course-commerce-back-end.vercel.app/api/v1/user/chackAdmin/${email}` , {
                        method: "GET",
                        headers:{
                              "authorization": `Bearer ${localStorage.getItem('Token')}`
                        }
                  })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setAdmin(data.admin)
                        setAdminLoading(false)
                  })
            }

      },[user])



      return [admin , adminLoading]
};

export default useAdmin;