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
import { useCreateCredit } from "@/api/hooks/useCredit";

const FormSchema = z.object({
  number: z.string().min(1, {
    message: "Заполните поле",
  }),
  issueDate: z.string().min(1, {
    message: "Заполните поле",
  }),
  creditAmount: z.string().min(1, {
    message: "Заполните поле",
  }),
  usagePeriod: z.string().min(1, {
    message: "Заполните поле",
  }),
  interestRate: z.string().min(1, {
    message: "Заполните поле",
  }),
  monthlyPayment: z.string().min(1, {
    message: "Заполните поле",
  }),
  clientId: z.string().min(1, {
    message: "Заполните поле",
  }),
  creditExpertId: z.string().min(1, {
    message: "Заполните поле",
  }),
  creditPurposeId: z.string().min(1, {
    message: "Заполните поле",
  }),
  accountId: z.string().min(1, {
    message: "Заполните поле",
  }),
});

export const CreateCreditForm: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      number: "",
      issueDate: "",
      creditAmount: "",
      usagePeriod: "",
      interestRate: "",
      monthlyPayment: "",
      clientId: "",
      creditExpertId: "",
      creditPurposeId: "",
      accountId: "",
    },
  });

  const createCreditMutation = useCreateCredit();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const transformedData = {
      ...data,
      creditAmount: Number(data.creditAmount),
      usagePeriod: Number(data.usagePeriod),
      interestRate: Number(data.interestRate),
      monthlyPayment: Number(data.monthlyPayment),
      clientId: Number(data.clientId),
      creditExpertId: Number(data.creditExpertId),
      creditPurposeId: Number(data.creditPurposeId),
      accountId: Number(data.accountId),
    };
    console.log("data: ", data);
    createCreditMutation.mutate(transformedData, {
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
          name="number"
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
          name="issueDate"
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
        <FormField
          control={form.control}
          name="clientId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите код клиента"
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
          name="creditExpertId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите код кредитного эксперта"
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
          name="creditPurposeId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите код цели кредита"
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
          name="accountId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Введите код счета"
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
