import React from "react";
import { FormInput } from "../form-input";
import { FormTextarea } from "../text-area/form-textarea";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <span className="flex flex-col gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Имя" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
        />
        <FormInput
          name="surname"
          className="text-base"
          placeholder="Отчество"
        />
        <FormInput name="email" className="text-base" placeholder="E-Mail" />
        <FormInput name="phone" className="text-base" placeholder="Телефон" />
      </span>

      <span className="flex flex-col gap-5">
        <FormInput name="region" className="text-base" placeholder="Регион" />
        <FormInput
          name="locality"
          className="text-base"
          placeholder="Населенный пункт"
        />
        <FormInput name="street" className="text-base" placeholder="Улица" />
        <span className="flex justify-between gap-10">
          <FormInput name="house" className="text-base" placeholder="Дом" />
          <FormInput name="frame" className="text-base" placeholder="Корпус" />
          <FormInput
            name="apartment"
            className="text-base"
            placeholder="Квартира"
          />
        </span>
        <FormInput name="index" className="text-base" placeholder="Индекс" />
      </span>
      <FormTextarea
        name="comment"
        className="text-base"
        placeholder="Комметарий к заказу"
      ></FormTextarea>
      
    </div>
  );
};
