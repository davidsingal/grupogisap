import StockTable from '@/components/stock-table';

const StockPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2>Inventario material disponible</h2>
      </div>
      <StockTable />
    </div>
  );
};

export default StockPage;
