import { Text } from './libs/Text'
import { Heading } from './libs/Heading'
import { Button, AlertButton } from './libs/Button'
import { Textarea } from './libs/Textarea'

export const App = () => {
  return (
    <>
      <Textarea width={500} />
      <Button onClick={() => console.log('clicked!')} title="Button" type="primary" width={96} />
      <Button onClick={() => console.log('clicked!')} title="Button" type="secondary" />
      <Button onClick={() => console.log('clicked!')} title="Button" type="error" />
      <AlertButton onClick={() => console.log('clicked!')} title="Button" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h1">
        <span>hello, world!</span>
      </Heading>
      <Text text={'true'} />
    </>
  )
}