"use client";

import { useState } from "react";
import Script from "next/script";

import type { ContactCTA } from "@/types/portfolio";

type CalendlyBookingProps = {
  cta: ContactCTA;
};

export function CalendlyBooking({ cta }: CalendlyBookingProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`booking-panel ${isOpen ? "is-open" : ""}`}>
      <button
        className="button button-secondary"
        type="button"
        aria-expanded={isOpen}
        aria-controls="calendly-inline-booking"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "Hide Calendar" : cta.label}
      </button>

      {isOpen ? (
        <div className="calendly-embed-shell" id="calendly-inline-booking">
          <div className="booking-loading" aria-hidden="true">
            Loading booking calendar...
          </div>
          <div
            className="calendly-inline-widget"
            data-url={cta.href}
            style={{ minWidth: "320px", height: "680px" }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>
      ) : null}
    </div>
  );
}
