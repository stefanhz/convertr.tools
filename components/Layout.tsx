import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import SearchBar from './SearchBar';
import configData from '../config.json';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [buildNumber, setBuildNumber] = useState<string>('');

  React.useEffect(() => {
    // Read version from package.json dynamically
    import('../package.json').then((pkg) => {
      setBuildNumber(pkg.version || '');
    });
  }, []);

  return (
    <>
      <Head>
        <title>{configData.appName}</title>
        <meta name="description" content={configData.userInstructions.aboutText} />
        <meta name="keywords" content={configData.seoKeywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": configData.appName,
              "url": `https://${configData.domain}`,
              "description": configData.userInstructions.aboutText,
              "applicationCategory": "Utilities",
              "operatingSystem": "All",
              "browserRequirements": "Requires JavaScript",
            }),
          }}
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <SearchBar placeholder={configData.userInstructions.searchPlaceholder} />
          </div>
        </header>
        <main className="flex-grow max-w-5xl mx-auto px-4 py-6">{children}</main>
        <Footer buildNumber={buildNumber} footerLinks={configData.footerLinks} />
      </div>
    </>
  );
};

export default Layout;
