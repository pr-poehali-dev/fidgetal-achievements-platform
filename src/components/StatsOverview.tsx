import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsOverview = () => {
  const stats = [
    {
      title: "Активных игроков",
      value: "12,458",
      icon: "Users",
      change: "+23%",
    },
    {
      title: "Турниров проведено",
      value: "1,247",
      icon: "Calendar",
      change: "+12%",
    },
    {
      title: "Достижений выдано",
      value: "89,342",
      icon: "Award",
      change: "+45%",
    },
    {
      title: "Призовой фонд",
      value: "₽2,847,500",
      icon: "DollarSign",
      change: "+67%",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-dark">
          Платформа в цифрах
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow animate-fade-in"
            >
              <CardHeader className="pb-2">
                <Icon
                  name={stat.icon as any}
                  size={40}
                  className="text-primary mx-auto mb-2"
                />
                <CardTitle className="text-gray-600 text-sm font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-green-500 text-sm font-medium">
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
