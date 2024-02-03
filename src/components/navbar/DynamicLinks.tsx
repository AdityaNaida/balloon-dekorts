import Link from "next/link";

interface DynamicLink {
    title: string;
    path: string;
}

interface DynamicLinksProps {
    offMenu: () => void;
}

const DynamicLinks: React.FC<DynamicLinksProps> = ({ offMenu }) => {
    const dynamicLinks: DynamicLink[] = [
        {
            title: "Flower",
            path: "/dynamic",
        },
        {
            title: "Combos",
            path: "/dynamic",
        },
        {
            title: "Cakes",
            path: "/dynamic",
        },
        {
            title: "Decoration",
            path: "/dynamic",
        },
        {
            title: "Birthday",
            path: "/dynamic",
        },
        {
            title: "Anniversary",
            path: "/dynamic",
        },
        {
            title: "Plants",
            path: "/dynamic",
        },
    ];

    return (
        <>
            {dynamicLinks.map((elem) => (
                <Link href={elem.path} key={elem.title}>
                    {elem.title}
                </Link>
            ))}
        </>
    );
};

export default DynamicLinks;
