import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    city: "",
  });
  const { login } = useAuth();

  const handleVKAuth = () => {
    console.log("Авторизация через ВК");
    login({ name: "Пользователь ВК", email: "vk@example.com" });
    alert("🚀 Авторизация через ВК выполнена!");
    onClose();
  };

  const handleGosuslugiAuth = () => {
    console.log("Авторизация через Госуслуги");
    login({
      name: "Иванов Иван Иванович",
      email: "ivanov@gosuslugi.ru",
      phone: "+7 (900) 123-45-67",
      city: "Москва",
    });
    alert("🏛️ Авторизация через Госуслуги выполнена!");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      login({ name: formData.name || "Пользователь", email: formData.email });
    } else {
      login(formData);
    }

    alert(`${isLogin ? "Вход" : "Регистрация"} выполнен!`);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isLogin ? "Вход в аккаунт" : "Создать аккаунт"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleVKAuth}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Icon name="ExternalLink" size={16} className="mr-2" />
              ВКонтакте
            </Button>

            <Button
              onClick={handleGosuslugiAuth}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Icon name="Shield" size={16} className="mr-2" />
              Госуслуги
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Или
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="example@mail.ru"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Полное имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Иванов Иван Иванович"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Дата рождения</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) =>
                      handleInputChange("birthDate", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Город</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Москва"
                  />
                </div>
              </>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-secondary"
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>
          </form>

          <div className="text-center">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary"
            >
              {isLogin ? "Нет аккаунта? Создать" : "Уже есть аккаунт? Войти"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
