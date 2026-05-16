interface ListItem {
  text: string;
}

interface Props {
  items: ListItem[] | string[];
  variant?: "bullet" | "check" | "arrow" | "star" | "dot";
}

const icons: Record<string, string> = {
  bullet: "•",
  check: "✅",
  arrow: "➡️",
  star: "⭐",
  dot: "🔸",
};

export function List({ items, variant = "bullet" }: Props) {
  const icon = icons[variant];

  return (
    <ul className="space-y-1 my-1">
      {items.map((item, i) => {
        const text = typeof item === "string" ? item : item.text;
        return (
          <li key={i} className="flex gap-2 items-start text-sm">
            <span className="mt-0.5 shrink-0">{icon}</span>
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </li>
        );
      })}
    </ul>
  );
}
