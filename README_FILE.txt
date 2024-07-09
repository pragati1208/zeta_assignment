This project consists of a simple login page using Firebase for authentication. The main functionalities include:

User login with retry mechanism and exponential backoff strategy.
Displaying appropriate messages on success or failure.
Disabling the login button for a specified period after failed attempts.
Redirecting the user to a new page upon successful login.
The primary file for the project is login.js, which contains the main logic for authentication and error handling. Functionalities : User Login

Login Form: The user can enter their email and password in the provided form fields.
Immediate Feedback: Upon clicking the login button, the user will receive immediate feedback through a popup message.
Exponential Backoff: If the login attempt fails due to incorrect credentials, the login button will be disabled for a period proportional to the number of failed attempts.
Success Message and Redirect: On successful login, a success message is displayed, and the user is redirected to the user.html page. Error Handling
If the credentials are incorrect, the user is informed via a popup message and the login button is disabled temporarily.
After a series of failed attempts, the button remains disabled for an increasing amount of time (10 seconds per failed attempt).
Proper error messages are shown for different types of errors, such as wrong password or user not found.
Files and Structure

login.html: The HTML file containing the login form.
login.js: The main JavaScript file handling Firebase authentication, exponential backoff, and user feedback.
style.css: The CSS file for styling the login page.
Note: If you want to login, you must first sign up to create a username and password, or you can use the following credentials:

Email: 12pragati@gmail.com Password: PRAGATI