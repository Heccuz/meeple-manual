interface Step {
  label: string;
}

interface Props {
  title: string;
  steps?: Step[];
  children: React.ReactNode;
}

export const ActionBox = ({ title, steps = [], children }: Props) => (
  <div
    style={{
      border: "1px solid #b07800",
      borderRadius: "4px",
      padding: "5px 8px",
      marginBottom: "7px",
      backgroundColor: "#fffdf5",
    }}
  >
    <div
      style={{
        fontWeight: "bold",
        fontSize: "10pt",
        color: "#4a3000",
        marginBottom: "3px",
      }}
    >
      {title}
    </div>
    {steps.length > 0 && (
      <div style={{ marginBottom: "4px", fontSize: "9pt" }}>
        {steps.map((step, i) => (
          <span key={i}>
            <span style={{ color: "#7a3800", fontWeight: "bold" }}>➡</span>{" "}
            {step.label}{" "}
          </span>
        ))}
      </div>
    )}
    <div style={{ fontSize: "9pt" }}>{children}</div>
  </div>
);
