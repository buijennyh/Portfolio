import React from 'react'
import GitHub from '../assets/github.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'


const Experience = () => {
  return (
    <div name='experience'>
        {/* container */}
        <div>
            <div>
                <p> Experience </p> 
                <p>I have worked with:</p>
            </div>
            <div>
                <div>
                    <img src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Experience