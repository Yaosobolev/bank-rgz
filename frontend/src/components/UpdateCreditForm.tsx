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
import { useUpdateCredit } from "@/api/hooks/useCredit";

const FormSchema = z.object({
  id: z.string().min(1, {
    message: "Заполните поле",
  }),
  creditAmount: z.string().optional(),
  usagePeriod: z.string().optional(),
  interestRate: z.string().optional(),
  monthlyPayment: z.string().optional(),
});

export const UpdateCreditForm: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      creditAmount: "",
      usagePeriod: "",
      interestRate: "",
      monthlyPayment: "",
    },
  });

  const createUpdateMutation = useUpdateCredit();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const transformedData: any = { id: Number(data.id) };
    if (data.creditAmount)
      transformedData.creditAmount = Number(data.creditAmount);
    if (data.usagePeriod)
      transformedData.usagePeriod = Number(data.usagePeriod);
    if (data.interestRate)
      transformedData.interestRate = Number(data.interestRate);
    if (data.monthlyPayment)
      transformedData.monthlyPayment = Number(data.monthlyPayment);
    console.log("data: ", data);
    createUpdateMutation.mutate(transformedData, {
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
              <FormLabel>Выдача кредита</FormLabel>
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
          name="creditAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите сумму кредита"
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
          name="usagePeriod"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите срок пользования кредита"
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
          name="interestRate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите процентную ставку"
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
          name="monthlyPayment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите сумму ежемесячного платежа"
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
