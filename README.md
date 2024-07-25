
# Barba Brutal - Complete System for Barbershop

Welcome to the **Barba Brutal** repository, a comprehensive system developed to manage and optimize the operations of a modern barbershop. This project consists of three main components:

- **Frontend:** Developed with Next.js, providing a fast, interactive, and responsive user interface.
- **Backend:** Built with NestJS, ensuring a robust, scalable, and secure API.
- **Mobile:** Mobile application developed with Expo and React Native, allowing users to access barbershop services directly from their mobile devices.

Additionally, the project includes shared packages for TypeScript, ESLint configuration, and core functionalities used by both frontend and backend.

## Technologies Used

### Frontend:
- [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid and efficient styling.

### Backend:
- [NestJS](https://nestjs.com/): Progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [Prisma](https://www.prisma.io/): Modern and high-performance ORM (Object-Relational Mapping).
- [PostgreSQL](https://www.postgresql.org/): Advanced open-source relational database management system.

### Mobile:
- [Expo](https://expo.dev/): Platform for rapid mobile application development using JavaScript and React.
- [React Native](https://reactnative.dev/): Framework for cross-platform mobile app development.

## Features

- **Service Scheduling:** Allows clients to easily schedule appointments, viewing barbers' availability.
- **Client Management:** Records and manages client information, facilitating personalized service.
- **Inventory Control:** Monitors products and materials used in the barbershop.
- **Notifications:** Sends notifications to remind clients of their appointments.
- **Reports and Statistics:** Generates detailed reports on barbershop operations, aiding in decision-making.

## Project Structure

- **Frontend:** Source code located in the `apps/frontend` folder.
- **Backend:** Source code located in the `apps/backend` folder.
- **Mobile:** Source code located in the `apps/mobile` folder.
- **Shared Packages:**
  - **Core:** Located in the `packages/core` folder, containing shared functionalities used by both frontend and backend.
  - **ESLint Config:** Located in the `packages/eslint-config` folder, containing shared ESLint configurations.
  - **TypeScript Config:** Located in the `packages/typescript-config` folder, containing shared TypeScript configurations.


## How to Run the Project

### Prerequisites

- Node.js (v18 or higher)
- Yarn (package manager)
- PostgreSQL (for database)

### Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/barba-brutal.git
   cd barba-brutal

### Install dependencies
````
cd apps/frontend && npm install
cd ../backend && npm install
cd ../mobile && npm install
cd ../../
````

### Build the Project
````
yarn build
````

### Start Development server
````
yarn run dev
````