import { useState } from "react";
import styled from "styled-components";
import { IUser } from "../context/AuthContext";


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
        min-height: 250px;
        display: none;
        z-index: 4;


        &.is-open {
            display: flex;
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

  return (
    <Container>
        <img src={user.avatar} alt="" onClick={() => setIsOpen(!isOpen)}/>
        <div className={`mask ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(false)}></div>
        <div className={`dropdown ${isOpen ? 'is-open' : ''}`}>
            <h6>sajfd</h6>
        </div>
    </Container>
  )
}

export default UserAvatar;