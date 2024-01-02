# Local Setup

## Folder Structure
```
|-- app.js
|-- src/
|   |-- connect/
|   |-- controllers/
|   |-- docs/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- services/
|   |-- utils/
|   |-- README.md
|-- node_modules
|-- package.json
|-- README.md
|-- .env
|-- .gitignore

```

## Authentication method used is Cookie


# Initialize

```
git clone <this-repository-url>
cd binbag_task_backend
npm ci
```

# Dot Env file
### create .env file with following fields in project root directory
```
MONGO_URI=<mongodb url eg:mongodb://127.0.0.1:27017/binbag_task>
PORT=<port eg:8000>
JWT_SECRET=<your jwt secret>

```

# Api Documentation
### <your_backend_url>/docs
### eg:  http://localhost:8000/docs