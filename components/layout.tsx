import * as React from 'react';
import Header from './header';
import { LayoutProps } from '../interfaces';

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
