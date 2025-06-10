import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsOverview from "@/components/StatsOverview";
import ProfileCard from "@/components/ProfileCard";
import TournamentList from "@/components/TournamentList";
import AchievementDashboard from "@/components/AchievementDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsOverview />
      <ProfileCard />
      <TournamentList />
      <AchievementDashboard />
      <Footer />
    </div>
  );
};

export default Index;
