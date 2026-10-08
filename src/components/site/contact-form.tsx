import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactSchema } from '@/lib/contact';
export function ContactForm(){
 const [errors,setErrors]=useState<Partial<Record<'name' | 'email' | 'subject' | 'message' | 'consent', string>>>({});const [checked,setChecked]=useState(false);
 return <form className="contact-form" noValidate onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);const result=contactSchema.safeParse({name:data.get('name'),email:data.get('email'),subject:data.get('subject'),message:data.get('message'),consent:data.get('consent')==='on'});setChecked(false);if(!result.success){const next:Record<string,string>={};result.error.issues.forEach(issue=>next[String(issue.path[0])]=issue.message);setErrors(next);return;}setErrors({});setChecked(true);}}>
 <div className="form-status">Canal de envio em preparação. Nenhum dado é transmitido ou armazenado por este formulário.</div>
 <div className="form-row">{([['name','Nome completo','text'],['email','E-mail','email']] as const).map(([name,label,type])=><div className="form-field" key={name}><label htmlFor={name}>{label} <span>*</span></label><input id={name} name={name} type={type} maxLength={name==='name'?100:255} autoComplete={name==='name'?'name':'email'} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name]?`${name}-error`:undefined}/>{errors[name]&&<span className="field-error" id={`${name}-error`}>{errors[name]}</span>}</div>)}</div>
 <div className="form-field"><label htmlFor="subject">Assunto *</label><select id="subject" name="subject" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject?'subject-error':undefined}><option value="">Selecione um assunto</option><option>Direito Trabalhista</option><option>Direito Previdenciário</option><option>BPC/LOAS</option><option>Outros assuntos</option></select>{errors.subject&&<span id="subject-error" className="field-error">{errors.subject}</span>}</div>
 <div className="form-field"><label htmlFor="message">Mensagem *</label><textarea id="message" name="message" rows={5} maxLength={1000} placeholder="Não inclua documentos, informações médicas ou outros dados sensíveis." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message?'message-error':undefined}/>{errors.message&&<span id="message-error" className="field-error">{errors.message}</span>}</div>
 <label className="consent"><input type="checkbox" name="consent" aria-invalid={Boolean(errors.consent)}/><span>Li o <Link to="/politica-de-privacidade">aviso de privacidade</Link> e compreendo que o envio ainda não está disponível.</span></label>{errors.consent&&<span className="field-error">{errors.consent}</span>}
 <Button type="submit" className="gold-button">VERIFICAR PREENCHIMENTO <ArrowRight/></Button>{checked&&<p className="validated-message" role="status"><Check size={18}/> Preenchimento válido. A mensagem não foi enviada; o canal oficial aguarda configuração.</p>}<div role="alert" className="sr-only">{Object.values(errors).join(' ')}</div>
 </form>;
}
