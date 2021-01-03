import React, { useEffect, useState } from "react";
import ANOUNS from "../../../components/ANOUNS.json";
import { TextSub, HeadText } from "../../../constants/styles/constant.style";
import ShowMoreText from "react-show-more-text";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
`;

const AnounsBox = styled.div`
  border: 2px solid #f0f0f0;
  border-radius: 11px;
  padding: 0 0.8rem;
  margin-bottom: 3rem;
  background: rgb(244, 244, 244);
  box-shadow: 2px 4px 5px grey;
`;

const Title = styled(HeadText)`
  color: #1cd1a1;
  font-size: 1.2rem;
`;
const Anouncement = styled(TextSub)`
  color: black;
  text-decoration: none;
`;

const link = 

{  color: 'blue',
  textDecoration: 'none',}





const executeOnClick = (isExpanded) => {
  console.log(isExpanded);
}

const AllAnouncement = () => {
  const [anouncements, setAnouncements] = useState([]);

  // api call with axios in useEffect hook
  useEffect(
    function effectFunction() {
      function fetchData() {
        const response = { ANOUNS };

        const result = response.ANOUNS;
        setAnouncements(result);
        console.log(result);
        return response;
      }
      fetchData();
    },
    [setAnouncements]
  );

  return (
    <Container>
      {anouncements.map((item) => (
        <AnounsBox key={item.id[1]}>
          <Title>{item.title}</Title>
          <Anouncement>
            <ShowMoreText
              /* Default options */
              lines={1}
              more='Show more'
              less='Show less'
              className='content-css'
              anchorClass='my-anchor-css-class'
              onClick={executeOnClick}
              expanded={false}
              style={link}
            >
              {item.anouncement}
            </ShowMoreText>
          </Anouncement>
        </AnounsBox>
      ))}
    </Container>
  );
};

export default AllAnouncement;
