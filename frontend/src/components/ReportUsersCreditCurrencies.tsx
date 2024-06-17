import {
  useReportUsersCredit,
  useReportUsersCreditCurrencies,
} from "@/api/hooks/useReport";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const FormSchema = z.object({
  id: z.string().min(1, {
    message: "Заполните поле",
  }),
  cur: z.string(),
});

export const ReportUsersCreditCurrencies = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      cur: "",
    },
  });

  const [bankId, setBankId] = useState<number>(0);
  const [cur, setCur] = useState<string>("");

  const { data, refetch } = useReportUsersCreditCurrencies(cur, bankId);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data: ", data);
    const transformedData = Number(data.id);
    setBankId(transformedData);
    setCur(data.cur);
  }

  useEffect(() => {
    if (bankId !== null) {
      refetch();
    }
  }, [bankId, cur]);

  console.log(data);
  return (
    <div className="flex flex-col">
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
                <FormLabel>
                  Все клиенты, которые получили кредит в определенном банке и
                  валюте
                </FormLabel>
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
            name="cur"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Введите валюту"
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
            Найти
          </Button>
        </form>
      </Form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Имя</TableHead>
            <TableHead>Фамилия</TableHead>
            <TableHead className="text-left">Пасп. данные</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            ? data.map((person) => (
                <TableRow key={person.client.id}>
                  <TableCell className="font-medium">
                    {person.client.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {person.client.person.firstName}
                  </TableCell>
                  <TableCell>{person.client.person.lastName}</TableCell>
                  <TableCell>{person.client.person.passportNumber}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </div>
  );
};
