import { NextPage } from 'next';
import React from 'react';
import Header from '@/components/Layout/Header';
import SEO from '@/components/seo';

interface Props {
  children: React.ReactNode,
  title: string
}

const Layout: NextPage<Props> = ({ children, title }: Props) => {
  return (
    <>
      <Header />
      <SEO title={title} />
      <main>{children}</main>
    </>
  );
};

export default Layout;