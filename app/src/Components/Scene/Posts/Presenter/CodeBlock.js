const CodeBlock = ({ children }) => {
  return (
    <div
      className={
        "mb-2 text-gray-700 leading-8 p-2 px-4 bg-blue-100 rounded-lg overflow-x-auto shadow hover:shadow-md transition-shadow"
      }
    >
      {children}
    </div>
  );
};
export default CodeBlock;
