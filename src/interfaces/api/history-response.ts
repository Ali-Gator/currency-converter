export interface HistoryResponse {
  "base": string,
  "date": string,
  "historical": boolean,
  "rates": Record<string, number>,
  "success": boolean,
  "timestamp": number
}
