import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/site';
import { PageIntro, LocationSection } from '@/components/site/sections';
import { ContactForm } from '@/components/site/contact-form';
export const Route = createFileRoute('/contato')({head:()=>pageHead('Contato','Endereço e contato institucional: Avenida Presidente Roosevelt, 207, Dracena, SP.','/contato'),component:Page});
function Page(){return <><PageIntro eyebrow={'FALE COM O ESCRITÓRIO'} title={'Toda orientação começa pela escuta.'} description={'Um primeiro passo para compreender sua situação com atenção e responsabilidade.'}/><section className="section"><div className="container contact-grid"><div><h2>Como podemos ajudar?</h2><p>Utilize apenas informações gerais. Não inclua documentos ou dados sensíveis.</p><p>O atendimento digital aguarda a configuração dos canais oficiais. Você pode consultar nossa localização abaixo.</p></div><ContactForm/></div></section><LocationSection/></>;}
