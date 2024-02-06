import WorkOrdersTable from '@/components/work-orders-table';

const WorkOrdersPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2>Órdenes</h2>
      </div>
      <WorkOrdersTable />
    </div>
  );
};

export default WorkOrdersPage;
