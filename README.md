# Devit Backend

ExpressJS backend for VIT Bhopal forum - "Devit"

---
### Format for `src/config/config.ts`:

```ts
import dotenv from "dotenv";
dotenv.config();

// database configs
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useFindAndModify: false
}
const MONGO_USERNAME = process.env.MONGO_USERNAME || "your-username";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "your-l0ng-and-s3cur3-mongo-p4$$w0rd";
const MONGO_HOST = process.env.MONGO_HOST || "your-database-host.mongodb.net";
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "your-db-name";

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}`
}

// Secret used to encrypt cookies using client-sessions
const SESSIONS = {
    secret: "som3-l0ng-4nd-s3cure-unguessabl3-str!ng"
}

// server configs
const SERVER_PORT = process.env.SERVER_PORT || 3001;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

// client settings
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
const CLIENT_HOSTNAME = process.env.CLIENT_HOSTNAME || "localhost";

const CLIENT = {
    hostname: CLIENT_HOSTNAME,
    port: CLIENT_PORT
}

// final config to export
const config = {
    mongo: MONGO,
    server: SERVER,
    client: CLIENT,
    sessions: SESSIONS,
    production: false
}

export default config;
```