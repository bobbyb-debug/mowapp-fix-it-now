import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobTracker from "@/components/dashboard/JobTracker";
import CostTracker from "@/components/dashboard/CostTracker";
import CalendarView from "@/components/dashboard/CalendarView";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import Settings from "@/components/dashboard/Settings"; // 🛠 Import Settings tab!

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Business Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track jobs, costs, packages, and manage your lawn care business
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="flex flex-wrap gap-4 justify-center md:justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Job Tracker</TabsTrigger>
            <TabsTrigger value="costs">Cost Tracker</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="jobs">
            <JobTracker />
          </TabsContent>

          <TabsContent value="costs">
            <CostTracker />
          </TabsContent>

          <TabsContent value="calendar">
            <CalendarView />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
