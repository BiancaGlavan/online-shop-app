import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import UserAvatar from "./UserAvatar";

const Container = styled.div`
   
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgb(0 0 0 / 3%) 0px 2px 4px -1px, rgb(0 0 0 / 3%) 0px 2px 5px 0px, rgb(0 0 0 / 4%) 0px 1px 10px 0px;
`;

const Left = styled.div`
flex-grow: 1;
`;

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-right: 20px;
    color: var(--text-color);
    font-weight: 500;
    &:hover {
        color: var(--highlight-color);
    }
`;

const Center = styled.div`
    flex-grow: 1;
`;

const Logo = styled.h1`
background: #341CCB;
background: radial-gradient(circle farthest-corner at top right, #341CCB 0%, #E85A4F 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: 0;
`;

const Right = styled.div`

display: flex;
align-items: center;

`;

const SearchContainer = styled.div`
    border-bottom: 0.5px solid var(--button-color);
    display: flex;
    align-items: center;
    padding: 5px 20px;
    justify-content: space-between;
    max-width: 300px;
    
`;

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
`;

const SearchIcon = styled.div`
    color: var(--button-color);
    cursor: pointer;
`;

const Navigation = () => {
    const { isAuth, updateUser, updateToken, updateAuth, user } = useContext(AuthContext);
    const { products } = useContext(CartContext);

    const localToken = localStorage.getItem("token");

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localToken}` }
        };

        if(localToken) {
            axios.get('https://api.escuelajs.co/api/v1/auth/profile', config).then((response) => {
                console.log(response.data);
                updateToken(localToken);
                updateUser(response.data);
                updateAuth(true);
            });
        }
       
    }, [localToken]);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        <Link to={'/'}>BI.ANCA</Link>
                    </Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Search..." />
                        <SearchIcon>
                            <Search />
                        </SearchIcon>
                    </SearchContainer>
                </Center>
                <Right>
                    {!isAuth && <>
                        <MenuItem><Link to={'/register'}>Register</Link></MenuItem>
                        <MenuItem><Link to={'/login'}>Login</Link></MenuItem>
                    </>}
                    {isAuth && <button>Logout</button>}
                    <MenuItem>
                        <Badge badgeContent={products.length} style={{ color: "#E98074" }}>
                            <ShoppingCartOutlined style={{ color: "#8E8D8A" }} />
                        </Badge>
                    </MenuItem>
                    {user && <UserAvatar user={user} />}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navigation;