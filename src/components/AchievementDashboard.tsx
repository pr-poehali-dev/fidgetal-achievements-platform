import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const AchievementDashboard = () => {
  const achievements = [
    {
      id: 1,
      name: "Первая победа",
      description: "Одержите первую победу в турнире",
      type: "digital",
      rarity: "common",
      xp: 100,
      date: "2024-06-01",
    },
    {
      id: 2,
      name: "Марафонец",
      description: "Пробегите 42 км за один день",
      type: "physical",
      rarity: "rare",
      xp: 500,
      date: "2024-06-15",
    },
    {
      id: 3,
      name: "Чемпион сезона",
      description: "Выиграйте 10 турниров подряд",
      type: "hybrid",
      rarity: "legendary",
      xp: 1000,
      date: "2024-06-28",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-500";
      case "rare":
        return "bg-blue-500";
      case "epic":
        return "bg-purple-500";
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
    <section id="dashboard" className="py-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-3xl font-bold text-dark">
            Управление достижениями
          </h3>
          <Button className="bg-primary hover:bg-secondary">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить достижение
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="digital">Цифровые</TabsTrigger>
            <TabsTrigger value="physical">Физические</TabsTrigger>
            <TabsTrigger value="hybrid">Гибридные</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon
                        name={getTypeIcon(achievement.type) as any}
                        size={32}
                        className={`p-1 rounded ${getRarityColor(achievement.rarity)} text-white`}
                      />
                      <Badge
                        className={`${getRarityColor(achievement.rarity)} text-white`}
                      >
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {achievement.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {achievement.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Тип:</span>
                        <Badge variant="outline">{achievement.type}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Опыт:</span>
                        <span className="font-medium text-primary">
                          +{achievement.xp} XP
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Получено:</span>
                        <span className="font-medium">{achievement.date}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Eye" size={14} className="mr-1" />
                        Просмотр
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Share" size={14} className="mr-1" />
                        Поделиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="digital">
            <div className="text-center py-12">
              <Icon
                name="Monitor"
                size={64}
                className="text-gray-400 mx-auto mb-4"
              />
              <p className="text-gray-500">
                Цифровые достижения будут отображены здесь
              </p>
            </div>
          </TabsContent>

          <TabsContent value="physical">
            <div className="text-center py-12">
              <Icon
                name="Dumbbell"
                size={64}
                className="text-gray-400 mx-auto mb-4"
              />
              <p className="text-gray-500">
                Физические достижения будут отображены здесь
              </p>
            </div>
          </TabsContent>

          <TabsContent value="hybrid">
            <div className="text-center py-12">
              <Icon
                name="Zap"
                size={64}
                className="text-gray-400 mx-auto mb-4"
              />
              <p className="text-gray-500">
                Гибридные достижения будут отображены здесь
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AchievementDashboard;
