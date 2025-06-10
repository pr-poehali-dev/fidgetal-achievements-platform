import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-dark text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Trophy" size={32} className="text-primary" />
          <h1 className="text-2xl font-bold">PhygitalHub</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("profile")}
            className="hover:text-primary transition-colors"
          >
            Профиль
          </button>
          <button
            onClick={() => scrollToSection("tournaments")}
            className="hover:text-primary transition-colors"
          >
            Турниры
          </button>
          <button
            onClick={() => scrollToSection("dashboard")}
            className="hover:text-primary transition-colors"
          >
            Достижения
          </button>
        </nav>

        <Button
          onClick={() => setIsAuthModalOpen(true)}
          className="bg-primary hover:bg-secondary"
        >
          <Icon name="User" size={16} className="mr-2" />
          Войти
        </Button>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;
