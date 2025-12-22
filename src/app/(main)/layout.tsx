import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation transparent={true} />
      {children}
      <Footer />
    </>
  );
}
