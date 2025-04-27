"use client";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-lg fade-in">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">AlertStocks</h1>
          <p className="text-gray-400 mt-2">Your stock portfolio, your way.</p>
        </div>
        {children}
      </div>
    </div>
  );
}
