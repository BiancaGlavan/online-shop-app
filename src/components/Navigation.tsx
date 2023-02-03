import { ShoppingCartOutlined } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import Badge from '@mui/material/Badge';
import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import UserAvatar from "./UserAvatar";

const Container = styled.div`
   .wrapper {
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: rgb(0 0 0 / 3%) 0px 2px 4px -1px, rgb(0 0 0 / 3%) 0px 2px 5px 0px, rgb(0 0 0 / 4%) 0px 1px 10px 0px;
   }

   .left {
      flex-grow: 1;
   }

   .right {
      display: flex;
      align-items: center;
   }

   .logo {
      background: #341CCB;
      background: radial-gradient(circle farthest-corner at top right, #341CCB 0%, #E85A4F 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0;
   }

   .menu-item {
      font-size: 16px;
      cursor: pointer;
      margin-right: 20px;
      color: var(--text-color);
      font-weight: 500;
      &:hover {
        color: var(--highlight-color);
      }
   }


`;

const Navigation = () => {
    const { isAuth, updateUser, updateToken, updateAuth, user } = useContext(AuthContext);
    const { products } = useContext(CartContext);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    const localToken = localStorage.getItem("token");

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localToken}` }
        };

        if (localToken) {
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
            <div className="wrapper">
                <div className="left">
                    {!isMobile ? <h3 className="logo">
                        <Link to={'/'}>BI.ANCA</Link>
                    </h3> : <h3 className="logo">
                        <Link to={'/'}>BI.</Link>
                    </h3>}
                </div>
             
                <div className="right">
                    {!isAuth && <>
                        <div className="menu-item"><Link to={'/register'}>Register</Link></div>
                        <div className="menu-item"><Link to={'/login'}>Login</Link></div>
                    </>}

                    <div className="menu-item">
                        <Link to={'/shopping-cart'}>
                            <Badge badgeContent={products.length} style={{ color: "#E98074" }}>
                                <ShoppingCartOutlined style={{ color: "#8E8D8A" }} />
                            </Badge>
                        </Link>
                    </div>
                    <div className="menu-item">
                        {user && <UserAvatar user={user} />}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navigation;