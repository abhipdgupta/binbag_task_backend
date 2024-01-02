exports.reimbursementDocs={
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "Reimbursement API",
      "description": "API documentation for handling reimbursement requests"
    },
    "paths": {
      "/r_request/submit-request": {
        "post": {
          "summary": "Submit a reimbursement request",
          "tags": ["Reimbursement"],
          "security": [
            {
              "cookieAuth": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "totalAmount": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    }
                  },
                  "required": ["totalAmount", "description"]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Reimbursement request submitted successfully",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "Successfully submitted your Reimbursement Request",
                    "data": {
                      "requestId": "example_request_id"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/r_request/": {
        "get": {
          "summary": "Fetch all reimbursement requests",
          "tags": ["Reimbursement"],
          "security": [
            {
              "cookieAuth": []
            }
          ],
          "parameters": [
            {
              "name": "page",
              "in": "query",
              "description": "Page number for pagination",
              "schema": {
                "type": "integer",
                "default": 1
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Number of items per page",
              "schema": {
                "type": "integer",
                "default": 10
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successfully retrieved all Reimbursement Requests",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "Successfully retrieved all Reimbursement Requests",
                    "data": [
                      {
                        "requestId": "example_request_id",
                        "employeeId": "example_employee_id",
                        "totalAmount": 100.0,
                        "description": "Example description"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "/r_request/filter": {
        "get": {
          "summary": "Filter reimbursement requests",
          "tags": ["Reimbursement"],
          "security": [
            {
              "cookieAuth": []
            }
          ],
          "parameters": [
            {
              "name": "username",
              "in": "query",
              "description": "Filter by username",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "status",
              "in": "query",
              "description": "Filter by status",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successfully retrieved filtered Reimbursement Requests",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "Successfully retrieved filtered Reimbursement Requests",
                    "data": [
                      {
                        "requestId": "example_request_id",
                        "employeeId": "example_employee_id",
                        "totalAmount": 100.0,
                        "description": "Example description",
                        "status": "pending"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "/r_request/status": {
        "put": {
          "summary": "Update reimbursement request status",
          "tags": ["Reimbursement"],
          "security": [
            {
              "cookieAuth": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "updatedStatus": {
                      "type": "string"
                    },
                    "requestId": {
                      "type": "string"
                    }
                  },
                  "required": ["updatedStatus", "requestId"]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successfully updated reimbursement request status",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "status_code": 200,
                    "message": "Successfully updated request",
                    "data": {
                      "requestId": "example_request_id",
                      "updatedStatus": "approved"
                    }
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
  