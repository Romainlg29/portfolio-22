const ParagraphHref = ({ href, children }) => {
  return (
    <a
      className={"p-1 px-2 bg-blue-200 rounded-md cursor-pointer"}
      href={href}
    >
      {children}
    </a>
  );
};
export default ParagraphHref;
