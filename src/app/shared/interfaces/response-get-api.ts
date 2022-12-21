//Esta interfaz nos permite tipar la respuesta del servicio get sudaderas
export interface ResponseGetApi {
  gridElements: GridElement[];
  products:     Product[];
  rueiData:     RueiData;
}

export interface GridElement {
  ccIds:         number[];
  type:          GridElementType;
  id?:           string;
  template?:     string;
  hiddenFields?: any[];
}

export enum GridElementType {
  Block = "block",
  Cc = "CC",
}

export interface Product {
  id:                     number;
  type:                   RelatedProductType;
  name:                   string;
  nameEn:                 string;
  image:                  null;
  isBuyable:              boolean;
  onSpecial:              boolean;
  backSoon:               null;
  unitsLot:               number;
  isTop:                  number | null;
  subFamily:              null | string;
  productType:            ProductType;
  bundleColors:           BundleColor[];
  tags:                   any[];
  attributes:             Attribute[];
  relatedCategories:      RelatedCategory[];
  attachments:            any[];
  bundleProductSummaries: BundleProductSummary[];
  detail:                 ProductDetail;
  field5:                 null | string;
  sequence:               number;
  section:                null | string;
  family:                 null | string;
  startDate:              string;
  isSales:                null;
  keywords:               string;
  mainColorid:            string;
  familyCode:             null;
  subFamilyCode:          null;
  productUrlParam:        string;
  gridElemType:           ProductGridElemType;
  availabilityDate:       Date;
  visibilityValue:        VisibilityValue;
  sizeSystem?:            string;
  sectionName?:           SectionName;
  sectionNameEN?:         SectionName;
  productUrl?:            string;
}

export interface Attribute {
  id:                string;
  name:              string;
  value:             string;
  type:              AttributeType;
  shortDescription?: string;
  longDescription?:  string;
}

export enum AttributeType {
  Catfilter = "CATFILTER",
  Xactfilter = "XACTFILTER",
  XbrandMastersID = "XBRAND_MASTERS_ID",
  Xcalfilter = "XCALFILTER",
  Xcatfilter = "XCATFILTER",
  Xcolfilter = "XCOLFILTER",
  Xcomprador = "XCOMPRADOR",
  Xestfilter = "XESTFILTER",
  Xflag = "XFLAG",
  XmanCountry = "XMAN_COUNTRY",
  XmanDate = "XMAN_DATE",
  Xmanufacturer = "XMANUFACTURER",
  Xtypfilter = "XTYPFILTER",
}

export interface BundleColor {
  id:                number;
  name:              string;
  image:             null;
  colorName:         null;
  relatedCategories: any[];
  modelName:         null;
}

export interface BundleProductSummary {
  id:                     number;
  type:                   BundleProductSummaryType;
  name:                   string;
  nameEn:                 string;
  image:                  null;
  isBuyable:              boolean;
  onSpecial:              boolean;
  backSoon:               null;
  unitsLot:               number;
  isTop:                  number;
  sizeSystem:             string;
  subFamily:              string;
  productType:            ProductType;
  bundleColors:           any[];
  tags:                   any[];
  attributes:             Attribute[];
  relatedCategories:      any[];
  attachments:            any[];
  bundleProductSummaries: any[];
  detail:                 BundleProductSummaryDetail;
  field5:                 string;
  sequence:               number;
  section:                string;
  family:                 string;
  sectionName:            SectionName;
  sectionNameEN:          SectionName;
  startDate:              string;
  productUrl:             string;
  gridElemType:           BundleProductSummaryGridElemType;
  availabilityDate:       Date;
  productUrlTranslations: any[];
  productUrlParam?:       string;
}

export interface BundleProductSummaryDetail {
  description:       null;
  longDescription:   string;
  additionalInfo:    string;
  reference:         string;
  displayReference:  string;
  isSport:           boolean;
  defaultImageType:  null;
  composition:       any[];
  compositionByZone: any[];
  care:              any[];
  colors:            Color[];
  relatedProducts:   any[];
  xmediaDefaultSet:  null;
  xmedia:            PurpleXmedia[];
  skuDimensions:     Dimensions;
  dimensions:        Dimensions;
  familyInfo:        FamilyInfo;
  subfamilyInfo:     SubfamilyInfo;
  joinLife?:         string;
  isJoinLife:        boolean;
  compositionDetail: null;
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
  joinLifeInfo:      JoinLifeInfo;
  compositionDetail: null;
  colFilter:         any[];
}

export interface Image {
  timestamp:          string;
  url:                string;
  aux:                string[];
  type:               string[];
  style:              string[];
  availableEstilismo: boolean;
}

export interface JoinLifeInfo {
  descJoinLife:       null | string;
  isJoinLife:         boolean;
  joinLifeId?:        JoinLifeID;
  shortDescJoinLife?: string;
}

export enum JoinLifeID {
  Jl1 = "JL 1",
  Jl11 = "JL 11",
  Jl13 = "JL 13",
  Jl161 = "JL 161",
  Jl2174 = "JL 2174",
  Jl324 = "JL 324",
  Jl56 = "JL 56",
}

export interface Size {
  sku:              number;
  name:             Name;
  description:      null;
  partnumber:       string;
  isBuyable:        boolean;
  backSoon:         null | string;
  mastersSizeId:    string;
  position:         number;
  price:            string;
  oldPrice:         null;
  sizeType:         string;
  visibilityValue?: VisibilityValue;
}

export enum Name {
  L = "L",
  M = "M",
  S = "S",
  Xl = "XL",
  Xs = "XS",
  Xxl = "XXL",
  Xxs = "XXS",
}

export enum VisibilityValue {
  BackSoon = "BACK_SOON",
  Hidden = "HIDDEN",
  Show = "SHOW",
}

export interface Dimensions {
}

export interface FamilyInfo {
  familyId:   number | null;
  familyCode: number | null;
  familyName: null;
}

export interface SubfamilyInfo {
  subFamilyId:   number | null;
  subFamilyCode: number | null;
  subFamilyName: null;
}

export interface PurpleXmedia {
  path:            string;
  xmediaItems:     PurpleXmediaItem[];
  colorCode:       string;
  xmediaLocations: XmediaLocation[];
}

export interface PurpleXmediaItem {
  medias: PurpleMedia[];
  set:    number;
}

export interface PurpleMedia {
  format:    number;
  clazz:     number;
  idMedia:   string;
  extraInfo: PurpleExtraInfo | null;
  timestamp: number;
}

export interface PurpleExtraInfo {
  vimeo: Vimeo[];
}

export interface Vimeo {
  size: number;
  url:  string;
  id:   string;
}

export interface XmediaLocation {
  locations: Location[];
  set:       number;
}

export interface Location {
  mediaLocations: string[];
  location:       number;
}

export enum BundleProductSummaryGridElemType {
  Product = "PRODUCT",
}

export enum ProductType {
  Clothing = "Clothing",
}

export enum SectionName {
  Women = "WOMEN",
}

export enum BundleProductSummaryType {
  ProductBean = "ProductBean",
}

export interface ProductDetail {
  description:       null | string;
  longDescription:   null | string;
  additionalInfo:    string;
  reference:         string;
  displayReference:  string;
  isSport:           boolean;
  defaultImageType:  null | string;
  composition:       any[];
  compositionByZone: any[];
  care:              any[];
  colors:            any[];
  relatedProducts:   RelatedProduct[];
  xmediaDefaultSet:  number | null;
  xmedia:            FluffyXmedia[] | null;
  skuDimensions:     Dimensions;
  dimensions:        Dimensions;
  familyInfo:        FamilyInfo;
  subfamilyInfo:     SubfamilyInfo;
  isJoinLife:        boolean;
  compositionDetail: null;
}

export interface RelatedProduct {
  id:                     number;
  image:                  null;
  name:                   string;
  nameEN:                 string;
  isBuyable:              boolean;
  type:                   RelatedProductType;
  sequence:               string;
  section:                string;
  relationType:           RelationType;
  relatedCategories:      RelatedCategory[];
  detail:                 RelatedProductDetail;
  bundleProductSummaries: BundleProductSummary[];
  colors:                 any[];
  family:                 string;
  subFamily:              string;
  productUrl:             string;
}

export interface RelatedProductDetail {
  reference:  string;
  colors:     any[];
  isJoinLife: boolean;
}

export interface RelatedCategory {
  id:          number;
  identifier:  string;
  name:        string;
  urlCategory: boolean;
}

export enum RelationType {
  XAlsolike = "X-ALSOLIKE",
  XSell = "X-SELL",
}

export enum RelatedProductType {
  BundleBean = "BundleBean",
}

export interface FluffyXmedia {
  path:            string;
  xmediaItems:     FluffyXmediaItem[];
  colorCode:       string;
  xmediaLocations: XmediaLocation[];
}

export interface FluffyXmediaItem {
  medias: FluffyMedia[];
  set:    number;
}

export interface FluffyMedia {
  format:    number;
  clazz:     number;
  idMedia:   string;
  extraInfo: FluffyExtraInfo | null;
  timestamp: number;
}

export interface FluffyExtraInfo {
  type:    string;
  regions: Region[];
}

export interface Region {
  area: Area;
  link: Link;
}

export interface Area {
  y1: number;
  x1: number;
  y2: number;
  x2: number;
}

export interface Link {
  datatype: string;
  id:       number;
}

export enum ProductGridElemType {
  Bundle = "BUNDLE",
  Estilismo = "ESTILISMO",
  Mocaco = "MOCACO",
}

export interface RueiData {
  StoreLangRUEI:     string;
  StoreTypeRUEI:     string;
  OperationTypeRUEI: string;
  OperationRUEI:     string;
  StoreIdRUEI:       string;
}
