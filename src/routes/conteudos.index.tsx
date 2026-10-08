import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/site';
import { PageIntro, ArticlesSection, ContactBanner } from '@/components/site/sections';

export const Route = createFileRoute('/conteudos/')({head:()=>pageHead('Conteúdos Jurídicos','Informações sobre relações de trabalho, aposentadoria e benefícios assistenciais, com linguagem clara.','/conteudos'),component:Page});
function Page(){return <><PageIntro eyebrow={'INFORMAÇÃO JURÍDICA'} title={'Conhecimento que aproxima e esclarece.'} description={'Conteúdos de caráter informativo sobre questões trabalhistas e previdenciárias.'}/><ArticlesSection full/><ContactBanner/></>;}
