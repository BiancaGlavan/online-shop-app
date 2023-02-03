import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext, IUser } from "../context/AuthContext";
import Button from "./Button";


interface IPropsUserAvatar {
    user: IUser;
}

const Container = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        
        
    }

    .dropdown {
        position: absolute;
        right: 0;
        top: calc(100% + 10px);
        background-color: #fff;
        box-shadow: rgb(0 0 0 / 3%) 0px 2px 4px -1px, rgb(0 0 0 / 3%) 0px 2px 5px 0px, rgb(0 0 0 / 4%) 0px 1px 10px 0px;
        padding: 10px;
        min-width: 200px;
        display: none;
        z-index: 4;
        padding-bottom: 40px;
        padding-top: 40px;
        
        .profile {
            color: var(--text-color);
        }


        &.is-open {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
        }
    }

    .mask {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 60px;
        left: 0;
        display: none;
        z-index: 3;

        &.is-open {
            display: flex;
        }
    }
`;

const UserAvatar = ( {user}: IPropsUserAvatar) => {
    const [isOpen, setIsOpen] = useState(false);
    const {updateAuth, updateToken, updateUser } = useContext(AuthContext);

    const handleLogout = () => {
        updateAuth(false);
        updateToken('');
        updateUser(null);
        localStorage.setItem('token', '');
    }

  return (
    <Container>
        <img src={user.avatar} alt="" onClick={() => setIsOpen(!isOpen)}/>
        <div className={`mask ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(false)}></div>
        <div className={`dropdown ${isOpen ? 'is-open' : ''}`}>
            <Link onClick={() => setIsOpen(false)} to={'/profile'}><h5 className="profile">My Profile</h5></Link>
            <Button name="Logout" onClick={handleLogout}/>
        </div>
    </Container>
  )
}

export default UserAvatar;