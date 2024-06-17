import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrencies } from "@/api/hooks/useCurrencies";

const FormSchema = z.object({
  id: z.string().min(1, {
    message: "Заполните поле",
  }),
  exchangeRate: z.string().min(1, {
    message: "Заполните поле",
  }),
});

export const CurrenciesForm: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      exchangeRate: "",
    },
  });

  const currenciesMutation = useCurrencies();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data: ", data);
    const transformedData = {
      id: Number(data.id),
      exchangeRate: Number(data.exchangeRate),
    };
    currenciesMutation.mutate(transformedData, {
      onSuccess: () => {
        form.reset();
      },
    });
  }
  return (
    <Form {...form}>
      <Toaster richColors position="top-center" />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[500px] w-2/3 space-y-4"
      >
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Обновить курс валюты</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите номер"
                  {...field}
                  className="h-6 placeholder:text-xs"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="exchangeRate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите дату оформления"
                  {...field}
                  className="h-6 placeholder:text-xs"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-6  bg-accent hover:bg-accent-foreground"
        >
          Создать
        </Button>
      </form>
    </Form>
  );
};
