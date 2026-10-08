import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { articles } from '@/lib/content';
import { pageHead } from '@/config/site';
import { PageIntro, ContactBanner } from '@/components/site/sections';
export const Route = createFileRoute('/conteudos/$slug')({loader:({params})=>{const article=articles.find(a=>a.slug===params.slug);if(!article)throw notFound();return article;},head:({loaderData,params})=>pageHead(loaderData?.title??'Conteúdo não encontrado',loaderData?.description??'Conteúdo indisponível.',`/conteudos/${params.slug}`),component:Page});
function Page(){const article=Route.useLoaderData();return <><PageIntro eyebrow={article.category} title={article.title} description={article.description}/><article className="section"><div className="container reading-content"><Link to="/conteudos" className="text-link">← Todos os conteúdos</Link>{article.body.map(p=><p key={p}>{p}</p>)}<aside className="informative-note">Conteúdo exclusivamente informativo. Não substitui orientação jurídica individualizada nem assegura a concessão de direitos ou benefícios.</aside></div></article><ContactBanner/></>;}
