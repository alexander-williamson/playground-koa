import serverless from "serverless-http";
import app from "./app"

const myApp = serverless(app);

export async function handler(event: any, context: any): Promise<any> {
  console.info({
    event, context
  })
  const result = await myApp(event, context);
  return result;
};