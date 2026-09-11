import ProductGridPage from "@/components/ProductGridPage";

const CategoryPage = async ({ params }) => {
  const { category } = await params;
  return (
    <ProductGridPage
      filterType="category" // Le decimos que filtre por 'category'
      filterValue={category} // Le pasamos el valor de la URL
      titlePrefix="Categoría"
      descriptionText="Descubrí nuestra selección exclusiva de zapatillas en esta categoría."
    />
  );
};

export default CategoryPage;
