import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


interface CustomSkeletonProps extends SkeletonProps {
    width?: number | string;
    height?: number | string;
    count?: number;
    circle?: boolean;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = (props) => {
    return (
        <Skeleton
            baseColor="#3A3B3C"
            highlightColor="#505153"
            {...props}
        />
    );
};

export default CustomSkeleton;
