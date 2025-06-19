
import { Card, CardContent } from "@/components/ui/card";
import { Zap, CircleArrowUp, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Our advanced AI algorithms identify and qualify high-intent prospects automatically, delivering warm leads directly to your pipeline.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CircleArrowUp,
      title: "Consistent Growth",
      description: "Generate 10-20 qualified leads per month with our proven system. Predictable growth means predictable revenue for your business.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "UK Market Focus",
      description: "Specialized strategies for UK businesses. We understand the local market dynamics and compliance requirements.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '100px 100px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Why Choose EverFlowLeads?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with proven marketing strategies to deliver results that matter to your bottom line.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} p-4 mx-auto mb-6 group-hover:animate-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
