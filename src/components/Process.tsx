
const Process = () => {
  const steps = [
    {
      step: "01",
      title: "AI Analysis",
      description: "Our AI analyzes your ideal customer profile and market positioning to create targeted lead generation strategies."
    },
    {
      step: "02", 
      title: "Multi-Channel Outreach",
      description: "Automated campaigns across email, LinkedIn, and other channels to reach prospects where they are most active."
    },
    {
      step: "03",
      title: "Lead Qualification", 
      description: "Advanced AI qualification ensures only warm, high-intent prospects make it to your calendar."
    },
    {
      step: "04",
      title: "Seamless Handoff",
      description: "Qualified leads are delivered directly to your CRM with complete context and next-step recommendations."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our streamlined process ensures you get qualified leads without the hassle of manual prospecting.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8 mb-12 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl group-hover:animate-glow">
                  {step.step}
                </div>
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-8 mt-16 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
