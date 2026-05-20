export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop text-center md:text-left mb-24 pt-24 md:pt-32">
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-6">
          Our Story
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A legacy of sophisticated radiance. Discover the passion, precision, and people behind Osceola's most refined salon experience.
        </p>
      </section>

      {/* Asymmetric Image & Text Section */}
      <section className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Text Column */}
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col gap-8 pr-0 md:pr-12">
            <div className="space-y-4">
              <span className="inline-block bg-surface-container-low text-primary font-label-sm text-label-sm px-4 py-1.5 rounded-full uppercase tracking-widest">
                Established 2015
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Craftsmanship Meets Elegance
              </h2>
            </div>
            <div className="space-y-6 font-body-md text-body-md text-on-surface-variant">
              <p>
                Founded in 2015, Excellent Beauty Salon & Hair was born from a singular vision: to create a sanctuary where artistry and luxury converge. Under the meticulous direction of <strong className="text-primary font-semibold">Ana Perez</strong>, we have cultivated a space that honors the transformative power of exceptional hair care.
              </p>
              <p>
                We believe that true beauty is not just seen, but felt. Our approach is rooted in an unwavering commitment to craftsmanship and excellence. Every cut, color, and treatment is a personalized journey, designed to elevate your natural elegance and leave you radiating confidence.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-variant">
              <p className="font-headline-md text-headline-md italic text-primary">"Every detail matters when crafting your perfect aesthetic."</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">— Ana Perez, Founder</p>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:col-span-7 order-1 md:order-2 mb-10 md:mb-0 relative group">
            <div className="absolute inset-0 bg-primary-container/20 rounded-xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
            <img
              alt="Professional stylist at work"
              className="w-full h-auto object-cover rounded-xl shadow-[0_30px_30px_rgba(0,0,0,0.04)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5nlNnz3qeiwkHWCy2zgZBgzzy-MGTncwNq_CbfTn_-MTJd7145jKMaRbgzr411HbsTpM_BxSi_bhmjdtvwHUabHQ9dnbklwBQ5nvHnJHhhFfpuVRljU8TyYNx1acUE3ftTAa_hNALTCC1_TiQABGmelxwajTc9NNuqMp_4CUZwfshveRVB-NGe9Py6zNMPcY1tHhup6XD5b9j3xNJO60Jbp7Y9wLZeVmKrThLG3B2AMXZw_7VdlHdOq3ZvTtU7x5-t4gq6ZYU8FF"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition (Why Choose Us) - Bento Inspired Layout */}
      <section className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop mt-section-gap pb-section-gap">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Osceola's Premier Destination</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Clients choose us not just for a service, but for an unparalleled experience. Here is what defines the Excellent standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_30px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Premium Experience</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From the moment you walk through our doors, immerse yourself in an atmosphere of serene luxury. We prioritize your comfort and tranquility.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_30px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Masterful Artistry</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our stylists are artisans, continually refining their techniques to offer you the vanguard of modern hair design and timeless classics.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_30px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Uncompromising Quality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We source and utilize only the finest, professional-grade products to ensure your results are not only stunning but enduring.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
