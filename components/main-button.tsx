import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface MainButtonProps {
  children: ReactNode;
  className?: string;
}

export function MainButton({ children, className = '' }: MainButtonProps) {
  const combinedClassName = `p-3 min-w-30 text-xs tracking-tight bg-transparent border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once hover:text-white ${className}`;

  return (
    <Button className={combinedClassName} variant="outline">
      {children}
    </Button>
  );
}

export default MainButton;
