# Build process

## Tools used in bootstrapping the application

- JavaScript
- React JS
- Sass
- Context API and Hooks (State Management)

##

This application has a basic sign in page and a dashboard page. For one to fully gain access to the dashboard page, a form of authentication needs to happen to pass one in. Since we have no backend system attached to this application, it automatically passes anyone and any details provided to the login form.

You might wonder what happens behind the scene when a user enters an email and password right in the input field for username and passwords. Well let me walk you through on what happpens behind the scene.

Let us start with the main block of code responsible for taking the user input and running some checks. It is no other code than the "CONTEXT API" file.

## Code Breakdown Structure and Explanation.

### Context API Logic

Remember that among the tools mentioned, we talked about context api which happens to be the state management tool adopted for this project. The reason it was used was because of how easy it is to setup and no additional installation is needed to get it up and running.

Okay so righ in our codebase, we have a folder called "contexts" which is where we can find our codes responsible for authenticating a user.

In the types.js file, you can find the different types we want to use in our context logic. There we exported the LOGIN and REGISTER type.

Then again we can find the auth-context folder which houses the authentication logic. We did it this way for easy identification and good structuring of our codebase. Now in this folder, the types we exported from the types folder will come to be useful because we will use it to create our logic.

Now in the auth-context folder, we can find three more files which are the AuthContext, AuthReducer and the AuthState file. Let us explain what is contained in each file.
