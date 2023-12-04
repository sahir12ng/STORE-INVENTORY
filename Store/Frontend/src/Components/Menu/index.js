import "../../App.css";
import AppHeader from "../AppHeader"
import AppFooter from "../AppFooter";
import PageContent from "../PageContent";
import SideMenu from "../SideMenu";

function Pol() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default Pol;
