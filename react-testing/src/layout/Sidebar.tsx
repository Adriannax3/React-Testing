type View = "example-form" | "example-users-list";

type SidebarProps = {
  activeView: View;
  onChangeView: (view: View) => void;
};

function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return (
    <aside className="min-h-screen w-64 p-4 bg-white/70 backdrop-blur-xl border-r border-blue-100 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-blue-900 tracking-tight">
        Menu
      </h2>

      <nav className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => onChangeView("example-form")}
          className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-200 ${
            activeView === "example-form"
              ? "bg-blue-100 text-blue-700 shadow-inner"
              : "text-blue-600 hover:bg-blue-50"
          }`}
        >
          Example form
        </button>
        <button
          type="button"
          onClick={() => onChangeView("example-users-list")}
          className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-200 ${
            activeView === "example-users-list"
              ? "bg-blue-100 text-blue-700 shadow-inner"
              : "text-blue-600 hover:bg-blue-50"
          }`}
        >
          Example users list
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
export type { View };
