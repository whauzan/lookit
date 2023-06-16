'use client';

import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      aria-label="close modal"
      onClick={() => router.back()}
      className="h-6 w-6 rounded-md p-0"
      variant="subtle"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
