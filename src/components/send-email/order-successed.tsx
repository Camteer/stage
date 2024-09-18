
import { CartItemDTO } from '@/lib/types';
import React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate = ( orderId: number,
  items: CartItemDTO[]) => (
  <div> 
    <h1>Спасибо за покупку! 🎉</h1>

    <p>Ваш заказ #{orderId} оплачен. Список товаров:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.name} | {item.productItem.price} ₽ x {item.quantity} шт. ={' '}
          {item.productItem.price * item.quantity} ₽
        </li>
      ))}
    </ul>
  </div>
);