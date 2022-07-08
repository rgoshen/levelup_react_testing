import { add } from './add';

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`;
