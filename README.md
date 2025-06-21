# Welcome to GMFrontend

GMFrontEnd is the React-based frontend for **Growth Mindset**, a fitness tracking web app that allows users to manage their workouts, exercises, and sets. Built with TypeScript, React Query, and Axios.
You can visit the site here at [growthmindsetproject.com](https://growthmindsetproject.com/).

### Features

- User authentication (login/register)
- Protected routes and role-based access (Admin vs. User)
- User Profile Management (Update email/password, Delete account, ADMIN: Promote user to admin/Demote admin to user)
- Workout dashboard with history tracking
- Axios + React Query for efficient data fetching
- Form validation using react-hook-form + Zod
- Responsive, accessible UI with modern design

### Tech Stack

- React (with Vite)
- TypeScript
- React Router
- React Query
- Axios
- react-hook-form + Zod
- Tailwind CSS

### How to contribute

1. Clone this repository
   In your favorite IDE, type the following:

```
    git clone https://github.com/klevi43/GMFrontEnd

```

2. Install Node JS
   Please install the latest version of Node JS found here:

https://nodejs.org/

3. Install dependencies
   Run the following commands in the terminal of your favorite IDE:

```
    cd GMFrontEnd
```

```
    npm install
```

4. Run the application
   Run the following command in the terminal of your favorite IDE:

```
    npm run dev
```

## Backend

- This frontend connects to a Spring Boot
  backend. You can find the backend repo here:
  [GMBackend](https://github.com/klevi43/GMBackend)

## Known Issues

- Currently there is no graceful handling of the token expiring after the 3 hour time limit has been reached. To resolve this, simply refresh your page and go to the login screen to login again. Improved handling is planned for a future update.
- Logging out removes the token from cookies subsequent requests; however, the token is not invalidated by the backend. This is not a security concern because the jwt is stored in an HTTP only cookie and has a short lifespan (1 hour). A refresh token functionality is planned for a future update.
- Thank you for your patience and understanding.
