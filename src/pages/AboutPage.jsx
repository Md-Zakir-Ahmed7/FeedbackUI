import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>
                This is React app to leave feedback for a product of service
            </p>
            <p>Version:1.0.0</p>
        </div>
        <p>
            
    <Link to='/'>
        Back to home
    </Link>
        </p>
    </Card>


  )
}

export default AboutPage