import "@styles/Breadcrumb.scss";

const Breadcrumb = ({ paths }: { paths: string[] }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index} className="breadcrumb-item">
          {index !== paths.length - 1 ? (
            <>
              <a href={`#`}>{path}</a>
              <span className="breadcrumb-separator">/</span>
            </>
          ) : (
            <span className="breadcrumb-current">{path}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
