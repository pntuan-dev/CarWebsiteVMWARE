import vinfastDataRaw from '@/data/vinfast.json';
import {
  CarSegment,
  IBannerItem,
  IEcosystemItem,
  IPromotionItem,
  IVinFastCar,
  IVinFastData,
  IVinFastMotorbike,
} from '@/types/vinfast';

const vinfastData = vinfastDataRaw as unknown as IVinFastData;

export class VinFastService {
  /**
   * Lấy toàn bộ dữ liệu trang chủ VinFast
   */
  public static async getHomeData(): Promise<IVinFastData> {
    return vinfastData;
  }

  /**
   * Lấy danh sách banner hero slider
   */
  public static async getBanners(): Promise<IBannerItem[]> {
    return vinfastData.banners;
  }

  /**
   * Lấy danh sách ô tô điện theo phân khúc
   */
  public static async getCars(segment: CarSegment = 'all'): Promise<IVinFastCar[]> {
    if (segment === 'all') {
      return vinfastData.cars;
    }
    return vinfastData.cars.filter((car) => car.segment === segment);
  }

  /**
   * Lấy thông tin chi tiết ô tô theo slug
   */
  public static async getCarBySlug(slug: string): Promise<IVinFastCar | undefined> {
    return vinfastData.cars.find((car) => car.slug === slug);
  }

  /**
   * Lấy danh sách xe máy điện
   */
  public static async getMotorbikes(): Promise<IVinFastMotorbike[]> {
    return vinfastData.motorbikes;
  }

  /**
   * Lấy danh sách hệ sinh thái & trạm sạc
   */
  public static async getEcosystem(): Promise<IEcosystemItem[]> {
    return vinfastData.ecosystem;
  }

  /**
   * Lấy danh sách chương trình ưu đãi
   */
  public static async getPromotions(): Promise<IPromotionItem[]> {
    return vinfastData.promotions;
  }
}
