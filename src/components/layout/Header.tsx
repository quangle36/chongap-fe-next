import Link from 'next/link';
import * as React from 'react';

import UnderlineLink from '@/components/UnderlineLink';

import { commonStrings } from '@/translation/vi';
import { stringUtils } from '@/utils/string';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  const categories = [
    {
      id: 1,
      name: 'Đất TP.HCM',
      url: 'dat-tp-hcm',
      subCategories: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Bình Thạnh',
        'Thủ Đức',
      ],
    },
    {
      id: 2,
      name: 'Nhà bán TP.HCM',
      url: 'nha-ban-tp-hcm',
      subCategories: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Bình Thạnh',
        'Thủ Đức',
      ],
    },
    {
      id: 3,
      name: 'Tin tức',
      url: 'tin-tuc',
      subCategories: ['Tin tức Bình Dương', 'Thị trường bất động sản'],
    },
    {
      id: 4,
      name: 'Dự án',
      url: 'du-an',
      subCategories: [
        'Căn hộ - Phức hợp TM - Biệt thự',
        'Khu dân cư - Đô thị mới',
      ],
    },
    {
      id: 5,
      name: 'Thông tin',
      url: 'thong-tin',
      subCategories: ['Phong thuỷ', 'Kinh nghiệm mua bán nhà đất'],
    },
  ];

  return (
    <div className='shadow-2xl '>
      <div className='navbar mx-auto w-3/4  bg-white p-0 text-black lg:justify-center'>
        <div className='navbar-start flex lg:hidden'>
          <div className='dropdown drawer-button'>
            <label
              htmlFor='my-drawer'
              tabIndex={0}
              className='btn btn-ghost drawer-button lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
          </div>
        </div>
        <div className='navbar-start hidden lg:inline-block'>
          {/* <LogoIcon /> */}
        </div>
        <div className='navbar-center'>
          <div className='text-main-blue hidden text-xl font-bold md:inline-block lg:hidden'>
            {commonStrings.brandName.toUpperCase()} -{' '}
            {commonStrings.brandSlogan.toUpperCase()}
          </div>
          <div className='hidden lg:flex'>
            {categories.map((category) => (
              <div key={category.id} className='dropdown-hover dropdown ml-8'>
                <UnderlineLink to='/'>{category.name}</UnderlineLink>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu w-52 rounded-md bg-base-100 p-2 text-sm shadow'
                >
                  {category.subCategories.map((subCategoriesItem) => {
                    const subCategoriesUrl =
                      stringUtils.standardDistrict(subCategoriesItem);
                    return (
                      <li key={subCategoriesItem}>
                        <Link href={`${category.url}/${subCategoriesUrl}`}>
                          <a>{subCategoriesItem}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <div className='mr-4'>
            <UnderlineLink to='signin'>{commonStrings.signIn}</UnderlineLink>
          </div>

          <UnderlineLink to='signup'>{commonStrings.signUp}</UnderlineLink>
        </div>
        <div className='navbar-end flex lg:hidden'>{/* <LogoIcon /> */}</div>
      </div>
    </div>
  );
}
