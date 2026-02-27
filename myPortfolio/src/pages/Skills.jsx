import { CardProject, projects } from "../components/CardProject";

export function Skills() {
  return (
    <div className="space-y-8 p-6 lg:p-8 max-lg:pb-20">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
          Projetos
        </h1>
        <div className="mt-3 h-1 w-12 rounded-full gradient-accent" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <CardProject key={index} numberProject={index} />
        ))}
      </div>
    </div>
  );
}
