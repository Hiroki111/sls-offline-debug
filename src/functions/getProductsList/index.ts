import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: {
          origin: process.env.CLIENT_URL,
          headers: ['Content-Type'],
          allowCredentials: false,
        },
        responses: {
          200: {
            description: 'This is a success response',
            bodyType: 'Product',
          },
        },
      },
    },
  ],
};
