import HistoryTable from '@/components/history-table';
import StockRegisterModal from '@/components/stock-register-modal';

const StockRegisterPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2>Histórico de uso de materiales</h2>
        <StockRegisterModal />
      </div>
      <HistoryTable />
    </div>
  );
};

export default StockRegisterPage;
