import React from "react";
import Link from "next/link";
import clsx from "clsx";

type RoundedButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const RoundedButton: React.FC<RoundedButtonProps> = ({ href, className, children }) => {
  // Responsive base styles: compact on mobile, roomy on md+
  const baseStyles = "inline-flex items-center justify-center rounded-md no-underline text-center font-medium transition-all px-3 py-2 text-sm md:px-4 md:py-2 md:text-base";

  if (href) {
    return (
      <Link href={href} className={clsx(baseStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(baseStyles, className)}>
      {children}
    </button>
  );
};

export default RoundedButton;