import { CreateCartItemValues} from "@/lib/types";

export type TProductUIProps = {
    id: number;
    title: string;
    article: number;
    images: string[];
    prise: number;
    sizes: number[];
    categories: string;
    model: string;
    season: string;
    color: string;
    description: string;
    addItem: (data: CreateCartItemValues) => void;
    about: string;
}