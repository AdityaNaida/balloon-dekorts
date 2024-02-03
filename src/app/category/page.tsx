import CategoryHeading from "@/components/category/CategoryHeading";
import Categoryupper from "@/components/category/Categoryupper";
import CategoryProducts from '@/components/category/CategoryProducts';

const Category: React.FC = () => {
    return (
        <>
            <CategoryHeading />
            <Categoryupper />
            <CategoryProducts />
        </>
    );
}

export default Category;
