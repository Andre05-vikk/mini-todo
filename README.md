# Mini-Todo

BDD/TDD-based Todo application created as a school project.

## Overview

This project demonstrates BDD (Behavior-Driven Development) and TDD (Test-Driven Development) approach in software development. The application provides a simple task management system with clear commit history showing the RED-GREEN-REFACTOR cycle.

## Features

- Add tasks with validation
- Mark tasks as completed
- Filter tasks by status (open/done)
- Input validation (empty titles not allowed)

## Technologies

- **Runtime**: Bun
- **BDD Framework**: Cucumber.js
- **Test Framework**: Bun test
- **CI/CD**: GitHub Actions
- **Container**: Docker & Docker Compose

## Project Structure

```
mini-todo/
├── src/                    # Source code
│   └── TodoList.js        # TodoList class
├── tests/                 # Unit tests
│   └── TodoList.test.js
├── features/              # BDD scenarios (Gherkin)
│   ├── todo-management.feature
│   └── todo-filtering.feature
├── steps/                 # Cucumber step definitions
│   └── todo-steps.js
├── .github/workflows/
│   └── test.yml           # CI configuration
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Running the Project

### Locally with Bun

1. Install dependencies:
```bash
bun install
```

2. Run unit tests:
```bash
bun test tests/
```

3. Run BDD tests:
```bash
bun run test:bdd
```

4. Run all tests:
```bash
bun run test:all
```

### Docker Compose

The project can be run with Docker Compose without any additional dependencies:

```bash
docker compose up --build
```

This command:
- Builds the Docker image
- Installs dependencies
- Runs all tests (unit + BDD)

## BDD Scenarios

The project has 2 feature files with a total of 4 scenarios:

### todo-management.feature
- Added todo is visible
- Complete a todo

### todo-filtering.feature
- Filter only open todos
- Cannot add todo with empty title (negative scenario)

## TDD Cycle

The project was created following the TDD cycle with clear commit history:

1. **RED**: Write a failing test
2. **GREEN**: Write minimal code to pass the test
3. **REFACTOR**: Improve code quality

Commit message format:
- `red: <description>` - Tests that fail
- `green: <description>` - Code that makes tests pass
- `refactor: <description>` - Code improvements

## CI/CD

GitHub Actions automatically runs all tests on every push and pull request to the main branch.

Workflow:
1. Setup Bun
2. Install dependencies
3. Run unit tests
4. Run BDD tests

## Requirements Met

The project meets all required criteria:

- ✅ At least 2 .feature files
- ✅ At least 4 scenarios total
- ✅ Negative scenario present
- ✅ CI runs all tests on every push
- ✅ README complete
- ✅ Entire project works with docker-compose
- ✅ Commit history shows TDD cycle (RED-GREEN-REFACTOR)

## Author

Andre Park
