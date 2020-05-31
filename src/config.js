const dev = {
  STRIPE_KEY: "pk_test_ID9G5oNPtC3LhO2l3gC5OkyZ00fI7zXTMt",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-52be63cmb7ys",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.pablordoricaw.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ngRFiaiZC",
    APP_CLIENT_ID: "3rh0bag1odq6vb462vagru8au4",
    IDENTITY_POOL_ID: "us-east-1:5fc6b4f9-3435-4093-aeb9-261448387ef8",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_ID9G5oNPtC3LhO2l3gC5OkyZ00fI7zXTMt",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-tmp7n2wfbkz7",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.pablordoricaw.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ngRFiaiZC",
    APP_CLIENT_ID: "7t3fjmmg6em50qap21a21m58ru",
    IDENTITY_POOL_ID: "us-east-1:5fc6b4f9-3435-4093-aeb9-261448387ef8",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
