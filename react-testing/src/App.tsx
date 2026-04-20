import { useMemo, useState } from "react";
import type { View } from "./layout/Sidebar";
import Layout from "./layout/Layout";
import ExampleForm from "./components/ExampleForm";

function App() {
  const [activeView, setActiveView] = useState<View>("example-form");

  const currentPage = useMemo(() => {
    switch (activeView) {
      case "example-form":
        return <ExampleForm />;
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
