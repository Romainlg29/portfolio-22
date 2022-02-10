const ParagraphImp = ({ setText, children, command }) => {
  const copy = (text) => {
    navigator.clipboard.writeText(command ?? text);
    setText("Copied !");
  };

  return (
    <span
      className={"p-1 px-2 bg-blue-200 rounded-md cursor-pointer"}
      onClick={() => copy(children)}
    >
      {children}
    </span>
  );
};
export default ParagraphImp;
