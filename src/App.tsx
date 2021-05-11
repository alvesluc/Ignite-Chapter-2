import { useState } from 'react';
import Modal from 'react-modal';

import { NewTransActionsModal } from './components/NewTransactionModal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransActionsModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
