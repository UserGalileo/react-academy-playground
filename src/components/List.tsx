import { Product } from '../models/product';
import css from '../App.module.css';

interface ListProps {
  products: Product[]
}

export function List(props: ListProps) {
  return <>
    <ul>{
      props.products.map(product => (
          <li key={product.id}>{product.name}</li>
      ))
    }</ul>
  </>
}
