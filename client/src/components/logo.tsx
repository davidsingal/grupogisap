import { Righteous } from 'next/font/google';
import { Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';

const righteous = Righteous({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const Logo = () => (
  <div className="flex items-center space-x-1">
    <Wifi className="text-primary" strokeWidth={3} size={28} />
    <div className={cn(righteous.className, 'text-2xl')}>GISAP</div>
  </div>
);

export default Logo;
