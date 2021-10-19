import * as React from "react";
import { IndexPage } from "../page/IndexPage/IndexPage";
import { QueryProvider } from "../context/query/QueryProvider";

export const App: React.FC = React.memo(() => {
  return (
    <QueryProvider>
      <IndexPage />
    </QueryProvider>
  );
});
