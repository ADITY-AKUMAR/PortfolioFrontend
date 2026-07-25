export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white">
      <div className="space-y-6 text-center">
        <div className="rounded-full border-4 border-emerald-500 border-t-transparent w-20 h-20 mx-auto animate-spin" />
        <div>
          <p className="text-3xl font-semibold">Aditya.dev</p>
          <p className="text-sm text-zinc-400 mt-2">Loading portfolio...</p>
        </div>
      </div>
    </div>
  );
}
