const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 via-white to-purple-400">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent)] pointer-events-none" />

      <div className="relative">{children}</div>
    </div>
  );
};

export default MainLayout;
