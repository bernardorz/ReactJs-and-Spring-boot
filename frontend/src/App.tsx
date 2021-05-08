import React from 'react';
import NavBar from 'components/Navbar/index';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
