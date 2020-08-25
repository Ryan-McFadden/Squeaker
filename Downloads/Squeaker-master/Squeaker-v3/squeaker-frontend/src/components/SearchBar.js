import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'

export class SearchBar extends Component {
    state = {
        query: ''
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        {this.state.query === '' ?
            this.props.history.push('/') :
            this.props.history.push(`/search/${this.state.query}`)
        }
    }

    render() {
        return (
            <div className="info--input">
                <SearchIcon className='info--searchIcon'/>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Search Twitter" />
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar)
