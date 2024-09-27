import { ContainerDescription, Btns } from "../styles/projectStyle"
import { Btn } from "../styles/globalStyles";

export const DescriptionProject = () => {
  return (
    <ContainerDescription>
      <h1>nome do projeto</h1>
      <p>
        sit excepturi obcaecati quidem asperiores incidunt illum. Totam modi amet at neque assumenda itaque quaerat sapiente ea laborum alias.
      </p>
      <Btns>
        <Btn>repositório</Btn>
        <Btn>deploy</Btn>
      </Btns>
    </ContainerDescription>
  )
}
