"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function HireMeModal({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [tier, setTier] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !tier) return;
    
    const message = `Olá Kevin, tudo bem? Me chamo ${name} e vim pelo seu portfólio. Gostaria de fazer um orçamento para ${tier}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/553189300969?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solicitar Orçamento</DialogTitle>
          <DialogDescription>
            Preencha seus dados rápidos para eu saber como posso ajudar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleWhatsAppRedirect} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Seu Nome</Label>
            <Input 
              id="name" 
              placeholder="Como quer ser chamado(a)?" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tier">Qual solução você busca?</Label>
            <Select value={tier} onValueChange={(val) => setTier(val || "")} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="One-Pager / Landing Page">One-Pager / Landing Page</SelectItem>
                <SelectItem value="Site Institucional Empresarial">Site Institucional Empresarial</SelectItem>
                <SelectItem value="Aplicação Web Dinâmica">Aplicação Web Dinâmica</SelectItem>
                <SelectItem value="SaaS & Plataformas Escaláveis">SaaS & Plataformas Escaláveis</SelectItem>
                <SelectItem value="Outro (Consultoria/Suporte)">Outro (Consultoria/Suporte)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold gap-2">
              <MessageCircle size={18} />
              Ir para o WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
