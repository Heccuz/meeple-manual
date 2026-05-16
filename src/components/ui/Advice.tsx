interface Props {
  children: React.ReactNode;
}

export const Advice = ({ children }: Props) => (
  <div
    style={{
      backgroundColor: "#e8f4e8",
      borderLeft: "3px solid #2a7a2a",
      padding: "3px 7px",
      margin: "4px 0",
      fontSize: "9pt",
    }}
  >
    {children}
  </div>
);
