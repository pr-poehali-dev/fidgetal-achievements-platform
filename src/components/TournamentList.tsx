import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";
import AuthRequired from "@/components/AuthRequired";

const TournamentList = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <section id="tournaments" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-dark">
            Предстоящие турниры
          </h3>
          <AuthRequired />
        </div>
      </section>
    );
  }
  const tournaments = [
    {
      id: 1,
      name: "CS:GO Champions League",
      type: "digital",
      category: "Counter-Strike",
      minRating: 2000,
      maxRating: 3000,
      prize: "₽50,000",
      participants: 156,
      maxParticipants: 200,
      startDate: "2024-07-15",
      status: "registration",
    },
    {
      id: 2,
      name: "Футбольная лига",
      type: "physical",
      category: "Футбол",
      minRating: 1500,
      maxRating: 2500,
      prize: "₽25,000",
      participants: 89,
      maxParticipants: 150,
      startDate: "2024-07-20",
      status: "registration",
    },
    {
      id: 3,
      name: "Dota 2 Pro Series",
      type: "digital",
      category: "Dota 2",
      minRating: 2200,
      maxRating: 3200,
      prize: "₽60,000",
      participants: 78,
      maxParticipants: 128,
      startDate: "2024-07-18",
      status: "registration",
    },
    {
      id: 4,
      name: "Баскетбольный турнир",
      type: "physical",
      category: "Баскетбол",
      minRating: 1800,
      maxRating: 2800,
      prize: "₽35,000",
      participants: 64,
      maxParticipants: 96,
      startDate: "2024-07-22",
      status: "upcoming",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "digital":
        return "bg-blue-100 text-blue-800";
      case "physical":
        return "bg-green-100 text-green-800";
      case "hybrid":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "digital":
        return "Monitor";
      case "physical":
        return "Dumbbell";
      case "hybrid":
        return "Zap";
      default:
        return "Calendar";
    }
  };

  const canParticipate = (minRating: number, maxRating: number) => {
    const userRating = user?.rating || 0;
    return userRating >= minRating && userRating <= maxRating;
  };

  return (
    <section id="tournaments" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-dark">
          Предстоящие турниры
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tournaments.map((tournament) => (
            <Card
              key={tournament.id}
              className="hover:shadow-xl transition-shadow animate-scale-in"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    name={getTypeIcon(tournament.type) as any}
                    size={24}
                    className="text-primary"
                  />
                  <Badge className={getTypeColor(tournament.type)}>
                    {tournament.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{tournament.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Призовой фонд:</span>
                    <span className="font-semibold text-primary">
                      {tournament.prize}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Рейтинг:</span>
                    <span className="font-medium">
                      {tournament.minRating} - {tournament.maxRating}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Участники:</span>
                    <span className="font-medium">
                      {tournament.participants}/{tournament.maxParticipants}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Старт:</span>
                    <span className="font-medium">{tournament.startDate}</span>
                  </div>
                </div>

                {canParticipate(tournament.minRating, tournament.maxRating) ? (
                  <Button
                    onClick={() => {
                      alert(
                        `🎮 Вы успешно зарегистрированы на турнир "${tournament.name}"!`,
                      );
                    }}
                    className="w-full bg-primary hover:bg-secondary"
                  >
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Регистрация
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    <Icon name="Lock" size={16} className="mr-2" />
                    Недостаточно рейтинга
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentList;
