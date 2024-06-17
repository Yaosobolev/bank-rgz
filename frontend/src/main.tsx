import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./pages/Login.tsx";
import Layout from "./layouts/Layout.tsx";
import {
  UpdateCreditForm,
  CreateCreditForm,
  CurrenciesForm,
  ReportUsersCredit,
} from "./components/index.tsx";
import { ReportUsersCreditCurrencies } from "./components/ReportUsersCreditCurrencies.tsx";
import { ReportCreditExpert } from "./components/ReportCreditExpert.tsx";
import { CreditContact } from "./components/CreditContact.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "credit-contract",
        element: (
          <Layout>
            <CreateCreditForm />
          </Layout>
        ),
      },
      {
        path: "update-contract",
        element: (
          <Layout>
            <UpdateCreditForm />
          </Layout>
        ),
      },
      {
        path: "rate",
        element: (
          <Layout>
            <CurrenciesForm />
          </Layout>
        ),
      },
      {
        path: "report-users-credit",
        element: (
          <Layout>
            <ReportUsersCredit />
          </Layout>
        ),
      },
      {
        path: "report-users-credit-currency",
        element: (
          <Layout>
            <ReportUsersCreditCurrencies />
          </Layout>
        ),
      },
      {
        path: "report-credit-expert",
        element: (
          <Layout>
            <ReportCreditExpert />
          </Layout>
        ),
      },
      {
        path: "credit-expert",
        element: (
          <Layout>
            <CreditContact />
          </Layout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
