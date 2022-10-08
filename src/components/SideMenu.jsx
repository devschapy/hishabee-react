import React from 'react';
import { Avatar} from './Common/Avatar';


const SideMenu = () => {
    return (
        <aside className="col-2 col-md-3 pt-2 px-4">
            <Avatar src={`/img/company-logo.png`} />
            <div className="mt-5 d-flex">
                <Avatar src={`img/Vector (3).png`} />
                <div className="ml-3">
                    <span className="font-lg font-bold">মেসার্স রোনাসা স্টীল</span> <br />
                    <span className="font-md">দোকান নং #২৩, নিউ সুপার মার্কে...</span>
                </div>
            </div>
            <div className="my-4">
                <Avatar src={`img/Vector (4).png`} />
                <span className="ml-2">হোম</span>
            </div>
            <div>
                <Avatar className={`side-icon`} src={`img/add-icon.png`} />
                <span className="ml-2">বিক্রি করুন</span>
            </div>
        </aside>
    )
}

export default SideMenu;