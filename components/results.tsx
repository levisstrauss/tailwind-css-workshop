import Image from "next/image";
import {Heart, Star} from "lucide-react";
import {Button} from "@/components/ui/button";


const Item = ({image, title, price}: any) => {
    return (
        <div className="bg-white p-3 rounded-md drop-shadow-lg flex gap-x-3">
            <Image
                src={image}
                alt=""
                height={100}
                width={100}
                className="rounded-md"
            />
            <div className="flex w-full flex-col">
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-xl">{title}</p>
                        <Heart className="h-5 w-5"/>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="flex items-center text-sm">
                            <Star className="h-4 w-4 mr-1 stroke-blue-500 fill-sky-400"/>
                            4.9&nbsp;<span className="text-muted-foreground">(75)</span>
                        </div>
                        <p className="text=sm">
                            2.2 km
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-xl">
                            ${price}
                        </p>
                        <Button>
                            Details
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Results = () => {
    return (
        <div className="bg-[#F4F6F9] rounded-xl p-6 space-y-4">
          <Item
           image="/image3.jpg"
           title="Gostone"
           price="300"
          />
        <Item
            image="/image2.jpg"
            title="Gostone"
            price="300"
        />
        <Item
            image="/image3.jpg"
            title="Gostone"
            price="300"
        />
        <Item
            image="/image2.jpg"
            title="Gostone"
            price="300"
        />
            <Item
                image="/image2.jpg"
                title="Gostone"
                price="300"
            />
        </div>
    )
}
