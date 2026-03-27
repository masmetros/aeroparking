import Link from "next/link";
import {
  Ship,
  Check,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  BadgePercent,
  TrendingDown,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import { EXTERNAL_URLS } from "@/lib/constants";

export function CruiseService() {
  return (
    <section id="puerto" className="section-padding bg-gradient-to-b from-white to-violet-50/30">
      <div className="container-main">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700">
            <Ship className="h-4 w-4" />
            Puerto de Buenos Aires
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Parking + traslado al puerto
          </h2>
          <p className="mt-3 text-brand-500">
            Dejá tu auto seguro y te llevamos a la terminal.{" "}
            <strong className="text-accent-600">Mejor precio garantizado.</strong>
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* RESERVA CRUCEROS — card */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-2xl">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://www.cronista.com/resizer/v2/L3YSXJLA2JCINILIDSFOXV6KPE.jpg?auth=507cbc1ca9b88afd772181a0ffb9349a408709904b339198a2d4a533db0b409c&height=899&width=1200&quality=70&smart=true"
                alt="Puerto de Buenos Aires"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1.5 text-xs font-bold text-brand-950 shadow-lg">
                <TrendingDown className="h-3.5 w-3.5" />
                Mejor precio
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2">
                  <Ship className="h-5 w-5 text-white" />
                  <h3 className="text-xl font-extrabold text-white">Cruceros</h3>
                </div>
                <p className="text-xs text-violet-200">Parking + Traslado al puerto</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-relaxed text-brand-600">
                Dejá tu auto en nuestro parking y te trasladamos al Puerto de
                Buenos Aires. Al volver del crucero, te recogemos y te llevamos
                de vuelta. <strong>Sin complicaciones.</strong>
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  "Reservás online",
                  "Dejás el auto",
                  "Te llevamos al puerto",
                  "Te recogemos al volver",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700">
                      {i + 1}
                    </span>
                    <span className="text-xs text-brand-600">{step}</span>
                  </div>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {[
                  "Traslado ida y vuelta incluido",
                  "Parking vigilado 24hs",
                  "Estadías flexibles",
                  "Atención personalizada",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-brand-700">
                    <Check className="h-3.5 w-3.5 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Link
                  href="/reservar/cruceros"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition-all hover:from-violet-700 hover:to-violet-800 hover:shadow-xl hover:scale-[1.01]"
                >
                  Reservar Cruceros
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* LARGA ESTADÍA + TRASLADOS IN-OUT — card */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-2xl">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=800&q=80"
                alt="Estacionamiento vigilado"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1.5 text-xs font-bold text-brand-950 shadow-lg">
                <TrendingDown className="h-3.5 w-3.5" />
                Mejor precio
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur-sm">
                <CalendarDays className="mr-1 inline h-3 w-3" />
                4 a 14 días
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-white" />
                  <h3 className="text-xl font-extrabold text-white">Larga Estadía</h3>
                </div>
                <p className="text-xs text-emerald-200">Traslados In-Out incluidos</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-relaxed text-brand-600">
                Dejá tu auto en nuestro parking y te llevamos al puerto.
                Cuando volvés, te recogemos en el puerto o en el aeropuerto
                y te llevamos de vuelta.
                <strong> Ideal para viajes de 4 a 14 días.</strong>
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  "Dejás el auto",
                  "Te llevamos al puerto",
                  "Disfrutá tu viaje",
                  "Te recogemos al volver",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                      {i + 1}
                    </span>
                    <span className="text-xs text-brand-600">{step}</span>
                  </div>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {[
                  "Estadías de 4 a 14 días",
                  "Traslados In-Out incluidos",
                  "Recogida en puerto o aeropuerto",
                  "Parking vigilado 24hs",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-brand-700">
                    <Check className="h-3.5 w-3.5 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a
                  href={EXTERNAL_URLS.longStay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:scale-[1.01]"
                >
                  Reservar Larga Estadía
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="mt-2 text-center text-[11px] text-brand-400">
                  Se abre en el sistema oficial de Aeropuertos Argentina
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="grid grid-cols-3 gap-4 rounded-2xl border border-violet-200 bg-violet-50/50 p-5">
            {[
              { icon: ShieldCheck, label: "Seguro incluido" },
              { icon: MapPin, label: "Transfer incluido" },
              { icon: Clock, label: "Vigilancia 24hs" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                <item.icon className="h-6 w-6 text-violet-600" />
                <span className="text-xs font-semibold text-brand-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
