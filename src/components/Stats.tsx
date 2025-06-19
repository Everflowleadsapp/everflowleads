
const Stats = () => {
  const stats = [
    {
      number: "73%",
      label: "Of Businesses Struggle",
      description: "To generate consistent leads"
    },
    {
      number: "3.2x",
      label: "Higher Conversion Rate",
      description: "With AI-qualified leads"
    },
    {
      number: "89%",
      label: "Of Leads Go Uncontacted",
      description: "Within the critical first hour"
    },
    {
      number: "24/7",
      label: "AI Working For You",
      description: "Never stops generating leads"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 relative">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The Lead Generation Challenge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Most UK businesses struggle with inconsistent lead flow. Here's what the data shows.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 animate-pulse-slow">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
