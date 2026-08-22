import { CheckCircle2, Feather, WifiOff, Smartphone } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-10 border-t border-slate-200 bg-slate-50/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xs">
          
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Sobre o Tech MZ
            </h2>
            
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              “O Tech MZ é uma plataforma independente dedicada a partilhar informações, tutoriais e dicas sobre tecnologia de forma simples e acessível.”
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <Feather className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Ultra Leve</span>
                  <span>Construído para carregar rápido mesmo em redes lentas 3G/4G.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <WifiOff className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Poupa Dados</span>
                  <span>Sem anúncios pesados, vídeos automáticos ou scripts lentos.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <Smartphone className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Foco Prático</span>
                  <span>Tutoriais diretos testados para a realidade de Moçambique.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
