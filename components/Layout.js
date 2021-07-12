import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <main className="page-container">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
