import { Modal } from 'antd';
import IndicatorForm from '@/components/domains/IndicatorForm';
import stockData from '@/db/stocks.json';
import type { IndicatorFormType } from '@/types';

interface IndicatorModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  onFinish: (values: IndicatorFormType) => void;
}

export default function IndicatorModal({ isModalOpen, onClose, onFinish }: IndicatorModalProps) {
  return (
    <Modal open={isModalOpen} onCancel={onClose} footer={null} centered>
      <IndicatorForm onFinish={onFinish} stocks={stockData} />
    </Modal>
  );
}
