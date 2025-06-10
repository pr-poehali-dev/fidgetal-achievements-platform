import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import InfoModal from "@/components/InfoModal";

const Hero = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleStartPlaying = () => {
    const tournamentsSection = document.getElementById("tournaments");
    tournamentsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-dark via-tertiary to-secondary text-white py-20">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <Icon name="Award" size={80} className="text-primary mx-auto mb-4" />
          <h2 className="text-5xl font-bold mb-4">
            Ваши достижения <span className="text-primary">в одном месте</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Объединяем цифровые и физические награды. Участвуйте в турнирах,
            повышайте рейтинг и становитесь лучшими в своей области.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleStartPlaying}
            size="lg"
            className="bg-primary hover:bg-secondary text-lg px-8"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать играть
          </Button>
          <Button
            onClick={() => setIsInfoModalOpen(true)}
            size="lg"
            variant="outline"
            className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Icon name="Info" size={20} className="mr-2" />
            Узнать больше
          </Button>
        </div>
      </div>

      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
