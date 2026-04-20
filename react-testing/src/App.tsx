import { useMemo, useState } from "react";
import type { View } from "./layout/Sidebar";
import Layout from "./layout/Layout";
import ExampleForm from "./components/ExampleForm";
import ExampleUsersList from "./components/ExampleUsersList";

function App() {
  const [activeView, setActiveView] = useState<View>("example-form");

  const currentPage = useMemo(() => {
    switch (activeView) {
      case "example-form":
        return <ExampleForm />;
      case "example-users-list":
        return <ExampleUsersList />;
      default:
        return <ExampleForm />;
    }
  }, [activeView]);

  return (
    <Layout activeView={activeView} onChangeView={setActiveView}>
      {currentPage}
    </Layout>
  );
}

export default App;
