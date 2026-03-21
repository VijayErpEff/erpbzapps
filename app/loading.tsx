export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 overflow-hidden">
      <div className="h-full w-full bg-gradient-to-r from-brand-500 to-teal-500 origin-left animate-[loading-bar_1.5s_ease-in-out_infinite]" />
    </div>
  );
}
