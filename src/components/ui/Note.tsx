interface Props {
  children: React.ReactNode;
}

export const Note = ({ children }: Props) => (
  <div
    style={{
      backgroundColor: "#fff3cd",
      borderLeft: "3px solid #f0c040",
      padding: "3px 7px",
      margin: "4px 0",
      fontSize: "9pt",
    }}
  >
    {children}
  </div>
);
