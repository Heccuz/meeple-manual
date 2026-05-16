interface Row {
  recurso: string;
  regla: string;
}

interface Props {
  rows: Row[];
}

export const ResourceTable = ({ rows }: Props) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      margin: "4px 0",
      fontSize: "9pt",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            backgroundColor: "#4a3000",
            color: "#f0c040",
            padding: "3px 6px",
            textAlign: "left",
          }}
        >
          Recurso
        </th>
        <th
          style={{
            backgroundColor: "#4a3000",
            color: "#f0c040",
            padding: "3px 6px",
            textAlign: "left",
          }}
        >
          Reglas
        </th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr
          key={i}
          style={{ backgroundColor: i % 2 === 0 ? "#f9f5ec" : "white" }}
        >
          <td
            style={{
              padding: "3px 6px",
              borderBottom: "1px solid #ddd",
              verticalAlign: "top",
            }}
            dangerouslySetInnerHTML={{ __html: row.recurso }}
          />
          <td
            style={{
              padding: "3px 6px",
              borderBottom: "1px solid #ddd",
              verticalAlign: "top",
            }}
            dangerouslySetInnerHTML={{ __html: row.regla }}
          />
        </tr>
      ))}
    </tbody>
  </table>
);
