import Link from 'next/link';
import React from 'react';
// import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
}
const UnderlineLink = (props: Props) => {
  const { children, to } = props;
  return (
    <Link href={to}>
      <a className='inline-blocktext-base group font-medium hover:bg-white active:bg-white'>
        {children}
        <span className='block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full'></span>
      </a>
    </Link>
  );
};

export default UnderlineLink;
