import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/userActions';
import noAvatar from '../../assets/images/no-avatar-image.png';
import Container from '../Container/Container';


const Layout = props => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logout());
    };
    return (
        <>
            <header className='main-header'>
                <Container>
                <div className='header-content'>
                    <NavLink to='/gallery'>
                        <div className='logo-box'>
                            <FontAwesomeIcon id='logo' icon={faCameraRetro} size='5x' />
                            <h2 className='logo-title'>Gallery App</h2>
                        </div>
                    </NavLink>
                    <div className='users-menu'>
                        {user.length === 0 ?
                            <>
                                <NavLink to='/register'>Sign Up</NavLink>
                                <NavLink to='/login'>Sign In</NavLink>
                            </> :
                            <>
                                <div className='mini-info-profile-box'>
                                    {user.avatarImage ? <img className='avatar-image' src={user.avatarImage} alt={user.displayName} /> :
                                        <img className='avatar-image' src={noAvatar} alt={user.displayName} />}

                                    <h4>Hello , {user.displayName}!</h4>
                                </div>
                                {user.length !== 0 && <>
                                    <NavLink to={"/gallery/" + user._id}>My Gallery</NavLink>
                                </>}
                                <NavLink to='/gallery' onClick={logoutUser}>Log Out</NavLink>
                            </>}
                    </div>
                </div>
                </Container>
                
            </header>
            {props.children}
        </>
    );
};

export default withRouter(Layout);