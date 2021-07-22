import Header from "./components/header";
import SideMenu from "./components/side-menu";
import Overview from "./components/overview";
import Profile from "./components/profile";

function App() {

  return (
    <div style={{ padding: '40px 30px', backgroundColor: 'EEF2F8' }} >
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: '76% 24%' }} >
        <SideMenu className='grid-section' />
        <Overview className='grid-section' />
        <Profile />
      </div>
    </div>
  );
}

export default App;
