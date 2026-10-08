import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/site';
import { PageIntro, TeamSection, ContactBanner } from '@/components/site/sections';

export const Route = createFileRoute('/equipe')({head:()=>pageHead('Nossa Equipe','Conheça os profissionais Eduardo Lorenzetti e Milton R. S. Júnior, em Dracena, SP.','/equipe'),component:Page});
function Page(){return <><PageIntro eyebrow={'NOSSA EQUIPE'} title={'Atenção individualizada, de pessoa para pessoa.'} description={'Profissionais dedicados à orientação jurídica com ética, discrição e responsabilidade.'}/><TeamSection full/><ContactBanner/></>;}
