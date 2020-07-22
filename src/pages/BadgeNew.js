import React from 'react'

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Jairo" lastName="Salazar" jobTitle="Fullstack Developer" twitter="jairosalazar" avatarUrl="https://avatars2.githubusercontent.com/u/30576771?s=400&u=3a40fceace8ce674c460d54837bed75993359d84&v=4" />
                        </div>
                        <div className="col">
                            <BadgeForm />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew