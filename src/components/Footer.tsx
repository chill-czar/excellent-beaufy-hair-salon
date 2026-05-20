import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-10 bg-surface-container-highest dark:bg-inverse-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <span className="font-headline-md text-headline-md italic text-primary dark:text-primary-fixed-dim">
            Excellent Beauty Salon & Hair
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-variant mt-4">
            Sophisticated radiance and excellence in every detail since 2015.
          </p>
        </div>
        {/* Links Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
          <div className="flex flex-col gap-4">
            <Link
              className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="/about"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        {/* Copyright Column */}
        <div className="col-span-1 md:col-span-1 flex items-end justify-end mt-8 md:mt-0 text-right">
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-variant">
            © 2024 Excellent Beauty Salon & Hair. All rights reserved. Kissimmee, FL.
          </p>
        </div>
      </div>
    </footer>
  );
}
