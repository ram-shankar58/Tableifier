Tableifier

Tableifier is a highly customizable React table component built with Bulma CSS. It supports features like sorting, filtering, and dynamic column configuration, making it perfect for use in various applications.

Features

Dynamic Table Generation: Pass column configurations and data to generate tables automatically.

Sorting: Click on column headers to sort data.

Filtering: Filter options available in headers for specific columns.

Auto-incremented Serial Number: Built-in feature to display row numbers.

Customizable Columns: Define different column types, widths, and filter options.

Bulma Styled: Uses Bulma CSS for a clean and consistent UI.

Installation

To install Tableifier in your project, run:

npm install tableifier

or

yarn add tableifier

Usage

Import and use Tableifier in your React project:

import Tableifier from 'tableifier';

const columns = [
  { field: 'serialNo', headerName: 'Serial No.', width: 100, type: 'sno' },
  { field: 'employeeId', headerName: 'Employee ID', width: 130, type: 'number' },
  { field: 'name', headerName: 'Full Name', width: 200, type: 'string' },
  { field: 'department', headerName: 'Department', width: 180, type: 'string', filterOptions: ['HR', 'Engineering', 'Marketing'] },
  { field: 'designation', headerName: 'Designation', width: 180, type: 'string' },
  { field: 'experience', headerName: 'Years of Experience', width: 170, type: 'number' },
  { field: 'salary', headerName: 'Salary ($)', width: 150, type: 'number' },
];

const rows = [
  { employeeId: 'E101', name: 'Alice Johnson', department: 'HR', designation: 'Manager', experience: 5, salary: 70000 },
  { employeeId: 'E102', name: 'Bob Smith', department: 'Engineering', designation: 'Software Engineer', experience: 3, salary: 85000 },
  { employeeId: 'E103', name: 'Charlie Brown', department: 'Marketing', designation: 'Marketing Lead', experience: 6, salary: 65000 },
  { employeeId: 'E104', name: 'Diana Green', department: 'Engineering', designation: 'DevOps Engineer', experience: 4, salary: 90000 },
  { employeeId: 'E105', name: 'Ethan White', department: 'HR', designation: 'Recruiter', experience: 2, salary: 50000 },
].map((row, index) => ({
  serialNo: index + 1,
  id: index + 1,
  ...row,
}));

const MyComponent = () => {
  return <Tableifier columns={columns} rows={rows} />;
};

export default MyComponent;

Props

Prop

Type

Description

columns

Array

Defines the structure of the table, including column headers, types, and filter options.

rows

Array

Data to be displayed in the table. Each row should match the structure of columns.

Column Configuration

Each column object can have the following properties:

Property

Type

Description

field

string

Unique identifier for the column.

headerName

string

Name displayed in the table header.

width

number

Width of the column.

type

string

Type of data (string, number, sno).

filterOptions

Array

Optional predefined filter values for the column.

Styling

Tableifier uses Bulma CSS, ensuring a clean and modern look. You can override styles using custom CSS if needed.