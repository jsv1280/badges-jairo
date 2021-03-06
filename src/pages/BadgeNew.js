import React from 'react'

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api';

class BadgeNew extends React.Component {
    state = {
        loading: false, 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    }

    handleChange = e => {

        this.setState({
            form : {
                ...this.state.form,
                [e.target.name] : e.target.value
            },
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ loading: true,error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({loading:false})

            this.props.history.push('/badges')
        } catch(error){
            this.setState({loading:false,error:error})
        }

    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={this.state.form.firstName || 'FIRST_NAME'} lastName={this.state.form.lastName || 'LAST_NAME'} jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} twitter={this.state.form.twitter || 'twitter'} email={this.state.form.email || 'EMAIL'} avatarUrl="https://avatars2.githubusercontent.com/u/30576771?s=400&u=3a40fceace8ce674c460d54837bed75993359d84&v=4" error={this.state.error} />
                        </div>
                        <div className="col">
                            <h1>New</h1>
                            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} />

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew