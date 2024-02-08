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
import type { WorkOrderResponse } from '@/types/api-response';

const WorkOrdersTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['stock'],
    queryFn: () => api.get<WorkOrderResponse>('/api/work-orders').then((res) => res.data),
  });
  return (
    <div className="rounded-md border">
      {isLoading && <Loader />}
      {data?.data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código de órden</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.attributes.code}</TableCell>
                <TableCell>{d.attributes.order_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default WorkOrdersTable;
