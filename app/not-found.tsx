/* Global not-found page for the app router */
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mercitrader-site error-page">
      <section className="error-section" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Page Not Found</h1>
        <p style={{ color: 'var(--gray)', marginBottom: '24px' }}>Sorry, we couldn't find the page you were looking for.</p>
        <Link href="/" className="btn btn-primary">Go Home</Link>
      </section>
    </main>
  );
}
