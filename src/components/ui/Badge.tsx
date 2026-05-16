interface Props {
  children: React.ReactNode;
}

export const Badge = ({ children }: Props) => (
  <span
    style={{
      display: "inline-block",
      backgroundColor: "#b07800",
      color: "white",
      borderRadius: "3px",
      padding: "0px 5px",
      fontSize: "8.5pt",
      fontWeight: "bold",
      marginRight: "3px",
    }}
  >
    {children}
  </span>
);
