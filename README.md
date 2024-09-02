# Allegre - API (BACK_END)

## Introduction

Allegre API provides a platform for managing student organizations. It includes functionalities for managing organizations, users, and roles within an organization. The API supports various levels of user permissions and provides validation for data entry.

## Features

- **User Authentication**: Secure user authentication with role-based access control.
- **Organization Management**: CRUD operations for managing organizations, including their names, CNPJ, logos, and contact details.
- **Role-Based Access Control**: Users have roles such as `SUPER_ADMIN`, `ORG_ADMIN`, `ORG_MEMBER`, `ORG_TEACHER`, `ORG_PARENT`, and `ORG_STUDENT`, each with different permissions.
- **Data Validation**: Ensures that the data entered into the system meets predefined criteria.
- **Swagger Documentation**: Interactive API documentation for testing endpoints directly from the browser.

## Dependencies

To run the API, you need the following dependencies:

- **[Docker](https://www.docker.com/)** - Containerization platform for developing, shipping, and running applications.
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment.
- **[NestJS](https://nestjs.com/)** - Framework for building efficient and scalable server-side applications.
- **[Prisma](https://www.prisma.io/)** - ORM for database management.
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database management system.
- **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)** - Library to hash passwords.
- **[Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)** - Library for creating and verifying JSON Web Tokens.
- **[Swagger](https://swagger.io/)** - API documentation and testing tool.

## Setup and Configuration

### Configuration of the Database

1. Create a PostgreSQL instance using Docker:

   ```bash
   docker run --name postgres-allegre-api -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -p 5432:5432 -d -t postgres
   ```

2. Create a `.env` file in the project root directory with the following content:

   ```env
   DATABASE_URL=postgresql://docker:docker@localhost:5432/allegre-api
   ```

### Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/xcodedi/allegre-api.git
   ```

2. Navigate to the project folder and install dependencies:

   ```bash
   cd allegre-api
   yarn install
   ```

3. Run Prisma migrations to set up the database schema:

   ```bash
   yarn prisma migrate deploy
   ```

4. Optionally, seed the database with initial data:

   ```bash
   yarn prisma db seed
   ```

5. Run the project in development mode:

   ```bash
   yarn start:dev
   ```

6. Run the project in production mode:

   ```bash
   yarn start
   ```

## API Documentation

The API documentation is available via Swagger UI. After starting the server, you can access it at:

```
http://localhost:3000/api
```

## Usage

You can test the API endpoints directly from the Swagger documentation.
