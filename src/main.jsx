// import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "@styles/index.sass";
import "@styles/tailwind/tailwind.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   //   <App />
  //   // </StrictMode>,
  <Provider store={store}>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </Provider>,
);
