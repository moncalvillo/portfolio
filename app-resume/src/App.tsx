import "./App.scss";
import { MainLayout } from "./components/layouts/layouts";
import { ApiFormSection } from "./sections/apiFormSection";
import { ApiPathsSection } from "./sections/apiPathsSection";
import { ChangeLanguageSection } from "./sections/changeLanguageSection";
import { FooterSection } from "./sections/footerSection";
import { SummarySection } from "./sections/summarySection";

function App() {
  return (
    <MainLayout>
      <ChangeLanguageSection />
      <SummarySection />
      <ApiPathsSection />
      <ApiFormSection />
      <FooterSection />
    </MainLayout>
  );
}

export default App;
