import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tableifier from "../Tableifier";

const columns = [
  { headerName: "Name", field: "name", type: "string" },
  { headerName: "Age", field: "age", type: "number" },
  { headerName: "Country", field: "country", type: "string" },
];

const rows = [
  { id: 1, name: "Alice", age: 25, country: "USA" },
  { id: 2, name: "Bob", age: 30, country: "Canada" },
  { id: 3, name: "Charlie", age: 22, country: "UK" },
];

// Test if component renders properly
test("renders table with headers", () => {
  render(<Tableifier columns={columns} rows={rows} />);
  columns.forEach((column) => {
    expect(screen.getByText(column.headerName)).toBeInTheDocument();
  });
});

// Test sorting functionality
test("sorts table by age", () => {
  render(<Tableifier columns={columns} rows={rows} />);
  const ageHeader = screen.getByText("Age");

  fireEvent.click(ageHeader);
  let firstRow = screen.getAllByRole("row")[1]; // First data row
  expect(firstRow).toHaveTextContent("Charlie"); // Youngest first

  fireEvent.click(ageHeader);
  firstRow = screen.getAllByRole("row")[1]; // First data row
  expect(firstRow).toHaveTextContent("Bob"); // Oldest first
});


