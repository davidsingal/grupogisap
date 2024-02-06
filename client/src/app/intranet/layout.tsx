import Link from 'next/link';
import Logo from '@/components/logo';

const IntranetLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header className="border-b">
        <div className="flex h-16 items-center justify-between space-x-4 px-4">
          <Logo />
          <div className="flex justify-end space-x-4">
            <nav className="flex space-x-6 text-sm">
              <Link href="/intranet/administracion">Inicio</Link>
              <Link href="/intranet/administracion/inventario">Inventario</Link>
              <Link href="/intranet/administracion/registro-inventario">Registro</Link>
              <Link href="/intranet/administracion/ordenes">Órdenes</Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="m-auto max-w-5xl px-4 py-10">{children}</div>
    </div>
  );
};

export default IntranetLayout;
