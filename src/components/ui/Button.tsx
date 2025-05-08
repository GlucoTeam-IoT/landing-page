import React, { type ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "blue" | "red";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  fullWidth?: boolean;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "2xl",
  fullWidth = false,
  href,
  onClick,
  className = "",
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center transition-all";

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  // Rounded classes
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  // Variant classes
  const variantClasses = {
    primary: "bg-xd-blue text-white hover:bg-opacity-90",
    secondary:
      "border border-xd-blue text-xd-blue hover:bg-xd-blue hover:text-white",
    blue: "bg-xd-blue text-white hover:bg-opacity-90",
    red: "bg-xd-red text-white hover:bg-opacity-90",
  };

  // Width class
  const widthClass = fullWidth ? "w-full" : "";

  // Combine classes
  const classes = `${baseClasses} ${roundedClasses[rounded]} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  // Render button or link
  if (href) {
    return (
      <a href={href} onClick={onClick as any} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
