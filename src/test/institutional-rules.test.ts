import { describe, expect, it } from 'vitest';
import { site, whatsappUrl } from '../config/site';
import { contactSchema } from '../lib/contact';
describe('Regras institucionais', () => {
  it('mantém o nome provisório sem confirmação societária', () => { expect(site.provisionalName).toBe(true); });
  it('preserva o endereço fornecido', () => { expect(site.fullAddress).toBe('Avenida Presidente Roosevelt, 207 — Dracena, SP'); });
  it('oculta WhatsApp sem número válido', () => { expect(whatsappUrl('',true)).toBeNull(); expect(whatsappUrl('123',true)).toBeNull(); });
  it('mantém WhatsApp desativado por padrão', () => { expect(whatsappUrl(site.whatsapp,site.whatsappEnabled)).toBeNull(); });
  it('ativa apenas com número brasileiro válido e habilitação', () => { expect(whatsappUrl('5511999999999',true)).toMatch(/^https:\/\/wa.me\/5511999999999\?text=/); expect(whatsappUrl('5511999999999',false)).toBeNull(); });
  it('não publica OAB inventada', () => { expect(site.professionals.every(p=>p.oab==='')).toBe(true); });
  it('exige aviso de privacidade para validar o contato', () => { const data={name:'Nome Teste',email:'teste@example.com',subject:'Direito Trabalhista',message:'Uma mensagem de teste.',consent:false};expect(contactSchema.safeParse(data).success).toBe(false);expect(contactSchema.safeParse({...data,consent:true}).success).toBe(true); });
});