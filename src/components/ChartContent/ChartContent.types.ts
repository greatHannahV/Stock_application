import { MetaData as ExternalMetaData } from '../../services/StockServicesGuards'

export interface MetaData extends ExternalMetaData {
  shortName?: string
  regularMarketChange?: number
  regularMarketChangePercent?: number
  regularMarketPrice?: number
  previousClose?: number
  regularMarketTime?: number
  timestamp?: number[]
}

export interface ProcessedData {
  low: number[]
  high: number[]
  volume: number[]
  close: number[]
  open: number[]
}

interface Indicators {
  quote: ProcessedData[]
}

export interface ChartData {
  meta: MetaData
  timestamp: number[]
  indicators: Indicators
}

export interface ProcessedDataItem {
  timestamp: number
  close: number
  low: number
  open: number
  volume: number
  high: number
}

export interface ChartContentProps {
  selectedCompany:
    | {
        processedData: ProcessedDataItem[]
        chartData: ChartData
      }
    | undefined
}
