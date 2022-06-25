import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FindTheMiddle from "../components/FindTheMiddle";

// mainInput
// mainButton
// counterDiv
// returnedMiddleDiv

test("FindTheMiddle", async () => {
  const user = userEvent.setup();
  const randomString = "";

  const findMiddle = (randomString) => {
    if (randomString % 2 == 1) {
      // if isOdd
      const position = randomString.length / 2;
      const length = 1;
      const returnedMiddle = randomString.substring(
        position,
        position + length
      );
      return returnedMiddle;
    } else {
      // if isEven
      const position = randomString.length / 2 - 1;
      const length = 2;
      const returnedMiddle = randomString.substring(
        position,
        position + length
      );
      return returnedMiddle;
    }
  };

  render(<FindTheMiddle />);

  expect(screen.queryByTestId("mainInput")).toBeInTheDocument();
  expect(screen.queryByTestId("mainButton")).toBeInTheDocument();
  user.type(screen.queryByTestId("mainInput"), randomString);
  console.log(randomString);
  await fireEvent.click(screen.getByTestId("mainButton"));
  await new Promise((r) => setTimeout(r, 1000));
  expect(screen.getByText(findMiddle(randomString))).toBeInTheDocument();
});
