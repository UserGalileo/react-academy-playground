import { Product } from '../models/product';

interface ListProps {
  products: Product[]
}

export function List(props: ListProps) {
  return <ul>{
    props.products.map(product => (
        <li key={product.id}>{product.name}</li>
    ))
  }</ul>
}
