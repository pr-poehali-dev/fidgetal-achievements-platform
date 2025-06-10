import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ProfileCard = () => {
  const user = {
    name: "Алексей Петров",
    rank: "Мастер",
    rating: 2847,
    level: 15,
    nextLevelXP: 1200,
    currentXP: 850,
    achievements: [
      { name: "Первая победа", type: "digital", rarity: "common" },
      { name: "Марафонец", type: "physical", rarity: "rare" },
      { name: "Чемпион сезона", type: "hybrid", rarity: "legendary" },
    ],
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-500";
      case "rare":
        return "bg-blue-500";
      case "legendary":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
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
        return "Award";
    }
  };

  return (
    <section id="profile" className="py-16">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-dark">
          Ваш профиль
        </h3>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="User" size={48} className="text-white" />
              </div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <Badge className={`${getRarityColor("legendary")} text-white`}>
                {user.rank}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {user.rating}
                  </div>
                  <div className="text-gray-600">Рейтинг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {user.level}
                  </div>
                  <div className="text-gray-600">Уровень</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tertiary mb-2">
                    {user.achievements.length}
                  </div>
                  <div className="text-gray-600">Достижений</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    Прогресс до следующего уровня
                  </span>
                  <span className="text-sm text-gray-600">
                    {user.currentXP}/{user.nextLevelXP} XP
                  </span>
                </div>
                <Progress
                  value={(user.currentXP / user.nextLevelXP) * 100}
                  className="h-3"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Последние достижения
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {user.achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={getTypeIcon(achievement.type) as any}
                          size={32}
                          className={`p-1 rounded ${getRarityColor(achievement.rarity)} text-white`}
                        />
                        <div>
                          <div className="font-medium">{achievement.name}</div>
                          <Badge variant="outline" className="text-xs">
                            {achievement.type}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
