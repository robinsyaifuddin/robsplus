
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

// Mock data for analytics
const visitData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1900 },
  { name: 'Mar', value: 2100 },
  { name: 'Apr', value: 2400 },
  { name: 'May', value: 2700 },
  { name: 'Jun', value: 2900 },
  { name: 'Jul', value: 3100 },
];

const sourceData = [
  { name: 'Google', value: 4300 },
  { name: 'Direct', value: 2800 },
  { name: 'Social', value: 1800 },
  { name: 'Referral', value: 1200 },
  { name: 'Other', value: 900 },
];

const pageData = [
  { name: 'Home', views: 12350, bounce: 40 },
  { name: 'Services', views: 5250, bounce: 32 },
  { name: 'Pricing', views: 4200, bounce: 35 },
  { name: 'Order', views: 2100, bounce: 28 },
  { name: 'Contact', views: 1800, bounce: 25 },
];

interface AnalyticsSectionProps {
  preview?: boolean;
}

const AnalyticsSection = ({ preview = false }: AnalyticsSectionProps) => {
  if (preview) {
    return (
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-lg text-cyber-neonGreen">Analisis Website</CardTitle>
          <CardDescription className="text-cyber-lightBlue">Pengunjung bulan ini</CardDescription>
        </CardHeader>
        <CardContent className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitData.slice(-5)}>
              <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} />
              <YAxis stroke="#94A3B8" fontSize={12} />
              <Line type="monotone" dataKey="value" stroke="#22D3EE" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="glassmorphism border-cyber-lightBlue/30">
        <CardHeader>
          <CardTitle className="text-cyber-neonGreen">Analisis Website</CardTitle>
          <CardDescription className="text-cyber-lightBlue">
            Data pengunjung dan interaksi website ROB'sPlus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visits">
            <TabsList className="bg-cyber-darkBlue/50 border border-cyber-lightBlue/20">
              <TabsTrigger value="visits" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
                Kunjungan
              </TabsTrigger>
              <TabsTrigger value="sources" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
                Sumber Trafik
              </TabsTrigger>
              <TabsTrigger value="pages" className="data-[state=active]:bg-cyber-neonGreen data-[state=active]:text-black">
                Halaman
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="visits" className="pt-4">
              <div className="h-80">
                <ChartContainer
                  config={{
                    visits: {
                      label: "Kunjungan",
                      theme: {
                        light: "#22D3EE",
                        dark: "#22D3EE"
                      }
                    }
                  }}
                >
                  <LineChart data={visitData}>
                    <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} />
                    <YAxis stroke="#94A3B8" fontSize={12} />
                    <Tooltip content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Bulan
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].payload.name}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Kunjungan
                                </span>
                                <span className="font-bold">
                                  {payload[0].value}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                
                      return null;
                    }} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="var(--color-visits)"
                      strokeWidth={2}
                      activeDot={{ r: 4 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="sources" className="pt-4">
              <div className="h-80">
                <ChartContainer
                  config={{
                    value: {
                      label: "Sumber",
                      theme: {
                        light: "#22D3EE",
                        dark: "#22D3EE"
                      }
                    }
                  }}
                >
                  <BarChart data={sourceData}>
                    <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} />
                    <YAxis stroke="#94A3B8" fontSize={12} />
                    <Tooltip content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Sumber
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].payload.name}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Kunjungan
                                </span>
                                <span className="font-bold">
                                  {payload[0].value}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                
                      return null;
                    }} />
                    <Bar dataKey="value" fill="rgba(34, 211, 238, 0.6)" />
                  </BarChart>
                </ChartContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="pages" className="pt-4">
              <div className="h-80">
                <ChartContainer
                  config={{
                    views: {
                      label: "Views",
                      theme: {
                        light: "#22D3EE",
                        dark: "#22D3EE"
                      }
                    },
                    bounce: {
                      label: "Bounce Rate (%)",
                      theme: {
                        light: "#F87171",
                        dark: "#F87171"
                      }
                    }
                  }}
                >
                  <RadarChart data={pageData}>
                    <PolarGrid stroke="#94A3B8" />
                    <PolarAngleAxis dataKey="name" stroke="#94A3B8" />
                    <PolarRadiusAxis stroke="#94A3B8" />
                    <Radar
                      name="Views"
                      dataKey="views"
                      stroke="rgba(34, 211, 238, 0.8)"
                      fill="rgba(34, 211, 238, 0.4)"
                    />
                    <Radar
                      name="Bounce Rate"
                      dataKey="bounce"
                      stroke="rgba(248, 113, 113, 0.8)"
                      fill="rgba(248, 113, 113, 0.4)"
                    />
                    <Tooltip content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Halaman
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].payload.name}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Views
                                </span>
                                <span className="font-bold">
                                  {payload[0].payload.views}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Bounce Rate
                                </span>
                                <span className="font-bold">
                                  {payload[0].payload.bounce}%
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                
                      return null;
                    }} />
                  </RadarChart>
                </ChartContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsSection;
