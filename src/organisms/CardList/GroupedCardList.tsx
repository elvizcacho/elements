import React, { PropsWithChildren } from 'react'
import CardList from './CardList'
import View from '../../atoms/View'
import GroupTitle from '../../atoms/GroupTitle'

const GroupedCardList = ({
  title,
  children,
  ...rest
}: PropsWithChildren<IGroupedCardListProps>) => {
  return (
    <View {...rest}>
      <GroupTitle>{title}</GroupTitle>
      <CardList>{children}</CardList>
    </View>
  )
}

interface IGroupedCardListProps {
  /** The title for the CardList */
  title: string
}

export default GroupedCardList
