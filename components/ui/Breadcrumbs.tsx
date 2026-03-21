import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://erpbizapps.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="container-apple pt-16 md:pt-[4.5rem]">
        <ol className="flex flex-wrap items-center gap-1 text-[0.6875rem] text-apple-gray/70">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && (
                <span className="text-apple-gray-mid" aria-hidden="true">/</span>
              )}
              {item.href ? (
                <Link href={item.href} className="hover:text-apple-gray transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-apple-gray">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
