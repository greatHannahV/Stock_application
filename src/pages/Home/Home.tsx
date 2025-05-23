import BiggestTables from '../../components/BiggestTables/BiggestTables.tsx'
import {
  BiggestTableBoxes,
  BiggestTableWrapper,
  HomeStyles,
  HomeWrapper,
  MainTableBox,
  SectionHeading,
} from './Home.styles.ts'
import Table from '../../components/Table/Table.tsx'
import { useQuery } from '@tanstack/react-query'
import Error from '../../components/Error/Error.tsx'
import { getStocksData } from '#src/services/StockServices'

import { FC } from 'react'
import Navigation from '../../components/Navigation/Navigation.tsx'

const Home: FC = () => {
  const {
    data: stocks = [],
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['stocks'],
    queryFn: getStocksData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  if (error) {
    return <Error error={error} />
  }
  return (
    <HomeStyles>
      <Navigation refetch={refetch} isFetching={isFetching} />

      <HomeWrapper>
        <SectionHeading>Main table with stocks</SectionHeading>
        <MainTableBox>
          <Table stocks={stocks} isLoading={isLoading} />
        </MainTableBox>
        <SectionHeading>Biggest gainers and losers tables</SectionHeading>
        <BiggestTableWrapper>
          <BiggestTableBoxes>
            <BiggestTables isLoading={isLoading} stocks={stocks} />
          </BiggestTableBoxes>
        </BiggestTableWrapper>
      </HomeWrapper>
    </HomeStyles>
  )
}

export default Home
