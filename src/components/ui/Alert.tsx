interface Props {
  children: React.ReactNode;
}

export const Alert = ({ children }: Props) => (
  <div
    style={{
      backgroundColor: "#fde8e8",
      borderLeft: "3px solid #c00",
      padding: "3px 7px",
      margin: "4px 0",
      fontSize: "9pt",
    }}
  >
    {children}
  </div>
);
