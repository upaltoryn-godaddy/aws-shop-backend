import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import products from '@mocks/products.json';

export const getProducts: any = async () => {
  return formatJSONResponse(200, products);
}
