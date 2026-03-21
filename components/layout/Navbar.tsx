"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/svg/Logo";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (servicesOpen) setServicesOpen(false);
        if (mobileOpen) setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, servicesOpen]);

  // Trap focus inside mobile menu when open
  useEffect(() => {
    if (!mobileOpen) return;
    const nav = mobileNavRef.current;
    if (!nav) return;

    const focusable = nav.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trap);
    first?.focus();
    return () => document.removeEventListener("keydown", trap);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setServicesOpen((prev) => !prev);
      }
      if (e.key === "ArrowDown" && !servicesOpen) {
        e.preventDefault();
        setServicesOpen(true);
      }
      if (e.key === "Escape" && servicesOpen) {
        e.preventDefault();
        setServicesOpen(false);
      }
    },
    [servicesOpen]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "glass border-b border-apple-gray-mid/20 shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container-wide flex items-center justify-between h-14 md:h-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="ERP Biz Apps — Home">
          <Logo size={32} />
          <span className="font-semibold text-[0.9375rem] text-apple-black tracking-tight">
            ERP Biz Apps
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5" role="menubar">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-100 rounded-full ${
                    pathname.startsWith(link.href)
                      ? "text-brand-500"
                      : "text-apple-gray-dark hover:text-apple-black active:text-brand-500"
                  }`}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onKeyDown={handleDropdownKeyDown}
                >
                  {link.label}
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass rounded-2xl shadow-lg border border-apple-gray-mid/20 py-3 px-2"
                      role="menu"
                      aria-label="Services submenu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`block px-4 py-2.5 text-[0.8125rem] rounded-xl transition-colors duration-100 ${
                            pathname === child.href
                              ? "text-brand-500 bg-brand-50"
                              : "text-apple-gray-dark hover:text-apple-black hover:bg-apple-gray-light active:text-brand-500"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                role="menuitem"
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-100 rounded-full ${
                  pathname === link.href
                    ? "text-brand-500"
                    : "text-apple-gray-dark hover:text-apple-black active:text-brand-500"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-apple-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <div className="w-5 h-5 flex flex-col justify-center gap-1.5 relative">
            <span
              className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop — click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav"
              ref={mobileNavRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="lg:hidden glass border-t border-apple-gray-mid/20 overflow-hidden relative z-50"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div className="container-apple py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      role="menuitem"
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-100 ${
                        pathname === link.href
                          ? "text-brand-500 bg-brand-50"
                          : "text-apple-black hover:bg-apple-gray-light active:text-brand-500"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {"children" in link &&
                      link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`block pl-10 pr-4 py-2.5 text-[0.8125rem] rounded-xl transition-colors duration-100 ${
                            pathname === child.href
                              ? "text-brand-500"
                              : "text-apple-gray hover:text-apple-black active:text-brand-500"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Button href="/contact" size="md" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
