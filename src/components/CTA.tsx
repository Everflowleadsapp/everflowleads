import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10" style={{ backgroundSize: '60px 60px' }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Get 5+ New Quote-Ready Leads Each Month?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Stop struggling with inconsistent lead flow. Let our AI handle your lead generation 
            <br />
            while you focus on closing deals and delivering results.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Book Your Free Strategy Call Today
            </h3>
            
            <div className="flex justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <a
                  href="https://tally.so/r/nPJEQP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Audit
                </a>
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              ✓ 30-minute strategy session ✓ Custom lead generation plan ✓ ROI projections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div className="text-white/80">Strategy Call</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">AI Lead Generation</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">UK-Only</div>
              <div className="text-white/80">Specialized Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

