import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/site';
import { PageIntro, AreasSection, ContactBanner } from '@/components/site/sections';

export const Route = createFileRoute('/areas-de-atuacao')({head:()=>pageHead('Áreas de Atuação','Direito trabalhista, aposentadorias, BPC/LOAS, revisões e planejamento previdenciário em Dracena.','/areas-de-atuacao'),component:Page});
function Page(){return <><PageIntro eyebrow={'NOSSA ATUAÇÃO'} title={'Direito com clareza. Cuidado com cada caso.'} description={'Conheça as áreas de orientação jurídica trabalhista, previdenciária e assistencial.'}/><AreasSection full/><ContactBanner/></>;}
