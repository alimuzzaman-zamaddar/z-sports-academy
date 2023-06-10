import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";
import AuthProviders from "./Pages/Providers/AuthProviders";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </AuthProviders>
    </QueryClientProvider>
  </div>
);