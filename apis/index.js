"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ServerUtil_1 = __importDefault(require("./utils/ServerUtil"));
var umi_request_1 = __importDefault(require("umi-request"));
/**
 * 接口访问类
 */
var DdServerApiByWeb = /** @class */ (function () {
    function DdServerApiByWeb() {
    }
    Object.defineProperty(DdServerApiByWeb.prototype, "host", {
        get: function () {
            var _a;
            return (_a = this._host) !== null && _a !== void 0 ? _a : ServerUtil_1.default.getInstance().host;
        },
        set: function (v) {
            this._host = v;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 私有化类构造
     * @constructor
     * @private
     */
    DdServerApiByWeb.prototype.DdTaokeSdk = function () {
    };
    /**
     * 接口实例
     */
    DdServerApiByWeb.getInstance = function () {
        var _a;
        return (_a = this._instance) !== null && _a !== void 0 ? _a : new DdServerApiByWeb();
    };
    /**
     * 封装通用的请求方法
     * @param url   访问url
     * @param data  请求参数
     * @param method    请求方法
     */
    DdServerApiByWeb.prototype.requestT = function (url, data, method) {
        return __awaiter(this, void 0, void 0, function () {
            var param, postData;
            return __generator(this, function (_a) {
                param = method === 'GET' ? data : undefined;
                postData = method === 'POST' || method === 'DELETE' ? data : undefined;
                return [2 /*return*/, (0, umi_request_1.default)("" + this.host + url, {
                        method: method !== null && method !== void 0 ? method : 'GET',
                        params: param,
                        data: postData
                    })];
            });
        });
    };
    /**
     * 用户登录方法
     * @param loginNumber   登录名
     * @param password  密码
     */
    DdServerApiByWeb.prototype.login = function (loginNumber, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.requestT('/api/user/login', { loginNumber: loginNumber, password: password }, 'POST')];
            });
        });
    };
    /**
     * 退出登录
     */
    DdServerApiByWeb.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.requestT('/api/user/logout', {}, 'POST')];
            });
        });
    };
    /**
     * 根据jwt token 获取用户资料
     *
     *
     *
     * @param token jwt token
     */
    DdServerApiByWeb.prototype.getUserInfo = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.requestT("/api/get-user-by-token?token=" + token)];
            });
        });
    };
    /**
     * 发布一篇新博客
     */
    DdServerApiByWeb.prototype.pushNewBlog = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.requestT('/api/auth/blog-push-new', params, 'POST')];
            });
        });
    };
    /**
     * 删除一篇博客
     * @param blogId 博客id
     */
    DdServerApiByWeb.prototype.deleteBlog = function (blogId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.requestT('/api/blog/delete', {
                        id: blogId,
                    }, 'DELETE')];
            });
        });
    };
    /**
     * 获取分类列表
     */
    DdServerApiByWeb.prototype.getBlogCategorys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.requestT('/api/blog/category-list')];
            });
        });
    };
    /**
     * 获取全部的标签列表
     */
    DdServerApiByWeb.prototype.getBlogTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/tags', { method: 'GET' })];
            });
        });
    };
    /**
     * 使用博客id获取博客信息
     * @param id  博客id
     */
    DdServerApiByWeb.prototype.getBlogDetailById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/get/' + id, { method: 'GET' })];
            });
        });
    };
    /**
     * 或者博客分类列表
     * @param pageModel 分页
     * @param category? 查询条件
     * @constructor
     */
    DdServerApiByWeb.prototype.getCategoryForTableData = function (pageModel, category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/category/list', {
                        method: 'GET',
                        params: Object.assign(pageModel, category),
                    })];
            });
        });
    };
    /**
     * 添加或者修改一个博客分类
     * @param category 修改或者添加的模型
     * @constructor
     */
    DdServerApiByWeb.prototype.saveAndUpdateBlogCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/auth/blog-category-save', {
                        method: 'POST',
                        data: category,
                    })];
            });
        });
    };
    /**
     * 删除一个分类,如果分类下存在博客,需要将该分类下的全部博客删除,才能删除此分类
     * @param id  分类id
     * @constructor
     */
    DdServerApiByWeb.prototype.deleteBlogCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/auth/blog-category-delete', {
                        data: { id: id },
                        method: 'DELETE',
                    })];
            });
        });
    };
    /**
     * 上传文件
     * @param data 数据
     */
    DdServerApiByWeb.prototype.uploadFile = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/auth/file-upload', {
                        method: 'POST',
                        data: data,
                    })];
            });
        });
    };
    /**
     * 获取文件夹列表
     * @param id  父文件夹
     * @constructor
     */
    DdServerApiByWeb.prototype.getFolders = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/file/get-folders', {
                        method: 'GET',
                        params: {
                            id: id,
                        },
                    })];
            });
        });
    };
    /**
     * 根据文件夹id或者文件列表查找文件列表
     * @param folderId  文件夹id
     * @param pageModel 分页数据
     * @constructor
     */
    DdServerApiByWeb.prototype.getFilesWithFolderId = function (folderId, pageModel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/file/get-files', {
                        method: 'GET',
                        params: Object.assign({ id: folderId }, pageModel),
                    })];
            });
        });
    };
    /**
     * 创建文件夹接口
     * @param name  文件夹名字
     * @param parenFolder 父亲文件夹
     * @constructor
     */
    DdServerApiByWeb.prototype.createFolder = function (name, parenFolder) {
        return __awaiter(this, void 0, void 0, function () {
            var cate;
            return __generator(this, function (_a) {
                cate = {
                    name: name,
                    type: 'folder',
                };
                if (parenFolder) {
                    cate.parentNode = parenFolder;
                }
                return [2 /*return*/, this.saveOrUpdateResourceCategory(cate)];
            });
        });
    };
    /**
     * 获取资源列表
     * @param pageModel 分页数据
     * @param resCategory 查询条件
     * @constructor
     */
    DdServerApiByWeb.prototype.getResourceCategoryList = function (pageModel, resCategory) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/res/list', {
                        method: 'GET',
                        params: Object.assign(pageModel, resCategory),
                    })];
            });
        });
    };
    /**
     * 添加或者修改一个资源分类
     * @param category  分类
     * @constructor
     */
    DdServerApiByWeb.prototype.saveOrUpdateResourceCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/auth/res-cate-save', {
                        method: 'POST',
                        data: category,
                    })];
            });
        });
    };
    /**
     * 根据id删除某个群组
     * @param category  群组数据, 后台只会取id删除
     * @constructor
     */
    DdServerApiByWeb.prototype.deleteResourceCategoryById = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/auth/res-cate-delete', {
                        method: 'DELETE',
                        data: category,
                    })];
            });
        });
    };
    /**
     * 根据名字模糊查询某个群组
     * @param name  群组名
     * @constructor
     */
    DdServerApiByWeb.prototype.findResCategoryListByNameLike = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/res/like-list', {
                        params: {
                            name: name,
                        },
                    })];
            });
        });
    };
    /**
     * 添加一个资源
     * @param model ResourceModel 对象模型
     * @constructor
     */
    DdServerApiByWeb.prototype.saveOrUpdateResourcesModel = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/auth/resource-save', {
                        method: 'POST',
                        data: model,
                    })];
            });
        });
    };
    /**
     * 获取字典列表
     * @param page  第几页
     * @param pageSize 每页几条
     * @param name  查询条件
     */
    DdServerApiByWeb.prototype.getTextList = function (page, pageSize, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)("/api/text/list", {
                        method: 'GET',
                        params: {
                            page: page,
                            pageSize: pageSize,
                            name: name,
                        },
                    })];
            });
        });
    };
    /**
     * 添加或者修改对象
     * @param text  字典对象
     */
    DdServerApiByWeb.prototype.saveText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)('/api/auth/text-update', {
                        method: 'POST',
                        data: text,
                    })];
            });
        });
    };
    /**
     * 根据id删除某个标签,需要管理员权限
     * @param id 主键
     */
    DdServerApiByWeb.prototype.deleteTextById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)('/api/auth/text-delete', {
                        data: {
                            id: id,
                        },
                        method: 'DELETE',
                    })];
            });
        });
    };
    /**
     * 获取博客列表
     * @param page  第几页
     * @param pageSize 每页几条数据
     */
    DdServerApiByWeb.prototype.getBlogList = function (page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/list?page=' + page + '&pageSize=' + pageSize)];
            });
        });
    };
    /**
     * 获取博客归档数据
     */
    DdServerApiByWeb.prototype.getArchives = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + "/api/blog/statistics")];
            });
        });
    };
    /**
     * 根据博客别名获取博客详情
     * @param alias 博客别名
     */
    DdServerApiByWeb.prototype.getBlogWithAlias = function (alias) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + "/api/blog/alias?alias=" + alias)];
            });
        });
    };
    /**
     *
     * 获取特殊文本
     * @param name 别名
     * @returns
     */
    DdServerApiByWeb.prototype.getTextByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + "/api/blog/text?name=" + name)];
            });
        });
    };
    /**
     * 根据标签id 获取博客列表
     * @param tagId 标签id
     * @param pageModel 分页数据
     */
    DdServerApiByWeb.prototype.getBlogsByTagId = function (tagId, pageModel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/tag/blogs', {
                        method: 'GET',
                        params: Object.assign({ tagId: tagId }, pageModel)
                    })];
            });
        });
    };
    /**
     * 根据分类id 获取博客列表
     * @param categoryId    分类id
     * @param pageModel 分类数据
     */
    DdServerApiByWeb.prototype.getBlogsByCategoryId = function (categoryId, pageModel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/category/blogs', {
                        method: 'GET',
                        params: Object.assign({ categoryId: categoryId }, pageModel)
                    })];
            });
        });
    };
    /**
     * 根据月份进行分页查询博客列表
     * @param month 月份
     * @param pageModel 分类数据
     */
    DdServerApiByWeb.prototype.getBlogsByMonth = function (month, pageModel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, umi_request_1.default)(this._host + '/api/blog/month/blogs', {
                        method: 'GET',
                        params: Object.assign({ month: month }, pageModel)
                    })];
            });
        });
    };
    return DdServerApiByWeb;
}());
exports.default = DdServerApiByWeb;
