interface Props {
  projectName: string
}

const Header = (props: Props) => {

  const { projectName } = props
  return (
    <div>
      {projectName} | Totalt antal timmar
    </div>
  )
}

export default Header
