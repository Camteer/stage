
import { Button, CardBlogUI, Input } from "@ui";
import { Container } from "../container";
import { Title } from "../title";
import { cn } from "@/lib/utils";


export const CardBlog = ({}) => {
  const cardData = [
    {
      id: "1",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/51b0/31c3/998584d16cf08fb36903683686013ef1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRe612gNALNTTucZqnOBfT7zWfrqfTW87YQv0d7vQs~kPPyA54qqXctEYm7yPTUmDOnwUhrFb2G~ZilK8PITbFaLfZls1cb5DeosyQL1QyP8ImfXWW5I7LUJA71MoWc7IabEPcdmzqXOxk70nDjvNtrsfU08CobZF~9QPhsJB51~XNcr3qYEfY1e1vE-9haPQwik6jKfz2Cye79wneZ9mCPgEiZOUT0UexUBEDThdPpq4Uzswn2RwmukyJOAAg2ELeSFnzu4GvxwZDeYb-b4RSn~bKPzxHIxdIw3IvXPVijrZ0MzLJv0Gh1NzqobEaEZjgw42YhSUyk1u3yznzG4Sw__",
      title: "КРОССОВКИ NIKE AIR MAX 270",
      description:
        "Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.",
      date: "15 августа 2019",
      view: 4234,
    },
    {
      id: "1",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/51b0/31c3/998584d16cf08fb36903683686013ef1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRe612gNALNTTucZqnOBfT7zWfrqfTW87YQv0d7vQs~kPPyA54qqXctEYm7yPTUmDOnwUhrFb2G~ZilK8PITbFaLfZls1cb5DeosyQL1QyP8ImfXWW5I7LUJA71MoWc7IabEPcdmzqXOxk70nDjvNtrsfU08CobZF~9QPhsJB51~XNcr3qYEfY1e1vE-9haPQwik6jKfz2Cye79wneZ9mCPgEiZOUT0UexUBEDThdPpq4Uzswn2RwmukyJOAAg2ELeSFnzu4GvxwZDeYb-b4RSn~bKPzxHIxdIw3IvXPVijrZ0MzLJv0Gh1NzqobEaEZjgw42YhSUyk1u3yznzG4Sw__",
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
