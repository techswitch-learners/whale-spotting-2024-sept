# Whale Spotting

This is a project to help users find out more about whales and to encourage them to go and spot whales in the wild.

## Setting up

A database needs to be prepared, and all required dependencies need to be installed, before the project can be successfully run.

### Inside pgAdmin

First, create a user with the following credentials and permissions:

- Username `whales`
- Password `whales`
- Able to login

Then, create a database called `whales`, owned by the user created previously (also called `whales`).

### Inside the root directory

```bash
dotnet tool restore
npm install
```

### Inside the `backend/` directory

```bash
dotnet restore
dotnet dotnet-ef database update
```

### Inside the `frontend/` directory

```bash
npm install
```

## Running the project

To run the project locally, the backend and frontend should be started separately.

### Inside the `backend/` directory

```bash
dotnet watch run
```

### Inside the `frontend/` directory

```bash
npm start
```

### Seeding Data

Data will be seeded in development.

You can find the seeding data files in the `/backend/SeedData` folder.

These files contain the sample data and methods that are called in Program.cs (inside the `if (app.Environment.IsDevelopment())` statement) to populate the database accordingly.


### Admin

After seeding the data, the user table is seeded with the following admin:
UserName = "Admin"
Email = "admin@email.com"
Password = "Pa$$word123"

## pre-commit hooks

When committing changes a pre-commit hook will run that includes runs a linter and the tests for both frontedn and backend.

If you need to commit without the pre-commit hook running you can used the `--no-verify` flag when making your commit

```bash
git commit --no-verify -m "your commit message here"
```
