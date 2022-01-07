import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
// const swagger_json = require("./swagger/swagger_build");
// import { http_response, send_error, HTTPError } from "@utils/http.util";

export const hello: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

// export const get_swagger_json: APIGatewayProxyHandler = async (
//   event,
//   context
// ) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         ...swagger_json,
//       },
//       null,
//       2
//     ),
//   };
// };

// export const api_docs = async (event, context, callback) => {
//   try {
//     let url
//     if (event.queryStringParameters) {
//       const stage: "dev" | "stage" | "live" = event.queryStringParameters.v
//       url = `https://seoltab-sls-api-docs.s3-ap-southeast-2.amazonaws.com/index_${stage}.html`
//     } else {
//       url = `https://seoltab-sls-api-docs.s3-ap-southeast-2.amazonaws.com/index_live.html`
//     }

//     return Promise.resolve(event)
//       .then(() => callback(null, {
//         statusCode: 302,
//         headers: {
//           Location: url
//         },
//       }))
//       .catch(callback);

//   } catch (err) {
//       return send_error(err, event, context)
//   }
// }
