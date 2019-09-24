import React from 'react'
import CardList from '../CardList'
import GroupTitle from '../GroupTitle'
import View, { IViewProps } from '../View'

const GroupedCardList = ({
  title,
  children,
  ...rest
}: IGroupedCardListProps) => {
  return (
    <View {...rest}>
      <GroupTitle>{title}</GroupTitle>
      <CardList>{children}</CardList>
    </View>
  )
}

interface IGroupedCardListProps extends IViewProps {
  /** The title for the CardList */
  title: string
}

export default GroupedCardList
