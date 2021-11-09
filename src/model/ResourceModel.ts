import {ResCategory} from "./ResCategory";
import {User} from "./UserModel";

export interface ResourceModel {
    title: string;
    label: string;
    thumbnailImage: string;
    createDate: Date;
    updateDate: Date;
    description: string;
    links: string;
    type: string;
    clickCount: number;
    content: string;
    // 资源所属分类
    category: ResCategory | undefined;
    user?: User
}
