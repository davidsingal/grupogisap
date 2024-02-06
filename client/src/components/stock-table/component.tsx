'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import data from './data.json';

const StockTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código material</TableHead>
            <TableHead>Nombre material</TableHead>
            <TableHead>Fecha entrega</TableHead>
            <TableHead className="text-right">Unidades disponibles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.code}</TableCell>
              <TableCell>{d.material}</TableCell>
              <TableCell>{d.delivered_at}</TableCell>
              <TableCell className="text-right">{d.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockTable;
