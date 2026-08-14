"use client";

import Link from "next/link";
import { COMPANY_INFO, BUSINESSES } from "../data/businesses";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>{COMPANY_INFO.name}</h4>
          <p>{COMPANY_INFO.description}</p>
        </div>

        <div className="footer-section">
          <h5>Businesses</h5>
          <ul>
            {BUSINESSES.map((b) => (
              <li key={b.id}>
                <Link href={`/businesses/${b.slug}`}>{b.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/businesses">Businesses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Contact</h5>
          <p>Email: <a href={`mailto:${COMPANY_INFO.contact.email}`}>{COMPANY_INFO.contact.email}</a></p>
          <p>Phone: <a href={`tel:${COMPANY_INFO.contact.phone}`}>{COMPANY_INFO.contact.phone}</a></p>
          <p>{COMPANY_INFO.contact.address}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
