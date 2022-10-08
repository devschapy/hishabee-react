import React from 'react';
import Input from './Form/Input';
import { Avatar } from './Common/Avatar';

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between header-top">
        <div className=" col-6 py-2">
          <div className="col-9 d-flex gap-3">
            <Avatar className={`menu-icon mt-1 mr-3`} src={`/img/menu_open.png`} />
            <div className="w-100 position-relative">
              <Input
                className={`py-2 px-5 rounded border font-md`}
                type={`search`}
                placeholder={`অনুসন্ধান করুন`}
                id={`search`}
                label={<Avatar className={`search-icon`} src={`/img/search.png`} />}
              />
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div className="d-flex bg px-2 pt-2">
            <Avatar className={`imge`} src={`/img/Rectangle 2726.png`} />
            <div>
              <h1 className="font-md">এস এম আলীউজ্জামান</h1>
              <p className="font-sm">এস এম আলীউজ্জামান</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-md pl-3 py-2"><span className="font-bold">ব্যাবসার সার্বিক অবস্থা</span>/ লাভ ক্ষতির
        রিপোর্ট
      </h1>
    </header>
  )
}

export default Header;