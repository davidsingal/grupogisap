import HistoryTable from '@/components/history-table';
import InventaryTable from '@/components/inventary-table';
import MaterialRegisterModal from '@/components/material-register-modal';

const DashboardPage = () => {
  return (
    <div className="space-y-10">
      <div>
        <h2>Inventario materiales disponibles</h2>
        <InventaryTable />
      </div>

      <div>
        <div className="flex justify-between">
          <h2>Histórico de uso de materiales</h2>
          <MaterialRegisterModal />
        </div>
        <HistoryTable />
      </div>
    </div>
  );
};

export default DashboardPage;
