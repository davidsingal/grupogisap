import Link from 'next/link';

const IntranetLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header className="border-b">
        <div className="flex h-16 items-center space-x-4 px-4">
          <h1>Grupo GISAP</h1>
          <nav className="flex space-x-4">
            <Link href="/intranet/administracion">Inicio</Link>
            <Link href="/intranet/administracion/inventario">Inventario</Link>
          </nav>
        </div>
      </header>
      <div className="m-auto max-w-5xl px-4 py-10">{children}</div>
    </div>
  );
};

export default IntranetLayout;
