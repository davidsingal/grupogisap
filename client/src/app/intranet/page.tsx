import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intranet | Grupo GISAP',
};

const IntranetPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Inicia sesión</h1>
        <p>Introduce tu correo eléctronico de empresa y contraseña:</p>
      </div>
    </main>
  );
};

export default IntranetPage;
