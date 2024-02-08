'use client';

import { useQuery } from '@tanstack/react-query';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import api from '@/services/api';
import Loader from '@/components/loader';
import type { MaterialResponse } from '@/types/api-response';

const StockTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['stock'],
    queryFn: () => api.get<MaterialResponse>('/api/materials').then((res) => res.data),
  });

  return (
    <div className="rounded-md border">
      {isLoading && <Loader />}
      {data?.data && (
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
            {data?.data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.attributes.code}</TableCell>
                <TableCell>{d.attributes.name}</TableCell>
                <TableCell>{d.attributes.delivered_at}</TableCell>
                <TableCell className="text-right">{d.attributes.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default StockTable;
