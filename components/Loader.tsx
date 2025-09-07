import { Code, Database, Globe, Zap } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center relative">
        {/* Floating Icons */}
        <div className="absolute -top-20 -left-16 animate-[float_3s_ease-in-out_infinite]">
          <Code className="w-8 h-8 text-blue-400 opacity-60" />
        </div>
        <div className="absolute -top-16 right-12 animate-[float_3s_ease-in-out_infinite_0.5s]">
          <Database className="w-6 h-6 text-purple-400 opacity-40" />
        </div>
        <div className="absolute -bottom-12 -left-8 animate-[float_3s_ease-in-out_infinite_1s]">
          <Globe className="w-7 h-7 text-green-400 opacity-50" />
        </div>
        <div className="absolute -bottom-16 right-16 animate-[float_3s_ease-in-out_infinite_1.5s]">
          <Zap className="w-5 h-5 text-yellow-400 opacity-60" />
        </div>

        {/* Main Content */}
        <div className="animate-[fadeInUp_1s_ease-out]">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-[spin_8s_linear_infinite]"></div>
            <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
              <Code className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
            Md Shahnawaz
          </h2>
          <p className="text-gray-400">Crafting digital experiences...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
