// To parse this data:
//
//   import { Convert, ArchiveModel } from "./file";
//
//   const archiveModel = Convert.toArchiveModel(json);

import { Category } from './result/BlogPushNewResultData';

export interface ArchiveModel {
  blogCount: number;
  cateCount: number;
  tagCount: number;
  categoryList: Category[];
  tags: Tag[];
  monthsCounts: MonthsCount[];
  archiveModels: MonthsCount[];
}

export interface MonthsCount {
  count: number;
  months: string;
  blogs: MonthsBlogModel[] | undefined;
}

export interface MonthsBlogModel {
  id: number;
  title: string;
  createTime: number;
}

export interface Tag {
  id: number;
  name: string;
}
