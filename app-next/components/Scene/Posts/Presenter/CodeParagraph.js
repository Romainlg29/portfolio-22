const CodeParagraph = ({ tab, children }) => {
  const tabs = tab ? Array(tab * 2).fill(" ") : null;

  return (
    <p>
      {tabs &&
        tabs.map((e) => {
          return "\u00A0";
        })}
      {children}
    </p>
  );
};
export default CodeParagraph;
