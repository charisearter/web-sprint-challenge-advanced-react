import React, { version } from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
//Arrange
const { getByText } = render(<CheckoutForm />);

//Act
const header = getByText(/checkout form/i);

//Assert
expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
//Arrange
const { getByTestId } = render(<CheckoutForm />);

//Act
const formMatch = getByTestId(/successMessage/);

//Assert
expect(formMatch).toBeInTheDocument();
});
