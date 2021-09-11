type Props = {
  name: string
}

export const HelloWorld = (props: Props): JSX.Element => (
  <p>{`Hello ${props.name} !!`}</p>
)
