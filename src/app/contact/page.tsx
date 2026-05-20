import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-16 md:mb-24 text-center md:text-left max-w-2xl mx-auto px-container-padding-mobile md:px-container-padding-desktop pt-24 md:pt-32">
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
          Let&apos;s Connect
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          We invite you to reach out for appointments, inquiries, or personalized consultations. Experience the sophisticated care you deserve.
        </p>
      </div>

      {/* Bento Grid Layout for Contact Details */}
      <div className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Map & Address Card (Large Span) */}
          <div className="md:col-span-8 bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-8 shadow-[0_30px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20 flex flex-col group transition-transform duration-500 hover:-translate-y-1">
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 bg-surface-container-high relative">
              <Image
                alt="Map of Kissimmee, FL"
                className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5xQoukXtduo3eZVSXIJN2mL1sNpdGYvytk9FffSmMLFoxVaeBXnVhhEA-ZqhvFXIeNtuOQnisqEhPjhSCgVosa3YdLoMtLEnXxxX4d-B1I6E5Rm89e9JCA7rGprMU4COepzknfTejdXrDdSmOs9X86PM21DGDa8koHrvOYxrjV0GgfhWkf5VPQOmMQ7G4Lya0MqlqTuxUA6z3OmVhNgtzxD36P-Km2jZ4DX5kPKRs2k0DHad_ZYyNCSVjrogR0IeCN0spkwH-uXgk"
              />
            </div>
            <div className="flex items-start gap-4 mt-auto">
              <div className="p-3 rounded-full bg-primary-fixed/30 text-primary mt-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Visit Our Salon</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  3283 S John Young Pkwy unit B<br />
                  Kissimmee, FL 34746-4524
                </p>
                <a className="inline-flex items-center gap-2 mt-4 text-primary font-label-md text-label-md hover:underline decoration-primary underline-offset-4" href="#">
                  Get Directions <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="md:col-span-4 bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-8 shadow-[0_30px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20 flex flex-col justify-center gap-8 transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-surface-container-high text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Phone</p>
                <a className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors" href="tel:+14073438359">
                  +1 407 343 8359
                </a>
              </div>
            </div>
            <div className="h-px w-full bg-outline-variant/30"></div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-surface-container-high text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Email</p>
                <a className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors break-all" href="mailto:ana_perez18@aol.com">
                  ana_perez18@aol.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours of Operation Card */}
          <div className="md:col-span-6 bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-8 shadow-[0_30px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20 transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Opening Hours</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                <span className="font-body-lg text-body-lg text-on-surface-variant">Monday - Saturday</span>
                <span className="font-label-md text-label-md text-on-surface">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span className="font-body-lg text-body-lg text-outline">Sunday</span>
                <span className="font-label-md text-label-md text-outline">Closed</span>
              </li>
            </ul>
          </div>

          {/* Accepted Payments Card */}
          <div className="md:col-span-6 bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-8 shadow-[0_30px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20 transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Accepted Payments</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              For your convenience, we accept a variety of payment methods to ensure a seamless checkout experience.
            </p>
            {/* Payment Chips Layout */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-fixed/40 text-on-primary-fixed font-label-md text-label-md">
                Cash
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-fixed/40 text-on-primary-fixed font-label-md text-label-md">
                Visa
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-fixed/40 text-on-primary-fixed font-label-md text-label-md">
                Mastercard
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-fixed/40 text-on-primary-fixed font-label-md text-label-md">
                Discover
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-fixed/40 text-on-primary-fixed font-label-md text-label-md">
                Apple Pay
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
