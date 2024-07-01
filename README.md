# React.js Tasks

This repository contains solutions to various tasks using React.js. Below is a brief description of each task:

## Task 1: Mailbox Component

Create a `Mailbox` component that:
- Accepts a prop `unreadMessages` (array of message strings).
- Renders a heading "Hello!" and displays the number of unread messages if there are any.
- If no unread messages, it does not display any message about unread messages.

An array `messages` with the strings 'React', 'Re: React', 'Re:Re: React' is defined, and the `Mailbox` component is rendered with `messages` as the `unreadMessages` prop.

## Task 2: React Router Application

Implement a React application with React Router for navigation:

1. **App Component**:
   - Wraps the application with `BrowserRouter` and defines routes using `Routes` and `Route` components.
   - Includes routes for Home, Blogs, Contact, and a wildcard route for a 404 page.
   
2. **Layout Component**:
   - Provides a common layout structure for all pages.
   - Includes a navigation bar with links to Home, Blogs, and Contact pages.
   - Uses the `Outlet` component to render the content of each page within the layout.

3. **Page Components**:
   - Create separate page components for Home, Blogs, Contact, and 404 (NoPage).
   - Each page component renders a simple heading with the page title.

## Task 3: Football Component

Implement a `Football` component that:
- Represents a button for shooting in a football game.
- When the button is clicked, it triggers an alert message with the text "Goal!".

Steps:
1. Define a functional component `Football` that returns a button element.
2. Inside the component, define a function `shoot` that takes a parameter `a` and displays an alert with the value of `a`.
3. Bind the `shoot` function to the `onClick` event of the button.

## Task 4: Greeting Component

Create a `Greeting` component that:
- Accepts a `name` prop and displays a personalized greeting message to the user.
- For example, if the `name` prop is "John", the message could be "Hello, John!".
- Uses a state hook to store the name value.

## Task 5: Clock Component

Create a `Clock` component that:
- Displays the current time and updates every second using `useEffect`.

## Task 6: ScrollToTopButton Component

Create a `ScrollToTopButton` component that:
- Displays a button.
- When the button is clicked, the page scrolls to the top using a ref.

## Task 7: User Form Component

Create a simple React user form that:
- Allows the user to input their name, email, and age.
- Displays all the values on submit.
- Fields:
  - Name (input type: text)
  - Email (input type: email)
  - Age (input type: number)
- Uses React state and event handlers to update the values and display them on the screen without a page refresh.
