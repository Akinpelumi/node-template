const {
  PROJECT_NODE_ENV,
  PROJECT_PROD_PORT,
  PROJECT_PROD_DATABASE_URL,
  PROJECT_PROD_ALLOWABLE_ORIGINS
} = process.env;

export default {
  PROJECT_NODE_ENV,
  PROJECT_PORT: PROJECT_PROD_PORT,
  PROJECT_DATABASE_URL: PROJECT_PROD_DATABASE_URL,
  PROJECT_ALLOWABLE_ORIGINS: PROJECT_PROD_ALLOWABLE_ORIGINS
};
