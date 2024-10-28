import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "@/helpers/ThemeProvider";
import { MonitorCog, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="border rounded-md px-1">
      <ToggleGroup type="single">
        <ToggleGroupItem value="light" onClick={() => setTheme("light")}>
          <Sun size={12} />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" onClick={() => setTheme("dark")}>
          <Moon size={12} />
        </ToggleGroupItem>
        <ToggleGroupItem value="system" onClick={() => setTheme("system")}>
          <MonitorCog size={12} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
