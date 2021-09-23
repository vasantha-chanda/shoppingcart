import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
const Rating = ({rating,onClick,style}) => {
    return (
        <>
        {
            [...Array(5)].map((_,index)=>(
                <span key={index} onClick={()=>onClick(index)} style={style}>
                    {rating>index?<AiFillStar/>:<AiOutlineStar/>}
                </span>
            ))
        }
        </>
    )
}

export default Rating

