# Playground - Koa Hello world

Example Typescript server that runs Koa and uses types from `@types/koa`, `@types/koa-json`, `@types/koa-logger` and `@types/koa-router`.

Source code adapter from:
- https://medium.com/@masnun/typescript-with-koa-part-1-c4843f16a4ad

Typescript `tsconfig.json` configuration adapted from:
- https://khalilstemmler.com/blogs/typescript/node-starter-project/

## Run this demo locally under Node.js

```
npm install
npm run dev
```

This runs the Koa app directly via `app.ts` using `TS Node`. 

Note that there are no files emitted by TS Node as it is not required.

## Run this via AWS Lambda

Build this package and zip it into a deployable AWS Lambda Zip. This creates a deployment package with `index.js` as the entry file and `handler` as the async entry point that lambda expects.

This uses the exported `App`. Check out the `/app/index.ts` file.

```
import serverless from "serverless-http";
import app from "./app"

const myApp = serverless(app);

export async function handler(event: any, context: any): Promise<any> {
  const result = await myApp(event, context);
  return result;
};
```

This uses the `serverless-http` package:

- https://www.npmjs.com/package/serverless-http

When you run `npm run build` a Lambda zip file is produced. 

Upload this to a Lambda function, and your code with all the routing configured will run. You can test it with the AWS test API Gateway JSON files in the Lambda editor.

Example AWS Lambda output given the `GET /` path in the test input:

```
{
  "rawPath": "/"
}
```

returns:

```
{
  "statusCode": 200,
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "content-length": "23"
  },
  "isBase64Encoded": false,
  "body": "{\n  \"hello\": \"world!\"\n}"
}
```

To access the `POST /users` endpoint:

You can conncet this to a Lambda Function URL or an API Gateway with a `$default` stage and `$default` (catch-all) route. This will allow the full routing of Koa.