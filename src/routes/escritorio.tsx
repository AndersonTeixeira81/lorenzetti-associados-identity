import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/site';
import { PageIntro, AboutSection, PrinciplesSection, ContactBanner } from '@/components/site/sections';

export const Route = createFileRoute('/escritorio')({head:()=>pageHead('O Escritório','Ética, escuta e responsabilidade na orientação jurídica trabalhista e previdenciária em Dracena.','/escritorio'),component:Page});
function Page(){return <><PageIntro eyebrow={'O ESCRITÓRIO'} title={'Uma atuação próxima. Um compromisso responsável.'} description={'Orientação jurídica com escuta atenta, clareza e respeito à singularidade de cada caso.'}/><AboutSection/><PrinciplesSection/><ContactBanner/></>;}
