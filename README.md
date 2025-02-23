# Prueba Técnica - Ticket Management App

## Overview
This is an Angular 19.1 application designed to manage event tickets. It provides CRUD operations to create, update, and list tickets, interacting with a backend API hosted on Strapi.

## Features
- Fetch tickets from a Strapi API
- Create, update, and archive tickets
- Display ticket details in a table format
- Utilizes Angular Material for UI components
- Uses JWT authentication for secure API requests

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [Angular CLI](https://angular.io/cli) (version 19.1.7 recommended)

### Steps
1. Clone the repository:
   ```sh
   git clone [https://github.com/your-repository-url.git](https://github.com/luisfer90/prueba-tecnica.git)
   cd prueba-tecnica
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   ng serve
   ```

4. Open `http://localhost:4200/` in your browser.

## API Endpoints
The application interacts with the following endpoints:

### Get all tickets
```
GET https://essential-vacation-6ff9a7193e.strapiapp.com/api/prueba-tecnica-tickets
```

### Get a specific ticket by ID
```
GET https://essential-vacation-6ff9a7193e.strapiapp.com/api/prueba-tecnica-tickets/{id}
```

### Create a new ticket
```
POST https://essential-vacation-6ff9a7193e.strapiapp.com/api/prueba-tecnica-tickets
```
**Body:**
```json
{
  "data": {
    "title": "Boleto concierto Coldplay",
    "description": "Boleto concierto Coldplay, 15 de septiembre 2024, CDMX",
    "status": "Disponible",
    "active": true,
    "archived": false
  }
}
```

### Update a ticket
```
PUT https://essential-vacation-6ff9a7193e.strapiapp.com/api/prueba-tecnica-tickets/{id}
```
**Body:**
```json
{
  "data": {
    "title": "Updated Ticket Title",
    "description": "Updated description",
    "status": "Sold",
    "active": false,
    "archived": true
  }
}
```

## Upgrading Angular to Version 19.1
If you have an older version of Angular installed, update it by running:
```sh
ng update @angular/core @angular/cli
```
To update all dependencies automatically:
```sh
ng update
```

## Documentation
- [Angular Documentation](https://angular.io/docs)
- [Strapi API Reference](https://docs.strapi.io)
- [RxJS Operators](https://rxjs.dev/guide/operators)

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.

