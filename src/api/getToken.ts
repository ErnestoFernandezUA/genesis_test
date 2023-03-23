export const getToken = async () => {
  const response: { token: string } = await fetch(
    'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Headers':
          'X-Requested-With, Content-Type, Authorization',
      },
    },
  ).then(r => r.json());

  return response;
};
