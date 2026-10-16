type ProductStatus = "available" | "sold-out" | "preorder"



interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  description?: string;
  status: ProductStatus;
}

const a:Product = {
  id: 1,
  title: "Product A",
  price: 10.99,
  inStock: true,
  description: 'This is a sample product',
  status: "available"
}

const b:Product = {
  id: 2,
  title: "Product B",
  price: 15.99,
  inStock: false,
  status: "sold-out"
}

function getProductLabel(product: Product): string {
  // Повернути рядок: "Laptop — 1200"
  return `${product.title} — ${product.price}`;
}

function getProductStatus(product: Product): string {
  switch (product.status) {
    case "available":
      return "Product is available";
    case "sold-out":
      return "Product is sold out";
    case "preorder":
      return "Product is available for preorder";
    default:
      return "Unknown status";
  }
}

function formatId(id: string | number): string {
  if(typeof id === "number") {
    return `ID: ${id}`;
  }
  return id.toUpperCase();
}

function formatProductDescription(product: Product): string {
  if(typeof product.description === "string") {
    return product.description.toUpperCase();
  }
  return "No description available";
}

function getLast<T>(items: T[]): T | undefined {
  const lastItem = items[items.length - 1];
  switch (typeof lastItem) {
    case "string":
      return lastItem.toUpperCase() as T;
    case "number":
      return (lastItem * 2) as T;
    default:
      return lastItem;
  }
}