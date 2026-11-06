"use client";

import { useState } from "react";
import { Plane, Compass, Map as MapIcon, Sparkles, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { buildWhatsappLink, buildMailtoLink } from "@/lib/utils/whatsapp";
import { business } from "@/lib/data/business";

type Tab = "transfer" | "excursion" | "tour" | "custom";

const tabIcons: Record<Tab, typeof Plane> = {
  transfer: Plane,
  excursion: Compass,
  tour: MapIcon,
  custom: Sparkles,
};

export function QuoteForm({ dict, className = "" }: { dict: Dictionary; locale?: Locale; className?: string }) {
  const [tab, setTab] = useState<Tab>("transfer");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [travelers, setTravelers] = useState("");
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function buildMessage() {
    const lines = [
      `Bonjour ${business.owner}, je souhaite demander un devis.`,
      `Prestation : ${dict.quoteForm.tabs[tab]}`,
      from ? `Départ : ${from}` : null,
      to ? `Destination : ${to}` : null,
      date ? `Date : ${date}` : null,
      time ? `Heure : ${time}` : null,
      travelers ? `Voyageurs : ${travelers}` : null,
      tab === "transfer" ? `Trajet : ${dict.quoteForm.fields[tripType]}` : null,
      name ? `Nom : ${name}` : null,
      phone ? `Téléphone : ${phone}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }

  const message = buildMessage();

  return (
    <div className={`rounded-3xl border border-ink/10 bg-paper/95 p-5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)] backdrop-blur md:p-7 ${className}`}>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(dict.quoteForm.tabs) as Tab[]).map((key) => {
          const Icon = tabIcons[key];
          const active = tab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active ? "bg-ink text-paper" : "bg-ivory text-ink/70 hover:bg-ivory/70"
              }`}
            >
              <Icon className="h-4 w-4" />
              {dict.quoteForm.tabs[key]}
            </button>
          );
        })}
      </div>

      <form
        className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field label={dict.quoteForm.fields.from}>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder={dict.quoteForm.placeholders.from}
            className="input"
          />
        </Field>
        <Field label={dict.quoteForm.fields.to}>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder={dict.quoteForm.placeholders.to}
            className="input"
          />
        </Field>
        <Field label={dict.quoteForm.fields.date}>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input" />
        </Field>
        <Field label={dict.quoteForm.fields.time}>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="input" />
        </Field>
        <Field label={dict.quoteForm.fields.travelers}>
          <input
            type="number"
            min={1}
            max={7}
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            placeholder={dict.quoteForm.placeholders.travelers}
            className="input"
          />
        </Field>
        {tab === "transfer" ? (
          <Field label={dict.quoteForm.fields.tripType}>
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value as "oneWay" | "roundTrip")}
              className="input"
            >
              <option value="oneWay">{dict.quoteForm.fields.oneWay}</option>
              <option value="roundTrip">{dict.quoteForm.fields.roundTrip}</option>
            </select>
          </Field>
        ) : (
          <Field label={dict.quoteForm.fields.name}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={dict.quoteForm.placeholders.name}
              className="input"
            />
          </Field>
        )}
        <Field label={dict.quoteForm.fields.phone} className="md:col-span-2">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={dict.quoteForm.placeholders.phone}
            className="input"
            dir="ltr"
          />
        </Field>
      </form>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={buildWhatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
        >
          {dict.quoteForm.viaWhatsapp}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={buildMailtoLink(business.email, "Demande de devis — HR Excursions & Voyages", message)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold-dark"
        >
          {dict.quoteForm.viaEmail}
        </a>
      </div>
      <p className="mt-3 text-xs text-stone">{dict.quoteForm.submitHint}</p>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-xs font-medium text-stone ${className}`}>
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
