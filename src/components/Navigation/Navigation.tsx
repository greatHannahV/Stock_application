import { memo } from 'react'
import Search from '../Search/Search'
import {
  NavigationLink,
  NavigationList,
  NavigationStyles,
} from './Navigation.styles'
import { useAppContext } from '../../AppContext'
import Button from '../Button/Button'

export interface NavigationProps {
  refetch: () => void
  isFetching: boolean
}

const Navigation: React.FC<NavigationProps> = ({ refetch, isFetching }) => {
  const { isLoading } = useAppContext()
  return (
    <NavigationStyles>
      <NavigationList>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/watchlist">Watchlist</NavigationLink>
      </NavigationList>
      <Search isLoading={isLoading} />
      <Button refetch={refetch} isFetching={isFetching} />
    </NavigationStyles>
  )
}

export default memo(Navigation)
