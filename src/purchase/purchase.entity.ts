import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  OneToOne,
} from '@mikro-orm/core';
import { User } from '../user/user.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Purchase {
  @PrimaryKey()
  id: string = crypto.randomUUID();

  @Property({ onCreate: () => new Date() })
  createdAt?: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt?: Date = new Date();

  @ManyToOne(() => User)
  buyer!: User;

  @OneToOne(() => Product)
  product!: Product;
}
