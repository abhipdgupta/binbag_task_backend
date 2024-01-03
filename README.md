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


## Authentication method used is Cookie
### For api documentation swagger docs has been used . after using /user/login route you should not set up cookie in the swagger-ui using the pad lock , it is automatically been set in the header and is used in the subsequent request.
### due to browser security measure it doesnot allow to change cookie header.