import { Container } from "@/components";
import Catalog from "@/components/catalog/catalog";
import { redirect } from "next/navigation";

export default function CatalogBrend({
  params,
}: {
  params: { type: "sneakers" | "accessories" | "clothes" };
}) {

  if (params.type != "accessories")
  if (params.type != "clothes")
  if (params.type != "sneakers") {
    redirect('/')
  } 

  return (
    <>
      <Container>
        <Catalog type={params.type}></Catalog>
      </Container>
    </>
  );
}
