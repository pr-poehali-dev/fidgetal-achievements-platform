import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Trophy" size={24} className="text-primary" />
              <h4 className="text-xl font-bold">PhygitalHub</h4>
            </div>
            <p className="text-gray-400">
              Платформа для учета достижений и участия в турнирах
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Платформа</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Правила
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Сообщество</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Форум
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Поддержка</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FiDigital. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
