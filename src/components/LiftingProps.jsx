import Card from "./Card";
import styled from "styled-components";
import { useState } from "react";

export default function LiftingProps() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section>
      <h1>Lifting Props</h1>
      <Accordian>
        <h1>This is an accordian</h1>
        <Card
          title="Card 1"
          clickHandler={() => setActiveIndex(0)}
          isActive={activeIndex === 0}
        >
          {activeIndex === 0 ? <p>This card is about dogs</p> : ""}
        </Card>
        <Card
          title="Card 2"
          clickHandler={() => setActiveIndex(1)}
          isActive={activeIndex === 1}
        >
          {activeIndex === 1 ? <p>This card is about red apples</p> : ""}
        </Card>
      </Accordian>
    </section>
  );
}

const Accordian = styled.div`
  border: 1px solid black;
  padding: 16px;

  & h1 {
    font-size: 1.5rem;
    text-align: left;
  }
`;
