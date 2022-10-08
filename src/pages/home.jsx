import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import Product from '../components/Product';
// import Payment from '../components/Payment';

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <SideMenu />

        <main className='col-10 col-md-9 p-0'>
          <Header />
          <div className='container-fluid bg-gray py-3'>

            <Product/>

          </div>
        </main>
      </div>
    </div>

  )
}

export default Home;