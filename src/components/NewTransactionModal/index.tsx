import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface NewTransActionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransActionsModal({
  isOpen,
  onRequestClose,
}: NewTransActionsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título"></input>
        <input placeholder="Valor" type="number"></input>
        <input placeholder="Categoria"></input>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
