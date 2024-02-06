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

const HistoryTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código material</TableHead>
            <TableHead>Nombre material</TableHead>
            <TableHead>Orden</TableHead>
            <TableHead>Fecha utilización</TableHead>
            <TableHead className="text-right">Unidades utilizadas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.code}>
              <TableCell>{d.id}</TableCell>
              <TableCell>{d.material}</TableCell>
              <TableCell>{d.code}</TableCell>
              <TableCell>{d.order_date}</TableCell>
              <TableCell className="text-right">{d.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;
