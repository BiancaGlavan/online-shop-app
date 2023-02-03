
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";


const StyledProfilePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 300px;
        margin-top: 50px;
    }

    .succes {
        color: #2e7d32;
        margin-top: 20px;
      }
`;

const ProfilePage = () => {

    const { user, isAuth, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState(user?.email || '');
    const [name, setName] = useState(user?.name || '');
    const [confirmation, setConfirmation] = useState('');
    const [isSucces, setIsSucces] = useState(false);

    const handleUpdate = () => {
        const newUser = {
            email: email,
            name: name,
        };

        const config = {
            headers: { Authorization: `Bearer ${token}}` }
        };

        axios.put(`https://api.escuelajs.co/api/v1/users/${user?.id}`, newUser, config).then((response) => {
            console.log('update: ', response);
            setIsSucces(true);
            setConfirmation('Your profile has been updated!');
        },(error) => {
            console.log('is error:', error);
            setConfirmation('Something went wrong!')
        });
    }

    useEffect(() => {
        if (isAuth === false) {
            navigate('/');
        }
    }, [isAuth]);
    return (
        <StyledProfilePage>
            <div className="wrapper">
                <Input onChange={setEmail} placeholder={'email'} type={'email'} label={'Email'} value={email} />
                <Input onChange={setName} placeholder={'name'} type={'text'} label={'Name'} value={name} />
                <Button name="Update" onClick={handleUpdate} />
                {isSucces && <p className="succes">{confirmation}</p>}
            </div>
        </StyledProfilePage>
    )
}

export default ProfilePage;