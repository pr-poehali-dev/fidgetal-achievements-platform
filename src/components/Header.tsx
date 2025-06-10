import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Trophy" size={32} className="text-primary" />
          <h1 className="text-2xl font-bold">FiDigital</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#profile" className="hover:text-primary transition-colors">
            Профиль
          </a>
          <a
            href="#tournaments"
            className="hover:text-primary transition-colors"
          >
            Турниры
          </a>
          <a href="#dashboard" className="hover:text-primary transition-colors">
            Достижения
          </a>
        </nav>

        <Button className="bg-primary hover:bg-secondary">
          <Icon name="User" size={16} className="mr-2" />
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
