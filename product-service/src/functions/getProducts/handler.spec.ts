import { formatJSONResponse } from '@libs/apiGateway';
import { getProducts } from './handler';

jest.mock('@libs/apiGateway', () => ({
  formatJSONResponse: jest.fn()
}));

(formatJSONResponse as jest.Mock).mockImplementation((_, val) => val);

describe('getProducts', () => {
  it('should return all products', async () => {
    const response: any = await getProducts();
    expect(Array.isArray(response)).toBeTruthy();
    expect(response.length).toBe(8);
  });
});
