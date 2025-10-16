import { useState, useCallback } from "react";

type Project = {
  id: string;
  title: string;
  client?: string;
  href?: string;
  thumb?: string;
  tech?: string[];
  tags?: string[];
  description?: string;
};

export default function useProjectModal() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const openWith = useCallback((p: Project) => {
    setSelected(p);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => setSelected(null), 200);
  }, []);

  return { open, selected, openWith, close };
}
