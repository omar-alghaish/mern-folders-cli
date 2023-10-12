# MERN Stack CLI

## Overview

The MERN Stack CLI is a tool designed to simplify and automate the process of creating project structures for MERN (MongoDB, Express.js, React, Node.js) stack applications. It allows developers to quickly set up the skeleton for both frontend and backend applications, as well as full-stack projects, with or without SASS.

## Commands

- `mern-folders frontend create`: Creates a basic frontend project structure with React.
- `mern-folders frontend create --sass`: Creates a frontend project structure with SASS.
- `mern-folders backend create`: Sets up a basic backend project structure with Express.js and Node.js.
- `mern-folders fullstack create`: Creates both frontend and backend project structures for a full-stack MERN application.
- `mern-folders fullstack create --sass`: Creates a full-stack project with SASS .

## Usage

### Installing the CLI

```bash
npm install -g mern-folders
```

Creates a basic frontend project structure with React.

```bash
mern-folders frontend create
```

Creates a frontend project structure with SASS.

```bash
mern-folders frontend create --sass
```

Sets up a basic backend project structure with Express.js and Node.js and Error handling.

```bash
mern-folders backend create
```

Creates both frontend and backend project structures for a full-stack MERN application.

```bash
mern-folders fullstack create
```

Creates a full-stack project with SASS.

```bash
mern-folders fullstack create --sass
```

# NOTE

- Ensure Node.js and npm are installed on your system before using the CLI.
- For full-stack applications, the backend and frontend folders will be created separately in the project root.
- You can further customize your projects by modifying the generated files and adding additional dependencies as needed.
