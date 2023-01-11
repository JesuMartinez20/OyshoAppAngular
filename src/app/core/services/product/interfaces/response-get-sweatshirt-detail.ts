//Esta interfaz nos permite tipar la respuesta del servicio get detail sudaderas
export interface ResponseGetSweatshirtDetail {
  id:                     number;
  type:                   string;
  name:                   string;
  nameEn:                 string;
  image:                  null;
  backSoon:               string;
  unitsLot:               number;
  isTop:                  number;
  subFamily:              string;
  productType:            string;
  bundleColors:           BundleColor[];
  tags:                   any[];
  attributes:             WelcomeAttribute[];
  relatedCategories:      RelatedCategory[];
  attachments:            any[];
  bundleProductSummaries: BundleProductSummary[];
  detail:                 Detail;
  field5:                 string;
  section:                string;
  family:                 string;
  sectionNameEN:          string;
  startDate:              string;
  keywords:               string;
  mainColorid:            string;
  familyCode:             null;
  subFamilyCode:          string;
  productUrl:             string;
  productUrlParam:        string;
  gridElemType:           string;
  availabilityDate:       Date;
  visibilityValue:        string;
  alternativeProductId:   number;
  isBuyable:              boolean;
  onSpecial:              boolean;
  rueiData:               RueiData;
}

export interface WelcomeAttribute {
  id:    string;
  name:  string;
  value: string;
  type:  string;
}

export interface BundleColor {
  id:   number;
  name: string;
}

export interface BundleProductSummary {
  id:                     number;
  type:                   string;
  name:                   string;
  nameEn:                 string;
  backSoon:               string;
  unitsLot:               number;
  isTop:                  number;
  sizeSystem:             string;
  subFamily:              string;
  productType:            string;
  bundleColors:           any[];
  tags:                   any[];
  attributes:             WelcomeAttribute[];
  relatedCategories:      any[];
  attachments:            any[];
  bundleProductSummaries: any[];
  detail:                 Detail;
  field5:                 string;
  section:                string;
  family:                 string;
  sectionName:            string;
  sectionNameEN:          string;
  startDate:              string;
  productUrl:             string;
  gridElemType:           string;
  availabilityDate:       Date;
  isBuyable:              boolean;
  onSpecial:              boolean;
}

export interface Detail {
  description:       string;
  longDescription:   string;
  additionalInfo:    string;
  reference:         string;
  displayReference:  string;
  defaultImageType:  null;
  composition:       any[];
  compositionByZone: CompositionByZone[];
  care:              Care[];
  colors:            Color[];
  relatedProducts:   any[];
  xmediaDefaultSet:  null;
  xmedia?:           Xmedia[];
  warnings:          any[];
  familyInfo:        FamilyInfo;
  subfamilyInfo:     SubfamilyInfo;
  joinLife?:         string;
  joinType?:         string;
  isJoinLife:        boolean;
  promotions:        any[];
  relatedElements?:  any[];
}

export interface Care {
  id:          string;
  name:        string;
  description: string;
  percentage?: string;
}

export interface Color {
  id:                string;
  name:              string;
  modelHeigh:        null;
  modelName:         null;
  modelSize:         null;
  image:             Image;
  sizes:             Size[];
  isContinuity:      boolean;
  composition:       any[];
  compositionByZone: CompositionByZone[];
  joinLifeInfo:      JoinLifeInfo;
  colFilter:         any[];
}

export interface CompositionByZone {
  part:  string;
  zones: Zone[];
}

export interface Zone {
  zone:        string;
  zoneName:    string;
  composition: Care[];
}

export interface Image {
  timestamp:          string;
  url:                string;
  aux:                string[];
  type:               string[];
  style:              any[];
  availableEstilismo: boolean;
}

export interface JoinLifeInfo {
  isJoinLife:        boolean;
  joinLifeId:        string;
  descJoinLife:      string;
  shortDescJoinLife: string;
}

export interface Size {
  sku:             number;
  name:            string;
  description:     null;
  partnumber:      string;
  isBuyable:       boolean;
  backSoon:        string;
  mastersSizeId:   string;
  position:        number;
  price:           string;
  oldPrice:        null;
  sizeType:        string;
  skuDimensions:   any[];
  visibilityValue: string;
  attributes:      SizeAttribute[];
}

export interface SizeAttribute {
  name: string;
}

export interface FamilyInfo {
  familyId:   number;
  familyCode: number;
}

export interface SubfamilyInfo {
  subFamilyId:   number;
  subFamilyCode: number;
  subFamilyName: null;
}

export interface Xmedia {
  path:            string;
  xmediaItems:     XmediaItem[];
  colorCode:       string;
  xmediaLocations: XmediaLocation[];
}

export interface XmediaItem {
  medias: Media[];
  set:    number;
}

export interface Media {
  format:    number;
  clazz:     number;
  idMedia:   string;
  timestamp: number;
  extraInfo: ExtraInfo;
}

export interface ExtraInfo {
}

export interface XmediaLocation {
  locations: Location[];
  set:       number;
}

export interface Location {
  mediaLocations: string[];
  location:       number;
}

export interface RelatedCategory {
  id:          number;
  identifier:  string;
  name:        string;
  urlCategory: boolean;
}

export interface RueiData {
  StoreLangRUEI:     string;
  StoreTypeRUEI:     string;
  OperationTypeRUEI: string;
  OperationRUEI:     string;
  StoreIdRUEI:       string;
}
