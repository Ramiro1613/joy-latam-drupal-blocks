import ProductDesktopCarousel from "../components/productDesktopCarousel";
import ProductMobileCarousel from "../components/productMobileCarousel";
import JoyLatamMarquee from "../interfaces/joy_latam_marquee";

interface IndexPageProps {
  data: JoyLatamMarquee | undefined;
}

export default function ProductsGallerySection({ data }: IndexPageProps) {
  return (
    <div>
      <div className="hidden lg:block ">
        <ProductDesktopCarousel data={data} />
      </div>
      <br />
      <div className="block lg:hidden">
        <ProductMobileCarousel data={data} />
      </div>
    </div>
  );
}
