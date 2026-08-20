/* Global error boundary for the app router */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: Props) {
  // Log the error for debugging purposes
  useEffect(() => {
    
    console.error('Error caught by GlobalError:', error);
  }, [error]);

  return (
    <main className="mercitrader-site error-page">
      <section className="error-section" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Oops! Something went wrong.</h1>
        <p style={{ color: 'var(--gray)', marginBottom: '24px' }}>{error.message}</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button onClick={() => reset()} className="btn btn-primary">Retry</button>
          <Link href="/" className="btn btn-secondary">Go Home</Link>
        </div>
      </section>
    </main>
  );
}
