import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICategory } from "./ProductCard";

const StyledSubNavigation = styled.div`
    width: 100%;
    background-color: var(--background-color);
    padding: 10px;

    .wrapper {
        display: flex;
        justify-content: center;
    }

    .category {
        margin: 0 10px;
        font-weight: 700;
        color: var(--text-color);

        &:hover {
            font-weight: 700;
            color: var(--highlight-color);
        }
    }
`;

const SubNavigation = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);


    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories').then((response) => {
            console.log('category: ', response);
            setCategories(response.data);
        });
    }, []);

    return (
        <StyledSubNavigation>
            <div className="wrapper">
                {categories.map((category, idx) => <Link className="category" to={'/categories/' + category.id}>{category.name}</Link>)}
            </div>

        </StyledSubNavigation>

    )
}

export default SubNavigation;