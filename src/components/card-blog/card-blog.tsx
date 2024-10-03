
import { Button, CardBlogUI, Input } from "@ui";
import { Container } from "../container";
import { Title } from "../title";
import { cn } from "@/lib/utils";


export const CardBlog = ({}) => {
  const cardData = [
    {
      id: "1",
      imageUrl:
        'https://dummyimage.com/600x400/cc0ecc/00ff95',
      title: "КРОССОВКИ NIKE AIR MAX 270",
      description:
        "Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.",
      date: "15 августа 2019",
      view: 4234,
    },
    {
      id: "1",
      imageUrl:
        "https://dummyimage.com/600x400/cc0ecc/00ff95",
      title: "КРОССОВКИ NIKE AIR MAX 270",
      description:
        "Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.",
      date: "15 августа 2019",
      view: 4324,
    },
  ];

  return (
    <>
      <Container className="flex-col">
        <Title title={"Блог"} />
        <div className={cn("flex mt-[50px] min-w-[50%] gap-4")}>
          <div className={cn("flex flex-col gap-10")}>
            {cardData.map((item, index) => (
              <CardBlogUI
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                date={item.date}
                view={item.view}
                description={item.description}
              />
            ))}
          </div>
          <div
            className={cn(
              "min-w-[50%] rounded-[20px] bg-[#29292D] shadow-lg max-h-full shadow-[#165cbf6b] hover:scale-[1.01] transition-all"
            )}
          >
            <Title
              title={"Подпишись на рассылку и получи скидку  до 10 %  "}
              className={cn(
                "text-[24px] landing-[29.26px] my-[29px] mx-[64px] text-white font-[900] "
              )}
            />
            <div className="bg-white w-full h-[260px] rounded-[20px]  flex justify-center items-center">
              <div className="flex w-full max-w-sm ">
                <Input
                  className={
                    "hover:border-black transition-hover w-[500px] focus:border-black ease-in-out border"
                  }
                  type="email"
                  placeholder="Введите ваш email"
                />
                <Button variant={"search"} className="w-[300px]" type="submit">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
