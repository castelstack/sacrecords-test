import React, { useEffect, useState } from "react";
import AccordionTab from "../../components/accordion/accordion";
import FAQQ from "../../components/FAQQ.json";
import styled from "styled-components";


const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 2.5rem;
`



const FaqContainer = () => {
  const [question, setQuestion] = useState([]);

  // api call with axios in useEffect hook
  useEffect(
    function effectFunction() {
      function fetchData() {
        const response = { FAQQ };

        const result = response.FAQQ;
        setQuestion(result);
        console.log(result);
        return response;
      }
      fetchData();
    },
    [setQuestion]
  );
  return (
    <Container>
      {question.map((item) => (
        <AccordionTab
          key={item.id}
          title={item.question}
          answer={item.answer}
        />
      ))}
    </Container>
  );
};

export default FaqContainer;
