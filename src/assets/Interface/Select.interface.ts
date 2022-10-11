export interface RootObject {
  Data: Datum[];
  HasWarning: boolean;
  Message: string;
  MetaData: MetaData;
  RateLimit: RateLimit;
  SponsoredData: any[];
  Type: number;
}

export interface Datum {
  CoinInfo: CoinInfo;
  DISPLAY: Display;
  RAW: Raw;
}

export interface CoinInfo {
  Algorithm: string;
  AssetLaunchDate: Date;
  BlockNumber: number;
  BlockReward: number;
  BlockTime: number;
  DocumentType: DocumentType;
  FullName: string;
  Id: string;
  ImageUrl: string;
  Internal: string;
  MaxSupply: number;
  Name: string;
  NetHashesPerSecond: number;
  ProofType: string;
  Rating: Rating;
  Type: number;
  Url: string;
}

export enum DocumentType {
  Webpagecoinp = "Webpagecoinp",
}

export interface Rating {
  Weiss: Weiss;
}

export interface Weiss {
  MarketPerformanceRating: MarketPerformanceRating;
  Rating: string;
  TechnologyAdoptionRating: string;
}

export enum MarketPerformanceRating {
  C = "C-",
  D = "D-",
  Empty = "",
}

export interface Display {
  USD: DisplayUsd;
}

export interface DisplayUsd {
  CHANGE24HOUR: string;
  CHANGEDAY: string;
  CHANGEHOUR: string;
  CHANGEPCT24HOUR: string;
  CHANGEPCTDAY: string;
  CHANGEPCTHOUR: string;
  CIRCULATINGSUPPLY: string;
  CIRCULATINGSUPPLYMKTCAP: string;
  CONVERSIONSYMBOL: string;
  CONVERSIONTYPE: Conversiontype;
  FROMSYMBOL: string;
  HIGH24HOUR: string;
  HIGHDAY: string;
  HIGHHOUR: string;
  IMAGEURL: string;
  LASTMARKET: string;
  LASTTRADEID: string;
  LASTUPDATE: Lastupdate;
  LASTVOLUME: string;
  LASTVOLUMETO: string;
  LOW24HOUR: string;
  LOWDAY: string;
  LOWHOUR: string;
  MARKET: PurpleMARKET;
  MKTCAP: string;
  MKTCAPPENALTY: Mktcappenalty;
  OPEN24HOUR: string;
  OPENDAY: string;
  OPENHOUR: string;
  PRICE: string;
  SUPPLY: string;
  TOPTIERVOLUME24HOUR: string;
  TOPTIERVOLUME24HOURTO: string;
  TOSYMBOL: PurpleTOSYMBOL;
  TOTALTOPTIERVOLUME24H: string;
  TOTALTOPTIERVOLUME24HTO: string;
  TOTALVOLUME24H: string;
  TOTALVOLUME24HTO: string;
  VOLUME24HOUR: string;
  VOLUME24HOURTO: string;
  VOLUMEDAY: string;
  VOLUMEDAYTO: string;
  VOLUMEHOUR: string;
  VOLUMEHOURTO: string;
}

export enum Conversiontype {
  Direct = "direct",
}

export enum Lastupdate {
  JustNow = "Just now",
  The2MinAgo = "2 min ago",
}

export enum PurpleMARKET {
  CryptoCompareIndex = "CryptoCompare Index",
}

export enum Mktcappenalty {
  The0 = "0 %",
}

export enum PurpleTOSYMBOL {
  Empty = "$",
}

export interface Raw {
  USD: RawUsd;
}

export interface RawUsd {
  CHANGE24HOUR: number;
  CHANGEDAY: number;
  CHANGEHOUR: number;
  CHANGEPCT24HOUR: number;
  CHANGEPCTDAY: number;
  CHANGEPCTHOUR: number;
  CIRCULATINGSUPPLY: number;
  CIRCULATINGSUPPLYMKTCAP: number;
  CONVERSIONSYMBOL: string;
  CONVERSIONTYPE: Conversiontype;
  FLAGS: string;
  FROMSYMBOL: string;
  HIGH24HOUR: number;
  HIGHDAY: number;
  HIGHHOUR: number;
  IMAGEURL: string;
  LASTMARKET: string;
  LASTTRADEID: string;
  LASTUPDATE: number;
  LASTVOLUME: number;
  LASTVOLUMETO: number;
  LOW24HOUR: number;
  LOWDAY: number;
  LOWHOUR: number;
  MARKET: FluffyMARKET;
  MEDIAN: number;
  MKTCAP: number;
  MKTCAPPENALTY: number;
  OPEN24HOUR: number;
  OPENDAY: number;
  OPENHOUR: number;
  PRICE: number;
  SUPPLY: number;
  TOPTIERVOLUME24HOUR: number;
  TOPTIERVOLUME24HOURTO: number;
  TOSYMBOL: FluffyTOSYMBOL;
  TOTALTOPTIERVOLUME24H: number;
  TOTALTOPTIERVOLUME24HTO: number;
  TOTALVOLUME24H: number;
  TOTALVOLUME24HTO: number;
  TYPE: string;
  VOLUME24HOUR: number;
  VOLUME24HOURTO: number;
  VOLUMEDAY: number;
  VOLUMEDAYTO: number;
  VOLUMEHOUR: number;
  VOLUMEHOURTO: number;
}

export enum FluffyMARKET {
  Cccagg = "CCCAGG",
}

export enum FluffyTOSYMBOL {
  Usd = "USD",
}

export interface MetaData {
  Count: number;
}

export interface RateLimit {}
