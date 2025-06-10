import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
  const features = [
    {
      icon: "Trophy",
      title: "Цифровые достижения",
      description: "Получайте NFT-награды за победы в онлайн турнирах",
    },
    {
      icon: "Dumbbell",
      title: "Физические награды",
      description: "Реальные призы и медали за спортивные достижения",
    },
    {
      icon: "Zap",
      title: "Гибридные турниры",
      description: "Соревнования, объединяющие онлайн и офлайн активности",
    },
    {
      icon: "Users",
      title: "Сообщество",
      description: "Общайтесь с единомышленниками и находите команду",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Добро пожаловать в PhygitalHub
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-center text-gray-600">
            Первая платформа, объединяющая цифровые и физические достижения в
            единой экосистеме
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50"
              >
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-primary flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => {
                onClose();
                const tournamentsSection =
                  document.getElementById("tournaments");
                tournamentsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-secondary"
            >
              <Icon name="Play" size={16} className="mr-2" />
              Начать участие
            </Button>
            <Button variant="outline" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
