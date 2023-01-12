# Lendsqr Frontend Engineer Assessment Test

This project was bootstrapped with React and Typescript.

## Available Scripts

In the project directory, you can run the command below to start the application

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Open [live site](https://imeh-usoro-lendsqr-fe-test.vercel.app/) hosted on Vercel here.

#### Libraries Used

* React Router Dom for page routing and data fetching (v6.6.1).
* Scss for styling.
* React Table for Dashboard Table.
* React spinners for loader screens.

#### Features

* Responsive Design.
* Dashboard table with filtering, sorting and pagination.
* Loader screens on request loading.
* Error pages on request error.

#### Navigating the table

* To navigate to a particular user's details click on the text in Organization, Username, Email or Phone Number column for that particular row.
* You can also use the action button on the last column to navigate to the user's detail page. A modal pops up and you can click on the "View Details" button to navigate to the user's detail page.
* Click on the table header on each column to sort the table. You can either sort in ascending or descending order.
* Use the search input in the header to search any column on the table.
* Click on the filter icon to filter the table. A modal pops up and the table updates as you type/select an option. You can filter by organization, username, email, phone number and status.
* Click outside the modal to close it.
* To reset the table to it's initial state, click on any filter icon.
* Click on the pagination buttons to navigate through the table.
