import { NextPage } from 'next';
import React from 'react';
import Header from '@/components/Layout/Header';
import SEO from '@/components/seo';
import Footer from './Footer';

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
      <Footer />
    </>
  );
};

export default Layout;