import React from 'react';
import { Card } from './Common/Card';
import { Avatar } from './Common/Avatar';

const Payment = ({payments}) => {
    return (
        <>
            <h1 className="font-lg font-bold">মূল্য পরিশোধ মাধ্যম</h1>
            {
                payments.map((item, index) => {
                    return (
                        <Card className={`col-6`}>
                            <Avatar src={item.image}/>

                            <label htmlFor={item.id}>
                                {item.name}
                            </label>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default Payment;


// {/* <div className="col-4 checkout-area">
//             <h1 className="font-lg font-bold">মূল্য পরিশোধ মাধ্যম</h1>
            
//             <div className="px-3">
//                 <div className="row">
//                     <div className="relative py-2 px-3 rounded border border-1 col-6">
//                         <img src="./assets/img/money 2.png" alt="" />
//                         <span className="font-md pl-2">নগদ টাকা</span>
//                         <input className="absolute" type="radio" />
//                     </div>

//                     <div className="relative py-2 px-2 rounded border border-1 col-6">
//                         <div>
//                             <img src="./assets/img/cashless-payment 2.png" alt="" />
//                             <span className="font-md">ডিজিটাল পেমেন্ট</span>
//                         </div>
//                         <input className="absolute" type="radio" />
//                     </div>

//                     <div className="relative py-2 px-3 rounded border border-1 col-6 mt-3">
//                         <img src="./assets/img/Group 4622.png" alt="" />
//                         <span className="font-md pl-2">বাকী</span>
//                         <input className="absolute" type="radio" />
//                     </div>

//                     <div className="py-2 px-3 rounded border border-1 text-center col-6 mt-3">
//                         <span className="font-md">আরও দেখুন</span>
//                         <div className="d-flex justify-content-between">
//                             <img src="./assets/img/image 317.png" alt="" />
//                             <img src="./assets/img/image-removebg-preview 1.png" alt="" />
//                             <img src="./assets/img/image 313.png" alt="" />

//                         </div>
//                     </div>
//                 </div>
//                 <div className="row mt-3">
//                     <input className="cashInput w-100 form-control border" type="text" />
//                     <p className="mt-2 font-lg font-bold ">বাকী আছেঃ ৳ <span
//                         className="total-payment">২৩,০০০</span>
//                     </p>
//                 </div>
//             </div>
//             <button className="btn btn-primary w-100">পেমেন্ট কনফার্ম করুন</button>
//         </div> */}