import styled from "styled-components";
import Button from "./Button";

export default function PassingEventHandlers() {
  return (
    <section>
      <h1>Passing event handlers as props</h1>
      <EventHandlerWrapper>
        <Button onClick={() => alert("Print a")}>Print a</Button>
        <Button secondary onClick={() => alert("Print b")}>
          Print b
        </Button>
      </EventHandlerWrapper>
    </section>
  );
}

const EventHandlerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-items: center;
`;
