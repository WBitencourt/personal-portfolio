

import Image from "next/image";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import FallbackIcon from "./icons/fall-back-icon";
import InstagramIcon from "./icons/instagram-icon";
import LinkedinIcon from "./icons/linkedin-icon";
import GithubIcon from "./icons/github-icon";
import { TechCard } from "@/components/tech-card";

export const metadata: Metadata = {
  title: "Wendell Bitencourt - Software Engineer",
  description: "Portfolio profissional de Wendell Bitencourt - Software Engineer",
};

export const revalidate = 3600;

const PROJECTS: Array<{
  id: string;
  year: number;
  href: string;
  imgSrc: string;
  imgAlt: string;
  tags: string[];
}> = [
  { id: 'npm_package', year: 2025, href: 'https://www.npmjs.com/package/wbitencourt', imgSrc: 'https://github.com/user-attachments/assets/a1eb1a07-d406-446e-b017-50fd4be36df4', imgAlt: 'npm-wbitencourt', tags: ['TypeScript', 'Node.js'] },
  { id: 'claw_pi_docker', year: 2026, href: 'https://github.com/WBitencourt/claw-pi-docker', imgSrc: 'https://raw.githubusercontent.com/WBitencourt/claw-pi-docker/main/assets/claw-pi-docker-logo.png', imgAlt: 'claw-pi-docker', tags: ['Docker', 'Raspberry Pi'] },
  { id: 'shelf_play', year: 2026, href: 'https://github.com/WBitencourt/shelf-play-front-end', imgSrc: 'https://raw.githubusercontent.com/WBitencourt/wbitencourt/main/images/shelf-play-logo.png', imgAlt: 'shelf-play', tags: ['React', 'Next.js'] },
  { id: 'with_love', year: 2025, href: 'https://withlove.wbitencourt.dev', imgSrc: 'https://github.com/user-attachments/assets/adee83dd-cec1-4cc5-ad19-ee9023bc3f9f', imgAlt: 'with-love', tags: ['React', 'TypeScript'] },
  { id: 'giulice_js', year: 2025, href: 'https://github.com/WBitencourt/giulice.js', imgSrc: 'https://github.com/user-attachments/assets/d002ccf7-b914-4cdb-9329-f98ff30b55d8', imgAlt: 'giulice.js', tags: ['React', 'TypeScript'] },
  { id: 'bluetooth_car', year: 2021, href: 'https://github.com/wbitencourt/bluetooth-solar-rc-car', imgSrc: 'https://raw.githubusercontent.com/WBitencourt/wbitencourt/main/images/RemoteCar_bluetooth3.gif', imgAlt: 'bluetooth-solar-rc-car', tags: ['Arduino', 'Electronics'] },
].sort((a, b) => b.year - a.year);

export default async function Home() {
  const user = await fetch('https://api.github.com/users/wbitencourt', {
    next: { revalidate }
  });

  const userData = await user.json();

  const t = await getTranslations('portfolio');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        {/* Header/Hero Section */}
        <header className="text-center mb-12 lg:mb-16">
          <div className="mb-8">
            {userData.avatar_url ? (
              <Image
                src={userData.avatar_url}
                alt="Wendell Bitencourt"
                className="rounded-full mx-auto shadow-lg border-4 border-white dark:border-gray-800"
                width={160}
                height={160}
                priority
              />
            ) : (
              <FallbackIcon />
            )}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Wendell Bitencourt
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>wendell.gbitencourt@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>{t('contact.location')}</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://www.instagram.com/" className="flex gap-2 items-center justify-center text-blue-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">
              <InstagramIcon /> Instagram
            </a>
            <a href="https://linkedin.com/in/wendell-bitencourt" className="flex gap-2 items-center justify-center text-blue-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="https://github.com/wbitencourt" className="flex gap-2 items-center justify-center text-blue-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">
              <GithubIcon /> GitHub
            </a>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* About */}
            <section className="flex flex-col gap-6 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t('about.title')}
              </h2>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base">
                {t('about.description')}
              </p>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base">
                {t('about.description2')}
              </p>
              {/* <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base">
                {t('about.description3')}
              </p> */}
            </section>

            {/* Skills */}
            <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t('skills.title')}
              </h2>
              
              <div className="space-y-6">
                {/* General */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.general.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.general.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.frontend.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.frontend.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Backend/DevOps */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.backend_devops.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.backend_devops.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>

                {/* AWS */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.aws.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.aws.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Worked With */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.worked_with.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.worked_with.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Studying */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.studying.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.studying.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Interested */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400 mb-3">
                    {t('skills.interested.title')}
                  </h3>
                  <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-3">
                    {(t.raw('skills.interested.techs') as Array<{name: string, src: string, url: string}>).map((tech, index) => (
                      <TechCard
                        key={index}
                        name={tech.name}
                        src={tech.src}
                        url={tech.url}
                        className="py-2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('education.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {t('education.unip.institution')}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {t('education.unip.degree')}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">
                    {t('education.unip.period')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {t('education.rocketseat.institution')}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {t('education.rocketseat.degree')}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">
                    {t('education.rocketseat.period')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {t('education.anchieta.institution')}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {t('education.anchieta.degree')}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">
                    {t('education.anchieta.period')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {t('education.wizard.institution')}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {t('education.wizard.degree')}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm mt-2">
                    {t('education.wizard.period')}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm mt-2">
                    {t('education.wizard.additional')}
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('languages.title')}
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-700 dark:text-gray-300">{t('languages.english')}</span>
                  <span className="text-slate-500 dark:text-gray-400 text-sm">{t('languages.levels.intermediate')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 dark:text-gray-300">{t('languages.portuguese')}</span>
                  <span className="text-slate-500 dark:text-gray-400 text-sm">{t('languages.levels.native')}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            
            {/* <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t('experience.title')}
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {t('experience.oito_mid.company')}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {t('experience.oito_mid.period')}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">
                    {t('experience.oito_mid.role')}
                  </p>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {(t.raw('experience.oito_mid.description') as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1.5 text-xs">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {t('experience.oito_junior.company')}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {t('experience.oito_junior.period')}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">
                    {t('experience.oito_junior.role')}
                  </p>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {(t.raw('experience.oito_junior.description') as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1.5 text-xs">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {t('experience.vinhanet_analyst.company')}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {t('experience.vinhanet_analyst.period')}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">
                    {t('experience.vinhanet_analyst.role')}
                  </p>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {(t.raw('experience.vinhanet_analyst.description') as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1.5 text-xs">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {t('experience.vinhanet_trainee.company')}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {t('experience.vinhanet_trainee.period')}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">
                    {t('experience.vinhanet_trainee.role')}
                  </p>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {(t.raw('experience.vinhanet_trainee.description') as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1.5 text-xs">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section> */}

            {/* Projects */}
            <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t('projects.title')}
              </h2>
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="border border-slate-200 dark:border-gray-700 rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-40 h-28 rounded-lg overflow-hidden bg-slate-100 dark:bg-gray-800 flex items-center justify-center"
                    >
                      <img
                        src={project.imgSrc}
                        alt={project.imgAlt}
                        className="w-full h-full object-contain"
                      />
                    </a>
                    <div className="min-w-0 flex-1 flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {t(`projects.${project.id}.name`)}
                        </h3>
                        <span className="text-slate-500 dark:text-gray-400 text-sm shrink-0">
                          {t(`projects.${project.id}.year`)}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-gray-300 text-sm mb-3">
                        {t(`projects.${project.id}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        className="text-blue-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white text-sm transition-colors mt-auto"
                      >
                        🔗 {t(`projects.${project.id}.link`)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-gray-700">
          <p className="text-slate-500 dark:text-gray-400">
            {t('footer.built_with')}
          </p>
        </footer>
      </div>
    </div>
  );
}
