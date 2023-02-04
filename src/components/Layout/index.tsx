import { NextPage } from 'next';
import React, { Fragment } from 'react';
import Header from '@/components/Layout/Header';
import SEO from '@/components/seo';
import Footer from './Footer';

interface Props {
  children: React.ReactNode,
  title: string
  description?: string
}

const Layout: NextPage<Props> = ({ children, title, description }: Props) => {
  return (
    <Fragment>
      <Header />
      <SEO title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;