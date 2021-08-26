export const formatJSONResponse = (code: number, body: any) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: code,
    body: JSON.stringify(body)
  }
}
