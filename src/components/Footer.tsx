
const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
              <span className="text-2xl font-bold text-white">EverFlowLeads</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered lead generation for UK businesses. Transform your sales pipeline with consistent, high-quality leads.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 EverFlowLeads. All rights reserved.
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>muhammad@everflowleads.com</li>
              <li>+44 (0) 79 4679 6666</li>
              <li>London, United Kingdom</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
