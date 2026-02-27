import IconTS from "../images/IconTS.png";
import IconJS from "../images/IconJS.png";
import IconPHP from "../images/IconPHP.png";
import IconSQL from "../images/IconSQL.png";
import IconReactJS from "../images/IconReactJS.png";
import IconGitlab from "../images/IconGitlab.png";
import IconMongoDB from "../images/IconMongoDB.png";
import IconAWS from "../images/IconAWS.png";
import IconDocker from "../images/IconDocker.png";
import IconLinux from "../images/IconLinux.png";
import IconPython from "../images/IconPython.png";
import { IconN8N } from "../images/IconN8N";
import { IconOpenAI } from "../images/IconOpenAI";

import { IconWebScraping } from "../images/IconWebScraping";
import { IconAutomation } from "../images/IconAutomation";

function SkillCard({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-800/30 card-glow transition-all duration-300 hover:-translate-y-1 cursor-default">
      <div className="h-12 flex items-center justify-center">{icon}</div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
        {label}
      </span>
    </div>
  );
}

export function About() {
  return (
    <div className="space-y-12 p-6 lg:p-8 max-lg:pb-20">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
          Sobre Mim
        </h1>
        <div className="mt-3 h-1 w-12 rounded-full gradient-accent" />
      </div>

      {/* Bio */}
      <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>
          Desenvolvedor Full-Stack com 2 anos de atuação na engenharia de
          software, focado no desenvolvimento de APIs, sistemas corporativos e
          aplicações web/mobile de alta performance. Experiência consolidada em
          arquitetura de soluções e manipulação intensiva de dados.
        </p>
        <p>
          Atualmente, aplico meus conhecimentos em desenvolvimento tradicional
          para arquitetar e integrar soluções de{" "}
          <span className="text-accent-cyan font-semibold">
            Inteligência Artificial
          </span>{" "}
          e{" "}
          <span className="text-accent-cyan font-semibold">
            Automação de Processos
          </span>
          , com foco em otimização de fluxos de trabalho e redução de gargalos
          operacionais.
        </p>

        <div className="mt-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-800/20">
          <p className="font-semibold text-accent font-mono text-sm uppercase tracking-wider mb-4">
            Competências e Entregas
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent-teal mt-0.5 font-mono text-sm">
                ▹
              </span>
              <span>
                <strong className="text-slate-900 dark:text-white">
                  Desenvolvimento End-to-End:
                </strong>{" "}
                Construção de interfaces e sistemas escaláveis utilizando React,
                React Native, Python e PHP.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5 font-mono text-sm">▹</span>
              <span>
                <strong className="text-slate-900 dark:text-white">
                  Dados e Back-End:
                </strong>{" "}
                Arquitetura de APIs robustas, modelagem de dados, criação de
                Procedures, Views e otimização de queries complexas no SQL
                Server.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-violet mt-0.5 font-mono text-sm">
                ▹
              </span>
              <span>
                <strong className="text-slate-900 dark:text-white">
                  IA & Automação:
                </strong>{" "}
                Desenvolvimento de scripts em Python para automação de tarefas
                rotineiras, web scraping e integração com APIs de LLM (ex:
                OpenAI) para processamento inteligente de dados.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-indigo mt-0.5 font-mono text-sm">
                ▹
              </span>
              <span>
                <strong className="text-slate-900 dark:text-white">
                  Infraestrutura e DevOps:
                </strong>{" "}
                Deploy e manutenção de aplicações utilizando AWS, Docker,
                princípios de CI/CD e versionamento com Git.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-slate-500 dark:text-slate-400 italic text-sm">
          Perfil analítico e orientado a resultados, focado em traduzir
          necessidades de negócios em soluções tecnológicas eficientes.
        </p>
      </div>

      {/* Skills Sections */}
      <div className="space-y-12">
        {/* IA & Automação */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-mono whitespace-nowrap">
              IA & Automação
            </h2>
            <div className="flex-1 h-px line-teal" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <SkillCard
              icon={<IconOpenAI className="w-12 h-12" />}
              label="OpenAI API"
            />
            <SkillCard icon={<IconN8N className="w-12 h-12" />} label="N8N" />
            <SkillCard
              icon={<IconWebScraping className="w-12 h-12" />}
              label="Web Scraping"
            />
            <SkillCard
              icon={<IconAutomation className="w-12 h-12" />}
              label="Automação"
            />
            <SkillCard
              icon={
                <img
                  src={IconPython}
                  alt="Python"
                  className="h-12 w-12 object-contain"
                />
              }
              label="Python"
            />
          </div>
        </section>

        {/* Desenvolvimento & Dados */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-mono whitespace-nowrap">
              Desenvolvimento & Dados
            </h2>
            <div className="flex-1 h-px line-blue" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <SkillCard
              icon={
                <img
                  src={IconTS}
                  alt="TypeScript"
                  className="h-12 w-12 object-contain"
                />
              }
              label="TypeScript"
            />
            <SkillCard
              icon={
                <img
                  src={IconJS}
                  alt="JavaScript"
                  className="h-12 w-12 object-contain"
                />
              }
              label="JavaScript"
            />
            <SkillCard
              icon={
                <img
                  src={IconReactJS}
                  alt="React JS"
                  className="h-12 w-12 object-contain"
                />
              }
              label="React JS"
            />
            <SkillCard
              icon={
                <img
                  src={IconPHP}
                  alt="PHP"
                  className="h-12 w-12 object-contain"
                />
              }
              label="PHP"
            />
            <SkillCard
              icon={
                <img
                  src={IconSQL}
                  alt="SQL Server"
                  className="h-12 w-12 object-contain"
                />
              }
              label="SQL Server"
            />
            <SkillCard
              icon={
                <img
                  src={IconMongoDB}
                  alt="MongoDB"
                  className="h-12 w-12 object-contain"
                />
              }
              label="MongoDB"
            />
          </div>
        </section>

        {/* Infraestrutura & DevOps */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-mono whitespace-nowrap">
              Infraestrutura & DevOps
            </h2>
            <div className="flex-1 h-px line-violet" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <SkillCard
              icon={
                <img
                  src={IconDocker}
                  alt="Docker"
                  className="h-12 w-12 object-contain"
                />
              }
              label="Docker"
            />
            <SkillCard
              icon={
                <img
                  src={IconAWS}
                  alt="AWS"
                  className="h-12 w-12 object-contain"
                />
              }
              label="AWS Cloud"
            />
            <SkillCard
              icon={
                <img
                  src={IconGitlab}
                  alt="GitLab CI/CD"
                  className="h-12 w-12 object-contain"
                />
              }
              label="GitLab CI/CD"
            />
            <SkillCard
              icon={
                <img
                  src={IconLinux}
                  alt="Linux"
                  className="h-12 w-12 object-contain"
                />
              }
              label="Linux"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
