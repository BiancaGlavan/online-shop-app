import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--highlight-color);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h4`
    color: var(--white-color);

`;

const Announcement = () => {
  return (
    <Wrapper>
        <Title>
            Super Deal! Free Shipping on Orders Over $50
        </Title>
    </Wrapper>
  )
}

export default Announcement;