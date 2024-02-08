'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import api from '@/services/api';
import Loader from '@/components/loader';
import type { MaterialAllocationResponse } from '@/types/api-response';

const HistoryTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['stock'],
    queryFn: () =>
      api
        .get<MaterialAllocationResponse>('/api/material-allocations', {
          params: {
            'populate[0]': 'material',
            'populate[1]': 'work_order',
          },
        })
        .then((res) => res.data),
  });
  console.log(data);
  return (
    <div className="rounded-md border">
      {isLoading && <Loader />}
      {data?.data && (
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
            {data.data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.attributes.material.data.attributes.code}</TableCell>
                <TableCell>{d.attributes.material.data.attributes.name}</TableCell>
                <TableCell>{d.attributes.work_order.data.attributes.code}</TableCell>
                <TableCell>{d.attributes.used_at}</TableCell>
                <TableCell className="text-right">{d.attributes.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default HistoryTable;
