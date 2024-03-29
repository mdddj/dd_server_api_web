export interface Product {
  teamName: string;
  tbcid: number;
  shipPercent: number;
  freeshipRemoteDistrict: number;
  yunfeixian: number;
  itemLink: string;
  goldSellers: number;
  reimgs: string;
  couponLink: string;
  haitao: number;
  sellerId: string;
  discounts: number;
  directCommissionLink: string;
  couponStartTime: Date;
  serviceScore: number;
  mainPic: string;
  tchaoshi: number;
  id: number;
  brand: number;
  imgs: string;
  brandName: string;
  subcid: number[];
  couponConditions: string;
  detailPics: string;
  subdivisionId: number;
  dsrScore: number;
  shopLogo: string;
  dailySales: number;
  shopLevel: number;
  sales24h: number;
  couponTotalNum: number;
  lowest: number;
  descScore: number;
  brandWenan: string;
  activityEndTime: string;
  shipScore: number;
  brandId: number;
  couponReceiveNum: number;
  shopType: number;
  desc: string;
  cid: number;
  commissionRate: number;
  originalPrice: number;
  actualPrice: number;
  goodsId: string;
  quanMLink: number;
  shopName: string;
  activityStartTime: string;
  video: string;
  title: string;
  dtitle: string;
  monthSales: number;
  subdivisionRank: number;
  hzQuanOver: number;
  isSubdivision: number;
  marketingMainPic: string;
  directCommissionType: number;
  servicePercent: number;
  commissionType: number;
  couponEndTime: Date;
  directCommission: number;
  twoHoursSales: number;
  createTime: Date;
  dsrPercent: number;
  estimateAmount: number;
  specialText: any[];
  couponPrice: number;
  activityType: number;
  hotPush: number;
  subdivisionName: string;
}

export interface ProductDetailImage {
  hotAreaList: any[];
  img: string;
  width: string;
  height: string;
}

/// 产品工具类
export class ProductUtil {
  /// 商品详情字符串转对象
  public detailCovert(str: string): ProductDetailImage[] {
    return JSON.parse(str) as ProductDetailImage[];
  }
}
