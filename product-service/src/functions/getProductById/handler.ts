import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import products from '@mocks/products.json';

export const getProductById: any = async (event) => {
  const { id } = event.pathParameters;
  const product = products.find(p => p.id === id);

  if (!product) {
    return formatJSONResponse(404, { message: 'Product not found' });
  }

  return formatJSONResponse(200, product);
}
