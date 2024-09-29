import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { ContainerProject, ContainerTitle, DescriptionProject } from "./projectStyle"
export default function Project() {
  function openModal(event) {
    event.preventDefault()
    const modal = document.createElement('div')
    modal.classList.toggle('modal-open')
  }

    return(
    <>
      <ContainerProject>
        <img src="./src/assets/mockup.png" alt="" />
        <DescriptionProject>
          <ContainerTitle>
            <h2>Nome Do Projeto<span>.</span></h2>
            <a href=""><Github color="#000" size={20}/></a>
            <a href=""><ExternalLink color="#222" size={20}/></a>
          </ContainerTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum culpa, est deleniti provident, aut itaque sequi quasi impedit ullam consectetur tenetur quibusdam doloremque similique? Iusto doloribus debitis quis sequi sunt.</p>
          <button className="modal" onClick={openModal}>saiba mais <ArrowUpRight size={20}/></button>
        </DescriptionProject>
      </ContainerProject>
    </>
  )
}