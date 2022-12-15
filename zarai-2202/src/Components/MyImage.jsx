import React, { useState } from 'react'


const MyImage = ( {imgArr = [
    {
      url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_1_1_1.jpg?ts=1670577295475",
      id:1
    },
    {
      url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_2_1_1.jpg?ts=1670577293431",
      id:2
    },
    {
      url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_2_2_1.jpg?ts=1670577293428",
      id:3
    },
    {
      url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_2_3_1.jpg?ts=1670577293349",
      id:4
    },
  ]}) => {
   
    const [mainImage,setMainImage]=useState(imgArr[0])
 return <div>
 
 
    <div>
      {
        imgArr.map((item)=>{
            return (
                <figure>
                    <img key={item.url} src={item.url} alt="pic-name" />
                </figure>
            )
        })
      }
    </div>

    <div>
        <img src={mainImage.url} alt="main-pic" />
    </div>
    </div> 
}   

export default MyImage
