import React from 'react';

type FooterProps = {
  buildNumber: string;
  footerLinks: {
    feedback: string;
    buyMeACoffee: string;
    contact: string;
  };
};

const Footer: React.FC<FooterProps> = ({ buildNumber, footerLinks }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center text-gray-700 dark:text-gray-300 text-sm">
        <div className="mb-2 space-x-4">
          <a
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            About
          </a>
          <span className="build-number ml-2 text-xs text-gray-500 dark:text-gray-400">
            Build: {buildNumber}
          </span>
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            Terms
          </a>
          <a
            href={footerLinks.feedback}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            Feedback
          </a>
          <a
            href={footerLinks.buyMeACoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            Buy me a coffee
          </a>
          <a
            href={footerLinks.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
          >
            Contact
          </a>
        </div>
        <div>© 2025 convertr.tools - All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
