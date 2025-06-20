import "./styles.css";
import { FolderItem } from "./components/Folder";
import { FolderGrid } from "./components/FolderGrid";
import FakeNav from "./components/FakeNav";
import theme from "./theme";

export default function App() {
  return (
    <div className="App min-h-screen">
      <div
        className="bg-neutral-200 p-2 min-h-[100%] flex justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="rounded-lg bg-surface-background h-full w-full flex flex-col gap-3 overflow-hidden"
          style={{
            minHeight: "98vh",
            maxWidth: theme.breakpoints["xl"],
          }}
        >
          <nav>
            <FakeNav />
          </nav>
          <div className="flex-1 flex flex-col">
            <FolderGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
