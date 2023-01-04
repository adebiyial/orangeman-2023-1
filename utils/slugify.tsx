import _ from 'slugify';

export function slugify(text: string) {
  return _(text, {
    lower: true,
    remove: /[,*+~.?()'"!:@]/g,
  });
}
