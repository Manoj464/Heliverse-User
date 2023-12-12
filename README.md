# Project Name

Heliverse User Management

## Overview

This project is a user management system that allows users to filter and display a list of users based on various criteria such as gender, availability, and domain.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Features

- **User Filtering:** Users can filter the displayed list based on gender, availability, and domain.
- **Search Functionality:** Users can search for specific users using the search bar.
- **Pagination:** The user list is paginated to display a limited number of users per page.
- **Responsive Design:** The application is designed to work seamlessly on various screen sizes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- ([npm install react-redux](https://redux.js.org/)) (Redux)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/heliverse-user-management.git
```

2. Navigate to the project directory:
 ```
cd heliverse-user-management
```

3. Install dependencies
```
npm install
```

### Usage

1. Start the development server:
```
npm start
```

2. Open your browser and navigate to http://localhost:3000 to view the application.

## Folder Structure

The project follows a typical React project structure:

```plaintext
my-react-app/
│
├── public/           # Static files 
├── src/              # Source code
│   ├── components/   # React components
│   ├── data/         # Mock data 
│   ├── redux/        # Redux-related files (actions, reducers, store)
│   ├── utils/        # Utility functions 
│   ├── App.js        # Main component 
│   ├── index.js      # Entry point for rendering the app
│   └── ...           # Other source code files
├── .gitignore        # Git ignore file
├── package.json      # Node.js package file
├── README.md         # Project documentation
└── ...               # Other project-related files
```

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript applications.
- [Material-UI](https://mui.com/): React UI framework for building responsive web applications.
- [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
