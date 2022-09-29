import { APIGatewayProxyHandler } from 'aws-lambda'
// import 'source-map-support/register'

export const postCard: APIGatewayProxyHandler = async (event,_context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Posting Cards",
        input: event,
      },
      null,
      2
    ),
  };
};