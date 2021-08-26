import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import products from '@mocks/products.json';

const getProducts: any = async (event) => {
  return formatJSONResponse(200, products);
}

export const main = middyfy(getProducts);
