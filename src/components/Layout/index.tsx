import { NextPage } from 'next';
import React from 'react';
import Header from '@/components/Layout/Header';
import SEO from '@/components/seo';
import Footer from './Footer';
import { Html } from 'next/document';

interface Props {
  children: React.ReactNode,
  title: string
  description?: string
}

const Layout: NextPage<Props> = ({ children, title, description }: Props) => {
  return (
    <>
      <Header />
      <SEO title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;