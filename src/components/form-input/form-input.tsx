"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}

      <div className="relative">
        <Input
          className="h-12 text-md rounded-none border-b-4 focus:border-black"
          {...register(name)}
          {...props}
        />

        {value && (
          <button
            type="button"
            onClick={onClickClear}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",
              className
            )}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {errorText && (
        <p className={cn("text-red-500 text-sm absolute", className)}>
          {errorText}
        </p>
      )}
    </div>
  );
};
