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

### AuthContext File

The AuthContext file contains the first step you carry out if you want to make use of context api and hooks in your react app and that is the initialization. createContext was imported from React because it comes preinstalled in React. Then we assign the createContext to the AuthContext variable. We made use of AuthContext variable so it can follow same pattern and have same name as that of the file (for organizational purposes). As usual we have to export because we want to use it right in the main context file which we will get to soon. See the screenshot below:

### AuthReducer File

Remember we exported our types from the type.js file. Now this is one of the places we'd make use of it. We had to import the LOGIn and REGISTER types from types. Why?

With the types imported, we can actually create the action type we want to happen and then the payload stored for our use. The AuthReducer takes in the previous State of the app (We need the prevState so we don't overwrite the former state righ inside the app) and then it takes typ and payload too. Now we have to create the action type we want using the switch statement and case. The case is normally the types exported and like we said, we have to return the prevState and then assign the payload to a variable since we want to use the payload gotten. As usual, we have to export to make use of the file.
See the screenshot below:

### AuthState File

The AuthState file is the engine of the app. This is where we receive state, update state, save/store states, reuse state and then pass state to the entire application. Because we exported the types, authcontext and reducer, we need to import them right into our Authstate file.

The Authstate takes a prop called children because we will wrap the entire app with the authstate file and as such making the entire app its children.

The Authstate file takes an initialState. For now because we are storing the registered user righ in our localstorage, we are trying to retrieve it from the localstorage.
Now we have to set the state and dispatch, the pass the reducers(which are the action creators) and the initialstate in out useReducer hook.

Then we created a function called userLogin which takes some param such as email and password and then dispatches the action type which is LOGIN, sets the payload email and password and then set them to localstorage for later use. This same logic was used on the login function because like we mentioned earlier, we used no backend for this app.

Finally we have to return and wrap our entire "children" using the AuthContext.Provider created earlier. We also need to pass in the values which includes our state and the function we want to call in our login app. See screenshot below:

### What happens at the Login:

Now is time for us to make use of the context logics we created. But before we can make use of it in our login file, we need to wrap our entire file with the authstate file so we can read and use the values passed down. We have to import the authstate right inside the index.js file on our root app and then wrap the entire app with it.. See screenshot below:

Once this is done, we can import the AuthContext file in our Login.jsx file and then the useContext hook for us to be able to use the context file in the login file.

We have to destructure the userLogin from AuthContext then pass on the right parameters which are the email and password in order to authenticate a user.
See screenshot below:

You might ask yourself how does the app know when a user is authenticated? Well we have a file called the PrivateRoutes which takes in the authcontext file via import, we get a user out from the authcontext and if a user exists, we use the Outlet from react router dom to allow the use pass in otherwise we use the Navigate from react router dom to push them to login.
See screenshot below:

### The custom Hook to Get User

So part of the task was to use a custom hook to get a user from localstorage and that brings us to the useLST hook created. This useLST hook extracts localstorage value. The main buildtools for this includes the useState and useEffect.

The useLST hook takes in the key (key of the localstorage value) and the initialValue.

We then make use of the state to get item by key from localstorage and we need to check if an item exists inorder to return a JSON parsed item otherwise we return the initial value. Now because this key and value can change from time to time, we had to monitor the change using the useEffect hooks which took the key and value as dependencies and hence watch whenever there is an update across the app. See screenshot below:

OYA ADD YOUR CONCLUSION. CIAO
