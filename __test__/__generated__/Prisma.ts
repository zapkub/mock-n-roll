import { isEqual } from "lodash";
import { Exists, AdsBannerWhereUniqueInput, AdsBannerPromise, AdsBannerWhereInput, AdsBannerOrderByInput, Int, String, FragmentableArray, AdsBanner, AdsBannerConnectionPromise, AuthorWhereUniqueInput, AuthorPromise, AuthorWhereInput, AuthorOrderByInput, Author, AuthorConnectionPromise, BehaviorWhereUniqueInput, BehaviorPromise, BehaviorWhereInput, BehaviorOrderByInput, Behavior, BehaviorConnectionPromise, BookWhereUniqueInput, BookPromise, BookWhereInput, BookOrderByInput, Book, BookConnectionPromise, BookEpisodeWhereUniqueInput, BookEpisodePromise, BookEpisodeWhereInput, BookEpisodeOrderByInput, BookEpisode, BookEpisodeConnectionPromise, BookEpisodeContentWhereUniqueInput, BookEpisodeContentPromise, BookEpisodeContentWhereInput, BookEpisodeContentOrderByInput, BookEpisodeContent, BookEpisodeContentConnectionPromise, BookEpisodeRecentReadWhereUniqueInput, BookEpisodeRecentReadPromise, BookEpisodeRecentReadWhereInput, BookEpisodeRecentReadOrderByInput, BookEpisodeRecentRead, BookEpisodeRecentReadConnectionPromise, BookEpisodeReviewPostWhereUniqueInput, BookEpisodeReviewPostPromise, BookEpisodeReviewPostWhereInput, BookEpisodeReviewPostOrderByInput, BookEpisodeReviewPost, BookEpisodeReviewPostConnectionPromise, BookRecommendedWhereUniqueInput, BookRecommendedPromise, BookRecommendedWhereInput, BookRecommendedOrderByInput, BookRecommended, BookRecommendedConnectionPromise, BookVolumeWhereUniqueInput, BookVolumePromise, BookVolumeWhereInput, BookVolumeOrderByInput, BookVolume, BookVolumeConnectionPromise, CategoryWhereUniqueInput, CategoryPromise, CategoryWhereInput, CategoryOrderByInput, Category, CategoryConnectionPromise, CopyrightHolderWhereUniqueInput, CopyrightHolderPromise, CopyrightHolderWhereInput, CopyrightHolderOrderByInput, CopyrightHolder, CopyrightHolderConnectionPromise, DashbardDataCacheWhereInput, DashbardDataCacheOrderByInput, DashbardDataCache, DashbardDataCacheConnectionPromise, DocumentWhereUniqueInput, DocumentPromise, DocumentWhereInput, DocumentOrderByInput, Document, DocumentConnectionPromise, ExchangeTierWhereUniqueInput, ExchangeTierPromise, ExchangeTierWhereInput, ExchangeTierOrderByInput, ExchangeTier, ExchangeTierConnectionPromise, ExchangeTransactionWhereUniqueInput, ExchangeTransactionPromise, ExchangeTransactionWhereInput, ExchangeTransactionOrderByInput, ExchangeTransaction, ExchangeTransactionConnectionPromise, ExchangeTransactionStatusHistoryWhereUniqueInput, ExchangeTransactionStatusHistoryPromise, ExchangeTransactionStatusHistoryWhereInput, ExchangeTransactionStatusHistoryOrderByInput, ExchangeTransactionStatusHistory, ExchangeTransactionStatusHistoryConnectionPromise, FileWhereUniqueInput, FilePromise, FileWhereInput, FileOrderByInput, File, FileConnectionPromise, HistoryWhereUniqueInput, HistoryPromise, HistoryWhereInput, HistoryOrderByInput, History, HistoryConnectionPromise, ImageWhereUniqueInput, ImagePromise, ImageWhereInput, ImageOrderByInput, Image, ImageConnectionPromise, ItemWhereUniqueInput, ItemPromise, ItemWhereInput, ItemOrderByInput, Item, ItemConnectionPromise, ItemAssetWhereUniqueInput, ItemAssetPromise, ItemAssetWhereInput, ItemAssetOrderByInput, ItemAsset, ItemAssetConnectionPromise, MigrationWhereUniqueInput, MigrationPromise, MigrationWhereInput, MigrationOrderByInput, Migration, MigrationConnectionPromise, PageViewWhereUniqueInput, PageViewPromise, PageViewWhereInput, PageViewOrderByInput, PageView, PageViewConnectionPromise, PostWhereUniqueInput, PostPromise, PostWhereInput, PostOrderByInput, Post, PostConnectionPromise, PriceWhereUniqueInput, PricePromise, PriceWhereInput, PriceOrderByInput, Price, PriceConnectionPromise, PromotionWhereUniqueInput, PromotionPromise, PromotionWhereInput, PromotionOrderByInput, Promotion, PromotionConnectionPromise, PublishTimelineWhereInput, PublishTimelineOrderByInput, PublishTimeline, PublishTimelineConnectionPromise, RemoteConfigWhereUniqueInput, RemoteConfigPromise, RemoteConfigWhereInput, RemoteConfigOrderByInput, RemoteConfig, RemoteConfigConnectionPromise, RevenueSharingWhereUniqueInput, RevenueSharingPromise, RevenueSharingWhereInput, RevenueSharingOrderByInput, RevenueSharing, RevenueSharingConnectionPromise, ShelfWhereUniqueInput, ShelfPromise, ShelfWhereInput, ShelfOrderByInput, Shelf, ShelfConnectionPromise, SystemConfigWhereUniqueInput, SystemConfigPromise, SystemConfigWhereInput, SystemConfigOrderByInput, SystemConfig, SystemConfigConnectionPromise, TransactionWhereUniqueInput, TransactionPromise, TransactionWhereInput, TransactionOrderByInput, Transaction, TransactionConnectionPromise, TranslatorWhereUniqueInput, TranslatorPromise, TranslatorWhereInput, TranslatorOrderByInput, Translator, TranslatorConnectionPromise, UserWhereUniqueInput, UserPromise, UserWhereInput, UserOrderByInput, User, UserConnectionPromise, UserAdminWhereUniqueInput, UserAdminPromise, UserAdminWhereInput, UserAdminOrderByInput, UserAdmin, UserAdminConnectionPromise, UserAdminPermissionWhereUniqueInput, UserAdminPermissionPromise, UserAdminPermissionWhereInput, UserAdminPermissionOrderByInput, UserAdminPermission, UserAdminPermissionConnectionPromise, UserAdminRoleWhereUniqueInput, UserAdminRolePromise, UserAdminRoleWhereInput, UserAdminRoleOrderByInput, UserAdminRole, UserAdminRoleConnectionPromise, VendorWhereUniqueInput, VendorPromise, VendorWhereInput, VendorOrderByInput, Vendor, VendorConnectionPromise, VendorBillingInformationWhereUniqueInput, VendorBillingInformationPromise, VendorBillingInformationWhereInput, VendorBillingInformationOrderByInput, VendorBillingInformation, VendorBillingInformationConnectionPromise, VendorRevenueWhereUniqueInput, VendorRevenuePromise, VendorRevenueWhereInput, VendorRevenueOrderByInput, VendorRevenue, VendorRevenueConnectionPromise, ID_Output, Node, AdsBannerCreateInput, AdsBannerUpdateInput, AdsBannerUpdateManyMutationInput, BatchPayloadPromise, AuthorCreateInput, AuthorUpdateInput, AuthorUpdateManyMutationInput, BehaviorCreateInput, BehaviorUpdateInput, BehaviorUpdateManyMutationInput, BookCreateInput, BookUpdateInput, BookUpdateManyMutationInput, BookEpisodeCreateInput, BookEpisodeUpdateInput, BookEpisodeUpdateManyMutationInput, BookEpisodeContentCreateInput, BookEpisodeContentUpdateInput, BookEpisodeContentUpdateManyMutationInput, BookEpisodeRecentReadCreateInput, BookEpisodeRecentReadUpdateInput, BookEpisodeRecentReadUpdateManyMutationInput, BookEpisodeReviewPostCreateInput, BookEpisodeReviewPostUpdateInput, BookEpisodeReviewPostUpdateManyMutationInput, BookRecommendedCreateInput, BookRecommendedUpdateInput, BookRecommendedUpdateManyMutationInput, BookVolumeCreateInput, BookVolumeUpdateInput, BookVolumeUpdateManyMutationInput, CategoryCreateInput, CategoryUpdateInput, CategoryUpdateManyMutationInput, CopyrightHolderCreateInput, CopyrightHolderUpdateInput, CopyrightHolderUpdateManyMutationInput, DashbardDataCacheCreateInput, DashbardDataCachePromise, DashbardDataCacheUpdateManyMutationInput, DocumentCreateInput, DocumentUpdateInput, DocumentUpdateManyMutationInput, ExchangeTierCreateInput, ExchangeTierUpdateInput, ExchangeTierUpdateManyMutationInput, ExchangeTransactionCreateInput, ExchangeTransactionUpdateInput, ExchangeTransactionUpdateManyMutationInput, ExchangeTransactionStatusHistoryCreateInput, ExchangeTransactionStatusHistoryUpdateInput, ExchangeTransactionStatusHistoryUpdateManyMutationInput, FileCreateInput, FileUpdateInput, FileUpdateManyMutationInput, HistoryCreateInput, HistoryUpdateInput, HistoryUpdateManyMutationInput, ImageCreateInput, ImageUpdateInput, ImageUpdateManyMutationInput, ItemCreateInput, ItemUpdateInput, ItemUpdateManyMutationInput, ItemAssetCreateInput, ItemAssetUpdateInput, ItemAssetUpdateManyMutationInput, MigrationCreateInput, MigrationUpdateInput, MigrationUpdateManyMutationInput, PageViewCreateInput, PageViewUpdateInput, PageViewUpdateManyMutationInput, PostCreateInput, PostUpdateInput, PostUpdateManyMutationInput, PriceCreateInput, PriceUpdateInput, PriceUpdateManyMutationInput, PromotionCreateInput, PromotionUpdateInput, PromotionUpdateManyMutationInput, PublishTimelineCreateInput, PublishTimelinePromise, PublishTimelineUpdateManyMutationInput, RemoteConfigCreateInput, RemoteConfigUpdateInput, RemoteConfigUpdateManyMutationInput, RevenueSharingCreateInput, RevenueSharingUpdateInput, RevenueSharingUpdateManyMutationInput, ShelfCreateInput, ShelfUpdateInput, ShelfUpdateManyMutationInput, SystemConfigCreateInput, SystemConfigUpdateInput, SystemConfigUpdateManyMutationInput, TransactionCreateInput, TransactionUpdateInput, TransactionUpdateManyMutationInput, TranslatorCreateInput, TranslatorUpdateInput, TranslatorUpdateManyMutationInput, UserCreateInput, UserUpdateInput, UserUpdateManyMutationInput, UserAdminCreateInput, UserAdminUpdateInput, UserAdminUpdateManyMutationInput, UserAdminPermissionCreateInput, UserAdminPermissionUpdateInput, UserAdminPermissionUpdateManyMutationInput, UserAdminRoleCreateInput, UserAdminRoleUpdateInput, UserAdminRoleUpdateManyMutationInput, VendorCreateInput, VendorUpdateInput, VendorUpdateManyMutationInput, VendorBillingInformationCreateInput, VendorBillingInformationUpdateInput, VendorBillingInformationUpdateManyMutationInput, VendorRevenueCreateInput, VendorRevenueUpdateInput, VendorRevenueUpdateManyMutationInput, Subscription } from "../fixtures/prisma";

export class __mock__Prisma {
    called: any[] = [];

    on(name: string, ...args: any) {
        const result = this.called.find(c => {
            const calls = [name, ...args]
            return isEqual(c[0], calls)
        })
        if (!result) {
            throw new Error(`call ${name} with ${JSON.stringify(args)} does not exists`)
        }
        return result[1]
    }

    mocks = {
        $graphql: <T>(query: string, variables?: { [key: string]: any }) => {
            return {
                toReturn: <T>(returnArg: Promise<T>) => { this.called.push([["$graphql", query, variables], returnArg]) }
            }
        },
        adsBanner: (where: AdsBannerWhereUniqueInput) => {
            return {
                toReturn: (returnArg: AdsBannerPromise) => { this.called.push([["adsBanner", where], returnArg]) }
            }
        },
        adsBanners: (args?: {
            where?: AdsBannerWhereInput;
            orderBy?: AdsBannerOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<AdsBanner>) => { this.called.push([["adsBanners", args], returnArg]) }
            }
        },
        adsBannersConnection: (args?: {
            where?: AdsBannerWhereInput;
            orderBy?: AdsBannerOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: AdsBannerConnectionPromise) => { this.called.push([["adsBannersConnection", args], returnArg]) }
            }
        },
        author: (where: AuthorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: AuthorPromise) => { this.called.push([["author", where], returnArg]) }
            }
        },
        authors: (args?: {
            where?: AuthorWhereInput;
            orderBy?: AuthorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Author>) => { this.called.push([["authors", args], returnArg]) }
            }
        },
        authorsConnection: (args?: {
            where?: AuthorWhereInput;
            orderBy?: AuthorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: AuthorConnectionPromise) => { this.called.push([["authorsConnection", args], returnArg]) }
            }
        },
        behavior: (where: BehaviorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BehaviorPromise) => { this.called.push([["behavior", where], returnArg]) }
            }
        },
        behaviors: (args?: {
            where?: BehaviorWhereInput;
            orderBy?: BehaviorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Behavior>) => { this.called.push([["behaviors", args], returnArg]) }
            }
        },
        behaviorsConnection: (args?: {
            where?: BehaviorWhereInput;
            orderBy?: BehaviorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BehaviorConnectionPromise) => { this.called.push([["behaviorsConnection", args], returnArg]) }
            }
        },
        book: (where: BookWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookPromise) => { this.called.push([["book", where], returnArg]) }
            }
        },
        books: (args?: {
            where?: BookWhereInput;
            orderBy?: BookOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Book>) => { this.called.push([["books", args], returnArg]) }
            }
        },
        booksConnection: (args?: {
            where?: BookWhereInput;
            orderBy?: BookOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookConnectionPromise) => { this.called.push([["booksConnection", args], returnArg]) }
            }
        },
        bookEpisode: (where: BookEpisodeWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodePromise) => { this.called.push([["bookEpisode", where], returnArg]) }
            }
        },
        bookEpisodes: (args?: {
            where?: BookEpisodeWhereInput;
            orderBy?: BookEpisodeOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<BookEpisode>) => { this.called.push([["bookEpisodes", args], returnArg]) }
            }
        },
        bookEpisodesConnection: (args?: {
            where?: BookEpisodeWhereInput;
            orderBy?: BookEpisodeOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeConnectionPromise) => { this.called.push([["bookEpisodesConnection", args], returnArg]) }
            }
        },
        bookEpisodeContent: (where: BookEpisodeContentWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodeContentPromise) => { this.called.push([["bookEpisodeContent", where], returnArg]) }
            }
        },
        bookEpisodeContents: (args?: {
            where?: BookEpisodeContentWhereInput;
            orderBy?: BookEpisodeContentOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<BookEpisodeContent>) => { this.called.push([["bookEpisodeContents", args], returnArg]) }
            }
        },
        bookEpisodeContentsConnection: (args?: {
            where?: BookEpisodeContentWhereInput;
            orderBy?: BookEpisodeContentOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeContentConnectionPromise) => { this.called.push([["bookEpisodeContentsConnection", args], returnArg]) }
            }
        },
        bookEpisodeRecentRead: (where: BookEpisodeRecentReadWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodeRecentReadPromise) => { this.called.push([["bookEpisodeRecentRead", where], returnArg]) }
            }
        },
        bookEpisodeRecentReads: (args?: {
            where?: BookEpisodeRecentReadWhereInput;
            orderBy?: BookEpisodeRecentReadOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<BookEpisodeRecentRead>) => { this.called.push([["bookEpisodeRecentReads", args], returnArg]) }
            }
        },
        bookEpisodeRecentReadsConnection: (args?: {
            where?: BookEpisodeRecentReadWhereInput;
            orderBy?: BookEpisodeRecentReadOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeRecentReadConnectionPromise) => { this.called.push([["bookEpisodeRecentReadsConnection", args], returnArg]) }
            }
        },
        bookEpisodeReviewPost: (where: BookEpisodeReviewPostWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodeReviewPostPromise) => { this.called.push([["bookEpisodeReviewPost", where], returnArg]) }
            }
        },
        bookEpisodeReviewPosts: (args?: {
            where?: BookEpisodeReviewPostWhereInput;
            orderBy?: BookEpisodeReviewPostOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<BookEpisodeReviewPost>) => { this.called.push([["bookEpisodeReviewPosts", args], returnArg]) }
            }
        },
        bookEpisodeReviewPostsConnection: (args?: {
            where?: BookEpisodeReviewPostWhereInput;
            orderBy?: BookEpisodeReviewPostOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeReviewPostConnectionPromise) => { this.called.push([["bookEpisodeReviewPostsConnection", args], returnArg]) }
            }
        },
        bookRecommended: (where: BookRecommendedWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookRecommendedPromise) => { this.called.push([["bookRecommended", where], returnArg]) }
            }
        },
        bookRecommendeds: (args?: {
            where?: BookRecommendedWhereInput;
            orderBy?: BookRecommendedOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<BookRecommended>) => { this.called.push([["bookRecommendeds", args], returnArg]) }
            }
        },
        bookRecommendedsConnection: (args?: {
            where?: BookRecommendedWhereInput;
            orderBy?: BookRecommendedOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookRecommendedConnectionPromise) => { this.called.push([["bookRecommendedsConnection", args], returnArg]) }
            }
        },
        bookVolume: (where: BookVolumeWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookVolumePromise) => { this.called.push([["bookVolume", where], returnArg]) }
            }
        },
        bookVolumes: (args?: {
            where?: BookVolumeWhereInput;
            orderBy?: BookVolumeOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<BookVolume>) => { this.called.push([["bookVolumes", args], returnArg]) }
            }
        },
        bookVolumesConnection: (args?: {
            where?: BookVolumeWhereInput;
            orderBy?: BookVolumeOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: BookVolumeConnectionPromise) => { this.called.push([["bookVolumesConnection", args], returnArg]) }
            }
        },
        category: (where: CategoryWhereUniqueInput) => {
            return {
                toReturn: (returnArg: CategoryPromise) => { this.called.push([["category", where], returnArg]) }
            }
        },
        categories: (args?: {
            where?: CategoryWhereInput;
            orderBy?: CategoryOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Category>) => { this.called.push([["categories", args], returnArg]) }
            }
        },
        categoriesConnection: (args?: {
            where?: CategoryWhereInput;
            orderBy?: CategoryOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: CategoryConnectionPromise) => { this.called.push([["categoriesConnection", args], returnArg]) }
            }
        },
        copyrightHolder: (where: CopyrightHolderWhereUniqueInput) => {
            return {
                toReturn: (returnArg: CopyrightHolderPromise) => { this.called.push([["copyrightHolder", where], returnArg]) }
            }
        },
        copyrightHolders: (args?: {
            where?: CopyrightHolderWhereInput;
            orderBy?: CopyrightHolderOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<CopyrightHolder>) => { this.called.push([["copyrightHolders", args], returnArg]) }
            }
        },
        copyrightHoldersConnection: (args?: {
            where?: CopyrightHolderWhereInput;
            orderBy?: CopyrightHolderOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: CopyrightHolderConnectionPromise) => { this.called.push([["copyrightHoldersConnection", args], returnArg]) }
            }
        },
        dashbardDataCaches: (args?: {
            where?: DashbardDataCacheWhereInput;
            orderBy?: DashbardDataCacheOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<DashbardDataCache>) => { this.called.push([["dashbardDataCaches", args], returnArg]) }
            }
        },
        dashbardDataCachesConnection: (args?: {
            where?: DashbardDataCacheWhereInput;
            orderBy?: DashbardDataCacheOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: DashbardDataCacheConnectionPromise) => { this.called.push([["dashbardDataCachesConnection", args], returnArg]) }
            }
        },
        document: (where: DocumentWhereUniqueInput) => {
            return {
                toReturn: (returnArg: DocumentPromise) => { this.called.push([["document", where], returnArg]) }
            }
        },
        documents: (args?: {
            where?: DocumentWhereInput;
            orderBy?: DocumentOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Document>) => { this.called.push([["documents", args], returnArg]) }
            }
        },
        documentsConnection: (args?: {
            where?: DocumentWhereInput;
            orderBy?: DocumentOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: DocumentConnectionPromise) => { this.called.push([["documentsConnection", args], returnArg]) }
            }
        },
        exchangeTier: (where: ExchangeTierWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ExchangeTierPromise) => { this.called.push([["exchangeTier", where], returnArg]) }
            }
        },
        exchangeTiers: (args?: {
            where?: ExchangeTierWhereInput;
            orderBy?: ExchangeTierOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<ExchangeTier>) => { this.called.push([["exchangeTiers", args], returnArg]) }
            }
        },
        exchangeTiersConnection: (args?: {
            where?: ExchangeTierWhereInput;
            orderBy?: ExchangeTierOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTierConnectionPromise) => { this.called.push([["exchangeTiersConnection", args], returnArg]) }
            }
        },
        exchangeTransaction: (where: ExchangeTransactionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ExchangeTransactionPromise) => { this.called.push([["exchangeTransaction", where], returnArg]) }
            }
        },
        exchangeTransactions: (args?: {
            where?: ExchangeTransactionWhereInput;
            orderBy?: ExchangeTransactionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<ExchangeTransaction>) => { this.called.push([["exchangeTransactions", args], returnArg]) }
            }
        },
        exchangeTransactionsConnection: (args?: {
            where?: ExchangeTransactionWhereInput;
            orderBy?: ExchangeTransactionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTransactionConnectionPromise) => { this.called.push([["exchangeTransactionsConnection", args], returnArg]) }
            }
        },
        exchangeTransactionStatusHistory: (where: ExchangeTransactionStatusHistoryWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ExchangeTransactionStatusHistoryPromise) => { this.called.push([["exchangeTransactionStatusHistory", where], returnArg]) }
            }
        },
        exchangeTransactionStatusHistories: (args?: {
            where?: ExchangeTransactionStatusHistoryWhereInput;
            orderBy?: ExchangeTransactionStatusHistoryOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<ExchangeTransactionStatusHistory>) => { this.called.push([["exchangeTransactionStatusHistories", args], returnArg]) }
            }
        },
        exchangeTransactionStatusHistoriesConnection: (args?: {
            where?: ExchangeTransactionStatusHistoryWhereInput;
            orderBy?: ExchangeTransactionStatusHistoryOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTransactionStatusHistoryConnectionPromise) => { this.called.push([["exchangeTransactionStatusHistoriesConnection", args], returnArg]) }
            }
        },
        file: (where: FileWhereUniqueInput) => {
            return {
                toReturn: (returnArg: FilePromise) => { this.called.push([["file", where], returnArg]) }
            }
        },
        files: (args?: {
            where?: FileWhereInput;
            orderBy?: FileOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<File>) => { this.called.push([["files", args], returnArg]) }
            }
        },
        filesConnection: (args?: {
            where?: FileWhereInput;
            orderBy?: FileOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FileConnectionPromise) => { this.called.push([["filesConnection", args], returnArg]) }
            }
        },
        history: (where: HistoryWhereUniqueInput) => {
            return {
                toReturn: (returnArg: HistoryPromise) => { this.called.push([["history", where], returnArg]) }
            }
        },
        histories: (args?: {
            where?: HistoryWhereInput;
            orderBy?: HistoryOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<History>) => { this.called.push([["histories", args], returnArg]) }
            }
        },
        historiesConnection: (args?: {
            where?: HistoryWhereInput;
            orderBy?: HistoryOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: HistoryConnectionPromise) => { this.called.push([["historiesConnection", args], returnArg]) }
            }
        },
        image: (where: ImageWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ImagePromise) => { this.called.push([["image", where], returnArg]) }
            }
        },
        images: (args?: {
            where?: ImageWhereInput;
            orderBy?: ImageOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Image>) => { this.called.push([["images", args], returnArg]) }
            }
        },
        imagesConnection: (args?: {
            where?: ImageWhereInput;
            orderBy?: ImageOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ImageConnectionPromise) => { this.called.push([["imagesConnection", args], returnArg]) }
            }
        },
        item: (where: ItemWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ItemPromise) => { this.called.push([["item", where], returnArg]) }
            }
        },
        items: (args?: {
            where?: ItemWhereInput;
            orderBy?: ItemOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Item>) => { this.called.push([["items", args], returnArg]) }
            }
        },
        itemsConnection: (args?: {
            where?: ItemWhereInput;
            orderBy?: ItemOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ItemConnectionPromise) => { this.called.push([["itemsConnection", args], returnArg]) }
            }
        },
        itemAsset: (where: ItemAssetWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ItemAssetPromise) => { this.called.push([["itemAsset", where], returnArg]) }
            }
        },
        itemAssets: (args?: {
            where?: ItemAssetWhereInput;
            orderBy?: ItemAssetOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<ItemAsset>) => { this.called.push([["itemAssets", args], returnArg]) }
            }
        },
        itemAssetsConnection: (args?: {
            where?: ItemAssetWhereInput;
            orderBy?: ItemAssetOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ItemAssetConnectionPromise) => { this.called.push([["itemAssetsConnection", args], returnArg]) }
            }
        },
        migration: (where: MigrationWhereUniqueInput) => {
            return {
                toReturn: (returnArg: MigrationPromise) => { this.called.push([["migration", where], returnArg]) }
            }
        },
        migrations: (args?: {
            where?: MigrationWhereInput;
            orderBy?: MigrationOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Migration>) => { this.called.push([["migrations", args], returnArg]) }
            }
        },
        migrationsConnection: (args?: {
            where?: MigrationWhereInput;
            orderBy?: MigrationOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: MigrationConnectionPromise) => { this.called.push([["migrationsConnection", args], returnArg]) }
            }
        },
        pageView: (where: PageViewWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PageViewPromise) => { this.called.push([["pageView", where], returnArg]) }
            }
        },
        pageViews: (args?: {
            where?: PageViewWhereInput;
            orderBy?: PageViewOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<PageView>) => { this.called.push([["pageViews", args], returnArg]) }
            }
        },
        pageViewsConnection: (args?: {
            where?: PageViewWhereInput;
            orderBy?: PageViewOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: PageViewConnectionPromise) => { this.called.push([["pageViewsConnection", args], returnArg]) }
            }
        },
        post: (where: PostWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PostPromise) => { this.called.push([["post", where], returnArg]) }
            }
        },
        posts: (args?: {
            where?: PostWhereInput;
            orderBy?: PostOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Post>) => { this.called.push([["posts", args], returnArg]) }
            }
        },
        postsConnection: (args?: {
            where?: PostWhereInput;
            orderBy?: PostOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: PostConnectionPromise) => { this.called.push([["postsConnection", args], returnArg]) }
            }
        },
        price: (where: PriceWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PricePromise) => { this.called.push([["price", where], returnArg]) }
            }
        },
        prices: (args?: {
            where?: PriceWhereInput;
            orderBy?: PriceOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Price>) => { this.called.push([["prices", args], returnArg]) }
            }
        },
        pricesConnection: (args?: {
            where?: PriceWhereInput;
            orderBy?: PriceOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: PriceConnectionPromise) => { this.called.push([["pricesConnection", args], returnArg]) }
            }
        },
        promotion: (where: PromotionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PromotionPromise) => { this.called.push([["promotion", where], returnArg]) }
            }
        },
        promotions: (args?: {
            where?: PromotionWhereInput;
            orderBy?: PromotionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Promotion>) => { this.called.push([["promotions", args], returnArg]) }
            }
        },
        promotionsConnection: (args?: {
            where?: PromotionWhereInput;
            orderBy?: PromotionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: PromotionConnectionPromise) => { this.called.push([["promotionsConnection", args], returnArg]) }
            }
        },
        publishTimelines: (args?: {
            where?: PublishTimelineWhereInput;
            orderBy?: PublishTimelineOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<PublishTimeline>) => { this.called.push([["publishTimelines", args], returnArg]) }
            }
        },
        publishTimelinesConnection: (args?: {
            where?: PublishTimelineWhereInput;
            orderBy?: PublishTimelineOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: PublishTimelineConnectionPromise) => { this.called.push([["publishTimelinesConnection", args], returnArg]) }
            }
        },
        remoteConfig: (where: RemoteConfigWhereUniqueInput) => {
            return {
                toReturn: (returnArg: RemoteConfigPromise) => { this.called.push([["remoteConfig", where], returnArg]) }
            }
        },
        remoteConfigs: (args?: {
            where?: RemoteConfigWhereInput;
            orderBy?: RemoteConfigOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<RemoteConfig>) => { this.called.push([["remoteConfigs", args], returnArg]) }
            }
        },
        remoteConfigsConnection: (args?: {
            where?: RemoteConfigWhereInput;
            orderBy?: RemoteConfigOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: RemoteConfigConnectionPromise) => { this.called.push([["remoteConfigsConnection", args], returnArg]) }
            }
        },
        revenueSharing: (where: RevenueSharingWhereUniqueInput) => {
            return {
                toReturn: (returnArg: RevenueSharingPromise) => { this.called.push([["revenueSharing", where], returnArg]) }
            }
        },
        revenueSharings: (args?: {
            where?: RevenueSharingWhereInput;
            orderBy?: RevenueSharingOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<RevenueSharing>) => { this.called.push([["revenueSharings", args], returnArg]) }
            }
        },
        revenueSharingsConnection: (args?: {
            where?: RevenueSharingWhereInput;
            orderBy?: RevenueSharingOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: RevenueSharingConnectionPromise) => { this.called.push([["revenueSharingsConnection", args], returnArg]) }
            }
        },
        shelf: (where: ShelfWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ShelfPromise) => { this.called.push([["shelf", where], returnArg]) }
            }
        },
        shelves: (args?: {
            where?: ShelfWhereInput;
            orderBy?: ShelfOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Shelf>) => { this.called.push([["shelves", args], returnArg]) }
            }
        },
        shelvesConnection: (args?: {
            where?: ShelfWhereInput;
            orderBy?: ShelfOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: ShelfConnectionPromise) => { this.called.push([["shelvesConnection", args], returnArg]) }
            }
        },
        systemConfig: (where: SystemConfigWhereUniqueInput) => {
            return {
                toReturn: (returnArg: SystemConfigPromise) => { this.called.push([["systemConfig", where], returnArg]) }
            }
        },
        systemConfigs: (args?: {
            where?: SystemConfigWhereInput;
            orderBy?: SystemConfigOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<SystemConfig>) => { this.called.push([["systemConfigs", args], returnArg]) }
            }
        },
        systemConfigsConnection: (args?: {
            where?: SystemConfigWhereInput;
            orderBy?: SystemConfigOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: SystemConfigConnectionPromise) => { this.called.push([["systemConfigsConnection", args], returnArg]) }
            }
        },
        transaction: (where: TransactionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: TransactionPromise) => { this.called.push([["transaction", where], returnArg]) }
            }
        },
        transactions: (args?: {
            where?: TransactionWhereInput;
            orderBy?: TransactionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Transaction>) => { this.called.push([["transactions", args], returnArg]) }
            }
        },
        transactionsConnection: (args?: {
            where?: TransactionWhereInput;
            orderBy?: TransactionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: TransactionConnectionPromise) => { this.called.push([["transactionsConnection", args], returnArg]) }
            }
        },
        translator: (where: TranslatorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: TranslatorPromise) => { this.called.push([["translator", where], returnArg]) }
            }
        },
        translators: (args?: {
            where?: TranslatorWhereInput;
            orderBy?: TranslatorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Translator>) => { this.called.push([["translators", args], returnArg]) }
            }
        },
        translatorsConnection: (args?: {
            where?: TranslatorWhereInput;
            orderBy?: TranslatorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: TranslatorConnectionPromise) => { this.called.push([["translatorsConnection", args], returnArg]) }
            }
        },
        user: (where: UserWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserPromise) => { this.called.push([["user", where], returnArg]) }
            }
        },
        users: (args?: {
            where?: UserWhereInput;
            orderBy?: UserOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<User>) => { this.called.push([["users", args], returnArg]) }
            }
        },
        usersConnection: (args?: {
            where?: UserWhereInput;
            orderBy?: UserOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: UserConnectionPromise) => { this.called.push([["usersConnection", args], returnArg]) }
            }
        },
        userAdmin: (where: UserAdminWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserAdminPromise) => { this.called.push([["userAdmin", where], returnArg]) }
            }
        },
        userAdmins: (args?: {
            where?: UserAdminWhereInput;
            orderBy?: UserAdminOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<UserAdmin>) => { this.called.push([["userAdmins", args], returnArg]) }
            }
        },
        userAdminsConnection: (args?: {
            where?: UserAdminWhereInput;
            orderBy?: UserAdminOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: UserAdminConnectionPromise) => { this.called.push([["userAdminsConnection", args], returnArg]) }
            }
        },
        userAdminPermission: (where: UserAdminPermissionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserAdminPermissionPromise) => { this.called.push([["userAdminPermission", where], returnArg]) }
            }
        },
        userAdminPermissions: (args?: {
            where?: UserAdminPermissionWhereInput;
            orderBy?: UserAdminPermissionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<UserAdminPermission>) => { this.called.push([["userAdminPermissions", args], returnArg]) }
            }
        },
        userAdminPermissionsConnection: (args?: {
            where?: UserAdminPermissionWhereInput;
            orderBy?: UserAdminPermissionOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: UserAdminPermissionConnectionPromise) => { this.called.push([["userAdminPermissionsConnection", args], returnArg]) }
            }
        },
        userAdminRole: (where: UserAdminRoleWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserAdminRolePromise) => { this.called.push([["userAdminRole", where], returnArg]) }
            }
        },
        userAdminRoles: (args?: {
            where?: UserAdminRoleWhereInput;
            orderBy?: UserAdminRoleOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<UserAdminRole>) => { this.called.push([["userAdminRoles", args], returnArg]) }
            }
        },
        userAdminRolesConnection: (args?: {
            where?: UserAdminRoleWhereInput;
            orderBy?: UserAdminRoleOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: UserAdminRoleConnectionPromise) => { this.called.push([["userAdminRolesConnection", args], returnArg]) }
            }
        },
        vendor: (where: VendorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: VendorPromise) => { this.called.push([["vendor", where], returnArg]) }
            }
        },
        vendors: (args?: {
            where?: VendorWhereInput;
            orderBy?: VendorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<Vendor>) => { this.called.push([["vendors", args], returnArg]) }
            }
        },
        vendorsConnection: (args?: {
            where?: VendorWhereInput;
            orderBy?: VendorOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: VendorConnectionPromise) => { this.called.push([["vendorsConnection", args], returnArg]) }
            }
        },
        vendorBillingInformation: (where: VendorBillingInformationWhereUniqueInput) => {
            return {
                toReturn: (returnArg: VendorBillingInformationPromise) => { this.called.push([["vendorBillingInformation", where], returnArg]) }
            }
        },
        vendorBillingInformations: (args?: {
            where?: VendorBillingInformationWhereInput;
            orderBy?: VendorBillingInformationOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<VendorBillingInformation>) => { this.called.push([["vendorBillingInformations", args], returnArg]) }
            }
        },
        vendorBillingInformationsConnection: (args?: {
            where?: VendorBillingInformationWhereInput;
            orderBy?: VendorBillingInformationOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: VendorBillingInformationConnectionPromise) => { this.called.push([["vendorBillingInformationsConnection", args], returnArg]) }
            }
        },
        vendorRevenue: (where: VendorRevenueWhereUniqueInput) => {
            return {
                toReturn: (returnArg: VendorRevenuePromise) => { this.called.push([["vendorRevenue", where], returnArg]) }
            }
        },
        vendorRevenues: (args?: {
            where?: VendorRevenueWhereInput;
            orderBy?: VendorRevenueOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: FragmentableArray<VendorRevenue>) => { this.called.push([["vendorRevenues", args], returnArg]) }
            }
        },
        vendorRevenuesConnection: (args?: {
            where?: VendorRevenueWhereInput;
            orderBy?: VendorRevenueOrderByInput;
            skip?: Int;
            after?: String;
            before?: String;
            first?: Int;
            last?: Int;
        }) => {
            return {
                toReturn: (returnArg: VendorRevenueConnectionPromise) => { this.called.push([["vendorRevenuesConnection", args], returnArg]) }
            }
        },
        node: (args: { id: ID_Output }) => {
            return {
                toReturn: (returnArg: Node) => { this.called.push([["node", args], returnArg]) }
            }
        },
        createAdsBanner: (data: AdsBannerCreateInput) => {
            return {
                toReturn: (returnArg: AdsBannerPromise) => { this.called.push([["createAdsBanner", data], returnArg]) }
            }
        },
        updateAdsBanner: (args: { data: AdsBannerUpdateInput; where: AdsBannerWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: AdsBannerPromise) => { this.called.push([["updateAdsBanner", args], returnArg]) }
            }
        },
        updateManyAdsBanners: (args: {
            data: AdsBannerUpdateManyMutationInput;
            where?: AdsBannerWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyAdsBanners", args], returnArg]) }
            }
        },
        upsertAdsBanner: (args: {
            where: AdsBannerWhereUniqueInput;
            create: AdsBannerCreateInput;
            update: AdsBannerUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: AdsBannerPromise) => { this.called.push([["upsertAdsBanner", args], returnArg]) }
            }
        },
        deleteAdsBanner: (where: AdsBannerWhereUniqueInput) => {
            return {
                toReturn: (returnArg: AdsBannerPromise) => { this.called.push([["deleteAdsBanner", where], returnArg]) }
            }
        },
        deleteManyAdsBanners: (where?: AdsBannerWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyAdsBanners", where], returnArg]) }
            }
        },
        createAuthor: (data: AuthorCreateInput) => {
            return {
                toReturn: (returnArg: AuthorPromise) => { this.called.push([["createAuthor", data], returnArg]) }
            }
        },
        updateAuthor: (args: { data: AuthorUpdateInput; where: AuthorWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: AuthorPromise) => { this.called.push([["updateAuthor", args], returnArg]) }
            }
        },
        updateManyAuthors: (args: { data: AuthorUpdateManyMutationInput; where?: AuthorWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyAuthors", args], returnArg]) }
            }
        },
        upsertAuthor: (args: {
            where: AuthorWhereUniqueInput;
            create: AuthorCreateInput;
            update: AuthorUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: AuthorPromise) => { this.called.push([["upsertAuthor", args], returnArg]) }
            }
        },
        deleteAuthor: (where: AuthorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: AuthorPromise) => { this.called.push([["deleteAuthor", where], returnArg]) }
            }
        },
        deleteManyAuthors: (where?: AuthorWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyAuthors", where], returnArg]) }
            }
        },
        createBehavior: (data: BehaviorCreateInput) => {
            return {
                toReturn: (returnArg: BehaviorPromise) => { this.called.push([["createBehavior", data], returnArg]) }
            }
        },
        updateBehavior: (args: { data: BehaviorUpdateInput; where: BehaviorWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: BehaviorPromise) => { this.called.push([["updateBehavior", args], returnArg]) }
            }
        },
        updateManyBehaviors: (args: { data: BehaviorUpdateManyMutationInput; where?: BehaviorWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBehaviors", args], returnArg]) }
            }
        },
        upsertBehavior: (args: {
            where: BehaviorWhereUniqueInput;
            create: BehaviorCreateInput;
            update: BehaviorUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BehaviorPromise) => { this.called.push([["upsertBehavior", args], returnArg]) }
            }
        },
        deleteBehavior: (where: BehaviorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BehaviorPromise) => { this.called.push([["deleteBehavior", where], returnArg]) }
            }
        },
        deleteManyBehaviors: (where?: BehaviorWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBehaviors", where], returnArg]) }
            }
        },
        createBook: (data: BookCreateInput) => {
            return {
                toReturn: (returnArg: BookPromise) => { this.called.push([["createBook", data], returnArg]) }
            }
        },
        updateBook: (args: { data: BookUpdateInput; where: BookWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: BookPromise) => { this.called.push([["updateBook", args], returnArg]) }
            }
        },
        updateManyBooks: (args: { data: BookUpdateManyMutationInput; where?: BookWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBooks", args], returnArg]) }
            }
        },
        upsertBook: (args: {
            where: BookWhereUniqueInput;
            create: BookCreateInput;
            update: BookUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookPromise) => { this.called.push([["upsertBook", args], returnArg]) }
            }
        },
        deleteBook: (where: BookWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookPromise) => { this.called.push([["deleteBook", where], returnArg]) }
            }
        },
        deleteManyBooks: (where?: BookWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBooks", where], returnArg]) }
            }
        },
        createBookEpisode: (data: BookEpisodeCreateInput) => {
            return {
                toReturn: (returnArg: BookEpisodePromise) => { this.called.push([["createBookEpisode", data], returnArg]) }
            }
        },
        updateBookEpisode: (args: { data: BookEpisodeUpdateInput; where: BookEpisodeWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: BookEpisodePromise) => { this.called.push([["updateBookEpisode", args], returnArg]) }
            }
        },
        updateManyBookEpisodes: (args: {
            data: BookEpisodeUpdateManyMutationInput;
            where?: BookEpisodeWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBookEpisodes", args], returnArg]) }
            }
        },
        upsertBookEpisode: (args: {
            where: BookEpisodeWhereUniqueInput;
            create: BookEpisodeCreateInput;
            update: BookEpisodeUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodePromise) => { this.called.push([["upsertBookEpisode", args], returnArg]) }
            }
        },
        deleteBookEpisode: (where: BookEpisodeWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodePromise) => { this.called.push([["deleteBookEpisode", where], returnArg]) }
            }
        },
        deleteManyBookEpisodes: (where?: BookEpisodeWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBookEpisodes", where], returnArg]) }
            }
        },
        createBookEpisodeContent: (data: BookEpisodeContentCreateInput) => {
            return {
                toReturn: (returnArg: BookEpisodeContentPromise) => { this.called.push([["createBookEpisodeContent", data], returnArg]) }
            }
        },
        updateBookEpisodeContent: (args: {
            data: BookEpisodeContentUpdateInput;
            where: BookEpisodeContentWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeContentPromise) => { this.called.push([["updateBookEpisodeContent", args], returnArg]) }
            }
        },
        updateManyBookEpisodeContents: (args: {
            data: BookEpisodeContentUpdateManyMutationInput;
            where?: BookEpisodeContentWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBookEpisodeContents", args], returnArg]) }
            }
        },
        upsertBookEpisodeContent: (args: {
            where: BookEpisodeContentWhereUniqueInput;
            create: BookEpisodeContentCreateInput;
            update: BookEpisodeContentUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeContentPromise) => { this.called.push([["upsertBookEpisodeContent", args], returnArg]) }
            }
        },
        deleteBookEpisodeContent: (where: BookEpisodeContentWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodeContentPromise) => { this.called.push([["deleteBookEpisodeContent", where], returnArg]) }
            }
        },
        deleteManyBookEpisodeContents: (where?: BookEpisodeContentWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBookEpisodeContents", where], returnArg]) }
            }
        },
        createBookEpisodeRecentRead: (data: BookEpisodeRecentReadCreateInput) => {
            return {
                toReturn: (returnArg: BookEpisodeRecentReadPromise) => { this.called.push([["createBookEpisodeRecentRead", data], returnArg]) }
            }
        },
        updateBookEpisodeRecentRead: (args: {
            data: BookEpisodeRecentReadUpdateInput;
            where: BookEpisodeRecentReadWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeRecentReadPromise) => { this.called.push([["updateBookEpisodeRecentRead", args], returnArg]) }
            }
        },
        updateManyBookEpisodeRecentReads: (args: {
            data: BookEpisodeRecentReadUpdateManyMutationInput;
            where?: BookEpisodeRecentReadWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBookEpisodeRecentReads", args], returnArg]) }
            }
        },
        upsertBookEpisodeRecentRead: (args: {
            where: BookEpisodeRecentReadWhereUniqueInput;
            create: BookEpisodeRecentReadCreateInput;
            update: BookEpisodeRecentReadUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeRecentReadPromise) => { this.called.push([["upsertBookEpisodeRecentRead", args], returnArg]) }
            }
        },
        deleteBookEpisodeRecentRead: (where: BookEpisodeRecentReadWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodeRecentReadPromise) => { this.called.push([["deleteBookEpisodeRecentRead", where], returnArg]) }
            }
        },
        deleteManyBookEpisodeRecentReads: (where?: BookEpisodeRecentReadWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBookEpisodeRecentReads", where], returnArg]) }
            }
        },
        createBookEpisodeReviewPost: (data: BookEpisodeReviewPostCreateInput) => {
            return {
                toReturn: (returnArg: BookEpisodeReviewPostPromise) => { this.called.push([["createBookEpisodeReviewPost", data], returnArg]) }
            }
        },
        updateBookEpisodeReviewPost: (args: {
            data: BookEpisodeReviewPostUpdateInput;
            where: BookEpisodeReviewPostWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeReviewPostPromise) => { this.called.push([["updateBookEpisodeReviewPost", args], returnArg]) }
            }
        },
        updateManyBookEpisodeReviewPosts: (args: {
            data: BookEpisodeReviewPostUpdateManyMutationInput;
            where?: BookEpisodeReviewPostWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBookEpisodeReviewPosts", args], returnArg]) }
            }
        },
        upsertBookEpisodeReviewPost: (args: {
            where: BookEpisodeReviewPostWhereUniqueInput;
            create: BookEpisodeReviewPostCreateInput;
            update: BookEpisodeReviewPostUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookEpisodeReviewPostPromise) => { this.called.push([["upsertBookEpisodeReviewPost", args], returnArg]) }
            }
        },
        deleteBookEpisodeReviewPost: (where: BookEpisodeReviewPostWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookEpisodeReviewPostPromise) => { this.called.push([["deleteBookEpisodeReviewPost", where], returnArg]) }
            }
        },
        deleteManyBookEpisodeReviewPosts: (where?: BookEpisodeReviewPostWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBookEpisodeReviewPosts", where], returnArg]) }
            }
        },
        createBookRecommended: (data: BookRecommendedCreateInput) => {
            return {
                toReturn: (returnArg: BookRecommendedPromise) => { this.called.push([["createBookRecommended", data], returnArg]) }
            }
        },
        updateBookRecommended: (args: {
            data: BookRecommendedUpdateInput;
            where: BookRecommendedWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: BookRecommendedPromise) => { this.called.push([["updateBookRecommended", args], returnArg]) }
            }
        },
        updateManyBookRecommendeds: (args: {
            data: BookRecommendedUpdateManyMutationInput;
            where?: BookRecommendedWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBookRecommendeds", args], returnArg]) }
            }
        },
        upsertBookRecommended: (args: {
            where: BookRecommendedWhereUniqueInput;
            create: BookRecommendedCreateInput;
            update: BookRecommendedUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookRecommendedPromise) => { this.called.push([["upsertBookRecommended", args], returnArg]) }
            }
        },
        deleteBookRecommended: (where: BookRecommendedWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookRecommendedPromise) => { this.called.push([["deleteBookRecommended", where], returnArg]) }
            }
        },
        deleteManyBookRecommendeds: (where?: BookRecommendedWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBookRecommendeds", where], returnArg]) }
            }
        },
        createBookVolume: (data: BookVolumeCreateInput) => {
            return {
                toReturn: (returnArg: BookVolumePromise) => { this.called.push([["createBookVolume", data], returnArg]) }
            }
        },
        updateBookVolume: (args: { data: BookVolumeUpdateInput; where: BookVolumeWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: BookVolumePromise) => { this.called.push([["updateBookVolume", args], returnArg]) }
            }
        },
        updateManyBookVolumes: (args: {
            data: BookVolumeUpdateManyMutationInput;
            where?: BookVolumeWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyBookVolumes", args], returnArg]) }
            }
        },
        upsertBookVolume: (args: {
            where: BookVolumeWhereUniqueInput;
            create: BookVolumeCreateInput;
            update: BookVolumeUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: BookVolumePromise) => { this.called.push([["upsertBookVolume", args], returnArg]) }
            }
        },
        deleteBookVolume: (where: BookVolumeWhereUniqueInput) => {
            return {
                toReturn: (returnArg: BookVolumePromise) => { this.called.push([["deleteBookVolume", where], returnArg]) }
            }
        },
        deleteManyBookVolumes: (where?: BookVolumeWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyBookVolumes", where], returnArg]) }
            }
        },
        createCategory: (data: CategoryCreateInput) => {
            return {
                toReturn: (returnArg: CategoryPromise) => { this.called.push([["createCategory", data], returnArg]) }
            }
        },
        updateCategory: (args: { data: CategoryUpdateInput; where: CategoryWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: CategoryPromise) => { this.called.push([["updateCategory", args], returnArg]) }
            }
        },
        updateManyCategories: (args: { data: CategoryUpdateManyMutationInput; where?: CategoryWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyCategories", args], returnArg]) }
            }
        },
        upsertCategory: (args: {
            where: CategoryWhereUniqueInput;
            create: CategoryCreateInput;
            update: CategoryUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: CategoryPromise) => { this.called.push([["upsertCategory", args], returnArg]) }
            }
        },
        deleteCategory: (where: CategoryWhereUniqueInput) => {
            return {
                toReturn: (returnArg: CategoryPromise) => { this.called.push([["deleteCategory", where], returnArg]) }
            }
        },
        deleteManyCategories: (where?: CategoryWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyCategories", where], returnArg]) }
            }
        },
        createCopyrightHolder: (data: CopyrightHolderCreateInput) => {
            return {
                toReturn: (returnArg: CopyrightHolderPromise) => { this.called.push([["createCopyrightHolder", data], returnArg]) }
            }
        },
        updateCopyrightHolder: (args: {
            data: CopyrightHolderUpdateInput;
            where: CopyrightHolderWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: CopyrightHolderPromise) => { this.called.push([["updateCopyrightHolder", args], returnArg]) }
            }
        },
        updateManyCopyrightHolders: (args: {
            data: CopyrightHolderUpdateManyMutationInput;
            where?: CopyrightHolderWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyCopyrightHolders", args], returnArg]) }
            }
        },
        upsertCopyrightHolder: (args: {
            where: CopyrightHolderWhereUniqueInput;
            create: CopyrightHolderCreateInput;
            update: CopyrightHolderUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: CopyrightHolderPromise) => { this.called.push([["upsertCopyrightHolder", args], returnArg]) }
            }
        },
        deleteCopyrightHolder: (where: CopyrightHolderWhereUniqueInput) => {
            return {
                toReturn: (returnArg: CopyrightHolderPromise) => { this.called.push([["deleteCopyrightHolder", where], returnArg]) }
            }
        },
        deleteManyCopyrightHolders: (where?: CopyrightHolderWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyCopyrightHolders", where], returnArg]) }
            }
        },
        createDashbardDataCache: (data: DashbardDataCacheCreateInput) => {
            return {
                toReturn: (returnArg: DashbardDataCachePromise) => { this.called.push([["createDashbardDataCache", data], returnArg]) }
            }
        },
        updateManyDashbardDataCaches: (args: {
            data: DashbardDataCacheUpdateManyMutationInput;
            where?: DashbardDataCacheWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyDashbardDataCaches", args], returnArg]) }
            }
        },
        deleteManyDashbardDataCaches: (where?: DashbardDataCacheWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyDashbardDataCaches", where], returnArg]) }
            }
        },
        createDocument: (data: DocumentCreateInput) => {
            return {
                toReturn: (returnArg: DocumentPromise) => { this.called.push([["createDocument", data], returnArg]) }
            }
        },
        updateDocument: (args: { data: DocumentUpdateInput; where: DocumentWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: DocumentPromise) => { this.called.push([["updateDocument", args], returnArg]) }
            }
        },
        updateManyDocuments: (args: { data: DocumentUpdateManyMutationInput; where?: DocumentWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyDocuments", args], returnArg]) }
            }
        },
        upsertDocument: (args: {
            where: DocumentWhereUniqueInput;
            create: DocumentCreateInput;
            update: DocumentUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: DocumentPromise) => { this.called.push([["upsertDocument", args], returnArg]) }
            }
        },
        deleteDocument: (where: DocumentWhereUniqueInput) => {
            return {
                toReturn: (returnArg: DocumentPromise) => { this.called.push([["deleteDocument", where], returnArg]) }
            }
        },
        deleteManyDocuments: (where?: DocumentWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyDocuments", where], returnArg]) }
            }
        },
        createExchangeTier: (data: ExchangeTierCreateInput) => {
            return {
                toReturn: (returnArg: ExchangeTierPromise) => { this.called.push([["createExchangeTier", data], returnArg]) }
            }
        },
        updateExchangeTier: (args: { data: ExchangeTierUpdateInput; where: ExchangeTierWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: ExchangeTierPromise) => { this.called.push([["updateExchangeTier", args], returnArg]) }
            }
        },
        updateManyExchangeTiers: (args: {
            data: ExchangeTierUpdateManyMutationInput;
            where?: ExchangeTierWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyExchangeTiers", args], returnArg]) }
            }
        },
        upsertExchangeTier: (args: {
            where: ExchangeTierWhereUniqueInput;
            create: ExchangeTierCreateInput;
            update: ExchangeTierUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTierPromise) => { this.called.push([["upsertExchangeTier", args], returnArg]) }
            }
        },
        deleteExchangeTier: (where: ExchangeTierWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ExchangeTierPromise) => { this.called.push([["deleteExchangeTier", where], returnArg]) }
            }
        },
        deleteManyExchangeTiers: (where?: ExchangeTierWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyExchangeTiers", where], returnArg]) }
            }
        },
        createExchangeTransaction: (data: ExchangeTransactionCreateInput) => {
            return {
                toReturn: (returnArg: ExchangeTransactionPromise) => { this.called.push([["createExchangeTransaction", data], returnArg]) }
            }
        },
        updateExchangeTransaction: (args: {
            data: ExchangeTransactionUpdateInput;
            where: ExchangeTransactionWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTransactionPromise) => { this.called.push([["updateExchangeTransaction", args], returnArg]) }
            }
        },
        updateManyExchangeTransactions: (args: {
            data: ExchangeTransactionUpdateManyMutationInput;
            where?: ExchangeTransactionWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyExchangeTransactions", args], returnArg]) }
            }
        },
        upsertExchangeTransaction: (args: {
            where: ExchangeTransactionWhereUniqueInput;
            create: ExchangeTransactionCreateInput;
            update: ExchangeTransactionUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTransactionPromise) => { this.called.push([["upsertExchangeTransaction", args], returnArg]) }
            }
        },
        deleteExchangeTransaction: (where: ExchangeTransactionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ExchangeTransactionPromise) => { this.called.push([["deleteExchangeTransaction", where], returnArg]) }
            }
        },
        deleteManyExchangeTransactions: (where?: ExchangeTransactionWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyExchangeTransactions", where], returnArg]) }
            }
        },
        createExchangeTransactionStatusHistory: (data: ExchangeTransactionStatusHistoryCreateInput) => {
            return {
                toReturn: (returnArg: ExchangeTransactionStatusHistoryPromise) => { this.called.push([["createExchangeTransactionStatusHistory", data], returnArg]) }
            }
        },
        updateExchangeTransactionStatusHistory: (args: {
            data: ExchangeTransactionStatusHistoryUpdateInput;
            where: ExchangeTransactionStatusHistoryWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTransactionStatusHistoryPromise) => { this.called.push([["updateExchangeTransactionStatusHistory", args], returnArg]) }
            }
        },
        updateManyExchangeTransactionStatusHistories: (args: {
            data: ExchangeTransactionStatusHistoryUpdateManyMutationInput;
            where?: ExchangeTransactionStatusHistoryWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyExchangeTransactionStatusHistories", args], returnArg]) }
            }
        },
        upsertExchangeTransactionStatusHistory: (args: {
            where: ExchangeTransactionStatusHistoryWhereUniqueInput;
            create: ExchangeTransactionStatusHistoryCreateInput;
            update: ExchangeTransactionStatusHistoryUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ExchangeTransactionStatusHistoryPromise) => { this.called.push([["upsertExchangeTransactionStatusHistory", args], returnArg]) }
            }
        },
        deleteExchangeTransactionStatusHistory: (where: ExchangeTransactionStatusHistoryWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ExchangeTransactionStatusHistoryPromise) => { this.called.push([["deleteExchangeTransactionStatusHistory", where], returnArg]) }
            }
        },
        deleteManyExchangeTransactionStatusHistories: (where?: ExchangeTransactionStatusHistoryWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyExchangeTransactionStatusHistories", where], returnArg]) }
            }
        },
        createFile: (data: FileCreateInput) => {
            return {
                toReturn: (returnArg: FilePromise) => { this.called.push([["createFile", data], returnArg]) }
            }
        },
        updateFile: (args: { data: FileUpdateInput; where: FileWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: FilePromise) => { this.called.push([["updateFile", args], returnArg]) }
            }
        },
        updateManyFiles: (args: { data: FileUpdateManyMutationInput; where?: FileWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyFiles", args], returnArg]) }
            }
        },
        upsertFile: (args: {
            where: FileWhereUniqueInput;
            create: FileCreateInput;
            update: FileUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: FilePromise) => { this.called.push([["upsertFile", args], returnArg]) }
            }
        },
        deleteFile: (where: FileWhereUniqueInput) => {
            return {
                toReturn: (returnArg: FilePromise) => { this.called.push([["deleteFile", where], returnArg]) }
            }
        },
        deleteManyFiles: (where?: FileWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyFiles", where], returnArg]) }
            }
        },
        createHistory: (data: HistoryCreateInput) => {
            return {
                toReturn: (returnArg: HistoryPromise) => { this.called.push([["createHistory", data], returnArg]) }
            }
        },
        updateHistory: (args: { data: HistoryUpdateInput; where: HistoryWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: HistoryPromise) => { this.called.push([["updateHistory", args], returnArg]) }
            }
        },
        updateManyHistories: (args: { data: HistoryUpdateManyMutationInput; where?: HistoryWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyHistories", args], returnArg]) }
            }
        },
        upsertHistory: (args: {
            where: HistoryWhereUniqueInput;
            create: HistoryCreateInput;
            update: HistoryUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: HistoryPromise) => { this.called.push([["upsertHistory", args], returnArg]) }
            }
        },
        deleteHistory: (where: HistoryWhereUniqueInput) => {
            return {
                toReturn: (returnArg: HistoryPromise) => { this.called.push([["deleteHistory", where], returnArg]) }
            }
        },
        deleteManyHistories: (where?: HistoryWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyHistories", where], returnArg]) }
            }
        },
        createImage: (data: ImageCreateInput) => {
            return {
                toReturn: (returnArg: ImagePromise) => { this.called.push([["createImage", data], returnArg]) }
            }
        },
        updateImage: (args: { data: ImageUpdateInput; where: ImageWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: ImagePromise) => { this.called.push([["updateImage", args], returnArg]) }
            }
        },
        updateManyImages: (args: { data: ImageUpdateManyMutationInput; where?: ImageWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyImages", args], returnArg]) }
            }
        },
        upsertImage: (args: {
            where: ImageWhereUniqueInput;
            create: ImageCreateInput;
            update: ImageUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ImagePromise) => { this.called.push([["upsertImage", args], returnArg]) }
            }
        },
        deleteImage: (where: ImageWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ImagePromise) => { this.called.push([["deleteImage", where], returnArg]) }
            }
        },
        deleteManyImages: (where?: ImageWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyImages", where], returnArg]) }
            }
        },
        createItem: (data: ItemCreateInput) => {
            return {
                toReturn: (returnArg: ItemPromise) => { this.called.push([["createItem", data], returnArg]) }
            }
        },
        updateItem: (args: { data: ItemUpdateInput; where: ItemWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: ItemPromise) => { this.called.push([["updateItem", args], returnArg]) }
            }
        },
        updateManyItems: (args: { data: ItemUpdateManyMutationInput; where?: ItemWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyItems", args], returnArg]) }
            }
        },
        upsertItem: (args: {
            where: ItemWhereUniqueInput;
            create: ItemCreateInput;
            update: ItemUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ItemPromise) => { this.called.push([["upsertItem", args], returnArg]) }
            }
        },
        deleteItem: (where: ItemWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ItemPromise) => { this.called.push([["deleteItem", where], returnArg]) }
            }
        },
        deleteManyItems: (where?: ItemWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyItems", where], returnArg]) }
            }
        },
        createItemAsset: (data: ItemAssetCreateInput) => {
            return {
                toReturn: (returnArg: ItemAssetPromise) => { this.called.push([["createItemAsset", data], returnArg]) }
            }
        },
        updateItemAsset: (args: { data: ItemAssetUpdateInput; where: ItemAssetWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: ItemAssetPromise) => { this.called.push([["updateItemAsset", args], returnArg]) }
            }
        },
        updateManyItemAssets: (args: {
            data: ItemAssetUpdateManyMutationInput;
            where?: ItemAssetWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyItemAssets", args], returnArg]) }
            }
        },
        upsertItemAsset: (args: {
            where: ItemAssetWhereUniqueInput;
            create: ItemAssetCreateInput;
            update: ItemAssetUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ItemAssetPromise) => { this.called.push([["upsertItemAsset", args], returnArg]) }
            }
        },
        deleteItemAsset: (where: ItemAssetWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ItemAssetPromise) => { this.called.push([["deleteItemAsset", where], returnArg]) }
            }
        },
        deleteManyItemAssets: (where?: ItemAssetWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyItemAssets", where], returnArg]) }
            }
        },
        createMigration: (data: MigrationCreateInput) => {
            return {
                toReturn: (returnArg: MigrationPromise) => { this.called.push([["createMigration", data], returnArg]) }
            }
        },
        updateMigration: (args: { data: MigrationUpdateInput; where: MigrationWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: MigrationPromise) => { this.called.push([["updateMigration", args], returnArg]) }
            }
        },
        updateManyMigrations: (args: {
            data: MigrationUpdateManyMutationInput;
            where?: MigrationWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyMigrations", args], returnArg]) }
            }
        },
        upsertMigration: (args: {
            where: MigrationWhereUniqueInput;
            create: MigrationCreateInput;
            update: MigrationUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: MigrationPromise) => { this.called.push([["upsertMigration", args], returnArg]) }
            }
        },
        deleteMigration: (where: MigrationWhereUniqueInput) => {
            return {
                toReturn: (returnArg: MigrationPromise) => { this.called.push([["deleteMigration", where], returnArg]) }
            }
        },
        deleteManyMigrations: (where?: MigrationWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyMigrations", where], returnArg]) }
            }
        },
        createPageView: (data: PageViewCreateInput) => {
            return {
                toReturn: (returnArg: PageViewPromise) => { this.called.push([["createPageView", data], returnArg]) }
            }
        },
        updatePageView: (args: { data: PageViewUpdateInput; where: PageViewWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: PageViewPromise) => { this.called.push([["updatePageView", args], returnArg]) }
            }
        },
        updateManyPageViews: (args: { data: PageViewUpdateManyMutationInput; where?: PageViewWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyPageViews", args], returnArg]) }
            }
        },
        upsertPageView: (args: {
            where: PageViewWhereUniqueInput;
            create: PageViewCreateInput;
            update: PageViewUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: PageViewPromise) => { this.called.push([["upsertPageView", args], returnArg]) }
            }
        },
        deletePageView: (where: PageViewWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PageViewPromise) => { this.called.push([["deletePageView", where], returnArg]) }
            }
        },
        deleteManyPageViews: (where?: PageViewWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyPageViews", where], returnArg]) }
            }
        },
        createPost: (data: PostCreateInput) => {
            return {
                toReturn: (returnArg: PostPromise) => { this.called.push([["createPost", data], returnArg]) }
            }
        },
        updatePost: (args: { data: PostUpdateInput; where: PostWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: PostPromise) => { this.called.push([["updatePost", args], returnArg]) }
            }
        },
        updateManyPosts: (args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyPosts", args], returnArg]) }
            }
        },
        upsertPost: (args: {
            where: PostWhereUniqueInput;
            create: PostCreateInput;
            update: PostUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: PostPromise) => { this.called.push([["upsertPost", args], returnArg]) }
            }
        },
        deletePost: (where: PostWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PostPromise) => { this.called.push([["deletePost", where], returnArg]) }
            }
        },
        deleteManyPosts: (where?: PostWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyPosts", where], returnArg]) }
            }
        },
        createPrice: (data: PriceCreateInput) => {
            return {
                toReturn: (returnArg: PricePromise) => { this.called.push([["createPrice", data], returnArg]) }
            }
        },
        updatePrice: (args: { data: PriceUpdateInput; where: PriceWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: PricePromise) => { this.called.push([["updatePrice", args], returnArg]) }
            }
        },
        updateManyPrices: (args: { data: PriceUpdateManyMutationInput; where?: PriceWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyPrices", args], returnArg]) }
            }
        },
        upsertPrice: (args: {
            where: PriceWhereUniqueInput;
            create: PriceCreateInput;
            update: PriceUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: PricePromise) => { this.called.push([["upsertPrice", args], returnArg]) }
            }
        },
        deletePrice: (where: PriceWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PricePromise) => { this.called.push([["deletePrice", where], returnArg]) }
            }
        },
        deleteManyPrices: (where?: PriceWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyPrices", where], returnArg]) }
            }
        },
        createPromotion: (data: PromotionCreateInput) => {
            return {
                toReturn: (returnArg: PromotionPromise) => { this.called.push([["createPromotion", data], returnArg]) }
            }
        },
        updatePromotion: (args: { data: PromotionUpdateInput; where: PromotionWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: PromotionPromise) => { this.called.push([["updatePromotion", args], returnArg]) }
            }
        },
        updateManyPromotions: (args: {
            data: PromotionUpdateManyMutationInput;
            where?: PromotionWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyPromotions", args], returnArg]) }
            }
        },
        upsertPromotion: (args: {
            where: PromotionWhereUniqueInput;
            create: PromotionCreateInput;
            update: PromotionUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: PromotionPromise) => { this.called.push([["upsertPromotion", args], returnArg]) }
            }
        },
        deletePromotion: (where: PromotionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: PromotionPromise) => { this.called.push([["deletePromotion", where], returnArg]) }
            }
        },
        deleteManyPromotions: (where?: PromotionWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyPromotions", where], returnArg]) }
            }
        },
        createPublishTimeline: (data: PublishTimelineCreateInput) => {
            return {
                toReturn: (returnArg: PublishTimelinePromise) => { this.called.push([["createPublishTimeline", data], returnArg]) }
            }
        },
        updateManyPublishTimelines: (args: {
            data: PublishTimelineUpdateManyMutationInput;
            where?: PublishTimelineWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyPublishTimelines", args], returnArg]) }
            }
        },
        deleteManyPublishTimelines: (where?: PublishTimelineWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyPublishTimelines", where], returnArg]) }
            }
        },
        createRemoteConfig: (data: RemoteConfigCreateInput) => {
            return {
                toReturn: (returnArg: RemoteConfigPromise) => { this.called.push([["createRemoteConfig", data], returnArg]) }
            }
        },
        updateRemoteConfig: (args: { data: RemoteConfigUpdateInput; where: RemoteConfigWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: RemoteConfigPromise) => { this.called.push([["updateRemoteConfig", args], returnArg]) }
            }
        },
        updateManyRemoteConfigs: (args: {
            data: RemoteConfigUpdateManyMutationInput;
            where?: RemoteConfigWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyRemoteConfigs", args], returnArg]) }
            }
        },
        upsertRemoteConfig: (args: {
            where: RemoteConfigWhereUniqueInput;
            create: RemoteConfigCreateInput;
            update: RemoteConfigUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: RemoteConfigPromise) => { this.called.push([["upsertRemoteConfig", args], returnArg]) }
            }
        },
        deleteRemoteConfig: (where: RemoteConfigWhereUniqueInput) => {
            return {
                toReturn: (returnArg: RemoteConfigPromise) => { this.called.push([["deleteRemoteConfig", where], returnArg]) }
            }
        },
        deleteManyRemoteConfigs: (where?: RemoteConfigWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyRemoteConfigs", where], returnArg]) }
            }
        },
        createRevenueSharing: (data: RevenueSharingCreateInput) => {
            return {
                toReturn: (returnArg: RevenueSharingPromise) => { this.called.push([["createRevenueSharing", data], returnArg]) }
            }
        },
        updateRevenueSharing: (args: {
            data: RevenueSharingUpdateInput;
            where: RevenueSharingWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: RevenueSharingPromise) => { this.called.push([["updateRevenueSharing", args], returnArg]) }
            }
        },
        updateManyRevenueSharings: (args: {
            data: RevenueSharingUpdateManyMutationInput;
            where?: RevenueSharingWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyRevenueSharings", args], returnArg]) }
            }
        },
        upsertRevenueSharing: (args: {
            where: RevenueSharingWhereUniqueInput;
            create: RevenueSharingCreateInput;
            update: RevenueSharingUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: RevenueSharingPromise) => { this.called.push([["upsertRevenueSharing", args], returnArg]) }
            }
        },
        deleteRevenueSharing: (where: RevenueSharingWhereUniqueInput) => {
            return {
                toReturn: (returnArg: RevenueSharingPromise) => { this.called.push([["deleteRevenueSharing", where], returnArg]) }
            }
        },
        deleteManyRevenueSharings: (where?: RevenueSharingWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyRevenueSharings", where], returnArg]) }
            }
        },
        createShelf: (data: ShelfCreateInput) => {
            return {
                toReturn: (returnArg: ShelfPromise) => { this.called.push([["createShelf", data], returnArg]) }
            }
        },
        updateShelf: (args: { data: ShelfUpdateInput; where: ShelfWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: ShelfPromise) => { this.called.push([["updateShelf", args], returnArg]) }
            }
        },
        updateManyShelves: (args: { data: ShelfUpdateManyMutationInput; where?: ShelfWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyShelves", args], returnArg]) }
            }
        },
        upsertShelf: (args: {
            where: ShelfWhereUniqueInput;
            create: ShelfCreateInput;
            update: ShelfUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: ShelfPromise) => { this.called.push([["upsertShelf", args], returnArg]) }
            }
        },
        deleteShelf: (where: ShelfWhereUniqueInput) => {
            return {
                toReturn: (returnArg: ShelfPromise) => { this.called.push([["deleteShelf", where], returnArg]) }
            }
        },
        deleteManyShelves: (where?: ShelfWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyShelves", where], returnArg]) }
            }
        },
        createSystemConfig: (data: SystemConfigCreateInput) => {
            return {
                toReturn: (returnArg: SystemConfigPromise) => { this.called.push([["createSystemConfig", data], returnArg]) }
            }
        },
        updateSystemConfig: (args: { data: SystemConfigUpdateInput; where: SystemConfigWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: SystemConfigPromise) => { this.called.push([["updateSystemConfig", args], returnArg]) }
            }
        },
        updateManySystemConfigs: (args: {
            data: SystemConfigUpdateManyMutationInput;
            where?: SystemConfigWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManySystemConfigs", args], returnArg]) }
            }
        },
        upsertSystemConfig: (args: {
            where: SystemConfigWhereUniqueInput;
            create: SystemConfigCreateInput;
            update: SystemConfigUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: SystemConfigPromise) => { this.called.push([["upsertSystemConfig", args], returnArg]) }
            }
        },
        deleteSystemConfig: (where: SystemConfigWhereUniqueInput) => {
            return {
                toReturn: (returnArg: SystemConfigPromise) => { this.called.push([["deleteSystemConfig", where], returnArg]) }
            }
        },
        deleteManySystemConfigs: (where?: SystemConfigWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManySystemConfigs", where], returnArg]) }
            }
        },
        createTransaction: (data: TransactionCreateInput) => {
            return {
                toReturn: (returnArg: TransactionPromise) => { this.called.push([["createTransaction", data], returnArg]) }
            }
        },
        updateTransaction: (args: { data: TransactionUpdateInput; where: TransactionWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: TransactionPromise) => { this.called.push([["updateTransaction", args], returnArg]) }
            }
        },
        updateManyTransactions: (args: {
            data: TransactionUpdateManyMutationInput;
            where?: TransactionWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyTransactions", args], returnArg]) }
            }
        },
        upsertTransaction: (args: {
            where: TransactionWhereUniqueInput;
            create: TransactionCreateInput;
            update: TransactionUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: TransactionPromise) => { this.called.push([["upsertTransaction", args], returnArg]) }
            }
        },
        deleteTransaction: (where: TransactionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: TransactionPromise) => { this.called.push([["deleteTransaction", where], returnArg]) }
            }
        },
        deleteManyTransactions: (where?: TransactionWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyTransactions", where], returnArg]) }
            }
        },
        createTranslator: (data: TranslatorCreateInput) => {
            return {
                toReturn: (returnArg: TranslatorPromise) => { this.called.push([["createTranslator", data], returnArg]) }
            }
        },
        updateTranslator: (args: { data: TranslatorUpdateInput; where: TranslatorWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: TranslatorPromise) => { this.called.push([["updateTranslator", args], returnArg]) }
            }
        },
        updateManyTranslators: (args: {
            data: TranslatorUpdateManyMutationInput;
            where?: TranslatorWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyTranslators", args], returnArg]) }
            }
        },
        upsertTranslator: (args: {
            where: TranslatorWhereUniqueInput;
            create: TranslatorCreateInput;
            update: TranslatorUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: TranslatorPromise) => { this.called.push([["upsertTranslator", args], returnArg]) }
            }
        },
        deleteTranslator: (where: TranslatorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: TranslatorPromise) => { this.called.push([["deleteTranslator", where], returnArg]) }
            }
        },
        deleteManyTranslators: (where?: TranslatorWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyTranslators", where], returnArg]) }
            }
        },
        createUser: (data: UserCreateInput) => {
            return {
                toReturn: (returnArg: UserPromise) => { this.called.push([["createUser", data], returnArg]) }
            }
        },
        updateUser: (args: { data: UserUpdateInput; where: UserWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: UserPromise) => { this.called.push([["updateUser", args], returnArg]) }
            }
        },
        updateManyUsers: (args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyUsers", args], returnArg]) }
            }
        },
        upsertUser: (args: {
            where: UserWhereUniqueInput;
            create: UserCreateInput;
            update: UserUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: UserPromise) => { this.called.push([["upsertUser", args], returnArg]) }
            }
        },
        deleteUser: (where: UserWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserPromise) => { this.called.push([["deleteUser", where], returnArg]) }
            }
        },
        deleteManyUsers: (where?: UserWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyUsers", where], returnArg]) }
            }
        },
        createUserAdmin: (data: UserAdminCreateInput) => {
            return {
                toReturn: (returnArg: UserAdminPromise) => { this.called.push([["createUserAdmin", data], returnArg]) }
            }
        },
        updateUserAdmin: (args: { data: UserAdminUpdateInput; where: UserAdminWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: UserAdminPromise) => { this.called.push([["updateUserAdmin", args], returnArg]) }
            }
        },
        updateManyUserAdmins: (args: {
            data: UserAdminUpdateManyMutationInput;
            where?: UserAdminWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyUserAdmins", args], returnArg]) }
            }
        },
        upsertUserAdmin: (args: {
            where: UserAdminWhereUniqueInput;
            create: UserAdminCreateInput;
            update: UserAdminUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: UserAdminPromise) => { this.called.push([["upsertUserAdmin", args], returnArg]) }
            }
        },
        deleteUserAdmin: (where: UserAdminWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserAdminPromise) => { this.called.push([["deleteUserAdmin", where], returnArg]) }
            }
        },
        deleteManyUserAdmins: (where?: UserAdminWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyUserAdmins", where], returnArg]) }
            }
        },
        createUserAdminPermission: (data: UserAdminPermissionCreateInput) => {
            return {
                toReturn: (returnArg: UserAdminPermissionPromise) => { this.called.push([["createUserAdminPermission", data], returnArg]) }
            }
        },
        updateUserAdminPermission: (args: {
            data: UserAdminPermissionUpdateInput;
            where: UserAdminPermissionWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: UserAdminPermissionPromise) => { this.called.push([["updateUserAdminPermission", args], returnArg]) }
            }
        },
        updateManyUserAdminPermissions: (args: {
            data: UserAdminPermissionUpdateManyMutationInput;
            where?: UserAdminPermissionWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyUserAdminPermissions", args], returnArg]) }
            }
        },
        upsertUserAdminPermission: (args: {
            where: UserAdminPermissionWhereUniqueInput;
            create: UserAdminPermissionCreateInput;
            update: UserAdminPermissionUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: UserAdminPermissionPromise) => { this.called.push([["upsertUserAdminPermission", args], returnArg]) }
            }
        },
        deleteUserAdminPermission: (where: UserAdminPermissionWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserAdminPermissionPromise) => { this.called.push([["deleteUserAdminPermission", where], returnArg]) }
            }
        },
        deleteManyUserAdminPermissions: (where?: UserAdminPermissionWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyUserAdminPermissions", where], returnArg]) }
            }
        },
        createUserAdminRole: (data: UserAdminRoleCreateInput) => {
            return {
                toReturn: (returnArg: UserAdminRolePromise) => { this.called.push([["createUserAdminRole", data], returnArg]) }
            }
        },
        updateUserAdminRole: (args: {
            data: UserAdminRoleUpdateInput;
            where: UserAdminRoleWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: UserAdminRolePromise) => { this.called.push([["updateUserAdminRole", args], returnArg]) }
            }
        },
        updateManyUserAdminRoles: (args: {
            data: UserAdminRoleUpdateManyMutationInput;
            where?: UserAdminRoleWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyUserAdminRoles", args], returnArg]) }
            }
        },
        upsertUserAdminRole: (args: {
            where: UserAdminRoleWhereUniqueInput;
            create: UserAdminRoleCreateInput;
            update: UserAdminRoleUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: UserAdminRolePromise) => { this.called.push([["upsertUserAdminRole", args], returnArg]) }
            }
        },
        deleteUserAdminRole: (where: UserAdminRoleWhereUniqueInput) => {
            return {
                toReturn: (returnArg: UserAdminRolePromise) => { this.called.push([["deleteUserAdminRole", where], returnArg]) }
            }
        },
        deleteManyUserAdminRoles: (where?: UserAdminRoleWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyUserAdminRoles", where], returnArg]) }
            }
        },
        createVendor: (data: VendorCreateInput) => {
            return {
                toReturn: (returnArg: VendorPromise) => { this.called.push([["createVendor", data], returnArg]) }
            }
        },
        updateVendor: (args: { data: VendorUpdateInput; where: VendorWhereUniqueInput }) => {
            return {
                toReturn: (returnArg: VendorPromise) => { this.called.push([["updateVendor", args], returnArg]) }
            }
        },
        updateManyVendors: (args: { data: VendorUpdateManyMutationInput; where?: VendorWhereInput }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyVendors", args], returnArg]) }
            }
        },
        upsertVendor: (args: {
            where: VendorWhereUniqueInput;
            create: VendorCreateInput;
            update: VendorUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: VendorPromise) => { this.called.push([["upsertVendor", args], returnArg]) }
            }
        },
        deleteVendor: (where: VendorWhereUniqueInput) => {
            return {
                toReturn: (returnArg: VendorPromise) => { this.called.push([["deleteVendor", where], returnArg]) }
            }
        },
        deleteManyVendors: (where?: VendorWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyVendors", where], returnArg]) }
            }
        },
        createVendorBillingInformation: (data: VendorBillingInformationCreateInput) => {
            return {
                toReturn: (returnArg: VendorBillingInformationPromise) => { this.called.push([["createVendorBillingInformation", data], returnArg]) }
            }
        },
        updateVendorBillingInformation: (args: {
            data: VendorBillingInformationUpdateInput;
            where: VendorBillingInformationWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: VendorBillingInformationPromise) => { this.called.push([["updateVendorBillingInformation", args], returnArg]) }
            }
        },
        updateManyVendorBillingInformations: (args: {
            data: VendorBillingInformationUpdateManyMutationInput;
            where?: VendorBillingInformationWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyVendorBillingInformations", args], returnArg]) }
            }
        },
        upsertVendorBillingInformation: (args: {
            where: VendorBillingInformationWhereUniqueInput;
            create: VendorBillingInformationCreateInput;
            update: VendorBillingInformationUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: VendorBillingInformationPromise) => { this.called.push([["upsertVendorBillingInformation", args], returnArg]) }
            }
        },
        deleteVendorBillingInformation: (where: VendorBillingInformationWhereUniqueInput) => {
            return {
                toReturn: (returnArg: VendorBillingInformationPromise) => { this.called.push([["deleteVendorBillingInformation", where], returnArg]) }
            }
        },
        deleteManyVendorBillingInformations: (where?: VendorBillingInformationWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyVendorBillingInformations", where], returnArg]) }
            }
        },
        createVendorRevenue: (data: VendorRevenueCreateInput) => {
            return {
                toReturn: (returnArg: VendorRevenuePromise) => { this.called.push([["createVendorRevenue", data], returnArg]) }
            }
        },
        updateVendorRevenue: (args: {
            data: VendorRevenueUpdateInput;
            where: VendorRevenueWhereUniqueInput;
        }) => {
            return {
                toReturn: (returnArg: VendorRevenuePromise) => { this.called.push([["updateVendorRevenue", args], returnArg]) }
            }
        },
        updateManyVendorRevenues: (args: {
            data: VendorRevenueUpdateManyMutationInput;
            where?: VendorRevenueWhereInput;
        }) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["updateManyVendorRevenues", args], returnArg]) }
            }
        },
        upsertVendorRevenue: (args: {
            where: VendorRevenueWhereUniqueInput;
            create: VendorRevenueCreateInput;
            update: VendorRevenueUpdateInput;
        }) => {
            return {
                toReturn: (returnArg: VendorRevenuePromise) => { this.called.push([["upsertVendorRevenue", args], returnArg]) }
            }
        },
        deleteVendorRevenue: (where: VendorRevenueWhereUniqueInput) => {
            return {
                toReturn: (returnArg: VendorRevenuePromise) => { this.called.push([["deleteVendorRevenue", where], returnArg]) }
            }
        },
        deleteManyVendorRevenues: (where?: VendorRevenueWhereInput) => {
            return {
                toReturn: (returnArg: BatchPayloadPromise) => { this.called.push([["deleteManyVendorRevenues", where], returnArg]) }
            }
        }
    };
    $exists: Exists;
    $graphql = <T>(query: string, variables?: { [key: string]: any }) => {
        return this.on("$graphql", query, variables)
    };
    adsBanner = (where: AdsBannerWhereUniqueInput) => {
        return this.on("adsBanner", where)
    };
    adsBanners = (args?: {
        where?: AdsBannerWhereInput;
        orderBy?: AdsBannerOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("adsBanners", args)
    };
    adsBannersConnection = (args?: {
        where?: AdsBannerWhereInput;
        orderBy?: AdsBannerOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("adsBannersConnection", args)
    };
    author = (where: AuthorWhereUniqueInput) => {
        return this.on("author", where)
    };
    authors = (args?: {
        where?: AuthorWhereInput;
        orderBy?: AuthorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("authors", args)
    };
    authorsConnection = (args?: {
        where?: AuthorWhereInput;
        orderBy?: AuthorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("authorsConnection", args)
    };
    behavior = (where: BehaviorWhereUniqueInput) => {
        return this.on("behavior", where)
    };
    behaviors = (args?: {
        where?: BehaviorWhereInput;
        orderBy?: BehaviorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("behaviors", args)
    };
    behaviorsConnection = (args?: {
        where?: BehaviorWhereInput;
        orderBy?: BehaviorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("behaviorsConnection", args)
    };
    book = (where: BookWhereUniqueInput) => {
        return this.on("book", where)
    };
    books = (args?: {
        where?: BookWhereInput;
        orderBy?: BookOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("books", args)
    };
    booksConnection = (args?: {
        where?: BookWhereInput;
        orderBy?: BookOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("booksConnection", args)
    };
    bookEpisode = (where: BookEpisodeWhereUniqueInput) => {
        return this.on("bookEpisode", where)
    };
    bookEpisodes = (args?: {
        where?: BookEpisodeWhereInput;
        orderBy?: BookEpisodeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodes", args)
    };
    bookEpisodesConnection = (args?: {
        where?: BookEpisodeWhereInput;
        orderBy?: BookEpisodeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodesConnection", args)
    };
    bookEpisodeContent = (where: BookEpisodeContentWhereUniqueInput) => {
        return this.on("bookEpisodeContent", where)
    };
    bookEpisodeContents = (args?: {
        where?: BookEpisodeContentWhereInput;
        orderBy?: BookEpisodeContentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodeContents", args)
    };
    bookEpisodeContentsConnection = (args?: {
        where?: BookEpisodeContentWhereInput;
        orderBy?: BookEpisodeContentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodeContentsConnection", args)
    };
    bookEpisodeRecentRead = (where: BookEpisodeRecentReadWhereUniqueInput) => {
        return this.on("bookEpisodeRecentRead", where)
    };
    bookEpisodeRecentReads = (args?: {
        where?: BookEpisodeRecentReadWhereInput;
        orderBy?: BookEpisodeRecentReadOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodeRecentReads", args)
    };
    bookEpisodeRecentReadsConnection = (args?: {
        where?: BookEpisodeRecentReadWhereInput;
        orderBy?: BookEpisodeRecentReadOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodeRecentReadsConnection", args)
    };
    bookEpisodeReviewPost = (where: BookEpisodeReviewPostWhereUniqueInput) => {
        return this.on("bookEpisodeReviewPost", where)
    };
    bookEpisodeReviewPosts = (args?: {
        where?: BookEpisodeReviewPostWhereInput;
        orderBy?: BookEpisodeReviewPostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodeReviewPosts", args)
    };
    bookEpisodeReviewPostsConnection = (args?: {
        where?: BookEpisodeReviewPostWhereInput;
        orderBy?: BookEpisodeReviewPostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookEpisodeReviewPostsConnection", args)
    };
    bookRecommended = (where: BookRecommendedWhereUniqueInput) => {
        return this.on("bookRecommended", where)
    };
    bookRecommendeds = (args?: {
        where?: BookRecommendedWhereInput;
        orderBy?: BookRecommendedOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookRecommendeds", args)
    };
    bookRecommendedsConnection = (args?: {
        where?: BookRecommendedWhereInput;
        orderBy?: BookRecommendedOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookRecommendedsConnection", args)
    };
    bookVolume = (where: BookVolumeWhereUniqueInput) => {
        return this.on("bookVolume", where)
    };
    bookVolumes = (args?: {
        where?: BookVolumeWhereInput;
        orderBy?: BookVolumeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookVolumes", args)
    };
    bookVolumesConnection = (args?: {
        where?: BookVolumeWhereInput;
        orderBy?: BookVolumeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("bookVolumesConnection", args)
    };
    category = (where: CategoryWhereUniqueInput) => {
        return this.on("category", where)
    };
    categories = (args?: {
        where?: CategoryWhereInput;
        orderBy?: CategoryOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("categories", args)
    };
    categoriesConnection = (args?: {
        where?: CategoryWhereInput;
        orderBy?: CategoryOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("categoriesConnection", args)
    };
    copyrightHolder = (where: CopyrightHolderWhereUniqueInput) => {
        return this.on("copyrightHolder", where)
    };
    copyrightHolders = (args?: {
        where?: CopyrightHolderWhereInput;
        orderBy?: CopyrightHolderOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("copyrightHolders", args)
    };
    copyrightHoldersConnection = (args?: {
        where?: CopyrightHolderWhereInput;
        orderBy?: CopyrightHolderOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("copyrightHoldersConnection", args)
    };
    dashbardDataCaches = (args?: {
        where?: DashbardDataCacheWhereInput;
        orderBy?: DashbardDataCacheOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("dashbardDataCaches", args)
    };
    dashbardDataCachesConnection = (args?: {
        where?: DashbardDataCacheWhereInput;
        orderBy?: DashbardDataCacheOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("dashbardDataCachesConnection", args)
    };
    document = (where: DocumentWhereUniqueInput) => {
        return this.on("document", where)
    };
    documents = (args?: {
        where?: DocumentWhereInput;
        orderBy?: DocumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("documents", args)
    };
    documentsConnection = (args?: {
        where?: DocumentWhereInput;
        orderBy?: DocumentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("documentsConnection", args)
    };
    exchangeTier = (where: ExchangeTierWhereUniqueInput) => {
        return this.on("exchangeTier", where)
    };
    exchangeTiers = (args?: {
        where?: ExchangeTierWhereInput;
        orderBy?: ExchangeTierOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("exchangeTiers", args)
    };
    exchangeTiersConnection = (args?: {
        where?: ExchangeTierWhereInput;
        orderBy?: ExchangeTierOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("exchangeTiersConnection", args)
    };
    exchangeTransaction = (where: ExchangeTransactionWhereUniqueInput) => {
        return this.on("exchangeTransaction", where)
    };
    exchangeTransactions = (args?: {
        where?: ExchangeTransactionWhereInput;
        orderBy?: ExchangeTransactionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("exchangeTransactions", args)
    };
    exchangeTransactionsConnection = (args?: {
        where?: ExchangeTransactionWhereInput;
        orderBy?: ExchangeTransactionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("exchangeTransactionsConnection", args)
    };
    exchangeTransactionStatusHistory = (where: ExchangeTransactionStatusHistoryWhereUniqueInput) => {
        return this.on("exchangeTransactionStatusHistory", where)
    };
    exchangeTransactionStatusHistories = (args?: {
        where?: ExchangeTransactionStatusHistoryWhereInput;
        orderBy?: ExchangeTransactionStatusHistoryOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("exchangeTransactionStatusHistories", args)
    };
    exchangeTransactionStatusHistoriesConnection = (args?: {
        where?: ExchangeTransactionStatusHistoryWhereInput;
        orderBy?: ExchangeTransactionStatusHistoryOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("exchangeTransactionStatusHistoriesConnection", args)
    };
    file = (where: FileWhereUniqueInput) => {
        return this.on("file", where)
    };
    files = (args?: {
        where?: FileWhereInput;
        orderBy?: FileOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("files", args)
    };
    filesConnection = (args?: {
        where?: FileWhereInput;
        orderBy?: FileOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("filesConnection", args)
    };
    history = (where: HistoryWhereUniqueInput) => {
        return this.on("history", where)
    };
    histories = (args?: {
        where?: HistoryWhereInput;
        orderBy?: HistoryOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("histories", args)
    };
    historiesConnection = (args?: {
        where?: HistoryWhereInput;
        orderBy?: HistoryOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("historiesConnection", args)
    };
    image = (where: ImageWhereUniqueInput) => {
        return this.on("image", where)
    };
    images = (args?: {
        where?: ImageWhereInput;
        orderBy?: ImageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("images", args)
    };
    imagesConnection = (args?: {
        where?: ImageWhereInput;
        orderBy?: ImageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("imagesConnection", args)
    };
    item = (where: ItemWhereUniqueInput) => {
        return this.on("item", where)
    };
    items = (args?: {
        where?: ItemWhereInput;
        orderBy?: ItemOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("items", args)
    };
    itemsConnection = (args?: {
        where?: ItemWhereInput;
        orderBy?: ItemOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("itemsConnection", args)
    };
    itemAsset = (where: ItemAssetWhereUniqueInput) => {
        return this.on("itemAsset", where)
    };
    itemAssets = (args?: {
        where?: ItemAssetWhereInput;
        orderBy?: ItemAssetOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("itemAssets", args)
    };
    itemAssetsConnection = (args?: {
        where?: ItemAssetWhereInput;
        orderBy?: ItemAssetOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("itemAssetsConnection", args)
    };
    migration = (where: MigrationWhereUniqueInput) => {
        return this.on("migration", where)
    };
    migrations = (args?: {
        where?: MigrationWhereInput;
        orderBy?: MigrationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("migrations", args)
    };
    migrationsConnection = (args?: {
        where?: MigrationWhereInput;
        orderBy?: MigrationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("migrationsConnection", args)
    };
    pageView = (where: PageViewWhereUniqueInput) => {
        return this.on("pageView", where)
    };
    pageViews = (args?: {
        where?: PageViewWhereInput;
        orderBy?: PageViewOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("pageViews", args)
    };
    pageViewsConnection = (args?: {
        where?: PageViewWhereInput;
        orderBy?: PageViewOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("pageViewsConnection", args)
    };
    post = (where: PostWhereUniqueInput) => {
        return this.on("post", where)
    };
    posts = (args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("posts", args)
    };
    postsConnection = (args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("postsConnection", args)
    };
    price = (where: PriceWhereUniqueInput) => {
        return this.on("price", where)
    };
    prices = (args?: {
        where?: PriceWhereInput;
        orderBy?: PriceOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("prices", args)
    };
    pricesConnection = (args?: {
        where?: PriceWhereInput;
        orderBy?: PriceOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("pricesConnection", args)
    };
    promotion = (where: PromotionWhereUniqueInput) => {
        return this.on("promotion", where)
    };
    promotions = (args?: {
        where?: PromotionWhereInput;
        orderBy?: PromotionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("promotions", args)
    };
    promotionsConnection = (args?: {
        where?: PromotionWhereInput;
        orderBy?: PromotionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("promotionsConnection", args)
    };
    publishTimelines = (args?: {
        where?: PublishTimelineWhereInput;
        orderBy?: PublishTimelineOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("publishTimelines", args)
    };
    publishTimelinesConnection = (args?: {
        where?: PublishTimelineWhereInput;
        orderBy?: PublishTimelineOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("publishTimelinesConnection", args)
    };
    remoteConfig = (where: RemoteConfigWhereUniqueInput) => {
        return this.on("remoteConfig", where)
    };
    remoteConfigs = (args?: {
        where?: RemoteConfigWhereInput;
        orderBy?: RemoteConfigOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("remoteConfigs", args)
    };
    remoteConfigsConnection = (args?: {
        where?: RemoteConfigWhereInput;
        orderBy?: RemoteConfigOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("remoteConfigsConnection", args)
    };
    revenueSharing = (where: RevenueSharingWhereUniqueInput) => {
        return this.on("revenueSharing", where)
    };
    revenueSharings = (args?: {
        where?: RevenueSharingWhereInput;
        orderBy?: RevenueSharingOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("revenueSharings", args)
    };
    revenueSharingsConnection = (args?: {
        where?: RevenueSharingWhereInput;
        orderBy?: RevenueSharingOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("revenueSharingsConnection", args)
    };
    shelf = (where: ShelfWhereUniqueInput) => {
        return this.on("shelf", where)
    };
    shelves = (args?: {
        where?: ShelfWhereInput;
        orderBy?: ShelfOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("shelves", args)
    };
    shelvesConnection = (args?: {
        where?: ShelfWhereInput;
        orderBy?: ShelfOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("shelvesConnection", args)
    };
    systemConfig = (where: SystemConfigWhereUniqueInput) => {
        return this.on("systemConfig", where)
    };
    systemConfigs = (args?: {
        where?: SystemConfigWhereInput;
        orderBy?: SystemConfigOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("systemConfigs", args)
    };
    systemConfigsConnection = (args?: {
        where?: SystemConfigWhereInput;
        orderBy?: SystemConfigOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("systemConfigsConnection", args)
    };
    transaction = (where: TransactionWhereUniqueInput) => {
        return this.on("transaction", where)
    };
    transactions = (args?: {
        where?: TransactionWhereInput;
        orderBy?: TransactionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("transactions", args)
    };
    transactionsConnection = (args?: {
        where?: TransactionWhereInput;
        orderBy?: TransactionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("transactionsConnection", args)
    };
    translator = (where: TranslatorWhereUniqueInput) => {
        return this.on("translator", where)
    };
    translators = (args?: {
        where?: TranslatorWhereInput;
        orderBy?: TranslatorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("translators", args)
    };
    translatorsConnection = (args?: {
        where?: TranslatorWhereInput;
        orderBy?: TranslatorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("translatorsConnection", args)
    };
    user = (where: UserWhereUniqueInput) => {
        return this.on("user", where)
    };
    users = (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("users", args)
    };
    usersConnection = (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("usersConnection", args)
    };
    userAdmin = (where: UserAdminWhereUniqueInput) => {
        return this.on("userAdmin", where)
    };
    userAdmins = (args?: {
        where?: UserAdminWhereInput;
        orderBy?: UserAdminOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("userAdmins", args)
    };
    userAdminsConnection = (args?: {
        where?: UserAdminWhereInput;
        orderBy?: UserAdminOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("userAdminsConnection", args)
    };
    userAdminPermission = (where: UserAdminPermissionWhereUniqueInput) => {
        return this.on("userAdminPermission", where)
    };
    userAdminPermissions = (args?: {
        where?: UserAdminPermissionWhereInput;
        orderBy?: UserAdminPermissionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("userAdminPermissions", args)
    };
    userAdminPermissionsConnection = (args?: {
        where?: UserAdminPermissionWhereInput;
        orderBy?: UserAdminPermissionOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("userAdminPermissionsConnection", args)
    };
    userAdminRole = (where: UserAdminRoleWhereUniqueInput) => {
        return this.on("userAdminRole", where)
    };
    userAdminRoles = (args?: {
        where?: UserAdminRoleWhereInput;
        orderBy?: UserAdminRoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("userAdminRoles", args)
    };
    userAdminRolesConnection = (args?: {
        where?: UserAdminRoleWhereInput;
        orderBy?: UserAdminRoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("userAdminRolesConnection", args)
    };
    vendor = (where: VendorWhereUniqueInput) => {
        return this.on("vendor", where)
    };
    vendors = (args?: {
        where?: VendorWhereInput;
        orderBy?: VendorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("vendors", args)
    };
    vendorsConnection = (args?: {
        where?: VendorWhereInput;
        orderBy?: VendorOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("vendorsConnection", args)
    };
    vendorBillingInformation = (where: VendorBillingInformationWhereUniqueInput) => {
        return this.on("vendorBillingInformation", where)
    };
    vendorBillingInformations = (args?: {
        where?: VendorBillingInformationWhereInput;
        orderBy?: VendorBillingInformationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("vendorBillingInformations", args)
    };
    vendorBillingInformationsConnection = (args?: {
        where?: VendorBillingInformationWhereInput;
        orderBy?: VendorBillingInformationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("vendorBillingInformationsConnection", args)
    };
    vendorRevenue = (where: VendorRevenueWhereUniqueInput) => {
        return this.on("vendorRevenue", where)
    };
    vendorRevenues = (args?: {
        where?: VendorRevenueWhereInput;
        orderBy?: VendorRevenueOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("vendorRevenues", args)
    };
    vendorRevenuesConnection = (args?: {
        where?: VendorRevenueWhereInput;
        orderBy?: VendorRevenueOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => {
        return this.on("vendorRevenuesConnection", args)
    };
    node = (args: { id: ID_Output }) => {
        return this.on("node", args)
    };
    createAdsBanner = (data: AdsBannerCreateInput) => {
        return this.on("createAdsBanner", data)
    };
    updateAdsBanner = (args: { data: AdsBannerUpdateInput; where: AdsBannerWhereUniqueInput }) => {
        return this.on("updateAdsBanner", args)
    };
    updateManyAdsBanners = (args: {
        data: AdsBannerUpdateManyMutationInput;
        where?: AdsBannerWhereInput;
    }) => {
        return this.on("updateManyAdsBanners", args)
    };
    upsertAdsBanner = (args: {
        where: AdsBannerWhereUniqueInput;
        create: AdsBannerCreateInput;
        update: AdsBannerUpdateInput;
    }) => {
        return this.on("upsertAdsBanner", args)
    };
    deleteAdsBanner = (where: AdsBannerWhereUniqueInput) => {
        return this.on("deleteAdsBanner", where)
    };
    deleteManyAdsBanners = (where?: AdsBannerWhereInput) => {
        return this.on("deleteManyAdsBanners", where)
    };
    createAuthor = (data: AuthorCreateInput) => {
        return this.on("createAuthor", data)
    };
    updateAuthor = (args: { data: AuthorUpdateInput; where: AuthorWhereUniqueInput }) => {
        return this.on("updateAuthor", args)
    };
    updateManyAuthors = (args: { data: AuthorUpdateManyMutationInput; where?: AuthorWhereInput }) => {
        return this.on("updateManyAuthors", args)
    };
    upsertAuthor = (args: {
        where: AuthorWhereUniqueInput;
        create: AuthorCreateInput;
        update: AuthorUpdateInput;
    }) => {
        return this.on("upsertAuthor", args)
    };
    deleteAuthor = (where: AuthorWhereUniqueInput) => {
        return this.on("deleteAuthor", where)
    };
    deleteManyAuthors = (where?: AuthorWhereInput) => {
        return this.on("deleteManyAuthors", where)
    };
    createBehavior = (data: BehaviorCreateInput) => {
        return this.on("createBehavior", data)
    };
    updateBehavior = (args: { data: BehaviorUpdateInput; where: BehaviorWhereUniqueInput }) => {
        return this.on("updateBehavior", args)
    };
    updateManyBehaviors = (args: { data: BehaviorUpdateManyMutationInput; where?: BehaviorWhereInput }) => {
        return this.on("updateManyBehaviors", args)
    };
    upsertBehavior = (args: {
        where: BehaviorWhereUniqueInput;
        create: BehaviorCreateInput;
        update: BehaviorUpdateInput;
    }) => {
        return this.on("upsertBehavior", args)
    };
    deleteBehavior = (where: BehaviorWhereUniqueInput) => {
        return this.on("deleteBehavior", where)
    };
    deleteManyBehaviors = (where?: BehaviorWhereInput) => {
        return this.on("deleteManyBehaviors", where)
    };
    createBook = (data: BookCreateInput) => {
        return this.on("createBook", data)
    };
    updateBook = (args: { data: BookUpdateInput; where: BookWhereUniqueInput }) => {
        return this.on("updateBook", args)
    };
    updateManyBooks = (args: { data: BookUpdateManyMutationInput; where?: BookWhereInput }) => {
        return this.on("updateManyBooks", args)
    };
    upsertBook = (args: {
        where: BookWhereUniqueInput;
        create: BookCreateInput;
        update: BookUpdateInput;
    }) => {
        return this.on("upsertBook", args)
    };
    deleteBook = (where: BookWhereUniqueInput) => {
        return this.on("deleteBook", where)
    };
    deleteManyBooks = (where?: BookWhereInput) => {
        return this.on("deleteManyBooks", where)
    };
    createBookEpisode = (data: BookEpisodeCreateInput) => {
        return this.on("createBookEpisode", data)
    };
    updateBookEpisode = (args: { data: BookEpisodeUpdateInput; where: BookEpisodeWhereUniqueInput }) => {
        return this.on("updateBookEpisode", args)
    };
    updateManyBookEpisodes = (args: {
        data: BookEpisodeUpdateManyMutationInput;
        where?: BookEpisodeWhereInput;
    }) => {
        return this.on("updateManyBookEpisodes", args)
    };
    upsertBookEpisode = (args: {
        where: BookEpisodeWhereUniqueInput;
        create: BookEpisodeCreateInput;
        update: BookEpisodeUpdateInput;
    }) => {
        return this.on("upsertBookEpisode", args)
    };
    deleteBookEpisode = (where: BookEpisodeWhereUniqueInput) => {
        return this.on("deleteBookEpisode", where)
    };
    deleteManyBookEpisodes = (where?: BookEpisodeWhereInput) => {
        return this.on("deleteManyBookEpisodes", where)
    };
    createBookEpisodeContent = (data: BookEpisodeContentCreateInput) => {
        return this.on("createBookEpisodeContent", data)
    };
    updateBookEpisodeContent = (args: {
        data: BookEpisodeContentUpdateInput;
        where: BookEpisodeContentWhereUniqueInput;
    }) => {
        return this.on("updateBookEpisodeContent", args)
    };
    updateManyBookEpisodeContents = (args: {
        data: BookEpisodeContentUpdateManyMutationInput;
        where?: BookEpisodeContentWhereInput;
    }) => {
        return this.on("updateManyBookEpisodeContents", args)
    };
    upsertBookEpisodeContent = (args: {
        where: BookEpisodeContentWhereUniqueInput;
        create: BookEpisodeContentCreateInput;
        update: BookEpisodeContentUpdateInput;
    }) => {
        return this.on("upsertBookEpisodeContent", args)
    };
    deleteBookEpisodeContent = (where: BookEpisodeContentWhereUniqueInput) => {
        return this.on("deleteBookEpisodeContent", where)
    };
    deleteManyBookEpisodeContents = (where?: BookEpisodeContentWhereInput) => {
        return this.on("deleteManyBookEpisodeContents", where)
    };
    createBookEpisodeRecentRead = (data: BookEpisodeRecentReadCreateInput) => {
        return this.on("createBookEpisodeRecentRead", data)
    };
    updateBookEpisodeRecentRead = (args: {
        data: BookEpisodeRecentReadUpdateInput;
        where: BookEpisodeRecentReadWhereUniqueInput;
    }) => {
        return this.on("updateBookEpisodeRecentRead", args)
    };
    updateManyBookEpisodeRecentReads = (args: {
        data: BookEpisodeRecentReadUpdateManyMutationInput;
        where?: BookEpisodeRecentReadWhereInput;
    }) => {
        return this.on("updateManyBookEpisodeRecentReads", args)
    };
    upsertBookEpisodeRecentRead = (args: {
        where: BookEpisodeRecentReadWhereUniqueInput;
        create: BookEpisodeRecentReadCreateInput;
        update: BookEpisodeRecentReadUpdateInput;
    }) => {
        return this.on("upsertBookEpisodeRecentRead", args)
    };
    deleteBookEpisodeRecentRead = (where: BookEpisodeRecentReadWhereUniqueInput) => {
        return this.on("deleteBookEpisodeRecentRead", where)
    };
    deleteManyBookEpisodeRecentReads = (where?: BookEpisodeRecentReadWhereInput) => {
        return this.on("deleteManyBookEpisodeRecentReads", where)
    };
    createBookEpisodeReviewPost = (data: BookEpisodeReviewPostCreateInput) => {
        return this.on("createBookEpisodeReviewPost", data)
    };
    updateBookEpisodeReviewPost = (args: {
        data: BookEpisodeReviewPostUpdateInput;
        where: BookEpisodeReviewPostWhereUniqueInput;
    }) => {
        return this.on("updateBookEpisodeReviewPost", args)
    };
    updateManyBookEpisodeReviewPosts = (args: {
        data: BookEpisodeReviewPostUpdateManyMutationInput;
        where?: BookEpisodeReviewPostWhereInput;
    }) => {
        return this.on("updateManyBookEpisodeReviewPosts", args)
    };
    upsertBookEpisodeReviewPost = (args: {
        where: BookEpisodeReviewPostWhereUniqueInput;
        create: BookEpisodeReviewPostCreateInput;
        update: BookEpisodeReviewPostUpdateInput;
    }) => {
        return this.on("upsertBookEpisodeReviewPost", args)
    };
    deleteBookEpisodeReviewPost = (where: BookEpisodeReviewPostWhereUniqueInput) => {
        return this.on("deleteBookEpisodeReviewPost", where)
    };
    deleteManyBookEpisodeReviewPosts = (where?: BookEpisodeReviewPostWhereInput) => {
        return this.on("deleteManyBookEpisodeReviewPosts", where)
    };
    createBookRecommended = (data: BookRecommendedCreateInput) => {
        return this.on("createBookRecommended", data)
    };
    updateBookRecommended = (args: {
        data: BookRecommendedUpdateInput;
        where: BookRecommendedWhereUniqueInput;
    }) => {
        return this.on("updateBookRecommended", args)
    };
    updateManyBookRecommendeds = (args: {
        data: BookRecommendedUpdateManyMutationInput;
        where?: BookRecommendedWhereInput;
    }) => {
        return this.on("updateManyBookRecommendeds", args)
    };
    upsertBookRecommended = (args: {
        where: BookRecommendedWhereUniqueInput;
        create: BookRecommendedCreateInput;
        update: BookRecommendedUpdateInput;
    }) => {
        return this.on("upsertBookRecommended", args)
    };
    deleteBookRecommended = (where: BookRecommendedWhereUniqueInput) => {
        return this.on("deleteBookRecommended", where)
    };
    deleteManyBookRecommendeds = (where?: BookRecommendedWhereInput) => {
        return this.on("deleteManyBookRecommendeds", where)
    };
    createBookVolume = (data: BookVolumeCreateInput) => {
        return this.on("createBookVolume", data)
    };
    updateBookVolume = (args: { data: BookVolumeUpdateInput; where: BookVolumeWhereUniqueInput }) => {
        return this.on("updateBookVolume", args)
    };
    updateManyBookVolumes = (args: {
        data: BookVolumeUpdateManyMutationInput;
        where?: BookVolumeWhereInput;
    }) => {
        return this.on("updateManyBookVolumes", args)
    };
    upsertBookVolume = (args: {
        where: BookVolumeWhereUniqueInput;
        create: BookVolumeCreateInput;
        update: BookVolumeUpdateInput;
    }) => {
        return this.on("upsertBookVolume", args)
    };
    deleteBookVolume = (where: BookVolumeWhereUniqueInput) => {
        return this.on("deleteBookVolume", where)
    };
    deleteManyBookVolumes = (where?: BookVolumeWhereInput) => {
        return this.on("deleteManyBookVolumes", where)
    };
    createCategory = (data: CategoryCreateInput) => {
        return this.on("createCategory", data)
    };
    updateCategory = (args: { data: CategoryUpdateInput; where: CategoryWhereUniqueInput }) => {
        return this.on("updateCategory", args)
    };
    updateManyCategories = (args: { data: CategoryUpdateManyMutationInput; where?: CategoryWhereInput }) => {
        return this.on("updateManyCategories", args)
    };
    upsertCategory = (args: {
        where: CategoryWhereUniqueInput;
        create: CategoryCreateInput;
        update: CategoryUpdateInput;
    }) => {
        return this.on("upsertCategory", args)
    };
    deleteCategory = (where: CategoryWhereUniqueInput) => {
        return this.on("deleteCategory", where)
    };
    deleteManyCategories = (where?: CategoryWhereInput) => {
        return this.on("deleteManyCategories", where)
    };
    createCopyrightHolder = (data: CopyrightHolderCreateInput) => {
        return this.on("createCopyrightHolder", data)
    };
    updateCopyrightHolder = (args: {
        data: CopyrightHolderUpdateInput;
        where: CopyrightHolderWhereUniqueInput;
    }) => {
        return this.on("updateCopyrightHolder", args)
    };
    updateManyCopyrightHolders = (args: {
        data: CopyrightHolderUpdateManyMutationInput;
        where?: CopyrightHolderWhereInput;
    }) => {
        return this.on("updateManyCopyrightHolders", args)
    };
    upsertCopyrightHolder = (args: {
        where: CopyrightHolderWhereUniqueInput;
        create: CopyrightHolderCreateInput;
        update: CopyrightHolderUpdateInput;
    }) => {
        return this.on("upsertCopyrightHolder", args)
    };
    deleteCopyrightHolder = (where: CopyrightHolderWhereUniqueInput) => {
        return this.on("deleteCopyrightHolder", where)
    };
    deleteManyCopyrightHolders = (where?: CopyrightHolderWhereInput) => {
        return this.on("deleteManyCopyrightHolders", where)
    };
    createDashbardDataCache = (data: DashbardDataCacheCreateInput) => {
        return this.on("createDashbardDataCache", data)
    };
    updateManyDashbardDataCaches = (args: {
        data: DashbardDataCacheUpdateManyMutationInput;
        where?: DashbardDataCacheWhereInput;
    }) => {
        return this.on("updateManyDashbardDataCaches", args)
    };
    deleteManyDashbardDataCaches = (where?: DashbardDataCacheWhereInput) => {
        return this.on("deleteManyDashbardDataCaches", where)
    };
    createDocument = (data: DocumentCreateInput) => {
        return this.on("createDocument", data)
    };
    updateDocument = (args: { data: DocumentUpdateInput; where: DocumentWhereUniqueInput }) => {
        return this.on("updateDocument", args)
    };
    updateManyDocuments = (args: { data: DocumentUpdateManyMutationInput; where?: DocumentWhereInput }) => {
        return this.on("updateManyDocuments", args)
    };
    upsertDocument = (args: {
        where: DocumentWhereUniqueInput;
        create: DocumentCreateInput;
        update: DocumentUpdateInput;
    }) => {
        return this.on("upsertDocument", args)
    };
    deleteDocument = (where: DocumentWhereUniqueInput) => {
        return this.on("deleteDocument", where)
    };
    deleteManyDocuments = (where?: DocumentWhereInput) => {
        return this.on("deleteManyDocuments", where)
    };
    createExchangeTier = (data: ExchangeTierCreateInput) => {
        return this.on("createExchangeTier", data)
    };
    updateExchangeTier = (args: { data: ExchangeTierUpdateInput; where: ExchangeTierWhereUniqueInput }) => {
        return this.on("updateExchangeTier", args)
    };
    updateManyExchangeTiers = (args: {
        data: ExchangeTierUpdateManyMutationInput;
        where?: ExchangeTierWhereInput;
    }) => {
        return this.on("updateManyExchangeTiers", args)
    };
    upsertExchangeTier = (args: {
        where: ExchangeTierWhereUniqueInput;
        create: ExchangeTierCreateInput;
        update: ExchangeTierUpdateInput;
    }) => {
        return this.on("upsertExchangeTier", args)
    };
    deleteExchangeTier = (where: ExchangeTierWhereUniqueInput) => {
        return this.on("deleteExchangeTier", where)
    };
    deleteManyExchangeTiers = (where?: ExchangeTierWhereInput) => {
        return this.on("deleteManyExchangeTiers", where)
    };
    createExchangeTransaction = (data: ExchangeTransactionCreateInput) => {
        return this.on("createExchangeTransaction", data)
    };
    updateExchangeTransaction = (args: {
        data: ExchangeTransactionUpdateInput;
        where: ExchangeTransactionWhereUniqueInput;
    }) => {
        return this.on("updateExchangeTransaction", args)
    };
    updateManyExchangeTransactions = (args: {
        data: ExchangeTransactionUpdateManyMutationInput;
        where?: ExchangeTransactionWhereInput;
    }) => {
        return this.on("updateManyExchangeTransactions", args)
    };
    upsertExchangeTransaction = (args: {
        where: ExchangeTransactionWhereUniqueInput;
        create: ExchangeTransactionCreateInput;
        update: ExchangeTransactionUpdateInput;
    }) => {
        return this.on("upsertExchangeTransaction", args)
    };
    deleteExchangeTransaction = (where: ExchangeTransactionWhereUniqueInput) => {
        return this.on("deleteExchangeTransaction", where)
    };
    deleteManyExchangeTransactions = (where?: ExchangeTransactionWhereInput) => {
        return this.on("deleteManyExchangeTransactions", where)
    };
    createExchangeTransactionStatusHistory = (data: ExchangeTransactionStatusHistoryCreateInput) => {
        return this.on("createExchangeTransactionStatusHistory", data)
    };
    updateExchangeTransactionStatusHistory = (args: {
        data: ExchangeTransactionStatusHistoryUpdateInput;
        where: ExchangeTransactionStatusHistoryWhereUniqueInput;
    }) => {
        return this.on("updateExchangeTransactionStatusHistory", args)
    };
    updateManyExchangeTransactionStatusHistories = (args: {
        data: ExchangeTransactionStatusHistoryUpdateManyMutationInput;
        where?: ExchangeTransactionStatusHistoryWhereInput;
    }) => {
        return this.on("updateManyExchangeTransactionStatusHistories", args)
    };
    upsertExchangeTransactionStatusHistory = (args: {
        where: ExchangeTransactionStatusHistoryWhereUniqueInput;
        create: ExchangeTransactionStatusHistoryCreateInput;
        update: ExchangeTransactionStatusHistoryUpdateInput;
    }) => {
        return this.on("upsertExchangeTransactionStatusHistory", args)
    };
    deleteExchangeTransactionStatusHistory = (where: ExchangeTransactionStatusHistoryWhereUniqueInput) => {
        return this.on("deleteExchangeTransactionStatusHistory", where)
    };
    deleteManyExchangeTransactionStatusHistories = (where?: ExchangeTransactionStatusHistoryWhereInput) => {
        return this.on("deleteManyExchangeTransactionStatusHistories", where)
    };
    createFile = (data: FileCreateInput) => {
        return this.on("createFile", data)
    };
    updateFile = (args: { data: FileUpdateInput; where: FileWhereUniqueInput }) => {
        return this.on("updateFile", args)
    };
    updateManyFiles = (args: { data: FileUpdateManyMutationInput; where?: FileWhereInput }) => {
        return this.on("updateManyFiles", args)
    };
    upsertFile = (args: {
        where: FileWhereUniqueInput;
        create: FileCreateInput;
        update: FileUpdateInput;
    }) => {
        return this.on("upsertFile", args)
    };
    deleteFile = (where: FileWhereUniqueInput) => {
        return this.on("deleteFile", where)
    };
    deleteManyFiles = (where?: FileWhereInput) => {
        return this.on("deleteManyFiles", where)
    };
    createHistory = (data: HistoryCreateInput) => {
        return this.on("createHistory", data)
    };
    updateHistory = (args: { data: HistoryUpdateInput; where: HistoryWhereUniqueInput }) => {
        return this.on("updateHistory", args)
    };
    updateManyHistories = (args: { data: HistoryUpdateManyMutationInput; where?: HistoryWhereInput }) => {
        return this.on("updateManyHistories", args)
    };
    upsertHistory = (args: {
        where: HistoryWhereUniqueInput;
        create: HistoryCreateInput;
        update: HistoryUpdateInput;
    }) => {
        return this.on("upsertHistory", args)
    };
    deleteHistory = (where: HistoryWhereUniqueInput) => {
        return this.on("deleteHistory", where)
    };
    deleteManyHistories = (where?: HistoryWhereInput) => {
        return this.on("deleteManyHistories", where)
    };
    createImage = (data: ImageCreateInput) => {
        return this.on("createImage", data)
    };
    updateImage = (args: { data: ImageUpdateInput; where: ImageWhereUniqueInput }) => {
        return this.on("updateImage", args)
    };
    updateManyImages = (args: { data: ImageUpdateManyMutationInput; where?: ImageWhereInput }) => {
        return this.on("updateManyImages", args)
    };
    upsertImage = (args: {
        where: ImageWhereUniqueInput;
        create: ImageCreateInput;
        update: ImageUpdateInput;
    }) => {
        return this.on("upsertImage", args)
    };
    deleteImage = (where: ImageWhereUniqueInput) => {
        return this.on("deleteImage", where)
    };
    deleteManyImages = (where?: ImageWhereInput) => {
        return this.on("deleteManyImages", where)
    };
    createItem = (data: ItemCreateInput) => {
        return this.on("createItem", data)
    };
    updateItem = (args: { data: ItemUpdateInput; where: ItemWhereUniqueInput }) => {
        return this.on("updateItem", args)
    };
    updateManyItems = (args: { data: ItemUpdateManyMutationInput; where?: ItemWhereInput }) => {
        return this.on("updateManyItems", args)
    };
    upsertItem = (args: {
        where: ItemWhereUniqueInput;
        create: ItemCreateInput;
        update: ItemUpdateInput;
    }) => {
        return this.on("upsertItem", args)
    };
    deleteItem = (where: ItemWhereUniqueInput) => {
        return this.on("deleteItem", where)
    };
    deleteManyItems = (where?: ItemWhereInput) => {
        return this.on("deleteManyItems", where)
    };
    createItemAsset = (data: ItemAssetCreateInput) => {
        return this.on("createItemAsset", data)
    };
    updateItemAsset = (args: { data: ItemAssetUpdateInput; where: ItemAssetWhereUniqueInput }) => {
        return this.on("updateItemAsset", args)
    };
    updateManyItemAssets = (args: {
        data: ItemAssetUpdateManyMutationInput;
        where?: ItemAssetWhereInput;
    }) => {
        return this.on("updateManyItemAssets", args)
    };
    upsertItemAsset = (args: {
        where: ItemAssetWhereUniqueInput;
        create: ItemAssetCreateInput;
        update: ItemAssetUpdateInput;
    }) => {
        return this.on("upsertItemAsset", args)
    };
    deleteItemAsset = (where: ItemAssetWhereUniqueInput) => {
        return this.on("deleteItemAsset", where)
    };
    deleteManyItemAssets = (where?: ItemAssetWhereInput) => {
        return this.on("deleteManyItemAssets", where)
    };
    createMigration = (data: MigrationCreateInput) => {
        return this.on("createMigration", data)
    };
    updateMigration = (args: { data: MigrationUpdateInput; where: MigrationWhereUniqueInput }) => {
        return this.on("updateMigration", args)
    };
    updateManyMigrations = (args: {
        data: MigrationUpdateManyMutationInput;
        where?: MigrationWhereInput;
    }) => {
        return this.on("updateManyMigrations", args)
    };
    upsertMigration = (args: {
        where: MigrationWhereUniqueInput;
        create: MigrationCreateInput;
        update: MigrationUpdateInput;
    }) => {
        return this.on("upsertMigration", args)
    };
    deleteMigration = (where: MigrationWhereUniqueInput) => {
        return this.on("deleteMigration", where)
    };
    deleteManyMigrations = (where?: MigrationWhereInput) => {
        return this.on("deleteManyMigrations", where)
    };
    createPageView = (data: PageViewCreateInput) => {
        return this.on("createPageView", data)
    };
    updatePageView = (args: { data: PageViewUpdateInput; where: PageViewWhereUniqueInput }) => {
        return this.on("updatePageView", args)
    };
    updateManyPageViews = (args: { data: PageViewUpdateManyMutationInput; where?: PageViewWhereInput }) => {
        return this.on("updateManyPageViews", args)
    };
    upsertPageView = (args: {
        where: PageViewWhereUniqueInput;
        create: PageViewCreateInput;
        update: PageViewUpdateInput;
    }) => {
        return this.on("upsertPageView", args)
    };
    deletePageView = (where: PageViewWhereUniqueInput) => {
        return this.on("deletePageView", where)
    };
    deleteManyPageViews = (where?: PageViewWhereInput) => {
        return this.on("deleteManyPageViews", where)
    };
    createPost = (data: PostCreateInput) => {
        return this.on("createPost", data)
    };
    updatePost = (args: { data: PostUpdateInput; where: PostWhereUniqueInput }) => {
        return this.on("updatePost", args)
    };
    updateManyPosts = (args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }) => {
        return this.on("updateManyPosts", args)
    };
    upsertPost = (args: {
        where: PostWhereUniqueInput;
        create: PostCreateInput;
        update: PostUpdateInput;
    }) => {
        return this.on("upsertPost", args)
    };
    deletePost = (where: PostWhereUniqueInput) => {
        return this.on("deletePost", where)
    };
    deleteManyPosts = (where?: PostWhereInput) => {
        return this.on("deleteManyPosts", where)
    };
    createPrice = (data: PriceCreateInput) => {
        return this.on("createPrice", data)
    };
    updatePrice = (args: { data: PriceUpdateInput; where: PriceWhereUniqueInput }) => {
        return this.on("updatePrice", args)
    };
    updateManyPrices = (args: { data: PriceUpdateManyMutationInput; where?: PriceWhereInput }) => {
        return this.on("updateManyPrices", args)
    };
    upsertPrice = (args: {
        where: PriceWhereUniqueInput;
        create: PriceCreateInput;
        update: PriceUpdateInput;
    }) => {
        return this.on("upsertPrice", args)
    };
    deletePrice = (where: PriceWhereUniqueInput) => {
        return this.on("deletePrice", where)
    };
    deleteManyPrices = (where?: PriceWhereInput) => {
        return this.on("deleteManyPrices", where)
    };
    createPromotion = (data: PromotionCreateInput) => {
        return this.on("createPromotion", data)
    };
    updatePromotion = (args: { data: PromotionUpdateInput; where: PromotionWhereUniqueInput }) => {
        return this.on("updatePromotion", args)
    };
    updateManyPromotions = (args: {
        data: PromotionUpdateManyMutationInput;
        where?: PromotionWhereInput;
    }) => {
        return this.on("updateManyPromotions", args)
    };
    upsertPromotion = (args: {
        where: PromotionWhereUniqueInput;
        create: PromotionCreateInput;
        update: PromotionUpdateInput;
    }) => {
        return this.on("upsertPromotion", args)
    };
    deletePromotion = (where: PromotionWhereUniqueInput) => {
        return this.on("deletePromotion", where)
    };
    deleteManyPromotions = (where?: PromotionWhereInput) => {
        return this.on("deleteManyPromotions", where)
    };
    createPublishTimeline = (data: PublishTimelineCreateInput) => {
        return this.on("createPublishTimeline", data)
    };
    updateManyPublishTimelines = (args: {
        data: PublishTimelineUpdateManyMutationInput;
        where?: PublishTimelineWhereInput;
    }) => {
        return this.on("updateManyPublishTimelines", args)
    };
    deleteManyPublishTimelines = (where?: PublishTimelineWhereInput) => {
        return this.on("deleteManyPublishTimelines", where)
    };
    createRemoteConfig = (data: RemoteConfigCreateInput) => {
        return this.on("createRemoteConfig", data)
    };
    updateRemoteConfig = (args: { data: RemoteConfigUpdateInput; where: RemoteConfigWhereUniqueInput }) => {
        return this.on("updateRemoteConfig", args)
    };
    updateManyRemoteConfigs = (args: {
        data: RemoteConfigUpdateManyMutationInput;
        where?: RemoteConfigWhereInput;
    }) => {
        return this.on("updateManyRemoteConfigs", args)
    };
    upsertRemoteConfig = (args: {
        where: RemoteConfigWhereUniqueInput;
        create: RemoteConfigCreateInput;
        update: RemoteConfigUpdateInput;
    }) => {
        return this.on("upsertRemoteConfig", args)
    };
    deleteRemoteConfig = (where: RemoteConfigWhereUniqueInput) => {
        return this.on("deleteRemoteConfig", where)
    };
    deleteManyRemoteConfigs = (where?: RemoteConfigWhereInput) => {
        return this.on("deleteManyRemoteConfigs", where)
    };
    createRevenueSharing = (data: RevenueSharingCreateInput) => {
        return this.on("createRevenueSharing", data)
    };
    updateRevenueSharing = (args: {
        data: RevenueSharingUpdateInput;
        where: RevenueSharingWhereUniqueInput;
    }) => {
        return this.on("updateRevenueSharing", args)
    };
    updateManyRevenueSharings = (args: {
        data: RevenueSharingUpdateManyMutationInput;
        where?: RevenueSharingWhereInput;
    }) => {
        return this.on("updateManyRevenueSharings", args)
    };
    upsertRevenueSharing = (args: {
        where: RevenueSharingWhereUniqueInput;
        create: RevenueSharingCreateInput;
        update: RevenueSharingUpdateInput;
    }) => {
        return this.on("upsertRevenueSharing", args)
    };
    deleteRevenueSharing = (where: RevenueSharingWhereUniqueInput) => {
        return this.on("deleteRevenueSharing", where)
    };
    deleteManyRevenueSharings = (where?: RevenueSharingWhereInput) => {
        return this.on("deleteManyRevenueSharings", where)
    };
    createShelf = (data: ShelfCreateInput) => {
        return this.on("createShelf", data)
    };
    updateShelf = (args: { data: ShelfUpdateInput; where: ShelfWhereUniqueInput }) => {
        return this.on("updateShelf", args)
    };
    updateManyShelves = (args: { data: ShelfUpdateManyMutationInput; where?: ShelfWhereInput }) => {
        return this.on("updateManyShelves", args)
    };
    upsertShelf = (args: {
        where: ShelfWhereUniqueInput;
        create: ShelfCreateInput;
        update: ShelfUpdateInput;
    }) => {
        return this.on("upsertShelf", args)
    };
    deleteShelf = (where: ShelfWhereUniqueInput) => {
        return this.on("deleteShelf", where)
    };
    deleteManyShelves = (where?: ShelfWhereInput) => {
        return this.on("deleteManyShelves", where)
    };
    createSystemConfig = (data: SystemConfigCreateInput) => {
        return this.on("createSystemConfig", data)
    };
    updateSystemConfig = (args: { data: SystemConfigUpdateInput; where: SystemConfigWhereUniqueInput }) => {
        return this.on("updateSystemConfig", args)
    };
    updateManySystemConfigs = (args: {
        data: SystemConfigUpdateManyMutationInput;
        where?: SystemConfigWhereInput;
    }) => {
        return this.on("updateManySystemConfigs", args)
    };
    upsertSystemConfig = (args: {
        where: SystemConfigWhereUniqueInput;
        create: SystemConfigCreateInput;
        update: SystemConfigUpdateInput;
    }) => {
        return this.on("upsertSystemConfig", args)
    };
    deleteSystemConfig = (where: SystemConfigWhereUniqueInput) => {
        return this.on("deleteSystemConfig", where)
    };
    deleteManySystemConfigs = (where?: SystemConfigWhereInput) => {
        return this.on("deleteManySystemConfigs", where)
    };
    createTransaction = (data: TransactionCreateInput) => {
        return this.on("createTransaction", data)
    };
    updateTransaction = (args: { data: TransactionUpdateInput; where: TransactionWhereUniqueInput }) => {
        return this.on("updateTransaction", args)
    };
    updateManyTransactions = (args: {
        data: TransactionUpdateManyMutationInput;
        where?: TransactionWhereInput;
    }) => {
        return this.on("updateManyTransactions", args)
    };
    upsertTransaction = (args: {
        where: TransactionWhereUniqueInput;
        create: TransactionCreateInput;
        update: TransactionUpdateInput;
    }) => {
        return this.on("upsertTransaction", args)
    };
    deleteTransaction = (where: TransactionWhereUniqueInput) => {
        return this.on("deleteTransaction", where)
    };
    deleteManyTransactions = (where?: TransactionWhereInput) => {
        return this.on("deleteManyTransactions", where)
    };
    createTranslator = (data: TranslatorCreateInput) => {
        return this.on("createTranslator", data)
    };
    updateTranslator = (args: { data: TranslatorUpdateInput; where: TranslatorWhereUniqueInput }) => {
        return this.on("updateTranslator", args)
    };
    updateManyTranslators = (args: {
        data: TranslatorUpdateManyMutationInput;
        where?: TranslatorWhereInput;
    }) => {
        return this.on("updateManyTranslators", args)
    };
    upsertTranslator = (args: {
        where: TranslatorWhereUniqueInput;
        create: TranslatorCreateInput;
        update: TranslatorUpdateInput;
    }) => {
        return this.on("upsertTranslator", args)
    };
    deleteTranslator = (where: TranslatorWhereUniqueInput) => {
        return this.on("deleteTranslator", where)
    };
    deleteManyTranslators = (where?: TranslatorWhereInput) => {
        return this.on("deleteManyTranslators", where)
    };
    createUser = (data: UserCreateInput) => {
        return this.on("createUser", data)
    };
    updateUser = (args: { data: UserUpdateInput; where: UserWhereUniqueInput }) => {
        return this.on("updateUser", args)
    };
    updateManyUsers = (args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }) => {
        return this.on("updateManyUsers", args)
    };
    upsertUser = (args: {
        where: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
    }) => {
        return this.on("upsertUser", args)
    };
    deleteUser = (where: UserWhereUniqueInput) => {
        return this.on("deleteUser", where)
    };
    deleteManyUsers = (where?: UserWhereInput) => {
        return this.on("deleteManyUsers", where)
    };
    createUserAdmin = (data: UserAdminCreateInput) => {
        return this.on("createUserAdmin", data)
    };
    updateUserAdmin = (args: { data: UserAdminUpdateInput; where: UserAdminWhereUniqueInput }) => {
        return this.on("updateUserAdmin", args)
    };
    updateManyUserAdmins = (args: {
        data: UserAdminUpdateManyMutationInput;
        where?: UserAdminWhereInput;
    }) => {
        return this.on("updateManyUserAdmins", args)
    };
    upsertUserAdmin = (args: {
        where: UserAdminWhereUniqueInput;
        create: UserAdminCreateInput;
        update: UserAdminUpdateInput;
    }) => {
        return this.on("upsertUserAdmin", args)
    };
    deleteUserAdmin = (where: UserAdminWhereUniqueInput) => {
        return this.on("deleteUserAdmin", where)
    };
    deleteManyUserAdmins = (where?: UserAdminWhereInput) => {
        return this.on("deleteManyUserAdmins", where)
    };
    createUserAdminPermission = (data: UserAdminPermissionCreateInput) => {
        return this.on("createUserAdminPermission", data)
    };
    updateUserAdminPermission = (args: {
        data: UserAdminPermissionUpdateInput;
        where: UserAdminPermissionWhereUniqueInput;
    }) => {
        return this.on("updateUserAdminPermission", args)
    };
    updateManyUserAdminPermissions = (args: {
        data: UserAdminPermissionUpdateManyMutationInput;
        where?: UserAdminPermissionWhereInput;
    }) => {
        return this.on("updateManyUserAdminPermissions", args)
    };
    upsertUserAdminPermission = (args: {
        where: UserAdminPermissionWhereUniqueInput;
        create: UserAdminPermissionCreateInput;
        update: UserAdminPermissionUpdateInput;
    }) => {
        return this.on("upsertUserAdminPermission", args)
    };
    deleteUserAdminPermission = (where: UserAdminPermissionWhereUniqueInput) => {
        return this.on("deleteUserAdminPermission", where)
    };
    deleteManyUserAdminPermissions = (where?: UserAdminPermissionWhereInput) => {
        return this.on("deleteManyUserAdminPermissions", where)
    };
    createUserAdminRole = (data: UserAdminRoleCreateInput) => {
        return this.on("createUserAdminRole", data)
    };
    updateUserAdminRole = (args: {
        data: UserAdminRoleUpdateInput;
        where: UserAdminRoleWhereUniqueInput;
    }) => {
        return this.on("updateUserAdminRole", args)
    };
    updateManyUserAdminRoles = (args: {
        data: UserAdminRoleUpdateManyMutationInput;
        where?: UserAdminRoleWhereInput;
    }) => {
        return this.on("updateManyUserAdminRoles", args)
    };
    upsertUserAdminRole = (args: {
        where: UserAdminRoleWhereUniqueInput;
        create: UserAdminRoleCreateInput;
        update: UserAdminRoleUpdateInput;
    }) => {
        return this.on("upsertUserAdminRole", args)
    };
    deleteUserAdminRole = (where: UserAdminRoleWhereUniqueInput) => {
        return this.on("deleteUserAdminRole", where)
    };
    deleteManyUserAdminRoles = (where?: UserAdminRoleWhereInput) => {
        return this.on("deleteManyUserAdminRoles", where)
    };
    createVendor = (data: VendorCreateInput) => {
        return this.on("createVendor", data)
    };
    updateVendor = (args: { data: VendorUpdateInput; where: VendorWhereUniqueInput }) => {
        return this.on("updateVendor", args)
    };
    updateManyVendors = (args: { data: VendorUpdateManyMutationInput; where?: VendorWhereInput }) => {
        return this.on("updateManyVendors", args)
    };
    upsertVendor = (args: {
        where: VendorWhereUniqueInput;
        create: VendorCreateInput;
        update: VendorUpdateInput;
    }) => {
        return this.on("upsertVendor", args)
    };
    deleteVendor = (where: VendorWhereUniqueInput) => {
        return this.on("deleteVendor", where)
    };
    deleteManyVendors = (where?: VendorWhereInput) => {
        return this.on("deleteManyVendors", where)
    };
    createVendorBillingInformation = (data: VendorBillingInformationCreateInput) => {
        return this.on("createVendorBillingInformation", data)
    };
    updateVendorBillingInformation = (args: {
        data: VendorBillingInformationUpdateInput;
        where: VendorBillingInformationWhereUniqueInput;
    }) => {
        return this.on("updateVendorBillingInformation", args)
    };
    updateManyVendorBillingInformations = (args: {
        data: VendorBillingInformationUpdateManyMutationInput;
        where?: VendorBillingInformationWhereInput;
    }) => {
        return this.on("updateManyVendorBillingInformations", args)
    };
    upsertVendorBillingInformation = (args: {
        where: VendorBillingInformationWhereUniqueInput;
        create: VendorBillingInformationCreateInput;
        update: VendorBillingInformationUpdateInput;
    }) => {
        return this.on("upsertVendorBillingInformation", args)
    };
    deleteVendorBillingInformation = (where: VendorBillingInformationWhereUniqueInput) => {
        return this.on("deleteVendorBillingInformation", where)
    };
    deleteManyVendorBillingInformations = (where?: VendorBillingInformationWhereInput) => {
        return this.on("deleteManyVendorBillingInformations", where)
    };
    createVendorRevenue = (data: VendorRevenueCreateInput) => {
        return this.on("createVendorRevenue", data)
    };
    updateVendorRevenue = (args: {
        data: VendorRevenueUpdateInput;
        where: VendorRevenueWhereUniqueInput;
    }) => {
        return this.on("updateVendorRevenue", args)
    };
    updateManyVendorRevenues = (args: {
        data: VendorRevenueUpdateManyMutationInput;
        where?: VendorRevenueWhereInput;
    }) => {
        return this.on("updateManyVendorRevenues", args)
    };
    upsertVendorRevenue = (args: {
        where: VendorRevenueWhereUniqueInput;
        create: VendorRevenueCreateInput;
        update: VendorRevenueUpdateInput;
    }) => {
        return this.on("upsertVendorRevenue", args)
    };
    deleteVendorRevenue = (where: VendorRevenueWhereUniqueInput) => {
        return this.on("deleteVendorRevenue", where)
    };
    deleteManyVendorRevenues = (where?: VendorRevenueWhereInput) => {
        return this.on("deleteManyVendorRevenues", where)
    };
    /**
     * Subscriptions
     */
    $subscribe: Subscription;
}
