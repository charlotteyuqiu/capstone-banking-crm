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
As a user, I want to be able to edit/add client data
As a user, I want to be able to edit/add client portfolio data
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

- Home/Client page
- List Clients
- View + edit/add a client
- View +edit/add a portfolio
- View portfolios that's coming due within 1 month

### Mockups

#### Home Page

![](Home-Client-Page.png)

#### Portfolio Page

![](Portfolio-Page.png)

#### Edit Client Page

![](Edit-Client-Page.png.png)

#### Edit portfolio Page

![](Edit-Portfolio-Page.png.png)

#### Add Client/Portfolio Page

![](Add-Client-Page.png.png)
![](Add-Portfolio-Page.png.png)

#### Alert-Modal

![](Alert-Modal.png)

#### Email-page-example

![](Email-Page.png)

### Data

![](Database-Structure.png)

### Endpoints

**GET /clients**

- Get all clients
  Parameters:

- id: client id as number

Response:

```
[
{
    "client_id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@gmail.com",
    "phone": "437-660-6701"
  }
    ...
]
```

**GET /portfolios**

- Get all portfolios

Parameters:

- id: portfolo id as number

Response:

```
 {
    "portfolio_id": 1,
    "category": "GIC",
    "amount": "50000.00",
    "due_date": "2024-12-01T05:00:00.000Z",
    "client_id": 1,
    "description": "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year."
  }
```

**POST /client/:id**

Response:

```
{
    "client_id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@gmail.com",
    "phone": "437-660-6701"
}
```

**POST /portfolio/:id**

Response:

```
{
  "portfolio_id": 27,
  "category": "mortgage",
  "amount": "350000.50",
  "due_date": "2024-10-05T04:00:00.000Z",
  "client_id": 3,
  "description": "This mortgage is in 5 years variable rate 3.75%, payment frequency by month."
}
```

**PUT /client/:id**

- user can update or edit client details

Response:

```
{
    "client_id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@gmail.com",
    "phone": "437-660-6701"
}
```

**PUT /portfolio/:id**

- user can update or edit portfolio details

Response:

```
{
  "portfolio_id": 5,
  "category": "mortgage",
  "amount": "350000.50",
  "due_date": "2024-10-05T04:00:00.000Z",
  "client_id": 3,
  "description": "This mortgage is in 5 years variable rate 3.75%, payment frequency by month."
}
```

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 20 sample client deatils

- Create seeds with sample client data

- Deploy client and server projects so all commits will be reflected in production

- Feature: Client/portfolio List

  - Implement client/portfolio list/home page
  - Create GET /clients endpoint

- Feature: Edit clients/portfolios

  - Implement edit clients/portfolio page
  - Create PUT /clients or portfolios/:id

- Feature: add client/portfolio

  - Add form input to add client page
  - Create POST endpoint

- Feature: Alert modal

  - Implement alert mesaage pop-up window

- Feature: Email Template Send

  - Implement email template page

- Bug fixes

- DEMO DAY

## Nice-to-haves

-Delete-Modal page
