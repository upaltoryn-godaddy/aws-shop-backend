import { formatJSONResponse } from '@libs/apiGateway';
import { getProductById } from './handler';

jest.mock('@libs/apiGateway', () => ({
  formatJSONResponse: jest.fn()
}));

(formatJSONResponse as jest.Mock).mockImplementation((_, val) => val);

describe('getProductById', () => {
  it('should return a specific product', async () => {
    const event = { pathParameters: { id: '3' } };
    const response: any = await getProductById(event);
    expect(response.id).toBe('3');
  });

  it('should return not found message', async () => {
    const event = { pathParameters: { id: 'wrong id' } };
    const response: any = await getProductById(event);
    expect(response.message).toBe('Product not found');
  });
});
