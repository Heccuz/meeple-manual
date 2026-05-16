interface Props {
  steps: string[];
}

export const StepList = ({ steps }: Props) => (
  <ol style={{ margin: "2px 0", paddingLeft: "16px" }}>
    {steps.map((step, i) => (
      <li
        key={i}
        style={{ marginBottom: "1px", fontSize: "9pt" }}
        dangerouslySetInnerHTML={{ __html: step }}
      />
    ))}
  </ol>
);
