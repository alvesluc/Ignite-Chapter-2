import Modal from 'react-modal';
import { Container } from './styles';
import { TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

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
         <TransactionTypeContainer> 
           <button type="button">
             <img src={incomeImg} alt="Entrada"/>
             <span>Entrada</span>
           </button>
           <button type="button">
             <img src={outcomeImg} alt="Saída"/>
             <span>Saída</span>
           </button>
         </TransactionTypeContainer>
        <input placeholder="Categoria"></input>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}