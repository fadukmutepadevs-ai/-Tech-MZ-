import { useState } from 'react';
import { RotateCw, CheckCircle2, Zap } from 'lucide-react';

interface RefreshBannerButtonProps {
  onRefresh: () => void;
}

export function RefreshBannerButton({ onRefresh }: RefreshBannerButtonProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setIsRefreshing(true);
    
    // Trigger the refresh action
    onRefresh();

    // Subtle quick feedback animation (350ms)
    setTimeout(() => {
      setIsRefreshing(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }, 350);
  };

  return (
    <div className="my-8 sm:my-10 flex flex-col items-center justify-center text-center">
      
      {/* Container with label & helper */}
      <div className="relative group inline-block">
        
        {/* Main Center Button */}
        <button
          id="btn-techmz-refresh-center"
          onClick={handleClick}
          disabled={isRefreshing}
          aria-label="Atualizar página do Tech MZ"
          title="Clique para atualizar a página rapidamente"
          className="relative inline-flex items-center gap-4 bg-[#0B132B] hover:bg-[#111c3e] active:scale-[0.98] text-white p-3.5 sm:p-4 md:px-6 rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-sky-500/30"
        >
          {/* Logo Graphic container */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            
            {/* Blue icon box with white "T" */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00A8FF] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-sm shrink-0">
              T
            </div>

            {/* Typography */}
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black tracking-tight leading-tight flex items-center gap-1.5">
                <span className="text-white">Tech</span>
                <span className="text-[#00A8FF]">MZ</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                Tecnologia Acessível
              </div>
            </div>

          </div>

          {/* Quick Refresh Icon indicator */}
          <div className="ml-2 sm:ml-4 pl-3 sm:pl-4 border-l border-slate-800 flex items-center justify-center">
            <div className={`p-2.5 rounded-xl bg-slate-800/80 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors ${isRefreshing ? 'animate-spin' : ''}`}>
              <RotateCw className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </button>

        {/* Pulse helper / badge below */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
          {showSuccess ? (
            <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              Página atualizada rapidamente!
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 hover:text-slate-700">
              <Zap className="w-3.5 h-3.5 text-sky-500" />
              Clique no botão acima para atualizar a página rapidamente
            </span>
          )}
        </div>

      </div>

    </div>
  );
}
