import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
      </div>
    )
}