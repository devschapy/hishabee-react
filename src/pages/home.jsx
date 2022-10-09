import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Product from '../components/Product';
import Payment from '../components/Payment';
import { ProductData, PaymentData } from '../data';

const Home = () => {
  const [products, setProducts] = useState(ProductData);
  const [payments, setPayments] = useState(PaymentData);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <aside className="col-2 col-md-3 pt-2 px-4">
          <SideMenu />
        </aside>
        <main className='col-10 col-md-9 p-0'>
          <Header />

          <div className='container-fluid bg-gray py-3 d-flex gap-3'>
            <div className="col-8">
              <Product products={products} />
            </div>

            <div className='col-4'>
              <Payment payments={payments}/>
            </div>
          </div>

        </main>
      </div>
    </div>

  )
}

export default Home;