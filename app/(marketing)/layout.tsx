import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-white-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-white-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;