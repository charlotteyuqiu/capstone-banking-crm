# Project Title

Banking Relationship Management System

## Overview

Banking Relationship Management System is an application designed to help financial advisors or banking advisors in retail banking manage client relationships by actively tracking client portfolio statuses.

### Problem

Financial advisors often need to manage numerous client relationships, keeping track of client portfolios and their due dates, and maintaining communication with clients. This process is time-consuming and prone to errors without a centralized system to manage and track these activities effectively.

### User Profile

-Financial advisors:
Who need to access client databases easily
Who need to track portfolio due dates and receive alerts
Who need to communicate with clients using pre-made email templates

### Features

As a user, I want to be able to view the client database
As a user, I want to be able to edit/add/delete client data
As a user, I want to be able to edit/add/delete client portfolio data
As a user, I want to be able to view alerts for portfolio due dates
As a user, I want to be able to communicate with clients using pre-made email templates

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client dependencies:
  - react
  - react-router-dom
  - axios
  - sass
- Server dependencies:
  - knex
  - express
  - cors
  - dotenv
  - mysql

### APIs

- No external APIs will be used for this project. API will be created by server link

### Sitemap

- Home page
- List cafés
- View + Rate a café
- Register
- Login

### Mockups

#### Home Page

![](home.png)

#### Register Page

![](register.png)

#### Login Page

![](login.png)

#### Enter Location Page

![](enter-location.png)

#### View Cafés Page

![](view-cafes.png)

#### View Café Page

![](view-cafe.png)

#### View Café Page (Rated state)

![](view-cafe-rated.png)

### Data

![](sql-diagram.png)

### Endpoints

**GET /cafes**

- Get cafés, with an optional "visited" if the user is logged in or not

Parameters:

- longitude: User-provided location as a number
- latitude: User-provided location as a number
- token (optional): JWT used to add "visited" boolean

Response:

```
[
    {
        "id": 1,
        "name": "Quantum Coffee",
        "distance": 0.25,
        "averageRating": 4.5,
        "visited": true
    },
    ...
]
```

**GET /cafes/:id**

- Get café by id, with an optional "userRating" if the user is logged in or not

Parameters:

- id: Café id as number
- token (optional): JWT used to add user rating

Response:

```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**POST /cafes/:id/rating**

- Logged in user can add their rating of a café

Parameters:

- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:

```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**PUT /cafes/:id/rating**

- Logged in user can update their rating of a café

Parameters:

- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:

```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 15 sample café geolocations in two different cities

- Create seeds with sample café data

- Deploy client and server projects so all commits will be reflected in production

- Feature: List cafés from a given location

  - Implement list cafés page including location form
  - Store given location in sessionStorage
  - Create GET /cafes endpoint

- Feature: View café

  - Implement view café page
  - Create GET /cafes/:id

- Feature: Rate café

  - Add form input to view café page
  - Create POST /ratings
  - States for add & update ratings

- Feature: Home page

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Integrate Google Places / Maps
  - View more details about a café
  - Visual radius functionality
- Forgot password functionality
- Ability to add a café
- Elite status badging for users and cafés: Gamify user ratings
- Expand rating system
  - Coffee
  - Ambiance
  - Staff
- Expanded user information: full name, favorite café
- Unit and Integration Tests
