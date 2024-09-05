import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Имя должно содержать не менее 2-х символов' }),
  lastName: z.string().min(2, { message: 'Фамилия должна содержать не менее 2-х символов' }),
  surname: z.string().optional(),
  email: z.string().email({ message: 'Введите корректную почту' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  address: z.string().min(5, { message: 'Введите корректный адрес' }),
  region: z.string().optional(),
  locality: z.string().min(5, { message: 'Введите корректный адрес' }),
  street: z.string().min(1, { message: 'Введите корректную улицу' }),
  house: z.string().min(1, { message: 'Введите корректный дом' }),
  frame: z.string().optional(),
  apartment: z.string().min(1, { message: 'Введите корректную квартиру' }),
  index: z.string().min(6, { message: 'Введите корректный индекс' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;