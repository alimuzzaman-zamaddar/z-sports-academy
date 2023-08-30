import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";
import AuthProviders from "./Pages/Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950">
    <div className="max-w-[1390px] mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </AuthProviders>
      </QueryClientProvider>
    </div>
  </div>
);
