import React from 'react';
import NavBar from 'components/Navbar/index';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard</h1>

        <div className="row px-3">
           <div className="col-sm-6">

             <h5>Todas vendas</h5>
              <BarChart />
           </div>
           <div className="col-sm-6">

             <h5>Todas vendas</h5>
             <DonutChart />
           </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">
            Todas as vendas
          </h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
