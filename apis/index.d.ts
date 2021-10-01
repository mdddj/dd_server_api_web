import { Page, PagerModel, Result } from "./utils/ResultUtil";
import { User } from "./model/UserModel";
import PushNewBlogParams from "./model/param/PushNewBlogParamsModel";
import { BlogData, BlogListData, BlogPushNewResultData, Category } from "./model/result/BlogPushNewResultData";
import { PageParam } from "./model/PageModel";
import { ResCategory } from "./model/ResCategory";
import { FileInfo } from "./model/FileInfo";
import { ResourceModel } from "./model/ResourceModel";
import { TextModel } from "./model/TextModel";
import { ArchiveModel, Tag } from "./model/ArchiveModel";
import { SystemPicter } from "./model/avater";
/**
 * 接口访问类
 */
declare class DdServerApiByWeb {
    _host: string | undefined;
    /**
     * 鉴权token
     */
    _token: string | undefined;
    set host(v: string);
    get host(): string;
    set token(v: string | undefined);
    get token(): string | undefined;
    /**
     * 私有化类构造
     * @constructor
     * @private
     */
    private DdTaokeSdk;
    static _instance: DdServerApiByWeb;
    /**
     * 接口实例
     */
    static getInstance(): DdServerApiByWeb;
    createClient(): import("umi-request").RequestMethod<false>;
    /**
     * 封装通用的请求方法
     * @param url   访问url
     * @param data  请求参数
     * @param method    请求方法
     */
    requestT<T>(url: string, data?: any, method?: 'GET' | 'POST' | 'DELETE'): Promise<T>;
    /**
     * 获取用户列表接口
     * @param pager 分页
     * @param user  查询条件
     */
    userList(pager: PageParam, user?: User): Promise<Result<{
        page: PagerModel;
        list: User[];
    }>>;
    /**
     * 用户登录方法
     * @param loginNumber   登录名
     * @param password  密码
     */
    login(loginNumber: string, password: string): Promise<Result<string>>;
    /**
     * 退出登录
     */
    logout(): Promise<Result<string>>;
    /**
     * 根据jwt token 获取用户资料
     *
     *
     *
     * @param token jwt token
     */
    getUserInfo(token: string): Promise<Result<User>>;
    /**
     * 发布一篇新博客
     */
    pushNewBlog(params: PushNewBlogParams): Promise<BlogPushNewResultData>;
    /**
     * 删除一篇博客
     * @param blogId 博客id
     */
    deleteBlog(blogId: number): Promise<Result<string>>;
    /**
     * 获取分类列表
     */
    getBlogCategorys(): Promise<Result<Category[]>>;
    /**
     * 获取全部的标签列表
     */
    getBlogTags(): Promise<Result<Tag[]>>;
    /**
     * 使用博客id获取博客信息
     * @param id  博客id
     */
    getBlogDetailById(id: number): Promise<Result<BlogData>>;
    /**
     * 或者博客分类列表
     * @param pageModel 分页
     * @param category? 查询条件
     * @constructor
     */
    getCategoryForTableData(pageModel: PageParam, category?: Category): Promise<Result<Category[]>>;
    /**
     * 添加或者修改一个博客分类
     * @param category 修改或者添加的模型
     * @constructor
     */
    saveAndUpdateBlogCategory(category: Category): Promise<Result<Category>>;
    /**
     * 删除一个分类,如果分类下存在博客,需要将该分类下的全部博客删除,才能删除此分类
     * @param id  分类id
     * @constructor
     */
    deleteBlogCategory(id: number): Promise<Result<string>>;
    /**
     * 上传文件
     * @param data 数据
     */
    uploadFile(data: any): Promise<Result<FileInfo>>;
    /**
     * 获取文件夹列表
     * @param id  父文件夹
     * @constructor
     */
    getFolders(id?: number): Promise<Result<ResCategory[]>>;
    /**
     * 根据文件夹id或者文件列表查找文件列表
     * @param folderId  文件夹id
     * @param pageModel 分页数据
     * @constructor
     */
    getFilesWithFolderId(folderId: number, pageModel: PageParam): Promise<Result<Page<FileInfo>>>;
    /**
     * 创建文件夹接口
     * @param name  文件夹名字
     * @param parenFolder 父亲文件夹
     * @constructor
     */
    createFolder(name: string, parenFolder?: ResCategory): Promise<Result<ResCategory>>;
    /**
     * 获取资源列表
     * @param pageModel 分页数据
     * @param resCategory 查询条件
     * @constructor
     */
    getResourceCategoryList(pageModel: PageParam, resCategory?: ResCategory): Promise<Result<{
        page: PagerModel;
        list: ResCategory[];
    }>>;
    /**
     * 添加或者修改一个资源分类
     * @param category  分类
     * @constructor
     */
    saveOrUpdateResourceCategory(category: ResCategory): Promise<Result<ResCategory>>;
    /**
     * 根据id删除某个群组
     * @param category  群组数据, 后台只会取id删除
     * @constructor
     */
    deleteResourceCategoryById(category: ResCategory): Promise<Result<string>>;
    /**
     * 根据名字模糊查询某个群组
     * @param name  群组名
     * @constructor
     */
    findResCategoryListByNameLike(name: string): Promise<unknown>;
    /**
     * 添加一个资源
     * @param model ResourceModel 对象模型
     * @constructor
     */
    saveOrUpdateResourcesModel(model: ResourceModel): Promise<Result<ResourceModel>>;
    /**
     * 获取字典列表
     * @param page  第几页
     * @param pageSize 每页几条
     * @param name  查询条件
     */
    getTextList(page: number, pageSize: number, name?: string): Promise<Result<{
        list: TextModel[];
        page: PagerModel;
    }>>;
    /**
     * 添加或者修改对象
     * @param text  字典对象
     */
    saveText(text: TextModel): Promise<Result<TextModel>>;
    /**
     * 根据id删除某个标签,需要管理员权限
     * @param id 主键
     */
    deleteTextById(id: string): Promise<Result<string>>;
    /**
     * 获取博客列表
     * @param page  第几页
     * @param pageSize 每页几条数据
     */
    getBlogList(page: number, pageSize: number): Promise<Result<BlogListData>>;
    /**
     * 获取博客归档数据
     */
    getArchives(): Promise<Result<ArchiveModel>>;
    /**
     * 根据博客别名获取博客详情
     * @param alias 博客别名
     */
    getBlogWithAlias(alias: string): Promise<Result<BlogData>>;
    /**
     *
     * 获取特殊文本
     * @param name 别名
     * @returns
     */
    getTextByName(name: string): Promise<Result<TextModel>>;
    /**
     * 根据标签id 获取博客列表
     * @param tagId 标签id
     * @param pageModel 分页数据
     */
    getBlogsByTagId(tagId: number, pageModel: PageParam): Promise<Result<Page<BlogData>>>;
    /**
     * 根据分类id 获取博客列表
     * @param categoryId    分类id
     * @param pageModel 分类数据
     */
    getBlogsByCategoryId(categoryId: number, pageModel: PageParam): Promise<Result<Page<BlogData>>>;
    /**
     * 根据月份进行分页查询博客列表
     * @param month 月份
     * @param pageModel 分类数据
     */
    getBlogsByMonth(month: string, pageModel: PageParam): Promise<Result<Page<BlogData>>>;
    /**
     * 获取图片列表
     * @param type 图片类型， 用户头像传 1
     */
    getPics(type: number): Promise<Result<SystemPicter[]>>;
}
export default DdServerApiByWeb;
