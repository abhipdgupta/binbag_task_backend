const {userDocs} = require('./user.docs');
const {reimbursementDocs} = require('./reimbursement.docs');

// Combine Swagger docs JS
const docs = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'API Documentation',
    description: 'API documentation for user authentication and reimbursement requests'
  },
  paths: {
    ...userDocs.paths,
    ...reimbursementDocs.paths
  },
  components: {
    securitySchemes: {
      ...userDocs.components.securitySchemes,
      ...reimbursementDocs.components.securitySchemes
    }
  }
};

module.exports={swaggerDocs:docs}
