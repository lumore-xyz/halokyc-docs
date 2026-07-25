import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BrandLogo } from '@/components/brand-logo';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="halo-brand-lockup">
          <BrandLogo />
          <span className="halo-docs-label">Docs</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'Dashboard',
        url: 'https://halokyc.com/dashboard',
        external: true,
      },
    ],
  };
}
