import Header from "./components/header";
import SideMenu from "./components/side-menu";
import Overview from "./components/overview";

function App() {

  return (
    <div style={{ padding: '40px 30px', backgroundColor: 'EEF2F8' }} >
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: '18% 57% auto' }} >
        <SideMenu className='grid-section' />
        <Overview className='grid-section' />
      </div>
    </div>
  );
}

export default App;
