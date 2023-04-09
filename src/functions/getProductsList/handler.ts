import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const getProductsList = async () => {
  try {
    const products = await new Promise((res) => {
      setTimeout(() => res([{ name: 'Foo' }]), 1);
    });
    return formatJSONResponse({ products }, 200);
  } catch (error) {
    return formatJSONResponse({ message: 'Something Went Wrong, Please try again later!' }, 500);
  }
};

export const main = middyfy(getProductsList);
