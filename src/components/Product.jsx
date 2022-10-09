import React from 'react';
import Input from './Form/Input';
import { Card } from './Common/Card';
import { Avatar } from './Common/Avatar';

const Product = ({ products }) => {

    return (
        <Card>
            <div className="pb-3 px-3 ">
                <Input
                    divStyle={`w-100 position-relative`}
                    label={<Avatar src={`/img/search.png`} className={`search-icon`} />}
                    className={`py-2 px-5 rounded border font-md`}
                    type={`search`}
                    placeholder={`অনুসন্ধান করুন`}
                    id={`search-product`}
                />
            </div>

            <div className="grid-container">
                <div className="grid-items bg-gray py-1 border border-top-0">
                    <label className="checkbox"><input type="checkbox" /></label>
                    <span className="product font-bold font-lg"># পণ্য (৩)</span>
                    <span className="stok font-bold font-lg">স্টক</span>
                    <span className="by font-bold font-lg">ক্রয় মূল্য</span>
                    <span className="sell font-bold font-lg">বিক্রয় মূল্য</span>
                </div>

                {
                    products.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`grid-items ${item?.nxtPrdct?.length ? ' border py-1' : null}`}
                            >
                                <Input
                                    id={`${item.id}`}
                                    type='checkbox'
                                    label={<></>}
                                    className="checkbox"
                                    divStyle="nxtPrdct-ckbox"
                                />
                                <label
                                    htmlFor={item.id}
                                    className={`product ${item?.nxtPrdct?.length ? 'unic-product' : null}`}
                                >
                                    <div className="d-flex">
                                        <Avatar src={item.prdctImage} />
                                        <div className="px-2">
                                            <span className="font-lg">{item.name}</span><br />
                                            <span className="font-md">{item.subName}</span>
                                        </div>
                                    </div>

                                    <div className='grid-container mt-3'>
                                        {
                                            item?.nxtPrdct?.map((itm, index) => {
                                                console.log(itm);
                                                return (
                                                    <div key={index} className='grid-items'>
                                                        <Input
                                                            id={`${itm.id}`}
                                                            type='checkbox'
                                                            label={<></>}
                                                            className="checkbox"
                                                        />
                                                        <label htmlFor={itm.id}>
                                                            <div className="d-flex">
                                                                <Avatar src={itm.prdctImage} />
                                                                <span className="font-md px-3">{itm.name}</span>
                                                            </div>
                                                        </label>
                                                        <label htmlFor={itm.id} className="stok font-lg">{itm.stok}</label>
                                                        <label htmlFor={itm.id} className="by font-lg">{itm.by}</label>
                                                        <label htmlFor={itm.id} className="sell font-lg">{itm.sell}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </label>
                                <label htmlFor={item.id} className="stok font-lg">{item.stok}</label>
                                <label htmlFor={item.id} className="by font-lg">{item.by}</label>
                                <label htmlFor={item.id} className="sell font-lg">{item.sell}</label>
                            </div>
                        )
                    })
                }
            </div>
        </Card>
    )
};

export default Product;