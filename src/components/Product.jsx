import React from 'react';
import Input from './Form/Input';
import { ProductData } from '../productData';
import { Card } from './Common/Card';
import { Avatar } from './Common/Avatar';

const Product = () => {

    return (
        <div className="col-8">
            <Card>
                <div className="pb-3 px-3 ">
                    <Input
                        divStyle={`w-100 position-relative`}
                        label={<Avatar src={`/img/search.png`} className={`search-icon`} />}
                        className={`py-2 px-5 rounded border font-md`}
                        type={`search`}
                        placeholder={`অনুসন্ধান করুন`}
                        id={`search`}
                    />
                </div>

                <label className="grid-container">
                    <div className="grid-items bg-gray py-1 border border-top-0">
                        <span className="checkbox"><input type="checkbox" /></span>
                        <span className="product font-bold font-lg"># পণ্য (৩)</span>
                        <span className="stok font-bold font-lg">স্টক</span>
                        <span className="by font-bold font-lg">ক্রয় মূল্য</span>
                        <span className="sell font-bold font-lg">বিক্রয় মূল্য</span>
                    </div>

                    {
                        ProductData.map((item, index) => {
                            console.log(item);
                            return (
                                <div key={index} className={item.styles}>
                                    <input id={item.id} className={`${item.uniCheckStylel} checkbox`} type={item.checkbox} />
                                    <label htmlFor={item.id} className="product">
                                        <div className="d-flex">
                                            <Avatar src={item.prdctImage} />
                                            <div className="px-2">
                                                <span className="font-lg">{item.name}</span><br />
                                                <span className="font-md">{item.subName}</span>
                                            </div>
                                        </div>

                                        {/* {
                                            item.nxtPrdct.map((itm, index) => {
                                                <input id={itm.id} className={`checkbox`} type={itm.checkbox} />

                                            })
                                        } */}
                                    </label>
                                    <label htmlFor={item.id} className="stok font-lg">{item.stok}</label>
                                    <label htmlFor={item.id} className="by font-lg">{item.by}</label>
                                    <label htmlFor={item.id} className="sell font-lg">{item.sell}</label>
                                </div>
                            )
                        })
                    }



                </label>
            </Card>
        </div>
    )
}

export default Product;