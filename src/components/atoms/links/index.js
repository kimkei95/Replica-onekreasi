const Link = ({ href, children }) => {
  return (
    <a href={href} className="footer-link">
      {children}
    </a>
  );
};

export default Link;
