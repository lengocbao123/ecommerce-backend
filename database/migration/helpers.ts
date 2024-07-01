import { OPTIONS, PRODUCTS } from './constants';
import { faker } from '@faker-js/faker';

export const createProductQuery = () => {
  let statement = `INSERT INTO public.product(id, name, image, price, category_id) VALUES\n`;
  const sub: string[] = [];
  PRODUCTS.forEach((product) => {
    sub.push(
      `(${product.id}, '${product.name}', '${product.image}', ${product.price} ,${product.categoryId})`,
    );
  });
  statement += sub.join(',\n') + ';\n';

  return statement;
};
export const createOptionQuery = () => {
  let statement = `INSERT INTO public."option" (id, name) VALUES\n`;
  const sub: string[] = [];
  OPTIONS.forEach((option) => {
    sub.push(`(${option.id},'${option.name}')`);
  });
  statement += sub.join(',\n') + ';\n';

  return statement;
};
export const createOptionValueQuery = () => {
  let statement = `INSERT INTO public."option_value" (id, option_id, name) VALUES\n`;
  const sub: string[] = [];
  OPTIONS.forEach((option) => {
    option.values.forEach((value) => {
      sub.push(`(${value.id}, ${option.id},'${value.name}')`);
    });
  });
  statement += sub.join(',\n') + ';\n';

  return statement;
};

export const createProductOptionQuery = () => {
  let statement = `INSERT INTO "product_option" ("product_id", "option_id") VALUES\n`;
  const sub: string[] = [];
  PRODUCTS.forEach((product) => {
    OPTIONS.forEach((option) => {
      sub.push(`(${product.id},${option.id})`);
    });
  });
  statement += sub.join(',\n') + ';\n';

  return statement;
};

export const createProductVariantQuery = () => {
  let statement = `INSERT INTO "product_variant" ("product_id", "price", quantity, image ) VALUES\n`;
  const sub: string[] = [];
  const numberOfProductVariant = countNumberOfProductVariant();
  PRODUCTS.forEach((product) => {
    Array.from({ length: numberOfProductVariant }).forEach(() => {
      sub.push(
        `(${product.id}, ${faker.number.int({ min: 25, max: 40 })}, ${faker.number.int({ min: 20, max: 30 })},'${product.image}')`,
      );
    });
  });
  statement += sub.join(',\n') + ';\n';

  return statement;
};

export const createVariantValueQuery = () => {
  let statement = `INSERT INTO "variant_value" (product_id, variant_id, option_id, value_id ) VALUES\n`;
  const sub: string[] = [];
  const variants = [];
  const numberOfProductVariant = countNumberOfProductVariant();
  PRODUCTS.forEach((product) => {
    Array.from({ length: numberOfProductVariant }).forEach(() => {
      variants.push({
        productId: product.id,
      });
    });
  });

  const values = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    for (const sizeOption of OPTIONS[0].values) {
      for (const colorOption of OPTIONS[1].values) {
        values.push([sizeOption.id, colorOption.id]);
      }
    }
  }

  const variantOptions = [];
  variants.forEach((variant, index) => {
    OPTIONS.forEach((option) => {
      variantOptions.push({
        id: index + 1,
        productId: variant.productId,
        variantId: index + 1,
        optionId: option.id,
      });
    });
  });
  const variantValues = variantOptions.map((v, index) => ({
    ...v,
    valueId: values.flat()[index],
  }));
  variantValues.forEach((value) => {
    sub.push(
      `(${value.productId},${value.variantId}, ${value.optionId}, ${value.valueId})`,
    );
  });
  statement += sub.join(',\n') + ';\n';

  return statement;
};

function countNumberOfProductVariant() {
  let count = 1;

  for (const option of OPTIONS) {
    count = count * option.values.length;
  }

  return count;
}
