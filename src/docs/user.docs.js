exports.userDocs={
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "User Authentication API",
      "description": "API documentation for user registration, login, and logout"
    },
    "paths": {
      "/user/register": {
        "post": {
          "summary": "Register a new user",
          "tags": ["User"],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "username": {
                      "type": "string"
                    },
                    "email": {
                      "type": "string",
                      "format": "email"
                    },
                    "password": {
                      "type": "string"
                    }
                  },
                  "required": ["username", "email", "password"]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "User registered successfully",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "User registered",
                    "data": {
                      "username": "example_user",
                      "email": "user@example.com"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/user/login": {
        "post": {
          "summary": "User login",
          "tags": ["User"],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "format": "email"
                    },
                    "password": {
                      "type": "string"
                    }
                  },
                  "required": ["email", "password"]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "User logged in successfully",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "User logged in",
                    "data": {
                      "token": "example_token",
                      "username": "example_user",
                      "email": "user@example.com"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/user/logout": {
        "post": {
          "summary": "User logout",
          "tags": ["User"],
          "security": [
            {
              "cookieAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "User logged out successfully",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "User logged out"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "securitySchemes": {
        "cookieAuth": {
          "type": "apiKey",
          "in": "cookie",
          "name": "token"
        }
      }
    }
  }
  