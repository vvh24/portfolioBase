import React from "react";
import Link from "next/link";
import clsx from "clsx";

type RoundedButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const RoundedButton: React.FC<RoundedButtonProps> = ({ href, className, children }) => {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-md no-underline text-center font-medium transition-all";

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