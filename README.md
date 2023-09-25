# REST API with Clean Architecture using Bun, Elysia, and Prisma ORM

This project is a RESTful API built with a clean architecture approach, utilizing the Bun for runtime, Elysia framework, and Prisma ORM for database operations. The API exposes two routes: `GET /users` and `POST /users`.

## Project Structure

The project structure is organized as follows:

- **src/**
  - **adapters/**
    - This directory contains adapters responsible for interacting with external systems or data sources.
  - **core/**
    - The core of the application, containing business logic and domain-specific code.
  - **external/**
    - External dependencies and configurations reside in this directory.
  - **http/**
    - This directory houses HTTP-related files and modules for handling API requests.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Before running the development server, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Bun](https://bunjs.dev/)
- [Prisma](https://www.prisma.io/)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/bryan-matheus/bun-clean-architecture-api.git
```

2. Navigate to the project directory:

```bash
cd bun-clean-architecture-api
```

3. Install project dependencies:

```bash
bun install
```

### Development

To start the development server, run the following command:

```bash
bun run dev
```

This will launch the server locally, and you can access it by opening [http://localhost:3000/](http://localhost:3000/) in your web browser.

## API Routes

The API provides the following routes:

- `GET /users`: Retrieve a list of users.
- `POST /users`: Create a new user.

You can use HTTP requests to interact with these routes and perform the respective actions.

## Dependencies

- [Bun](https://bunjs.dev/)
- [Elysia](https://elysia.dev/)
- [Prisma ORM](https://www.prisma.io/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
