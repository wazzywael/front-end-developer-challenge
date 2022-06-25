import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FindTheMiddle = () => {
  const [state, setState] = useState({
    input: "",
    returnedMiddle: "",
    position: 0,
    length: 0,
    startCounter: false,
  });

  const [counter, setCounter] = useState(5);

  const handleInput = (event) => {
    // Prevent Any space
    if (event.currentTarget.value.includes(" ")) {
      event.currentTarget.value = event.currentTarget.value.replace(/\s/g, "");
    }
    // SetState for input target value
    setState((s) => ({
      ...s,
      input: event.target.value,
    }));
    // Compute isOdd/isEven && reutrn pos & leng
    if (event.target.value.length % 2 === 1) {
      // if isOdd
      setState((s) => ({
        ...s,
        position: event.target.value.length / 2,
        length: 1,
      }));
    } else {
      // if isEven
      setState((s) => ({
        ...s,
        position: event.target.value.length / 2 - 1,
        length: 2,
      }));
    }
  };

  // Compute middle chars and store in state
  const findMiddle = () => {
    setState((s) => ({
      ...s,
      returnedMiddle: setState((s) => ({
        ...s,
        returnedMiddle: s.input.substring(s.position, s.position + s.length),
        startCounter: true,
      })),
    }));
  };

  // is startCounter is triggered, start the counter
  useEffect(() => {
    if (state.startCounter) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, state.startCounter]);

  // if counter finishes, reset counter trigger and
  // counter state for next onClick submit
  useEffect(() => {
    if (counter === 0) {
      setState((s) => ({
        ...s,
        startCounter: false,
      }));
      setCounter(5);
    }
  }, [counter, state.startCounter]);

  return (
    <MiddleContainer>
      <MiddleWrapper>
        <Header>Welcome to Thread the Needle </Header>
        <Subtitle>
          The aim of the game is to find the middle characters of a word - best
          to choose the longest one you know!
        </Subtitle>

        <input
          className="input is-large"
          type="text"
          value={state.input}
          onChange={(e) => {
            handleInput(e);
          }}
          placeholder="Enter a word here"
          data-testid="mainInput"
        />

        <Notice>**We don't accept spaces around here.</Notice>
        <Paragraph>
          Try and see if you can come up with the correct answer before hitting
          the button below{" "}
        </Paragraph>

        <button
          className="button is-primary"
          onClick={() => {
            findMiddle();
          }}
          data-testid="mainButton"
        >
          🚀 Thread The Needle 🚀
        </button>

        {state.startCounter ? (
          <Answer data-testid="counterDiv">
            {" "}
            🚀 🚀 🚀 {counter} 🚀 🚀 🚀{" "}
          </Answer>
        ) : !state.startCounter && state.returnedMiddle ? (
          <Answer data-testid="returnedMiddleDiv">
            {" "}
            {state.returnedMiddle}{" "}
          </Answer>
        ) : (
          ""
        )}
      </MiddleWrapper>
    </MiddleContainer>
  );
};

const MiddleWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.p`
  margin: 20px 0;
  font-size: 22px;
  font-style: italics;
`;
const Paragraph = styled.p`
  margin: 10px 0;
`;
const Notice = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 10px;
  color: black;
`;
const Answer = styled.p`
  padding-top: 20px;
  font-weight: 900;
  font-size: 50px;
`;
const MiddleContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Header = styled.p`
  font-size: 40px;
  color: black;
`;

export default FindTheMiddle;
