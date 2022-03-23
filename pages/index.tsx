import type { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../app/components/button/Button'
import { Input } from '../app/components/input/Input'
import { TagFilter } from '../app/components/tag_filter/TagFilter'
import { Text } from '../app/components/text/Text'




const Home: NextPage = () => {

  const BLOCKCHAIN_LIST: string[] = ['ethereum', 'solana']

  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')


  return (

    <main>

      <TagFilter tagsData={BLOCKCHAIN_LIST} setSelectedBlockchain={ setSelectedBlockchain }/>
      <Input />
      <Button />
      <Text />
      
    </main>
    
  )
}

export default Home
