"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { buildWhatsappLink, buildMailtoLink } from "@/lib/utils/whatsapp";
import { business } from "@/lib/data/business";

export function PartnerForm({ dict }: { dict: Dictionary }) {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [companyType, setCompanyType] = useState<keyof Dictionary["partnersPage"]["companyTypes"]>("hotel");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const text = [
    `Bonjour ${business.owner}, je souhaite devenir partenaire de HR Excursions & Voyages.`,
    `Établissement : ${companyName || "-"}`,
    `Type : ${dict.partnersPage.companyTypes[companyType]}`,
    `Contact : ${contactName || "-"}`,
    `Téléphone : ${phone || "-"}`,
    message ? `Message : ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-sm md:p-8">
      <p className="font-serif text-xl text-ink">{dict.partnersPage.formTitle}</p>
      <p className="mt-2 text-sm text-stone">{dict.partnersPage.formIntro}</p>

      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <label className="block text-xs font-medium text-stone sm:col-span-2">
          {dict.partnersPage.fields.companyName}
          <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="input mt-1" />
        </label>
        <label className="block text-xs font-medium text-stone">
          {dict.partnersPage.fields.contactName}
          <input value={contactName} onChange={(e) => setContactName(e.target.value)} className="input mt-1" />
        </label>
        <label className="block text-xs font-medium text-stone">
          {dict.partnersPage.fields.companyType}
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value as typeof companyType)}
            className="input mt-1"
          >
            {(Object.keys(dict.partnersPage.companyTypes) as (keyof typeof dict.partnersPage.companyTypes)[]).map(
              (key) => (
                <option key={key} value={key}>
                  {dict.partnersPage.companyTypes[key]}
                </option>
              )
            )}
          </select>
        </label>
        <label className="block text-xs font-medium text-stone">
          {dict.partnersPage.fields.phone}
          <input value={phone} onChange={(e) => setPhone(e.target.value)} dir="ltr" className="input mt-1" />
        </label>
        <label className="block text-xs font-medium text-stone sm:col-span-2">
          {dict.partnersPage.fields.message}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="input mt-1 resize-none"
          />
        </label>
      </form>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={buildWhatsappLink(text)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ink hover:bg-gold-light"
        >
          {dict.quoteForm.viaWhatsapp}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={buildMailtoLink(business.email, "Demande de partenariat — HR Excursions & Voyages", text)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-sm font-semibold text-ink hover:border-gold hover:text-gold-dark"
        >
          {dict.quoteForm.viaEmail}
        </a>
      </div>
    </div>
  );
}
