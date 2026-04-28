'use client';

import { ModalProvider } from '@/context/ModalContext';
import DownloadModal from '@/components/DownloadModal/DownloadModal';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <DownloadModal />
    </ModalProvider>
  );
}
