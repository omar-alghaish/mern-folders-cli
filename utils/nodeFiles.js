const nodeIndex = `
import express from "express";
import cors from "cors";

import dbConnection from "./configs/database.js";
import routes from "./routes/index.js";
import dotenvConfig from "./configs/dotenv.js";
import morganConfig from "./configs/morgan.js";
import server from "./configs/server.js";
import ApiError from "./utils/apiError.js";
import globalError from "./middlewares/error.middleware.js";

dotenvConfig();
dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

morganConfig(app);

app.use("/api/v1", routes);

app.all("*", (req, res, next) => {
  next(new ApiError(\`can not find this route: \${req.originalUrl}\`, 400));
});

app.use(globalError);

server(app);

process.on("unhandledRejection", (err) => {
  console.error(
    \`\${"unhandledRejection Error:".red} \${err.name} => \${err.message}}\`
  );
  server.close(() => {
    console.error(\`shutting down...\`);
    process.exit(1);
  });
});
`;

const dbConfig = `import mongoose from "mongoose";
import "stylesh";

const dbConnection = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.DB_URI)
    .then((connect) =>
      console.log(\`connected to database: \${connect.connection.name.color("lime")}\`)
    );
};

export default dbConnection;
`;

const serverConfig = `import "stylesh";

const server = (app) => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, (err) => {
    console.log(\`App running on port: \${PORT.color("lime")}\`);
  });
};

export default server;
`;

const errorMiddleware = `
import ApiError from "../utils/apiError.js";

const sendErrorForDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorForProd = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const handleJwtInvalidSignature = () =>
  new ApiError("Invalid token, please login again...", 401);

const handleJwtExpired = () =>
  new ApiError("Expired token, please login again...", 401);

const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorForDev(err, res);
  } else {
    if (err.name === "JsonWebTokenError") err = handleJwtInvalidSignature();
    if (err.name === "TokenExpiredError") err = handleJwtExpired();

    sendErrorForProd(err, res);
  }
};
export default globalError;

`;

const validatorMiddle = `import { validationResult } from "express-validator";

const validatorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export default validatorMiddleware;
`;

const apiError = `// @desc  this class is responsible about operation errors (errors that i can predict)
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith(4) ? "fail" : "error";
    this.isOperational = true;
  }
}

export default ApiError;
`;

const dotenv = `import dotenv from "dotenv";

const dotenvConfig = () =>
  dotenv.config({
    path: "config.env",
  });

export default dotenvConfig;
`;

const morgan = `import morgan from "morgan";
import "stylesh";

const morganConfig = (app) => {
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(\`mode: \${process.env.NODE_ENV.color('lime')}\`);
  }
  if (process.env.NODE_ENV === "production") {
    console.log(\`mode: \${process.env.NODE_ENV.color('lime')}\`);
  }
};

export default morganConfig;
`;

const configEnv = `PORT=8000
NODE_ENV=development
BASE_URL=http://localhost:8000

# Database
DB_PASSWORD=
DB_USER=
DB_NAME=
DB_URI=mongodb://127.0.0.1:27017/

# JWT
JWT_SECRET_KEY=
JWT_EXPIRESIN=

# Email setings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASSWORD=
`;

const routesIndex = `import express from "express"
const router = express.Router()



export default router`;

module.exports = {
  nodeIndex,
  dbConfig,
  serverConfig,
  errorMiddleware,
  validatorMiddle,
  apiError,
  dotenv,
  morgan,
  configEnv,
  routesIndex,
};
