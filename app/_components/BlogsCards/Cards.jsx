import React from 'react'
import { FaRightLong } from "react-icons/fa6";

const Cards = (props) => {
    return (
        <div class="card1">

            <img src={props.image} alt="" />
            <div class="card-content">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.shortDescription}
                </p>
                <a href="#" class="button">
                    Read More <span class="material-symbols-outlined">
                        {/* <FaRightLong color='white' /> */}
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Cards