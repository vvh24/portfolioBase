import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Allow <style jsx>{`...`}</style> and <style jsx global>{`...`}</style>
      style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> & {
        jsx?: boolean;
        global?: boolean;
      };
    }
  }
}

export {};
