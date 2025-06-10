import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

const AuthRequired = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center py-16">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <Icon
              name="Lock"
              size={64}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Требуется авторизация
            </h3>
            <p className="text-gray-600 mb-6">
              Для доступа к этому разделу необходимо войти в аккаунт или
              зарегистрироваться
            </p>
            <Button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-primary hover:bg-secondary"
            >
              <Icon name="User" size={16} className="mr-2" />
              Войти в аккаунт
            </Button>
          </CardContent>
        </Card>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default AuthRequired;
