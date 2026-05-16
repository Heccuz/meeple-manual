interface Props {
  title: string;
  children: React.ReactNode;
  level?: "h2" | "h3";
}

export const Section = ({ title, children, level = "h2" }: Props) => {
  const isH2 = level === "h2";

  return (
    <div style={{ marginBottom: "8px" }}>
      {isH2 ? (
        <h2
          style={{
            fontSize: "10pt",
            backgroundColor: "#4a3000",
            color: "#f0c040",
            padding: "4px 8px",
            margin: "8px 0 4px 0",
            borderRadius: "3px",
          }}
        >
          {title}
        </h2>
      ) : (
        <h3
          style={{
            fontSize: "9.5pt",
            backgroundColor: "#e8e0cc",
            color: "#2c2c2c",
            padding: "3px 7px",
            margin: "6px 0 3px 0",
            borderRadius: "2px",
            borderLeft: "4px solid #b07800",
          }}
        >
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
};
