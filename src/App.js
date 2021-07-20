import Header from "./components/header";
import SideMenu from "./components/side-menu";
import Overview from "./components/overview";

function App() {

  return (
    <div style={{ padding: '40px 30px', backgroundColor: 'EEF2F8' }} >
      <Header />
      <SideMenu />
      <Overview />
    </div>
  );
}

export default App;
