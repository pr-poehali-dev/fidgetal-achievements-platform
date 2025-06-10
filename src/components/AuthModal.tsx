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

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleVKAuth = () => {
    // В реальном приложении здесь будет интеграция с VK API
    console.log("Авторизация через ВК");
    alert("🚀 Авторизация через ВК будет доступна в ближайшее время!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "Вход" : "Регистрация");
    alert(`${isLogin ? "Вход" : "Регистрация"} выполнен!`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isLogin ? "Вход в аккаунт" : "Создать аккаунт"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Button
            onClick={handleVKAuth}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Icon name="ExternalLink" size={20} className="mr-2" />
            Войти через ВКонтакте
          </Button>

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
                placeholder="example@mail.ru"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" required />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" required />
              </div>
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
