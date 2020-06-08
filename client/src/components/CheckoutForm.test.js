import React from "react";
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
const { getByTestId, getByPlaceholderText  } = render(<CheckoutForm />);

const formMatch = getByTestId('successMessage')

fireEvent.change(firstName, {
  target: { name: 'firstName', value: 'Bennder' }
});

fireEvent.change(lastName, {
  target: { name: 'lastName', value: 'Tennington' }
});

fireEvent.change(address, {
  target: { name: 'address', value: 'some address goes here' }
});

fireEvent.change(city, {
  target: { name: 'city', value: 'SomeCity' }
});

fireEvent.change(state, {
  target: { name: 'state', value: 'State' }
});

fireEvent.change(zip, {
  target: { name: 'zip', value: '00000' }
});

//Assert
expect(formMatch).toHaveTextContent(firstName);
expect(formMatch).toHaveTextContent(lastName);
expect(formMatch).toHaveTextContent(address);
expect(formMatch).toHaveTextContent(city);
expect(formMatch).toHaveTextContent(state);
expect(formMatch).toHaveTextContent(zip);
});
