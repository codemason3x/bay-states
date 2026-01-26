import type { ReactNode } from 'react';
import { FooterSection, HeaderSection } from '../../organisms';

interface LayoutProps {
    children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="relative w-full overflow-hidden">
            <HeaderSection />
            {children}
            <FooterSection />
        </div>
    );
}