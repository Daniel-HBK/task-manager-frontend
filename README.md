# Task Manager - Laravel API + Next.js

A clean and modern task management application built with Laravel (backend API) and Next.js (frontend).

## Project Structure

```
tasks-la/
├── backend/          # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       └── TaskController.php
│   │   └── Models/
│   │       └── Task.php
│   ├── routes/
│   │   └── api.php
│   └── config/
│       └── cors.php
└── frontend/         # Next.js Application
    └── src/
        └── app/
            ├── components/
            │   ├── TaskCard.tsx
            │   └── TaskList.tsx
            ├── types/
            │   └── task.ts
            └── page.tsx
```

## Features

- **Laravel API**: RESTful endpoints serving task data with pagination
- **Next.js Frontend**: Modern React-based UI with TypeScript
- **Responsive Design**: Mobile-friendly grid/list layout
- **Task Status**: Visual indicators for Pending, In Progress, and Done states
- **Pagination**: Efficient data loading with customizable page size
- **Clean Architecture**: Separated concerns with clear project structure

## Prerequisites

- PHP 8.1+
- Composer
- Node.js 18+
- npm or yarn
- SQLite (usually comes pre-installed with PHP)

## Setup Instructions

### Backend (Laravel API)

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install PHP dependencies:

```bash
composer install
```

3. Copy the environment file:

```bash
cp .env.example .env
```

4. Generate application key:

```bash
php artisan key:generate
```

5. Create the SQLite database file:

```bash
touch database/database.sqlite
```

6. Run database migrations to create the tasks table:

```bash
php artisan migrate
```

7. Seed the database with initial tasks:

```bash
php artisan db:seed --class=TaskSeeder
```

8. Start the Laravel development server:

```bash
php artisan serve
```

The API will be available at `http://localhost:8000`

### Frontend (Next.js)

1. Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

2. Install Node dependencies:

```bash
npm install
```

3. Start the Next.js development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8000`

## API Endpoints

### GET /api/tasks

Returns paginated tasks with metadata.

**Query Parameters:**

- `page` (optional): Page number (default: 1)
- `per_page` (optional): Items per page (default: 10)

**Example:** `GET /api/tasks?page=2&per_page=6`

### POST /api/tasks

Create a new task.

### Task Object Structure

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task description",
  "status": "Pending" | "In Progress" | "Done",
  "created_at": "2025-08-21T08:00:00.000000Z",
  "updated_at": "2025-08-21T08:00:00.000000Z"
}
```

### Creating a Task (POST /api/tasks)

```json
{
  "title": "New Task",
  "description": "Optional description",
  "status": "Pending" // Optional, defaults to "Pending"
}
```

## Database

The application uses **SQLite** as the database, which is lightweight and requires no additional setup. The database file is stored at `backend/database/database.sqlite`.

### Initial Task Data

The database seeder includes 15 sample tasks.

## Technologies Used

### Backend

- **Laravel 11**: PHP framework for building the API
- **SQLite**: Lightweight database for storing tasks
- **CORS**: Configured for cross-origin requests from Next.js
- **Eloquent ORM**: Database abstraction layer

### Frontend

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: Modern state management

## Development Notes

- The Laravel API uses SQLite database for persistent storage
- Tasks can be created via POST request (no authentication required)
- CORS is configured to allow requests from `http://localhost:3000`
- The frontend fetches paginated data with customizable page size (3, 6, 9, or 12 items)
- Responsive grid layout adapts to screen size (1-3 columns)
- Loading states and error handling are implemented
- Pagination controls show current page, total items, and navigation buttons

## Database Management

- **Reset database**: `php artisan migrate:fresh --seed`
- **Run only migrations**: `php artisan migrate`
- **Seed database**: `php artisan db:seed --class=TaskSeeder`

## Running Both Applications

For the complete experience, run both servers simultaneously:

1. Terminal 1 (Laravel): `cd backend && php artisan serve`
2. Terminal 2 (Next.js): `cd frontend && npm run dev`
3. Open browser to `http://localhost:3001`

## License

This project is open source and available for educational purposes.
