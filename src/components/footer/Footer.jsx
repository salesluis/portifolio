import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { FooterContainer,TitleFooter, NavContainer } from "./FooterStyle"
export default function Footer(){
  return (
    <FooterContainer id="footer">
      <TitleFooter>vamos trabalhar juntos<span>.</span></TitleFooter>
      <NavContainer>
        <h2>navegação</h2>
        <a href="#">home</a>
        <a href="#projects">projetos</a>
        <a href="#about">sobre</a>
      </NavContainer>
      <NavContainer>
        <h2>contato</h2>
        <a href="#"><Instagram size={20}/> Instagram</a>
        <a href="#projetos"><Github size={20}/> GitHub</a>
        <a href="#sobre"><Linkedin size={20}/> Linkedin</a>
        <a href="#"><MessageCircle size={20}/> WhatApp</a>
      </NavContainer>

    </FooterContainer>
  )
}
