"use client";

import { useEffect, useRef } from "react";

type Props = {
  id: string;
  title: string;
  body: string;
  register: (id: string, el: HTMLElement | null) => void;
};

export default function Section({ id, title, body, register }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    register(id, ref.current);
  }, [id, register]);

  return (
    <div id={id} ref={ref} className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 text-lg">{body}</p>
    </div>
  );
}
