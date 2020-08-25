import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarOption from './NavbarOption';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import '../../css/Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <NavbarOption text='Home' Icon={HomeIcon}/>
                </NavLink>
                    
                <NavLink to={`/${this.props.currentUser.username}`} style={{ textDecoration: 'none' }}>
                    <NavbarOption text='Profile' Icon={PersonIcon}/>
                </NavLink>

                <div className="user">
                    <div className="user--avatar">
                        <Avatar src={this.props.currentUser.avatar} />
                    </div>

                    <h3>
                        {this.props.currentUser.displayName}{" "}
                        <span className="user--special">
                            @{this.props.currentUser.username}
                        </span>
                    </h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
      currentUser: state.userReducer.currentUser
    })
  }
  
  export default connect(mapStateToProps)(Navbar)